/** Portfolio sections reached from the flower garden (each flower is unique). */
export type GardenSectionId =
  | 'education'
  | 'certifications'
  | 'skills'
  | 'experience'
  | 'projects'
  | 'contact';

export interface GardenFlowerMeta {
  id: GardenSectionId;
  label: string;
  accent: string;
  imageSrc: string;
  /** Light theme: warm pastel wash + flower chroma */
  sectionBgLight: string;
  /** Dark theme: same chroma on canvas-dark family (#121812 / #0c100c); no white/cream base */
  sectionBgDark: string;
}

export const GARDEN_FLOWERS: GardenFlowerMeta[] = [
  {
    id: 'education',
    label: 'Education',
    accent: '#8b6bb0',
    imageSrc: '/assets/flower-education.png',
    sectionBgLight: [
      'radial-gradient(ellipse 85% 65% at 82% 8%, rgba(139, 107, 176, 0.55), transparent 58%)',
      'radial-gradient(ellipse 70% 55% at 12% 88%, rgba(139, 107, 176, 0.22), transparent 55%)',
      'linear-gradient(165deg, #ede4f4 0%, #f6f0e8 38%, #e8dfd0 100%)',
    ].join(', '),
    sectionBgDark: [
      'radial-gradient(ellipse 85% 65% at 82% 8%, rgba(139, 107, 176, 0.38), transparent 58%)',
      'radial-gradient(ellipse 70% 55% at 12% 88%, rgba(139, 107, 176, 0.14), transparent 55%)',
      'linear-gradient(165deg, #1c1624 0%, #121812 45%, #0c100e 100%)',
    ].join(', '),
  },
  {
    id: 'certifications',
    label: 'Certifications',
    accent: '#6b8f5a',
    imageSrc: '/assets/flower-certifications.png',
    sectionBgLight: [
      'radial-gradient(ellipse 85% 65% at 82% 8%, rgba(107, 143, 90, 0.5), transparent 58%)',
      'radial-gradient(ellipse 70% 55% at 10% 90%, rgba(107, 143, 90, 0.2), transparent 55%)',
      'linear-gradient(165deg, #e6f0e4 0%, #f6f0e8 40%, #dfe8dd 100%)',
    ].join(', '),
    sectionBgDark: [
      'radial-gradient(ellipse 85% 65% at 82% 8%, rgba(107, 143, 90, 0.34), transparent 58%)',
      'radial-gradient(ellipse 70% 55% at 10% 90%, rgba(107, 143, 90, 0.12), transparent 55%)',
      'linear-gradient(165deg, #141a16 0%, #121812 48%, #0c100c 100%)',
    ].join(', '),
  },
  {
    id: 'skills',
    label: 'Skills',
    accent: '#d46b8a',
    imageSrc: '/assets/flower-skills.png',
    sectionBgLight: [
      'radial-gradient(ellipse 85% 65% at 82% 8%, rgba(212, 107, 138, 0.48), transparent 58%)',
      'radial-gradient(ellipse 70% 55% at 14% 88%, rgba(212, 107, 138, 0.18), transparent 55%)',
      'linear-gradient(165deg, #f5e6ec 0%, #f6f0e8 42%, #eadfd8 100%)',
    ].join(', '),
    sectionBgDark: [
      'radial-gradient(ellipse 85% 65% at 82% 8%, rgba(212, 107, 138, 0.32), transparent 58%)',
      'radial-gradient(ellipse 70% 55% at 14% 88%, rgba(212, 107, 138, 0.11), transparent 55%)',
      'linear-gradient(165deg, #1e161c 0%, #121812 46%, #0c100c 100%)',
    ].join(', '),
  },
  {
    id: 'experience',
    label: 'Experience',
    accent: '#c43a3a',
    imageSrc: '/assets/flower-experience.png',
    sectionBgLight: [
      'radial-gradient(ellipse 85% 65% at 82% 8%, rgba(196, 58, 58, 0.45), transparent 58%)',
      'radial-gradient(ellipse 70% 55% at 12% 88%, rgba(196, 58, 58, 0.16), transparent 55%)',
      'linear-gradient(165deg, #f5e4e4 0%, #f6f0e8 40%, #eadfd0 100%)',
    ].join(', '),
    sectionBgDark: [
      'radial-gradient(ellipse 85% 65% at 82% 8%, rgba(196, 58, 58, 0.28), transparent 58%)',
      'radial-gradient(ellipse 70% 55% at 12% 88%, rgba(196, 58, 58, 0.1), transparent 55%)',
      'linear-gradient(165deg, #1e1414 0%, #121812 45%, #0c100c 100%)',
    ].join(', '),
  },
  {
    id: 'projects',
    label: 'Projects',
    accent: '#e07a3a',
    imageSrc: '/assets/flower-projects.png',
    sectionBgLight: [
      'radial-gradient(ellipse 85% 65% at 82% 8%, rgba(224, 122, 58, 0.48), transparent 58%)',
      'radial-gradient(ellipse 70% 55% at 12% 88%, rgba(224, 122, 58, 0.18), transparent 55%)',
      'linear-gradient(165deg, #f7ebe0 0%, #f6f0e8 40%, #eadfd0 100%)',
    ].join(', '),
    sectionBgDark: [
      'radial-gradient(ellipse 85% 65% at 82% 8%, rgba(224, 122, 58, 0.3), transparent 58%)',
      'radial-gradient(ellipse 70% 55% at 12% 88%, rgba(224, 122, 58, 0.1), transparent 55%)',
      'linear-gradient(165deg, #1e1814 0%, #121812 46%, #0c100c 100%)',
    ].join(', '),
  },
  {
    id: 'contact',
    label: 'Contact',
    accent: '#5b8fd4',
    imageSrc: '/assets/flower-contact.png',
    sectionBgLight: [
      'radial-gradient(ellipse 85% 65% at 82% 8%, rgba(91, 143, 212, 0.48), transparent 58%)',
      'radial-gradient(ellipse 70% 55% at 10% 88%, rgba(91, 143, 212, 0.18), transparent 55%)',
      'linear-gradient(165deg, #e6edf8 0%, #f6f0e8 42%, #dde5ee 100%)',
    ].join(', '),
    sectionBgDark: [
      'radial-gradient(ellipse 85% 65% at 82% 8%, rgba(91, 143, 212, 0.32), transparent 58%)',
      'radial-gradient(ellipse 70% 55% at 10% 88%, rgba(91, 143, 212, 0.11), transparent 55%)',
      'linear-gradient(165deg, #141a22 0%, #121812 48%, #0c0f12 100%)',
    ].join(', '),
  },
];
