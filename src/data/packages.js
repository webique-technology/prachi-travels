import { IMAGES } from './images';
import { AIRPORT_IMAGES } from './images';

export const SERVICE_CATEGORIES = [
  { id: 'Airports', label: { en: 'Airports', hi: 'हवाई अड्डे', mr: 'विमानतळे' } },
  { id: 'Cities', label: { en: 'Cities', hi: 'शहर', mr: 'शहरे' } },
  { id: 'Railway Stations', label: { en: 'Railway Stations', hi: 'रेलवे स्टेशन', mr: 'रेल्वे स्थानके' } },
];

// Railway Service Data
export const RAILWAY_DATA = [
  // ─── 1. SAINAGAR SHIRDI ────────────────────────────────────────────────────
  {
    id: 'rail-01',
    slug: 'sainagar-shirdi-railway-station-cab',
    category: 'Railway Stations',
    image: '/images/sainagar-shirdi.jpg',
    title: {
      en: 'Sainagar Shirdi Railway Station Cab',
      hi: 'साईनगर शिरडी रेलवे स्टेशन कैब सेवा',
      mr: 'साईनगर शिर्डी रेल्वे स्थानक कॅब सेवा',
    },
    tagline: {
      en: 'Direct Station Pickup & Outstation Drops to Nashik, Pune & Mumbai',
      hi: 'नासिक, पुणे और मुंबई के लिए सीधी स्टेशन पिकअप व ड्रॉप सेवा',
      mr: 'नाशिक, पुणे आणि मुंबईसाठी थेट रेल्वे स्थानक पिकअप व ड्रॉप सेवा',
    },
    description: {
      en: 'Travel comfortably to and from Sainagar Shirdi Railway Station with punctual outstation cabs connecting Shirdi directly to Nashik (90 km), Pune (185 km), and Mumbai (240 km) on transparent fixed fares.',
      hi: 'साईनगर शिरडी रेलवे स्टेशन से नासिक (90 किमी), पुणे (185 किमी) और मुंबई (240 किमी) के लिए समयबद्ध और पारदर्शी फिक्स्ड किराए पर आरामदायक आउटस्टेशन कैब सेवा पाएं।',
      mr: 'साईनगर शिर्डी रेल्वे स्थानकावरून नाशिक (९० किमी), पुणे (१८५ किमी) आणि मुंबई (२४० किमी) साठी वेळेवर व पारदर्शक फिक्स्ड दरात आरामदायी आउटस्टेशन कॅब सेवा मिळवा.',
    },
    features: {
      en: [
        'On-time pickup synced with train arrival and departure timings',
        'Fixed transparent fares with highway toll charges included',
        'Clean AC sedans, Innova Crysta, Ertiga & Tempo Travellers',
        'Spacious luggage capacity for families and pilgrim groups',
        '24/7 WhatsApp booking and live trip support desk',
      ],
      hi: [
        'ट्रेन के आगमन और प्रस्थान समय के अनुसार समय पर पिकअप',
        'हाईवे टोल शुल्क सहित पारदर्शी और निश्चित किराया',
        'स्वच्छ एसी सेडान, इनोवा क्रिस्टा, अर्टिगा और टेंपो ट्रैवलर',
        'परिवारों और तीर्थयात्री समूहों के सामान के लिए पर्याप्त जगह',
        '24/7 व्हाट्सएप बुकिंग और लाइव यात्रा सहायता डेस्क',
      ],
      mr: [
        'रेल्वेच्या आगमन व सुटण्याच्या वेळेनुसार अचूक पिकअप',
        'महामार्ग टोल शुल्कासह पारदर्शक आणि निश्चित दर',
        'स्वच्छ एसी सेडान, इनोव्हा क्रिस्टा, अर्टिगा व टेम्पो ट्रॅव्हलर',
        'कुटुंब व भाविक गटांच्या सामानासाठी प्रशस्त जागा',
        '२४/७ व्हॉट्सॲप बुकिंग आणि थेट प्रवास मदत कक्ष',
      ],
    },
  },

  // ─── 2. KOPARGAON ──────────────────────────────────────────────────────────
  {
    id: 'rail-02',
    slug: 'kopargaon-railway-station-cab',
    category: 'Railway Stations',
    image: '/images/kopargaon-railway.jpg',
    title: {
      en: 'Kopargaon Railway Station Cab',
      hi: 'कोपरगांव रेलवे स्टेशन कैब सेवा',
      mr: 'कोपरगाव रेल्वे स्थानक कॅब सेवा',
    },
    tagline: {
      en: 'Fast Station Transfers to Shirdi Temple, Nashik & Ahmednagar',
      hi: 'शिरडी मंदिर, नासिक और अहमदनगर के लिए त्वरित स्टेशन ट्रांसफर',
      mr: 'शिर्डी मंदिर, नाशिक आणि अहमदनगरसाठी जलद स्थानक ट्रान्सफर',
    },
    description: {
      en: 'Reliable pickup and drop cabs from Kopargaon Railway Station located just 18 km from Shirdi Sai Baba Temple and 85 km from Nashik, ensuring stress-free transfers for pilgrims and business travellers.',
      hi: 'शिरडी साई बाबा मंदिर से मात्र 18 किमी और नासिक से 85 किमी दूर स्थित कोपरगांव रेलवे स्टेशन से तीर्थयात्रियों और यात्रियों के लिए सुरक्षित व समयबद्ध पिकअप-ड्रॉप कैब सेवा।',
      mr: 'शिर्डी साईबाबा मंदिरापासून अवघ्या १८ किमी आणि नाशिकपासून ८५ किमी अंतरावरील कोपरगाव रेल्वे स्थानकावरून भाविक व प्रवाशांसाठी सुरक्षित आणि वेळेवर कॅब सेवा.',
    },
    features: {
      en: [
        'Quick 25-minute direct transfer to Shirdi Sai Baba Temple',
        'Zero post-trip hidden surcharges with flat route billing',
        'Experienced local drivers familiar with pilgrim routes',
        'Choice of hatchbacks, sedans, SUVs & group vehicles',
        'Instant booking confirmation on WhatsApp or call',
      ],
      hi: [
        'शिरडी साई बाबा मंदिर के लिए मात्र 25 मिनट में सीधा ट्रांसफर',
        'फ्लैट रूट बिलिंग के साथ यात्रा के बाद कोई छिपा शुल्क नहीं',
        'तीर्थ मार्गों से भली-भांति परिचित अनुभवी स्थानीय ड्राइवर',
        'हैचबैक, सेडान, एसयूवी और ग्रुप वाहनों के विकल्प',
        'व्हाट्सएप या कॉल पर तुरंत बुकिंग कन्फर्मेशन',
      ],
      mr: [
        'शिर्डी साईबाबा मंदिरासाठी अवघ्या २५ मिनिटांत थेट प्रवास',
        'फ्लॅट रूट बिलिंगसह प्रवासानंतर कोणतेही छुपा शुल्क नाही',
        'तीर्थक्षेत्र मार्गांची पूर्ण माहिती असलेले अनुभवी स्थानिक चालक',
        'हॅचबॅक, सेडान, एसयूव्ही आणि ग्रुप वाहनांचे पर्याय',
        'व्हॉट्सॲप किंवा कॉलवर त्वरित बुकिंग निश्चिती',
      ],
    },
  },

  // ─── 3. NAGARSOL ───────────────────────────────────────────────────────────
  {
    id: 'rail-03',
    slug: 'nagarsol-railway-station-cab',
    category: 'Railway Stations',
    image: '/images/nagarsol-station.webp',
    title: {
      en: 'Nagarsol Railway Station Cab',
      hi: 'नगरसोल रेलवे स्टेशन कैब सेवा',
      mr: 'नगरसोल रेल्वे स्थानक कॅब सेवा',
    },
    tagline: {
      en: 'Seamless Inter-City Cabs to Shirdi, Nashik & Chh. Sambhajinagar',
      hi: 'शिरडी, नासिक और छत्रपति संभाजीनगर के लिए सीधी इंटर-सिटी कैब',
      mr: 'शिर्डी, नाशिक आणि छत्रपती संभाजीनगरसाठी थेट इंटर-सिटी कॅब',
    },
    description: {
      en: 'Pre-booked outstation taxis linking Nagarsol Railway Station directly to Shirdi (45 km), Nashik (115 km), and Chhatrapati Sambhajinagar with real-time train arrival tracking.',
      hi: 'नगरसोल रेलवे स्टेशन को शिरडी (45 किमी), नासिक (115 किमी) और छत्रपति संभाजीनगर से जोड़ने वाली प्री-बुक्ड आउटस्टेशन टैक्सी सेवा, लाइव ट्रेन ट्रैकिंग के साथ।',
      mr: 'नगरसोल रेल्वे स्थानकाला शिर्डी (४५ किमी), नाशिक (११५ किमी) आणि छत्रपती संभाजीनगरशी जोडणारी प्री-बुक्ड आउटस्टेशन कॅब सेवा, थेट रेल्वे वेळेच्या समन्वयासह.',
    },
    features: {
      en: [
        'Real-time train schedule monitoring for zero wait delays',
        'Direct highway connectivity to Shirdi & Sambhajinagar',
        'Sanitized, well-maintained AC sedans and Innova SUVs',
        'All-inclusive bundled pricing with clear fare breakdown',
        '24/7 operational dispatch for late-night & early trains',
      ],
      hi: [
        'बिना किसी देरी के पिकअप के लिए लाइव ट्रेन समय की निगरानी',
        'शिरडी और छत्रपति संभाजीनगर के लिए सीधा हाईवे संपर्क',
        'सैनिटाइज्ड और सुव्यवस्थित एसी सेडान व इनोवा एसयूवी',
        'स्पष्ट किराया विवरण के साथ ऑल-इनक्लूसिव बंडल कीमतें',
        'देर रात और सुबह की ट्रेनों के लिए 24/7 कैब उपलब्धता',
      ],
      mr: [
        'कोणत्याही विलंबाशिवाय पिकअपसाठी थेट रेल्वे वेळेचे नियोजन',
        'शिर्डी आणि छत्रपती संभाजीनगरसाठी थेट महामार्ग जोडणी',
        'स्वच्छ व सुस्थितीतील एसी सेडान आणि इनोव्हा एसयूव्ही',
        'स्पष्ट दर तपशीलासह ऑल-इनक्लूसिव पॅकेज दर',
        'रात्री उशिरा व पहाटेच्या रेल्वेंसाठी २४/७ सेवा उपलब्ध',
      ],
    },
  },

  // ─── 4. MANMAD JUNCTION ────────────────────────────────────────────────────
  {
    id: 'rail-04',
    slug: 'manmad-junction-railway-station-cab',
    category: 'Railway Stations',
    image: '/images/manmad-railway.webp',
    title: {
      en: 'Manmad Junction Railway Station Cab',
      hi: 'मनमाड जंक्शन रेलवे स्टेशन कैब सेवा',
      mr: 'मनमाड जंक्शन रेल्वे स्थानक कॅब सेवा',
    },
    tagline: {
      en: 'Prompt Junction Transfers to Nashik, Shirdi, Thane & Sambhajinagar',
      hi: 'नासिक, शिरडी, ठाणे और संभाजीनगर के लिए त्वरित जंक्शन ट्रांसफर',
      mr: 'नाशिक, शिर्डी, ठाणे आणि संभाजीनगरसाठी जलद जंक्शन ट्रान्सफर',
    },
    description: {
      en: 'Dependable outstation cab service from Manmad Railway Junction covering Nashik (80 km) and Shirdi (60 km) via fast highway corridors for families, corporate travellers, and rail passengers.',
      hi: 'मनमाड रेलवे जंक्शन से नासिक (80 किमी) और शिरडी (60 किमी) के लिए तेज हाईवे मार्गों द्वारा परिवारों, कॉर्पोरेट यात्रियों और रेल मुसाफिरों हेतु भरोसेमंद कैब सेवा।',
      mr: 'मनमाड रेल्वे जंक्शनवरून नाशिक (८० किमी) आणि शिर्डी (६० किमी) साठी जलद महामार्गांद्वारे कुटुंबे, कॉर्पोरेट व रेल्वे प्रवाशांसाठी विश्वासार्ह कॅब सेवा.',
    },
    features: {
      en: [
        'Fast express highway transfers to Nashik (80 km) & Shirdi (60 km)',
        'Spacious utility SUVs & Tempo Travellers for heavy luggage',
        'Fixed flat-rate fares with highway tolls included',
        'Corporate invoicing and scheduled pickup support',
        'Trusted, highway-certified local drivers',
      ],
      hi: [
        'नासिक (80 किमी) और शिरडी (60 किमी) के लिए तेज एक्सप्रेस हाईवे ट्रांसफर',
        'अधिक सामान के लिए विशाल एसयूवी और टेंपो ट्रैवलर उपलब्ध',
        'हाईवे टोल सहित निश्चित फ्लैट-रेट किराया',
        'कॉर्पोरेट बिलिंग और निर्धारित पिकअप सहायता',
        'भरोसेमंद और हाईवे-प्रशिक्षित स्थानीय ड्राइवर',
      ],
      mr: [
        'नाशिक (८० किमी) आणि शिर्डी (६० किमी) साठी जलद महामार्ग प्रवास',
        'जास्त सामानासाठी प्रशस्त एसयूव्ही व टेम्पो ट्रॅव्हलर उपलब्ध',
        'महामार्ग टोल शुल्कासह निश्चित फ्लॅट-रेट दर',
        'कॉर्पोरेट इनव्हॉइसिंग आणि नियोजित पिकअप सुविधा',
        'विश्वासार्ह व महामार्ग अनुभवी स्थानिक चालक',
      ],
    },
  },

  // ─── 5. NASHIK ROAD ────────────────────────────────────────────────────────
  {
    id: 'rail-05',
    slug: 'nashik-road-railway-station-cab',
    category: 'Railway Stations',
    image: '/images/nasik-road-railway.webp',
    title: {
      en: 'Nashik Road Railway Station Cab',
      hi: 'नासिक रोड रेलवे स्टेशन कैब सेवा',
      mr: 'नाशिक रोड रेल्वे स्थानक कॅब सेवा',
    },
    tagline: {
      en: 'Point-to-Point Local City & Outstation Cabs to Trimbakeshwar & Shirdi',
      hi: 'नासिक शहर, त्र्यंबकेश्वर और शिरडी के लिए लोकल व आउटस्टेशन कैब',
      mr: 'नाशिक शहर, त्र्यंबकेश्वर आणि शिर्डीसाठी लोकल व आउटस्टेशन कॅब',
    },
    description: {
      en: 'Skip station auto queues with instant local and outstation cab pickups from Nashik Road Railway Station to all Nashik city zones, Trimbakeshwar (38 km), Shirdi (85 km), and Mumbai (165 km).',
      hi: 'स्टेशन की ऑटो कतारों से बचें और नासिक रोड रेलवे स्टेशन से पूरे नासिक शहर, त्र्यंबकेश्वर (38 किमी), शिरडी (85 किमी) और मुंबई (165 किमी) के लिए तुरंत कैब पाएं।',
      mr: 'स्थानकावरील रिक्षा रांगा टाळून नाशिक रोड रेल्वे स्थानकावरून संपूर्ण नाशिक शहर, त्र्यंबकेश्वर (३८ किमी), शिर्डी (८५ किमी) आणि मुंबई (१६५ किमी) साठी थेट कॅब मिळवा.',
    },
    features: {
      en: [
        'Zero surge pricing with fixed city & outstation fare slabs',
        'Direct doorstep pickup right outside Nashik Road station gate',
        'Quick connections to Trimbakeshwar (38 km) & Shirdi (85 km)',
        'Comfortable hatchbacks, AC sedans, and 7-seater SUVs',
        'Courteous Nashik local drivers with complete city knowledge',
      ],
      hi: [
        'बिना किसी सर्ज प्राइसिंग के निश्चित शहरी व आउटस्टेशन दर',
        'नासिक रोड स्टेशन गेट के बाहर से सीधी डोरस्टेप पिकअप',
        'त्र्यंबकेश्वर (38 किमी) और शिरडी (85 किमी) के लिए त्वरित संपर्क',
        'आरामदायक हैचबैक, एसी सेडान और 7-सीटर एसयूवी',
        'नासिक शहर की पूरी जानकारी रखने वाले विनम्र स्थानीय ड्राइवर',
      ],
      mr: [
        'कोणत्याही सर्ज प्राइसिंगशिवाय निश्चित शहर व आउटस्टेशन दर',
        'नाशिक रोड स्थानक प्रवेशद्वाराबाहेरून थेट पिकअप सुविधा',
        'त्र्यंबकेश्वर (३८ किमी) आणि शिर्डी (८५ किमी) साठी जलद प्रवास',
        'आरामदायी हॅचबॅक, एसी सेडान आणि ७-सीटर एसयूव्ही',
        'नाशिक शहराची पूर्ण माहिती असलेले नम्र स्थानिक चालक',
      ],
    },
  },

  // ─── 6. DAUND JUNCTION ─────────────────────────────────────────────────────
  {
    id: 'rail-06',
    slug: 'daund-junction-railway-station-cab',
    category: 'Railway Stations',
    image: '/images/daund-railway.jpg',
    title: {
      en: 'Daund Junction Railway Station Cab',
      hi: 'दौंड जंक्शन रेलवे स्टेशन कैब सेवा',
      mr: 'दौंड जंक्शन रेल्वे स्थानक कॅब सेवा',
    },
    tagline: {
      en: 'Long-Distance Outstation Cabs to Pune, Ahmednagar, Shirdi & Nashik',
      hi: 'पुणे, अहमदनगर, शिरडी और नासिक के लिए लंबी दूरी की आउटस्टेशन कैब',
      mr: 'पुणे, अहमदनगर, शिर्डी आणि नाशिकसाठी लांब पल्ल्याची आउटस्टेशन कॅब',
    },
    description: {
      en: 'Comfortable long-haul outstation MUVs and sedans connecting Daund Junction Railway Station directly to Pune (75 km), Ahmednagar, Shirdi, and Nashik (270 km) with upfront package rates.',
      hi: 'दौंड जंक्शन रेलवे स्टेशन को पुणे (75 किमी), अहमदनगर, शिरडी और नासिक (270 किमी) से जोड़ने वाली आरामदायक लंबी दूरी की एमयूवी और सेडान कैब सेवा।',
      mr: 'दौंड जंक्शन रेल्वे स्थानकाला पुणे (७५ किमी), अहमदनगर, शिर्डी आणि नाशिक (२७० किमी) शी जोडणारी आरामदायी लांब पल्ल्याची एसयूव्ही व सेडान कॅब सेवा.',
    },
    features: {
      en: [
        'Highway-certified drivers for fatigue-free long-distance rides',
        'Spacious Innova Crysta & Ertiga fleet for multi-hour journeys',
        'Upfront fixed-rate billing with zero hidden route charges',
        'Round-trip & multi-day return schedules tailored to trains',
        '24/7 customer assistance from booking to drop-off',
      ],
      hi: [
        'आरामदायक लंबी दूरी की यात्रा के लिए हाईवे-प्रमाणित ड्राइवर',
        'कई घंटों के सफर के लिए विशाल इनोवा क्रिस्टा और अर्टिगा बेड़ा',
        'बिना किसी छिपे शुल्क के अग्रिम निश्चित-दर बिलिंग',
        'ट्रेन समय के अनुसार राउंड-ट्रिप और मल्टी-डे वापसी विकल्प',
        'बुकिंग से ड्रॉप-ऑफ तक 24/7 ग्राहक सहायता',
      ],
      mr: [
        'विनाथकवा लांब पल्ल्याच्या प्रवासासाठी महामार्ग अनुभवी चालक',
        'दीर्घ प्रवासासाठी प्रशस्त इनोव्हा क्रिस्टा व अर्टिगा वाहने',
        'कोणत्याही छुप्या शुल्काशिवाय आगाऊ निश्चित दर बिलिंग',
        'रेल्वे वेळापत्रकानुसार राउंड-ट्रिप व मल्टी-डे परतीचे नियोजन',
        'बुकिंगपासून ड्रॉप-ऑफपर्यंत २४/७ ग्राहक सहाय्य',
      ],
    },
  },

  // ─── 7. AHMEDNAGAR ─────────────────────────────────────────────────────────
  {
    id: 'rail-07',
    slug: 'ahmednagar-railway-station-cab',
    category: 'Railway Stations',
    image: '/images/ahmednagar-railway.avif',
    title: {
      en: 'Ahmednagar Railway Station Cab',
      hi: 'अहमदनगर रेलवे स्टेशन कैब सेवा',
      mr: 'अहमदनगर रेल्वे स्थानक कॅब सेवा',
    },
    tagline: {
      en: 'Direct Station Cabs to Shani Shingnapur, Shirdi, Pune & Nashik',
      hi: 'शनि शिंगणापुर, शिरडी, पुणे और नासिक के लिए सीधी स्टेशन कैब',
      mr: 'शनि शिंगणापूर, शिर्डी, पुणे आणि नाशिकसाठी थेट स्थानक कॅब',
    },
    description: {
      en: 'Daily inter-city outstation cabs from Ahmednagar Railway Station to Shani Shingnapur (35 km), Shirdi (85 km), Pune (120 km), and Nashik (155 km) with all highway tolls included.',
      hi: 'अहमदनगर रेलवे स्टेशन से शनि शिंगणापुर (35 किमी), शिरडी (85 किमी), पुणे (120 किमी) और नासिक (155 किमी) के लिए टोल शुल्क सहित दैनिक इंटर-सिटी कैब सेवा।',
      mr: 'अहमदनगर रेल्वे स्थानकावरून शनि शिंगणापूर (३५ किमी), शिर्डी (८५ किमी), पुणे (१२० किमी) आणि नाशिक (१५५ किमी) साठी टोल शुल्कासह दररोज इंटर-सिटी कॅब सेवा.',
    },
    features: {
      en: [
        'Direct transfers to Shani Shingnapur (35 km) & Shirdi (85 km)',
        'Optional temple stopovers added smoothly to your route',
        'All highway toll charges included in upfront package quotes',
        'Clean AC sedans and multi-row family cruisers',
        'Punctual station gate pickups with live driver coordination',
      ],
      hi: [
        'शनि शिंगणापुर (35 किमी) और शिरडी (85 किमी) के लिए सीधा ट्रांसफर',
        'यात्रा मार्ग में वैकल्पिक मंदिर दर्शन पड़ाव जोड़ने की सुविधा',
        'अग्रिम पैकेज कोटेशन में सभी हाईवे टोल शुल्क शामिल',
        'स्वच्छ एसी सेडान और मल्टी-रो फैमिली क्रूज़र वाहन',
        'लाइव ड्राइवर समन्वय के साथ समय पर स्टेशन गेट पिकअप',
      ],
      mr: [
        'शनि शिंगणापूर (३५ किमी) आणि शिर्डी (८५ किमी) साठी थेट प्रवास',
        'प्रवास मार्गात ऐच्छिक देवदर्शन थांबे जोडण्याची सोय',
        'आगाऊ पॅकेज दरात सर्व महामार्ग टोल शुल्क समाविष्ट',
        'स्वच्छ एसी सेडान आणि प्रशस्त कौटुंबिक वाहने',
        'थेट चालक समन्वयासह स्थानक प्रवेशद्वारावर वेळेवर पिकअप',
      ],
    },
  },

  // ─── 8. PUNE JUNCTION ──────────────────────────────────────────────────────
  {
    id: 'rail-08',
    slug: 'pune-junction-railway-station-cab',
    category: 'Railway Stations',
    image: '/images/pune-railway.webp',
    title: {
      en: 'Pune Junction Railway Station Cab',
      hi: 'पुणे जंक्शन रेलवे स्टेशन कैब सेवा',
      mr: 'पुणे जंक्शन रेल्वे स्थानक कॅब सेवा',
    },
    tagline: {
      en: 'Outstation Highway Cabs to Nashik, Shirdi, Mumbai & Mahabaleshwar',
      hi: 'नासिक, शिरडी, मुंबई और महाबलेश्वर के लिए आउटस्टेशन हाईवे कैब',
      mr: 'नाशिक, शिर्डी, मुंबई आणि महाबळेश्वरसाठी आउटस्टेशन महामार्ग कॅब',
    },
    description: {
      en: 'Hassle-free outstation taxi rentals connecting Pune Junction Railway Station directly to Nashik (210 km), Shirdi (185 km), and Mumbai (150 km) with zero surge pricing.',
      hi: 'बिना किसी सर्ज प्राइसिंग के पुणे जंक्शन रेलवे स्टेशन को सीधे नासिक (210 किमी), शिरडी (185 किमी) और मुंबई (150 किमी) से जोड़ने वाली आरामदायक आउटस्टेशन टैक्सी सेवा।',
      mr: 'कोणत्याही सर्ज प्राइसिंगशिवाय पुणे जंक्शन रेल्वे स्थानकाला थेट नाशिक (२१० किमी), शिर्डी (१८५ किमी) आणि मुंबई (१५० किमी) शी जोडणारी आउटस्टेशन कॅब सेवा.',
    },
    features: {
      en: [
        'Smooth outstation rides to Nashik (210 km) & Shirdi (185 km)',
        'Fixed transparent tariffs immune to peak-hour surge pricing',
        'Innova Crysta, Ertiga & Dzire fleet ready for highway trips',
        'GST/commercial invoicing available for corporate travellers',
        'Experienced drivers skilled in bypassing city traffic',
      ],
      hi: [
        'नासिक (210 किमी) और शिरडी (185 किमी) के लिए आरामदायक आउटस्टेशन सफर',
        'पीक-आवर सर्ज प्राइसिंग से मुक्त निश्चित व पारदर्शी दरें',
        'हाईवे यात्रा के लिए तैयार इनोवा क्रिस्टा, अर्टिगा और डिजायर बेड़ा',
        'कॉर्पोरेट यात्रियों के लिए जीएसटी/कमर्शियल इनवॉइसिंग उपलब्ध',
        'शहरी ट्रैफिक से बचते हुए सुगम यात्रा कराने वाले अनुभवी ड्राइवर',
      ],
      mr: [
        'नाशिक (२१० किमी) आणि शिर्डी (१८५ किमी) साठी आरामदायी महामार्ग प्रवास',
        'पीक-अवर सर्ज प्राइसिंगमुक्त निश्चित व पारदर्शक दर',
        'महामार्ग प्रवासासाठी सज्ज इनोव्हा क्रिस्टा, अर्टिगा व डिझायर वाहने',
        'कॉर्पोरेट प्रवाशांसाठी व्यावसायिक इनव्हॉइसिंग सुविधा उपलब्ध',
        'शहरी वाहतूक कोंडी टाळून सुरळीत प्रवास घडवणारे अनुभवी चालक',
      ],
    },
  },

  // ─── 9. MUMBAI CSMT ────────────────────────────────────────────────────────
  {
    id: 'rail-09',
    slug: 'mumbai-csmt-railway-station-cab',
    category: 'Railway Stations',
    image: '/images/mumbai-cst-railway.jpg',
    title: {
      en: 'Mumbai CSMT Railway Station Cab',
      hi: 'मुंबई सीएसएमटी (CSMT) रेलवे स्टेशन कैब सेवा',
      mr: 'मुंबई सीएसएमटी (CSMT) रेल्वे स्थानक कॅब सेवा',
    },
    tagline: {
      en: 'Expressway Outstation Cabs to Nashik, Pune, Thane & Shirdi',
      hi: 'नासिक, पुणे, ठाणे और शिरडी के लिए एक्सप्रेसवे आउटस्टेशन कैब',
      mr: 'नाशिक, पुणे, ठाणे आणि शिर्डीसाठी एक्सप्रेसवे आउटस्टेशन कॅब',
    },
    description: {
      en: 'Direct expressway cab transfers from Chhatrapati Shivaji Maharaj Terminus (CSMT) in Mumbai to Nashik (170 km), Pune (150 km), and Shirdi with upfront toll-inclusive flat pricing.',
      hi: 'मुंबई के छत्रपति शिवाजी महाराज टर्मिनस (CSMT) से नासिक (170 किमी), पुणे (150 किमी) और शिरडी के लिए अग्रिम टोल-सहित फ्लैट कीमतों पर सीधी एक्सप्रेसवे कैब सेवा।',
      mr: 'मुंबईतील छत्रपती शिवाजी महाराज टर्मिनस (CSMT) येथून नाशिक (१७० किमी), पुणे (१५० किमी) आणि शिर्डीसाठी आगाऊ टोल-समाविष्ट फ्लॅट दरात थेट एक्सप्रेसवे कॅब सेवा.',
    },
    features: {
      en: [
        'Direct Mumbai–Nashik (170 km) & Mumbai–Pune (150 km) expressway runs',
        'All state expressway tolls included in fixed flat rates',
        'Premium sedans and spacious family SUVs for long drives',
        'Flexible pickups across South Mumbai terminals & ports',
        '24/7 booking desk for early-morning and overnight arrivals',
      ],
      hi: [
        'मुंबई–नासिक (170 किमी) और मुंबई–पुणे (150 किमी) एक्सप्रेसवे पर सीधा सफर',
        'निश्चित फ्लैट दरों में सभी राज्य एक्सप्रेसवे टोल शामिल',
        'लंबी ड्राइव के लिए प्रीमियम सेडान और विशाल फैमिली एसयूवी',
        'दक्षिण मुंबई टर्मिनलों और पोर्ट्स से लचीली पिकअप सुविधा',
        'सुबह और रात के आगमन के लिए 24/7 बुकिंग डेस्क',
      ],
      mr: [
        'मुंबई–नाशिक (१७० किमी) आणि मुंबई–पुणे (१५० किमी) एक्सप्रेसवेवरून थेट प्रवास',
        'निश्चित फ्लॅट दरांमध्ये सर्व राज्य एक्सप्रेसवे टोल समाविष्ट',
        'लांब पल्ल्याच्या प्रवासासाठी प्रीमियम सेडान व प्रशस्त कौटुंबिक एसयूव्ही',
        'दक्षिण मुंबई टर्मिनल्स व पोर्ट्सवरून लवचिक पिकअप सोय',
        'पहाटेच्या व रात्रीच्या आगमनासाठी २४/७ बुकिंग कक्ष',
      ],
    },
  },

  // ─── 10. THANE JUNCTION ────────────────────────────────────────────────────
  {
    id: 'rail-10',
    slug: 'thane-railway-station-cab',
    category: 'Railway Stations',
    image: '/images/thane-railway.jpg',
    title: {
      en: 'Thane Railway Station Cab',
      hi: 'ठाणे रेलवे स्टेशन कैब सेवा',
      mr: 'ठाणे रेल्वे स्थानक कॅब सेवा',
    },
    tagline: {
      en: 'Direct Central Line Outstation Cabs to Nashik, Pune & Shirdi',
      hi: 'नासिक, पुणे और शिरडी के लिए सीधी सेंट्रल लाइन आउटस्टेशन कैब',
      mr: 'नाशिक, पुणे आणि शिर्डीसाठी थेट सेंट्रल लाईन आउटस्टेशन कॅब',
    },
    description: {
      en: 'Skip local transit changes with direct outstation cab pickups and drops at Thane Railway Station connecting smoothly to Nashik (145 km), Pune (150 km), and Shirdi.',
      hi: 'लोकल ट्रांजिट बदलने की झंझट से बचें—ठाणे रेलवे स्टेशन से नासिक (145 किमी), पुणे (150 किमी) और शिरडी के लिए सीधी आउटस्टेशन कैब पिकअप व ड्रॉप सेवा पाएं।',
      mr: 'लोकल प्रवासातील धावपळ टाळा—ठाणे रेल्वे स्थानकावरून नाशिक (१४५ किमी), पुणे (१५० किमी) आणि शिर्डीसाठी थेट आउटस्टेशन कॅब पिकअप व ड्रॉप सेवा मिळवा.',
    },
    features: {
      en: [
        'Fast expressway connectivity to Nashik (145 km) & Pune (150 km)',
        'Doorstep pickup & drop across Thane & MMR residential zones',
        'Transparent upfront bundle pricing with zero hidden fees',
        'Clean AC sedans, Innova Crysta & multi-seater SUVs',
        'Punctual dispatch synced with outstation train arrivals',
      ],
      hi: [
        'नासिक (145 किमी) और पुणे (150 किमी) के लिए तेज एक्सप्रेसवे संपर्क',
        'ठाणे और एमएमआर आवासीय क्षेत्रों में डोरस्टेप पिकअप व ड्रॉप',
        'बिना किसी छिपे शुल्क के पारदर्शी अग्रिम बंडल कीमतें',
        'स्वच्छ एसी सेडान, इनोवा क्रिस्टा और मल्टी-सीटर एसयूवी',
        'आउटस्टेशन ट्रेन आगमन के अनुसार समय पर कैब डिस्पैच',
      ],
      mr: [
        'नाशिक (१४५ किमी) आणि पुणे (१५० किमी) साठी जलद एक्सप्रेसवे जोडणी',
        'ठाणे व एमएमआर निवासी परिसरात थेट डोरस्टेप पिकअप व ड्रॉप',
        'कोणत्याही छुप्या शुल्काशिवाय पारदर्शक आगाऊ पॅकेज दर',
        'स्वच्छ एसी सेडान, इनोव्हा क्रिस्टा आणि मल्टी-सीटर एसयूव्ही',
        'आउटस्टेशन रेल्वे आगमनानुसार अचूक कॅब नियोजन',
      ],
    },
  },
];
// Railway Service Data

// Airport Data
export const AIRPORT_DATA = [
  // ─── 1. NASHIK AIRPORT (OZAR) ──────────────────────────────────────────────
  {
    id: 'airport-01',
    slug: 'nashik-airport-cab',
    category: 'Airports',
    image:  AIRPORT_IMAGES.nashikAirport,
    title: {
      en: 'Nashik Airport (Ozar) Cab Service',
      hi: 'नासिक एयरपोर्ट (ओज़र) कैब सेवा',
      mr: 'नाशिक विमानतळ (ओझर) कॅब सेवा',
    },
    tagline: {
      en: 'Prompt Local City & Outstation Transfers to Shirdi, Mumbai & Pune',
      hi: 'नासिक शहर, शिरडी, मुंबई और पुणे के लिए त्वरित एयरपोर्ट ट्रांसफर',
      mr: 'नाशिक शहर, शिर्डी, मुंबई आणि पुणेसाठी जलद विमानतळ ट्रान्सफर',
    },
    description: {
      en: 'Enjoy punctual terminal pickups and drops at Nashik Ozar Airport connecting directly to central Nashik (20 km), Trimbakeshwar, Shirdi, Mumbai, and Pune on fixed flat fares.',
      hi: 'नासिक ओज़र एयरपोर्ट से मुख्य नासिक शहर (20 किमी), त्र्यंबकेश्वर, शिरडी, मुंबई और पुणे के लिए निश्चित फ्लैट दरों पर समयबद्ध पिकअप और ड्रॉप सेवा पाएं।',
      mr: 'नाशिक ओझर विमानतळावरून मध्य नाशिक शहर (२० किमी), त्र्यंबकेश्वर, शिर्डी, मुंबई आणि पुणेसाठी निश्चित फ्लॅट दरात वेळेवर पिकअप व ड्रॉप सेवा मिळवा.',
    },
    features: {
      en: [
        'Instant cab placement synced with inbound flight touchdowns',
        'Fixed point-to-point flat fares with zero waiting surcharges',
        'Direct outstation transfers to Trimbakeshwar, Shirdi & Saputara',
        'Clean AC hatchbacks, sedans & spacious family SUVs',
        'Courteous Nashik local drivers with optimal route knowledge',
      ],
      hi: [
        'फ्लाइट लैंडिंग समय के अनुसार टर्मिनल पर तुरंत कैब उपलब्ध',
        'बिना किसी प्रतीक्षा शुल्क के निश्चित पॉइंट-टू-पॉइंट फ्लैट किराया',
        'त्र्यंबकेश्वर, शिरडी और सापुतारा के लिए सीधा आउटस्टेशन ट्रांसफर',
        'स्वच्छ एसी हैचबैक, सेडान और विशाल फैमिली एसयूवी',
        'सर्वोत्तम मार्गों के जानकार विनम्र स्थानीय ड्राइवर',
      ],
      mr: [
        'विमान लँडिंगच्या वेळेनुसार टर्मिनलवर त्वरित कॅब उपलब्ध',
        'कोणत्याही प्रतीक्षा शुल्काशिवाय निश्चित पॉइंट-टू-पॉइंट फ्लॅट दर',
        'त्र्यंबकेश्वर, शिर्डी आणि सापुतारासाठी थेट आउटस्टेशन प्रवास',
        'स्वच्छ एसी हॅचबॅक, सेडान व प्रशस्त कौटुंबिक एसयूव्ही',
        'उत्तम मार्गांची माहिती असलेले नम्र स्थानिक चालक',
      ],
    },
  },

  // ─── 2. SHIRDI INTERNATIONAL AIRPORT ───────────────────────────────────────
  {
    id: 'airport-02',
    slug: 'shirdi-airport-cab',
    category: 'Airports',
    image:  AIRPORT_IMAGES.shirdiAirport,
    title: {
      en: 'Shirdi International Airport Cab Service',
      hi: 'शिरडी अंतर्राष्ट्रीय एयरपोर्ट कैब सेवा',
      mr: 'शिर्डी आंतरराष्ट्रीय विमानतळ कॅब सेवा',
    },
    tagline: {
      en: 'Direct Kakadi Terminal Transfers to Shirdi Temple, Nashik & Pune',
      hi: 'शिरडी मंदिर, नासिक और पुणे के लिए सीधी काकड़ी टर्मिनल कैब सेवा',
      mr: 'शिर्डी मंदिर, नाशिक आणि पुणेसाठी थेट काकडी टर्मिनल कॅब सेवा',
    },
    description: {
      en: 'Seamless airport cab transfers to and from Shirdi International Airport (Kakadi) located 15 km from Sai Baba Temple and 90 km from Nashik, with real-time flight tracking and toll-inclusive rates.',
      hi: 'साई बाबा मंदिर से 15 किमी और नासिक से 90 किमी दूर शिरडी अंतर्राष्ट्रीय एयरपोर्ट (काकड़ी) से लाइव फ्लाइट ट्रैकिंग और टोल-सहित दरों पर सुगम कैब सेवा।',
      mr: 'साईबाबा मंदिरापासून १५ किमी आणि नाशिकपासून ९० किमी अंतरावरील शिर्डी आंतरराष्ट्रीय विमानतळावरून (काकडी) थेट फ्लाइट ट्रॅकिंग आणि टोल-समाविष्ट दरात आरामदायी कॅब सेवा.',
    },
    features: {
      en: [
        'Real-time flight status tracking for zero terminal waiting',
        'Quick 20-minute transfer to Shirdi Sai Baba Temple complex',
        'Transparent toll-inclusive fares to Nashik, Pune & Mumbai',
        'Swift Dzire, Innova Crysta & Tempo Travellers for pilgrim groups',
        'Ample luggage space for family and multi-city tours',
      ],
      hi: [
        'टर्मिनल पर शून्य प्रतीक्षा के लिए लाइव फ्लाइट स्टेटस ट्रैकिंग',
        'शिरडी साई बाबा मंदिर परिसर के लिए मात्र 20 मिनट में ट्रांसफर',
        'नासिक, पुणे और मुंबई के लिए पारदर्शी टोल-सहित किराया',
        'तीर्थयात्री समूहों के लिए डिजायर, इनोवा क्रिस्टा और टेंपो ट्रैवलर',
        'परिवार और मल्टी-सिटी यात्रा के सामान के लिए पर्याप्त जगह',
      ],
      mr: [
        'टर्मिनलवर शून्य प्रतीक्षेसाठी थेट फ्लाइट स्टेटस ट्रॅकिंग',
        'शिर्डी साईबाबा मंदिर परिसरासाठी अवघ्या २० मिनिटांत प्रवास',
        'नाशिक, पुणे आणि मुंबईसाठी पारदर्शक टोल-समाविष्ट दर',
        'भाविक गटांसाठी डिझायर, इनोव्हा क्रिस्टा आणि टेम्पो ट्रॅव्हलर',
        'कुटुंब व मल्टी-सिटी सहलीच्या सामानासाठी प्रशस्त जागा',
      ],
    },
  },

  // ─── 3. PUNE INTERNATIONAL AIRPORT ─────────────────────────────────────────
  {
    id: 'airport-03',
    slug: 'pune-airport-cab',
    category: 'Airports',
    image:  AIRPORT_IMAGES.puneAirport,
    title: {
      en: 'Pune International Airport Cab Service',
      hi: 'पुणे अंतर्राष्ट्रीय एयरपोर्ट कैब सेवा',
      mr: 'पुणे आंतरराष्ट्रीय विमानतळ कॅब सेवा',
    },
    tagline: {
      en: 'Punctual Lohegaon Airport Cabs to Nashik, Shirdi & Mumbai',
      hi: 'नासिक, शिरडी और मुंबई के लिए समयबद्ध लोहेगांव एयरपोर्ट कैब',
      mr: 'नाशिक, शिर्डी आणि मुंबईसाठी वेळेवर लोहगाव विमानतळ कॅब',
    },
    description: {
      en: 'Reliable outstation airport taxis connecting Pune International Airport (Lohegaon) directly with Nashik (210 km), Shirdi (185 km), Ahmednagar, and Mumbai with built-in flight delay buffers.',
      hi: 'पुणे अंतर्राष्ट्रीय एयरपोर्ट (लोहेगांव) को नासिक (210 किमी), शिरडी (185 किमी), अहमदनगर और मुंबई से जोड़ने वाली भरोसेमंद आउटस्टेशन कैब सेवा, फ्लाइट देरी सुरक्षा के साथ।',
      mr: 'पुणे आंतरराष्ट्रीय विमानतळाला (लोहगाव) नाशिक (२१० किमी), शिर्डी (१८५ किमी), अहमदनगर आणि मुंबईशी जोडणारी विश्वासार्ह आउटस्टेशन कॅब सेवा, फ्लाइट विलंब सुविधेसह.',
    },
    features: {
      en: [
        'Chauffeur meet-and-greet right at Pune terminal arrival gates',
        'Built-in flight delay buffer at no extra waiting cost',
        'One-way transparent fares including tolls and driver allowance',
        'Comfortable AC sedans & Innova SUVs for NH-60 highway runs',
        'Corporate GST invoicing and custom family stopovers',
      ],
      hi: [
        'पुणे टर्मिनल अराइवल गेट पर ड्राइवर द्वारा स्वागत और पिकअप',
        'बिना किसी अतिरिक्त शुल्क के फ्लाइट देरी बफर सुविधा',
        'टोल और ड्राइवर भत्ते सहित पारदर्शी वन-वे किराया',
        'NH-60 हाईवे सफर के लिए आरामदायक एसी सेडान और इनोवा एसयूवी',
        'कॉर्पोरेट जीएसटी बिलिंग और कस्टम पारिवारिक पड़ाव सुविधा',
      ],
      mr: [
        'पुणे टर्मिनल अरायव्हल गेटवर चालकाकडून स्वागत व पिकअप',
        'कोणत्याही अतिरिक्त शुल्काशिवाय फ्लाइट विलंब बफर सुविधा',
        'टोल आणि चालक भत्त्यासह पारदर्शक वन-वे दर',
        'NH-60 महामार्ग प्रवासासाठी आरामदायी एसी सेडान व इनोव्हा एसयूव्ही',
        'कॉर्पोरेट इनव्हॉइसिंग आणि ऐच्छिक कौटुंबिक थांब्यांची सोय',
      ],
    },
  },

  // ─── 4. MUMBAI INTERNATIONAL AIRPORT (T1 & T2) ─────────────────────────────
  {
    id: 'airport-04',
    slug: 'mumbai-airport-cab',
    category: 'Airports',
    image:  AIRPORT_IMAGES.mumbaiAirport,
    title: {
      en: 'Mumbai International Airport (T1 & T2) Cab',
      hi: 'मुंबई अंतर्राष्ट्रीय एयरपोर्ट (T1 और T2) कैब सेवा',
      mr: 'मुंबई आंतरराष्ट्रीय विमानतळ (T1 व T2) कॅब सेवा',
    },
    tagline: {
      en: '24/7 Expressway Outstation Transfers to Nashik, Pune & Shirdi',
      hi: 'नासिक, पुणे और शिरडी के लिए 24/7 एक्सप्रेसवे आउटस्टेशन ट्रांसफर',
      mr: 'नाशिक, पुणे आणि शिर्डीसाठी २४/७ एक्सप्रेसवे आउटस्टेशन ट्रान्सफर',
    },
    description: {
      en: 'Stress-free long-distance pickups from Mumbai CSMIA Terminal 1 & Terminal 2 straight via expressways to Nashik (170 km), Pune (150 km), and Shirdi with zero peak-hour surge pricing.',
      hi: 'मुंबई CSMIA टर्मिनल 1 और टर्मिनल 2 से बिना किसी सर्ज प्राइसिंग के सीधे एक्सप्रेसवे द्वारा नासिक (170 किमी), पुणे (150 किमी) और शिरडी के लिए आरामदायक कैब सेवा।',
      mr: 'मुंबई CSMIA टर्मिनल १ व टर्मिनल २ येथून कोणत्याही सर्ज प्राइसिंगशिवाय थेट एक्सप्रेसवेद्वारे नाशिक (१७० किमी), पुणे (१५० किमी) आणि शिर्डीसाठी आरामदायी कॅब सेवा.',
    },
    features: {
      en: [
        '24/7 pickups for late-night and early-morning international flights',
        'Direct Mumbai–Nashik (170 km) & Mumbai–Pune (150 km) expressway runs',
        'Fixed flat rates eliminating app surge-pricing traps',
        'All-India Tourist Permit Innova Crysta & Ertiga SUVs',
        'All state expressway tolls and entry permits included upfront',
      ],
      hi: [
        'देर रात और सुबह की अंतर्राष्ट्रीय फ्लाइट्स के लिए 24/7 पिकअप',
        'मुंबई–नासिक (170 किमी) और मुंबई–पुणे (150 किमी) एक्सप्रेसवे पर सीधा सफर',
        'सर्ज प्राइसिंग से मुक्त निश्चित फ्लैट किराया दरें',
        'ऑल-इंडिया टूरिस्ट परमिट वाली इनोवा क्रिस्टा और अर्टिगा एसयूवी',
        'अग्रिम पैकेज में सभी एक्सप्रेसवे टोल और एंट्री परमिट शामिल',
      ],
      mr: [
        'रात्री उशिरा व पहाटेच्या आंतरराष्ट्रीय विमानांसाठी २४/७ पिकअप',
        'मुंबई–नाशिक (१७० किमी) आणि मुंबई–पुणे (१५० किमी) एक्सप्रेसवेवरून थेट प्रवास',
        'अॅप सर्ज-प्रायसिंगमुक्त निश्चित फ्लॅट दर',
        'ऑल-इंडिया टूरिस्ट परमिट असलेली इनोव्हा क्रिस्टा व अर्टिगा वाहने',
        'आगाऊ पॅकेजमध्ये सर्व राज्य एक्सप्रेसवे टोल व परमिट शुल्क समाविष्ट',
      ],
    },
  },

  // ─── 5. CHHATRAPATI SAMBHAJINAGAR AIRPORT ───────────────────────────────────
  {
    id: 'airport-05',
    slug: 'chhatrapati-sambhajinagar-airport-cab',
    category: 'Airports',
    image:  AIRPORT_IMAGES.sambhajinagarAirport,
    title: {
      en: 'Chhatrapati Sambhajinagar Airport Cab',
      hi: 'छत्रपति संभाजीनगर एयरपोर्ट कैब सेवा',
      mr: 'छत्रपती संभाजीनगर विमानतळ कॅब सेवा',
    },
    tagline: {
      en: 'Fast Samruddhi Mahamarg Cabs to Shirdi, Nashik, Jalna & Ajanta-Ellora',
      hi: 'शिरडी, नासिक, जालना और अजंता-एलोरा के लिए तेज समृद्धि महामार्ग कैब',
      mr: 'शिर्डी, नाशिक, जालना आणि अजिंठा-वेरूळसाठी जलद समृद्धी महामार्ग कॅब',
    },
    description: {
      en: 'Daily inter-city airport taxis from Chhatrapati Sambhajinagar Airport connecting smoothly to Jalna (60 km), Shirdi (110 km), and Nashik (180 km) via the Samruddhi Mahamarg corridor.',
      hi: 'छत्रपति संभाजीनगर एयरपोर्ट से समृद्धि महामार्ग द्वारा जालना (60 किमी), शिरडी (110 किमी) और नासिक (180 किमी) के लिए दैनिक इंटर-सिटी एयरपोर्ट कैब सेवा।',
      mr: 'छत्रपती संभाजीनगर विमानतळावरून समृद्धी महामार्गाद्वारे जालना (६० किमी), शिर्डी (११० किमी) आणि नाशिक (१८० किमी) साठी दररोज इंटर-सिटी विमानतळ कॅब सेवा.',
    },
    features: {
      en: [
        'Rapid highway transit via Samruddhi Mahamarg to Shirdi & Nashik',
        'Optional heritage sightseeing stops at Ajanta & Ellora Caves',
        'Upfront bundle fares with zero hidden highway surcharges',
        'Clean AC sedans, Ertiga & Innova Crysta fleet options',
        'Experienced regional drivers with punctual terminal pickups',
      ],
      hi: [
        'समृद्धि महामार्ग द्वारा शिरडी और नासिक के लिए तेज हाईवे सफर',
        'अजंता और एलोरा की गुफाओं के वैकल्पिक दर्शन पड़ाव की सुविधा',
        'बिना किसी छिपे शुल्क के अग्रिम पारदर्शी पैकेज दरें',
        'स्वच्छ एसी सेडान, अर्टिगा और इनोवा क्रिस्टा के विकल्प',
        'समय पर टर्मिनल पिकअप कराने वाले अनुभवी क्षेत्रीय ड्राइवर',
      ],
      mr: [
        'समृद्धी महामार्गाद्वारे शिर्डी आणि नाशिकसाठी जलद महामार्ग प्रवास',
        'अजिंठा व वेरूळ लेण्यांच्या ऐच्छिक पर्यटन थांब्याची सोय',
        'कोणत्याही छुप्या शुल्काशिवाय आगाऊ पारदर्शक पॅकेज दर',
        'स्वच्छ एसी सेडान, अर्टिगा व इनोव्हा क्रिस्टा वाहनांचे पर्याय',
        'वेळेवर टर्मिनल पिकअप करणारे अनुभवी प्रादेशिक चालक',
      ],
    },
  },

  // ─── 6. NAGPUR AIRPORT ─────────────────────────────────────────────────────
  {
    id: 'airport-06',
    slug: 'nagpur-airport-cab',
    category: 'Airports',
    image:  AIRPORT_IMAGES.nagpurAirport,
    title: {
      en: 'Nagpur Dr. Babasaheb Ambedkar Airport Cab',
      hi: 'नागपुर डॉ. बाबासाहेब अंबेडकर एयरपोर्ट कैब सेवा',
      mr: 'नागपूर डॉ. बाबासाहेब आंबेडकर विमानतळ कॅब सेवा',
    },
    tagline: {
      en: 'Samruddhi Expressway Transfers to Sambhajinagar, Shirdi & Nashik',
      hi: 'संभाजीनगर, शिरडी और नासिक के लिए समृद्धि एक्सप्रेसवे ट्रांसफर',
      mr: 'संभाजीनगर, शिर्डी आणि नाशिकसाठी समृद्धी एक्सप्रेसवे ट्रान्सफर',
    },
    description: {
      en: 'Long-distance expressway cab services from Nagpur International Airport directly across the Samruddhi Mahamarg to Chhatrapati Sambhajinagar, Shirdi (470 km), and Nashik (540 km).',
      hi: 'नागपुर अंतर्राष्ट्रीय एयरपोर्ट से सीधे समृद्धि महामार्ग द्वारा छत्रपति संभाजीनगर, शिरडी (470 किमी) और नासिक (540 किमी) के लिए लंबी दूरी की एक्सप्रेसवे कैब सेवा।',
      mr: 'नागपूर आंतरराष्ट्रीय विमानतळावरून थेट समृद्धी महामार्गाद्वारे छत्रपती संभाजीनगर, शिर्डी (४७० किमी) आणि नाशिक (५४० किमी) साठी लांब पल्ल्याची एक्सप्रेसवे कॅब सेवा.',
    },
    features: {
      en: [
        'High-speed expressway cruising via Samruddhi Mahamarg',
        'All expressway tolls included upfront in fixed package quotes',
        'Top-tier Innova Crysta & luxury SUVs for long-haul comfort',
        'Certified long-distance drivers for safe, steady transit',
        'Multi-day corporate and return trip scheduling available',
      ],
      hi: [
        'समृद्धि महामार्ग द्वारा तेज और सुगम एक्सप्रेसवे यात्रा',
        'निश्चित पैकेज कोटेशन में सभी एक्सप्रेसवे टोल अग्रिम शामिल',
        'लंबी दूरी के आराम के लिए प्रीमियम इनोवा क्रिस्टा और लग्जरी एसयूवी',
        'सुरक्षित और संतुलित ड्राइविंग के लिए प्रमाणित हाईवे ड्राइवर',
        'मल्टी-डे कॉर्पोरेट और वापसी यात्रा शेड्यूलिंग की सुविधा',
      ],
      mr: [
        'समृद्धी महामार्गाद्वारे जलद आणि आरामदायी एक्सप्रेसवे प्रवास',
        'निश्चित पॅकेज दरांमध्ये सर्व एक्सप्रेसवे टोल आगाऊ समाविष्ट',
        'लांब पल्ल्याच्या आरामासाठी प्रीमियम इनोव्हा क्रिस्टा व लक्झरी एसयूव्ही',
        'सुरक्षित व स्थिर प्रवासासाठी प्रमाणित महामार्ग चालक',
        'मल्टी-डे कॉर्पोरेट व परतीच्या प्रवासाचे नियोजन उपलब्ध',
      ],
    },
  },

  // ─── 7. KOLHAPUR AIRPORT ───────────────────────────────────────────────────
  {
    id: 'airport-07',
    slug: 'kolhapur-airport-cab',
    category: 'Airports',
    image:  AIRPORT_IMAGES.kolhapurAirport,
    title: {
      en: 'Kolhapur Chhatrapati Rajaram Maharaj Airport Cab',
      hi: 'कोल्हापुर छत्रपति राजाराम महाराज एयरपोर्ट कैब सेवा',
      mr: 'कोल्हापूर छत्रपती राजाराम महाराज विमानतळ कॅब सेवा',
    },
    tagline: {
      en: 'Cross-Regional Outstation Cabs to Pune, Satara, Shirdi & Nashik',
      hi: 'पुणे, सतारा, शिरडी और नासिक के लिए अंतर-क्षेत्रीय आउटस्टेशन कैब',
      mr: 'पुणे, सातारा, शिर्डी आणि नाशिकसाठी आंतर-प्रादेशिक आउटस्टेशन कॅब',
    },
    description: {
      en: 'Comfortable cross-regional airport cab transfers from Kolhapur Airport connecting directly to Pune (230 km), Satara, Ahmednagar, and Nashik (440 km) without multi-hop transit changes.',
      hi: 'बिना किसी यात्रा बदलाव के कोल्हापुर एयरपोर्ट से सीधे पुणे (230 किमी), सतारा, अहमदनगर और नासिक (440 किमी) के लिए आरामदायक अंतर-क्षेत्रीय आउटस्टेशन कैब सेवा।',
      mr: 'कोणत्याही प्रवास बदलाशिवाय कोल्हापूर विमानतळावरून थेट पुणे (२३० किमी), सातारा, अहमदनगर आणि नाशिक (४४० किमी) साठी आरामदायी आंतर-प्रादेशिक कॅब सेवा.',
    },
    features: {
      en: [
        'Direct North–South Maharashtra connectivity to Pune & Nashik',
        'Optional Mahalaxmi Temple darshan stopover on request',
        'Transparent flat-rate highway packages with zero hidden fees',
        'Clean AC sedans and multi-row family SUVs for long drives',
        'Punctual flight-synced pickups by experienced highway drivers',
      ],
      hi: [
        'पुणे और नासिक के लिए सीधा उत्तर–दक्षिण महाराष्ट्र संपर्क',
        'अनुरोध पर महालक्ष्मी मंदिर दर्शन पड़ाव जोड़ने की सुविधा',
        'बिना किसी छिपे शुल्क के पारदर्शी फ्लैट-रेट हाईवे पैकेज',
        'लंबी यात्रा के लिए स्वच्छ एसी सेडान और मल्टी-रो फैमिली एसयूवी',
        'अनुभवी हाईवे ड्राइवरों द्वारा फ्लाइट समय के अनुसार समयबद्ध पिकअप',
      ],
      mr: [
        'पुणे आणि नाशिकसाठी थेट उत्तर–दक्षिण महाराष्ट्र जोडणी',
        'विनंतीनुसार महालक्ष्मी मंदिर दर्शनाचा थांबा जोडण्याची सोय',
        'कोणत्याही छुप्या शुल्काशिवाय पारदर्शक फ्लॅट-रेट महामार्ग पॅकेजेस',
        'दीर्घ प्रवासासाठी स्वच्छ एसी सेडान व प्रशस्त कौटुंबिक एसयूव्ही',
        'अनुभवी महामार्ग चालकांद्वारे विमान वेळेनुसार अचूक पिकअप',
      ],
    },
  },
];
// Airport Data

// City Data
export const CITY_DATA = [
  // ─── 1. SHANI SHINGNAPUR ───────────────────────────────────────────────────
  {
    id: 'city-01',
    slug: 'shani-shingnapur-car-rental',
    category: 'Cities',
    popularCity: true,
    popularCityTitle: 'Shani Shingnapur',
    image: '/images/shani-shingnapur.jpg',
    title: {
      en: 'Shani Shingnapur Cab Service',
      hi: 'शनि शिंगणापुर कैब सेवा',
      mr: 'शनि शिंगणापूर कॅब सेवा',
    },
    tagline: {
      en: 'One-Way & Roundtrip Pilgrimage Cabs from Nashik (70 km)',
      hi: 'नासिक से शनि शिंगणापुर (70 किमी) के लिए वन-वे व राउंडट्रिप कैब',
      mr: 'नाशिकहून शनि शिंगणापूर (७० किमी) साठी वन-वे व राउंडट्रिप कॅब',
    },
    description: {
      en: 'Budget-friendly one-way and roundtrip cab rentals from Nashik to Lord Shaneshwara Temple in Shani Shingnapur (approx. 150 km roundtrip) with Swift Dzire, Innova, and Tempo Traveller options.',
      hi: 'नासिक से शनि शिंगणापुर स्थित भगवान शनेश्वर मंदिर के लिए स्विफ्ट डिजायर, इनोवा और टेंपो ट्रैवलर विकल्पों के साथ किफायती वन-वे और राउंडट्रिप कैब सेवा।',
      mr: 'नाशिकहून शनि शिंगणापूर येथील भगवान शनेश्वर मंदिरासाठी स्विफ्ट डिझायर, इनोव्हा आणि टेम्पो ट्रॅव्हलर पर्यायांसह किफायतशीर वन-वे व राउंडट्रिप कॅब सेवा.',
    },
    features: {
      en: [
        'Affordable roundtrip & one-way packages starting from ₹1,300',
        'Optional stopovers at Mula Dam & Goddess Laxmi Temple',
        'Clean AC Swift Dzire, Innova & group Tempo Travellers',
        'Special Saturday & Shani Trayodashi darshan trip scheduling',
        '24/7 customer support with courteous, punctual drivers',
      ],
      hi: [
        '₹1,300 से शुरू होने वाले किफायती राउंडट्रिप और वन-वे पैकेज',
        'मुला डैम और देवी लक्ष्मी मंदिर पर वैकल्पिक दर्शन पड़ाव',
        'स्वच्छ एसी स्विफ्ट डिजायर, इनोवा और ग्रुप टेंपो ट्रैवलर',
        'शनिवार और शनि त्रयोदशी दर्शन के लिए विशेष यात्रा शेड्यूलिंग',
        'विनम्र व समयबद्ध ड्राइवरों के साथ 24/7 ग्राहक सहायता',
      ],
      mr: [
        '₹१,३०० पासून सुरू होणारे किफायतशीर राउंडट्रिप व वन-वे पॅकेजेस',
        'मुळा धरण आणि देवी लक्ष्मी मंदिरावर ऐच्छिक दर्शन थांबे',
        'स्वच्छ एसी स्विफ्ट डिझायर, इनोव्हा व ग्रुप टेम्पो ट्रॅव्हलर',
        'शनिवार व शनि त्रयोदशी दर्शनासाठी विशेष सहल नियोजन',
        'नम्र व वेळेवर येणाऱ्या चालकांसह २४/७ ग्राहक सहाय्य',
      ],
    },
  },

  // ─── 2. TRIMBAKESHWAR ──────────────────────────────────────────────────────
  {
    id: 'city-02',
    slug: 'trimbakeshwar-darshan-cab',
    category: 'Cities',
    popularCity: true,
    popularCityTitle: 'Trimbakeshwar',
    image: '/images/nashik-trimbakeshwar.jpg',
    title: {
      en: 'Trimbakeshwar Jyotirlinga Darshan Cab',
      hi: 'त्र्यंबकेश्वर ज्योतिर्लिंग दर्शन कैब सेवा',
      mr: 'त्र्यंबकेश्वर ज्योतिर्लिंग दर्शन कॅब सेवा',
    },
    tagline: {
      en: 'Comfortable Family & Group Darshan Cabs from Nashik (38 km)',
      hi: 'नासिक से त्र्यंबकेश्वर (38 किमी) परिवार व ग्रुप दर्शन कैब',
      mr: 'नाशिकहून त्र्यंबकेश्वर (३८ किमी) कौटुंबिक व ग्रुप दर्शन कॅब',
    },
    description: {
      en: 'Visit one of the twelve sacred Jyotirlingas in comfort with our Trimbakeshwar Darshan cab packages from Nashik, tailored for families, senior citizens, and pilgrimage groups.',
      hi: 'नासिक से बारह पवित्र ज्योतिर्लिंगों में से एक त्र्यंबकेश्वर के दर्शन हेतु परिवारों, वरिष्ठ नागरिकों और तीर्थयात्री समूहों के लिए आरामदायक कैब पैकेज।',
      mr: 'नाशिकहून बारा पवित्र ज्योतिर्लिंगांपैकी एक असलेल्या त्र्यंबकेश्वरच्या दर्शनासाठी कुटुंबे, ज्येष्ठ नागरिक आणि भाविक गटांसाठी आरामदायी कॅब पॅकेजेस.',
    },
    features: {
      en: [
        'Doorstep pickup & drop from Nashik homes, hotels & stations',
        'Flexible waiting duration for temple darshan & pooja rituals',
        'Swift Dzire, Innova Crysta & Tempo Travellers for all group sizes',
        'Optional add-on sightseeing at Anjaneri, Brahmagiri & Panchavati',
        'Transparent fares starting from ₹2,000 with polite drivers',
      ],
      hi: [
        'नासिक के घरों, होटलों और स्टेशनों से सीधी डोरस्टेप पिकअप व ड्रॉप',
        'मंदिर दर्शन और पूजा अनुष्ठानों के लिए लचीला प्रतीक्षा समय',
        'हर समूह के लिए स्विफ्ट डिजायर, इनोवा क्रिस्टा और टेंपो ट्रैवलर',
        'अंजनेरी, ब्रह्मगिरी और पंचवटी भ्रमण जोड़ने की वैकल्पिक सुविधा',
        'विनम्र ड्राइवरों के साथ ₹2,000 से शुरू होने वाला पारदर्शी किराया',
      ],
      mr: [
        'नाशिकमधील घरे, हॉटेल्स व स्थानकांवरून थेट पिकअप व ड्रॉप',
        'मंदिर दर्शन व पूजा विधींसाठी लवचिक प्रतीक्षा कालावधी',
        'प्रत्येक गटासाठी स्विफ्ट डिझायर, इनोव्हा क्रिस्टा व टेम्पो ट्रॅव्हलर',
        'अंजनेरी, ब्रह्मगिरी आणि पंचवटी दर्शनाचा ऐच्छिक पर्याय',
        'नम्र चालकांसह ₹२,००० पासून सुरू होणारे पारदर्शक दर',
      ],
    },
  },

  // ─── 3. KOPARGAON TO NASHIK ────────────────────────────────────────────────
  {
    id: 'city-03',
    slug: 'kopargaon-cab',
    category: 'Cities',
    popularCity: false,
    popularCityTitle: 'Kopargaon',
    image: '/images/kopargaon-shirdi-cab.jpg',
    title: {
      en: 'Kopargaon to Nashik & Shirdi Cab Service',
      hi: 'कोपरगांव से नासिक व शिरडी कैब सेवा',
      mr: 'कोपरगाव ते नाशिक व शिर्डी कॅब सेवा',
    },
    tagline: {
      en: 'Fast One-Way & Roundtrip Transfers via Kopargaon Hub',
      hi: 'कोपरगांव जंक्शन से तेज वन-वे और राउंडट्रिप कैब ट्रांसफर',
      mr: 'कोपरगाव येथून जलद वन-वे आणि राउंडट्रिप कॅब ट्रान्सफर',
    },
    description: {
      en: 'Smooth and fast intercity cab rentals between Kopargaon, Shirdi (18 km), and Nashik with well-maintained AC vehicles and experienced regional highway drivers.',
      hi: 'सुव्यवस्थित एसी वाहनों और अनुभवी क्षेत्रीय हाईवे ड्राइवरों के साथ कोपरगांव, शिरडी (18 किमी) और नासिक के बीच तेज और सुगम इंटरसिटी कैब सेवा।',
      mr: 'सुस्थितीतील एसी वाहने आणि अनुभवी प्रादेशिक महामार्ग चालकांसह कोपरगाव, शिर्डी (१८ किमी) आणि नाशिक दरम्यान जलद व सुरळीत इंटरसिटी कॅब सेवा.',
    },
    features: {
      en: [
        'Quick 25-minute transfers between Kopargaon and Shirdi',
        'Direct highway connections to Nashik city & railway station',
        'One-way and roundtrip options for solo & family travellers',
        'Fleet includes Swift Dzire, Innova & group Tempo Travellers',
        'Instant online and WhatsApp booking confirmation',
      ],
      hi: [
        'कोपरगांव और शिरडी के बीच मात्र 25 मिनट में त्वरित ट्रांसफर',
        'नासिक शहर और रेलवे स्टेशन के लिए सीधा हाईवे संपर्क',
        'सोलो और पारिवारिक यात्रियों के लिए वन-वे व राउंडट्रिप विकल्प',
        'स्विफ्ट डिजायर, इनोवा और ग्रुप टेंपो ट्रैवलर का बेड़ा उपलब्ध',
        'तुरंत ऑनलाइन और व्हाट्सएप बुकिंग कन्फर्मेशन',
      ],
      mr: [
        'कोपरगाव आणि शिर्डी दरम्यान अवघ्या २५ मिनिटांत जलद प्रवास',
        'नाशिक शहर आणि रेल्वे स्थानकासाठी थेट महामार्ग जोडणी',
        'एकट्या व कौटुंबिक प्रवाशांसाठी वन-वे व राउंडट्रिप पर्याय',
        'स्विफ्ट डिझायर, इनोव्हा व ग्रुप टेम्पो ट्रॅव्हलर वाहने उपलब्ध',
        'त्वरित ऑनलाइन आणि व्हॉट्सॲप बुकिंग निश्चिती',
      ],
    },
  },

  // ─── 4. MANMAD ─────────────────────────────────────────────────────────────
  {
    id: 'city-04',
    slug: 'manmad-cab-service',
    category: 'Cities',
    popularCity: false,
    popularCityTitle: 'Manmad',
    image: '/images/nashik-manmad.jpg',
    title: {
      en: 'Nashik to Manmad Cab Service',
      hi: 'नासिक से मनमाड कैब सेवा',
      mr: 'नाशिक ते मनमाड कॅब सेवा',
    },
    tagline: {
      en: '2-Hour Direct Highway Cabs to Manmad City & Junction (90 km)',
      hi: 'मनमाड शहर व जंक्शन (90 किमी) के लिए 2 घंटे की सीधी हाईवे कैब',
      mr: 'मनमाड शहर व जंक्शन (९० किमी) साठी २ तासांची थेट महामार्ग कॅब',
    },
    description: {
      en: 'Reliable 24/7 outstation cabs covering the 90 km route between Nashik and Manmad in about 2 hours, ideal for railway junction connections, family visits, and corporate travel.',
      hi: 'नासिक और मनमाड के बीच 90 किमी की दूरी लगभग 2 घंटे में तय करने वाली 24/7 आउटस्टेशन कैब सेवा, जो रेलवे जंक्शन और पारिवारिक यात्रा के लिए उत्तम है।',
      mr: 'नाशिक आणि मनमाड दरम्यानचे ९० किमी अंतर सुमारे २ तासांत पार करणारी २४/७ आउटस्टेशन कॅब सेवा, रेल्वे जंक्शन व कौटुंबिक प्रवासासाठी उपयुक्त.',
    },
    features: {
      en: [
        'Punctual 2-hour highway transit across the 90 km corridor',
        '24/7 pickup and drop for early-morning and late-night trains',
        'Competitive outstation fares starting from ₹1,800',
        'Spacious sedans, SUVs & Tempo Travellers for heavy luggage',
        'Experienced drivers thoroughly familiar with Nashik–Manmad route',
      ],
      hi: [
        '90 किमी के मार्ग पर समयबद्ध 2 घंटे की सीधी हाईवे यात्रा',
        'सुबह और देर रात की ट्रेनों के लिए 24/7 पिकअप व ड्रॉप',
        '₹1,800 से शुरू होने वाला किफायती आउटस्टेशन किराया',
        'अधिक सामान के लिए विशाल सेडान, एसयूवी और टेंपो ट्रैवलर',
        'नासिक–मनमाड मार्ग से भली-भांति परिचित अनुभवी ड्राइवर',
      ],
      mr: [
        '९० किमी मार्गावर वेळेवर २ तासांचा थेट महामार्ग प्रवास',
        'पहाटेच्या व रात्री उशिराच्या रेल्वेंसाठी २४/७ पिकअप व ड्रॉप',
        '₹१,८०० पासून सुरू होणारे किफायतशीर आउटस्टेशन दर',
        'जास्त सामानासाठी प्रशस्त सेडान, एसयूव्ही व टेम्पो ट्रॅव्हलर',
        'नाशिक–मनमाड मार्गाची पूर्ण माहिती असलेले अनुभवी चालक',
      ],
    },
  },

  // ─── 5. BHIMASHANKAR ───────────────────────────────────────────────────────
  {
    id: 'city-05',
    slug: 'bhimashankar-darshan-cab',
    category: 'Cities',
    popularCity: true,
    popularCityTitle: 'Bhimashankar',
    image: '/images/nashik-bhimashankar.jpg',
    title: {
      en: 'Bhimashankar Jyotirlinga Darshan Cab',
      hi: 'भीमाशंकर ज्योतिर्लिंग दर्शन कैब सेवा',
      mr: 'भीमाशंकर ज्योतिर्लिंग दर्शन कॅब सेवा',
    },
    tagline: {
      en: 'Scenic Sahyadri Ghat Pilgrimage Cabs with Expert Hill Drivers',
      hi: 'अनुभवी घाट ड्राइवरों के साथ सह्याद्री पहाड़ियों में भीमाशंकर दर्शन कैब',
      mr: 'अनुभवी घाट चालकांसह सह्याद्री पर्वतरांगेत भीमाशंकर दर्शन कॅब',
    },
    description: {
      en: 'Travel safely through the scenic Sahyadri hills to Bhimashankar Jyotirlinga Temple with expert hill-route drivers, well-maintained AC vehicles, and optional Pune combo packages.',
      hi: 'अनुभवी घाट ड्राइवरों, सुव्यवस्थित एसी वाहनों और वैकल्पिक पुणे कॉम्बो पैकेज के साथ सह्याद्री की सुंदर पहाड़ियों में स्थित भीमाशंकर ज्योतिर्लिंग मंदिर की सुरक्षित यात्रा करें।',
      mr: 'अनुभवी घाट चालक, सुस्थितीतील एसी वाहने आणि ऐच्छिक पुणे कॉम्बो पॅकेजसह सह्याद्रीच्या निसर्गरम्य डोंगररांगांतील भीमाशंकर ज्योतिर्लिंग मंदिराचा सुरक्षित प्रवास करा.',
    },
    features: {
      en: [
        'Experienced mountain & ghat drivers for safe Sahyadri travel',
        'Customizable Jyotirlinga darshan & Pune combo packages',
        'Transparent outstation fares starting from ₹3,500',
        'Comfortable Swift Dzire, Innova Crysta & Tempo Travellers',
        'Flexible darshan waiting time and doorstep pickup',
      ],
      hi: [
        'सह्याद्री के सुरक्षित सफर के लिए अनुभवी पहाड़ी व घाट ड्राइवर',
        'कस्टमाइज़ेबल ज्योतिर्लिंग दर्शन और पुणे कॉम्बो पैकेज',
        '₹3,500 से शुरू होने वाला पारदर्शी आउटस्टेशन किराया',
        'आरामदायक स्विफ्ट डिजायर, इनोवा क्रिस्टा और टेंपो ट्रैवलर',
        'दर्शन के लिए लचीला प्रतीक्षा समय और डोरस्टेप पिकअप',
      ],
      mr: [
        'सह्याद्रीतील सुरक्षित प्रवासासाठी अनुभवी डोंगरी व घाट चालक',
        'कस्टमायझेबल ज्योतिर्लिंग दर्शन आणि पुणे कॉम्बो पॅकेजेस',
        '₹३,५०० पासून सुरू होणारे पारदर्शक आउटस्टेशन दर',
        'आरामदायी स्विफ्ट डिझायर, इनोव्हा क्रिस्टा व टेम्पो ट्रॅव्हलर',
        'दर्शनासाठी लवचिक प्रतीक्षा वेळ आणि थेट घरपोच पिकअप',
      ],
    },
  },

  // ─── 6. AHMEDNAGAR ─────────────────────────────────────────────────────────
  {
    id: 'city-06',
    slug: 'ahmednagar-cab-service',
    category: 'Cities',
    popularCity: false,
    popularCityTitle: 'Ahmednagar',
    image: '/images/nashik-ahmednagar.jpg',
    title: {
      en: 'Nashik to Ahmednagar Cab Service',
      hi: 'नासिक से अहमदनगर कैब सेवा',
      mr: 'नाशिक ते अहमदनगर कॅब सेवा',
    },
    tagline: {
      en: 'Affordable One-Way & Roundtrip Cabs Across the 120 km Corridor',
      hi: '120 किमी मार्ग पर किफायती वन-वे और राउंडट्रिप कैब सेवा',
      mr: '१२० किमी मार्गावर किफायतशीर वन-वे आणि राउंडट्रिप कॅब सेवा',
    },
    description: {
      en: 'Budget-friendly intercity cab service connecting Nashik and Ahmednagar (approx. 120 km) for business trips, family visits, and regional temple tours with lowest fixed fares.',
      hi: 'व्यापारिक यात्राओं, पारिवारिक भेंट और क्षेत्रीय मंदिर भ्रमण के लिए नासिक और अहमदनगर (लगभग 120 किमी) को जोड़ने वाली सबसे किफायती इंटरसिटी कैब सेवा।',
      mr: 'व्यावसायिक प्रवास, कौटुंबिक भेटी आणि प्रादेशिक मंदिर सहलींसाठी नाशिक व अहमदनगर (सुमारे १२० किमी) दरम्यान सर्वात किफायतशीर इंटरसिटी कॅब सेवा.',
    },
    features: {
      en: [
        'Lowest budget-friendly fares starting from ₹1,200',
        'Direct 120 km highway connectivity from Nashik to Ahmednagar',
        'Option to combine Shirdi or Shani Shingnapur en route',
        'Clean AC sedans, SUVs & Tempo Travellers on rent',
        'Punctual doorstep pickup with transparent billing',
      ],
      hi: [
        '₹1,200 से शुरू होने वाला सबसे किफायती बजट किराया',
        'नासिक से अहमदनगर तक 120 किमी का सीधा हाईवे संपर्क',
        'रास्ते में शिरडी या शनि शिंगणापुर दर्शन जोड़ने का विकल्प',
        'किराए पर स्वच्छ एसी सेडान, एसयूवी और टेंपो ट्रैवलर',
        'पारदर्शी बिलिंग के साथ समय पर डोरस्टेप पिकअप',
      ],
      mr: [
        '₹१,२०० पासून सुरू होणारे सर्वात किफायतशीर बजेट दर',
        'नाशिक ते अहमदनगर दरम्यान १२० किमीची थेट महामार्ग जोडणी',
        'मार्गात शिर्डी किंवा शनि शिंगणापूर दर्शन जोडण्याचा पर्याय',
        'भाड्याने स्वच्छ एसी सेडान, एसयूव्ही व टेम्पो ट्रॅव्हलर उपलब्ध',
        'पारदर्शक बिलिंगसह वेळेवर डोरस्टेप पिकअप',
      ],
    },
  },

  // ─── 7. CHHATRAPATI SAMBHAJINAGAR (AJANTA ELLORA) ──────────────────────────
  {
    id: 'city-07',
    slug: 'chhatrapati-sambhajinagar-ajanta-ellora-cab',
    category: 'Cities',
    popularCity: false,
    popularCityTitle: 'Chhatrapati Sambhajinagar',
    image: '/images/nashik-aurangabad.jpg',
    title: {
      en: 'Chhatrapati Sambhajinagar & Heritage Caves Cab',
      hi: 'छत्रपति संभाजीनगर एवं हेरिटेज गुफा कैब सेवा',
      mr: 'छत्रपती संभाजीनगर आणि लेणी पर्यटन कॅब सेवा',
    },
    tagline: {
      en: '1-Day & 2-Day Outstation Tours to Ajanta, Ellora & Bibi Ka Maqbara',
      hi: 'अजंता, एलोरा और बीबी का मकबरा के लिए 1 और 2 दिवसीय टूर कैब',
      mr: 'अजिंठा, वेरूळ आणि बीबी का मकबरासाठी १ व २ दिवसांची टूर कॅब',
    },
    description: {
      en: 'Explore UNESCO World Heritage monuments in Chhatrapati Sambhajinagar including Ajanta Caves, Ellora Caves, and Bibi Ka Maqbara with full-day and 2-day outstation cab packages.',
      hi: 'फुल-डे और 2-दिवसीय आउटस्टेशन कैब पैकेज के साथ छत्रपति संभाजीनगर में अजंता की गुफाओं, एलोरा की गुफाओं और बीबी का मकबरा जैसे विश्व धरोहर स्थलों की सैर करें।',
      mr: 'फुल-डे आणि २ दिवसांच्या आउटस्टेशन कॅब पॅकेजसह छत्रपती संभाजीनगरमधील अजिंठा लेणी, वेरूळ लेणी आणि बीबी का मकबरा या जागतिक वारसा स्थळांची सफर करा.',
    },
    features: {
      en: [
        'Ideal for 1-day or 2-day weekend heritage road trips',
        'Covers Ajanta, Ellora, Bibi Ka Maqbara & Daulatabad Fort',
        'Transparent outstation fares starting from ₹2,500',
        'Experienced drivers well-versed with Marathwada routes',
        'Station, airport & hotel pickup-drop coordination included',
      ],
      hi: [
        '1-दिवसीय या 2-दिवसीय वीकेंड हेरिटेज रोड ट्रिप के लिए उत्तम',
        'अजंता, एलोरा, बीबी का मकबरा और दौलताबाद किला शामिल',
        '₹2,500 से शुरू होने वाला पारदर्शी आउटस्टेशन किराया',
        'मराठवाड़ा मार्गों से भली-भांति परिचित अनुभवी ड्राइवर',
        'स्टेशन, एयरपोर्ट और होटल पिकअप-ड्रॉप समन्वय शामिल',
      ],
      mr: [
        '१ दिवसीय किंवा २ दिवसांच्या वीकेंड हेरिटेज सहलीसाठी उत्तम',
        'अजिंठा, वेरूळ, बीबी का मकबरा आणि दौलताबाद किल्ला समाविष्ट',
        '₹२,५०० पासून सुरू होणारे पारदर्शक आउटस्टेशन दर',
        'मराठवाडा मार्गांची पूर्ण माहिती असलेले अनुभवी चालक',
        'स्थानक, विमानतळ व हॉटेल पिकअप-ड्रॉप नियोजन समाविष्ट',
      ],
    },
  },

  // ─── 8. VERUL (ELLORA) ─────────────────────────────────────────────────────
  {
    id: 'city-08',
    slug: 'verul-car-rental-cab',
    category: 'Cities',
    popularCity: true,
    popularCityTitle: 'Verul',
    image: '/images/nashik-verul.jpg',
    title: {
      en: 'Verul (Ellora) Caves & Grishneshwar Cab',
      hi: 'वेरुल (एलोरा) गुफाएं और घृष्णेश्वर दर्शन कैब',
      mr: 'वेरूळ लेणी आणि घृष्णेश्वर दर्शन कॅब सेवा',
    },
    tagline: {
      en: 'Dedicated Day-Trip Car Rentals to Verul Caves & Jyotirlinga',
      hi: 'वेरुल की गुफाओं और घृष्णेश्वर ज्योतिर्लिंग के लिए डे-ट्रिप कैब',
      mr: 'वेरूळ लेणी आणि घृष्णेश्वर ज्योतिर्लिंगासाठी डे-ट्रिप कॅब',
    },
    description: {
      en: 'Enjoy specialized day-trip car rentals to Verul (Ellora Caves) and Shri Grishneshwar Jyotirlinga Temple with transparent pricing, clean AC vehicles, and flexible sightseeing schedules.',
      hi: 'पारदर्शी कीमतों, स्वच्छ एसी वाहनों और लचीले भ्रमण समय के साथ वेरुल (एलोरा की गुफाएं) और श्री घृष्णेश्वर ज्योतिर्लिंग मंदिर के लिए विशेष डे-ट्रिप कार रेंटल सेवा।',
      mr: 'पारदर्शक दर, स्वच्छ एसी वाहने आणि लवचिक पर्यटन वेळेसह वेरूळ लेणी आणि श्री घृष्णेश्वर ज्योतिर्लिंग मंदिरासाठी विशेष डे-ट्रिप कार रेंटल सेवा.',
    },
    features: {
      en: [
        'Day-trip outstation packages starting from ₹2,500',
        'Covers both Ellora Caves and Grishneshwar Jyotirlinga',
        'Lower, transparent rates compared to traditional tour operators',
        'Clean Swift Dzire, Innova & Tempo Travellers for groups',
        'Strict vehicle quality standards and polite chauffeurs',
      ],
      hi: [
        '₹2,500 से शुरू होने वाले डे-ट्रिप आउटस्टेशन पैकेज',
        'एलोरा की गुफाएं और घृष्णेश्वर ज्योतिर्लिंग दोनों शामिल',
        'पारंपरिक टूर ऑपरेटरों की तुलना में कम व पारदर्शी दरें',
        'समूहों के लिए स्वच्छ स्विफ्ट डिजायर, इनोवा और टेंपो ट्रैवलर',
        'सख्त वाहन गुणवत्ता मानक और विनम्र ड्राइवर',
      ],
      mr: [
        '₹२,५०० पासून सुरू होणारे डे-ट्रिप आउटस्टेशन पॅकेजेस',
        'वेरूळ लेणी आणि घृष्णेश्वर ज्योतिर्लिंग दोन्ही समाविष्ट',
        'पारंपरिक टूर ऑपरेटरपेक्षा कमी व पारदर्शक दर',
        'गटांसाठी स्वच्छ स्विफ्ट डिझायर, इनोव्हा व टेम्पो ट्रॅव्हलर',
        'कठोर वाहन गुणवत्ता निकष आणि नम्र चालक',
      ],
    },
  },

  // ─── 9. AJANTA & ELLORA COMBINED ───────────────────────────────────────────
  {
    id: 'city-09',
    slug: 'ajanta-ellora-cab-service',
    category: 'Cities',
    popularCity: false,
    popularCityTitle: 'Ajanta & Ellora',
    image: '/images/nashik-ajanta.jpg',
    title: {
      en: 'Ajanta & Ellora Combined Tour Cab',
      hi: 'अजंता और एलोरा संयुक्त टूर कैब सेवा',
      mr: 'अजिंठा आणि वेरूळ एकत्रित टूर कॅब सेवा',
    },
    tagline: {
      en: 'Complete Weekend Heritage Circuit for Families & Corporate Groups',
      hi: 'परिवारों व कॉर्पोरेट समूहों के लिए संपूर्ण वीकेंड हेरिटेज टूर',
      mr: 'कुटुंबे व कॉर्पोरेट गटांसाठी संपूर्ण वीकेंड हेरिटेज सहल',
    },
    description: {
      en: 'Book a complete roundtrip cab circuit covering both Ajanta and Ellora Caves with economy and luxury AC vehicle options tailored for family weekend getaways and long-weekend tours.',
      hi: 'पारिवारिक वीकेंड गेटवे और लॉन्ग-वीकेंड टूर के लिए इकोनॉमी और लग्जरी एसी वाहन विकल्पों के साथ अजंता और एलोरा दोनों गुफाओं का संपूर्ण राउंडट्रिप कैब पैकेज बुक करें।',
      mr: 'कौटुंबिक वीकेंड सहली आणि लाँग-वीकेंड टूरसाठी इकॉनॉमी व लक्झरी एसी वाहन पर्यायांसह अजिंठा आणि वेरूळ दोन्ही लेण्यांची संपूर्ण राउंडट्रिप कॅब बुक करा.',
    },
    features: {
      en: [
        'Combined Ajanta & Ellora roundtrip packages from ₹4,500',
        'Economy sedans to luxury Innova & Tempo Travellers',
        'Transparent fare updates with zero hidden sightseeing charges',
        'Ideal for family holidays, corporate outings & heritage tours',
        'Experienced drivers who manage multi-site timing smoothly',
      ],
      hi: [
        '₹4,500 से शुरू होने वाले संयुक्त अजंता और एलोरा राउंडट्रिप पैकेज',
        'इकोनॉमी सेडान से लेकर लग्जरी इनोवा और टेंपो ट्रैवलर उपलब्ध',
        'बिना किसी छिपे शुल्क के पारदर्शी किराया अपडेट',
        'पारिवारिक छुट्टियों, कॉर्पोरेट आउटिंग और हेरिटेज टूर के लिए उत्तम',
        'कई स्थलों के समय को सुचारू रूप से संभालने वाले अनुभवी ड्राइवर',
      ],
      mr: [
        '₹४,५०० पासून सुरू होणारे एकत्रित अजिंठा व वेरूळ राउंडट्रिप पॅकेज',
        'इकॉनॉमी सेडानपासून लक्झरी इनोव्हा व टेम्पो ट्रॅव्हलर उपलब्ध',
        'कोणत्याही छुप्या शुल्काशिवाय पारदर्शक दर माहिती',
        'कौटुंबिक सुट्ट्या, कॉर्पोरेट आउटिंग आणि हेरिटेज सहलींसाठी आदर्श',
        'विविध स्थळांचे वेळापत्रक अचूक सांभाळणारे अनुभवी चालक',
      ],
    },
  },

  // ─── 10. NASHIK CITY LOCAL & SIGHTSEEING ───────────────────────────────────
  {
    id: 'city-10',
    slug: 'city-car-rental-cab',
    category: 'Cities',
    popularCity: false,
    popularCityTitle: 'Nashik City',
    image: '/images/nashik-city.jpg',
    title: {
      en: 'Nashik City Local & Sightseeing Cab',
      hi: 'नासिक सिटी लोकल व दर्शनीय स्थल कैब सेवा',
      mr: 'नाशिक शहर लोकल व पर्यटन कॅब सेवा',
    },
    tagline: {
      en: 'Local City Rides, Panchavati Darshan & Trimbakeshwar Add-on Cabs',
      hi: 'लोकल सिटी राइड्स, पंचवटी दर्शन और त्र्यंबकेश्वर ऐड-ऑन कैब',
      mr: 'लोकल शहर प्रवास, पंचवटी दर्शन आणि त्र्यंबकेश्वर ॲड-ऑन कॅब',
    },
    description: {
      en: 'Explore Nashik city effortlessly with local car rentals for Panchavati temples, Sula Vineyards, Pandavleni Caves, corporate meetings, and optional Trimbakeshwar temple stops.',
      hi: 'पंचवटी मंदिरों, सुला वाइनयार्ड्स, पांडवलेनी गुफाओं, कॉर्पोरेट मीटिंग्स और वैकल्पिक त्र्यंबकेश्वर मंदिर दर्शन के लिए लोकल कार रेंटल के साथ नासिक शहर की सुगम सैर करें।',
      mr: 'पंचवटी मंदिरे, सुला वाईनयार्ड्स, पांडवलेणी लेणी, कॉर्पोरेट मीटिंग्स आणि ऐच्छिक त्र्यंबकेश्वर दर्शनासाठी लोकल कार रेंटलसह नाशिक शहराची सहज सफर करा.',
    },
    features: {
      en: [
        'Local full-day & half-day packages starting from ₹1,800',
        'Optional Trimbakeshwar Jyotirlinga stopover available',
        'Ideal for family sightseeing, airport transfers & office travel',
        'Swift Dzire, Ertiga, Innova & Tempo Travellers on demand',
        'Polite local Nashik drivers with complete city route knowledge',
      ],
      hi: [
        '₹1,800 से शुरू होने वाले लोकल फुल-डे और हाफ-डे पैकेज',
        'वैकल्पिक त्र्यंबकेश्वर ज्योतिर्लिंग दर्शन पड़ाव उपलब्ध',
        'पारिवारिक भ्रमण, एयरपोर्ट ट्रांसफर और ऑफिस यात्रा के लिए उपयुक्त',
        'मांग पर स्विफ्ट डिजायर, अर्टिगा, इनोवा और टेंपो ट्रैवलर',
        'नासिक शहर के सभी मार्गों के जानकार विनम्र स्थानीय ड्राइवर',
      ],
      mr: [
        '₹१,८०० पासून सुरू होणारे लोकल फुल-डे व हाफ-डे पॅकेजेस',
        'ऐच्छिक त्र्यंबकेश्वर ज्योतिर्लिंग दर्शन थांब्याची सोय',
        'कौटुंबिक पर्यटन, विमानतळ ट्रान्सफर व ऑफिस प्रवासासाठी उपयुक्त',
        'मागणीप्रमाणे स्विफ्ट डिझायर, अर्टिगा, इनोव्हा व टेम्पो ट्रॅव्हलर',
        'नाशिक शहरातील सर्व मार्गांची माहिती असलेले नम्र स्थानिक चालक',
      ],
    },
  },

  // ─── 11. MUMBAI ────────────────────────────────────────────────────────────
  {
    id: 'city-11',
    slug: 'mumbai-car-rental-cab',
    category: 'Cities',
    popularCity: true,
    popularCityTitle: 'Gateway of India, Mumbai',
    image: '/images/nashik-mumbai.jpg',
    title: {
      en: 'Nashik to Mumbai Cab Service',
      hi: 'नासिक से मुंबई कैब सेवा',
      mr: 'नाशिक ते मुंबई कॅब सेवा',
    },
    tagline: {
      en: '24/7 Expressway Outstation Cabs & CSMIA Airport Drops (165 km)',
      hi: '24/7 एक्सप्रेसवे आउटस्टेशन कैब और मुंबई एयरपोर्ट ड्रॉप (165 किमी)',
      mr: '२४/७ एक्सप्रेसवे आउटस्टेशन कॅब आणि मुंबई विमानतळ ड्रॉप (१६५ किमी)',
    },
    description: {
      en: 'Travel smoothly along the 165 km Mumbai–Nashik Expressway with 24/7 one-way and roundtrip cabs to Mumbai Airport (CSMIA), South Mumbai, and suburbs with tolls included.',
      hi: 'टोल शुल्क सहित मुंबई एयरपोर्ट (CSMIA), दक्षिण मुंबई और उपनगरों के लिए 24/7 वन-वे और राउंडट्रिप कैब के साथ 165 किमी लंबे मुंबई–नासिक एक्सप्रेसवे पर सुगम यात्रा करें।',
      mr: 'टोल शुल्कासह मुंबई विमानतळ (CSMIA), दक्षिण मुंबई आणि उपनगरांसाठी २४/७ वन-वे व राउंडट्रिप कॅबसह १६५ किमी मुंबई–नाशिक एक्सप्रेसवेवरून आरामदायी प्रवास करा.',
    },
    features: {
      en: [
        'All-inclusive fares from ₹3,500 covering tolls, GST & driver allowance',
        'Direct Mumbai–Nashik Expressway drops to CSMIA T1/T2 & city',
        'Optional 1-day Trimbakeshwar darshan en route for pilgrims',
        'Regularly serviced, sanitized Swift Dzire, Ertiga & Innova',
        '24/7 instant booking confirmation via WhatsApp or call',
      ],
      hi: [
        'टोल, जीएसटी और ड्राइवर भत्ते सहित ₹3,500 से शुरू ऑल-इनक्लूसिव किराया',
        'मुंबई–नासिक एक्सप्रेसवे से सीधे CSMIA T1/T2 एयरपोर्ट और शहर ड्रॉप',
        'तीर्थयात्रियों के लिए रास्ते में 1-दिवसीय त्र्यंबकेश्वर दर्शन का विकल्प',
        'नियमित रूप से सर्विस व सैनिटाइज की गई डिजायर, अर्टिगा और इनोवा',
        'व्हाट्सएप या कॉल के माध्यम से 24/7 तुरंत बुकिंग कन्फर्मेशन',
      ],
      mr: [
        'टोल, जीएसटी व चालक भत्त्यासह ₹३,५०० पासून ऑल-इनक्लूसिव दर',
        'मुंबई–नाशिक एक्सप्रेसवेद्वारे थेट CSMIA T1/T2 विमानतळ व शहर ड्रॉप',
        'भाविकांसाठी मार्गात १ दिवसीय त्र्यंबकेश्वर दर्शनाचा पर्याय',
        'नियमित सर्व्हिस व सॅनिटाईझ केलेली डिझायर, अर्टिगा व इनोव्हा वाहने',
        'व्हॉट्सॲप किंवा कॉलद्वारे २४/७ त्वरित बुकिंग निश्चिती',
      ],
    },
  },

  // ─── 12. PUNE ──────────────────────────────────────────────────────────────
  {
    id: 'city-12',
    slug: 'pune-car-rental-cab',
    category: 'Cities',
    popularCity: true,
    popularCityTitle: 'Shaniwar Wada, Pune',
    image: '/images/nashik-pune.jpg',
    title: {
      en: 'Nashik to Pune Cab Service',
      hi: 'नासिक से पुणे कैब सेवा',
      mr: 'नाशिक ते पुणे कॅब सेवा',
    },
    tagline: {
      en: 'Direct City-to-City & Pune Airport Transfers with Optional Darshan',
      hi: 'वैकल्पिक दर्शन पड़ाव के साथ सीधी सिटी-टू-सिटी व पुणे एयरपोर्ट कैब',
      mr: 'ऐच्छिक दर्शन थांब्यासह थेट सिटी-टू-सिटी व पुणे विमानतळ कॅब',
    },
    description: {
      en: 'Specialized intercity and Pune Airport cab rentals from Nashik offering transparent one-way and roundtrip pricing, clean AC vehicles, and optional Shani Shingnapur stopovers.',
      hi: 'पारदर्शी वन-वे व राउंडट्रिप कीमतों, स्वच्छ एसी वाहनों और वैकल्पिक शनि शिंगणापुर दर्शन पड़ाव के साथ नासिक से पुणे शहर और पुणे एयरपोर्ट के लिए विशेष कैब सेवा।',
      mr: 'पारदर्शक वन-वे व राउंडट्रिप दर, स्वच्छ एसी वाहने आणि ऐच्छिक शनि शिंगणापूर दर्शन थांब्यासह नाशिकहून पुणे शहर व पुणे विमानतळासाठी विशेष कॅब सेवा.',
    },
    features: {
      en: [
        'Transparent outstation fares starting from ₹3,200',
        'Direct drops to Pune Airport (Lohegaon), IT hubs & city zones',
        'Optional Shani Shingnapur temple darshan via detour route',
        'Lower rates than traditional operators with modern booking',
        'Well-maintained fleet of sedans, SUVs & Tempo Travellers',
      ],
      hi: [
        '₹3,200 से शुरू होने वाला पारदर्शी आउटस्टेशन किराया',
        'पुणे एयरपोर्ट (लोहेगांव), आईटी हब और शहरी क्षेत्रों में सीधा ड्रॉप',
        'वैकल्पिक मार्ग से शनि शिंगणापुर मंदिर दर्शन जोड़ने की सुविधा',
        'पारंपरिक ऑपरेटरों की तुलना में कम दरें और आधुनिक बुकिंग व्यवस्था',
        'सेडान, एसयूवी और टेंपो ट्रैवलर का सुव्यवस्थित बेड़ा',
      ],
      mr: [
        '₹३,२०० पासून सुरू होणारे पारदर्शक आउटस्टेशन दर',
        'पुणे विमानतळ (लोहगाव), आयटी हब आणि शहरी भागात थेट ड्रॉप',
        'ऐच्छिक मार्गाने शनि शिंगणापूर मंदिर दर्शन जोडण्याची सोय',
        'पारंपरिक ऑपरेटरपेक्षा कमी दर आणि आधुनिक बुकिंग प्रणाली',
        'सेडान, एसयूव्ही आणि टेम्पो ट्रॅव्हलरचा सुस्थितीतील ताफा',
      ],
    },
  },

  // ─── 13. LONAVALA & KHANDALA ───────────────────────────────────────────────
  {
    id: 'city-13',
    slug: 'lonavala-car-rental-cab',
    category: 'Cities',
    popularCity: true,
    popularCityTitle: 'Lonavala & Khandala',
    image: '/images/nashik-lonavala.jpg',
    title: {
      en: 'Lonavala & Khandala Hill Station Cab',
      hi: 'लोनावाला व खंडाला हिल स्टेशन कैब सेवा',
      mr: 'लोणावळा आणि खंडाळा हिल स्टेशन कॅब सेवा',
    },
    tagline: {
      en: 'Weekend Ghat Getaway & Lonavala–Pune Combo Tour Packages',
      hi: 'वीकेंड घाट गेटवे और लोनावाला–पुणे कॉम्बो टूर पैकेज',
      mr: 'वीकेंड घाट सहल आणि लोणावळा–पुणे कॉम्बो टूर पॅकेजेस',
    },
    description: {
      en: 'Plan a refreshing hill-station escape to Lonavala and Khandala with all-inclusive outstation roundtrip or one-way cab packages and optional Pune combo sightseeing.',
      hi: 'ऑल-इनक्लूसिव आउटस्टेशन राउंडट्रिप या वन-वे कैब पैकेज और वैकल्पिक पुणे कॉम्बो भ्रमण के साथ लोनावाला और खंडाला के सुंदर हिल स्टेशन की ताज़गी भरी यात्रा करें।',
      mr: 'ऑल-इनक्लूसिव आउटस्टेशन राउंडट्रिप किंवा वन-वे कॅब पॅकेज आणि ऐच्छिक पुणे कॉम्बो पर्यटनासह लोणावळा व खंडाळा या थंड हवेच्या ठिकाणांची आनंददायी सफर करा.',
    },
    features: {
      en: [
        'Upfront all-inclusive hill-station packages starting from ₹4,500',
        'Customizable Lonavala–Khandala–Pune combo itineraries',
        'Experienced ghat drivers skilled in scenic hill routes',
        'Swift Dzire, Innova & Tempo Travellers for family weekends',
        'Zero hidden charges with transparent package billing',
      ],
      hi: [
        '₹4,500 से शुरू होने वाले अग्रिम ऑल-इनक्लूसिव हिल-स्टेशन पैकेज',
        'कस्टमाइज़ेबल लोनावाला–खंडाला–पुणे कॉम्बो यात्रा कार्यक्रम',
        'सुंदर पहाड़ी और घाट मार्गों में दक्ष अनुभवी ड्राइवर',
        'पारिवारिक वीकेंड के लिए स्विफ्ट डिजायर, इनोवा और टेंपो ट्रैवलर',
        'पारदर्शी पैकेज बिलिंग के साथ कोई छिपा शुल्क नहीं',
      ],
      mr: [
        '₹४,५०० पासून सुरू होणारे आगाऊ ऑल-इनक्लूसिव हिल-स्टेशन पॅकेज',
        'कस्टमायझेबल लोणावळा–खंडाळा–पुणे कॉम्बो सहल नियोजन',
        'निसर्गरम्य डोंगरी व घाट मार्गांवर कुशल अनुभवी चालक',
        'कौटुंबिक वीकेंडसाठी स्विफ्ट डिझायर, इनोव्हा व टेम्पो ट्रॅव्हलर',
        'पारदर्शक पॅकेज बिलिंगसह कोणतेही छुपे शुल्क नाही',
      ],
    },
  },

  // ─── 14. MAHABALESHWAR ─────────────────────────────────────────────────────
  {
    id: 'city-14',
    slug: 'mahabaleshwar-car-rental-cab',
    category: 'Cities',
    popularCity: true,
    popularCityTitle: 'Mahabaleshwar',
    image: '/images/nashik-mahabaleshwar.jpg',
    title: {
      en: 'Mahabaleshwar Hill Station Cab Service',
      hi: 'महाबलेश्वर हिल स्टेशन कैब सेवा',
      mr: 'महाबळेश्वर हिल स्टेशन कॅब सेवा',
    },
    tagline: {
      en: '2-Day Scenic Ghat & Strawberry Farm Holiday Cab Packages',
      hi: '2-दिवसीय सुंदर घाट व स्ट्रॉबेरी फार्म हॉलिडे कैब पैकेज',
      mr: '२ दिवसांचे निसर्गरम्य घाट व स्ट्रॉबेरी फार्म हॉलिडे कॅब पॅकेज',
    },
    description: {
      en: 'Enjoy a stress-free holiday to Mahabaleshwar and Panchgani with experienced ghat drivers, economy-to-luxury AC vehicles, and transparent 2-day outstation tour packages.',
      hi: 'अनुभवी घाट ड्राइवरों, इकोनॉमी से लग्जरी एसी वाहनों और पारदर्शी 2-दिवसीय आउटस्टेशन टूर पैकेज के साथ महाबलेश्वर और पंचगनी की तनाव-मुक्त छुट्टियों का आनंद लें।',
      mr: 'अनुभवी घाट चालक, इकॉनॉमी ते लक्झरी एसी वाहने आणि पारदर्शक २ दिवसांच्या आउटस्टेशन टूर पॅकेजसह महाबळेश्वर व पाचगणीच्या तणावमुक्त सुट्टीचा आनंद घ्या.',
    },
    features: {
      en: [
        'Scenic hill-station packages starting from ₹4,200',
        'Ideal for 2-day family getaways, strawberry farms & corporate trips',
        'Swift Dzire, Ertiga, Innova & Tempo Travellers available',
        'Skilled hill drivers ensuring safe, smooth ghat cruising',
        'Upfront all-inclusive fares with zero hidden charges',
      ],
      hi: [
        '₹4,200 से शुरू होने वाले सुंदर हिल-स्टेशन पैकेज',
        '2-दिवसीय पारिवारिक छुट्टियों, स्ट्रॉबेरी फार्म और कॉर्पोरेट यात्रा हेतु उत्तम',
        'स्विफ्ट डिजायर, अर्टिगा, इनोवा और टेंपो ट्रैवलर उपलब्ध',
        'सुरक्षित और सुगम घाट यात्रा सुनिश्चित करने वाले कुशल पहाड़ी ड्राइवर',
        'बिना किसी छिपे शुल्क के अग्रिम ऑल-इनक्लूसिव किराया',
      ],
      mr: [
        '₹४,२०० पासून सुरू होणारे निसर्गरम्य हिल-स्टेशन पॅकेजेस',
        '२ दिवसांच्या कौटुंबिक सहली, स्ट्रॉबेरी फार्म व कॉर्पोरेट ट्रिपसाठी उत्तम',
        'स्विफ्ट डिझायर, अर्टिगा, इनोव्हा आणि टेम्पो ट्रॅव्हलर उपलब्ध',
        'सुरक्षित व आरामदायी घाट प्रवास घडवणारे कुशल डोंगरी चालक',
        'कोणत्याही छुप्या शुल्काशिवाय आगाऊ ऑल-इनक्लूसिव दर',
      ],
    },
  },

  // ─── 15. GOA ───────────────────────────────────────────────────────────────
  {
    id: 'city-15',
    slug: 'goa-car-rental-cab',
    category: 'Cities',
    popularCity: true,
    popularCityTitle: 'Goa',
    image: '/images/nashik-goa.jpg',
    title: {
      en: 'Goa Long-Distance Road Trip Cab',
      hi: 'गोवा लंबी दूरी रोड ट्रिप कैब सेवा',
      mr: 'गोवा लांब पल्ल्याची रोड ट्रिप कॅब सेवा',
    },
    tagline: {
      en: 'Overnight & Multi-Day Coastal Holiday Cabs for Families & Groups',
      hi: 'परिवारों व समूहों के लिए ओवरनाइट व मल्टी-डे कोस्टल हॉलिडे कैब',
      mr: 'कुटुंबे व गटांसाठी ओव्हरनाईट व मल्टी-डे कोस्टल हॉलिडे कॅब',
    },
    description: {
      en: 'Experience the ultimate Maharashtra–Goa coastal road trip with overnight travel options, experienced highway drivers, and customizable multi-day family or group cab packages.',
      hi: 'ओवरनाइट यात्रा विकल्पों, अनुभवी हाईवे ड्राइवरों और कस्टमाइज़ेबल मल्टी-डे फैमिली या ग्रुप कैब पैकेज के साथ महाराष्ट्र–गोवा कोस्टल रोड ट्रिप का आनंद लें।',
      mr: 'ओव्हरनाईट प्रवास पर्याय, अनुभवी महामार्ग चालक आणि कस्टमायझेबल मल्टी-डे फॅमिली किंवा ग्रुप कॅब पॅकेजेससह महाराष्ट्र–गोवा कोस्टल रोड ट्रिपचा आनंद घ्या.',
    },
    features: {
      en: [
        'Long-distance coastal road trip packages starting from ₹7,500',
        'Overnight travel and multi-day roundtrip options available',
        'Clean Swift Dzire, premium Innova & spacious Tempo Travellers',
        'Experienced long-haul drivers with All-India Tourist Permits',
        'Transparent upfront billing with zero hidden route surcharges',
      ],
      hi: [
        '₹7,500 से शुरू होने वाले लंबी दूरी के कोस्टल रोड ट्रिप पैकेज',
        'ओवरनाइट यात्रा और मल्टी-डे राउंडट्रिप विकल्प उपलब्ध',
        'स्वच्छ स्विफ्ट डिजायर, प्रीमियम इनोवा और विशाल टेंपो ट्रैवलर',
        'ऑल-इंडिया टूरिस्ट परमिट के साथ अनुभवी लंबी दूरी के ड्राइवर',
        'बिना किसी छिपे मार्ग शुल्क के पारदर्शी अग्रिम बिलिंग',
      ],
      mr: [
        '₹७,५०० पासून सुरू होणारे लांब पल्ल्याचे कोस्टल रोड ट्रिप पॅकेज',
        'ओव्हरनाईट प्रवास आणि मल्टी-डे राउंडट्रिप पर्याय उपलब्ध',
        'स्वच्छ स्विफ्ट डिझायर, प्रीमियम इनोव्हा व प्रशस्त टेम्पो ट्रॅव्हलर',
        'ऑल-इंडिया टूरिस्ट परमिटसह अनुभवी लांब पल्ल्याचे चालक',
        'कोणत्याही छुप्या मार्ग शुल्काशिवाय पारदर्शक आगाऊ बिलिंग',
      ],
    },
  },
];
// City Data

// Combined Service & Tour Packages List
export const SERVICE_PACKAGES = [
  ...CITY_DATA,
  ...AIRPORT_DATA,
  ...RAILWAY_DATA,
];


export const PACKAGE_CATEGORIES = [
  { id: 'All', label: { en: 'All', hi: 'सभी', mr: 'सर्व' } },
  { id: 'Maharashtra Tours', label: { en: 'Maharashtra Tours', hi: 'महाराष्ट्र टूर', mr: 'महाराष्ट्र टूर्स' } },
  { id: 'Spiritual Tours', label: { en: 'Spiritual Tours', hi: 'धार्मिक टूर', mr: 'तीर्थयात्रा' } },
  { id: 'Weekend Getaways', label: { en: 'Weekend Getaways', hi: 'वीकेंड टूर', mr: 'वीकेंड सहली' } },
  { id: 'Family Tours', label: { en: 'Family Tours', hi: 'पारिवारिक टूर', mr: 'कौटुंबिक सहली' } },
  { id: 'Group Tours', label: { en: 'Group Tours', hi: 'ग्रुप टूर', mr: 'ग्रुप टूर्स' } },
  { id: 'Customized Tours', label: { en: 'Customized Tours', hi: 'कस्टम टूर', mr: 'कस्टम टूर्स' } },
];

export const TOUR_PACKAGES = [
  {
    id: 'nashik-trimbakeshwar-shirdi',
    category: 'Spiritual Tours',
    title: {
      en: 'Nashik, Trimbakeshwar & Shirdi Darshan',
      hi: 'नासिक, त्र्यंबकेश्वर और शिरडी दर्शन',
      mr: 'नाशिक, त्र्यंबकेश्वर आणि शिर्डी दर्शन',
    },
    duration: { en: '2 Days / 1 Night', hi: '2 दिन / 1 रात', mr: '२ दिवस / १ रात्र' },
    durationDays: 2,
    placesCovered: ['Nashik', 'Trimbakeshwar', 'Shirdi', 'Shani Shingnapur'],
    highlights: {
      en: ['Trimbakeshwar Jyotirlinga & Panchavati ghats', 'Sai Baba Samadhi Mandir & Shani Shingnapur'],
      hi: ['त्र्यंबकेश्वर ज्योतिर्लिंग व पंचवटी दर्शन', 'शिरडी साईं बाबा व शनि शिंगणापुर'],
      mr: ['त्र्यंबकेश्वर ज्योतिर्लिंग व पंचवटी घाट', 'शिर्डी साईबाबा व शनि शिंगणापूर'],
    },
    inclusions: {
      en: ['Private AC cab & driver allowance', 'Nashik pickup & drop'],
      hi: ['प्राइवेट एसी कैब व ड्राइवर भत्ता', 'नासिक पिकअप व ड्रॉप'],
      mr: ['खाजगी एसी कॅब व चालक भत्ता', 'नाशिक पिकअप व ड्रॉप'],
    },
    exclusions: {
      en: ['VIP darshan passes, hotel stay, meals & tolls'],
      hi: ['दर्शन पास, होटल, भोजन व टोल'],
      mr: ['दर्शन पास, हॉटेल, जेवण व टोल'],
    },
    indicativePrice: {
      en: 'Indicative from ₹5,800',
      hi: 'अनुमानित ₹5,800 से',
      mr: 'अंदाजे ₹५,८०० पासून',
    },
    image: IMAGES.trimbakeshwar,
    imageAlt: 'Trimbakeshwar temple with Sahyadri hills',
  },
  {
    id: 'ashtavinayak-group-yatra',
    category: 'Spiritual Tours',
    title: {
      en: 'Complete Ashtavinayak Darshan Tour',
      hi: 'संपूर्ण अष्टविनायक दर्शन यात्रा',
      mr: 'संपूर्ण अष्टविनायक दर्शन यात्रा',
    },
    duration: { en: '3 Days / 2 Nights', hi: '3 दिन / 2 रातें', mr: '३ दिवस / २ रात्री' },
    durationDays: 3,
    placesCovered: ['Ashtavinayak', 'Morgaon', 'Pali', 'Lenyadri', 'Ozar', 'Ranjangaon'],
    highlights: {
      en: ['All 8 Ganpati temples in traditional sequence', 'Senior-friendly rests & morning starts'],
      hi: ['सभी 8 गणपति मंदिर पारंपरिक क्रम में', 'वरिष्ठ नागरिकों के लिए सुविधाजनक'],
      mr: ['पारंपरिक क्रमाने सर्व ८ गणपती दर्शन', 'ज्येष्ठ नागरिकांसाठी सोयीस्कर वेळापत्रक'],
    },
    inclusions: {
      en: ['Dedicated AC vehicle & route driver'],
      hi: ['डेडिकेटेड एसी वाहन व अनुभवी ड्राइवर'],
      mr: ['स्वतंत्र एसी वाहन व अनुभवी चालक'],
    },
    exclusions: {
      en: ['Hotel, meals, highway tolls & parking'],
      hi: ['होटल, भोजन, टोल व पार्किंग'],
      mr: ['हॉटेल, जेवण, टोल व पार्किंग'],
    },
    indicativePrice: {
      en: 'Indicative from ₹13,500',
      hi: 'अनुमानित ₹13,500 से',
      mr: 'अंदाजे ₹१३,५०० पासून',
    },
    image: IMAGES.godavariNashik,
    imageAlt: 'Historic Maharashtra riverside temple steps',
  },
  {
    id: 'five-jyotirlinga-maharashtra',
    category: 'Group Tours',
    title: {
      en: 'Maharashtra 5 Jyotirlinga Pilgrimage',
      hi: 'महाराष्ट्र 5 ज्योतिर्लिंग तीर्थयात्रा',
      mr: 'महाराष्ट्र ५ ज्योतिर्लिंग तीर्थयात्रा',
    },
    duration: { en: '5 Days / 4 Nights', hi: '5 दिन / 4 रातें', mr: '५ दिवस / ४ रात्री' },
    durationDays: 5,
    placesCovered: ['Jyotirlinga', 'Trimbakeshwar', 'Bhimashankar', 'Ellora', 'Aundha', 'Parli'],
    highlights: {
      en: ['All 5 Maharashtra Jyotirlingas from Nashik', 'Ideal for joint families & Tempo groups'],
      hi: ['नासिक से सभी 5 ज्योतिर्लिंग दर्शन', 'संयुक्त परिवारों व समूहों के लिए उत्तम'],
      mr: ['नाशिकहून महाराष्ट्रातील ५ ज्योतिर्लिंगे', 'कुटुंब व ग्रुप टूरसाठी उत्तम'],
    },
    inclusions: {
      en: ['5-day private AC cab or Tempo Traveller'],
      hi: ['5 दिन का प्राइवेट एसी वाहन व ड्राइवर भत्ता'],
      mr: ['५ दिवसांसाठी एसी वाहन व चालक भत्ता'],
    },
    exclusions: {
      en: ['Stay, meals, state tolls & parking'],
      hi: ['होटल, भोजन, टोल व पार्किंग'],
      mr: ['निवास, जेवण, टोल व पार्किंग'],
    },
    indicativePrice: {
      en: 'Indicative from ₹21,500',
      hi: 'अनुमानित ₹21,500 से',
      mr: 'अंदाजे ₹२१,५०० पासून',
    },
    image: IMAGES.trimbakeshwar,
    imageAlt: 'Sacred Jyotirlinga temple in Maharashtra',
  },
  {
    id: 'pandharpur-kolhapur-darshan',
    category: 'Spiritual Tours',
    title: {
      en: 'Pandharpur, Tuljapur & Kolhapur Yatra',
      hi: 'पंढरपुर, तुलजापुर और कोल्हापुर यात्रा',
      mr: 'पंढरपूर, तुळजापूर आणि कोल्हापूर यात्रा',
    },
    duration: { en: '4 Days / 3 Nights', hi: '4 दिन / 3 रातें', mr: '४ दिवस / ३ रात्री' },
    durationDays: 4,
    placesCovered: ['Pandharpur', 'Kolhapur', 'Shani Shingnapur', 'Tuljapur'],
    highlights: {
      en: ['Vitthal Rukmini Mandir & Mahalaxmi Ambabai', 'Flexible highway rest halts'],
      hi: ['विट्ठल रुक्मिणी व कोल्हापुर महालक्ष्मी दर्शन', 'आरामदायक हाइवे पड़ाव'],
      mr: ['विठ्ठल रुक्मिणी व महालक्ष्मी दर्शन', 'सोयीस्कर प्रवास वेळापत्रक'],
    },
    inclusions: {
      en: ['Private AC vehicle & driver allowance'],
      hi: ['प्राइवेट एसी वाहन व ड्राइवर भत्ता'],
      mr: ['खाजगी एसी वाहन व चालक भत्ता'],
    },
    exclusions: {
      en: ['Hotels, meals, tolls & parking'],
      hi: ['होटल, भोजन, टोल व पार्किंग'],
      mr: ['हॉटेल, जेवण, टोल व पार्किंग'],
    },
    indicativePrice: {
      en: 'Indicative from ₹18,000',
      hi: 'अनुमानित ₹18,000 से',
      mr: 'अंदाजे ₹१८,००० पासून',
    },
    image: IMAGES.godavariNashik,
    imageAlt: 'Traditional Maharashtra stone ghats',
  },
  {
    id: 'ellora-ajanta-heritage',
    category: 'Maharashtra Tours',
    title: {
      en: 'Ellora, Ajanta & Grishneshwar Heritage',
      hi: 'एलोरा, अजंता और घृष्णेश्वर हेरिटेज',
      mr: 'वेरूळ, अजिंठा आणि घृष्णेश्वर सफर',
    },
    duration: { en: '3 Days / 2 Nights', hi: '3 दिन / 2 रातें', mr: '३ दिवस / २ रात्री' },
    durationDays: 3,
    placesCovered: ['Ellora', 'Ajanta', 'Chhatrapati Sambhajinagar', 'Jyotirlinga'],
    highlights: {
      en: ['UNESCO Kailasa Temple & Ajanta caves', 'Daulatabad Fort & Grishneshwar Mandir'],
      hi: ['यूनेस्को कैलास मंदिर व अजंता गुफाएं', 'दौलताबाद किला व घृष्णेश्वर मंदिर'],
      mr: ['युनेस्को कैलास मंदिर व अजिंठा लेणी', 'दौलताबाद किल्ला व घृष्णेश्वर मंदिर'],
    },
    inclusions: {
      en: ['3-day AC cab & smart closed-day planning'],
      hi: ['3 दिन की एसी कैब व सही दिन योजना'],
      mr: ['३ दिवसांची एसी कॅब व अचूक नियोजन'],
    },
    exclusions: {
      en: ['Monument tickets, shuttle, hotels & tolls'],
      hi: ['एंट्री टिकट, होटल व टोल'],
      mr: ['प्रवेश तिकीट, हॉटेल व टोल'],
    },
    indicativePrice: {
      en: 'Indicative from ₹11,800',
      hi: 'अनुमानित ₹11,800 से',
      mr: 'अंदाजे ₹११,८०० पासून',
    },
    image: IMAGES.elloraCaves,
    imageAlt: 'Monolithic Kailasa Temple at Ellora Caves',
  },
  {
    id: 'mahabaleshwar-lonavala-family',
    category: 'Family Tours',
    title: {
      en: 'Lonavala, Panchgani & Mahabaleshwar',
      hi: 'लोनावाला, पंचगनी और महाबलेश्वर',
      mr: 'लोणावळा, पाचगणी आणि महाबळेश्वर',
    },
    duration: { en: '4 Days / 3 Nights', hi: '4 दिन / 3 रातें', mr: '४ दिवस / ३ रात्री' },
    durationDays: 4,
    placesCovered: ['Mahabaleshwar', 'Lonavala', 'Panchgani', 'Pratapgad'],
    highlights: {
      en: ['Misty valley viewpoints & Venna Lake', 'Relaxed family pacing & strawberry farms'],
      hi: ['पहाड़ी व्यूपॉइंट्स व वेन्ना लेक', 'परिवार के साथ आरामदायक हिल स्टेशन टूर'],
      mr: ['निसर्गरम्य व्ह्यूपॉइंट्स व वेण्णा लेक', 'कौटुंबिक थंड हवेची सफर'],
    },
    inclusions: {
      en: ['AC vehicle with ghat-experienced driver'],
      hi: ['घाट मार्ग के अनुभवी ड्राइवर सहित एसी कैब'],
      mr: ['अनुभवी चालकासह एसी वाहन'],
    },
    exclusions: {
      en: ['Hotels, meals, boating & tolls'],
      hi: ['होटल, भोजन, बोटिंग व टोल'],
      mr: ['हॉटेल, जेवण, बोटिंग व टोल'],
    },
    indicativePrice: {
      en: 'Indicative from ₹15,200',
      hi: 'अनुमानित ₹15,200 से',
      mr: 'अंदाजे ₹१५,२०० पासून',
    },
    image: IMAGES.mahabaleshwarHills,
    imageAlt: 'Misty valley viewpoint in Mahabaleshwar',
  },
  {
    id: 'konkan-ganpatipule-coast',
    category: 'Maharashtra Tours',
    title: {
      en: 'Konkan Coast & Ganpatipule Holiday',
      hi: 'कोंकण तट और गणपतिपुले हॉलिडे',
      mr: 'कोकण किनारा आणि गणपतीपुळे सफर',
    },
    duration: { en: '4 Days / 3 Nights', hi: '4 दिन / 3 रातें', mr: '४ दिवस / ३ रात्री' },
    durationDays: 4,
    placesCovered: ['Konkan', 'Ganpatipule', 'Ratnagiri', 'Aare Ware'],
    highlights: {
      en: ['Swayambhu Ganpati Temple by the sea', 'Scenic coastal drive & clean Konkan beaches'],
      hi: ['समुद्र तट पर स्वयंभू गणपति मंदिर', 'खूबसूरत कोंकण समुद्र तट ड्राइव'],
      mr: ['समुद्रकिनाऱ्यावरील स्वयंभू गणपती मंदिर', 'सुंदर कोकण किनारपट्टी सफर'],
    },
    inclusions: {
      en: ['Private AC family SUV / Innova'],
      hi: ['प्राइवेट एसी परिवार एसयूवी / इनोवा'],
      mr: ['खाजगी एसी फॅमिली एसयूव्ही / इनोव्हा'],
    },
    exclusions: {
      en: ['Beach resort stay, meals & tolls'],
      hi: ['रिसॉर्ट, भोजन व टोल'],
      mr: ['रिसॉर्ट, जेवण व टोल'],
    },
    indicativePrice: {
      en: 'Indicative from ₹16,500',
      hi: 'अनुमानित ₹16,500 से',
      mr: 'अंदाजे ₹१६,५०० पासून',
    },
    image: IMAGES.konkanCoast,
    imageAlt: 'Ganpatipule golden beach in Konkan Maharashtra',
  },
  {
    id: 'matheran-lonavala-weekend',
    category: 'Weekend Getaways',
    title: {
      en: 'Lonavala & Matheran Hill Weekend',
      hi: 'लोनावाला और माथेरान वीकेंड टूर',
      mr: 'लोणावळा आणि माथेरान वीकेंड सहल',
    },
    duration: { en: '2 Days / 1 Night', hi: '2 दिन / 1 रात', mr: '२ दिवस / १ रात्र' },
    durationDays: 2,
    placesCovered: ['Lonavala', 'Matheran', 'Igatpuri'],
    highlights: {
      en: ['Quick Sahyadri hill weekend from Nashik', 'Drop-off at Matheran Dasturi Naka'],
      hi: ['नासिक से झटपट वीकेंड हिल ब्रेक', 'माथेरान दस्तुरी नाका तक ड्रॉप'],
      mr: ['नाशिकहून छोटेखानी वीकेंड हिल ब्रेक', 'माथेरान दस्तुरी नाका ड्रॉप'],
    },
    inclusions: {
      en: ['Private AC cab & driver allowance'],
      hi: ['प्राइवेट एसी कैब व ड्राइवर भत्ता'],
      mr: ['खाजगी एसी कॅब व चालक भत्ता'],
    },
    exclusions: {
      en: ['Matheran train/horse, hotel & tolls'],
      hi: ['होटल, भोजन, टॉय ट्रेन व टोल'],
      mr: ['हॉटेल, जेवण, टॉय ट्रेन व टोल'],
    },
    indicativePrice: {
      en: 'Indicative from ₹7,900',
      hi: 'अनुमानित ₹7,900 से',
      mr: 'अंदाजे ₹७,९०० पासून',
    },
    image: IMAGES.heroSahyadri,
    imageAlt: 'Winding green Sahyadri mountain highway',
  },
  {
    id: 'custom-maharashtra-builder',
    category: 'Customized Tours',
    title: {
      en: 'Design Your Own Maharashtra Tour',
      hi: 'अपना खुद का महाराष्ट्र टूर बनाएं',
      mr: 'तुमची स्वतःची महाराष्ट्र सहल तयार करा',
    },
    duration: { en: '1–10+ Days', hi: '1–10+ दिन', mr: '१–१०+ दिवस' },
    durationDays: 3,
    placesCovered: ['Nashik', 'Shirdi', 'Mahabaleshwar', 'Konkan', 'Goa'],
    highlights: {
      en: ['Combine destinations, stay tier & meals', 'Instant approximate cost breakdown'],
      hi: ['अपने मनपसंद स्थान, होटल व भोजन चुनें', 'तुरंत अनुमानित खर्च देखें'],
      mr: ['आवडती ठिकाणे, हॉटेल व जेवण निवडा', 'तत्काळ अंदाजे खर्च पहा'],
    },
    inclusions: {
      en: ['Flexible vehicle, stay & sightseeing plan'],
      hi: ['लचीला वाहन, होटल व दर्शनीय प्लान'],
      mr: ['लवचिक वाहन, निवास व साइटसीइंग प्लॅन'],
    },
    exclusions: {
      en: ['Finalized on WhatsApp with Nashik desk'],
      hi: ['अंतिम दर व्हाट्सएप पर कन्फर्म'],
      mr: ['अंतिम दर व्हॉट्सॲपवर निश्चित केले जातील'],
    },
    indicativePrice: {
      en: 'Live Estimate in Planner',
      hi: 'प्लानर में लाइव अनुमान',
      mr: 'प्लॅनरमध्ये थेट अंदाज',
    },
    image: IMAGES.heroFamilyRoadtrip,
    imageAlt: 'Indian family on customized Maharashtra road trip',
  },
];
