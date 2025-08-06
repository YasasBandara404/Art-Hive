
// Categories
export const CATEGORIES = [
  { id: 1, name: "Digital Art", slug: "digital-art" },
  { id: 2, name: "Comic Books", slug: "comic-books" },
  { id: 3, name: "Wall Arts", slug: "wall-arts" },
  { id: 4, name: "Anime Books", slug: "anime-books" },
  { id: 5, name: "Anime Arts", slug: "anime-arts" },
  { id: 6, name: "Sketch Arts", slug: "sketch-arts" }
];

// Mock Products
export const PRODUCTS = [
  // Digital Art Products
  {
    id: 101,
    title: "Premium Landscape Digital Art Pack",
    slug: "premium-landscape-digital-art",
    description: "A collection of 10 high-resolution digital landscape artworks perfect for framing or web display.",
    price: 6500,
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    category: "Digital Art",
    tags: ["landscape", "digital", "art"],
    creatorId: 1,
    rating: 4.7,
    reviewCount: 32,
    featured: true
  },
  {
    id: 102,
    title: "Cyberpunk City Digital Artwork",
    slug: "cyberpunk-city-digital-artwork",
    description: "Futuristic cyberpunk cityscape with neon lights and detailed architecture in high resolution.",
    price: 5800,
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    category: "Digital Art",
    tags: ["cyberpunk", "city", "digital"],
    creatorId: 3,
    rating: 4.6,
    reviewCount: 28,
    featured: false
  },
  {
    id: 103,
    title: "Abstract Digital Art Collection",
    slug: "abstract-digital-art-collection",
    description: "Set of 5 vibrant abstract digital art pieces with vivid colors and dynamic shapes.",
    price: 4900,
    thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
    category: "Digital Art",
    tags: ["abstract", "colorful", "digital"],
    creatorId: 2,
    rating: 4.5,
    reviewCount: 21,
    featured: false
  },
  {
    id: 104,
    title: "Digital Fantasy World Illustrations",
    slug: "digital-fantasy-world-illustrations",
    description: "Collection of fantasy world illustrations with mythical creatures and magical landscapes.",
    price: 7200,
    thumbnail: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=80",
    category: "Digital Art",
    tags: ["fantasy", "illustration", "digital"],
    creatorId: 4,
    rating: 4.8,
    reviewCount: 37,
    featured: true
  },
  {
    id: 105,
    title: "Digital Portrait Art Series",
    slug: "digital-portrait-art-series",
    description: "Beautifully detailed digital portrait artworks in various artistic styles.",
    price: 5500,
    thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    category: "Digital Art",
    tags: ["portrait", "digital", "art"],
    creatorId: 1,
    rating: 4.7,
    reviewCount: 24,
    featured: false
  },
  
  // Comic Books Products
  {
    id: 201,
    title: "Original Superhero Comic Book Series",
    slug: "original-superhero-comic-series",
    description: "Complete 5-issue series following an original superhero story with vibrant artwork.",
    price: 8900,
    thumbnail: "https://images.unsplash.com/photo-1608889175638-9322300c74f8?auto=format&fit=crop&w=800&q=80",
    category: "Comic Books",
    tags: ["superhero", "series", "original"],
    creatorId: 5,
    rating: 4.9,
    reviewCount: 42,
    featured: true
  },
  {
    id: 202,
    title: "Fantasy Adventure Comic Collection",
    slug: "fantasy-adventure-comic-collection",
    description: "Digital collection of fantasy adventure comics with epic quests and magical worlds.",
    price: 7500,
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    category: "Comic Books",
    tags: ["fantasy", "adventure", "magic"],
    creatorId: 3,
    rating: 4.6,
    reviewCount: 31,
    featured: false
  },
  {
    id: 203,
    title: "Sci-Fi Space Exploration Comics",
    slug: "sci-fi-space-exploration-comics",
    description: "Series of science fiction comics about space exploration and alien civilizations.",
    price: 6800,
    thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    category: "Comic Books",
    tags: ["sci-fi", "space", "aliens"],
    creatorId: 6,
    rating: 4.5,
    reviewCount: 27,
    featured: false
  },
  {
    id: 204,
    title: "Noir Detective Comic Bundle",
    slug: "noir-detective-comic-bundle",
    description: "Dark and atmospheric detective comics with intricate mysteries and plot twists.",
    price: 7200,
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    category: "Comic Books",
    tags: ["noir", "detective", "mystery"],
    creatorId: 4,
    rating: 4.7,
    reviewCount: 33,
    featured: true
  },
  {
    id: 205,
    title: "Horror Comic Anthology",
    slug: "horror-comic-anthology",
    description: "Collection of spine-chilling horror comics with terrifying tales and eerie artwork.",
    price: 8100,
    thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
    category: "Comic Books",
    tags: ["horror", "anthology", "suspense"],
    creatorId: 2,
    rating: 4.8,
    reviewCount: 38,
    featured: false
  },
  
  // Wall Arts Products
  {
    id: 301,
    title: "Minimalist Abstract Wall Art Set",
    slug: "minimalist-abstract-wall-art-set",
    description: "Set of 3 printable minimalist abstract wall art pieces with clean lines and subtle colors.",
    price: 5200,
    thumbnail: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=800&q=80",
    category: "Wall Arts",
    tags: ["minimalist", "abstract", "printable"],
    creatorId: 7,
    rating: 4.8,
    reviewCount: 45,
    featured: true
  },
  {
    id: 302,
    title: "Japanese Landscape Wall Art Collection",
    slug: "japanese-landscape-wall-art-collection",
    description: "Beautiful Japanese-inspired landscape wall arts with mountains, cherry blossoms, and traditional elements.",
    price: 6800,
    thumbnail: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=80",
    category: "Wall Arts",
    tags: ["japanese", "landscape", "traditional"],
    creatorId: 5,
    rating: 4.9,
    reviewCount: 52,
    featured: true
  },
  {
    id: 303,
    title: "Geometric Patterns Wall Art Bundle",
    slug: "geometric-patterns-wall-art-bundle",
    description: "Collection of geometric pattern wall arts with bold shapes and vivid color combinations.",
    price: 4500,
    thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    category: "Wall Arts",
    tags: ["geometric", "patterns", "modern"],
    creatorId: 3,
    rating: 4.6,
    reviewCount: 38,
    featured: false
  },
  {
    id: 304,
    title: "Botanical Illustration Wall Arts",
    slug: "botanical-illustration-wall-arts",
    description: "Detailed botanical illustrations of plants and flowers, perfect for home or office decoration.",
    price: 5900,
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    category: "Wall Arts",
    tags: ["botanical", "illustration", "nature"],
    creatorId: 1,
    rating: 4.7,
    reviewCount: 41,
    featured: false
  },
  {
    id: 305,
    title: "Urban Cityscape Wall Art Series",
    slug: "urban-cityscape-wall-art-series",
    description: "Series of urban cityscape wall arts showcasing famous city skylines in different styles.",
    price: 6300,
    thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
    category: "Wall Arts",
    tags: ["cityscape", "urban", "skyline"],
    creatorId: 6,
    rating: 4.5,
    reviewCount: 36,
    featured: true
  },
  
  // Anime Books Products
  {
    id: 401,
    title: "Fantasy Anime Art Book Collection",
    slug: "fantasy-anime-art-book-collection",
    description: "Collection of digital anime art books featuring fantasy worlds and characters.",
    price: 9200,
    thumbnail: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=800&q=80",
    category: "Anime Books",
    tags: ["fantasy", "anime", "art book"],
    creatorId: 8,
    rating: 4.9,
    reviewCount: 56,
    featured: true
  },
  {
    id: 402,
    title: "Mecha Design Anime Book",
    slug: "mecha-design-anime-book",
    description: "Digital book featuring detailed mecha designs and concept art for sci-fi anime enthusiasts.",
    price: 7800,
    thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    category: "Anime Books",
    tags: ["mecha", "design", "sci-fi"],
    creatorId: 6,
    rating: 4.7,
    reviewCount: 43,
    featured: false
  },
  {
    id: 403,
    title: "Character Design Anime Guide Book",
    slug: "character-design-anime-guide-book",
    description: "Comprehensive guide to anime character design with tutorials and examples.",
    price: 6500,
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    category: "Anime Books",
    tags: ["character design", "tutorial", "guide"],
    creatorId: 4,
    rating: 4.8,
    reviewCount: 48,
    featured: true
  },
  {
    id: 404,
    title: "Anime Background Art Collection",
    slug: "anime-background-art-collection",
    description: "Digital book showcasing beautiful background art styles for anime productions.",
    price: 5900,
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    category: "Anime Books",
    tags: ["background art", "scenery", "landscapes"],
    creatorId: 5,
    rating: 4.6,
    reviewCount: 39,
    featured: false
  },
  {
    id: 405,
    title: "Manga Drawing Techniques Book",
    slug: "manga-drawing-techniques-book",
    description: "Digital book with manga drawing techniques, tips, and step-by-step tutorials.",
    price: 7200,
    thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
    category: "Anime Books",
    tags: ["manga", "drawing", "techniques"],
    creatorId: 2,
    rating: 4.9,
    reviewCount: 61,
    featured: true
  },
  
  // Anime Arts Products
  {
    id: 501,
    title: "Anime Character Portrait Collection",
    slug: "anime-character-portrait-collection",
    description: "Set of high-quality anime character portraits in various styles and expressions.",
    price: 8500,
    thumbnail: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
    category: "Anime Arts",
    tags: ["character", "portrait", "anime"],
    creatorId: 9,
    rating: 4.8,
    reviewCount: 49,
    featured: true
  },
  {
    id: 502,
    title: "Anime Landscape Backgrounds",
    slug: "anime-landscape-backgrounds",
    description: "Beautiful anime-style landscape artwork ideal for backgrounds or wallpapers.",
    price: 6200,
    thumbnail: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=80",
    category: "Anime Arts",
    tags: ["landscape", "background", "scenic"],
    creatorId: 7,
    rating: 4.6,
    reviewCount: 37,
    featured: false
  },
  {
    id: 503,
    title: "Chibi Character Art Package",
    slug: "chibi-character-art-package",
    description: "Adorable collection of chibi-style anime character illustrations and assets.",
    price: 5800,
    thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    category: "Anime Arts",
    tags: ["chibi", "cute", "characters"],
    creatorId: 3,
    rating: 4.9,
    reviewCount: 53,
    featured: true
  },
  {
    id: 504,
    title: "Anime Action Scene Illustrations",
    slug: "anime-action-scene-illustrations",
    description: "Dynamic anime-style illustrations featuring action scenes with detailed effects.",
    price: 7400,
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    category: "Anime Arts",
    tags: ["action", "dynamic", "effects"],
    creatorId: 6,
    rating: 4.7,
    reviewCount: 42,
    featured: false
  },
  {
    id: 505,
    title: "Fantasy Anime Creature Designs",
    slug: "fantasy-anime-creature-designs",
    description: "Collection of fantasy creature designs in anime style with concept notes.",
    price: 6900,
    thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
    category: "Anime Arts",
    tags: ["fantasy", "creatures", "concept art"],
    creatorId: 5,
    rating: 4.8,
    reviewCount: 46,
    featured: true
  },
  
  // Sketch Arts Products
  {
    id: 601,
    title: "Urban Sketching Art Collection",
    slug: "urban-sketching-art-collection",
    description: "Digital collection of urban sketch artworks capturing city life and architecture.",
    price: 5600,
    thumbnail: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    category: "Sketch Arts",
    tags: ["urban", "architecture", "city life"],
    creatorId: 4,
    rating: 4.7,
    reviewCount: 39,
    featured: true
  },
  {
    id: 602,
    title: "Character Design Sketch Bundle",
    slug: "character-design-sketch-bundle",
    description: "Comprehensive bundle of character design sketches with development notes.",
    price: 7800,
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    category: "Sketch Arts",
    tags: ["character design", "development", "concept"],
    creatorId: 2,
    rating: 4.8,
    reviewCount: 43,
    featured: false
  },
  {
    id: 603,
    title: "Botanical Sketches Collection",
    slug: "botanical-sketches-collection",
    description: "Detailed botanical sketches of various plants and flowers in traditional style.",
    price: 5200,
    thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    category: "Sketch Arts",
    tags: ["botanical", "plants", "traditional"],
    creatorId: 1,
    rating: 4.6,
    reviewCount: 37,
    featured: true
  },
  {
    id: 604,
    title: "Animal Studies Sketch Art",
    slug: "animal-studies-sketch-art",
    description: "Collection of detailed animal study sketches exploring various species and anatomy.",
    price: 6400,
    thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
    category: "Sketch Arts",
    tags: ["animals", "anatomy", "studies"],
    creatorId: 7,
    rating: 4.9,
    reviewCount: 51,
    featured: false
  },
  {
    id: 605,
    title: "Portrait Sketching Techniques",
    slug: "portrait-sketching-techniques",
    description: "Digital collection of portrait sketches demonstrating various techniques and styles.",
    price: 5900,
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    category: "Sketch Arts",
    tags: ["portrait", "techniques", "styles"],
    creatorId: 3,
    rating: 4.8,
    reviewCount: 45,
    featured: true
  }
];

// Mock Users
export const USERS = [
  {
    id: 1,
    name: "Ajith Fernando",
    username: "ajithcreatives",
    avatar: "/placeholder.svg",
    bio: "Digital artist specializing in landscape and conceptual art",
    isAdmin: true
  },
  {
    id: 2,
    name: "Priya Sharma",
    username: "priyabusiness",
    avatar: "/placeholder.svg",
    bio: "Business consultant and template designer",
    isAdmin: false
  },
  {
    id: 3,
    name: "Malik Ahmed",
    username: "malikart",
    avatar: "/placeholder.svg",
    bio: "Specialized in digital arts with a focus on cyberpunk themes",
    isAdmin: false
  },
  {
    id: 4,
    name: "Tharushi Silva",
    username: "tharushistudios",
    avatar: "/placeholder.svg",
    bio: "Fantasy illustrator and character designer",
    isAdmin: false
  },
  {
    id: 5,
    name: "Dinesh Perera",
    username: "dperera",
    avatar: "/placeholder.svg",
    bio: "Comic book artist and storyteller with 10+ years experience",
    isAdmin: false
  },
  {
    id: 6,
    name: "Amaya Jayawardena",
    username: "amayaj",
    avatar: "/placeholder.svg",
    bio: "Sci-fi concept artist and mecha designer",
    isAdmin: false
  },
  {
    id: 7,
    name: "Rohan Mendis",
    username: "rohanart",
    avatar: "/placeholder.svg",
    bio: "Wall art specialist with a focus on minimalist design",
    isAdmin: false
  },
  {
    id: 8,
    name: "Lakshmi Gunawardana",
    username: "lakshmig",
    avatar: "/placeholder.svg",
    bio: "Traditional artist turned digital, specializing in anime art books",
    isAdmin: false
  },
  {
    id: 9,
    name: "Nuwan Bandara",
    username: "nuwanarts",
    avatar: "/placeholder.svg",
    bio: "Character artist specializing in anime portraits and expressions",
    isAdmin: false
  }
];

// Mock Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    content: "Create & Trade has transformed how I sell my digital art. The platform is intuitive and the community is incredibly supportive.",
    author: "Nimal Perera",
    role: "Digital Artist",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    content: "I've been able to reach so many more customers through Create & Trade than I ever could on my own. The sales tools are fantastic!",
    author: "Chamari Silva",
    role: "E-book Author",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    content: "As someone who creates educational content, I appreciate how Create & Trade makes it easy for me to showcase my courses to interested learners.",
    author: "Ashan Jayawardena",
    role: "Course Creator",
    avatar: "/placeholder.svg"
  }
];
