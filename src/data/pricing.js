export const VEHICLE_PRICING = {
  Hatchback: { perKmRate: 11, minKmPerDay: 250, driverAllowancePerDay: 350, baseOneWayMinimum: 2400 },
  Sedan: { perKmRate: 12, minKmPerDay: 250, driverAllowancePerDay: 400, baseOneWayMinimum: 2800 },
  SUV: { perKmRate: 17, minKmPerDay: 300, driverAllowancePerDay: 450, baseOneWayMinimum: 4200 },
  Ertiga: { perKmRate: 15, minKmPerDay: 300, driverAllowancePerDay: 450, baseOneWayMinimum: 3800 },
  Innova: { perKmRate: 18, minKmPerDay: 300, driverAllowancePerDay: 500, baseOneWayMinimum: 4600 },
  'Innova Crysta': { perKmRate: 20, minKmPerDay: 300, driverAllowancePerDay: 500, baseOneWayMinimum: 5200 },
  'Tempo Traveller': { perKmRate: 26, minKmPerDay: 300, driverAllowancePerDay: 650, baseOneWayMinimum: null },
  Bus: { perKmRate: null, minKmPerDay: 300, driverAllowancePerDay: 900, baseOneWayMinimum: null },
};

export const DESTINATION_DISTANCES_FROM_NASHIK = {
  Nashik: 80,
  Trimbakeshwar: 30,
  Shirdi: 90,
  'Shani Shingnapur': 145,
  Igatpuri: 48,
  Bhandardara: 75,
  Mumbai: 170,
  'Mumbai Airport': 165,
  Pune: 215,
  Ellora: 175,
  Ajanta: 240,
  'Chhatrapati Sambhajinagar': 185,
  Bhimashankar: 195,
  Lonavala: 220,
  Matheran: 185,
  Mahabaleshwar: 325,
  Pandharpur: 365,
  Kolhapur: 435,
  Ganpatipule: 445,
  Konkan: 390,
  Ashtavinayak: 420,
  Saputara: 82,
  Goa: 585,
};

export const STAY_PRICING_PER_ROOM_NIGHT = {
  'No Hotel Required': 0,
  'Standard Hotel': 2400,
  'Premium Hotel': 4600,
  'Luxury Hotel': 8200,
};

export const FOOD_PRICING_PER_PERSON_DAY = {
  'No Meals': 0,
  Breakfast: 350,
  'All Meals': 1100,
};

export const SIGHTSEEING_ESTIMATE_PER_DAY = 650;

export const STAY_OPTIONS = [
  {
    id: 'No Hotel Required',
    label: { en: 'No Hotel Required', hi: 'होटल नहीं चाहिए', mr: 'हॉटेल नको' },
  },
  {
    id: 'Standard Hotel',
    label: { en: 'Standard Hotel', hi: 'स्टैंडर्ड होटल', mr: 'स्टँडर्ड हॉटेल' },
  },
  {
    id: 'Premium Hotel',
    label: { en: 'Premium Hotel', hi: 'प्रीमियम होटल', mr: 'प्रीमियम हॉटेल' },
  },
  {
    id: 'Luxury Hotel',
    label: { en: 'Luxury Hotel', hi: 'लक्ज़री होटल', mr: 'लक्झरी हॉटेल' },
  },
];

export const FOOD_OPTIONS = [
  {
    id: 'No Meals',
    label: { en: 'No Meals', hi: 'भोजन नहीं', mr: 'जेवण नको' },
  },
  {
    id: 'Breakfast',
    label: { en: 'Breakfast', hi: 'नाश्ता', mr: 'नाश्ता' },
  },
  {
    id: 'All Meals',
    label: { en: 'All Meals', hi: 'सभी भोजन', mr: 'सर्व जेवण' },
  },
];

export const SIGHTSEEING_SUGGESTIONS = [
  {
    id: 'temple',
    label: {
      en: 'Temple Darshan Stops',
      hi: 'मंदिर दर्शन पड़ाव',
      mr: 'मंदिर दर्शन थांबे',
    },
  },
  {
    id: 'ghats',
    label: {
      en: 'Panchavati & Godavari Ghats',
      hi: 'पंचवटी व गोदावरी घाट',
      mr: 'पंचवटी व गोदावरी घाट',
    },
  },
  {
    id: 'hills',
    label: {
      en: 'Scenic Viewpoints',
      hi: 'हिल स्टेशन व्यूपॉइंट्स',
      mr: 'निसर्गरम्य व्ह्यूपॉइंट्स',
    },
  },
  {
    id: 'heritage',
    label: {
      en: 'Forts & Heritage Caves',
      hi: 'किले व ऐतिहासिक गुफाएं',
      mr: 'किल्ले व ऐतिहासिक लेणी',
    },
  },
];
