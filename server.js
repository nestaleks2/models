const express = require('express')
const multer = require('multer')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())

const IMG_ROOT = path.join(__dirname, 'img')
const MODELS_FILE = path.join(__dirname, 'models.json')

// Serve static images
app.use('/img', express.static(IMG_ROOT))

// Helper: ensure folder exists
function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}

// GET models (if models.json exists)
app.get('/api/models', (req, res) => {
  if (!fs.existsSync(MODELS_FILE)) {
    return res.status(404).json({ error: 'models.json not found' })
  }
  try {
    const data = JSON.parse(fs.readFileSync(MODELS_FILE, 'utf8'))
    res.json(data)
  } catch (e) {
    res.status(500).json({ error: 'failed to read models.json' })
  }
})

// POST upsert a single model
app.post('/api/models/:id', (req, res) => {
  const id = Number(req.params.id)
  const model = req.body
  let arr = []
  if (fs.existsSync(MODELS_FILE)) {
    try { arr = JSON.parse(fs.readFileSync(MODELS_FILE, 'utf8')) } catch (e) { arr = [] }
  }
  const idx = arr.findIndex(m => m.id === id)
  if (idx >= 0) arr[idx] = model
  else arr.push(model)
  try {
    fs.writeFileSync(MODELS_FILE, JSON.stringify(arr, null, 2), 'utf8')
    res.json({ success: true, model })
  } catch (e) {
    res.status(500).json({ error: 'failed to write models.json' })
  }
})

// List images for model
app.get('/api/models/:id/images', (req, res) => {
  const id = req.params.id
  const dir = path.join(IMG_ROOT, 'models', String(id))
  if (!fs.existsSync(dir)) return res.json([])
  try {
    const files = fs.readdirSync(dir).filter(f => !f.startsWith('.'))
    const urls = files.map(f => `/img/models/${id}/${encodeURIComponent(f)}`)
    res.json(urls)
  } catch (e) {
    res.status(500).json({ error: 'failed to read images' })
  }
})

// Upload images
app.post('/api/models/:id/upload', (req, res) => {
  const id = String(req.params.id)
  const uploadDir = path.join(IMG_ROOT, 'models', id)
  ensureDir(uploadDir)

  const storage = multer.diskStorage({
    destination: function (req, file, cb) { cb(null, uploadDir) },
    filename: function (req, file, cb) {
      // keep original name but avoid collisions by prefixing timestamp
      const unique = `${Date.now()}-${file.originalname}`
      cb(null, unique)
    }
  })

  const upload = multer({ storage }).array('photos', 20)

  upload(req, res, function (err) {
    if (err) return res.status(500).json({ error: 'upload error', details: err })
    const files = (req.files || []).map(f => `/img/models/${id}/${encodeURIComponent(path.basename(f.path))}`)
    res.json({ success: true, files })
  })
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`))
