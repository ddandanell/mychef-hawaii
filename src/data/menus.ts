import type { IslandId } from './islands';

export interface SampleCourse {
  course: string;
  name: string;
  note: string;
}

export interface SampleMenu {
  title: string;
  intro: string;
  courses: SampleCourse[];
}

const SHARED_CLOSE: SampleCourse = {
  course: 'Dessert',
  name: 'Lilikoi cheesecake, mac-nut brittle',
  note: 'Or coconut haupia, or a fruit plate if you want the night light.',
};

export const sampleMenus: Record<IslandId, SampleMenu> = {
  maui: {
    title: 'A Maui villa dinner, three courses',
    intro: 'Built for a Wailea or Kapalua kitchen — not a laminated carte. You pick the catch; we shop that day.',
    courses: [
      {
        course: 'First',
        name: 'Ahi poke, inamona, ogo, lime',
        note: 'Chilled, generous, the table goes quiet.',
      },
      {
        course: 'Main',
        name: 'Macadamia-crusted fresh catch, ginger-scallion, island greens',
        note: 'Whatever ran that morning — mahi, ono, or opakapaka.',
      },
      SHARED_CLOSE,
    ],
  },
  oahu: {
    title: 'An Oʻahu villa dinner, three courses',
    intro: 'Kahala, Ko Olina, Kailua — we cook in the kitchen you have, including compact condos.',
    courses: [
      {
        course: 'First',
        name: 'Ahi poke tostada, avocado, chili-ginger',
        note: 'Or a chilled cucumber-and-crab start if the kids are at the table.',
      },
      {
        course: 'Main',
        name: 'Miso-glazed fresh catch, baby bok choy, steamed rice',
        note: 'Honolulu fish-market shopping the same day as service.',
      },
      SHARED_CLOSE,
    ],
  },
  kauai: {
    title: 'A Kauaʻi estate dinner, three courses',
    intro: 'Princeville mist or Poʻipū sun — same kitchen standard, published starting prices.',
    courses: [
      {
        course: 'First',
        name: 'Ahi poke, kukui, sweet onion',
        note: 'Simple, cold, the North Shore version of a handshake.',
      },
      {
        course: 'Main',
        name: 'Wood-grilled catch, mango salsa, coconut rice',
        note: 'South Shore kitchens get the fire; North Shore gets the covered lānai plan.',
      },
      SHARED_CLOSE,
    ],
  },
  bigisland: {
    title: 'A Kona–Kohala dinner, three courses',
    intro: 'West-side villas first. Named farms only when we have them in writing — the plate still sings.',
    courses: [
      {
        course: 'First',
        name: 'Kanpachi crudo, citrus, chili oil',
        note: 'Or ahi poke when the boat is in.',
      },
      {
        course: 'Main',
        name: 'Coffee-rubbed catch or ranch steak, Hāmākua mushrooms',
        note: 'Kona coffee on the crust only as coffee — origin labeled when the law requires it.',
      },
      SHARED_CLOSE,
    ],
  },
};

export const HOW_IT_WORKS = [
  { n: '01', title: 'Tell us the night', body: 'Island, dates, headcount, villa or house. Two minutes. WhatsApp or the quote form.' },
  { n: '02', title: 'Menu in 48 hours', body: 'One or two directions around your kitchen, kids, and allergies. You edit until it is yours.' },
  { n: '03', title: 'Written quote', body: 'Starting price, service 20%, GET up to 4.712%, any zone fee — each on its own line.' },
  { n: '04', title: 'We cook, we leave it clean', body: 'Shop that day, arrive ~3 hours before, serve, pack out. The dishwasher is empty.' },
] as const;
