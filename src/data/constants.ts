import type { Currency, Partner, FAQ } from '../types/index';

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
    mentoToken: "cUSD",
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
    mentoToken: "cUSD",
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
    mentoToken: "cUSD",
  },
  CAD: {
    name: "Canadian Dollar",
    symbol: "C$",
    flag: "🇨🇦",
    banks: ["RBC", "TD Bank", "Scotiabank"],
    mentoToken: "cUSD",
  },
  XAF: {
    name: "CFA Franc",
    symbol: "FCFA",
    flag: "🇨🇲",
    banks: ["Ecobank", "UBA", "Société Générale"],
    mentoToken: "cUSD",
  },
  INR: {
    name: "Indian Rupee",
    symbol: "₹",
    flag: "🇮🇳",
    banks: ["SBI", "HDFC", "ICICI"],
    mentoToken: "cUSD",
  },
};

export const partners: Partner[] = [
  {
    name: 'Fonbnk',
    region: 'Africa',
    methods: ['Mobile Money', 'Bank Transfer'],
    countries: ['Nigeria', 'Kenya', 'Ghana'],
  },
  {
    name: 'Partna',
    region: 'Global',
    methods: ['Card', 'Bank Transfer'],
    countries: ['50+ Countries'],
  },
  {
    name: 'Quidax',
    region: 'Africa',
    methods: ['Bank Transfer'],
    countries: ['Nigeria'],
  },
  {
    name: 'Yellow Card',
    region: 'Africa',
    methods: ['Bank Transfer', 'Mobile Money'],
    countries: ['15+ African countries'],
  },
  {
    name: 'Transfi',
    region: 'Global',
    methods: ['Bank Transfer', 'Card'],
    countries: ['100+ Countries'],
  },
  {
    name: 'CashRamp',
    region: 'Global',
    methods: ['P2P', 'Bank Transfer'],
    countries: ['Global'],
  },
];

export const faqs: FAQ[] = [
  {
    question: "How do I add money to my account?",
    answer: "Use our third-party partner networks like Fonbnk, Yellow Card, Quidax, or Transfi to deposit via bank transfer, mobile money (M-Pesa, MTN Momo), or cards. Your local currency is converted to stablecoin (digital dollar on blockchain) automatically when you deposit through our partners.",
  },
  {
    question: "Which digital currencies are supported?",
    answer: "Currently, we support stablecoin (cUSD) which maintains stable value pegged to the US Dollar. Additional local stablecoins such as Kenya Shilling (cKES), Euro (cEUR), Nigerian Naira (cNGN), South African Rand (cZAR), and Ghanaian Cedis (cGHS) are coming soon. All from Mento labs",
  },
  {
    question: "How do I withdraw to my local bank?",
    answer: "Convert your digital currency (stablecoin) back to local currency through our third-party partners. Withdraw directly to your bank account, mobile money wallet, or digital wallet. All withdrawals are instant.",
  },
  {
    question: "Are there any fees?",
    answer: "We charge minimal fees: 0.2% maintenance fee on member payouts (circle creators pay 0%), $0.50 fixed fee for making circles public, 1% late fee for late payments in circles, and small penalties for early goal withdrawals (1.0% at 0-24% progress, 0.6% at 25-49%, 0.3% at 50-74%, 0.1% at 75-99%, and 0% at 100% completion).",
  },
  {
    question: "Is my money safe?",
    answer: "Yes! We use secure smart contract EOA wallets that you control completely. Battle-tested smart contract systems handle circle operations and individual savings with full transparency. Recovery is easy through email/phone - no complex passwords to remember.",
  },
  {
    question: "Which countries are supported?",
    answer: "We support 35+ local currencies including NGN, KES, GHS, ZAR, USD, EUR, GBP, CAD, XAF, INR and more through our third-party global partner.",
  },
  {
    question: "How does the app work?",
    answer: "Circlepot works like any normal savings app. Sign up with email or google, no complex setup needed. All transactions are almost automatic and free. You maintain full control of your funds while enjoying simple, familiar banking.",
  },
  {
    question: "What happens if I miss a payment?",
    answer: "Our system automatically tries to collect your payment every 12 hours during a grace period (12 hours for daily, and 48 hours for weekly/monthly circles). If you miss the deadline, a 1% late fee is deducted from your security deposit, and your onchain credit score decreases slightly.",
  },
];