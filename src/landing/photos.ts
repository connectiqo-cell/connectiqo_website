// Every photograph on the landing page. Each id renders a placeholder until a
// matching original is processed by `npm run images` (see photos/README.md).
//
// brief    – what to shoot / source, shown on the placeholder
// minWidth – smallest acceptable native width for the largest display size
// tone     – placeholder gradient, picked to match the intended light

export type PhotoSpec = {
  alt: string
  brief: string
  minWidth: number
  tone: [string, string]
}

const person = (alt: string, brief: string, tone: [string, string]): PhotoSpec => ({
  alt,
  brief: `Candid portrait — ${brief}`,
  minWidth: 1600,
  tone,
})

export const PHOTOS = {
  'hero-bg': {
    alt: 'A young man sitting by a floor-to-ceiling window, looking out over the city at sunset',
    brief: 'Hero scene — someone by a big window looking over the city at sunset. No text or UI on top.',
    minWidth: 3840,
    tone: ['#F4DCCD', '#B98A74'],
  },
  'hero-bg-mobile': {
    alt: 'A young man sitting by a floor-to-ceiling window, looking out over the city at sunset',
    brief: 'Hero scene, mobile crop — same moment, portrait framing',
    minWidth: 1800,
    tone: ['#F4DCCD', '#B98A74'],
  },
  'hero-poster-1': {
    alt: '',
    brief: 'Full hero artwork 1 — collage of creators with headline and button painted in (no menu bar)',
    minWidth: 2560,
    tone: ['#F8EDE4', '#D9C2B4'],
  },
  'hero-poster-2': {
    alt: '',
    brief: 'Full hero artwork 2 — two friends on a purple sofa with headline and button painted in',
    minWidth: 2560,
    tone: ['#F8EDE4', '#B9A2C8'],
  },
  'call-music': {
    alt: '',
    brief: 'Call card — musician with headphones and a guitar, home studio',
    minWidth: 1000,
    tone: ['#D9BFAE', '#6E5448'],
  },
  'call-collab': {
    alt: '',
    brief: 'Call card — creator in a cap, smiling, bookshelf behind',
    minWidth: 1000,
    tone: ['#D9BFAE', '#6E5448'],
  },
  'call-creator': {
    alt: '',
    brief: 'Call card — photographer holding a camera, smiling',
    minWidth: 1000,
    tone: ['#D9BFAE', '#6E5448'],
  },
  'call-mentor': {
    alt: '',
    brief: 'Call card — mentor resting chin on hand, warm smile',
    minWidth: 1000,
    tone: ['#D9BFAE', '#6E5448'],
  },
  connection: {
    alt: 'A young man leaning in to a laptop, mid-conversation with a woman on a Connectiqo video call',
    brief: 'Editorial — two people genuinely talking, one on a laptop call, kitchen or café, window light',
    minWidth: 3200,
    tone: ['#E4D2BF', '#8E6D57'],
  },
  'person-meera': person('Meera Iyer at her piano, taking a lesson over a Connectiqo call', 'musician at an instrument', ['#D8B597', '#7B513C']),
  'person-kabir': person('Kabir Singh running along the waterfront at sunrise', 'runner, city dawn', ['#CFC7BC', '#58606A']),
  'person-tara': person('Tara Joseph, chin in hand, in her apartment at dusk', 'creator at home, evening', ['#D3C6BD', '#6C5E5A']),
  'person-ayaan': person('Ayaan Kapoor in sunglasses under purple light', 'tech creator, studio light', ['#6B4C8A', '#1E1526']),
  'person-rhea': person('Rhea Malhotra in sunglasses, warm evening light', 'stylist, evening light', ['#B98A6A', '#3A2620']),
  'person-vihaan': person('Vihaan Rao singing into a microphone', 'singer with a mic, stage light', ['#7A4C8E', '#20142A']),
  'person-sana': person('Sana Qureshi wearing gaming headphones', 'streamer with headphones', ['#6E5A9A', '#1C1830']),
  'person-isha': person('Isha Menon in workout clothes at sunset', 'coach, golden hour', ['#D2B39A', '#5A4436']),
  'person-arjun': person('Arjun Mehta in glasses, looking into the camera', 'founder, warm light', ['#B89A84', '#2E2522']),
  'person-naina': person('Naina Das in soft violet light', 'astrologer, moody light', ['#8A5A7A', '#241624']),
  'call-guest': {
    alt: '',
    brief: 'Self-view tile — someone listening closely, laptop light',
    minWidth: 800,
    tone: ['#C9BBAE', '#4F4640'],
  },
  internet: {
    alt: 'A person on a rooftop at dusk looking out over a city as the lights come on',
    brief: 'Full-bleed — someone looking over a city at dusk, lights coming on, small human moments in windows',
    minWidth: 3840,
    tone: ['#8D7A78', '#2A2430'],
  },
  'internet-mobile': {
    alt: 'A person on a rooftop at dusk looking out over a city as the lights come on',
    brief: 'Mobile crop — same scene, portrait framing, figure lower third',
    minWidth: 1800,
    tone: ['#8D7A78', '#2A2430'],
  },
  creator: {
    alt: 'A creator laughing on a video call from her laptop in a sunlit café',
    brief: 'Creator on a call from a café, laptop showing the Connectiqo logo, warm daylight (3:2 landscape)',
    minWidth: 2400,
    tone: ['#D8BFA8', '#6E4F40'],
  },
  'voice-priya': person('Priya Sharma', 'young woman, outdoors, soft overcast light', ['#D4C3B4', '#7A6556']),
  'voice-neel': person('Neel Kapoor', 'young man, studio desk', ['#CCC0B4', '#5F554D']),
  'voice-kavya': {
    alt: 'Kavya, a photographer, framing a shot with her camera, a Connectiqo call open on her laptop',
    brief: 'Photographer at her desk with camera, Connectiqo call on the laptop (3:2 landscape)',
    minWidth: 1600,
    tone: ['#DCC7B3', '#836550'],
  },
  'voice-meher': {
    alt: 'Meher holding a yoga pose in her living room while her coach guides her over a Connectiqo call',
    brief: 'Yoga at home, coach on a Connectiqo call on the laptop, morning sun (3:2 landscape)',
    minWidth: 1600,
    tone: ['#E2C9A8', '#7A5A40'],
  },
  finale: {
    alt: 'Friends sitting together on a rooftop at sunset, the city skyline behind them',
    brief: 'Full-bleed — friends on a rooftop at golden hour, backs to camera, skyline',
    minWidth: 3840,
    tone: ['#E8B98C', '#5A3A36'],
  },
  'finale-mobile': {
    alt: 'Friends sitting together on a rooftop at sunset, the city skyline behind them',
    brief: 'Mobile crop — same scene, portrait framing',
    minWidth: 1800,
    tone: ['#E8B98C', '#5A3A36'],
  },
} satisfies Record<string, PhotoSpec>

export type PhotoId = keyof typeof PHOTOS
