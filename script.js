'use strict';

/* ============================================================
   ARIF BILLAH PORTFOLIO — COMPLETE SCRIPT
   Includes: Language Toggle (EN/BN), Animations, Counters
   ============================================================ */

/* ===== BENGALI TRANSLATION DICTIONARY ===== */
const translations = {
  en: {
    'nav.home':       'Home',
    'nav.about':      'About',
    'nav.skills':     'Skills',
    'nav.experience': 'Experience',
    'nav.education':  'Education',
    'nav.contact':    'Contact',
    'nav.cv':         'Download CV',

    'hero.badge':     'Available for New Opportunities',
    'hero.greeting':  'Md. Arif',
    'hero.surname':   'Billah Chowdhury',
    'hero.bio':       'A results-driven business professional with <strong>15+ years of experience</strong> blending financial acumen with powerful client relationships. I specialize in driving <strong>sales growth</strong>, expanding customer bases, and delivering premium banking & retail experiences across Bangladesh.',
    'hero.stat1':     'Years Experience',
    'hero.stat2':     'Companies',
    'hero.stat3':     'Clients Served',
    'hero.btn1':      "Let's Connect",
    'hero.btn2':      'View Work',
    'hero.loc':       'Joypurhat, Bangladesh',
    'hero.lang':      'Bengali · English',
    'hero.avail':     'Available Now',

    'val.tag':        'Why Choose Me',
    'val.title1':     'Client-Centric',
    'val.desc1':      'Building lasting relationships through trust, empathy, and consistent delivery of exceptional service across every touchpoint.',
    'val.title2':     'Revenue Driven',
    'val.desc2':      'Proven track record in expanding market share, growing client portfolios, and achieving consistent sales targets in competitive environments.',
    'val.title3':     'Strategic Thinker',
    'val.desc3':      'Combining financial literacy with marketing strategy to identify opportunities, assess risks, and deliver measurable business value.',
    'val.title4':     'Adaptable',
    'val.desc4':      'Thriving in fast-paced, cross-functional teams across banking, retail, and fashion industries — from accounts to frontline sales.',

    'about.tag':      'Who I Am',
    'about.title':    'About',
    'about.sub':      'A passionate professional who believes in continuous growth, collaboration, and creating real impact.',
    'about.p1':       "I'm <strong>Md. Arif Billah Chowdhury</strong>, born on 07 May 1992 in Kurigram and based in Joypurhat, Bangladesh. My career spans over 15 years across diverse industries — from <em>financial fashion</em> to <em>retail footwear</em> to <em>premium banking</em>.",
    'about.p2':       'My journey began in accounts and finance at The Delta Quality Fashions, where I developed a solid foundation in financial operations. This hands-on experience with numbers gave me a unique edge when I transitioned into sales and marketing — I understood profitability, margins, and business viability in ways most sales professionals don\'t.',
    'about.p3':       'At HDF Footwear Nabik Ltd, I transformed that financial knowledge into sales performance — closing deals, presenting to clients, collecting orders, and nurturing long-term relationships over 3+ years. Finally, at Padma Bank PLC, I brought both skill sets together as a Relationship Banker — delivering premium banking experiences while expanding and retaining the bank\'s client base.',
    'about.p4':       'My core philosophy? <em>"Learning never stops — from people, cultures, and every new experience."</em>',
    'about.h1':       'BBA (Finance) Graduate — University of Development Alternative (UODA)',
    'about.h2':       'Experienced in Banking, Retail & Fashion Industries',
    'about.h3':       'Strong communicator in Bengali & English',
    'about.h4':       'Proven ability to manage teams, accounts & client portfolios',
    'about.looking':  'Looking For',
    'about.lookdesc': 'Relationship Banking, Sales Management, Business Development, or Senior Finance roles where I can leverage my 15+ years of experience to lead teams and drive measurable growth.',
    'about.hire':     'Hire Me',

    'skills.tag':     'My Expertise',
    'skills.title':   'Skills &',
    'skills.title2':  'Capabilities',
    'skills.sub':     'A powerful combination of soft skills, financial expertise, and modern business tools.',
    'skills.core':    'Core Competencies',
    'skills.tech':    'Software & Tools',
    'skills.soft':    'Soft Skills',
    'skills.lang':    'Languages',
    'skills.native':  'Native',
    'skills.prof':    'Professional',

    'exp.tag':        'Work History',
    'exp.title':      'Career',
    'exp.title2':     'Journey',
    'exp.sub':        '15+ years of progressive experience across banking, retail, and fashion industries.',

    'edu.tag':        'Academic Background',
    'edu.title':      'Education &',
    'edu.title2':     'Qualifications',
    'edu.sub':        'A strong academic foundation in Finance, Banking & Insurance that drives strategic thinking.',
    'edu.degree':     "Bachelor's Degree · EQF Level 6",
    'edu.name':       'Bachelor of Business Administration (BBA)',
    'edu.major':      'Finance, Banking & Insurance',
    'edu.duration':   'Duration: 2011 – 2017',
    'edu.desc':       'Completed a rigorous 6-year BBA degree specialising in Finance, Banking, and Insurance at UODA — an internationally recognised EQF Level 6 qualification. Deep theoretical knowledge and practical exposure to corporate finance, banking systems, investment analysis, and modern business management.',
    'edu.achieve':    'Key Academic Achievements',
    'edu.a1':         'Earned internationally recognised EQF Level 6 qualification',
    'edu.a2':         'Specialised in Finance, Banking & Insurance — directly applied in career',
    'edu.a3':         'Practical exposure to financial modelling and quantitative analysis',
    'edu.a4':         'Team projects in marketing strategy and business planning',
    'edu.a5':         "In-depth research on Bangladesh's banking sector and financial instruments",
    'edu.a6':         'Completed 6-year programme demonstrating commitment and perseverance',
    'edu.training':   'Trainings & Professional Development',

    'ach.years':      'Years in Business',
    'ach.companies':  'Companies Served',
    'ach.clients':    'Clients Managed',
    'ach.industries': 'Industries Covered',
    'ach.trainings':  'Trainings Completed',

    'contact.tag':    'Get In Touch',
    'contact.title':  "Let's",
    'contact.title2': 'Connect',
    'contact.sub':    "Have an opportunity or want to say hello? I'd love to hear from you.",
    'contact.h3':     'Ready to Work Together?',
    'contact.p':      'Whether you\'re looking for a dynamic sales professional, relationship manager, or finance expert — I bring dedication, experience, and passion to every role.',
    'contact.email':  'Email',
    'contact.mobile': 'Mobile Phone',
    'contact.home':   'Home Phone',
    'contact.addr':   'Address',
    'contact.avail':  'Availability',
    'contact.avtime': 'Sun – Thu, 9 AM – 6 PM (BST)',
    'form.name':      'Your Name',
    'form.email':     'Email Address',
    'form.subject':   'Subject',
    'form.message':   'Message',
    'form.send':      'Send Message',
    'form.note':      'I typically respond within 24 hours.',
    'form.ph.name':   'John Doe',
    'form.ph.email':  'john@company.com',
    'form.ph.sub':    'Job Opportunity / Collaboration',
    'form.ph.msg':    'Tell me about the opportunity...',

    'footer.desc':    'A business professional blending financial expertise with powerful client relationships to drive sales, growth, and lasting impact.',
    'footer.links':   'Quick Links',
    'footer.skills':  'Core Skills',
    'footer.cv':      'Download CV',
    'footer.cvdesc':  'Get the full picture of my professional background and qualifications.',
    'footer.dlpdf':   'Download PDF',
    'footer.copy':    '© 2024 Md. Arif Billah Chowdhury. Crafted with passion.',
    'footer.top':     'Back to Top',
  },

  bn: {
    'nav.home':       'হোম',
    'nav.about':      'আমার সম্পর্কে',
    'nav.skills':     'দক্ষতা',
    'nav.experience': 'অভিজ্ঞতা',
    'nav.education':  'শিক্ষা',
    'nav.contact':    'যোগাযোগ',
    'nav.cv':         'সিভি ডাউনলোড',

    'hero.badge':     'নতুন সুযোগের জন্য উপলব্ধ',
    'hero.greeting':  'মো. আরিফ',
    'hero.surname':   'বিল্লাহ চৌধুরী',
    'hero.bio':       'একজন ফলাফলমুখী ব্যবসায়িক পেশাদার যিনি <strong>১৫+ বছরের অভিজ্ঞতায়</strong> আর্থিক দক্ষতা ও শক্তিশালী ক্লায়েন্ট সম্পর্ক একত্রিত করেন। আমি <strong>বিক্রয় বৃদ্ধি</strong> ও প্রিমিয়াম ব্যাংকিং অভিজ্ঞতা প্রদানে বিশেষজ্ঞ।',
    'hero.stat1':     'বছরের অভিজ্ঞতা',
    'hero.stat2':     'কোম্পানি',
    'hero.stat3':     'ক্লায়েন্ট সেবা',
    'hero.btn1':      'যোগাযোগ করুন',
    'hero.btn2':      'কাজ দেখুন',
    'hero.loc':       'জয়পুরহাট, বাংলাদেশ',
    'hero.lang':      'বাংলা · ইংরেজি',
    'hero.avail':     'এখন উপলব্ধ',

    'val.tag':        'কেন আমাকে বেছে নেবেন',
    'val.title1':     'ক্লায়েন্টকেন্দ্রিক',
    'val.desc1':      'বিশ্বাস, সহানুভূতি ও ধারাবাহিক উৎকর্ষ সেবার মাধ্যমে দীর্ঘস্থায়ী সম্পর্ক গড়ে তোলা।',
    'val.title2':     'রাজস্বমুখী',
    'val.desc2':      'বাজারের অংশ বাড়ানো, ক্লায়েন্ট পোর্টফোলিও সম্প্রসারণ ও ধারাবাহিকভাবে লক্ষ্যমাত্রা অর্জনের প্রমাণিত রেকর্ড।',
    'val.title3':     'কৌশলগত চিন্তাবিদ',
    'val.desc3':      'আর্থিক সাক্ষরতা ও মার্কেটিং কৌশল একত্রিত করে সুযোগ চিহ্নিত করা এবং পরিমাপযোগ্য ব্যবসায়িক মূল্য তৈরি করা।',
    'val.title4':     'অভিযোজনযোগ্য',
    'val.desc4':      'ব্যাংকিং, খুচরা ও ফ্যাশন শিল্পে দ্রুতগতির পরিবেশে সফলতার সাথে কাজ করার অভিজ্ঞতা।',

    'about.tag':      'আমি কে',
    'about.title':    'আমার',
    'about.sub':      'একজন আবেগী পেশাদার যিনি ক্রমাগত বিকাশ, সহযোগিতা ও প্রকৃত প্রভাব সৃষ্টিতে বিশ্বাস করেন।',
    'about.p1':       'আমি <strong>মো. আরিফ বিল্লাহ চৌধুরী</strong>, ০৭ মে ১৯৯২ সালে কুড়িগ্রামে জন্মগ্রহণ করেছি এবং বর্তমানে জয়পুরহাট, বাংলাদেশে বসবাস করছি। আমার ক্যারিয়ার ১৫+ বছরে বিভিন্ন শিল্পে বিস্তৃত।',
    'about.p2':       'আমার যাত্রা শুরু হয়েছিল The Delta Quality Fashions-এ অ্যাকাউন্টস ও ফাইন্যান্সে, যেখানে আমি আর্থিক কার্যক্রমে শক্তিশালী ভিত্তি গড়ে তুলেছিলাম।',
    'about.p3':       'HDF Footwear Nabik Ltd-এ আমি সেই আর্থিক জ্ঞানকে বিক্রয় সাফল্যে রূপান্তরিত করেছি। পদ্মা ব্যাংক পিএলসি-তে রিলেশনশিপ ব্যাংকার হিসেবে উভয় দক্ষতা একত্রিত করেছি।',
    'about.p4':       'আমার মূল দর্শন? <em>"শেখা কখনো থামে না — মানুষ, সংস্কৃতি ও প্রতিটি অভিজ্ঞতা থেকে।"</em>',
    'about.h1':       'বিবিএ (ফাইন্যান্স) গ্র্যাজুয়েট — উন্নয়ন বিকল্প বিশ্ববিদ্যালয়',
    'about.h2':       'ব্যাংকিং, খুচরা ও ফ্যাশন শিল্পে অভিজ্ঞ',
    'about.h3':       'বাংলা ও ইংরেজিতে দক্ষ যোগাযোগকারী',
    'about.h4':       'দল, অ্যাকাউন্ট ও ক্লায়েন্ট পোর্টফোলিও পরিচালনায় প্রমাণিত',
    'about.looking':  'যা খুঁজছি',
    'about.lookdesc': 'রিলেশনশিপ ব্যাংকিং, সেলস ম্যানেজমেন্ট, বিজনেস ডেভেলপমেন্ট বা সিনিয়র ফাইন্যান্স রোল যেখানে আমি দল পরিচালনা করতে ও পরিমাপযোগ্য প্রবৃদ্ধি চালাতে পারব।',
    'about.hire':     'নিয়োগ দিন',

    'skills.tag':     'আমার দক্ষতা',
    'skills.title':   'দক্ষতা ও',
    'skills.title2':  'সক্ষমতা',
    'skills.sub':     'সফট স্কিল, আর্থিক দক্ষতা ও আধুনিক ব্যবসায়িক সরঞ্জামের শক্তিশালী সমন্বয়।',
    'skills.core':    'মূল দক্ষতাসমূহ',
    'skills.tech':    'সফটওয়্যার ও সরঞ্জাম',
    'skills.soft':    'সফট স্কিল',
    'skills.lang':    'ভাষা',
    'skills.native':  'মাতৃভাষা',
    'skills.prof':    'পেশাদার',

    'exp.tag':        'কর্ম ইতিহাস',
    'exp.title':      'ক্যারিয়ার',
    'exp.title2':     'যাত্রা',
    'exp.sub':        'ব্যাংকিং, খুচরা ও ফ্যাশন শিল্পে ১৫+ বছরের ক্রমবর্ধমান অভিজ্ঞতা।',

    'edu.tag':        'শিক্ষাগত পটভূমি',
    'edu.title':      'শিক্ষা ও',
    'edu.title2':     'যোগ্যতা',
    'edu.sub':        'ফাইন্যান্স, ব্যাংকিং ও বীমায় শক্তিশালী একাডেমিক ভিত্তি যা কৌশলগত চিন্তাকে চালিত করে।',
    'edu.degree':     "স্নাতক ডিগ্রি · EQF স্তর ৬",
    'edu.name':       'ব্যাচেলর অব বিজনেস অ্যাডমিনিস্ট্রেশন (বিবিএ)',
    'edu.major':      'ফাইন্যান্স, ব্যাংকিং ও বীমা',
    'edu.duration':   'মেয়াদ: ২০১১ – ২০১৭',
    'edu.desc':       'UODA-তে ৬ বছরের কঠোর বিবিএ ডিগ্রি সম্পন্ন করেছি — আন্তর্জাতিকভাবে স্বীকৃত EQF স্তর ৬ যোগ্যতা। কর্পোরেট ফাইন্যান্স, ব্যাংকিং সিস্টেম, বিনিয়োগ বিশ্লেষণ ও আধুনিক ব্যবসা ব্যবস্থাপনায় গভীর তাত্ত্বিক জ্ঞান।',
    'edu.achieve':    'মূল একাডেমিক অর্জন',
    'edu.a1':         'আন্তর্জাতিকভাবে স্বীকৃত EQF স্তর ৬ যোগ্যতা অর্জন',
    'edu.a2':         'ফাইন্যান্স, ব্যাংকিং ও বীমায় বিশেষজ্ঞতা — ক্যারিয়ারে সরাসরি প্রয়োগ',
    'edu.a3':         'আর্থিক মডেলিং ও পরিমাণগত বিশ্লেষণে ব্যবহারিক অভিজ্ঞতা',
    'edu.a4':         'মার্কেটিং কৌশল ও ব্যবসায়িক পরিকল্পনায় দলীয় প্রকল্প',
    'edu.a5':         'বাংলাদেশের ব্যাংকিং খাত ও আর্থিক সরঞ্জামে গভীর গবেষণা',
    'edu.a6':         '৬ বছরের প্রোগ্রাম সম্পন্ন করে অঙ্গীকার ও অধ্যবসায় প্রমাণ',
    'edu.training':   'প্রশিক্ষণ ও পেশাদার উন্নয়ন',

    'ach.years':      'বছরের ব্যবসায়িক অভিজ্ঞতা',
    'ach.companies':  'কোম্পানিতে সেবা',
    'ach.clients':    'ক্লায়েন্ট পরিচালনা',
    'ach.industries': 'শিল্প ক্ষেত্র',
    'ach.trainings':  'প্রশিক্ষণ সম্পন্ন',

    'contact.tag':    'যোগাযোগ করুন',
    'contact.title':  'আসুন',
    'contact.title2': 'কথা বলি',
    'contact.sub':    'কোনো সুযোগ আছে বা শুধু হ্যালো বলতে চান? আমি শুনতে আগ্রহী।',
    'contact.h3':     'একসাথে কাজ করতে প্রস্তুত?',
    'contact.p':      'আপনি যদি একজন গতিশীল বিক্রয় পেশাদার, সম্পর্ক ব্যবস্থাপক বা ফাইন্যান্স বিশেষজ্ঞ খোঁজেন — আমি প্রতিটি ভূমিকায় নিষ্ঠা ও অভিজ্ঞতা নিয়ে আসি।',
    'contact.email':  'ইমেইল',
    'contact.mobile': 'মোবাইল ফোন',
    'contact.home':   'হোম ফোন',
    'contact.addr':   'ঠিকানা',
    'contact.avail':  'উপলব্ধতা',
    'contact.avtime': 'রবি – বৃহস্পতি, সকাল ৯টা – সন্ধ্যা ৬টা (BST)',
    'form.name':      'আপনার নাম',
    'form.email':     'ইমেইল ঠিকানা',
    'form.subject':   'বিষয়',
    'form.message':   'বার্তা',
    'form.send':      'বার্তা পাঠান',
    'form.note':      'আমি সাধারণত ২৪ ঘণ্টার মধ্যে সাড়া দিই।',
    'form.ph.name':   'আপনার নাম লিখুন',
    'form.ph.email':  'আপনার ইমেইল লিখুন',
    'form.ph.sub':    'চাকরির সুযোগ / সহযোগিতা',
    'form.ph.msg':    'সুযোগটি সম্পর্কে বলুন...',

    'footer.desc':    'আর্থিক দক্ষতা ও শক্তিশালী ক্লায়েন্ট সম্পর্কের সমন্বয়ে বিক্রয়, প্রবৃদ্ধি ও দীর্ঘস্থায়ী প্রভাব সৃষ্টিতে নিবেদিত পেশাদার।',
    'footer.links':   'দ্রুত লিংক',
    'footer.skills':  'মূল দক্ষতা',
    'footer.cv':      'সিভি ডাউনলোড',
    'footer.cvdesc':  'আমার পেশাদার পটভূমি ও যোগ্যতার পূর্ণ চিত্র পান।',
    'footer.dlpdf':   'পিডিএফ ডাউনলোড',
    'footer.copy':    '© ২০২৪ মো. আরিফ বিল্লাহ চৌধুরী। যত্নসহকারে তৈরি।',
    'footer.top':     'উপরে যান',
  }
};

/* ===== CURRENT LANGUAGE STATE ===== */
let currentLang = 'en';

/* ===== setLang — master language switch function ===== */
window.setLang = function(lang) {
  if (lang === currentLang) return;
  currentLang = lang;

  const t = translations[lang];
  const html = document.documentElement;
  html.lang = lang === 'bn' ? 'bn' : 'en';

  /* Flash transition */
  document.body.classList.add('lang-switching');
  setTimeout(() => document.body.classList.remove('lang-switching'), 420);

  /* ── Apply all data-i18n text ── */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });

  /* ── Mobile sidebar lang btn active state ── */
  const mobEN = document.getElementById('mobLangEN');
  const mobBN = document.getElementById('mobLangBN');
  if (mobEN && mobBN) {
    mobEN.classList.toggle('active', lang === 'en');
    mobBN.classList.toggle('active', lang === 'bn');
  }

  /* ── Update typing roles ── */
  if (lang === 'bn') {
    window._typingRoles = ['রিলেশনশিপ ব্যাংকার','বিক্রয় ও মার্কেটিং বিশেষজ্ঞ','ব্যবসায়িক কৌশলবিদ','সিআরএম বিশেষজ্ঞ','ফাইন্যান্স পেশাদার'];
  } else {
    window._typingRoles = ['Relationship Banker','Sales & Marketing Expert','Business Strategist','CRM Specialist','Finance Professional'];
  }
};


/* ===== 1. SCROLL PROGRESS BAR ===== */
(function() {
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.prepend(bar);
  window.addEventListener('scroll', () => {
    const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = pct + '%';
  }, { passive: true });
})();


/* ===== 2. PARTICLE CANVAS ===== */
(function() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  const rand = (a, b) => Math.random() * (b - a) + a;

  function mkP() {
    return { x: rand(0, W), y: rand(0, H), r: rand(0.8, 2.2),
      dx: rand(-0.25, 0.25), dy: rand(-0.4, -0.1),
      alpha: rand(0.08, 0.32), color: Math.random() > 0.5 ? '108,99,255' : '6,214,160' };
  }
  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  resize();
  particles = Array.from({ length: 80 }, mkP);

  (function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
      ctx.fill();
      p.x += p.dx; p.y += p.dy; p.alpha -= 0.0005;
      if (p.y < -10 || p.alpha <= 0) Object.assign(p, mkP(), { y: H + 5, alpha: rand(0.08, 0.32) });
    });
    requestAnimationFrame(draw);
  })();

  window.addEventListener('resize', resize);
})();


/* ===== 3. CUSTOM CURSOR ===== */
(function() {
  if (window.matchMedia('(hover: none)').matches) return;
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;
  let mx = -100, my = -100, rx = -100, ry = -100;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px'; dot.style.top = my + 'px';
  });
  (function animR() {
    rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animR);
  })();

  document.querySelectorAll('a, button, .val-card, .tech-card, .stag, .exp-body, .social-pill, .btn').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
  });
})();


/* ===== 4. NAVBAR — scroll + active + hamburger ===== */
(function() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const overlay   = document.getElementById('mobileOverlay');
  const navLinks  = document.querySelectorAll('.nav-link');
  const sections  = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    navbar && navbar.classList.toggle('scrolled', window.scrollY > 50);
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 220) cur = s.id; });
    navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + cur));
  }, { passive: true });

  if (hamburger && overlay) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      overlay.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    document.querySelectorAll('.mob-link').forEach(l => {
      l.addEventListener('click', () => {
        hamburger.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
})();


/* ===== 5. TYPING ANIMATION ===== */
(function() {
  const el = document.getElementById('typedText');
  if (!el) return;

  window._typingRoles = ['Relationship Banker'
