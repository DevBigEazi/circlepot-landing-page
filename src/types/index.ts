export interface Currency {
  name: string;
  symbol: string;
  flag: string;
  banks: string[];
  mentoToken: string;
}

export interface Partner {
  name: string;
  region: string;
  methods: string[];
  countries: string[];
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