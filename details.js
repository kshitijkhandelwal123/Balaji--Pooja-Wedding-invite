/* =====================================================================
   SOUTH INDIAN · BANANA LEAF LUXURY INVITATION
   EDIT ONLY THIS FILE.  Keep the "quotes" and the commas.
   Pictures live in the images folder.
   ===================================================================== */
window.WEDDING = {

  /* ---- couple ---- */
  groom: "Sumukh",             /* name on the opening screen & top of the page */
  bride: "Pooja",
  groomFull: "Balaji Sumukh TV",       /* full name on the invitation card */
  brideFull: "Pooja J",
  monogram: "S & P",
  groomParents: "Late Smt. Purnima D.P. & Late Sri Venkatesh Babu T.N.\n\nWith the blessings of\nKIRAN SK AND SUPRIYA TV",
  groomLabel: "Son of",
  brideParents: "Smt. Radha J. & Sri Anand Kumar J. (Ballari)",
  brideLabel: "Daughter of",

  /* ---- opening ---- */
  gateEyebrow: "The wedding of",
  gateText: "Tap the seal to open your invitation",

  /* ---- words ---- */
  cardFooter: null,                    /* last line of the invitation card; null = auto (date + venue), "" = hide */
  heroEyebrow: "With the blessings of our elders",
  place: "Devanahalli · Bengaluru",
  blessing: "Shri Ganeshaya Namah",
  tagline: "Amidst banana leaves, jasmine and the glow of brass lamps, two hearts become one.",
  inviteLine: "We joyfully invite you and your family to celebrate the wedding of our children.",

  /* ---- pictures ("" = hide) ---- */
  gateImage: "images/resort-gate.jpg",   /* resort photo behind the envelope on the opening screen */
  heroImage: "images/resort-lake.jpg",   /* full-screen resort photo at the top after opening */
  heroFocus: "50% 60%",
  footerImage: "images/resort-porch.jpg",/* photo at the very bottom ("" = hide) */
  couplePhoto: "",
  venueImage: "images/resort-aerial.jpg",
  venueFocus: "50% 45%",

  /* postcard collage (3 photos look best) */
  postcardEyebrow: "Wish you were here",
  postcardTitle: "Lakes, Lamps & Forever",
  postcardNote: "Two golden days at Veerdency Resort",
  postcards: [
    { src: "images/resort-aerial.jpg", cap: "Where our forever begins" },
    { src: "images/resort-lake.jpg",   cap: "Evenings by the lake" },
    { src: "images/resort-porch.jpg",  cap: "Welcome home" }
  ],
  gallery: [],

  /* ---- date (three scratch cards — shown on EVERY visit) ---- */
  weddingDateTime: "2026-11-15T06:00:00+05:30",   /* countdown counts down to the Muhurtham */
  dateDay: "15", dateMonth: "NOV", dateYear: "2026",
  sealText: "Scratch each card, one by one, to reveal the date",
  dateNote: "Muhurtham at 6:00 in the morning",

  /* ---- the two functions ----
     image = picture on the card; extras = extra lines (use [] for none); mood = "evening" or "dawn" */
  eventsEyebrow: "Two days of celebration",
  eventsLink: "From the glow of the evening lamps to the first light of dawn",
  events: [
    { title: "Reception",  day: "Saturday", date: "14", month: "November 2026",
      time: "7:00 PM onwards", extras: [],
      note: "An evening of celebration, music & dinner", image: "images/resort-gate.jpg", mood: "evening" },
    { title: "Muhurtham",  day: "Sunday",   date: "15", month: "November 2026",
      time: "6:00 AM to 7:30 AM", extras: ["Lagna: Vrushchika", "Lunch: 12:30 PM onwards"],
      note: "The sacred wedding ceremony", image: "images/resort-lake.jpg", mood: "dawn" }
  ],

  /* ---- venue ---- */
  venueNote: "Amidst lush gardens and a serene lake, close to the airport. We would be honoured to celebrate with you.",
  venueCity: "Venue · Devanahalli, Bengaluru",
  venueName: "Veerdency Resort",
  venueAddress: "Kempegowda International Airport Road, Opp. to Lake, Near Godrej Royal Woods, Devanahalli, Chikkasanne, Bengaluru – 562110",
  mapLink: "",                         /* paste a Google Maps share link here; "" = search by the name below */
  mapQuery: "Veerdency Resort, Devanahalli, Chikkasanne, Bengaluru 562110",

  /* ---- RSVP & closing ---- */
  whatsapp: "918660506457",            /* RSVP replies go to this WhatsApp number: country code + number, no + */
  rsvpBy: "",                          /* e.g. "5 Nov 2026"; "" = hide the reply-by line */
  closing: "Your presence and blessings will make our celebration complete.",
  families: "With love — The Families of Balaji Sumukh & Pooja",
  hashtag: "",                         /* "" = auto #BalajiSumukhWedsPooja */
  music: "music/song.mp3",             /* "" = no music */

  dressCode: [],

  /* ---- colours (hex) ---- */
  theme: { ink: "#3d2a1a", blue: "#2f6b3a", sky: "#e4efd8", mist: "#fbf6e8", gold: "#c39a3e" },

  /* sections to hide: "date", "events", "venue", "gallery", "dress", "rsvp", "postcard" */
  hideSections: ["gallery", "dress"]
};
