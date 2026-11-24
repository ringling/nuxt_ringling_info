export interface CVBasics {
  name: string
  label: string
  picture: string
  email: string
  website: string
  location: {
    city: string
    countryCode: string
    region: string
  }
  profiles: Array<{
    network: string
    username: string
    url: string
  }>
  summary: string[]
}

export interface Language {
  language: string
  fluency: string
  proficiency: string
  da?: { language?: string, fluency?: string }
}

export interface Education {
  institution: string
  area: string
  studyType: string
  startDate: string
  endDate: string
  gpa?: string
  courses?: string[]
  print?: boolean
  printTitle?: string
  printMeta?: string
  da?: { printTitle?: string, printMeta?: string }
}

export interface Experience {
  companyName: string
  title: string
  startDate: string
  endDate: string
  summary: string
  technologies: string[]
  venture?: boolean
  domain?: string
  group?: string
  note?: string
  printTitle?: string
  da?: { title?: string, summary?: string, note?: string, printTitle?: string }
}

export interface Skill {
  name: string
  level: string
  keywords: string[]
  firstUsed: string
  lastUsed: string
  proficiencyLevel: number
  pinned?: boolean
  type?: string
  core?: boolean
  printName?: string
  da?: { name?: string, printName?: string }
}

export interface Achievement {
  type: 'certifications' | 'conferences' | 'courses' | 'teaching'
  title: string
  date?: string
  period?: string
  documentation?: string
  /** Subgroup on the web CV, see pages/cv/index.vue. */
  group?: string
  /** false hides the entry on the web CV. */
  web?: boolean
  issuer?: string
  url?: string
  description?: string
  print?: boolean | 'coursework'
  printTitle?: string
  printMeta?: string
  da?: { printTitle?: string, printMeta?: string }
}

export interface PrintSettings {
  lede: string
  profile: string[]
  detailedSince: number
  earlier: { period: string, text: string }
  domains: Array<{ key: string, en: string, da: string }>
  da?: { lede?: string, profile?: string[], earlier?: { text?: string } }
}

export interface CVData {
  basics: CVBasics
  languages: Language[]
  educations: Education[]
  experiences: Experience[]
  skills: Skill[]
  achievements: {
    list: Achievement[]
  }
  print: PrintSettings
}

export interface CVResponse {
  cv: CVData
}

// Component Props Interfaces
export interface ExperienceProps {
  item: Experience
  showDetails?: boolean
}

export interface MenuProps {
  bgColor?: string
}

export interface SkillProps {
  item: Skill
}

export interface LanguageProps {
  item: Language
}

export interface EducationProps {
  item: Education
}

export interface CertificationProps {
  item: Achievement
}

export interface ConferenceProps {
  item: Achievement
}

export interface CourseProps {
  item: Achievement
}