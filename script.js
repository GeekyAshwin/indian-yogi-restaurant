/* ============================================================
   INDIAN YOGI RESTAURANT — script.js
   MGR Global Connect–Inspired Dark & Gold Theme
============================================================ */

/* ─── TRANSLATIONS ───────────────────────────────────────── */
const translations = {
  en: {
    nav_home: "Home", nav_menu: "Menu", nav_gallery: "Gallery", nav_about: "About", nav_reviews: "Reviews", nav_contact: "Contact", nav_download: "Digital Card",
    hero_badge: "Est. 2018 · Isumi, Chiba", hero_title_1: "Indian", hero_title_2: "YOGI", hero_title_3: "Restaurant ヨギ",
    hero_subtitle: "Authentic Indian Cuisine in Isumi, Chiba", view_menu: "View Menu", contact_us: "Contact Us",
    about_label: "Our Story", about_title_1: "A Harmony of", about_title_2: "Two Cultures",
    about_desc1: "Born from a passion for mindful dining, Indian Yogi Restaurant was conceived as a sanctuary where the vibrant, soulful spices of India are presented through the calm, intentional lens of Japanese aesthetics.",
    about_desc2: "Our chefs weave centuries of culinary tradition into every dish — the boldness of Indian masalas harmonizing with the serene presentation of Japanese wabi-sabi philosophy. Every meal is a meditation.",
    phil_1_title: "LGBTQ+ Friendly", phil_1_desc: "Everyone is welcome at our table. We celebrate diversity and inclusion.",
    phil_2_title: "Authentic Flavors", phil_2_desc: "Traditional Indian recipes prepared with love and the finest ingredients.",
    menu_label: "Culinary Offerings", menu_title_1: "Our", menu_title_2: "Menu",
    menu_desc: "A curated selection of authentic Indian flavors, plated with the precision and elegance of Japanese artistry.",
    tab_starters: "Starters", tab_mains: "Main Course", tab_desserts: "Desserts", tab_drinks: "Drinks",
    gallery_label: "Visual Journey", gallery_title_1: "Our", gallery_title_2: "Gallery",
    gallery_desc: "Every frame tells the story of flavor, craft, and the quiet art of Indian Yogi.",
    tab_featured: "Featured", tab_food: "Food", tab_best: "Bestsellers", tab_ambience: "Ambience", tab_menu_list: "Our Menu", tab_moments: "Moments",
    hours_label: "Visit Us", hours_title_1: "Opening", hours_title_2: "Hours",
    lunch_label: "Lunch", dinner_label: "Dinner", closed: "Closed",
    mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday", fri: "Friday", sat: "Saturday", sun: "Sunday",
    parent_title: "Parent Company", parent_name: "Indra International CO., LTD.",
    parent_services: "We provide complete support for international business and travel management, including transportation, hotel bookings, itinerary planning, and on-ground assistance.",
    parent_president_label: "President:", parent_president: "SINGH GOVIND SHREEMADYA", parent_email_label: "Email:",
    tab_others: "Others"
  },
  jp: {
    nav_home: "ホーム", nav_menu: "メニュー", nav_gallery: "ギャラリー", nav_about: "わたしたちについて", nav_reviews: "レビュー", nav_contact: "予約・連絡", nav_download: "デジタルカード",
    hero_badge: "2018年創業 · 千葉県いすみ市", hero_title_1: "インド料理", hero_title_2: "ヨギ", hero_title_3: "レストラン YOGI",
    hero_subtitle: "千葉県いすみ市で味わう本格インド料理", view_menu: "メニューを見る", contact_us: "お問い合わせ",
    about_label: "私たちの物語", about_title_1: "二つの文化の", about_title_2: "調和",
    about_desc1: "マインドフルな食事への情熱から生まれたインディアン・ヨギ・レストランは、インドの活気あふれる魂のスパイスを、日本の美意識という穏やかで意図的なレンズを通して表現する聖域として構想されました。",
    about_desc2: "当店のシェフは、何世紀にもわたる料理の伝統を一皿ごとに織り交ぜています。インドのマサラの力強さが、日本のわびさび哲学の静かな盛り付けと調和しています。すべての食事が瞑想です。",
    phil_1_title: "LGBTQ+ フレンドリー", phil_1_desc: "どなたでも大歓迎です。私たちは多様性と包摂性を大切にしています。",
    phil_2_title: "本物の味わい", phil_2_desc: "愛情を込めて調理された、最高級の食材を使用した伝統的なインドのレシピ。",
    menu_label: "料理の提供", menu_title_1: "お料理", menu_title_2: "メニュー",
    menu_desc: "日本の芸術性の精密さと優雅さで盛り付けられた、本物のインドの味の厳選されたセレクション。",
    tab_starters: "前菜", tab_mains: "メインコース", tab_desserts: "デザート", tab_drinks: "お飲み物",
    gallery_label: "視覚の旅", gallery_title_1: "フォト", gallery_title_2: "ギャラリー",
    gallery_desc: "すべてのフレームが、風味、技術、そしてインディアン・ヨギの静かな芸術の物語を語ります。",
    tab_featured: "おすすめ", tab_food: "料理", tab_best: "人気メニュー", tab_ambience: "雰囲気", tab_menu_list: "メニュー表", tab_moments: "大切な時間",
    hours_label: "ご来店をお待ちしております", hours_title_1: "営業", hours_title_2: "時間",
    lunch_label: "ランチ", dinner_label: "ディナー", closed: "定休日",
    mon: "月曜日", tue: "火曜日", wed: "水曜日", thu: "木曜日", fri: "金曜日", sat: "土曜日", sun: "日曜日",
    parent_title: "親会社", parent_name: "インドラ・インターナショナル有限会社",
    parent_services: "国際ビジネスや旅行管理を完全にサポートし、輸送、ホテルの予約、旅程の計画、現地の支援を提供しています。スパイスの販売も行っております。",
    parent_president_label: "代表取締役:", parent_president: "シング・ゴヴィンド・シュリマディヤ", parent_email_label: "メール:",
    tab_others: "その他"
  }
};

let currentLang = 'en';

function switchLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update active state of toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update menu rendering to reflect language change if needed (not strictly necessary if using keys in objects, but good for UI)
  renderMenu(document.querySelector('.menu-tab.active').dataset.cat);
}

async function downloadVisitingCard() {
  const file = currentLang === 'en' ? 'images/visiting-card-eng.jpeg' : 'images/visiting-card-jap.jpeg';
  try {
    const response = await fetch(file);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = file.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Download failed:', error);
    // Fallback
    const link = document.createElement('a');
    link.href = file;
    link.download = file.split('/').pop();
    link.click();
  }
}

/* ─── DATA ───────────────────────────────────────────────── */
const menuData = {
  starters: [
    { name: 'Samosa Chaat', name_jp: 'サモサ・チャート', desc: 'Crispy samosas, tangy tamarind, fresh coriander, spiced yogurt — plated minimally on black slate.', desc_jp: 'カリカリのサモサに、タマリンド、フレッシュコリアンダー、スパイスヨーグルトを添えて。', price: '₹220', tag: 'Signature', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80' },
    { name: 'Tandoori Mushroom', name_jp: 'タンドリーマッシュルーム', desc: 'Forest mushrooms marinated in smoky tandoori masala, finished with lime leaf oil.', desc_jp: 'スモーキーなタンドリーマサラに漬け込んだ森のキノコ。', price: '₹280', tag: 'Veg', img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80' },
    { name: 'Seekh Kebab', name_jp: 'シークケバブ', desc: 'Hand-minced lamb spiced with coriander and cardamom, charred on skewers, mint chutney.', desc_jp: 'コリアンダーとカルダモンで味付けしたラムのひき肉の串焼き。', price: '₹320', tag: 'Chef\'s Pick', img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80' },
    { name: 'Dahi Puri', name_jp: 'ダヒ・プリ', desc: 'Crispy semolina shells, sweet yogurt, pomegranate, tamarind — a burst of flavour.', desc_jp: 'セモリナ粉の殻に、甘いヨーグルト、ザクロ、タマリンドを詰めた一品。', price: '₹180', tag: 'Popular', img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80' },
    { name: 'Paneer Tikka', name_jp: 'パニール・ティッカ', desc: 'Cottage cheese cubes marinated in saffron yogurt, grilled to perfection in our tandoor.', desc_jp: 'サフランヨーグルトに漬け込み、釜で焼き上げたカッテージチーズ。', price: '₹300', tag: 'Veg', img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80' },
    { name: 'Fish Amritsari', name_jp: 'フィッシュ・アムリトサリ', desc: 'Battered river fish seasoned with carom seeds and turmeric, crisp-fried, chaat masala dusted.', desc_jp: 'ターメリックなどで味付けし、カリッと揚げた川魚のフライ。', price: '₹350', tag: 'Seasonal', img: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=600&q=80' },
  ],
  mains: [
    { name: 'Dal Makhani', desc: 'Black lentils slow-cooked for 18 hours with butter, cream and aromatic spices. A true classic.', price: '₹340', tag: 'Classic', img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80' },
    { name: 'Rogan Josh', desc: 'Kashmiri lamb braised in whole spices, dried roses and fennel — rich, warming, profound.', price: '₹520', tag: 'Signature', img: 'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=600&q=80' },
    { name: 'Butter Chicken', desc: 'Tender chicken in our legendary tomato cream masala — velvety, aromatic, timeless.', price: '₹450', tag: 'Popular', img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80' },
    { name: 'Saag Paneer', desc: 'Spinach and mustard leaf purée with paneer, tempered with ginger, garlic and green chilli.', price: '₹320', tag: 'Veg', img: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&q=80' },
    { name: 'Prawn Masala', desc: 'Tiger prawns in a bold coastal masala with curry leaf, kokum and freshly grated coconut.', price: '₹580', tag: 'Chef\'s Pick', img: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600&q=80' },
    { name: 'Biryani Dum', desc: 'Long grain basmati with saffron, caramelised onions and slow-cooked meat. Sealed and dum-cooked.', price: '₹480', tag: 'Signature', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80' },
  ],
  desserts: [
    { name: 'Gulab Jamun', desc: 'Rose water–soaked milk solid dumplings, cardamom syrup, edible gold leaf. Warmly divine.', price: '₹180', tag: 'Classic', img: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=600&q=80' },
    { name: 'Kulfi Faluda', desc: 'Hand-churned pistachio and rose kulfi, chilled rose milk, saffron vermicelli.', price: '₹220', tag: 'Popular', img: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=600&q=80' },
    { name: 'Phirni', desc: 'Slow-set rice pudding in a clay pot — rose, cardamom, silver vark. Cool, milky perfection.', price: '₹190', tag: 'Seasonal', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80' },
    { name: 'Ras Malai', desc: 'Pillowy chenna discs soaked in chilled saffron milk, garnished with crushed pistachios.', price: '₹200', tag: 'Signature', img: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&q=80' },
    { name: 'Shahi Tukda', desc: 'Fried bread royale soaked in rabri — rich, decadent and steeped in Mughal heritage.', price: '₹210', tag: 'Classic', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80' },
    { name: 'Mango Lassi Panna Cotta', desc: 'A fusion of Italian technique and Indian flavour — set lassi with fresh Alphonso mango coulis.', price: '₹260', tag: 'Chef\'s Pick', img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80' },
  ],
  drinks: [
    { name: 'Masala Chai', desc: 'Our signature spiced brew — ginger, cardamom, cinnamon, poured from a height. Theatre in a cup.', price: '₹80', tag: 'Signature', img: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=80' },
    { name: 'Rose Lemonade', desc: 'Fresh lime, rose water, pink pepper and crushed ice. Perfectly balanced sweet-sour.', price: '₹120', tag: 'Popular', img: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&q=80' },
    { name: 'Mango Lassi', desc: 'Chilled Alphonso mango blended with creamy yogurt, a pinch of cardamom and saffron.', price: '₹150', tag: 'Classic', img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80' },
    { name: 'Jaljeera Cooler', desc: 'Cumin, mint, tamarind, lemon — an ancient digestive elixir served over crushed ice.', price: '₹100', tag: 'Herbal', img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80' },
    { name: 'Thandai', desc: 'Chilled almond-saffron milk infused with rose petals, melon seeds and fennel. Festive and fragrant.', price: '₹130', tag: 'Seasonal', img: 'https://images.unsplash.com/photo-1560180474-e8563fd75bab?w=600&q=80' },
    { name: 'Coconut Neer', desc: 'Fresh tender coconut water infused with tulsi and a squeeze of lime. Pure and refreshing.', price: '₹110', tag: 'Natural', img: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&q=80' },
  ],
};

const galleryCategories = {
  tab1: [
    { img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80', label: 'Our Sanctuary', size: 'tall' },
    { img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80', label: 'Plated Poetry' },
    { img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', label: 'Evening Ambience' },
    { img: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80', label: 'From the Kitchen' },
    { img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80', label: 'Indian Colours', size: 'wide' },
    { img: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80', label: 'Craft & Precision' },
  ],
  food: [
    { img: 'images/food1.png', label: 'Sizzling Delight', size: 'tall' },
    { img: 'images/food2.jpg', label: 'Traditional Thali' },
    { img: 'images/food3.png', label: 'Spicy Curries' },
    { img: 'images/food4.png', label: 'Tandoori Platters' },
    { img: 'images/food5.jpg', label: 'Handcrafted Naan', size: 'wide' },
    { img: 'images/food6.png', label: 'Gourmet Presentation' },
    { img: 'images/naan.png', label: 'Fresh From Tandoor' },
    { img: 'images/image1.png', label: 'Chef Specials' },
    { img: 'images/image2.jpg', label: 'Authentic Spices' },
  ],
  best: [
    { img: 'images/best1.png', label: 'Top Rated Curry', size: 'tall' },
    { img: 'images/best2.png', label: 'Fan Favourite' },
    { img: 'images/best4.png', label: 'Daily Best' },
    { img: 'images/best5.png', label: 'House Special', size: 'wide' },
    { img: 'images/best6.png', label: 'Signature Dish' },
    { img: 'images/bestfood.png', label: 'Premium Selection' },
  ],
  ambience: [
    { img: 'images/insidecafe.png', label: 'Cozy Interior', size: 'tall' },
    { img: 'images/interior.jpg', label: 'Zen Atmosphere' },
    { img: 'images/outsideview.jpg', label: 'Main Entrance' },
    { img: 'images/outsideview2.png', label: 'Welcome View', size: 'wide' },
    { img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80', label: 'Elegant Dining' },
  ],
  menu: [
    { img: 'images/menucard.png', label: 'Main Menu', size: 'tall' },
    { img: 'images/menuimage1.png', label: 'Starters List' },
    { img: 'images/menuimage2.png', label: 'Drinks Selection' },
    { img: 'images/menuimage3.png', label: 'Main Course Details', size: 'wide' },
    { img: 'images/menuimage4.png', label: 'Dessert Menu' },
    { img: 'images/menuimage5.jpeg', label: 'Main Menu & Sets' },
  ],
  guests: [
    { img: 'images/customers1.jpg', label: 'Happy Moments', size: 'tall' },
    { img: 'images/ladiesset.png', label: 'Warm Gatherings' },
    { img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80', label: 'Guest Celebrations' },
  ],
  others: []
};

/* Google Maps Place Data — fetched dynamically */
const googlePlaceInfo = {
  rating: 4.2,
  totalReviews: 101,
};

const reviewsData = [
  { name: 'Naoto Kataoka', role: '4 months ago', stars: 5, text: 'It\'s close to the nearest station to my workplace... the atmosphere inside the restaurant was great and the curry smells delicious even from outside. Great service and wonderful food!' },
  { name: 'Ai', role: '8 months ago', stars: 5, text: 'The food was absolutely delicious and the staff were incredibly friendly. The naan was fresh and the curry was full of deep, rich flavors. A wonderful dining experience overall.' },
  { name: 'John Lancaster', role: '2 years ago', stars: 5, text: 'This place has changed its name and staff... greatly improved. The staff are from South India and they now do specialties like dosa (helps to order in advance). Highly recommended!' },
  { name: 'Ravi Panwar', role: '9 months ago', stars: 5, text: 'Delicious food! One of the best experiences. The flavors are authentic and the portion sizes are generous. This is true Indian cuisine at its finest.' },
  { name: 'Momo', role: '2 years ago', stars: 5, text: 'I had the weekday lunch menu and was very satisfied with the taste and portion. The value for money is outstanding and I will definitely be coming back.' },
  { name: 'Ao', role: '2 years ago', stars: 5, text: 'Relatively cheap and easy-to-eat Indian curry. Great for a casual lunch. The staff are friendly and the restaurant has a welcoming atmosphere.' },
  { name: 'Akiba Headquarters', role: '7 years ago', stars: 5, text: 'The lunchtime takeout menu has been expanded. I like the chicken butter curry here. It\'s rich, creamy, and has just the right amount of spice.' },
];

const servicesData = {
  'Service Options': {
    icon: '🍽️',
    items: ['Outdoor seating', 'Delivery', 'Takeaway', 'Dine-in']
  },
  'Accessibility': {
    icon: '♿',
    items: ['Wheelchair-accessible car park', 'Wheelchair-accessible entrance', 'Wheelchair-accessible seating', 'Wheelchair-accessible toilet']
  },
  'Highlights': {
    icon: '✨',
    items: ['All you can drink', 'Live music']
  },  
  'Dining Options': {
    icon: '🪑',
    items: ['Brunch', 'Lunch', 'Dinner', 'Dessert', 'Seating', 'Table service']
  },
  'Amenities': {
    icon: '🛎️',
    items: ['Gender-neutral toilets', 'Restroom', 'Free Wi-Fi', 'Smoke-free place']
  },
  'Atmosphere': {
    icon: '🌿',
    items: ['Casual', 'Cozy', 'Quiet']
  },
  'Crowd': {
    icon: '👥',
    items: ['Family friendly', 'Groups', 'LGBTQ+ friendly', 'Transgender safe space']
  },
  'Planning & Parking': {
    icon: '📅',
    items: ['Accepts reservations', 'Free parking lot', 'Plenty of parking']
  },
  'Payments': {
    icon: '💳',
    items: ['Credit cards', 'Debit cards', 'PayPay', 'Rakuten Pay']
  },
  'Offerings': {
    icon: '🥘',
    items: ['Alcohol', 'Beer', 'Cocktails', 'Coffee', 'Wine', 'Happy-hour drinks', 'All you can eat', 'Happy-hour food', 'Late-night food', 'Organic dishes', 'Quick bite', 'Salad bar', 'Small plates', 'Vegan options', 'Vegetarian options', 'Braille menu']
  },
};

/* ─── NAVBAR SCROLL ──────────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
}, { passive: true });

/* ─── HAMBURGER MENU ─────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('hidden');
});

/* ─── LANGUAGE TOGGLE ────────────────────────────────────── */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    switchLanguage(btn.getAttribute('data-lang'));
  });
});

/* ─── DOWNLOAD CARD ──────────────────────────────────────── */
const downloadBtn = document.getElementById('download-card');
const downloadBtnMobile = document.getElementById('download-card-mobile');
if (downloadBtn) downloadBtn.addEventListener('click', downloadVisitingCard);
if (downloadBtnMobile) downloadBtnMobile.addEventListener('click', downloadVisitingCard);

/* ─── SMOOTH SCROLL ──────────────────────────────────────── */
document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile menu if open
        mobileMenu.classList.add('hidden');
        hamburger.classList.remove('open');
      }
    }
  });
});

/* ─── MENU TABS & CARDS ──────────────────────────────────── */
function updateTabStyles(activeTab) {
  document.querySelectorAll('.menu-tab').forEach(t => {
    t.classList.remove('active');
    // Reset to inactive dark-theme style
    t.classList.remove('!bg-gradient-to-r', '!from-gold', '!to-gold-dark', '!text-dark', '!border-gold');
    t.classList.add('!text-cream', '!border-gold/30');
  });
  activeTab.classList.add('active');
  // Apply active gold gradient style
  activeTab.classList.remove('!text-cream', '!border-gold/30');
  activeTab.classList.add('!bg-gradient-to-r', '!from-gold', '!to-gold-dark', '!text-dark', '!border-gold');
}

function renderMenu(category) {
  const grid = document.getElementById('menu-grid');
  grid.style.opacity = '0';
  grid.style.transform = 'translateY(16px)';
  setTimeout(() => {
    grid.innerHTML = menuData[category].map(item => {
      const name = currentLang === 'jp' && item.name_jp ? item.name_jp : item.name;
      const desc = currentLang === 'jp' && item.desc_jp ? item.desc_jp : item.desc;
      return `
      <div class="menu-card">
        <div class="menu-card-img-wrap">
          <img src="${item.img}" alt="${name}" class="menu-card-img" loading="lazy"/>
        </div>
        <div class="menu-card-body">
          <div class="menu-card-title">${name}</div>
          <div class="menu-card-desc">${desc}</div>
          <div class="menu-card-footer">
            <span class="menu-card-price hidden">${item.price}</span>
            <span class="menu-card-tag">${item.tag}</span>
          </div>
        </div>
      </div>
    `}).join('');
    grid.style.transition = 'all 0.5s ease';
    grid.style.opacity = '1';
    grid.style.transform = 'translateY(0)';
  }, 220);
}

document.querySelectorAll('.menu-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    updateTabStyles(tab);
    renderMenu(tab.dataset.cat);
  });
});
renderMenu('starters');

/* ─── GALLERY ────────────────────────────────────────────── */
let currentGalleryCategory = 'tab1';
let currentLightboxImages = [];
let sectionsCache = null;

function updateGalleryTabStyles(activeTab) {
  document.querySelectorAll('.gallery-tab').forEach(t => {
    t.classList.remove('active');
    t.classList.remove('!bg-gradient-to-r', '!from-gold', '!to-gold-dark', '!text-dark', '!border-gold');
    t.classList.add('!text-cream', '!border-gold/30');
  });
  activeTab.classList.add('active');
  activeTab.classList.remove('!text-cream', '!border-gold/30');
  activeTab.classList.add('!bg-gradient-to-r', '!from-gold', '!to-gold-dark', '!text-dark', '!border-gold');
}

function renderGallery(category) {
  currentGalleryCategory = category;

  if (category === 'others') {
    renderOthersGallery();
    return;
  }

  const galleryGrid = document.querySelector('.gallery-grid');
  galleryGrid.classList.remove('gallery-grid--sections');
  galleryGrid.style.opacity = '0';
  galleryGrid.style.transform = 'translateY(20px)';

  const items = galleryCategories[category];
  currentLightboxImages = items.map(g => ({ img: g.img, label: g.label }));

  setTimeout(() => {
    galleryGrid.innerHTML = items.map((g, i) => `
      <div class="gallery-item ${g.size || ''}" data-index="${i}">
        <img src="${g.img}" alt="${g.label}" loading="lazy"/>
        <div class="gallery-overlay">
          <span class="gallery-overlay-text">${g.label}</span>
        </div>
      </div>
    `).join('');

    galleryGrid.style.transition = 'all 0.5s ease';
    galleryGrid.style.opacity = '1';
    galleryGrid.style.transform = 'translateY(0)';

    // Re-attach lightbox listeners
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => openLightbox(+item.dataset.index));
    });
  }, 200);
}

async function fetchSections() {
  if (sectionsCache) return sectionsCache;
  try {
    const res = await fetch('https://yogirestaurantadminpanel.vercel.app/api/sections');
    
    if (!res.ok) throw new Error('Failed to fetch sections');
    const data = await res.json();
    sectionsCache = data;
    return data;
  } catch (err) {
    console.error('Sections API error:', err);
    return null;
  }
}

function renderOthersGallery() {
  const galleryGrid = document.querySelector('.gallery-grid');
  galleryGrid.classList.add('gallery-grid--sections');
  galleryGrid.style.opacity = '0';
  galleryGrid.style.transform = 'translateY(20px)';

  // Show loading spinner immediately
  galleryGrid.innerHTML = `
    <div class="sections-loading">
      <div class="sections-spinner"></div>
      <p>Loading sections...</p>
    </div>`;
  galleryGrid.style.transition = 'all 0.3s ease';
  galleryGrid.style.opacity = '1';
  galleryGrid.style.transform = 'translateY(0)';

  fetchSections().then(sections => {
    if (!sections || sections.length === 0) {
      galleryGrid.innerHTML = '<p class="text-cream/50 text-center py-10">No sections available.</p>';
      currentLightboxImages = [];
      return;
    }

    // Build flat lightbox images array from all sections
    currentLightboxImages = [];
    sections.forEach(section => {
      section.images.forEach(img => {
        currentLightboxImages.push({ img: img.url, label: section.title });
      });
    });

    galleryGrid.style.opacity = '0';
    setTimeout(() => {
      let html = '';
      let globalIdx = 0;
      sections.forEach(section => {
        const imageCount = section.images.length;
        const gridClass = imageCount === 1
          ? 'section-images-grid--single'
          : imageCount === 2
            ? 'section-images-grid--double'
            : '';

        html += `
          <div class="section-card">
            <div class="section-card-header">
              <h3 class="section-card-title">${section.title}</h3>
              ${section.description ? `<p class="section-card-desc">${section.description}</p>` : ''}
            </div>
            <div class="section-images-grid ${gridClass}">
              ${section.images.map(img => {
                const idx = globalIdx++;
                return `
                  <div class="section-image-item" data-lightbox-index="${idx}">
                    <img src="${img.url}" alt="${section.title}" loading="lazy" />
                    <div class="gallery-overlay">
                      <span class="gallery-overlay-text">${section.title}</span>
                    </div>
                  </div>`;
              }).join('')}
            </div>
          </div>`;
      });

      galleryGrid.innerHTML = html;

      // Attach lightbox listeners to section images
      document.querySelectorAll('.section-image-item').forEach(item => {
        item.addEventListener('click', () => openLightbox(+item.dataset.lightboxIndex));
      });

      galleryGrid.style.transition = 'all 0.5s ease';
      galleryGrid.style.opacity = '1';
      galleryGrid.style.transform = 'translateY(0)';
    }, 200);
  });
}

document.querySelectorAll('.gallery-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    updateGalleryTabStyles(tab);
    renderGallery(tab.dataset.cat);
  });
});

// Initial render
renderGallery('tab1');

// Lightbox
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');
let lbIndex = 0;

function openLightbox(i) {
  lbIndex = i;
  lbImg.src = currentLightboxImages[i].img;
  lbImg.alt = currentLightboxImages[i].label;
  lightbox.classList.remove('hidden');
  lightbox.classList.add('flex');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.add('hidden');
  lightbox.classList.remove('flex');
  document.body.style.overflow = '';
}
function moveLightbox(dir) {
  lbIndex = (lbIndex + dir + currentLightboxImages.length) % currentLightboxImages.length;
  lbImg.style.opacity = '0';
  setTimeout(() => {
    lbImg.src = currentLightboxImages[lbIndex].img;
    lbImg.alt = currentLightboxImages[lbIndex].label;
    lbImg.style.opacity = '1';
  }, 200);
  lbImg.style.transition = 'opacity 0.2s';
}

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox-prev').addEventListener('click', () => moveLightbox(-1));
document.getElementById('lightbox-next').addEventListener('click', () => moveLightbox(1));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('hidden')) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') moveLightbox(-1);
    if (e.key === 'ArrowRight') moveLightbox(1);
  }
});

/* ─── SERVICES & AMENITIES GRID ──────────────────────────── */
const servicesGrid = document.getElementById('services-grid');
if (servicesGrid) {
  const avatarColors = ['#c9a84c', '#e8c96e', '#a07830', '#8B6914', '#D4A017', '#C5B358', '#967117', '#B8860B', '#DAA520', '#CD853F', '#DEB887'];
  servicesGrid.innerHTML = Object.entries(servicesData).map(([category, data]) => {
    const isOfferings = category === 'Offerings';
    return `
      <div class="service-category-card${isOfferings ? ' offerings-card' : ''}">
        <div class="service-category-header">
          <span class="service-category-icon">${data.icon}</span>
          <span class="service-category-title">${category}</span>
        </div>
        <div class="service-items-list">
          ${data.items.map(item => `
            <div class="service-item">
              <svg class="service-check" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L2.5 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <span>${item}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

/* ─── REVIEWS SLIDER ─────────────────────────────────────── */
const reviewsInner = document.getElementById('reviews-inner');
const dotsContainer = document.getElementById('review-dots');
let revIndex = 0;

const avatarColors = ['#c9a84c', '#e8c96e', '#a07830', '#8B6914', '#D4A017', '#C5B358', '#967117', '#B8860B'];

reviewsData.forEach((r, i) => {
  const initial = r.name.charAt(0).toUpperCase();
  const color = avatarColors[i % avatarColors.length];
  const fullStars = '★'.repeat(r.stars);
  const emptyStars = '☆'.repeat(5 - r.stars);
  reviewsInner.innerHTML += `
    <div class="review-card">
      <div class="review-inner">
        <div class="review-stars mb-4">${fullStars}${emptyStars}</div>
        <p class="review-text">"${r.text}"</p>
        <div class="review-author-row mt-6">
          <div class="review-avatar" style="background:${color}">${initial}</div>
          <div>
            <div class="review-author">${r.name}</div>
            <div class="review-role">${r.role}</div>
          </div>
        </div>
      </div>
    </div>
  `;
  const dot = document.createElement('button');
  dot.className = `review-dot ${i === 0 ? 'active' : ''}`;
  dot.setAttribute('aria-label', `Review ${i + 1}`);
  dot.addEventListener('click', () => goToReview(i));
  dotsContainer.appendChild(dot);
});

function goToReview(i) {
  revIndex = i;
  reviewsInner.style.transform = `translateX(-${i * 100}%)`;
  document.querySelectorAll('.review-dot').forEach((d, idx) => {
    d.classList.toggle('active', idx === i);
  });
}

document.getElementById('rev-prev').addEventListener('click', () => {
  goToReview((revIndex - 1 + reviewsData.length) % reviewsData.length);
});
document.getElementById('rev-next').addEventListener('click', () => {
  goToReview((revIndex + 1) % reviewsData.length);
});

// Auto-advance
setInterval(() => {
  goToReview((revIndex + 1) % reviewsData.length);
}, 5000);

/* ─── CONTACT FORM (removed — form no longer exists) ───── */

/* ─── SCROLL REVEAL ──────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});

/* ─── PARALLAX EFFECT ────────────────────────────────────── */
window.addEventListener('scroll', () => {
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    const scrolled = window.scrollY;
    heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
}, { passive: true });

/* ─── BACK TO TOP ────────────────────────────────────────── */
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
}, { passive: true });

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* Golden Week Carousel */
const goldenCarousel = document.querySelector('[data-golden-carousel]');
if (goldenCarousel) {
  const goldenCarouselTrack = goldenCarousel.querySelector('[data-golden-carousel-track]');
  const goldenCarouselDots = goldenCarousel.querySelector('[data-golden-carousel-dots]');
  const goldenCarouselPrev = document.querySelector('[data-golden-carousel-prev]');
  const goldenCarouselNext = document.querySelector('[data-golden-carousel-next]');
  const goldenImageBasePath = 'images/golden-days-images';
  const goldenImageFiles = [
    'WhatsApp Image 2026-04-21 at 12.51.38 PM (1).jpeg',
    'WhatsApp Image 2026-04-21 at 12.51.38 PM.jpeg',
    'WhatsApp Image 2026-04-21 at 12.51.39 PM (1).jpeg',
    'WhatsApp Image 2026-04-21 at 12.51.39 PM (2).jpeg',
    'WhatsApp Image 2026-04-21 at 12.51.39 PM (3).jpeg',
    'WhatsApp Image 2026-04-21 at 12.51.39 PM.jpeg',
    'WhatsApp Image 2026-04-21 at 12.51.40 PM (1).jpeg',
    'WhatsApp Image 2026-04-21 at 12.51.40 PM (2).jpeg',
    'WhatsApp Image 2026-04-21 at 12.51.40 PM.jpeg',
    'WhatsApp Image 2026-04-21 at 12.51.41 PM (1).jpeg',
    'WhatsApp Image 2026-04-21 at 12.51.41 PM.jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.15 AM (1).jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.15 AM.jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.16 AM (1).jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.16 AM (2).jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.16 AM.jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.17 AM (1).jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.17 AM (2).jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.17 AM.jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.18 AM (1).jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.18 AM (2).jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.18 AM (3).jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.18 AM.jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.19 AM (1).jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.19 AM (2).jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.19 AM.jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.20 AM (1).jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.20 AM (2).jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.20 AM.jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.21 AM (1).jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.21 AM (2).jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.21 AM (3).jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.21 AM.jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.22 AM (1).jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.22 AM (2).jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.22 AM.jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.23 AM (1).jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.23 AM (2).jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.23 AM.jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.24 AM (1).jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.24 AM (2).jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.24 AM (3).jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.24 AM.jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.25 AM (1).jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.25 AM (2).jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.25 AM.jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.32 AM (1).jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.32 AM.jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.33 AM (1).jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.33 AM (2).jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.33 AM.jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.34 AM (1).jpeg',
    'WhatsApp Image 2026-04-22 at 9.19.34 AM.jpeg',
  ];

  let currentGoldenSlide = 0;
  let touchStartX = 0;
  const goldenLightboxImages = goldenImageFiles.map((file, index) => ({
    img: encodeURI(`${goldenImageBasePath}/${file}`),
    label: `Golden Week special buffet dish ${index + 1} at Indian Restaurant YOGI`,
  }));

  function getGoldenMaxIndex() {
    return Math.max(0, goldenImageFiles.length - 1);
  }

  function getGoldenPageStartIndexes() {
    return goldenImageFiles.map((_, index) => index);
  }

  function renderGoldenCarouselSlides() {
    const slides = goldenImageFiles.map((file, index) => {
      const slideNumber = String(index + 1).padStart(2, '0');
      const imagePath = encodeURI(`${goldenImageBasePath}/${file}`);

      return `
        <article class="golden-carousel-slide">
          <div class="golden-carousel-card" data-golden-lightbox-index="${index}" role="button" tabindex="0" aria-label="Open Golden Week highlight ${slideNumber} in full view">
            <div class="golden-carousel-image-wrap">
              <img
                src="${imagePath}"
                alt="Golden Week special buffet dish ${index + 1} at Indian Restaurant YOGI"
                class="golden-carousel-image"
                loading="${index === 0 ? 'eager' : 'lazy'}"
                decoding="async"
              />
            </div>
            <div class="golden-carousel-caption">
              <div class="golden-carousel-kicker">Golden Week</div>
              <p class="golden-carousel-title">Featured buffet highlight ${slideNumber}</p>
              <p class="golden-carousel-hint">Tap or click to view full image</p>
            </div>
          </div>
        </article>
      `;
    }).join('');

    goldenCarouselTrack.innerHTML = slides;
  }

  function renderGoldenCarouselDots() {
    const pages = getGoldenPageStartIndexes();

    goldenCarouselDots.innerHTML = pages.map((slideIndex, index) => `
      <button
        class="golden-carousel-dot${slideIndex === currentGoldenSlide ? ' is-active' : ''}"
        type="button"
        data-golden-carousel-slide="${slideIndex}"
        aria-label="Show Golden Week gallery page ${index + 1}"
        aria-current="${slideIndex === currentGoldenSlide ? 'true' : 'false'}"
      ></button>
    `).join('');
  }

  function updateGoldenCarousel() {
    const slide = goldenCarouselTrack.querySelector('.golden-carousel-slide');
    if (!slide) return;

    currentGoldenSlide = Math.min(currentGoldenSlide, getGoldenMaxIndex());

    const trackStyles = window.getComputedStyle(goldenCarouselTrack);
    const gap = parseFloat(trackStyles.columnGap || trackStyles.gap) || 0;
    const slideStep = slide.getBoundingClientRect().width + gap;

    goldenCarouselTrack.style.transform = `translateX(-${currentGoldenSlide * slideStep}px)`;
    renderGoldenCarouselDots();
  }

  function moveGoldenCarousel(direction) {
    const maxIndex = getGoldenMaxIndex();
    const nextIndex = currentGoldenSlide + direction;

    if (nextIndex > maxIndex) {
      currentGoldenSlide = 0;
    } else if (nextIndex < 0) {
      currentGoldenSlide = maxIndex;
    } else {
      currentGoldenSlide = nextIndex;
    }

    updateGoldenCarousel();
  }

  renderGoldenCarouselSlides();
  updateGoldenCarousel();

  goldenCarouselPrev?.addEventListener('click', () => moveGoldenCarousel(-1));
  goldenCarouselNext?.addEventListener('click', () => moveGoldenCarousel(1));

  goldenCarouselDots.addEventListener('click', (event) => {
    const dot = event.target.closest('[data-golden-carousel-slide]');
    if (!dot) return;

    currentGoldenSlide = Number(dot.dataset.goldenCarouselSlide);
    updateGoldenCarousel();
  });

  goldenCarouselTrack.addEventListener('click', (event) => {
    const slideCard = event.target.closest('[data-golden-lightbox-index]');
    if (!slideCard) return;

    currentLightboxImages = goldenLightboxImages;
    openLightbox(Number(slideCard.dataset.goldenLightboxIndex));
  });

  goldenCarouselTrack.addEventListener('keydown', (event) => {
    const slideCard = event.target.closest('[data-golden-lightbox-index]');
    if (!slideCard) return;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      currentLightboxImages = goldenLightboxImages;
      openLightbox(Number(slideCard.dataset.goldenLightboxIndex));
    }
  });

  goldenCarousel.addEventListener('touchstart', (event) => {
    touchStartX = event.touches[0].clientX;
  }, { passive: true });

  goldenCarousel.addEventListener('touchend', (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const touchDelta = touchStartX - touchEndX;

    if (Math.abs(touchDelta) > 45) {
      moveGoldenCarousel(touchDelta > 0 ? 1 : -1);
    }
  }, { passive: true });

  window.addEventListener('resize', updateGoldenCarousel);
}
