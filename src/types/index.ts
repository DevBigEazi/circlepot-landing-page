export interface Currency {
  name: string;
  symbol: string;
  flag?: string;
  icon?: string;
  banks: string[];
  mentoToken: string;
}

export interface Partner {
  name: string;
  logo?: string;
  region: string;
  methods: string[];
  countries: string[];
  brandColor?: string;
}

export interface TechPartner {
  name: string;
  logo: string;
  role: string;
  brandColor?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textLight: string;
  border: string;
  infoBg: string;
  successBg: string;
  warningBg: string;
  successBorder: string;
  warningBorder: string;
  hoverBg: string;
}