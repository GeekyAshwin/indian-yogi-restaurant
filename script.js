/* ============================================================
   INDIAN YOGI RESTAURANT — script.js
   MGR Global Connect–Inspired Dark & Gold Theme
============================================================ */

/* ─── DATA ───────────────────────────────────────────────── */
const menuData = {
  starters: [
    { name: 'Samosa Chaat', desc: 'Crispy samosas, tangy tamarind, fresh coriander, spiced yogurt — plated minimally on black slate.', price: '₹220', tag: 'Signature', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80' },
    { name: 'Tandoori Mushroom', desc: 'Forest mushrooms marinated in smoky tandoori masala, finished with lime leaf oil.', price: '₹280', tag: 'Veg', img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80' },
    { name: 'Seekh Kebab', desc: 'Hand-minced lamb spiced with coriander and cardamom, charred on skewers, mint chutney.', price: '₹320', tag: 'Chef\'s Pick', img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80' },
    { name: 'Dahi Puri', desc: 'Crispy semolina shells, sweet yogurt, pomegranate, tamarind — a burst of flavour.', price: '₹180', tag: 'Popular', img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80' },
    { name: 'Paneer Tikka', desc: 'Cottage cheese cubes marinated in saffron yogurt, grilled to perfection in our tandoor.', price: '₹300', tag: 'Veg', img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80' },
    { name: 'Fish Amritsari', desc: 'Battered river fish seasoned with carom seeds and turmeric, crisp-fried, chaat masala dusted.', price: '₹350', tag: 'Seasonal', img: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=600&q=80' },
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

const galleryData = [
  { img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80', label: 'Our Sanctuary' },
  { img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80', label: 'Plated Poetry' },
  { img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', label: 'Evening Ambience' },
  { img: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80', label: 'From the Kitchen' },
  { img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80', label: 'Indian Colours' },
  { img: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80', label: 'Craft & Precision' },
];

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
  { name: 'Xchetri Pradeep', role: '3 years ago', stars: 1, text: 'Honestly, I don\'t recommend it. Bad food, worst quality.' },
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
    grid.innerHTML = menuData[category].map(item => `
      <div class="menu-card">
        <div class="menu-card-img-wrap">
          <img src="${item.img}" alt="${item.name}" class="menu-card-img" loading="lazy"/>
        </div>
        <div class="menu-card-body">
          <div class="menu-card-title">${item.name}</div>
          <div class="menu-card-desc">${item.desc}</div>
          <div class="menu-card-footer">
            <span class="menu-card-price hidden">${item.price}</span>
            <span class="menu-card-tag">${item.tag}</span>
          </div>
        </div>
      </div>
    `).join('');
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
const galleryGrid = document.querySelector('.gallery-grid');
galleryGrid.innerHTML = galleryData.map((g, i) => `
  <div class="gallery-item" data-index="${i}">
    <img src="${g.img}" alt="${g.label}" loading="lazy"/>
    <div class="gallery-overlay">
      <span class="gallery-overlay-text">${g.label}</span>
    </div>
  </div>
`).join('');

// Lightbox
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');
let lbIndex = 0;

function openLightbox(i) {
  lbIndex = i;
  lbImg.src = galleryData[i].img;
  lbImg.alt = galleryData[i].label;
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
  lbIndex = (lbIndex + dir + galleryData.length) % galleryData.length;
  lbImg.style.opacity = '0';
  setTimeout(() => {
    lbImg.src = galleryData[lbIndex].img;
    lbImg.alt = galleryData[lbIndex].label;
    lbImg.style.opacity = '1';
  }, 200);
  lbImg.style.transition = 'opacity 0.2s';
}

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => openLightbox(+item.dataset.index));
});
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