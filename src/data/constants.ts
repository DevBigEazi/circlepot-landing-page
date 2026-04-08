import type { Currency, Partner, TechPartner, FAQ } from "../types/index";
import { icons } from "./icons";

export const currencies: Record<string, Currency> = {
  NGN: {
    name: "Nigerian Naira",
    symbol: "₦",
    flag: "🇳🇬",
    banks: ["GTBank", "Zenith", "Access Bank"],
    stablecoinSymbol: "USDT",
  },
  KES: {
    name: "Kenyan Shilling",
    symbol: "KSh",
    flag: "🇰🇪",
    banks: ["Safaricom M-Pesa", "Equity Bank", "KCB"],
    stablecoinSymbol: "USDT",
  },
  GHS: {
    name: "Ghanaian Cedi",
    symbol: "GH₵",
    flag: "🇬🇭",
    banks: ["MTN Mobile Money", "GCB Bank", "Absa Bank"],
    stablecoinSymbol: "USDT",
  },
  UGX: {
    name: "Ugandan Shilling",
    symbol: "USh",
    flag: "🇺🇬",
    banks: ["Stanbic Bank", "Centenary Bank", "DFCU Bank"],
    stablecoinSymbol: "USDT",
  },
  ZAR: {
    name: "South African Rand",
    symbol: "R",
    flag: "🇿🇦",
    banks: ["Standard Bank", "FNB", "Nedbank"],
    stablecoinSymbol: "USDT",
  },
  USD: {
    name: "US Dollar",
    symbol: "$",
    flag: "🇺🇸",
    banks: ["Bank of America", "Chase", "Wells Fargo"],
    stablecoinSymbol: "USDT",
  },
  EUR: {
    name: "Euro",
    symbol: "€",
    flag: "🇪🇺",
    banks: ["Deutsche Bank", "BNP Paribas", "Santander"],
    stablecoinSymbol: "USDT",
  },
  GBP: {
    name: "British Pound",
    symbol: "£",
    flag: "🇬🇧",
    banks: ["Barclays", "HSBC", "Lloyds"],
    stablecoinSymbol: "USDT",
  },
  CAD: {
    name: "Canadian Dollar",
    symbol: "C$",
    flag: "🇨🇦",
    banks: ["RBC", "TD Bank", "Scotiabank"],
    stablecoinSymbol: "USDT",
  },
  XAF: {
    name: "CFA Franc",
    symbol: "FCFA",
    flag: "🇨🇲",
    banks: ["Ecobank", "UBA", "Société Générale"],
    stablecoinSymbol: "USDT",
  },
  INR: {
    name: "Indian Rupee",
    symbol: "₹",
    flag: "🇮🇳",
    banks: ["SBI", "HDFC", "ICICI"],
    stablecoinSymbol: "USDT",
  },
};

export const partners: Partner[] = [
  {
    name: "Fonbnk",
    logo: icons.fonbnkLogo,
    region: "Africa",
    methods: ["Mobile Money", "Bank Transfer"],
    countries: ["Nigeria", "Kenya", "Ghana"],
    brandColor: "#35D07F",
  },
  {
    name: "Quidax",
    logo: icons.quidaxLogo,
    region: "Africa",
    methods: ["Bank Transfer"],
    countries: ["Nigeria"],
    brandColor: "#382383",
  },
  {
    name: "Yellow Card",
    logo: icons.yellowCardLogo,
    region: "Africa",
    methods: ["Bank Transfer", "Mobile Money"],
    countries: ["15+ African countries"],
    brandColor: "#FFCF33",
  },
  {
    name: "CashRamp",
    logo: icons.cashRampLogo,
    region: "Global",
    methods: ["P2P", "Bank Transfer"],
    countries: ["Global"],
    brandColor: "#00BFA5",
  },
  {
    name: "Transfi",
    logo: icons.transfiLogo,
    region: "Global",
    methods: ["Bank Transfer", "Card"],
    countries: ["100+ Countries"],
    brandColor: "#1A4FD6",
  },
  {
    name: "Partna",
    logo: icons.partnaLogo,
    region: "Global",
    methods: ["Card", "Bank Transfer"],
    countries: ["50+ Countries"],
    brandColor: "#2C5B75",
  },
];

export const techPartners: TechPartner[] = [
  {
    name: "Avalanche",
    logo: icons.avaxLogo,
    role: "Blockchain Infrastructure",
    brandColor: "#E84142",
  },
  {
    name: "Dynamic",
    logo: icons.dynamicLogo,
    role: "Authentication & Wallet SDK",
    brandColor: "#000000",
  },
  {
    name: "ZeroDev",
    logo: icons.zerodevLogo,
    role: "Smart Account Infrastructure",
    brandColor: "#5F5CF1",
  },
];

export const faqs: FAQ[] = [
  {
    question: "How do I add money to my account?",
    answer:
      "Use our third-party partner networks like Fonbnk, Yellow Card, Quidax, or Transfi to deposit via bank transfer, mobile money (M-Pesa, MTN Momo), or cards. Your local currency is converted to USDT (digital dollar on Avalanche) automatically when you deposit through our partners.",
  },
  {
    question: "Which digital currencies are supported?",
    answer:
      "Currently, we support USDT which maintains stable value pegged to the US Dollar on the Avalanche blockchain.",
  },
  {
    question: "How do I withdraw to my local bank?",
    answer:
      "Convert your digital currency (USDT) back to local currency through our third-party partners. Withdraw directly to your bank account, mobile money wallet, or digital wallet. All withdrawals are instant.",
  },
  {
    question: "Are there any fees?",
    answer:

      "We charge minimal fees: 1% on payouts ≤$1,000 (or flat $10 for larger payouts), $0.50 to make circles public, 1% late payment fee, $0.50 for external transfers to wallets/exchanges, and small fees for early goal withdrawals (1.0% at 0-24% progress down to 0.1% at completion).",
  },
  {
    question: "Is my money safe?",
    answer:
      "Yes! We use secure ZeroDev smart accounts powered by Avalanche. You maintain full control over your funds with seamless login via email or Google thanks to Dynamic xyz. Battle-tested systems handle all operations with full transparency.",
  },
];
