export async function getAshleyMedia() {
  try {
    const ashleyModules = import.meta.glob('../img/special/ashley/*.{png,jpg,jpeg,gif,svg,mp4,webm,mov}', { eager: true });
    
    console.log('Ashley modules:', ashleyModules);
    
    const folderMedia = Object.entries(ashleyModules)
      .map(([path, module]) => {
        const fileName = path.split('/').pop();
        const fileExtension = fileName.split('.').pop().toLowerCase();
        const isVideo = ['mp4', 'webm', 'mov'].includes(fileExtension);
        
        console.log(`Processing Ashley: ${fileName}, type: ${isVideo ? 'video' : 'image'}, src:`, module.default);
        
        return {
          type: isVideo ? 'video' : 'image',
          src: module.default,
          alt: fileName,
          name: fileName
        };
      })
      .sort((a, b) => a.name.localeCompare(b.name));
    
    console.log(`Found ${folderMedia.length} Ashley items:`, folderMedia);
    return folderMedia;
  } catch (error) {
    console.error('Не удалось загрузить Ashley медиа:', error);
    return [];
  }
}

export async function getAthenaMedia() {
  try {
    const athenaModules = import.meta.glob('../img/special/athena/*.{png,jpg,jpeg,gif,svg,mp4,webm,mov}', { eager: true });
    
    console.log('Athena modules:', athenaModules);
    
    const folderMedia = Object.entries(athenaModules)
      .map(([path, module]) => {
        const fileName = path.split('/').pop();
        const fileExtension = fileName.split('.').pop().toLowerCase();
        const isVideo = ['mp4', 'webm', 'mov'].includes(fileExtension);
        
        console.log(`Processing Athena: ${fileName}, type: ${isVideo ? 'video' : 'image'}, src:`, module.default);
        
        return {
          type: isVideo ? 'video' : 'image',
          src: module.default,
          alt: fileName,
          name: fileName
        };
      })
      .sort((a, b) => a.name.localeCompare(b.name));
    
    console.log(`Found ${folderMedia.length} Athena items:`, folderMedia);
    return folderMedia;
  } catch (error) {
    console.error('Не удалось загрузить Athena медиа:', error);
    return [];
  }
}