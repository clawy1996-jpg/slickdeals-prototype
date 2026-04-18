export type Deal = {
  id: string;
  slug: string;
  title: string;
  store: string;
  storeSlug: string;
  currentPrice: string;
  oldPrice?: string;
  shipping?: string;
  temperature: number;
  comments: number;
  submittedBy: string;
  submittedAt: string;
  tag: "new" | "trending" | "staff pick" | "popular" | "ending soon";
  category: string;
  brand: string;
  image: string;
  summary: string;
  editorNote?: string;
  communityNote?: string;
  bullets: string[];
};

export type ForumThread = {
  id: string;
  title: string;
  forum: string;
  author: string;
  replies: number;
  views: string;
  lastPost: string;
  sticky?: boolean;
  hot?: boolean;
  badge?: string;
};

export type Coupon = {
  id: string;
  store: string;
  storeSlug: string;
  title: string;
  code?: string;
  savings: string;
  successRate: string;
  category: string;
  description: string;
};

export type AlertItem = {
  id: string;
  keyword: string;
  store?: string;
  category?: string;
  brand?: string;
  cadence: "Instant" | "Daily";
  channel: "Email" | "Push" | "In-app";
};

export const categories = [
  "Trending",
  "New",
  "Popular",
  "Electronics",
  "Home",
  "Travel",
  "Apparel",
  "Gaming",
  "Freebies",
];

export const deals: Deal[] = [
  {
    id: "d1",
    slug: "nova-audio-pro-headphones",
    title: "Nova Audio Pro ANC Headphones with Travel Case",
    store: "Aster Retail",
    storeSlug: "aster-retail",
    currentPrice: "$129",
    oldPrice: "$249",
    shipping: "+ Free shipping",
    temperature: 412,
    comments: 128,
    submittedBy: "dealpilot",
    submittedAt: "9 min ago",
    tag: "trending",
    category: "Electronics",
    brand: "Nova Audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    summary: "Flagship-style wireless headphones with adaptive noise canceling, multipoint pairing, and a 40-hour battery.",
    editorNote: "The hero deal pattern is image-left, metadata stacked, and engagement counts tight to the CTA row.",
    communityNote: "People are comparing this one against mainstream premium models and calling it the sweet spot under $150.",
    bullets: [
      "Bluetooth 5.4 with dual-device pairing",
      "Fast charge adds 8 hours in 10 minutes",
      "Hard shell case included"
    ]
  },
  {
    id: "d2",
    slug: "forge-chef-cookware-set",
    title: "Forge Chef 12-Piece Stainless Cookware Set",
    store: "Kitchen Harbor",
    storeSlug: "kitchen-harbor",
    currentPrice: "$199",
    oldPrice: "$420",
    shipping: "+ Free shipping",
    temperature: 287,
    comments: 64,
    submittedBy: "pantryqueen",
    submittedAt: "21 min ago",
    tag: "popular",
    category: "Home",
    brand: "Forge Chef",
    image: "https://images.unsplash.com/photo-1584990347449-ae15a7dd7db5?auto=format&fit=crop&w=900&q=80",
    summary: "Polished 5-ply cookware bundle with induction support and oven-safe lids.",
    editorNote: "Merchandising callouts often sit beside the price block to increase scan speed.",
    communityNote: "Thread sentiment is strong because the set includes the pan sizes most people actually use.",
    bullets: [
      "Includes 8\", 10\", and 12\" pans",
      "Dishwasher safe",
      "Lifetime warranty"
    ]
  },
  {
    id: "d3",
    slug: "pixelnest-mini-projector",
    title: "PixelNest Mini Projector 1080p with Streaming Apps",
    store: "ViewPort",
    storeSlug: "viewport",
    currentPrice: "$89",
    oldPrice: "$169",
    shipping: "+ Free shipping",
    temperature: 198,
    comments: 44,
    submittedBy: "screenfiend",
    submittedAt: "34 min ago",
    tag: "new",
    category: "Electronics",
    brand: "PixelNest",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    summary: "Compact streaming projector with auto-keystone, built-in apps, and portable tripod.",
    communityNote: "Not home theater grade, but users like it as a casual bedroom and backyard option.",
    bullets: [
      "Native 1080p playback",
      "Wi‑Fi 6 streaming",
      "Built-in 10W speaker"
    ]
  },
  {
    id: "d4",
    slug: "trailgrid-rolling-cooler",
    title: "TrailGrid 52-Quart Rolling Cooler",
    store: "Summit Supply",
    storeSlug: "summit-supply",
    currentPrice: "$74",
    oldPrice: "$139",
    shipping: "+ Store pickup eligible",
    temperature: 146,
    comments: 19,
    submittedBy: "campmode",
    submittedAt: "51 min ago",
    tag: "ending soon",
    category: "Outdoors",
    brand: "TrailGrid",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    summary: "Large wheeled cooler with oversized handles, cup holders, and two-day ice retention.",
    bullets: [
      "Telescoping handle",
      "All-terrain wheels",
      "Drain plug for cleanup"
    ]
  },
  {
    id: "d5",
    slug: "linenlane-sheet-bundle",
    title: "LinenLane Cooling Sheet Bundle, Queen Size",
    store: "HomeCanvas",
    storeSlug: "homecanvas",
    currentPrice: "$39",
    oldPrice: "$88",
    shipping: "+ Free shipping",
    temperature: 171,
    comments: 37,
    submittedBy: "sleepstack",
    submittedAt: "1 hr ago",
    tag: "staff pick",
    category: "Home",
    brand: "LinenLane",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    summary: "Four-piece bamboo blend sheet set in muted solid colors with deep pockets.",
    bullets: [
      "Fits up to 18-inch mattresses",
      "Machine washable",
      "Six colorways"
    ]
  },
  {
    id: "d6",
    slug: "vortex-play-arcade-stick",
    title: "Vortex Play Wireless Arcade Stick for PC and Switch",
    store: "ButtonBox",
    storeSlug: "buttonbox",
    currentPrice: "$59",
    oldPrice: "$119",
    shipping: "+ Free shipping",
    temperature: 229,
    comments: 56,
    submittedBy: "frameperfect",
    submittedAt: "1 hr ago",
    tag: "popular",
    category: "Gaming",
    brand: "Vortex Play",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=80",
    summary: "Mod-friendly wireless fight stick with detachable cable and swappable gate plates.",
    bullets: [
      "Low-latency 2.4GHz mode",
      "Hall effect stick module",
      "Works on PC and Switch"
    ]
  }
];

export const relatedDeals = deals.slice(1, 5);

export const forumThreads: ForumThread[] = [
  { id: "f1", title: "Weekend tech markdown megathread", forum: "Hot Deals", author: "binarycoupon", replies: 224, views: "34.1K", lastPost: "2 min ago", sticky: true, badge: "Pinned" },
  { id: "f2", title: "Best compact espresso setups under $400", forum: "Deal Talk", author: "beanmode", replies: 81, views: "9.8K", lastPost: "11 min ago", hot: true, badge: "Hot" },
  { id: "f3", title: "Warehouse clearout: standing desks and task chairs", forum: "Hot Deals", author: "postandsave", replies: 97, views: "12.4K", lastPost: "23 min ago" },
  { id: "f4", title: "Travel flash sale watchlist for late spring trips", forum: "Travel Deals", author: "aislewindow", replies: 41, views: "5.2K", lastPost: "38 min ago" },
  { id: "f5", title: "Gaming monitor roundup, IPS vs OLED bargains", forum: "Hot Deals", author: "refreshrate", replies: 153, views: "18.7K", lastPost: "1 hr ago", hot: true },
  { id: "f6", title: "Coupon stacking wins this week", forum: "Coupons", author: "stackmaven", replies: 68, views: "8.1K", lastPost: "1 hr ago" }
];

export const coupons: Coupon[] = [
  { id: "c1", store: "Aster Retail", storeSlug: "aster-retail", title: "Extra 20% off audio gear", code: "SONIC20", savings: "20% Off", successRate: "Verified 92%", category: "Electronics", description: "Works on headphones, earbuds, and charging accessories." },
  { id: "c2", store: "HomeCanvas", storeSlug: "homecanvas", title: "Take $15 off orders over $100", code: "ROOM15", savings: "$15 Off", successRate: "Verified 88%", category: "Home", description: "Applies to bedding, throws, and accent decor." },
  { id: "c3", store: "ViewPort", storeSlug: "viewport", title: "Refurb projector clearance", savings: "Up to 45% Off", successRate: "Updated today", category: "Electronics", description: "No code needed, discounted in cart." },
  { id: "c4", store: "Summit Supply", storeSlug: "summit-supply", title: "Free shipping on camp bundles", code: "TRAILSHIP", savings: "Free Shipping", successRate: "Verified 79%", category: "Outdoors", description: "Good on coolers, chairs, and lanterns." },
  { id: "c5", store: "ButtonBox", storeSlug: "buttonbox", title: "Arcade and controller sale", savings: "Save up to 30%", successRate: "Updated 1 hr ago", category: "Gaming", description: "Includes sticks, fight pads, and keycaps." },
  { id: "c6", store: "TripMint", storeSlug: "tripmint", title: "Spring hotel flash rate", code: "GETAWAY10", savings: "10% Off", successRate: "Verified 85%", category: "Travel", description: "Eligible on stays through June." }
];

export const alerts: AlertItem[] = [
  { id: "a1", keyword: "OLED TV", store: "Aster Retail", category: "Electronics", cadence: "Instant", channel: "Push" },
  { id: "a2", keyword: "carry-on luggage", store: "Summit Supply", category: "Travel", cadence: "Daily", channel: "Email" },
  { id: "a3", keyword: "espresso machine", brand: "Forge Chef", category: "Home", cadence: "Instant", channel: "In-app" }
];

export const giveaway = {
  title: "Spring Scoreboard Giveaway",
  prize: "Win a dream setup bundle worth $2,500",
  bannerImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1400&q=80",
  endsIn: "02d 13h 42m",
  entries: 18423,
  comments: 312,
  description: "Prototype version of a promotional giveaway page with a bold hero block, countdown urgency, and community chatter below.",
};

export const featuredStores = ["Aster Retail", "HomeCanvas", "ViewPort", "ButtonBox", "TripMint", "Summit Supply"];
