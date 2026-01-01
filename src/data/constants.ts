import type { Currency, Partner, TechPartner, FAQ } from '../types/index';
import { icons } from './icons';

export const currencies: Record<string, Currency> = {
  NGN: {
    name: "Nigerian Naira",
    symbol: "₦",
    flag: "🇳🇬",
    banks: ["GTBank", "Zenith", "Access Bank"],
    mentoToken: "cNGN",
  },
  KES: {
    name: "Kenyan Shilling",
    symbol: "KSh",
    flag: "🇰🇪",
    banks: ["Safaricom M-Pesa", "Equity Bank", "KCB"],
    mentoToken: "cKES",
  },
  GHS: {
    name: "Ghanaian Cedi",
    symbol: "GH₵",
    flag: "🇬🇭",
    banks: ["MTN Mobile Money", "GCB Bank", "Absa Bank"],
    mentoToken: "cGHS",
  },
  UGX: {
    name: "Ugandan Shilling",
    symbol: "USh",
    flag: "🇺🇬",
    banks: ["Stanbic Bank", "Centenary Bank", "DFCU Bank"],
    mentoToken: "USDm",
  },
  ZAR: {
    name: "South African Rand",
    symbol: "R",
    flag: "🇿🇦",
    banks: ["Standard Bank", "FNB", "Nedbank"],
    mentoToken: "cZAR",
  },
  USD: {
    name: "US Dollar",
    symbol: "$",
    flag: "🇺🇸",
    banks: ["Bank of America", "Chase", "Wells Fargo"],
    mentoToken: "USDm",
  },
  EUR: {
    name: "Euro",
    symbol: "€",
    flag: "🇪🇺",
    banks: ["Deutsche Bank", "BNP Paribas", "Santander"],
    mentoToken: "cEUR",
  },
  GBP: {
    name: "British Pound",
    symbol: "£",
    flag: "🇬🇧",
    banks: ["Barclays", "HSBC", "Lloyds"],
    mentoToken: "USDm",
  },
  CAD: {
    name: "Canadian Dollar",
    symbol: "C$",
    flag: "🇨🇦",
    banks: ["RBC", "TD Bank", "Scotiabank"],
    mentoToken: "USDm",
  },
  XAF: {
    name: "CFA Franc",
    symbol: "FCFA",
    flag: "🇨🇲",
    banks: ["Ecobank", "UBA", "Société Générale"],
    mentoToken: "USDm",
  },
  INR: {
    name: "Indian Rupee",
    symbol: "₹",
    flag: "🇮🇳",
    banks: ["SBI", "HDFC", "ICICI"],
    mentoToken: "USDm",
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
    name: "Celo",
    logo: icons.celoLogo,
    role: "Blockchain Infrastructure",
    brandColor: "#35D07F",
  },
  {
    name: "Mento Labs",
    logo: icons.mentoLogo,
    role: "Stable Asset Protocol",
    brandColor: "#00D1FF",
  },
  {
    name: "Thirdweb",
    logo: icons.thirdwebLogo,
    role: "Smart Contract Scaling",
    brandColor: "#6B46C1",
  },
];

export const faqs: FAQ[] = [
  {
    question: "How do I add money to my account?",
    answer: "Use our third-party partner networks like Fonbnk, Yellow Card, Quidax, or Transfi to deposit via bank transfer, mobile money (M-Pesa, MTN Momo), or cards. Your local currency is converted to stablecoin (digital dollar on blockchain) automatically when you deposit through our partners.",
  },
  {
    question: "Which digital currencies are supported?",
    answer: "Currently, we support stablecoin (USDm) which maintains stable value pegged to the US Dollar",
  },
  {
    question: "How do I withdraw to my local bank?",
    answer: "Convert your digital currency (stablecoin) back to local currency through our third-party partners. Withdraw directly to your bank account, mobile money wallet, or digital wallet. All withdrawals are instant.",
  },
  {
    question: "Are there any fees?",
    answer: "We charge minimal fees: 1% on payouts ≤$1,000 (or flat $10 for larger payouts), $0.50 to make circles public, 1% late payment fee, $0.20 for external transfers to wallets/exchanges, and small penalties for early goal withdrawals (1.0% at 0-24% progress down to 0% at completion).",
  },
  {
    question: "Is my money safe?",
    answer: "Yes! We use secure smart contract EOA wallets that you control completely. Battle-tested smart contract systems handle circle operations and individual savings with full transparency. Recovery is easy through email - no complex passwords to remember.",
  }
];