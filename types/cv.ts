export interface CVBasics {
  dob: string
  name: string
  label: string
  picture: string
  email: string
  phone: string
  website: string
  location: {
    address: string
    postalCode: string
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
}

export interface Education {
  institution: string
  area: string
  studyType: string
  startDate: string
  endDate: string
  gpa?: string
  courses?: string[]
}

export interface Experience {
  companyName: string
  title: string
  startDate: string
  endDate: string
  summary: string
  technologies: string[]
}

export interface Skill {
  name: string
  level: string
  keywords: string[]
  firstUsed: string
  lastUsed: string
  proficiencyLevel: number
}

export interface Achievement {
  type: 'certifications' | 'conferences' | 'courses'
  title: string
  date: string
  issuer?: string
  url?: string
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