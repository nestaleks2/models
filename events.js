const events = [
{
    id: 1,
    season: "April",
    event: "Malibu Surf Competition",
    location: "Surfrider Beach, Malibu, California",
    details: "Participating in surf competitions; beach yoga at sunrise; meeting professional surfers; evening beach barbecue; photoshoot with surfboard",
    clothing: "Stylish neoprene surfing wetsuit; minimalist bikini; light beach dresses; flat sandals",
    photoLocation: "On surfboard in the ocean; on beach with board at sunrise; by bonfire at beach party",
    adultIdea: "Artistic beach photoshoot in 'surfer girl' style with wet wetsuit (18+)"
},
{
    id: 2,
    season: "June",
    event: "Bali Yoga Retreat",
    location: "Ubud, Bali, Indonesia",
    details: "7-day yoga retreat; meditation in rice fields; spa treatments with local oils; studying Balinese culture; visiting waterfalls",
    clothing: "Light yoga sets in neutral tones; linen dresses; comfortable sandals; minimal jewelry",
    photoLocation: "In yoga pose at sunrise in rice terraces; at waterfall; in spa center",
    adultIdea: "Zen session of nude yoga in private bungalow among jungle (21+)"
},
{
    id: 3,
    season: "September",
    event: "Tokyo Fashion Week",
    location: "Shibuya, Tokyo, Japan",
    details: "Shows of minimalist Japanese brands; visiting concept stores in Harajuku; traditional tea ceremony; photos in neon city districts",
    clothing: "Avant-garde minimalist outfits; classic kimono for tea ceremony; stylish streetwear",
    photoLocation: "On runway; in neon lights of Shibuya; in traditional tea house",
    adultIdea: "Fashion boudoir shoot in Japanese minimalist style with play of light and shadow (18+)"
},
{
    id: 4,
    season: "January",
    event: "St. Moritz Winter Glamour",
    location: "St. Moritz, Swiss Alps",
    details: "Elite ski resort; skiing; après-ski parties; Alpine-style spa; snow photoshoots",
    clothing: "Stylish luxury ski equipment; elegant winter coats; après-ski outfits; designer winter accessories",
    photoLocation: "On ski slope; by fireplace in chalet; on snowy Alpine peaks",
    adultIdea: "Intimate winter photoshoot in chalet with contrast of warm interior and cold snow (21+)"
},
{
    id: 5,
    season: "October",
    event: "Santorini Sunset Festival",
    location: "Oia, Santorini, Greece",
    details: "Music festival at sunset; Greek wine tasting; walks through white streets; sea excursions; Greek cuisine",
    clothing: "Flowing white dresses in Greek style; light tunics; flat sandals; minimalist gold jewelry",
    photoLocation: "Against famous white houses of Oia; by sea at sunset; in vineyard",
    adultIdea: "Mediterranean goddess with drapery in ancient style on private terrace (18+)"
},
{
    id: 6,
    season: "April",
    event: "Cherry Blossom Festival Seoul",
    location: "Yeouido Park, Seoul, South Korea",
    details: "Traditional cherry blossom festival; picnics under blooming trees; Korean traditional music; K-beauty masterclasses; evening park illumination",
    clothing: "Modern interpretation of hanbok in pastel tones; elegant spring dresses; comfortable sneakers for walks; floral hair accessories",
    photoLocation: "Among pink cherry blossom petals; in traditional Korean garden; on bridge over Han River",
    adultIdea: "Cherry blossom boudoir with soft pink tones and floral motifs (18+)"
},
{
    id: 7,
    season: "July",
    event: "Cannes Film Festival After-Party",
    location: "French Riviera, Cannes, France",
    details: "Exclusive film premieres; yacht parties; red carpet events; meetings with world stars; luxury boutique shopping",
    clothing: "High fashion by Korean designers; exquisite evening gowns; designer shoes; exclusive jewelry",
    photoLocation: "On red carpet; on luxury yacht deck; in Monte Carlo casino",
    adultIdea: "Luxury yacht photoshoot in French Riviera style with glamour elements (21+)"
},
{
    id: 8,
    season: "September",
    event: "Burning Man Festival",
    location: "Black Rock Desert, Nevada, USA",
    details: "Participating in art installations; creating temporary desert city; self-expression through costumes; sunrise yoga sessions; fire shows",
    clothing: "Creative costumes with LED lighting; body art and temporary tattoos; comfortable desert footwear; protective goggles; headwear",
    photoLocation: "At large-scale art installations; against burning 'man' backdrop; in desert camp at sunrise",
    adultIdea: "Desert mirage artistic nude with body paint under starry desert sky (21+)"
},
{
    id: 9,
    season: "December",
    event: "Northern Lights Photography Tour",
    location: "Tromsø, Northern Norway",
    details: "Northern lights hunting; dog sledding; staying in ice hotel; traditional Sami culture; Arctic spa",
    clothing: "Professional Arctic equipment; warm fur parkas; thermal underwear; winter boots; bright accessories for contrast with snow",
    photoLocation: "Under northern lights; in ice hotel; with huskies in snowy forest",
    adultIdea: "Ice queen fantasy in ice hotel with warm-cold contrast play (18+)"
},
{
    id: 10,
    season: "February",
    event: "Maldives Luxury Resort Getaway",
    location: "Conrad Maldives Rangali Island",
    details: "Underwater restaurant; dolphin snorkeling; spa treatments over ocean; private beach dinners; yacht excursions",
    clothing: "Designer bikinis and swimwear; light beach dresses; elegant resort wear outfits; sandals; sunglasses",
    photoLocation: "In underwater restaurant; on private beach; in infinity pool over ocean",
    adultIdea: "Tropical paradise boudoir in private villa with turquoise lagoon view (21+)"
},
{
    id: 11,
    season: "March",
    event: "Rio Carnival",
    location: "Sambadrome Marquês de Sapucaí, Rio de Janeiro",
    details: "Samba dancing in parade; participating in street blocos parties; visiting samba schools parties; photos with professional dancers; beach after-parties",
    clothing: "Luxurious carnival costume with feathers and sequins; high heels; massive jewelry; feathered headdress; bright glittery makeup",
    photoLocation: "At sambadrome in samba costume; at street blocos parties; on Copacabana beach during festival",
    adultIdea: "Carnival queen photoshoot with traditional Brazilian motifs and feathers (18+)"
},
{
    id: 12,
    season: "June",
    event: "Ibiza Summer Club Season",
    location: "Ibiza, Balearic Islands, Spain",
    details: "World's top DJs performances; exclusive beach clubs; sunset boat parties; VIP nightclub access; Mediterranean lifestyle",
    clothing: "Trendy clubwear and bikinis; flowing summer dresses; statement jewelry; designer sunglasses; comfortable dancing shoes",
    photoLocation: "At famous beach clubs; on sunset boat party; in VIP nightclub areas",
    adultIdea: "Ibiza goddess photoshoot with Mediterranean sunset and luxurious beach club setting (21+)"
},
{
    id: 13,
    season: "September",
    event: "Oktoberfest Munich",
    location: "Theresienwiese, Munich, Bavaria",
    details: "Traditional Bavarian festival; authentic German beer tasting; folk music and dancing; lederhosen fashion; Bavarian cuisine",
    clothing: "Traditional dirndl in Brazilian colors; decorative aprons; folk jewelry; comfortable shoes for dancing; floral hair accessories",
    photoLocation: "In beer tent with traditional dirndl; at folk dancing performances; in Munich old town",
    adultIdea: "Bavarian beauty with playful dirndl styling in authentic beer garden setting (18+)"
},
{
    id: 14,
    season: "December",
    event: "Aspen Winter Wonderland",
    location: "Aspen, Colorado, USA",
    details: "Luxury skiing resort; winter sports; exclusive aprês-ski parties; mountain spa treatments; winter photography",
    clothing: "High-end ski equipment; designer winter coats; aprês-ski outfits; fur accessories; winter boots",
    photoLocation: "On ski slopes; at luxury mountain lodge; in snowy aspen forest",
    adultIdea: "Winter spice photoshoot in luxury chalet with fireplace and mountain views (21+)"
},
{
    id: 15,
    season: "November",
    event: "Tulum Wellness Retreat",
    location: "Tulum, Quintana Roo, Mexico",
    details: "Explore ancient Mayan ruins; swim in a cenote; temazcal ceremonies; farm-to-table meals; yoga on the beach",
    clothing: "Bohemian beachwear; linen dresses in earth tones; minimal jewelry; barefoot or sandals; natural makeup",
    photoLocation: "At ancient Mayan ruins; in a cenote (underground lake); on Tulum beach at sunrise",
    adultIdea: "Tribute to the Mayan goddess in a cenote with natural light and a mystical atmosphere (18+)"
},
{
    id: 16,
    season: "September",
    event: "Art Basel Miami Beach",
    location: "Miami Beach, Florida, USA",
    details: "Contemporary art galleries; exclusive art parties; artist talks; Latin fusion cuisine; South Beach nightlife",
    clothing: "Artistic and avant-garde outfits; bright colors in Miami style; designer dresses; high heels; bold jewelry",
    photoLocation: "Against the backdrop of modern art installations; in the Art Deco district; on Miami Beach at sunset",
    adultIdea: "Art-inspired boudoir with elements of painting and bright colors on the body (18+)"
},
{
    id: 17,
    season: "July",
    event: "Reggae Sumfest Jamaica",
    location: "Montego Bay, Jamaica",
    details: "Reggae and dancehall artists performances; beach parties; Jamaican cuisine tasting; Blue Mountain coffee plantation tour; local craft shopping",
    clothing: "Colorful Rastafarian-inspired outfits; flowing tropical dresses; comfortable sandals; statement jewelry; natural hair styling",
    photoLocation: "At reggae concert stage; on Seven Mile Beach; at coffee plantation in Blue Mountains",
    adultIdea: "Caribbean goddess photoshoot with tropical vibes and beach setting (18+)"
},
{
    id: 18,
    season: "September",
    event: "Fashion Week Paris",
    location: "Grand Palais & Louvre, Paris, France",
    details: "Haute couture shows; designer boutique visits; French fashion history tours; Seine riverside photoshoots; Parisian café culture",
    clothing: "High fashion French designer pieces; classic Parisian style; designer accessories; elegant footwear; sophisticated styling",
    photoLocation: "On Paris Fashion Week runway; at Eiffel Tower; in Louvre courtyards",
    adultIdea: "Parisian chic boudoir in luxury hotel suite with city views (21+)"
},
{
    id: 19,
    season: "December",
    event: "Swiss Alpine Christmas",
    location: "Zermatt, Swiss Alps",
    details: "Christmas markets; luxury mountain resorts; winter sports; traditional Swiss culture; Alpine spa treatments",
    clothing: "Luxury alpine wear; traditional Swiss-inspired fashion; warm winter accessories; snow boots; festive holiday styling",
    photoLocation: "At Christmas market; on ski slopes with Matterhorn view; in cozy alpine chalet",
    adultIdea: "Alpine Christmas fantasy in luxury chalet with mountain views (18+)"
},
{
    id: 20,
    season: "March",
    event: "Morocco Desert Adventure",
    location: "Sahara Desert, Morocco",
    details: "Camel trekking; desert camping under stars; traditional Berber culture; spice market tours; Marrakech exploration",
    clothing: "Desert-appropriate flowing fabrics; traditional Moroccan-inspired wear; protective headwear; comfortable walking shoes; exotic jewelry",
    photoLocation: "On camel in sand dunes; at traditional Berber camp; in Marrakech souks",
    adultIdea: "Desert rose photoshoot in traditional Berber tent with authentic Moroccan styling (21+)"
},
{
    id: 21,
    season: "May",
    event: "New Orleans Jazz & Heritage Festival",
    location: "New Orleans, Louisiana, USA",
    details: "Jazz music immersion; Creole and Cajun cuisine; French Quarter exploration; voodoo culture; Mississippi River cruises",
    clothing: "Vintage jazz age inspired outfits; colorful bohemian dresses; comfortable shoes for dancing; statement jewelry; retro hairstyles",
    photoLocation: "At the jazz festival stages; in the French Quarter; on a boat on the Mississippi",
    adultIdea: "Jazz age speakeasy fantasy in the style of the 1920s with elements of New Orleans mystique (18+)"
},
{
    id: 22,
    season: "February",
    event: "Sundance Film Festival",
    location: "Park City, Utah, USA",
    details: "Independent film premieres; celebrity interviews; mountain lodge parties; skiing on world-class slopes; networking with filmmakers",
    clothing: "Chic winter festival attire; designer ski wear; stylish aprês-ski outfits; warm accessories; mountain-appropriate footwear",
    photoLocation: "At film premiere red carpets; on Park City ski slopes; at exclusive mountain lodges",
    adultIdea: "Film noir inspired photoshoot in luxury mountain lodge with cinematic lighting (21+)"
},
{
    id: 23,
    season: "June",
    event: "Greek Islands Yacht Tour",
    location: "Santorini & Mykonos, Greek Islands",
    details: "Private yacht charter; island hopping; ancient Greek ruins exploration; Mediterranean cuisine; sunset sailing",
    clothing: "Elegant yacht attire; flowing Greek-inspired dresses; luxury swimwear; comfortable sailing shoes; sun protection accessories",
    photoLocation: "On luxury yacht deck; at Santorini sunset viewpoints; in Mykonos windmill landscapes",
    adultIdea: "Greek goddess photoshoot on private yacht with Mediterranean sunset backdrop (18+)"
},
{
    id: 24,
    season: "September",
    event: "Milan Fashion Week",
    location: "Milano, Lombardy, Italy",
    details: "High fashion runway shows; designer showroom visits; Italian fashion industry networking; Milanese culture immersion; luxury shopping",
    clothing: "High-end Italian designer pieces; sophisticated Italian style; luxury accessories; elegant footwear; impeccable grooming",
    photoLocation: "At Milan Fashion Week venues; in historic Milano streets; at luxury Italian boutiques",
    adultIdea: "Italian haute couture boudoir in Milanese palazzo with Renaissance art elements (21+)"
},
{
    id: 25,
    season: "December",
    event: "Tokyo Winter Illuminations",
    location: "Shibuya & Harajuku, Tokyo, Japan",
    details: "Winter illumination festivals; Japanese cultural experiences; modern Tokyo exploration; traditional and modern fashion blend; tech culture immersion",
    clothing: "Modern Japanese street fashion; elegant winter coats; tech-inspired accessories; comfortable urban footwear; avant-garde styling",
    photoLocation: "In Tokyo neon-lit streets; at winter illumination displays; in futuristic Tokyo districts",
    adultIdea: "Cyber geisha fantasy in futuristic Tokyo setting with neon lights and modern technology (18+)"
},
{
    id: 26,
    season: "April",
    event: "Miami Beach Spring Break",
    location: "South Beach, Miami, Florida, USA",
    details: "Beach volleyball tournaments; Art Deco architecture tours; Latin nightlife; luxury shopping; water sports",
    clothing: "Trendy beachwear; colorful Miami fashion; designer swimwear; comfortable sandals; statement sunglasses; vibrant colors",
    photoLocation: "On iconic South Beach; among Art Deco buildings; at luxury pool parties",
    adultIdea: "Miami heat photoshoot on the penthouse terrace overlooking the ocean and city skyline (18+)"
},
{
    id: 27,
    season: "May",
    event: "Cinco de Mayo Festival Los Angeles",
    location: "East LA, California, USA",
    details: "Traditional Mexican dances; street food and tequila tasting; mariachi music; colorful parade participation; local craft markets",
    clothing: "Vibrant Mexican-inspired outfits; traditional embroidered blouses; flowing skirts; comfortable sandals; colorful accessories; flower crowns",
    photoLocation: "At mariachi performances; in colorful East LA streets; at traditional Mexican markets",
    adultIdea: "Señorita fantasy photoshoot with traditional Mexican elements and vibrant colors (18+)"
},
{
    id: 28,
    season: "August",
    event: "Edinburgh Fringe Festival",
    location: "Edinburgh, Scotland, UK",
    details: "International arts festival; theater performances; street performances; comedy shows; cultural immersion; Scottish heritage exploration",
    clothing: "Bohemian festival attire; vintage Scottish-inspired pieces; comfortable walking shoes; layered outfits for weather; artistic accessories",
    photoLocation: "At Edinburgh Castle; on Royal Mile; at festival venues",
    adultIdea: "Scottish highlands fantasy in historic Edinburgh castle setting (21+)"
},
{
    id: 29,
    season: "October",
    event: "Day of the Dead Celebration",
    location: "Oaxaca, Mexico",
    details: "Traditional Día de los Muertos ceremonies; colorful altar creation; local artisan workshops; traditional Mexican cuisine; cultural heritage immersion",
    clothing: "Traditional Mexican dresses with intricate embroidery; flower crowns; colorful face paint; handmade jewelry; comfortable traditional sandals",
    photoLocation: "At decorated altars; in traditional Mexican markets; at cemetery celebrations",
    adultIdea: "Catrina goddess tribute with traditional Day of the Dead makeup and flowers (18+)"
},
{
    id: 30,
    season: "December",
    event: "Goa Beach Festival",
    location: "Goa, India",
    details: "Electronic music festival on beaches; yoga and meditation sessions; Indian street food; beach parties; traditional Indian culture exploration",
    clothing: "Bohemian beach wear; flowing Indian-inspired fabrics; comfortable sandals; ethnic jewelry; natural styling; vibrant colors",
    photoLocation: "On Goa beaches at sunset; at beachside music festivals; in traditional Indian markets",
    adultIdea: "Goa goddess photoshoot with Indian ocean backdrop and ethnic styling (21+)"
},
{
    id: 31,
    season: "July",
    event: "Costa Brava Summer Escape",
    location: "Costa Brava, Catalonia, Spain",
    details: "Mediterranean beach resorts; Spanish cooking masterclasses; flamenco lessons; Barcelona's art scene; coastal hikes",
    clothing: "Elegant summer dresses; comfortable espadrilles; Spanish-style accessories; lightweight cardigans; sun protection",
    photoLocation: "On the rocky coves of the Costa Brava; in olive groves; on the rooftops of Barcelona with views of the Sagrada Familia",
    adultIdea: "Photoshoot of a Spanish senorita in an olive grove with natural light (21+)"
},
{
    id: 32,
    season: "September",
    event: "Bali Spiritual Retreat",
    location: "Ubud, Bali, Indonesia",
    details: "Intensive yoga and meditation; traditional Balinese healing; photographing rice terraces; visiting temples; local cooking classes",
    clothing: "Flowy yoga clothes; natural fabrics in earthy tones; minimalist jewelry; comfortable sandals; spiritual accessories",
    photoLocation: "On rice terraces at sunrise; near ancient temples; in natural hot springs",
    adultIdea: "Fantasy of a Balinese goddess in a sacred temple setting with tropical flowers (18+)"
},
{
    id: 33,
    season: "February",
    event: "Munich Oktoberfest (Winter Edition)",
    location: "Munich, Bavaria, Germany",
    details: "Traditional Bavarian culture; beer hall visits; Alpine folk music; German cuisine tasting; winter market visits",
    clothing: "Traditional dirndl with winter accessories; warm Bavarian-style clothing; comfortable boots; folk jewelry; festive winter styling",
    photoLocation: "In traditional beer halls; at Munich winter markets; in Bavarian Alpine settings",
    adultIdea: "Bavarian winter fantasy in cozy beer hall setting with traditional German styling (18+)"
},
{
    id: 34,
    season: "June",
    event: "Scandinavian Midsummer",
    location: "Stockholm, Sweden",
    details: "Midsummer celebrations; traditional Swedish folk dances; flower crown making; midnight sun experience; Nordic cultural immersion",
    clothing: "Traditional Swedish folk costumes; flower crowns and natural accessories; light summer dresses; comfortable flat shoes; Nordic-inspired styling",
    photoLocation: "At midsummer pole celebrations; in Swedish countryside; by Stockholm waterfront",
    adultIdea: "Scandinavian goddess photoshoot under midnight sun with traditional Nordic elements (21+)"
},
{
    id: 35,
    season: "September",
    event: "Tuscany Wine Harvest",
    location: "Tuscany, Italy",
    details: "Grape harvest participation; wine tasting tours; Italian cooking classes; countryside exploration; traditional harvest festivals",
    clothing: "Rustic Italian countryside attire; flowing dresses in earth tones; comfortable boots; minimalist jewelry; natural styling",
    photoLocation: "In Tuscan vineyards; at rustic Italian villages; during harvest celebrations",
    adultIdea: "Italian countryside goddess in vineyard setting with harvest festival elements (18+)"
},
{
    id: 36,
    season: "November",
    event: "Australian Outback Adventure",
    location: "Uluru, Northern Territory, Australia",
    details: "Aboriginal culture exploration; desert camping; sunrise at Uluru; wildlife encounters; outback survival experiences",
    clothing: "Practical outback wear; earth-toned clothing; sturdy boots; sun protection; minimal makeup for natural look",
    photoLocation: "At Uluru sunrise; in Australian outback landscapes; with native Australian wildlife",
    adultIdea: "Outback warrior goddess in natural Australian desert setting (21+)"
},
{
    id: 37,
    season: "March",
    event: "Seychelles Paradise Escape",
    location: "Praslin Island, Seychelles",
    details: "Pristine beaches exploration; giant tortoise sanctuary visit; coco de mer palm forest; snorkeling in crystal waters; Creole cultural immersion",
    clothing: "Designer swimwear; flowing maxi dresses; barefoot luxury style; natural fabrics; minimal accessories; sun protection hats",
    photoLocation: "On Anse Lazio beach; among unique coco de mer palms; with giant turtles",
    adultIdea: "Garden of Eden fantasy on a secluded beach amidst exotic nature (21+)"
},
{
    id: 38,
    season: "September",
    event: "Notting Hill Carnival London",
    location: "Notting Hill, London, UK",
    details: "Caribbean culture celebration; steel drum bands; colorful parades; West Indian food; multicultural street parties",
    clothing: "Vibrant carnival costumes; feathers and sequins; comfortable dancing shoes; raincoat (London weather); bold makeup and accessories",
    photoLocation: "In a carnival parade; on the streets of Notting Hill; with steel drum bands",
    adultIdea: "London Carnival Queen with elements of British and Caribbean culture (18+)"
},
{
    id: 39,
    season: "January",
    event: "Hawaii Volcano Adventure",
    location: "Big Island, Hawaii, USA",
    details: "Active volcano viewing; black sand beaches; tropical rainforest hikes; traditional luau; Hawaiian cultural experiences",
    clothing: "Hiking gear for volcano tours; Hawaiian print dresses; leis and flower crowns; comfortable sandals; adventure-ready outfits",
    photoLocation: "With the active Kilauea volcano in the background; on a black sand beach; among tropical waterfalls",
    adultIdea: "Fire goddess tribute on a volcanic Landscape with a play of fire and earth (21+)"
},
{
    id: 40,
    season: "October",
    event: "Napa Valley Harvest Festival",
    location: "Napa Valley, California, USA",
    details: "Wine harvest participation; vineyard tours; gourmet food pairings; hot air balloon rides; luxury wine estate stays",
    clothing: "Sophisticated country chic; flowing dresses in earth tones; comfortable boots; sun hats; minimal makeup for a natural look",
    photoLocation: "In the vineyards at sunset; in a hot air balloon over the valley; in wine cellars",
    adultIdea: "Wine country goddess among grapes with elements of Bacchus mythology (18+)"
},
{
    id: 41,
    season: "December",
    event: "Vienna Opera Ball",
    location: "Vienna State Opera, Austria",
    details: "Classical music and opera; traditional Viennese waltz; imperial palace tours; classical European culture; luxury hotel stays",
    clothing: "Formal ballgowns; white gloves; elegant jewelry; classical hairstyles; opera-appropriate formal wear",
    photoLocation: "At the Vienna State Opera; on the ballroom dance floor; at the imperial palaces",
    adultIdea: "European aristocracy fantasy in historical palace setting (21+)"
},
{
    id: 42,
    season: "June",
    event: "Copenhagen Design Week",
    location: "Copenhagen, Denmark",
    details: "Scandinavian design exhibitions; minimalist architecture tours; Danish hygge lifestyle; city bike tours; sustainable fashion shows",
    clothing: "Scandinavian minimalist fashion; neutral color palettes; eco-friendly fabrics; comfortable cycling clothes; clean makeup",
    photoLocation: "In design museums; on Copenhagen canals; in minimalist Danish interiors",
    adultIdea: "Scandinavian minimalist nude art with clean lines and natural lighting (21+)"
},
{
    id: 43,
    season: "August",
    event: "Tour de France Alpine Stage",
    location: "French Alps, France",
    details: "Supporting professional cycling competitions; alpine adventures; French alpine cuisine; photographing scenic routes; active outdoor sports",
    clothing: "Professional cycling equipment; mountain trekking clothing; comfortable sportswear; weather-appropriate clothing; sports accessories",
    photoLocation: "On Alpine mountain peaks; along Tour de France route; in French mountain villages",
    adultIdea: "Athletic goddess photoshoot on Alpine meadow with wildflowers (18+)"
},
{
    id: 44,
    season: "December",
    event: "Morocco Imperial Cities Tour",
    location: "Marrakech & Fez, Morocco",
    details: "Imperial city exploration; traditional souks shopping; Moroccan cooking classes; desert excursions; traditional hammam spa experiences",
    clothing: "Traditional Moroccan-inspired outfits; flowing kaftans; comfortable walking sandals; ethnic jewelry; desert-appropriate accessories",
    photoLocation: "In Marrakech souks; at traditional riads; in Moroccan desert landscapes",
    adultIdea: "Moroccan princess fantasy in traditional riad with authentic Moroccan styling (18+)"
},
{
    id: 45,
    season: "July",
    event: "Provence Lavender Festival",
    location: "Provence, France",
    details: "Lavender field photography; French countryside exploration; wine and cheese tastings; artisan market visits; traditional French culture",
    clothing: "French countryside style; flowing dresses in lavender tones; comfortable sandals; natural accessories; romantic French styling",
    photoLocation: "In lavender fields; at French countryside markets; in Provençal villages",
    adultIdea: "French countryside goddess in lavender field setting with romantic Provence atmosphere (21+)"
},
{
    id: 46,
    season: "July",
    event: "Amalfi Coast Luxury Getaway",
    location: "Positano, Amalfi Coast, Italy",
    details: "Luxury yacht excursions; cliffside dining; exploring Italian Riviera; limoncello tasting; coastal trail hiking",
    clothing: "Elegant resort wear; designer beachwear; light summer dresses; comfortable sandals; bright sunglasses",
    photoLocation: "On luxury yacht; at cliffside restaurants; on vibrant Positano terraces",
    adultIdea: "Amalfi mermaid fantasy on private villa terrace with sea view (21+)"
},
{
    id: 47,
    season: "August",
    event: "Black Sea Coast Festival",
    location: "Odessa, Ukraine",
    details: "Beach festivals; Black Sea culture; seafood cuisine; coastal entertainment; maritime heritage exploration",
    clothing: "Elegant beachwear; coastal fashion; comfortable sandals; nautical accessories; fresh summer styling",
    photoLocation: "On Black Sea beaches; at coastal festivals; in historic Odessa streets",
    adultIdea: "Black Sea goddess photoshoot with maritime and coastal elements (21+)"
},
{
    id: 48,
    season: "October",
    event: "Carpathian Mountains Retreat",
    location: "Carpathian Mountains, Ukraine",
    details: "Mountain hiking; traditional Hutsul culture; folk crafts workshops; mountain spa experiences; autumn forest exploration",
    clothing: "Mountain hiking attire; traditional Carpathian folk elements; warm layers; sturdy boots; natural accessories",
    photoLocation: "In Carpathian mountains; at traditional mountain villages; in autumn forest settings",
    adultIdea: "Carpathian mountain spirit fantasy in natural forest setting (18+)"
},
{
    id: 49,
    season: "December",
    event: "Ukrainian Winter Traditions",
    location: "Lviv, Ukraine",
    details: "Traditional Christmas markets; winter folk traditions; Ukrainian winter cuisine; historic city exploration; cultural heritage immersion",
    clothing: "Traditional Ukrainian winter clothing; folk accessories; warm winter wear; cultural jewelry; festive styling",
    photoLocation: "At Lviv Christmas markets; in historic Ukrainian architecture; at traditional winter celebrations",
    adultIdea: "Ukrainian winter princess in traditional setting with folk elements (21+)"
},
{
    id: 50,
    season: "January",
    event: "Lapland Northern Lights Adventure",
    location: "Rovaniemi, Finland",
    details: "Northern lights viewing expeditions; reindeer farm visits; traditional Sami culture; ice hotel stays; arctic wilderness exploration",
    clothing: "Professional arctic gear; warm fur-lined coats; thermal layers; winter boots; bright accessories for contrast",
    photoLocation: "Under northern lights; with reindeer in snowy forest; in ice hotel chambers",
    adultIdea: "Arctic royal fantasy in ice palace with northern lights backdrop (21+)"
},
{ 
    id: 51,
    season: "August",
    event: "Croatian Island Hopping",
    location: "Adriatic Coast, Croatia",
    details: "Island exploration; crystal clear waters; medieval coastal towns; local seafood cuisine; sailing adventures",
    clothing: "Mediterranean summer fashion; designer beachwear; light beach dresses; comfortable sandals; nautical accessories",
    photoLocation: "On pristine Croatian beaches; at medieval stone towns; on sailing boats",
    adultIdea: "Adriatic sea goddess on secluded beach with crystal waters (18+)"
},
{ 
    id: 52,
    season: "October",
    event: "Budapest Thermal Baths Wellness",
    location: "Széchenyi Thermal Baths, Budapest, Hungary",
    details: "Thermal spa treatments; Hungarian culture immersion; Danube river cruises; traditional Hungarian cuisine; architectural heritage tours",
    clothing: "Elegant spa wear; comfortable robes; minimal jewelry; natural skincare; thermal pool attire",
    photoLocation: "In historic thermal baths; at Budapest Parliament; on Danube riverbank",
    adultIdea: "Hungarian thermal goddess with steam and warm lighting (21+)"
},
{ 
    id: 53,
    season: "June",
    event: "Provence Lavender Fields",
    location: "Valensole Plateau, Provence, France",
    details: "Lavender harvesting participation; cycling tours through French countryside; local farmers markets; Provençal cooking masterclasses; exploring historical villages",
    clothing: "French countryside chic; light purple dresses; comfortable cycling clothes; sun protection accessories; natural French beauty",
    photoLocation: "In endless lavender fields; at French stone villages; on countryside cycling paths",
    adultIdea: "Provençal lavender goddess among purple fields with sunset lighting (18+)"
},
{ 
    id: 54,
    season: "December",
    event: "Swiss Alps Luxury Ski Resort",
    location: "St. Moritz, Switzerland",
    details: "World-class skiing; luxury mountain resorts; aprês-ski parties; Alpine spa treatments; winter photography sessions",
    clothing: "Designer ski wear; luxury winter fashion; aprês-ski elegant outfits; winter accessories; sophisticated alpine styling",
    photoLocation: "On pristine ski slopes; at luxury mountain chalets; in Swiss Alpine landscapes",
    adultIdea: "Swiss Alpine goddess in luxury chalet with mountain and snow elements (18+)"
},
{ 
    id: 55,
    season: "June",
    event: "Monaco Grand Prix Glamor",
    location: "Monte Carlo, Monaco",
    details: "Formula 1 Grand Prix events; yacht parties; casino nights; luxury shopping; Mediterranean lifestyle",
    clothing: "Glamorous racing fashion; yacht party attire; casino elegant wear; luxury accessories; Monaco sophistication",
    photoLocation: "At Monaco Grand Prix; on luxury yachts; at Monte Carlo casino",
    adultIdea: "Monaco royalty fantasy in luxury yacht setting with Mediterranean glamor (21+)"
},
{
    id: 56,
    season: "May",
    event: "Champagne Region Harvest",
    location: "Reims, Champagne, France",
    details: "Champagne house tours; grape harvesting; French gastronomy experiences; vineyard picnics; cellar tastings",
    clothing: "French rustic elegance; comfortable vineyard attire; elegant summer dresses; sophisticated accessories; natural French beauty",
    photoLocation: "In Champagne vineyards; in historic cellars; at French chateaux",
    adultIdea: "A Champagne goddess among the vines with bubbles and golden lighting (18+)"
},
{
    id: 57,
    season: "December",
    event: "Loire Valley Château Christmas",
    location: "Loire Valley, France",
    details: "Stay in historic castles; traditional French Christmas; wine tastings; cultural and historical tours; French cooking masterclasses",
    clothing: "Elegant winter fashion; exquisite castle outfits; classic French style; luxurious accessories; sophisticated makeup",
    photoLocation: "In the castles of the Loire Valley; among Christmas decorations; in historic French gardens",
    adultIdea: "A French aristocratic fantasy in a castle library with velvet and candles (21+)"
},
{
    id: 58,
    season: "March",
    event: "Montmartre Artist Quarter Experience",
    location: "Montmartre, Paris, France",
    details: "Visit artist studios; painting masterclasses; bohemian cafe culture; exploration of the Sacré-Coeur; collaboration with local artists",
    clothing: "Bohemian Parisian Style; Creative Accessories; Comfortable Walking Shoes; Creative Makeup Looks; Vintage French Items",
    photoLocation: "In Artists' Studios; Near Sacré-Coeur; On the Cobblestones of Montmartre",
    adultIdea: "The Artist's Parisian Muse in a Bohemian Studio with Colors and Creative Chaos (18+)"
},
{
    id: 59,
    season: "February",
    event: "Chinese New Year Celebration Beijing",
    location: "Forbidden City, Beijing, China",
    details: "Traditional Dragon Dance Parades; Temple Fair Visits; Fireworks; Calligraphy Workshops; Authentic Chinese Cuisine Discovery",
    clothing: "Traditional Chinese qipao and cheongsam; Red Festive Colors; Comfortable Walking Shoes; Traditional Accessories; Elegant Styling",
    photoLocation: "At Forbidden City; During Dragon Dance Performances; At Traditional Temple Fairs",
    adultIdea: "Chinese New Year empress fantasy in Forbidden City with traditional elements (21+)"
},
{ 
    id: 60,
    season: "November",
    event: "Silk Road Cultural Journey",
    location: "Xi'an & Dunhuang, China",
    details: "Terracotta Army exploration; Silk Road history; desert camel trekking; traditional craft workshops; ancient Buddhist temples",
    clothing: "Desert-appropriate clothing; traditional Silk Road dressed outfits; protective accessories; comfortable trekking gear; ethnic elements",
    photoLocation: "With Terracotta Army; in Silk Road desert landscapes; at ancient Buddhist temples",
    adultIdea: "Silk Road goddess fantasy in desert oasis with ancient Chinese mystique (18+)"
},
{
    id: 61,
season: "July",
event: "Bora Bora Overwater Villa Escape",
location: "Bora Bora, French Polynesia",
details: "Проживание в бунгало на воде; подводное плавание в лагуне; погружение в полинезийскую культуру; парусные прогулки на закате; тропические спа-процедуры",
clothing: "Дизайнерская пляжная одежда; лёгкие тропические платья; удобные сандалии; цветочные аксессуары; естественный пляжный макияж",
photoLocation: "В вилле на воде; на нетронутой лагуне; среди тропических цветов",
adultIdea: "Посвящение полинезийской богине на частной террасе над водой с бирюзовой лагуной (18+)"
},
{
    id: 62,
season: "September",
event: "Milan Fashion Week Asian Fusion",
location: "Milan, Italy",
details: "Модные показы в азиатском стиле; сотрудничество с дизайнерами; культурные фьюжн мероприятия; роскошные покупки; международный нетворкинг",
clothing: "Современная мода с азиатскими мотивами; авангардные дизайны; яркие аксессуары; дизайнерская обувь; яркий модный макияж",
photoLocation: "На миланских модных подиумах; в шоу-румах дизайнеров; у роскошных бутиков",
adultIdea: "Фантазия слияния Востока и Запада в роскошном ателье с шёлком и современными элементами (21+)"
},
{
    id: 63,
season: "December",
event: "Japanese Alps Winter Retreat",
location: "Hakuba Valley, Japanese Alps, Japan",
details: "Традиционные горячие источники онсэн; наблюдение за снежными макаками; японская зимняя кухня; дегустация сакэ; медитации в стиле дзэн",
clothing: "Традиционные юката; тёплое зимнее кимоно; удобные зимние сапоги; минимум украшений; естественная японская красота",
photoLocation: "В горячих источниках онсэн; с снежными макаками; в заснеженных японских храмах",
adultIdea: "Японская богиня онсэн в парящих горячих источниках с фоном зимних гор (18+)"
},
{
    id: 64,
season: "April",
event: "Tokyo Hanami Season",
location: "Shinjuku Gyoen, Tokyo, Japan",
details: "Cherry blossom viewing parties; traditional tea ceremonies; Japanese cultural workshops; kimono photoshoots; spring festivals",
clothing: "Traditional kimono for hanami; modern Japanese spring fashion; comfortable shoes for garden walking; floral accessories; natural beauty styling",
photoLocation: "Under cherry blossoms in Shinjuku Gyoen; at traditional tea ceremonies; in modern Tokyo spring settings",
adultIdea: "Japanese hanami goddess under cherry blossoms with traditional spring elements (18+)"
},
{
    id: 65,
season: "July",
event: "Gion Matsuri Festival Kyoto",
location: "Gion District, Kyoto, Japan",
details: "Traditional Gion festival participation; geisha district exploration; Japanese textile workshops; temple ceremonies; authentic kaiseki dining",
clothing: "Formal yukata for festival; traditional Japanese accessories; comfortable geta sandals; elegant hair styling; refined makeup",
photoLocation: "In historic Gion district; during Gion Matsuri processions; at traditional Kyoto temples",
adultIdea: "Kyoto geisha tribute in authentic Gion setting with traditional elements (21+)"
},
{
    id: 66,
season: "December",
event: "Japanese Winter Illuminations",
location: "Tokyo & Osaka, Japan",
details: "Winter illumination festivals; New Year preparations; traditional Japanese winter culture; hot sake tasting; winter fashion exploration",
clothing: "Modern Japanese winter fashion; elegant winter coats; comfortable winter boots; sophisticated accessories; seasonal styling",
photoLocation: "At Tokyo winter illuminations; in traditional New Year settings; at modern Japanese winter festivals",
adultIdea: "Winter illumination goddess in modern Japanese setting with lights and winter elements (21+)"
},
{
    id: 67,
season: "August",
event: "Mykonos Greek Island Paradise",
location: "Mykonos, Cyclades, Greece",
details: "Вечеринки в пляжных клубах; традиционные греческие таверны; древние археологические памятники; закат на мельницах; средиземноморские парусные прогулки",
clothing: "Шикарная мода греческих островов; дизайнерская пляжная одежда; лёгкие белые платья; удобные сандалии; богемные аксессуары",
photoLocation: "На знаменитых мельницах Миконоса; на белоснежных деревенских улочках; на нетронутых пляжах",
adultIdea: "Богиня греческого острова на уединённом пляже с фоном Эгейского моря (21+)"
},
{
    id: 68,
season: "January",
event: "Hokkaido Snow Festival",
location: "Sapporo, Hokkaido, Japan",
details: "Выставки ледяных скульптур; зимняя иллюминация; посещение горячих источников; мероприятия в лыжном курорте; местная кухня из морепродуктов",
clothing: "Стильные зимние пальто; тёплые сапоги; уютные шарфы; зимние аксессуары; макияж для холодной погоды",
photoLocation: "У массивных ледяных скульптур; в снежных ландшафтах Хоккайдо; в традиционных горячих источниках",
adultIdea: "Зимняя фантазия снежной королевы в горячих источниках с контрастом снега и пара (21+)"
},
{
    id: 69,
season: "June",
event: "Okinawa Tropical Beach Retreat",
location: "Okinawa Islands, Japan",
details: "Кристально чистые прибрежные воды; традиционная культура Рюкю; погружения к коралловым рифам; местная островная кухня; тропические спа-процедуры",
clothing: "Тропическая пляжная одежда; лёгкие летние платья; пляжные сандалии; тропические аксессуары; защитная от солнца одежда",
photoLocation: "На нетронутых пляжах Окинавы; у коралловых рифов; у традиционной архитектуры Рюкю",
adultIdea: "Русалка тропического острова на уединённом пляже с кристально чистыми водами (18+)"
},
{
    id: 70,
season: "March",
event: "SXSW Austin Music Festival",
location: "Austin, Texas, USA",
details: "Live music performances; tech innovation showcases; BBQ culinary scene; local brewery tours; creative networking events",
clothing: "Austin hipster fashion; creative festival attire; comfortable boots; artistic accessories; edgy styling",
photoLocation: "At SXSW music venues; in Austin's creative districts; at BBQ and brewery locations",
adultIdea: "Austin music festival rebel with creative and edgy festival vibes (21+)"
},
{
    id: 71,
season: "June",
event: "Yellowstone National Park Adventure",
location: "Yellowstone National Park, Wyoming, USA",
details: "Wildlife photography; geothermal features exploration; hiking adventures; camping experiences; nature conservation education",
clothing: "Outdoor adventure gear; practical hiking attire; wildlife photography equipment; protective clothing; natural styling",
photoLocation: "At Yellowstone geysers; with American wildlife; in pristine natural landscapes",
adultIdea: "American wilderness goddess in Yellowstone natural setting with wildlife elements (18+)"
},
{
    id: 72,
season: "October",
event: "Nashville Country Music Scene",
location: "Nashville, Tennessee, USA",
details: "Country music venue tours; songwriting workshops; recording studio experiences; honky-tonk culture; Southern cuisine exploration",
clothing: "Country music fashion; cowboy boots and hats; denim and leather; western accessories; authentic country styling",
photoLocation: "At Nashville music venues; in recording studios; on Broadway honky-tonk strip",
adultIdea: "Country music queen in authentic Nashville honky-tonk setting (21+)"
},
{
    id: 73,
season: "December",
event: "Miami Art Basel & South Beach",
location: "Miami, Florida, USA",
details: "International art exhibitions; South Beach fashion scene; luxury yacht parties; Art Deco architecture; Latin nightlife culture",
clothing: "Miami high fashion; artistic avant-garde pieces; luxury beachwear; statement jewelry; sophisticated tropical styling",
photoLocation: "At Art Basel exhibitions; on South Beach; at luxury Miami venues",
adultIdea: "Miami art scene goddess with luxury and artistic elements in tropical setting (21+)"
},
{
    id: 74,
season: "July",
event: "Martha's Vineyard Summer Elite",
location: "Martha's Vineyard, Massachusetts, USA",
details: "Элитное членство в пляжных клубах; парусные регаты; эксклюзивные летние вечеринки; изысканная кухня; культурные традиции Новой Англии",
clothing: "Преппи-стиль Новой Англии; морская тематика; элегантные летние платья; палубная обувь; классический американский стиль",
photoLocation: "На роскошных яхтах; у маяков; в эксклюзивных пляжных клубах",
adultIdea: "Преппи-фантазия Новой Англии на частной яхте с прибрежным фоном (21+)"
},
{
    id: 75,
season: "October",
event: "Salem Halloween Celebration",
location: "Salem, Massachusetts, USA",
details: "Исторические места судов над ведьмами; участие в фестивале Хэллоуин; экскурсии по домам с привидениями; конкурсы костюмов; загадочная ночная жизнь",
clothing: "Творческие костюмы на Хэллоуин; элементы готической моды; драматичный макияж; тематические аксессуары; сезонная одежда",
photoLocation: "У исторических мест Сэйлема; на фестивалях Хэллоуин; у загадочных мест",
adultIdea: "Фантазия современной ведьмы в исторической обстановке Сэйлема с мистическими элементами (18+)"
},
{
    id: 76,
season: "December",
event: "Colorado Rocky Mountain Christmas",
location: "Vail, Colorado, USA",
details: "Роскошные горнолыжные курорты; посещение рождественских рынков; отдых в горных шале; зимние виды спорта; праздничные торжества",
clothing: "Премиальная горнолыжная мода; роскошные зимние пальто; одежда для après-ski; уютная одежда для шале; зимний глямурный макияж",
photoLocation: "На горнолыжных склонах Колорадо; в роскошных горных шале; у рождественских рынков",
adultIdea: "Романтика праздников в горном шале с камином и заснеженными видами на горы (21+)"
},
{
    id: 77,
season: "May",
event: "Arizona Desert Spa Retreat",
location: "Scottsdale, Arizona, USA",
details: "Роскошные пустынные курорты; спа-процедуры; походы по пустыне; юго-западная кухня; культурные традиции коренных американцев",
clothing: "Мода пустынных курортов; дышащие ткани; аксессуары для защиты от солнца; удобное снаряжение для походов; юго-западные украшения",
photoLocation: "В пустынных пейзажах Аризоны; у роскошных спа-курортов; среди пустынных кактусов",
adultIdea: "Фантазия пустынной богини в пейзажах Аризоны с юго-западной мистикой (18+)"
},
{
    id: 78,
season: "February",
event: "Miami Art Basel Week",
location: "Miami Beach, Florida, USA",
details: "Contemporary art exhibitions; exclusive gallery parties; Latin American art scene; beach culture; international art collectors networking",
clothing: "Miami high fashion; artistic statement pieces; luxury beach attire; sophisticated accessories; tropical elegance styling",
photoLocation: "At Art Basel exhibitions; on Miami Beach; at exclusive gallery events",
adultIdea: "Miami art scene muse with contemporary art and luxury beach elements (21+)"
},
{
    id: 79,
season: "May",
event: "Martha's Vineyard Elite Retreat",
location: "Martha's Vineyard, Massachusetts, USA",
details: "Elite New England social scene; yacht club events; coastal luxury lifestyle; exclusive shopping; traditional American coastal culture",
clothing: "New England preppy fashion; nautical inspired outfits; yacht club attire; coastal elegance; sophisticated American styling",
photoLocation: "At Martha's Vineyard yacht clubs; on exclusive beaches; at coastal New England estates",
adultIdea: "New England coastal elite fantasy in yacht club setting (18+)"
},
{
    id: 80,
season: "August",
event: "Hamptons Summer Social Season",
location: "The Hamptons, New York, USA",
details: "Elite summer parties; exclusive beach clubs; high-end shopping; polo matches; luxury coastal lifestyle experiences",
clothing: "Hamptons summer fashion; luxury beachwear; polo match attire; designer casual wear; East Coast sophistication",
photoLocation: "At Hamptons beach clubs; during polo matches; at exclusive summer parties",
adultIdea: "Hamptons socialite fantasy with luxury coastal summer elements (21+)"
},
{
    id: 81,
season: "November",
event: "Napa Valley Wine Harvest Elite",
location: "Napa Valley, California, USA",
details: "Exclusive winery experiences; harvest season celebrations; gourmet dining; private wine tastings; luxury resort experiences",
clothing: "Wine country elegance; harvest season attire; comfortable luxury wear; sophisticated casual styling; California wine country fashion",
photoLocation: "In Napa Valley vineyards; at luxury wineries; during harvest celebrations",
adultIdea: "California wine goddess in luxury vineyard setting with harvest elements (18+)"
},
{
    id: 82,
season: "June",
event: "Puerto Rico Salsa Festival",
location: "San Juan, Puerto Rico",
details: "Традиционные танцы сальса; местная музыкальная сцена; пуэрто-риканская кухня; исторический Старый Сан-Хуан; тропические пляжные развлечения",
clothing: "Яркие платья для сальсы; танцевальная обувь; традиционные украшения; тропические аксессуары; яркий латиноамериканский макияж",
photoLocation: "На танцполах сальсы; в ярком Старом Сан-Хуане; на тропических пляжах",
adultIdea: "Королева латиноамериканской сальсы на тропической террасе с видом на океан (21+)"
},
{
    id: 83,
season: "September",
event: "Mexico City Cultural Immersion",
location: "Mexico City, Mexico",
details: "Древние астекские руины; современное мексиканское искусство; гастрономические туры по уличной еде; традиционные рынки; объекты культурного наследия",
clothing: "Современная мексиканская мода; традиционные ткани; удобная обувь для прогулок; культурные аксессуары; естественный макияж",
photoLocation: "У древних пирамид; на рынках Мехико; у ярких муралов",
adultIdea: "Почитание богини астеков у древних руин с традиционными мексиканскими элементами (18+)"
},
{
    id: 84,
season: "November",
event: "Caribbean Island Paradise",
location: "Barbados, Caribbean",
details: "Кристально чистые воды; экскурсии на ромовые заводы; музыка калипсо; местные ремёсла; роскошь тропических курортов",
clothing: "Одежда для тропических курортов; яркая пляжная одежда; лёгкие пляжные платья; соломенные шляпы; аксессуары в островном стиле",
photoLocation: "На нетронутых карибских пляжах; у ромовых заводов; в тропических садах",
adultIdea: "Богиня карибского рая на частном пляже с бирюзовыми водами (21+)"
},
{
    id: 85,
season: "April",
event: "Los Angeles Fashion Week Latino",
location: "Los Angeles, California, USA",
details: "Латиноамериканские модные дизайнеры; мода культурного фьюжн; связи с Голливудом; интеграция латиноамериканской музыки; общественные праздники",
clothing: "Современная латиноамериканская мода; смелые дизайнерские вещи; яркие украшения; современный стайлинг; глямурный макияж",
photoLocation: "На модных подиумах Лос-Анджелеса; у достопримечательностей Голливуда; в дизайнерских студиях",
adultIdea: "Латиноамериканская богиня Голливуда в роскошной студии с огнями города на фоне (18+)"
},
{
    id: 86,
season: "June",
event: "Nashville Country Music Festival",
location: "Nashville, Tennessee, USA",
details: "Country music performances; recording studio visits; honky-tonk atmosphere; Southern cuisine; music industry networking",
clothing: "Country music fashion; cowboy boots and hats; denim and fringe; western accessories; authentic country styling",
photoLocation: "At Nashville music venues; in recording studios; on Broadway honky-tonk strip",
adultIdea: "Country music star fantasy in authentic Nashville recording studio (21+)"
},
{
    id: 87,
season: "September",
event: "Charleston Southern Belle Experience",
location: "Charleston, South Carolina, USA",
details: "Antebellum mansion tours; Southern hospitality culture; traditional Southern cuisine; historic garden walks; Southern Gothic atmosphere",
clothing: "Southern Belle inspired fashion; elegant vintage dresses; vintage accessories; classic Southern styling; refined elegance",
photoLocation: "At historic Charleston mansions; in Southern plantation gardens; on cobblestone historic streets",
adultIdea: "Southern Belle fantasy in historic Charleston mansion with vintage elegance (18+)"
},
{
    id: 88,
season: "October",
event: "New England Fall Foliage Tour",
location: "Vermont & New Hampshire, USA",
details: "Autumn leaf viewing; maple syrup farm visits; cozy New England inns; fall harvest festivals; traditional American countryside",
clothing: "Cozy autumn fashion; layers and warm colors; comfortable boots; rustic accessories; natural New England styling",
photoLocation: "In New England autumn landscapes; at maple syrup farms; in cozy mountain inns",
adultIdea: "New England autumn goddess in cozy cabin setting with fall colors (18+)"
},
{
    id: 89,
season: "December",
event: "Colorado Rocky Mountain Winter",
location: "Aspen, Colorado, USA",
details: "World-class skiing; luxury mountain resorts; aprês-ski culture; winter photography; Rocky Mountain wilderness",
clothing: "Designer ski wear; luxury winter fashion; aprês-ski elegant outfits; mountain accessories; sophisticated alpine styling",
photoLocation: "On Aspen ski slopes; at luxury mountain lodges; in Rocky Mountain winter landscapes",
adultIdea: "Rocky Mountain winter goddess in luxury ski lodge with mountain views (21+)"
},
{
    id: 90,
season: "August",
event: "California Pacific Coast Highway",
location: "Big Sur, California, USA",
details: "Пивоничные прибрежные поездки; походы в лесах редвудов; сообщества ремесленников; посещение экоферм; впечатления от Тихого океана",
clothing: "Калифорнийский казуал-стиль; удобная одежда для путешествий; туристическое снаряжение; бохо-аксессуары; естественная красота Западного побережья",
photoLocation: "На трассе Тихоокеанского побережья; среди лесов редвудов; у драматичных прибрежных скал",
adultIdea: "Калифорнийская мечтательница на прибрежном утёсе с фоном Тихого океана (21+)"
},
{
    id: 91,
season: "October",
event: "Vermont Fall Foliage Festival",
location: "Stowe, Vermont, USA",
details: "Любование осенней листвой; экскурсии на клёновые сиропные фермы; уютные домики; местные ремёсла; очарование Новой Англии",
clothing: "Уютная осенняя мода; тёплые свитера; удобные сапоги; осенние аксессуары; сезонный макияж",
photoLocation: "Среди осенней листвы; у клёновых сиропных ферм; в уютных домиках Вермонта",
adultIdea: "Богиня осеннего леса среди ярких листьев с романтикой в домике (18+)"
},
{
    id: 92,
season: "January",
event: "Lake Tahoe Winter Wonderland",
location: "Lake Tahoe, California/Nevada, USA",
details: "Зимние виды спорта; отдых в приозёрных домиках; горные спа-процедуры; зимняя фотография; уютные вечера у камина",
clothing: "Стильное зимнее спортивное снаряжение; уютная одежда для домика; тёплые аксессуары; зимний глямур; уход за кожей в холодную погоду",
photoLocation: "На берегах озера Тахо; в заснеженных горных локациях; у уютных каминов в домиках",
adultIdea: "Богиня зимнего озера у камина с заснеженным фоном Тахо (21+)"
},
{
    id: 93,
season: "March",
event: "Hawaiian Hula Culture Festival",
location: "Maui, Hawaii, USA",
details: "Традиционные танцы хула; гавайские культурные мастер-классы; тропические луау-вечеринки; исследование вулканических пейзажей; островной образ жизни",
clothing: "Традиционная гавайская одежда; лей и цветочные венки; удобная островная одежда; натуральные ткани; тропический макияж",
photoLocation: "На сценах фестивалей хула; у гавайских вулканов; на нетронутых пляжах Мауи",
adultIdea: "Почитание гавайской богини на вулканическом пляже с тропическим раем (18+)"
},
{
    id: 94,
season: "December",
event: "Gold Coast Surfer's Paradise Festival",
location: "Gold Coast, Queensland, Australia",
details: "World-class surfing competitions; beach volleyball tournaments; Australian BBQ culture; coastal hiking; marine life encounters",
clothing: "Australian surf fashion; bikinis and boardshorts; beach casual wear; sun protection gear; laid-back Aussie styling",
photoLocation: "At Gold Coast surfing competitions; on pristine Australian beaches; at beachfront festivals",
adultIdea: "Aussie surfer girl fantasy on Gold Coast beach with surfboard and ocean waves (18+)"
},
{
    id: 95,
season: "March",
event: "Melbourne Arts & Culture Week",
location: "Melbourne, Victoria, Australia",
details: "Contemporary art exhibitions; street art tours; coffee culture exploration; live music venues; Australian cultural immersion",
clothing: "Melbourne hipster fashion; artistic street style; comfortable walking shoes; creative accessories; urban Australian styling",
photoLocation: "At Melbourne street art locations; in trendy coffee shops; at contemporary art galleries",
adultIdea: "Melbourne arts scene muse in creative studio with contemporary Australian art (21+)"
},
{
    id: 96,
season: "June",
event: "Sydney Harbor Winter Festival",
location: "Sydney, New South Wales, Australia",
details: "Sydney Harbor Bridge experiences; Opera House cultural events; winter markets; harbor cruises; Australian winter cuisine",
clothing: "Chic winter Australian fashion; harbor cruise attire; elegant winter coats; sophisticated accessories; Sydney urban styling",
photoLocation: "At Sydney Harbor Bridge; near Opera House; on harbor cruises",
adultIdea: "Sydney harbor goddess with iconic landmarks and elegant harbor setting (18+)"
},
{
    id: 97,
season: "September",
event: "Outback Adventure & Uluru",
location: "Uluru, Northern Territory, Australia",
details: "Aboriginal culture exploration; Uluru sunrise experiences; outback camping; native wildlife encounters; desert survival skills",
clothing: "Practical outback gear; earth-toned clothing; sturdy boots; sun protection; natural rugged styling",
photoLocation: "At Uluru sunrise; in Australian outback landscapes; with native wildlife",
adultIdea: "Outback explorer goddess in natural Australian desert setting with ancient rock formations (21+)"
},
{
    id: 98,
season: "June",
event: "Great Barrier Reef Diving Adventure",
location: "Cairns, Queensland, Australia",
details: "Погружения к коралловым рифам; охрана морской среды; исследование тропических тропических лесов; культура коренных народов; подводная фотография",
clothing: "Профессиональное снаряжение для дайвинга; одежда для тропических курортов; одежда для приключений; водонепроницаемые аксессуары; естественный загорелый облик",
photoLocation: "Под водой среди коралловых рифов; на дайверских лодках; среди тропических тропических лесов",
adultIdea: "Фантазия океанской русалки под водой с фоном кораллового рифа (18+)"
},
{
    id: 99,
season: "September",
event: "Barossa Valley Wine Festival",
location: "Barossa Valley, South Australia",
details: "Участие в сборе винограда; австралийское виноделие; сочетание с изысканной едой; велосипедные прогулки по сельской местности; ремесленные рынки",
clothing: "Австралийский сельский шик; удобная одежда для виноградников; солнцезащитные шляпы; платья земляных тонов; естественная красота винного края",
photoLocation: "В австралийских виноградниках; у исторических виноделен; на сельских велосипедных тропах",
adultIdea: "Богиня винного края среди австралийских виноградных лоз с закатным освещением (21+)"
},
{
    id: 100,
season: "August",
event: "Blue Mountains Winter Escape",
location: "Blue Mountains, New South Wales, Australia",
details: "Горные походы; исследование эвкалиптовых лесов; отдых в уютных домиках; встречи с местной животной; поездки на пивоничной железной дороге",
clothing: "Австралийское снаряжение для зимних походов; уютная горная одежда; удобные сапоги; многослойная одежда; естественный горный макияж",
photoLocation: "В пейзажах Голубых гор; у пивоничных смотровых площадок; в эвкалиптовых лесах",
adultIdea: "Богиня Голубых гор в уютном домике с фоном горной дикой природы (18+)"
},
{
    id: 101,
season: "March",
event: "Cancun Spring Break Festival",
location: "Cancun, Quintana Roo, Mexico",
details: "Beach parties; traditional Mexican culture; Maya ruins exploration; cenote swimming; tropical resort luxury",
clothing: "Spring break fashion; colorful Mexican-inspired outfits; resort wear; beach party attire; tropical styling",
photoLocation: "At Cancun beach parties; at ancient Maya ruins; in crystal-clear cenotes",
adultIdea: "Mexican beach goddess at Cancun with tropical paradise and Maya culture elements (21+)"
},
{
    id: 102,
season: "June",
event: "Day of the Dead Artistic Celebration",
location: "Oaxaca, Mexico",
details: "Traditional Día de los Muertos ceremonies; artisan craft workshops; Mexican culinary experiences; cultural heritage immersion; colorful altar creation",
clothing: "Traditional Mexican dresses; Day of the Dead face paint; flower crowns; handmade jewelry; vibrant cultural styling",
photoLocation: "At Day of the Dead altars; in traditional Mexican markets; during cultural ceremonies",
adultIdea: "Catrina goddess tribute with traditional Mexican Day of the Dead elements (18+)"
},
{
    id: 103,
season: "September",
event: "Mexican Independence Celebration",
location: "Mexico City, Mexico",
details: "Independence Day festivities; traditional Mexican folk dances; historic center exploration; Mexican cuisine masterclasses; cultural pride celebrations",
clothing: "Mexican flag colors fashion; traditional folk dance attire; patriotic accessories; festive styling; Mexican cultural pride",
photoLocation: "At Mexico City Independence celebrations; in historic Zócalo; during folk dance performances",
adultIdea: "Mexican independence goddess with patriotic and cultural celebration elements (18+)"
},
{
    id: 104,
season: "December",
event: "Puerto Vallarta Beach Paradise",
location: "Puerto Vallarta, Jalisco, Mexico",
details: "Luxury beach resorts; traditional Mexican Christmas celebrations; Pacific coast adventures; local artisan markets; sunset beach experiences",
clothing: "Luxury beach resort fashion; Christmas in Mexico styling; tropical holiday wear; elegant beachwear; Mexican coastal elegance",
photoLocation: "At Puerto Vallarta beaches; during Mexican Christmas celebrations; at luxury coastal resorts",
adultIdea: "Pacific coast goddess in luxury Mexican beach setting with tropical holiday elements (21+)"
},
{
    id: 105,
season: "November",
event: "Oaxaca Day of the Dead Festival",
location: "Oaxaca City, Mexico",
details: "Создание традиционных алтарей; мастер-классы по искусству коренных народов; дегустация мескаля; местные ремесленные рынки; празднование культурного наследия",
clothing: "Традиционные мексиканские платья; изысканный макияж Дня мёртвых; венки из цветов маригольд; ремесленные украшения; культурные аксессуары",
photoLocation: "У ярких алтарей Дня мёртвых; на традиционных рынках; среди полей маригольдов",
adultIdea: "Богиня Катрина с традиционной росписью по телу и цветочными композициями (21+)"
},
{
    id: 106,
season: "July",
event: "Playa del Carmen Beach Festival",
location: "Playa del Carmen, Mexico",
details: "Вечеринки в пляжных клубах; водные виды спорта; местная морская кухня; прибрежные приключения; тропическая ночная жизнь",
clothing: "Мексиканская мода пляжных клубов; дизайнерская пляжная одежда; лёгкие пляжные платья; яркие аксессуары; яркий летний макияж",
photoLocation: "На пляжах Плайя-дель-Кармен; в пляжных клубах; у прибрежных сенотов",
adultIdea: "Мексиканская пляжная богиня у частного сенота с тропическим раем (18+)"
},
{
    id: 107,
season: "September",
event: "Mexico City Art & Culture Week",
location: "Mexico City, Mexico",
details: "Современное мексиканское искусство; гастрономические туры по уличной еде; историческая архитектура; культурные музеи; традиционные танцевальные представления",
clothing: "Современная мексиканская мода; художественные аксессуары; удобная обувь для прогулок; культурные украшения; современный макияж",
photoLocation: "В художественных галереях Мехико; у исторической архитектуры; на сценах культурных фестивалей",
adultIdea: "Муза мексиканской культуры в художественной галерее с современным мексиканским искусством (21+)"
},
{
    id: 108,
season: "January",
event: "Tulum Wellness & Yoga Retreat",
location: "Tulum, Quintana Roo, Mexico",
details: "Йога на берегу океана; древние руины Майя; плавание в природных сенотах; органические спа-процедуры; экологично осознанная жизнь",
clothing: "Одежда для йоги и велнесса; натуральные ткани; минимум украшений; босиком или эко-сандалии; естественный велнесс-макияж",
photoLocation: "В позах йоги на пляже; у руин Тулума; в природных сенотах",
adultIdea: "Богиня велнесса Тулума у древних руин с фоном природного сенота (18+)"
},
{
    id: 109,
season: "May",
event: "Beirut Mediterranean Festival",
location: "Beirut, Lebanon",
details: "Middle Eastern cultural celebration; Mediterranean cuisine; traditional music and dances; historical architecture; coastal experiences",
clothing: "Middle Eastern elegant fashion; Mediterranean coastal style; traditional Lebanese elements; sophisticated accessories; cultural styling",
photoLocation: "At Beirut cultural festivals; in historic Lebanese architecture; along Mediterranean coastline",
adultIdea: "Mediterranean goddess in Beirut with Middle Eastern elegance and coastal elements (21+)"
},
{
    id: 110,
season: "August",
event: "Baalbek Ancient Ruins Experience",
location: "Baalbek, Lebanon",
details: "Ancient Roman temple exploration; archaeological discoveries; Lebanese heritage immersion; mountain valley experiences; historical photography",
clothing: "Archaeological expedition wear; comfortable exploration attire; sun protection gear; historical site appropriate clothing; natural styling",
photoLocation: "At ancient Baalbek temples; in Lebanese mountain valleys; among Roman archaeological ruins",
adultIdea: "Ancient temple goddess at Baalbek ruins with archaeological and historical elements (18+)"
},
{
    id: 111,
season: "October",
event: "Cedar Mountains Autumn Retreat",
location: "Cedars of God, Lebanon",
details: "Ancient cedar forest exploration; mountain hiking; Lebanese mountain culture; autumn photography; spiritual retreat experiences",
clothing: "Mountain hiking gear; autumn weather layers; comfortable hiking boots; natural outdoor styling; earth-toned clothing",
photoLocation: "Among ancient cedar trees; in Lebanese mountains; at spiritual retreat locations",
adultIdea: "Mountain cedar goddess in ancient forest setting with spiritual and natural elements (18+)"
},
{
    id: 112,
season: "December",
event: "Lebanese Christmas & Skiing",
location: "Mzaar Ski Resort, Lebanon",
details: "Middle Eastern Christmas traditions; ski resort experiences; Lebanese winter cuisine; mountain resort luxury; cultural holiday celebrations",
clothing: "Designer ski wear; Middle Eastern winter fashion; luxury mountain resort attire; festive holiday styling; sophisticated alpine wear",
photoLocation: "At Lebanese ski resorts; during Middle Eastern Christmas celebrations; in mountain resort settings",
adultIdea: "Middle Eastern ski goddess in luxury Lebanese resort with winter and holiday elements (21+)"
},
{
    id: 113,
season: "October",
event: "Dubai Luxury Desert Safari",
location: "Dubai Desert, UAE",
details: "Кемпинг в пустыне; поездки на верблюдах; традиционная бедуинская культура; роскошные пустынные курорты; арабская кулинария",
clothing: "Элегантная пустынная мода; лёгкие одеяния; удобные пустынные сапоги; традиционные аксессуары; макияж для пустыни",
photoLocation: "Среди пустынных дюн; у роскошных пустынных лагерей; на сафари на верблюдах",
adultIdea: "Богиня пустынного миража в роскошном пустынном шатре с песчаными дюнами на фоне (18+)"
},
{
    id: 114,
season: "March",
event: "Marrakech Cultural Immersion",
location: "Marrakech, Morocco",
details: "Исследование традиционных рынков; мастер-классы по марокканской кухне; экскурсии в Атласские горы; традиционные посещения хаммама; ремесленные изделия",
clothing: "Мода в марокканском стиле; лёгкие кафтаны; традиционные аксессуары; удобная обувь для прогулок; экзотичный макияж",
photoLocation: "На рынках Марракеша; у Атласских гор; в традиционных риадах",
adultIdea: "Фантазия марокканской принцессы в роскошном риаде с традиционной архитектурой (21+)"
},
{
    id: 115,
season: "July",
event: "Turkish Riviera Luxury Getaway",
location: "Antalya, Turkey",
details: "Средиземноморское побережье; турецкая культура; исторические руины; роскошные курорты; традиционная турецкая кухня",
clothing: "Мода турецкой Ривьеры; элегантная курортная одежда; удобные сандалии; средиземноморские аксессуары; прибрежный макияж",
photoLocation: "На турецком побережье; у древних руин; в роскошных турецких курортах",
adultIdea: "Богиня турецкой Ривьеры на роскошной яхте с средиземноморским фоном (18+)"
},
{
    id: 116,
season: "December",
event: "Istanbul Cultural Bridge",
location: "Istanbul, Turkey",
details: "Культура на стыке Востока и Запада; исторические мечети; турецкие бани; круизы по Босфору; традиционные базары",
clothing: "Современная мода Стамбула; элегантная культурная одежда; удобная обувь для прогулок; традиционные аксессуары; космополитный макияж",
photoLocation: "У исторических достопримечательностей Стамбула; на Босфоре; в традиционных турецких местах",
adultIdea: "Принцесса Стамбула в традиционной турецкой бане с исторической архитектурой (21+)"
},
{
    id: 117,
season: "June",
event: "Royal Ascot Racing Festival",
location: "Ascot, Berkshire, England",
details: "Elite horse racing; British aristocracy; traditional afternoon tea; luxury fashion; royal enclosure experiences",
clothing: "British Royal Ascot fashion; elegant hats and fascinators; formal racing attire; luxury accessories; aristocratic styling",
photoLocation: "At Royal Ascot racecourse; in royal enclosure; during traditional British ceremonies",
adultIdea: "British aristocracy fantasy at Royal Ascot with elegant racing and luxury elements (21+)"
},
{
    id: 118,
season: "September",
event: "Edinburgh Castle Highland Games",
location: "Edinburgh, Scotland, UK",
details: "Scottish Highland traditions; castle experiences; traditional Scottish sports; whisky tastings; Celtic culture immersion",
clothing: "Scottish Highland fashion; traditional tartan elements; comfortable walking shoes; Celtic accessories; Scottish cultural styling",
photoLocation: "At Edinburgh Castle; during Highland Games; in Scottish Highland settings",
adultIdea: "Scottish Highland princess at Edinburgh Castle with Celtic traditions and castle elements (18+)"
},
{
    id: 119,
season: "November",
event: "London High Society Winter Season",
location: "London, England, UK",
details: "London social season; West End theater experiences; luxury shopping; traditional British culture; elite networking events",
clothing: "London high society fashion; elegant winter coats; luxury British accessories; sophisticated styling; aristocratic elegance",
photoLocation: "At London theaters; in luxury London venues; at British cultural locations",
adultIdea: "London socialite fantasy in luxury British setting with aristocratic and cultural elements (21+)"
},
{
    id: 120,
season: "February",
event: "Welsh Valleys Cultural Retreat",
location: "Snowdonia, Wales, UK",
details: "Welsh cultural heritage; mountain hiking; traditional Welsh music; countryside experiences; Celtic spiritual traditions",
clothing: "Welsh countryside fashion; hiking appropriate wear; Celtic cultural elements; natural outdoor styling; traditional Welsh accessories",
photoLocation: "In Welsh mountains; at traditional Welsh cultural events; in Snowdonia landscapes",
adultIdea: "Welsh mountain goddess in Celtic setting with traditional Welsh and natural elements (18+)"
},
{
    id: 121,
season: "September",
event: "Edinburgh Festival Fringe",
location: "Edinburgh, Scotland",
details: "Международный фестиваль искусств; шотландская культура; экскурсии по замкам; дегустация виски; традиционные музыкальные выступления",
clothing: "Мода в шотландском стиле; аксессуары тартан; удобная фестивальная одежда; культурные украшения; художественный макияж",
photoLocation: "У замка Эдинбург; на фестивальных сценах; в шотландских нагорьях",
adultIdea: "Богиня шотландских нагорий у древнего замка с драматичным пейзажем (18+)"
},
{
    id: 122,
season: "December",
event: "London Christmas Markets",
location: "Covent Garden, London, England",
details: "Традиционные рождественские покупки; театры Уэст-Энда; британская паб-культура; экскурсии по историческому Лондону; праздничные торжества",
clothing: "Классическая лондонская зимняя мода; элегантные пальто; удобные сапоги; британские аксессуары; современный праздничный макияж",
photoLocation: "У лондонских рождественских рынков; в театрах Уэст-Энда; у достопримечательностей Лондона",
adultIdea: "Богиня лондонской зимы в роскошном отеле с огнями города на фоне (21+)"
},
{
    id: 123,
season: "May",
event: "Cotswolds Countryside Retreat",
location: "Cotswolds, England",
details: "Английская сельская местность; традиционные пабы; экскурсии по садам; местные ремёсла; пасторальные впечатления",
clothing: "Английский сельский шик; удобная одежда для прогулок; платья для садовых вечеринок; практичная обувь; естественный сельский макияж",
photoLocation: "В английских садах; у традиционных коттеджей; на сельских тропинках",
adultIdea: "Богиня английской сельской местности в традиционном саду коттеджа с пасторальным фоном (18+)"
},
{
    id: 124,
season: "August",
event: "Stratford-upon-Avon Shakespeare Festival",
location: "Stratford-upon-Avon, England",
details: "Театральные постановки Шекспира; литературное наследие; традиционная английская культура; историческая архитектура; культурные мастер-классы",
clothing: "Мода в стиле Шекспира; аксессуары эпохи; театральный макияж; элегантная культурная одежда; литературный стайлинг",
photoLocation: "У места рождения Шекспира; на театральных представлениях; на исторических английских улицах",
adultIdea: "Муза Шекспира в историческом театре с элементами костюмов эпохи (18+)"
},
{
    id: 125,
season: "January",
event: "Iceland Northern Lights Festival",
location: "Reykjavik, Iceland",
details: "Northern lights viewing; geothermal spa experiences; Icelandic culture; glacier expeditions; traditional Scandinavian cuisine",
clothing: "Arctic winter fashion; thermal layers; waterproof gear; Nordic accessories; natural cold weather styling",
photoLocation: "Under northern lights; at geothermal spas; in Icelandic glacier landscapes",
adultIdea: "Nordic ice goddess under aurora borealis with geothermal and arctic elements (21+)"
},
{
    id: 126,
season: "May",
event: "Norwegian Fjords Adventure",
location: "Bergen & Geiranger, Norway",
details: "Fjord cruises; mountain hiking; traditional Norwegian culture; midnight sun experiences; Nordic heritage exploration",
clothing: "Norwegian outdoor fashion; hiking gear; traditional Nordic elements; practical fjord wear; Scandinavian styling",
photoLocation: "At Norwegian fjords; during midnight sun; in traditional Nordic settings",
adultIdea: "Norwegian fjord goddess in dramatic Nordic landscape with midnight sun elements (18+)"
},
{
    id: 127,
season: "August",
event: "Stockholm Archipelago Summer",
location: "Stockholm, Sweden",
details: "Archipelago island hopping; Swedish midsummer traditions; Nordic design culture; traditional Swedish cuisine; coastal experiences",
clothing: "Swedish summer fashion; archipelago casual wear; traditional midsummer elements; Nordic design inspiration; natural Swedish styling",
photoLocation: "In Stockholm archipelago; during midsummer celebrations; at Nordic design locations",
adultIdea: "Swedish archipelago goddess in midsummer setting with Nordic design and coastal elements (18+)"
},
{
    id: 128,
season: "November",
event: "Copenhagen Hygge Winter Culture",
location: "Copenhagen, Denmark",
details: "Danish hygge culture; Nordic design exploration; traditional Danish winter traditions; cozy café culture; Scandinavian lifestyle immersion",
clothing: "Danish hygge fashion; cozy Nordic wear; minimalist design elements; comfortable winter styling; Scandinavian elegance",
photoLocation: "In cozy Copenhagen cafés; at Nordic design locations; during Danish winter traditions",
adultIdea: "Danish hygge goddess in cozy Nordic setting with winter comfort and design elements (21+)"
},
{
    id: 129,
season: "June",
event: "Midnight Sun Festival",
location: "Westfjords, Iceland",
details: "24-часовой дневной свет; драматичные пейзажи; наблюдение за тупиками; традиционная исландская музыка; полуночные походы",
clothing: "Исландская летняя мода; туристическое снаряжение; удобная одежда для отдыха на природе; погодостойкие аксессуары; естественный скандинавский макияж",
photoLocation: "Среди драматичных исландских пейзажей; с тупиками; под полуночным солнцем",
adultIdea: "Богиня полуночного солнца на драматичных скалах с бесконечным днём (18+)"
},
{
    id: 130,
season: "September",
event: "Blue Lagoon Luxury Spa Week",
location: "Blue Lagoon, Iceland",
details: "Геотермальные спа-процедуры; минерально обогащённые воды; исландская велнесс-культура; роскошный отдых; вулканические пейзажи",
clothing: "Роскошная спа-одежда; удобные халаты; минимум аксессуаров; одежда для спа; естественный велнесс-макияж",
photoLocation: "В водах Голубой Лагуны; у вулканических пейзажей; в роскошных спа-отелях",
adultIdea: "Исландская спа-богиня в геотермальных водах с вулканическим фоном (21+)"
},
{
    id: 131,
season: "August",
event: "Icelandic Horse Festival",
location: "Hella, Iceland",
details: "Традиционные исландские лошади; верховая езда по сельской местности; местная культура; традиционные ремёсла; сельская жизнь Исландии",
clothing: "Исландское снаряжение для верховой езды; традиционная скандинавская мода; удобная одежда для отдыха на природе; практичные аксессуары; естественный макияж для отдыха на природе",
photoLocation: "С исландскими лошадьми; в сельских пейзажах; у традиционных ферм",
adultIdea: "Скандинавская богиня лошадей в сельской местности Исландии с драматичным пейзажем (18+)"
},
{
    id: 132,
season: "March",
event: "Iceland Volcano Adventure",
location: "South Iceland",
details: "Походы к вулканам; пляжи с чёрным песком; исследование ледяных пещер; драматичные водопады; геологические чудеса",
clothing: "Профессиональное снаряжение для походов; погодостойкая одежда; прочные сапоги; аксессуары для приключений; макияж для приключений на природе",
photoLocation: "У активных вулканов; на пляжах с чёрным песком; в ледяных пещерах",
adultIdea: "Богиня огня и льда у вулкана с драматичной исландской природой (21+)"
},
{
    id: 133,
season: "May",
event: "Prague Castle Festival",
location: "Prague, Czech Republic",
details: "Historic castle tours; Czech cultural heritage; classical music performances; traditional cuisine; medieval architecture exploration",
clothing: "Elegant European fashion; modern dresses; classic accessories; comfortable walking shoes; refined Czech makeup",
photoLocation: "At Prague Castle; on Charles Bridge; in historic Czech architecture",
adultIdea: "Czech princess fantasy in historic castle with medieval architecture (18+)"
},
{
    id: 134,
season: "October",
event: "Czech Beer Festival",
location: "Prague, Czech Republic",
details: "Traditional Czech beer culture; brewery tours; local cuisine; folk music; cultural celebrations",
clothing: "Traditional Czech folk attire; comfortable festival clothing; cultural accessories; practical shoes; natural festival makeup",
photoLocation: "At beer festival; in traditional breweries; at Czech cultural sites",
adultIdea: "Czech beer hall goddess in traditional setting with folk elements (21+)"
},
{
    id: 135,
season: "December",
event: "Prague Christmas Markets",
location: "Old Town Square, Prague",
details: "Traditional Christmas markets; Czech handicrafts; winter festivities; historic architecture; holiday celebrations",
clothing: "Elegant winter fashion; warm coats; comfortable boots; festive accessories; holiday makeup",
photoLocation: "At Christmas markets; at Prague Astronomical Clock; in festive Prague streets",
adultIdea: "Czech Christmas goddess in historic Prague with winter holiday magic (18+)"
},
{
    id: 136,
season: "July",
event: "Cesky Krumlov Medieval Festival",
location: "Cesky Krumlov, Czech Republic",
details: "Medieval reenactments; historic town exploration; traditional crafts; castle tours; cultural heritage",
clothing: "Medieval-inspired costumes; period accessories; comfortable festival attire; historical styling; themed makeup",
photoLocation: "In medieval Cesky Krumlov; at historic castle; at festival reenactments",
adultIdea: "Medieval Czech maiden in castle setting with historical elements (21+)"
},
{
    id: 137,
season: "September",
event: "Bohemian Paradise Nature Retreat",
location: "Bohemian Paradise, Czech Republic",
details: "Rock formations exploration; hiking trails; natural landscapes; outdoor adventures; ecological experiences",
clothing: "Outdoor hiking gear; comfortable nature clothing; practical accessories; weather-resistant wear; natural outdoor makeup",
photoLocation: "In rock formations; on hiking trails; at natural Czech landscapes",
adultIdea: "Bohemian nature goddess among rock formations with dramatic landscape (18+)"
},
{
    id: 138,
season: "April",
event: "Sevilla Feria de Abril",
location: "Seville, Andalusia, Spain",
details: "Traditional flamenco dancing; Spanish cultural celebration; horse parades; local cuisine; Andalusian heritage",
clothing: "Traditional flamenco dresses; vibrant Spanish fashion; comfortable dancing shoes; cultural accessories; bold Spanish makeup",
photoLocation: "At flamenco stages; in traditional Spanish architecture; at Seville landmarks",
adultIdea: "Spanish flamenco goddess in traditional Andalusian setting with passionate dance elements (18+)"
},
{
    id: 139,
season: "August",
event: "Balearic Islands Summer Festival",
location: "Majorca, Balearic Islands, Spain",
details: "Mediterranean beach culture; Spanish island lifestyle; traditional festivals; coastal adventures; local seafood cuisine",
clothing: "Spanish summer fashion; designer beachwear; light beach dresses; comfortable sandals; Mediterranean makeup",
photoLocation: "At Majorca beaches; in traditional Spanish villages; along Mediterranean coastline",
adultIdea: "Mediterranean Spanish goddess on secluded beach with crystal-blue water (21+)"
},
{
    id: 140,
season: "October",
event: "Barcelona Art & Gaudi Tour",
location: "Barcelona, Catalonia, Spain",
details: "Gaudi architecture exploration; contemporary art scene; Catalan culture; Spanish cuisine; modernist heritage",
clothing: "Artistic Barcelona fashion; modern Spanish style; comfortable walking shoes; artistic accessories; creative makeup",
photoLocation: "At Sagrada Familia; in Park Güell; on Barcelona's artistic streets",
adultIdea: "Barcelona artistic muse at Gaudi architecture with modernist elements (18+)"
},
{
    id: 141,
season: "September",
event: "La Rioja Wine Harvest",
location: "La Rioja, Spain",
details: "Spanish winemaking culture; grape harvest activities; traditional winemaking; countryside exploration; local gastronomy",
clothing: "Spanish countryside fashion; comfortable vineyard clothing; sun protection; earth-toned clothing; natural wine region makeup",
photoLocation: "In Spanish vineyards; at traditional bodegas; in countryside landscapes",
adultIdea: "Spanish wine goddess among grape vines with golden hour lighting (21+)"
},
{
    id: 142,
season: "March",
event: "Madrid Royal Heritage Tour",
location: "Madrid, Spain",
details: "Royal palaces; Spanish cultural heritage; art museums; traditional cuisine; historic architecture",
clothing: "Elegant Spanish fashion; refined dresses; classic accessories; comfortable walking shoes; sophisticated Spanish makeup",
photoLocation: "At Royal Palace of Madrid; in Prado Museum; at Madrid cultural sites",
adultIdea: "Spanish royal fantasy in palace setting with historic elegance (18+)"
},
{
    id: 143,
season: "December",
event: "Finnish Lapland Christmas Magic",
location: "Rovaniemi, Lapland, Finland",
details: "Santa Claus Village; reindeer encounters; Northern Lights observation; traditional Sami culture; arctic wildlife",
clothing: "Professional arctic gear; elegant Finnish winter fashion; warm accessories; traditional Scandinavian elements; winter makeup",
photoLocation: "At Santa Claus Village; with reindeer in snowy forest; under Northern Lights",
adultIdea: "Finnish arctic goddess in cozy cabin with Northern Lights backdrop (21+)"
},
{
    id: 144,
season: "June",
event: "Finnish Midsummer White Nights",
location: "Helsinki, Finland",
details: "Midnight sun celebration; Finnish sauna culture; traditional midsummer festivities; Baltic Sea experience; Scandinavian design",
clothing: "Finnish summer fashion; light Scandinavian clothing; comfortable leisure wear; Scandinavian accessories; natural Nordic makeup",
photoLocation: "At Baltic Sea; in traditional Finnish saunas; at midsummer celebrations",
adultIdea: "Finnish midsummer goddess under midnight sun with Baltic Sea backdrop (18+)"
},
{
    id: 145,
season: "February",
event: "Kuopio Winter Sports Festival",
location: "Kuopio, Finland",
details: "Cross-country skiing; ice swimming; winter sports competitions; Finnish wellness culture; traditional winter activities",
clothing: "Professional winter sports gear; Finnish athletic wear; thermal clothing; winter sports accessories; athletic makeup",
photoLocation: "On ski trails; at ice swimming holes; at winter sports venues",
adultIdea: "Finnish winter sports goddess in sauna with snowy contrast (21+)"
},
{
    id: 146,
season: "September",
event: "Finnish Forest & Lakes Adventure",
location: "Finnish Lakeland",
details: "Forest hiking; lake activities; mushroom and berry picking; traditional Finnish cabins; nature photography",
clothing: "Finnish outdoor leisure wear; hiking gear; comfortable nature clothing; waterproof accessories; natural outdoor makeup",
photoLocation: "In Finnish forests; at pristine lakes; in traditional log cabins",
adultIdea: "Finnish forest goddess by lake with autumn foliage backdrop (18+)"
},
{
    id: 147,
season: "August",
event: "Helsinki Design & Culture Week",
location: "Helsinki, Finland",
details: "Finnish design exhibitions; Scandinavian architecture; contemporary culture; design workshops; Nordic lifestyle",
clothing: "Finnish designer fashion; Scandinavian minimalism; modern accessories; contemporary styling; clean Nordic makeup",
photoLocation: "In design museums; at Scandinavian architecture; at cultural events",
adultIdea: "Finnish design muse in minimalist studio with Scandinavian aesthetics (21+)"
},
{
    id: 148,
season: "May",
event: "Athens Ancient Heritage Festival",
location: "Athens, Greece",
details: "Ancient Greek monuments; archaeological sites; Greek mythology; cultural heritage; traditional cuisine",
clothing: "Greek goddess-inspired fashion; light white dresses; classic accessories; comfortable sandals; goddess makeup",
photoLocation: "At Parthenon; in ancient Greek ruins; on Acropolis",
adultIdea: "Greek goddess tribute at ancient temples with classical draping (21+)"
},
{
    id: 149,
season: "August",
event: "Santorini Sunset Paradise",
location: "Santorini, Cyclades, Greece",
details: "Iconic white architecture; volcanic landscapes; wine tasting; sunset watching; Greek island culture",
clothing: "Elegant Greek island fashion; light white clothing; comfortable sandals; minimalist jewelry; Mediterranean makeup",
photoLocation: "At Santorini white buildings; on volcanic cliffs; during sunset",
adultIdea: "Santorini goddess on cliff terrace with Aegean Sea backdrop (18+)"
},
{
    id: 150,
season: "September",
event: "Crete Ancient Minoan Experience",
location: "Crete, Greece",
details: "Minoan archaeological sites; Cretan culture; traditional crafts; local cuisine; historical exploration",
clothing: "Ancient Greece-inspired clothing; traditional Cretan elements; comfortable exploration wear; historical accessories; classical makeup",
photoLocation: "At Minoan palaces; in Cretan landscapes; at ancient archaeological sites",
adultIdea: "Minoan princess fantasy in ancient palace with historical elements (21+)"
},
{
    id: 151,
season: "June",
event: "Greek Islands Yacht Adventure",
location: "Mykonos & Cyclades, Greece",
details: "Island hopping; luxury yacht experiences; Greek tavernas; beach exploration; Mediterranean lifestyle",
clothing: "Luxury yacht fashion; designer swimwear; elegant resort wear; nautical accessories; Mediterranean glamour makeup",
photoLocation: "On luxury yacht; at Greek island beaches; in traditional tavernas",
adultIdea: "Greek island goddess on private yacht with crystal waters (18+)"
},
{
    id: 152,
season: "March",
event: "Delphi Oracle Spiritual Journey",
location: "Delphi, Greece",
details: "Ancient Oracle site; spiritual experiences; Greek mythology; mountain landscapes; cultural heritage",
clothing: "Spiritual Greek fashion; flowing robes; mystical accessories; comfortable walking shoes; ethereal makeup",
photoLocation: "At Oracle of Delphi; in mountain landscapes; at ancient spiritual sites",
adultIdea: "Oracle priestess fantasy at ancient Delphi with mystical mountain backdrop (21+)"
},
{
    id: 153,
season: "July",
event: "California Extreme Sports Festival",
location: "San Diego, California, USA",
details: "Professional surfing competitions; extreme sports; beach fitness; California lifestyle; action sports photography",
clothing: "Professional surfwear; athletic beachwear; sports accessories; action sports gear; natural athletic grooming",
photoLocation: "On surfboards in ocean waves; at California beaches; in extreme sports venues",
adultIdea: "California surfer athlete on private beach with dramatic ocean waves (18+)"
},
{
    id: 154,
season: "January",
event: "Colorado Mountain Adventure",
location: "Aspen, Colorado, USA",
details: "Professional skiing; mountain climbing; winter sports; luxury mountain resorts; outdoor adventure photography",
clothing: "Professional ski gear; mountain climbing equipment; luxury winter fashion; outdoor accessories; rugged outdoor grooming",
photoLocation: "On mountain peaks; in luxury ski resorts; at dramatic Colorado landscapes",
adultIdea: "Mountain warrior by fireplace in luxury cabin with snowy peaks backdrop (21+)"
},
{
    id: 155,
season: "March",
event: "Austin Music & Tech Festival",
location: "Austin, Texas, USA",
details: "Live music performances; tech innovations; creative networking; Texas culture; music industry experiences",
clothing: "Austin hipster fashion; music festival attire; tech casual wear; creative accessories; modern urban grooming",
photoLocation: "On music festival stages; in tech venues; at Austin landmarks",
adultIdea: "Rock star fantasy in recording studio with stage lights and guitars (18+)"
},
{
    id: 156,
season: "September",
event: "Arizona Desert Expedition",
location: "Sedona, Arizona, USA",
details: "Desert hiking; red rock formations; spiritual experiences; outdoor photography; southwestern culture",
clothing: "Desert expedition gear; outdoor adventure clothing; hiking equipment; southwestern accessories; rugged outdoor grooming",
photoLocation: "At red rock formations; in desert landscapes; on hiking trails",
adultIdea: "Desert warrior among red rocks with dramatic Arizona landscape (21+)"
},
{
    id: 157,
season: "November",
event: "New York Fashion & Fitness Week",
location: "New York City, USA",
details: "Male modeling; fitness industry; urban lifestyle; fashion events; New York culture",
clothing: "New York fashion; fitted athletic wear; urban accessories; modern styling; metropolitan grooming",
photoLocation: "On NYC fashion runways; at Manhattan landmarks; in urban fitness venues",
adultIdea: "NYC urban warrior on rooftop with city skyline backdrop (18+)"
},
{
    id: 158,
season: "May",
event: "Rome Gladiator Heritage Festival",
location: "Rome, Italy",
details: "Ancient Roman history; gladiator experiences; historical reenactments; Italian culture; classical architecture",
clothing: "Roman gladiator-inspired fashion; classical Italian style; historical accessories; comfortable exploration wear; classical Roman grooming",
photoLocation: "At Colosseum; in ancient Roman sites; at historical reenactments",
adultIdea: "Roman gladiator fantasy at ancient Colosseum with classical elements (21+)"
},
{
    id: 159,
season: "August",
event: "Amalfi Coast Luxury Sailing",
location: "Amalfi Coast, Italy",
details: "Luxury yacht experiences; Italian Riviera; coastal dining; Mediterranean lifestyle; sailing adventures",
clothing: "Italian luxury fashion; sailing attire; resort wear; nautical accessories; Mediterranean grooming",
photoLocation: "On luxury yachts; at Amalfi coastline; in Italian coastal towns",
adultIdea: "Italian stallion on private yacht with Mediterranean sunset (18+)"
},
{
    id: 160,
season: "October",
event: "Tuscany Wine & Culture Tour",
location: "Chianti, Tuscany, Italy",
details: "Wine harvest; Italian vineyard culture; Tuscan countryside; traditional cuisine; cultural heritage",
clothing: "Tuscan countryside fashion; wine country attire; comfortable outdoor clothing; Italian accessories; natural wine country grooming",
photoLocation: "In Tuscan vineyards; at Italian villas; in countryside landscapes",
adultIdea: "Tuscan vineyard god among grape vines with golden hour lighting (21+)"
},
{
    id: 161,
season: "February",
event: "Venice Carnival Masquerade",
location: "Venice, Italy",
details: "Traditional Venetian masks; carnival celebrations; Italian artisan crafts; cultural heritage; romantic Venice",
clothing: "Venetian carnival costumes; elegant masks; period-inspired fashion; traditional accessories; sophisticated grooming",
photoLocation: "In Venice canals; at carnival celebrations; at St. Mark's Square",
adultIdea: "Venetian nobleman fantasy in palazzo setting with classical Italian art (18+)"
},
{
    id: 162,
season: "December",
event: "Milan Fashion & Alps Winter",
location: "Milan & Italian Alps, Italy",
details: "Milan fashion scene; Italian Alps skiing; luxury mountain resorts; Italian winter culture; fashion industry",
clothing: "Milan high fashion; luxury ski wear; Italian winter style; designer accessories; sophisticated Italian grooming",
photoLocation: "In Milan fashion districts; on Italian Alps; at luxury mountain resorts",
adultIdea: "Italian fashion god in Milan atelier with luxury fashion elements (21+)"
}
];

export default events;
