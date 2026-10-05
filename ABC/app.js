/**
 * ===================================================================
 * A SYMPHONY OF GRATITUDE - JAVASCRIPT APPLICATION
 * Features:
 * - Buttery-Smooth Cinematic 3D Letter Opening & Folding
 * - "Love Me Not" (Slowed + Reverb) Audio Engine (YouTube API + Local Fallback + Synthesizer)
 * - Floating Aesthetic Vinyl Music Dock
 * - Bilingual Support (ID & EN)
 * - Canvas Floating Starlight Background & Confetti Physics
 * - Interactive Memory Gratitude Jar with localStorage persistence
 * - 3D Flip Card Interactions & Custom Message Editor
 * ===================================================================
 */

// --- 1. LOCALIZATION & DATA DICTIONARY ---
const I18N = {
  id: {
    heroBadge: "Ungkapan Terima Kasih Tulus",
    heroTitle: `Terkadang Kata "Terima Kasih" <br><span class="gradient-text">Bisa Menghangatkan Seluruh Jiwa</span>`,
    heroSubtitle: "Sebuah ruang hangat untuk mengungkapkan penghargaan terdalam, merayakan kehadiran orang-orang terkasih, dan mensyukuri setiap anugerah dalam hidup.",
    openLetterBtn: "Buka Surat Syukur",
    starlightJarBtn: "Guci Bintang Syukur",
    customizerHeading: "Personalisasi Pesan Ini",
    customizerDesc: "Sesuaikan penerima dan nuansa emosi agar terasa sangat istimewa.",
    surpriseBtn: "Inspirasi Acak",
    labelTo: "Kepada (Penerima):",
    labelRelationship: "Ungkapan Syukur Untuk:",
    labelFrom: "Dari (Nama Kamu):",
    vibeLabel: "Nuansa Rasa:",
    vibeWarm: "Hangat & Penuh Cinta",
    vibeDeep: "Syukur Terdalam",
    vibeJoyful: "Ceria & Menyinari",
    vibeInspiring: "Bangga & Menginspirasi",
    envelopeHint: "👇 Ketuk segel emas untuk membuka dan membaca surat ketulusan",
    dearPrefix: "Untuk Yang Tersayang,",
    psNote: "P.S. Terima kasih untuk kebaikanmu yang sering luput kusyukuri.",
    closingPrefix: "Dengan rasa terima kasih terdalam,",
    copyText: "Salin Pesan",
    editMsg: "Tulis Sendiri",
    foldLetter: "Tutup Surat",
    modalTitle: "Tulis Pesan Gratitude Sendiri",
    customMsgLabel: "Ungkapkan rasa terima kasihmu dengan kata-katamu sendiri:",
    cancelBtn: "Batal",
    saveBtn: "Terapkan ke Surat ✨",
    pillarsBadge: "Refleksi Syukur",
    pillarsTitle: "Alasan Mengapa Kita Patut Bersyukur",
    pillarsDesc: "Sentuh atau arahkan kursor ke kartu untuk melihat pesan di baliknya.",
    card1FrontTitle: "Kebaikan Sederhana",
    card1FrontDesc: "Senyuman hangat, sapaan pagi, dan secangkir teh di hari yang melelahkan.",
    card1BackText: `"Terkadang kebaikan terkecil yang kita terima dari seseorang mampu menyelamatkan seluruh hari kita tanpa pernah kita sadari."`,
    card2FrontTitle: "Dukungan Tanpa Suara",
    card2FrontDesc: "Mereka yang tetap tinggal dan percaya saat kita meragukan diri sendiri.",
    card2BackText: `"Terima kasih untuk kehadiranmu yang tulus. Kamu tak perlu selalu punya solusi, mendengar saja sudah menjadi anugerah luar biasa."`,
    card3FrontTitle: "Pelajaran Berharga",
    card3FrontDesc: "Guru, mentor, dan kegagalan yang membentuk ketangguhan jiwa kita.",
    card3BackText: `"Setiap tetes kesabaran yang kau curahkan untuk membimbingku adalah investasi berharga bagi masa depanku. Terima kasih tak terhingga."`,
    card4FrontTitle: "Tawa & Memori Indah",
    card4FrontDesc: "Momen-momen konyol yang selalu membuat kita tersenyum ketika mengingatnya.",
    card4BackText: `"Bersamamu, hari yang biasa berubah jadi istimewa. Terima kasih telah menciptakan tawa di sela-sela rutinitas dunia."`,
    flipPrompt: "Ketuk untuk membalik ↻",
    jarBadge: "Guci Bintang Syukur",
    jarTitle: "Lepaskan Secercah Bintang Terima Kasih",
    jarDesc: "Tuliskan satu hal sederhana yang paling kamu syukuri hari ini. Bintang gratitude milikmu akan melayang indah dan tersimpan abadi di dalam toples kaca ini.",
    dropStarBtn: "Jatuhkan Bintang ke Dalam Toples 🌟",
    starsCountLabel: "Bintang Bersinar",
    sincerityLabel: "Ketulusan Hati",
    nextQuote: "Kutipan Inspirasi Lain",
    toastCopied: "✨ Surat penuh syukur berhasil disalin ke clipboard!",
    toastSaved: "✨ Pesan kustom berhasil diperbarui di surat!",
    toastStarAdded: "🌟 Bintang gratitude baru bersinar di dalam toples!",
    toastEmptyInput: "⚠️ Silakan ketik pesan terima kasih terlebih dahulu.",
    musicPlaying: "🎶 Memutar: Love Me Not (Slowed + Reverb)",
    musicPaused: "⏸️ Musik dijeda",
    optFamily: "Orang Tua / Keluarga (Keluarga)",
    optFriend: "Sahabat Sejati (Sahabat)",
    optMentor: "Guru / Dosen / Mentor (Pembimbing)",
    optPartner: "Pasangan Hidup (Kekasih / Pasangan)",
    optColleague: "Rekan Kerja / Satu Tim (Partner)",
    optSelf: "Untuk Diriku Sendiri (Self-Love)"
  },
  en: {
    heroBadge: "Heartfelt Appreciation",
    heroTitle: `Sometimes "Thank You" <br><span class="gradient-text">Means The Entire World</span>`,
    heroSubtitle: "A peaceful sanctuary to express genuine gratitude, celebrate beloved souls, and cherish the quiet blessings that make life worthwhile.",
    openLetterBtn: "Open The Letter",
    starlightJarBtn: "Gratitude Starlight Jar",
    customizerHeading: "Personalize This Gratitude",
    customizerDesc: "Tailor the recipient and emotion to make it uniquely touching.",
    surpriseBtn: "Surprise Inspiration",
    labelTo: "To (Recipient):",
    labelRelationship: "Appreciation For:",
    labelFrom: "From (Your Name):",
    vibeLabel: "Vibe / Emotion:",
    vibeWarm: "Warm & Loving",
    vibeDeep: "Deep Gratitude",
    vibeJoyful: "Joy & Sunshine",
    vibeInspiring: "Proud & Inspired",
    envelopeHint: "👇 Click the golden seal to unseal and read the heartfelt letter",
    dearPrefix: "To Dearest,",
    psNote: "P.S. Thank you for all the quiet kindnesses I often take for granted.",
    closingPrefix: "With deepest appreciation & love,",
    copyText: "Copy Message",
    editMsg: "Write Custom",
    foldLetter: "Close Letter",
    modalTitle: "Write Your Custom Gratitude Letter",
    customMsgLabel: "Express your genuine appreciation in your own words:",
    cancelBtn: "Cancel",
    saveBtn: "Save to Letter ✨",
    pillarsBadge: "Gratitude Reflection",
    pillarsTitle: "Reasons We Are Forever Grateful",
    pillarsDesc: "Tap or hover over each card to unveil the heartfelt wisdom beneath.",
    card1FrontTitle: "Gentle Everyday Kindness",
    card1FrontDesc: "A warm smile, an unexpected greeting, or hot coffee on an exhausting morning.",
    card1BackText: `"Sometimes the smallest kindness we receive from another soul carries enough light to guide us through our darkest week."`,
    card2FrontTitle: "Silent Steadfast Support",
    card2FrontDesc: "Those who stay anchored by our side when we begin doubting our own worth.",
    card2BackText: `"Thank you for simply being here. You never needed all the answers; your quiet listening has been the greatest sanctuary."`,
    card3FrontTitle: "Invaluable Guidance",
    card3FrontDesc: "Mentors, teachers, and setbacks that shaped the resilience of our spirit.",
    card3BackText: `"Every ounce of patience you invested to mentor me continues to bear fruit in my journey. My deepest, endless thanks to you."`,
    card4FrontTitle: "Laughter & Unforgettable Memories",
    card4FrontDesc: "The goofy inside jokes and warm moments that instantly spark joy.",
    card4BackText: `"With you, mundane days become cherished chapters. Thank you for painting colors over life's ordinary routines."`,
    flipPrompt: "Tap to flip ↻",
    jarBadge: "Starlight Memory Jar",
    jarTitle: "Release a Glowing Star of Gratitude",
    jarDesc: "Type one simple blessing you are thankful for today. Your gratitude star will float gracefully and live forever within this celestial glass jar.",
    dropStarBtn: "Drop Star into the Jar 🌟",
    starsCountLabel: "Glowing Stars",
    sincerityLabel: "Sincerity Level",
    nextQuote: "Another Inspiring Quote",
    toastCopied: "✨ Gratitude letter copied to clipboard!",
    toastSaved: "✨ Custom message updated on the letter!",
    toastStarAdded: "🌟 A new star of gratitude is now glowing in your jar!",
    toastEmptyInput: "⚠️ Please type a gratitude note before releasing.",
    musicPlaying: "🎶 Now playing: Love Me Not (Slowed + Reverb)",
    musicPaused: "⏸️ Music paused",
    optFamily: "Parents / Family (Family)",
    optFriend: "True Best Friend (Friend)",
    optMentor: "Teacher / Mentor (Guide)",
    optPartner: "Life Partner / Soulmate (Love)",
    optColleague: "Colleague / Teammate (Partner)",
    optSelf: "To My Own Journey (Self-Love)"
  }
};

// Preset gratitude message templates by relationship and vibe
const PRESETS = {
  family: {
    warm: {
      p1_id: "Tidak ada kata yang cukup megah untuk merangkum rasa terima kasihku atas setiap peluh, doa yang terucap di keheningan malam, dan ketulusan yang tiada henti engkau berikan.",
      p2_id: "Terima kasih telah menjadi pelabuhan paling tenang di tengah badai, tempat aku selalu bisa pulang tanpa takut dihakimi. Kehangatan, bimbingan, dan pengorbananmu adalah lentera yang menuntun setiap langkah perjalananku.",
      quote_id: `"Kebaikanmu bukan sekadar ingatan, melainkan akar kuat yang membuatku mampu berdiri tegak hari ini."`,
      p4_id: "Semoga kesehatan, kedamaian, dan kebahagiaan tak berujung senantiasa melingkupi setiap detik hidupmu. Terima kasih telah hadir dan mewarnai duniaku.",
      p1_en: "Words will never fully capture the depth of my gratitude for every sacrifice, every whispered prayer in the quiet night, and the boundless love you have given me.",
      p2_en: "Thank you for being my calmest harbor amidst life's fiercest storms—a place where I can always return without fear of judgment. Your warmth and devotion are the guiding compass of my life.",
      quote_en: `"Your devotion is not just a memory, but the steady roots that allow me to stand tall today."`,
      p4_en: "May health, everlasting peace, and joy surround every second of your days. Thank you for being my greatest blessing."
    },
    deep: {
      p1_id: "Di setiap pencapaian dan langkah kakiku, ada jejak pengorbananmu yang tak pernah kau pamerkan. Rasa terima kasih ini mengalir dari palung hati terdalam.",
      p2_id: "Terima kasih atas kesabaran tanpa batas saat aku tersandung, dan tangan kokoh yang selalu terulur mengangkatku kembali. Nilai-nilai ketulusanmu adalah warisan paling berharga bagiku.",
      quote_id: `"Cinta keluarga adalah cahaya yang tak pernah padam, meski malam dunia begitu pekat."`,
      p4_id: "Aku bersyukur kepada Tuhan atas anugerah luar biasa memiliki kalian dalam jalan hidupku.",
      p1_en: "In every milestone I reach, there lies the silent imprint of your sacrifices that you never boasted about. My gratitude flows from the deepest part of my soul.",
      p2_en: "Thank you for your infinite patience whenever I stumbled, and the steadfast hands that always lifted me up. Your integrity is the most priceless treasure I hold.",
      quote_en: `"A family's love is a light that never flickers, even when the world outside grows dim."`,
      p4_en: "I am forever grateful to have your warmth and wisdom illuminating my pathway."
    }
  },
  friend: {
    joyful: {
      p1_id: "Terima kasih telah menjadi teman yang bisa diajak tertawa lepas hingga perut sakit, sekaligus tempat curhat paling aman saat dunia sedang tidak bersahabat.",
      p2_id: "Memiliki sahabat sepertimu membuktikan bahwa hidup ini seru untuk dijalani. Terima kasih untuk obrolan tengah malam, lelucon receh kita, dan kesetiaanmu di setiap musim.",
      quote_id: `"Teman sejati adalah mereka yang tahu semua kekuranganmu, namun tetap memilih tinggal dan memesan kopi bersama."`,
      p4_id: "Mari terus melangkah dan membuat ribuan cerita menyenangkan di hari-hari esok! Kamu luar biasa!",
      p1_en: "Thank you for being the friend who makes me laugh until my stomach aches, while also being the safest confidant whenever the world feels overwhelming.",
      p2_en: "Having a soul like you proves that life's adventure is truly worth living. Thank you for late-night chats, silly memes, and staying loyal through every season.",
      quote_en: `"True friends know all your quirks, yet still show up with coffee and an open heart."`,
      p4_en: "Here's to making countless more unforgettable memories together! You're one in a million!"
    },
    warm: {
      p1_id: "Terima kasih untuk kehadiranmu yang tulus dan konstan. Di dunia yang serba terburu-buru, persahabatanmu adalah anugerah yang sangat menenangkan.",
      p2_id: "Terima kasih telah mengingatkanku pada versi terbaik diriku saat aku lupa. Terima kasih sudah mendengarkan tanpa memotong, dan menemani tanpa menuntut.",
      quote_id: `"Persahabatan sejati tidak diukur dari seberapa sering bertemu, melainkan seberapa dalam hati saling peduli."`,
      p4_id: "Aku sangat bersyukur memilikimu dalam lingkaran hidupku. Terima kasih telah menjadi sahabat sejati.",
      p1_en: "Thank you for your genuine and steady presence. In a fast-paced world, your friendship is a grounding breath of fresh air.",
      p2_en: "Thank you for reminding me of who I truly am whenever I lost my way. Thank you for listening without judgment and showing up with sincerity.",
      quote_en: `"Genuine friendship is measured not by physical frequency, but by the resonance of care."`,
      p4_en: "I am deeply thankful to share this journey with you. Thank you for being a true friend."
    }
  },
  mentor: {
    inspired: {
      p1_id: "Rasa hormat dan terima kasih tak terhingga atas setiap ilmu, kebijaksanaan, dan waktu yang telah Bapak/Ibu dedikasikan untuk membimbing saya.",
      p2_id: "Bapak/Ibu tidak hanya mengajarkan materi pelajaran, tetapi menyalakan api rasa ingin tahu dan keberanian untuk bermimpi lebih besar. Kritik yang membangun dan arahan Anda telah membuka cakrawala baru bagi saya.",
      quote_id: `"Seorang pembimbing yang hebat tidak hanya menunjukkan jalan, ia menginspirasi kita untuk melangkah melampaui batas diri."`,
      p4_id: "Terima kasih telah menjadi pelita ilmu dan teladan kebijaksanaan. Dedikasi Bapak/Ibu akan selalu saya kenang dan amalkan.",
      p1_en: "My utmost respect and sincere gratitude for the wisdom, patience, and guidance you have graciously shared with me.",
      p2_en: "You did not merely teach knowledge; you ignited a burning curiosity and the courage to envision broader horizons. Your constructive critique has shaped my foundation.",
      quote_en: `"A remarkable mentor does not just point the way; they inspire us to walk beyond our self-imposed boundaries."`,
      p4_en: "Thank you for being a beacon of integrity and wisdom. Your dedication will forever ripple through my future."
    }
  },
  partner: {
    warm: {
      p1_id: "Terima kasih telah memilih untuk berjalan bersamaku, merajut mimpi di antara suka dan duka, serta menghadirkan rasa nyaman yang tak ternilai.",
      p2_id: "Setiap senyumanmu adalah pelipur lara, dan genggaman tanganmu memberi keberanian saat badai datang. Terima kasih atas pengertianmu yang luas dan cinta yang kau rawat setiap hari.",
      quote_id: `"Di antara miliaran manusia di bumi, menemukan hatimu adalah keajaiban paling indah dalam hidupku."`,
      p4_id: "Terima kasih telah mencintaiku apa adanya. Aku berjanji untuk terus belajar, menghargai, dan membahagiakanmu.",
      p1_en: "Thank you for choosing to walk beside me, weaving dreams through laughter and tears, and gifting me a serenity beyond words.",
      p2_en: "Your smile softens life's harshness, and holding your hand gives me courage when doubts arise. Thank you for your endless grace and understanding.",
      quote_en: `"Among billions of souls on this planet, finding your heart is the sweetest miracle of my lifetime."`,
      p4_en: "Thank you for loving me as I am. I promise to cherish, respect, and walk hand-in-hand with you always."
    }
  },
  colleague: {
    joyful: {
      p1_id: "Terima kasih banyak atas kerja sama, energi positif, dan dukungan luar biasa yang kamu berikan selama kita bekerja bersama dalam tim.",
      p2_id: "Tantangan dan deadline yang berat terasa jauh lebih ringan dan menyenangkan karena ada rekan kerja yang cekatan, solid, dan selalu siap saling membantu seperti kamu.",
      quote_id: `"Kerja keras terasa berharga ketika kita dikelilingi oleh rekan-rekan yang tulus dan suportif."`,
      p4_id: "Senang dan bangga sekali bisa berkolaborasi denganmu. Sukses terus untuk setiap langkah karier dan impianmu!",
      p1_en: "A huge thank you for your stellar collaboration, positive spirit, and unwavering support across our team journeys.",
      p2_en: "Tough deadlines and complex hurdles became manageable—and genuinely enjoyable—because of your proactive attitude and dependable nature.",
      quote_en: `"Great work turns meaningful when shared with teammates who elevate each other."`,
      p4_en: "Deeply proud to work alongside you. Wishing you abundant success in every upcoming chapter!"
    }
  },
  self: {
    warm: {
      p1_id: "Untuk diriku sendiri: Terima kasih telah bertahan sejauh ini, melewati hari-hari berat yang tak diketahui orang lain, dan tetap memilih untuk melangkah.",
      p2_id: "Terima kasih atas setiap usaha kecil yang telah kamu perjuangkan. Kamu sudah melakukan yang terbaik. Maafkan dirimu atas kesalahan masa lalu, dan bersyukurlah atas ketangguhan yang kini kamu miliki.",
      quote_id: `"Kamu layak dicintai oleh dirimu sendiri sama besarnya seperti kamu mencintai orang lain."`,
      p4_id: "Tarik napas dalam-dalam. Kamu berharga, kamu cukup, dan perjalanan ini indah karena kamu terus berusaha.",
      p1_en: "To my own soul: Thank you for persevering this far, for surviving silent battles no one knew about, and for choosing to keep moving forward.",
      p2_en: "Thank you for every quiet effort and brave step. You have done remarkably well. Forgive past mistakes, and honor the resilience you have earned.",
      quote_en: `"You deserve your own unconditional love just as deeply as you extend it to others."`,
      p4_en: "Breathe gently. You are worthy, you are enough, and your journey is sacred because you dare to grow."
    }
  }
};

// Quotes Database
const QUOTES = [
  {
    text_id: "Rasa syukur mengubah apa yang kita miliki menjadi terasa cukup, dan lebih. Ia mengubah penyangkalan menjadi penerimaan, kekacauan menjadi keteraturan, dan kebingungan menjadi kejelasan.",
    text_en: "Gratitude turns what we have into enough, and more. It turns denial into acceptance, chaos into order, confusion into clarity.",
    author: "Melody Beattie"
  },
  {
    text_id: "Rasa syukur bukan hanya kebajikan terbesar, tetapi juga induk dari semua kebajikan lainnya.",
    text_en: "Gratitude is not only the greatest of virtues, but the parent of all the others.",
    author: "Cicero"
  },
  {
    text_id: "Ketika kamu bangun di pagi hari, bersyukurlah atas cahaya mentari, hidupmu, dan kekuatanmu. Bersyukurlah atas makanan dan sukacita hidup.",
    text_en: "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love.",
    author: "Marcus Aurelius"
  },
  {
    text_id: "Mengenakan rasa terima kasih seperti jubah dan mantel akan menyehatkan setiap sudut kehidupanmu.",
    text_en: "Wear gratitude like a cloak, and it will nourish every corner of your life.",
    author: "Rumi"
  },
  {
    text_id: "Apresiasi adalah hal yang luar biasa: ia membuat apa yang istimewa pada orang lain menjadi milik kita juga.",
    text_en: "Appreciation is a wonderful thing: it makes what is excellent in others belong to us as well.",
    author: "Voltaire"
  }
];

// Initial Starlight Jar Items
const INITIAL_JAR_NOTES = [
  { text: "Terima kasih untuk ibu yang selalu mendoakan langkahku tiap subuh.", tag: "❤️ Cinta", icon: "❤️" },
  { text: "Terima kasih sahabatku yang mendengarkan curhatku semalaman saat aku terpuruk.", tag: "🤝 Sahabat", icon: "🤝" },
  { text: "Bersyukur atas kopi hangat dan udara segar pagi hari ini.", tag: "☕ Kebaikan", icon: "☕" },
  { text: "Terima kasih untuk dosen pembimbing yang sabar membimbing tugas kuliahku.", tag: "🌟 Cahaya", icon: "🌟" },
  { text: "Terima kasih pada diri sendiri karena tidak pernah menyerah!", tag: "🌸 Senyuman", icon: "🌸" }
];

// --- 2. GLOBAL STATE ---
let currentLanguage = 'id';
let isEnvelopeOpen = false;
let isAnimatingEnvelope = false;
let currentVibe = 'warm';
let jarNotes = [];

// Audio state
let isMusicPlaying = false;
let ytPlayer = null;
let ytApiReady = false;
let localAudioEl = null;
let synthAudioContext = null;
let synthIntervalId = null;

// --- 3. DOM ELEMENTS ---
const elements = {
  langToggleBtn: document.getElementById('langToggleBtn'),
  currentLangLabel: document.getElementById('currentLangLabel'),
  soundToggleBtn: document.getElementById('soundToggleBtn'),
  celebrateBtn: document.getElementById('celebrateBtn'),
  envelopeWrapper: document.getElementById('envelopeWrapper'),
  envelopeFlap: document.getElementById('envelopeFlap'),
  waxSealBtn: document.getElementById('waxSealBtn'),
  theLetter: document.getElementById('theLetter'),
  foldLetterBtn: document.getElementById('foldLetterBtn'),
  stageHint: document.getElementById('stageHint'),
  recipientInput: document.getElementById('recipientInput'),
  senderInput: document.getElementById('senderInput'),
  relationshipSelect: document.getElementById('relationshipSelect'),
  recipientDisplay: document.getElementById('recipientDisplay'),
  senderDisplay: document.getElementById('senderDisplay'),
  surpriseMeBtn: document.getElementById('surpriseMeBtn'),
  copyLetterBtn: document.getElementById('copyLetterBtn'),
  editCustomMsgBtn: document.getElementById('editCustomMsgBtn'),
  editModal: document.getElementById('editModal'),
  closeModalBtn: document.getElementById('closeModalBtn'),
  cancelModalBtn: document.getElementById('cancelModalBtn'),
  saveCustomMsgBtn: document.getElementById('saveCustomMsgBtn'),
  customMessageTextarea: document.getElementById('customMessageTextarea'),
  letterParagraph1: document.getElementById('letterParagraph1'),
  letterParagraph2: document.getElementById('letterParagraph2'),
  letterParagraph3: document.getElementById('letterParagraph3'),
  letterParagraph4: document.getElementById('letterParagraph4'),
  letterDate: document.getElementById('letterDate'),
  emotionChips: document.getElementById('emotionChips'),
  ambientCanvas: document.getElementById('ambientCanvas'),
  confettiCanvas: document.getElementById('confettiCanvas'),
  toastNotice: document.getElementById('toastNotice'),
  jarBody: document.getElementById('jarBody'),
  jarNoteInput: document.getElementById('jarNoteInput'),
  jarTagSelect: document.getElementById('jarTagSelect'),
  addJarNoteBtn: document.getElementById('addJarNoteBtn'),
  jarCount: document.getElementById('jarCount'),
  notePopover: document.getElementById('notePopover'),
  popoverTag: document.getElementById('popoverTag'),
  popoverText: document.getElementById('popoverText'),
  closePopover: document.getElementById('closePopover'),
  dailyQuoteText: document.getElementById('dailyQuoteText'),
  dailyQuoteAuthor: document.getElementById('dailyQuoteAuthor'),
  nextQuoteBtn: document.getElementById('nextQuoteBtn'),
  openLetterCta: document.getElementById('openLetterCta'),
  // Music dock
  musicDockContainer: document.getElementById('musicDockContainer'),
  dockPlayBtn: document.getElementById('dockPlayBtn'),
  dockPlayIcon: document.getElementById('dockPlayIcon'),
  localFileInput: document.getElementById('localFileInput')
};

// --- 4. "LOVE ME NOT" (SLOWED + REVERB) AUDIO ENGINE ---

/**
 * Loads YouTube IFrame API for "Ravyn Lenae - Love Me Not [Slowed + Reverb]" (Dusk Resonance: BElct8HWkp8)
 */
function initYouTubeAudio() {
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

window.onYouTubeIframeAPIReady = function() {
  ytApiReady = true;
  ytPlayer = new YT.Player('ytPlayerContainer', {
    height: '10',
    width: '10',
    videoId: 'BElct8HWkp8', // Ravyn Lenae - Love Me Not [Slowed + Reverb]
    playerVars: {
      'autoplay': 0,
      'controls': 0,
      'loop': 1,
      'playlist': 'BElct8HWkp8',
      'modestbranding': 1,
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
};

function onPlayerReady(event) {
  event.target.setVolume(80);
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    setMusicVisualState(true);
  } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
    if (!localAudioEl || localAudioEl.paused) {
      setMusicVisualState(false);
    }
  }
}

/**
 * Web Audio API Synthesizer Fallback:
 * Plays the lush slowed + reverb chord progression of "Love Me Not" (Dbmaj9 - Cm7 - Bbm7 - Abmaj7)
 * using mellow lowpass filters, slow tempo (68 BPM), and warm Rhodes style resonance.
 */
function initSynthAudio() {
  if (!synthAudioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) synthAudioContext = new AudioCtx();
  }
  if (synthAudioContext && synthAudioContext.state === 'suspended') {
    synthAudioContext.resume();
  }
}

// Chords: Dbmaj9, Cm7, Bbm7, Abmaj7
const SLOWED_CHORDS = [
  [138.59, 207.65, 261.63, 311.13, 370.00], // Db3, Ab3, C4, Eb4, F#4
  [130.81, 196.00, 246.94, 311.13],         // C3, G3, B3, Eb4
  [116.54, 174.61, 220.00, 261.63],         // Bb2, F3, A3, C4
  [103.83, 155.56, 196.00, 246.94]          // Ab2, Eb3, G3, B3
];

function playSlowedChord(frequencies, duration = 3.6) {
  if (!synthAudioContext) return;
  const now = synthAudioContext.currentTime;

  // Master lowpass filter for that warm muffled "slowed + reverb" vibe
  const filter = synthAudioContext.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(1100, now);
  filter.Q.setValueAtTime(1.2, now);

  const masterGain = synthAudioContext.createGain();
  masterGain.gain.setValueAtTime(0.001, now);
  masterGain.gain.linearRampToValueAtTime(0.12, now + 0.3);
  masterGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  frequencies.forEach((freq, idx) => {
    const osc = synthAudioContext.createOscillator();
    // Warm Rhodes electric piano approximation (triangle with subtle sine sub)
    osc.type = idx === 0 ? 'sine' : 'triangle';
    osc.frequency.setValueAtTime(freq, now);

    // Subtle pitch flutter (tape wow)
    const lfo = synthAudioContext.createOscillator();
    const lfoGain = synthAudioContext.createGain();
    lfo.frequency.setValueAtTime(0.4, now);
    lfoGain.gain.setValueAtTime(1.5, now);
    lfo.connect(osc.detune);
    lfo.start(now);
    lfo.stop(now + duration);

    osc.connect(filter);
    osc.start(now + (idx * 0.04));
    osc.stop(now + duration);
  });

  filter.connect(masterGain);
  masterGain.connect(synthAudioContext.destination);
}

let chordIndex = 0;
function startSlowedSynthEngine() {
  if (synthIntervalId) clearInterval(synthIntervalId);
  initSynthAudio();
  playSlowedChord(SLOWED_CHORDS[chordIndex % SLOWED_CHORDS.length]);
  chordIndex++;

  synthIntervalId = setInterval(() => {
    if (!isMusicPlaying) return;
    playSlowedChord(SLOWED_CHORDS[chordIndex % SLOWED_CHORDS.length]);
    chordIndex++;
  }, 3800);
}

function stopSlowedSynthEngine() {
  if (synthIntervalId) {
    clearInterval(synthIntervalId);
    synthIntervalId = null;
  }
}

/**
 * Universal Play / Pause handler for "Love Me Not" (Slowed + Reverb)
 */
function toggleLoveMeNotMusic() {
  if (isMusicPlaying) {
    pauseLoveMeNotMusic();
  } else {
    playLoveMeNotMusic();
  }
}

function playLoveMeNotMusic() {
  initSynthAudio();
  isMusicPlaying = true;
  setMusicVisualState(true);

  // 1. Try local audio if loaded
  localAudioEl = document.getElementById('localAudio');
  if (localAudioEl && localAudioEl.src && !localAudioEl.src.endsWith('null') && localAudioEl.readyState >= 2) {
    localAudioEl.play().catch(() => {});
    showToast(I18N[currentLanguage].musicPlaying);
    return;
  }

  // 2. Try YouTube IFrame Player API
  if (ytPlayer && typeof ytPlayer.playVideo === 'function') {
    try {
      ytPlayer.playVideo();
      showToast(I18N[currentLanguage].musicPlaying);
      return;
    } catch (e) {
      console.warn("YouTube play attempt:", e);
    }
  }

  // 3. Fallback: Synthesized slowed + reverb neo-soul chords
  startSlowedSynthEngine();
  showToast(I18N[currentLanguage].musicPlaying);
}

function pauseLoveMeNotMusic() {
  isMusicPlaying = false;
  setMusicVisualState(false);

  if (localAudioEl && !localAudioEl.paused) {
    localAudioEl.pause();
  }
  if (ytPlayer && typeof ytPlayer.pauseVideo === 'function') {
    try {
      ytPlayer.pauseVideo();
    } catch (e) {}
  }
  stopSlowedSynthEngine();
  showToast(I18N[currentLanguage].musicPaused);
}

function setMusicVisualState(playing) {
  isMusicPlaying = playing;
  if (playing) {
    elements.musicDockContainer.classList.add('music-playing');
    elements.soundToggleBtn.classList.add('sound-active');
    elements.dockPlayIcon.textContent = '❚❚';
    document.getElementById('soundIcon').textContent = '🔊';
  } else {
    elements.musicDockContainer.classList.remove('music-playing');
    elements.soundToggleBtn.classList.remove('sound-active');
    elements.dockPlayIcon.textContent = '▶';
    document.getElementById('soundIcon').textContent = '🎵';
  }
}

// Wire music buttons
elements.soundToggleBtn.addEventListener('click', toggleLoveMeNotMusic);
elements.dockPlayBtn.addEventListener('click', toggleLoveMeNotMusic);

// Custom audio file input (user can pick an MP3 on their machine)
elements.localFileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const fileUrl = URL.createObjectURL(file);
    localAudioEl = document.getElementById('localAudio');
    localAudioEl.src = fileUrl;
    localAudioEl.load();
    localAudioEl.play().then(() => {
      setMusicVisualState(true);
      showToast(`🎵 Memutar file: ${file.name}`);
    }).catch(err => {
      console.warn(err);
    });
  }
});

// --- 5. BUTTERY-SMOOTH ORCHESTRATED 3D ENVELOPE ANIMATION ---

/**
 * Smooth multi-stage opening:
 * Stage 1: Wax seal breaks/fades away smoothly with golden shimmer particles.
 * Stage 2: Flap rotates backwards with smooth 3D physics.
 * Stage 3: Letter slides vertically out of the pocket.
 * Stage 4: Letter unfolds forward gracefully, elevates z-index, and envelope expands to full reading height.
 */
function openEnvelope() {
  if (isEnvelopeOpen || isAnimatingEnvelope) return;
  isAnimatingEnvelope = true;

  // Auto-play Love Me Not music on letter opening for maximum ambiance!
  if (!isMusicPlaying) {
    playLoveMeNotMusic();
  }

  const wrapper = elements.envelopeWrapper;
  elements.stageHint.style.opacity = '0';
  elements.stageHint.style.pointerEvents = 'none';

  // Confetti burst from seal
  const sealRect = elements.waxSealBtn.getBoundingClientRect();
  burstConfetti(sealRect.left + sealRect.width / 2, sealRect.top + sealRect.height / 2, 75);

  // Stage 1: Begin opening (Seal fades, flap begins rotation)
  wrapper.classList.remove('is-closing');
  wrapper.classList.add('is-opening');

  // Stage 2: Letter begins upward slide
  setTimeout(() => {
    wrapper.classList.add('is-open');
    wrapper.classList.remove('is-opening');
    isEnvelopeOpen = true;
    isAnimatingEnvelope = false;

    // Smooth scroll into view on mobile
    if (window.innerWidth < 768) {
      wrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, 700);
}

/**
 * Smooth multi-stage closing:
 * Stage 1: Letter glides back down into the envelope pocket.
 * Stage 2: Top flap swings back down over the pocket.
 * Stage 3: Wax seal drops in with a spring bounce.
 * Stage 4: Hint returns and stage resets.
 */
function foldEnvelope() {
  if (!isEnvelopeOpen || isAnimatingEnvelope) return;
  isAnimatingEnvelope = true;

  const wrapper = elements.envelopeWrapper;

  // Stage 1: Start closing sequence
  wrapper.classList.remove('is-open');
  wrapper.classList.add('is-closing');

  // Stage 2: After letter is tucked and flap closed, return to initial state
  setTimeout(() => {
    wrapper.classList.remove('is-closing');
    isEnvelopeOpen = false;
    isAnimatingEnvelope = false;
    elements.stageHint.style.opacity = '1';
    elements.stageHint.style.pointerEvents = 'auto';
  }, 950);
}

elements.waxSealBtn.addEventListener('click', openEnvelope);
elements.foldLetterBtn.addEventListener('click', foldEnvelope);
elements.openLetterCta.addEventListener('click', (e) => {
  e.preventDefault();
  openEnvelope();
  elements.envelopeWrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// Sync customizer inputs with letter display in real-time
elements.recipientInput.addEventListener('input', (e) => {
  elements.recipientDisplay.textContent = e.target.value.trim() || (currentLanguage === 'id' ? 'Ibu & Bapak' : 'Dearest Someone');
});

elements.senderInput.addEventListener('input', (e) => {
  elements.senderDisplay.textContent = e.target.value.trim() || (currentLanguage === 'id' ? 'Dengan Sepenuh Hati' : 'With All My Heart');
});

// Preset selection update
function updateLetterContentFromPresets() {
  const rel = elements.relationshipSelect.value;
  const relCategory = PRESETS[rel] || PRESETS.family;
  const vibeData = relCategory[currentVibe] || Object.values(relCategory)[0];

  if (!vibeData) return;

  if (currentLanguage === 'id') {
    elements.letterParagraph1.textContent = vibeData.p1_id;
    elements.letterParagraph2.textContent = vibeData.p2_id;
    elements.letterParagraph3.textContent = vibeData.quote_id;
    elements.letterParagraph4.textContent = vibeData.p4_id;
  } else {
    elements.letterParagraph1.textContent = vibeData.p1_en;
    elements.letterParagraph2.textContent = vibeData.p2_en;
    elements.letterParagraph3.textContent = vibeData.quote_en;
    elements.letterParagraph4.textContent = vibeData.p4_en;
  }
}

elements.relationshipSelect.addEventListener('change', () => {
  const rel = elements.relationshipSelect.value;
  const defaultNames = {
    family: { id: "Ibu & Bapak", en: "Mom & Dad" },
    friend: { id: "Sahabat Terbaikku", en: "My Dearest Friend" },
    mentor: { id: "Bapak / Ibu Guru", en: "Honored Mentor" },
    partner: { id: "Kekasih Hatiku", en: "My Beloved" },
    colleague: { id: "Rekan Satu Tim", en: "Awesome Teammate" },
    self: { id: "Diriku Sendiri", en: "My Own Soul" }
  };

  const nameVal = defaultNames[rel] ? defaultNames[rel][currentLanguage] : "Seseorang Berharga";
  elements.recipientInput.value = nameVal;
  elements.recipientDisplay.textContent = nameVal;
  updateLetterContentFromPresets();
});

// Emotion chips selection
elements.emotionChips.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    elements.emotionChips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    currentVibe = chip.dataset.vibe;
    updateLetterContentFromPresets();
  });
});

// Surprise Inspiration button
const relationsList = ['family', 'friend', 'mentor', 'partner', 'colleague', 'self'];
elements.surpriseMeBtn.addEventListener('click', () => {
  const currentRel = elements.relationshipSelect.value;
  let newRel = relationsList[Math.floor(Math.random() * relationsList.length)];
  while (newRel === currentRel) {
    newRel = relationsList[Math.floor(Math.random() * relationsList.length)];
  }
  elements.relationshipSelect.value = newRel;
  elements.relationshipSelect.dispatchEvent(new Event('change'));
  
  if (!isEnvelopeOpen) {
    openEnvelope();
  }
  showToast(currentLanguage === 'id' ? '✨ Inspirasi baru dimuat!' : '✨ New gratitude inspiration loaded!');
});

// Copy letter text to clipboard
elements.copyLetterBtn.addEventListener('click', async () => {
  const to = elements.recipientDisplay.textContent;
  const from = elements.senderDisplay.textContent;
  const p1 = elements.letterParagraph1.textContent;
  const p2 = elements.letterParagraph2.textContent;
  const q = elements.letterParagraph3.textContent;
  const p4 = elements.letterParagraph4.textContent;

  const fullLetterText = `${to}\n\n${p1}\n\n${p2}\n\n${q}\n\n${p4}\n\n${from}`;

  try {
    await navigator.clipboard.writeText(fullLetterText);
    showToast(I18N[currentLanguage].toastCopied);
  } catch (err) {
    showToast("📋 Pesan siap disalin!");
  }
});

// Custom letter edit modal
elements.editCustomMsgBtn.addEventListener('click', () => {
  elements.customMessageTextarea.value = `${elements.letterParagraph1.textContent}\n\n${elements.letterParagraph2.textContent}`;
  elements.editModal.classList.add('active');
  elements.editModal.setAttribute('aria-hidden', 'false');
});

elements.closeModalBtn.addEventListener('click', () => {
  elements.editModal.classList.remove('active');
  elements.editModal.setAttribute('aria-hidden', 'true');
});

elements.cancelModalBtn.addEventListener('click', () => {
  elements.editModal.classList.remove('active');
  elements.editModal.setAttribute('aria-hidden', 'true');
});

elements.saveCustomMsgBtn.addEventListener('click', () => {
  const text = elements.customMessageTextarea.value.trim();
  if (text) {
    elements.letterParagraph1.textContent = text;
    elements.letterParagraph2.textContent = "";
    showToast(I18N[currentLanguage].toastSaved);
  }
  elements.editModal.classList.remove('active');
  elements.editModal.setAttribute('aria-hidden', 'true');
});

// --- 6. STARLIGHT MEMORY JAR LOGIC (PERSISTENT WITH LOCALSTORAGE) ---
function loadJarNotes() {
  const saved = localStorage.getItem('gratitude_jar_stars_v2');
  if (saved) {
    try {
      jarNotes = JSON.parse(saved);
    } catch (e) {
      jarNotes = [...INITIAL_JAR_NOTES];
    }
  } else {
    jarNotes = [...INITIAL_JAR_NOTES];
  }
  renderJarStars();
}

function saveJarNotes() {
  localStorage.setItem('gratitude_jar_stars_v2', JSON.stringify(jarNotes));
}

function renderJarStars() {
  const existingStars = elements.jarBody.querySelectorAll('.star-item');
  existingStars.forEach(s => s.remove());

  elements.jarCount.textContent = jarNotes.length;

  jarNotes.forEach((note, index) => {
    const starEl = document.createElement('div');
    starEl.className = 'star-item';
    starEl.textContent = note.icon || '⭐';

    const xPercent = 15 + Math.random() * 65;
    const yPercent = 20 + Math.random() * 65;
    const animDelay = (index * 0.4) % 3;

    starEl.style.left = `${xPercent}%`;
    starEl.style.top = `${yPercent}%`;
    starEl.style.animationDelay = `${animDelay}s`;
    starEl.title = note.text;

    starEl.addEventListener('click', () => {
      showJarNotePopover(note);
    });

    elements.jarBody.appendChild(starEl);
  });
}

function showJarNotePopover(note) {
  elements.popoverTag.textContent = note.tag;
  elements.popoverText.textContent = note.text;
  elements.notePopover.classList.add('visible');
}

elements.closePopover.addEventListener('click', () => {
  elements.notePopover.classList.remove('visible');
});

elements.addJarNoteBtn.addEventListener('click', () => {
  const noteText = elements.jarNoteInput.value.trim();
  if (!noteText) {
    showToast(I18N[currentLanguage].toastEmptyInput);
    elements.jarNoteInput.focus();
    return;
  }

  const tagValue = elements.jarTagSelect.value;
  const icon = tagValue.split(' ')[0] || '🌟';

  const newNote = {
    text: noteText,
    tag: tagValue,
    icon: icon
  };

  jarNotes.push(newNote);
  saveJarNotes();
  renderJarStars();

  elements.jarNoteInput.value = '';
  showToast(I18N[currentLanguage].toastStarAdded);

  const jarRect = elements.jarBody.getBoundingClientRect();
  burstConfetti(jarRect.left + jarRect.width / 2, jarRect.top + jarRect.height / 3, 30);
});

// --- 7. 3D FLIP CARDS INTERACTION ---
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

// --- 8. DAILY GRATITUDE QUOTE GENERATOR ---
let quoteIndex = 0;
function displayQuote(index) {
  const q = QUOTES[index % QUOTES.length];
  elements.dailyQuoteText.textContent = currentLanguage === 'id' ? q.text_id : q.text_en;
  elements.dailyQuoteAuthor.textContent = `— ${q.author}`;
}

elements.nextQuoteBtn.addEventListener('click', () => {
  quoteIndex++;
  displayQuote(quoteIndex);
});

// --- 9. BILINGUAL LANGUAGE SWITCHER ---
function setLanguage(lang) {
  currentLanguage = lang;
  elements.currentLangLabel.textContent = lang === 'id' ? 'ID 🇮🇩' : 'EN 🇬🇧';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang] && I18N[lang][key]) {
      el.innerHTML = I18N[lang][key];
    }
  });

  updateLetterContentFromPresets();
  displayQuote(quoteIndex);
}

elements.langToggleBtn.addEventListener('click', () => {
  const newLang = currentLanguage === 'id' ? 'en' : 'id';
  setLanguage(newLang);
  showToast(newLang === 'id' ? 'Bahasa Indonesia diaktifkan' : 'Switched to English');
});

// --- 10. CANVAS BACKGROUND STARS & COSMIC PARTICLES ---
const ambientCtx = elements.ambientCanvas.getContext('2d');
let bgParticles = [];

function resizeCanvas() {
  elements.ambientCanvas.width = window.innerWidth;
  elements.ambientCanvas.height = window.innerHeight;
  elements.confettiCanvas.width = window.innerWidth;
  elements.confettiCanvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class BgStar {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * elements.ambientCanvas.width;
    this.y = Math.random() * elements.ambientCanvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.alpha = Math.random() * 0.7 + 0.2;
    this.speed = Math.random() * 0.02 + 0.01;
    this.pulseSpeed = Math.random() * 0.02 + 0.01;
    this.color = Math.random() > 0.4 ? '#f4c26d' : '#ffffff';
  }
  update() {
    this.alpha += Math.sin(Date.now() * this.pulseSpeed * 0.05) * 0.01;
    if (this.alpha < 0.1) this.alpha = 0.1;
    if (this.alpha > 0.9) this.alpha = 0.9;
    this.y -= this.speed;
    if (this.y < -10) this.y = elements.ambientCanvas.height + 10;
  }
  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

for (let i = 0; i < 90; i++) {
  bgParticles.push(new BgStar());
}

function animateAmbientCanvas() {
  ambientCtx.clearRect(0, 0, elements.ambientCanvas.width, elements.ambientCanvas.height);
  for (let p of bgParticles) {
    p.update();
    p.draw(ambientCtx);
  }
  requestAnimationFrame(animateAmbientCanvas);
}
animateAmbientCanvas();

// --- 11. CONFETTI & SPARKLE ENGINE ---
const confettiCtx = elements.confettiCanvas.getContext('2d');
let activeConfetti = [];

class ConfettiPiece {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 8 + 4;
    this.color = ['#f4c26d', '#ffd700', '#ff758c', '#64b5f6', '#fff', '#e0b0ff'][Math.floor(Math.random() * 6)];
    this.shape = Math.random() > 0.4 ? 'circle' : (Math.random() > 0.5 ? 'heart' : 'star');
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 9 + 4;
    this.vx = Math.cos(angle) * velocity;
    this.vy = Math.sin(angle) * velocity - 4;
    this.rotation = Math.random() * 360;
    this.rotSpeed = (Math.random() - 0.5) * 12;
    this.gravity = 0.22;
    this.drag = 0.97;
    this.alpha = 1;
    this.life = 1;
    this.decay = Math.random() * 0.015 + 0.01;
  }

  update() {
    this.vx *= this.drag;
    this.vy = (this.vy + this.gravity) * this.drag;
    this.x += this.vx;
    this.y += this.vy;
    this.rotation += this.rotSpeed;
    this.life -= this.decay;
    this.alpha = Math.max(0, this.life);
  }

  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.translate(this.x, this.y);
    ctx.rotate((this.rotation * Math.PI) / 180);
    ctx.fillStyle = this.color;

    if (this.shape === 'circle') {
      ctx.beginPath();
      ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
      ctx.fill();
    } else if (this.shape === 'heart') {
      ctx.font = `${this.size * 1.5}px serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('❤️', 0, 0);
    } else {
      ctx.font = `${this.size * 1.5}px serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('✨', 0, 0);
    }

    ctx.restore();
  }
}

function burstConfetti(x, y, count = 65) {
  for (let i = 0; i < count; i++) {
    activeConfetti.push(new ConfettiPiece(x, y));
  }
}

function animateConfetti() {
  confettiCtx.clearRect(0, 0, elements.confettiCanvas.width, elements.confettiCanvas.height);
  for (let i = activeConfetti.length - 1; i >= 0; i--) {
    const p = activeConfetti[i];
    p.update();
    p.draw(confettiCtx);
    if (p.life <= 0) {
      activeConfetti.splice(i, 1);
    }
  }
  requestAnimationFrame(animateConfetti);
}
animateConfetti();

elements.celebrateBtn.addEventListener('click', () => {
  const rect = elements.celebrateBtn.getBoundingClientRect();
  burstConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2, 85);
});

// --- 12. TOAST SYSTEM ---
let toastTimeout;
function showToast(message) {
  clearTimeout(toastTimeout);
  elements.toastNotice.textContent = message;
  elements.toastNotice.classList.add('show');
  toastTimeout = setTimeout(() => {
    elements.toastNotice.classList.remove('show');
  }, 3200);
}

// --- 13. INITIALIZATION ---
function initApp() {
  const now = new Date();
  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  elements.letterDate.textContent = `${monthNames[now.getMonth()]} ${now.getFullYear()}`;

  setLanguage('id');
  loadJarNotes();
  initYouTubeAudio();
}

document.addEventListener('DOMContentLoaded', initApp);
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  initApp();
}
