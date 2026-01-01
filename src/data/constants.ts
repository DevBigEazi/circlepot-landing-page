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
    answer: "Our system automatically tries to send you constant notifications for reminders before the grace period (12 hours for daily, and 48 hours for weekly/monthly circles) elapsed. If you miss the deadline, a 1% late fee is deducted from your security collateral deposited, and your onchain credit score decreases slightly.",
  },
  {
    question: "What is a savings circle and how does it work?",
    answer: "A savings circle is a group of 5-20 people who contribute the same amount regularly (daily, weekly, or monthly). Each round, one member receives the full pot until everyone gets their turn. It's like a traditional community savings group, but automated and secure with instant payouts.",
  },
  {
    question: "How much do I need to deposit to join a circle?",
    answer: "You need to deposit one full contribution amount plus a small buffer when joining. This ensures commitment and protects other members. Your deposit starts earning interest immediately, so your money is always working for you.",
  },
  {
    question: "What happens to my money while waiting for my payout?",
    answer: "Your money is automatically placed in secure savings accounts from the moment you join. It earns interest continuously, which is shared among all members at the end of the circle based on your payment performance.",
  },
  {
    question: "How is the payout order determined?",
    answer: "Payout positions are assigned based on your on-chain reputation/credit score when the circle starts. Circle creators always receive the first payout. Members with higher reputation (built through successful circle completions) get better positions in the order.",
  },
  {
    question: "What are Performance Points and how do they work?",
    answer: "You earn +10 Performance Points for every on-time contribution. These points determine your share of the Community Reward Pool at circle completion. The pool consists of 90% of all interest earned plus late fees collected. Late payments earn no points.",
  },
  {
    question: "What happens if a circle doesn't fill up?",
    answer: "Circles need 60% of max capacity to start within the Ultimatum Window (7 days for daily/weekly, 14 days for monthly). If this threshold isn't met, the circle becomes DEAD. Members can withdraw their principal, and the platform captures 100% of interest earned during the pending phase.",
  },
  {
    question: "Can I create my own circle?",
    answer: "Yes! Creating a private circle is free. You set the contribution amount ($1-$5k), frequency (daily/weekly/monthly), and capacity (5-20 members). As the creator, you always receive the first payout and pay 0% platform fees. Making your circle public costs $0.50 USDm.",
  },
  {
    question: "What is the difference between private and public circles?",
    answer: "Private circles are free to create and only people you invite can join. Public circles cost $0.50 to create but are visible to all Circlepot users, helping you fill the circle faster. Both types work identically once active.",
  },
  {
    question: "How does my credit score work?",
    answer: "We use FICO and VantageScore models adapted for on-chain activity. Your score is based on payment history (35%), circle completion rate (30%), time on platform (15%), circle diversity (10%), and recent activity (10%). Higher scores unlock lower collateral requirements, better payout positions, and access to premium circles.",
  },
  {
    question: "Do I need to pay gas fees?",
    answer: "No! All transactions on Circlepot are completely gasless. We sponsor all gas fees through Thirdweb's EIP-7702 paymaster infrastructure. You never need to worry about transaction costs or holding extra crypto for gas.",
  },
  {
    question: "What if I lose access to my account?",
    answer: "Your account is tied directly to your email or phone number. There are no seed phrases to memorize or lose, but it's critical to keep your linked email account secure and private, as your funds are accessed through it.",
  },
  {
    question: "Can I withdraw my money before the circle ends?",
    answer: "You can withdraw after receiving your payout. If you need to exit early before your turn, contact support for assistance. Note that leaving a circle may affect your reputation score and future circle participation.",
  },
  {
    question: "How do Personal Savings Goals work?",
    answer: "Set a target amount and deadline for individual savings. Your funds are deposited into yield vaults and earn interest. You can withdraw anytime, but early withdrawal incurs penalties that decrease as you get closer to your goal (1% at 0-24% progress down to 0% at completion).",
  },
  {
    question: "What's the minimum and maximum contribution amount?",
    answer: "You can create circles with contributions ranging from $1 to $5,000 per period. This flexibility allows both small community circles and larger investment groups to use the platform effectively.",
  },
  {
    question: "How long does it take to receive my payout?",
    answer: "Payouts are automatic and occur on the final day of your scheduled round. The funds are instantly available in your account. If the contract needs additional liquidity, it automatically redeems shares from the yield vault to ensure immediate payment.",
  },
  {
    question: "Is Circlepot regulated or licensed?",
    answer: "Circlepot operates as a decentralized savings platform on Celo blockchain. We work with licensed, regulated third-party partners (Fonbnk, Yellow Card, Transfi, etc.) for fiat on/off-ramps in your region. Always check local regulations regarding cryptocurrency use.",
  },
  {
    question: "What blockchain is Circlepot built on?",
    answer: "Circlepot is built on Celo L2, an EVM-compatible blockchain known for fast, affordable, and mobile-first transactions. We use Mento Protocol's USDm stablecoin for stability and wide accessibility across the Celo ecosystem.",
  },
  {
    question: "Can I participate in multiple circles at once?",
    answer: "Yes! You can join as many circles as you want simultaneously, as long as you have sufficient funds to cover the required collateral for each circle. This helps you diversify your savings and build your reputation faster.",
  },
  {
    question: "What happens to my reputation if I complete a circle successfully?",
    answer: "Successfully completing circles improves your on-chain credit score. This unlocks benefits like lower collateral requirements, priority payout positions in future circles, access to larger contribution circles, and potential fee discounts for top-tier users.",
  },
  {
    question: "Can I invite friends to join my circle?",
    answer: "Absolutely! Share your private circle link with friends and family. Each circle can have 5-20 members. When your invitees join and complete circles successfully, you build a trusted savings community together.",
  },
  {
    question: "What makes Circlepot different from traditional ROSCAs?",
    answer: "Unlike traditional ROSCAs where money sits idle, Circlepot puts every dollar to work immediately in DeFi yield vaults. You also get complete transparency through blockchain, automated enforcement, no geographic limits, instant payouts, built-in credit scoring, and protection through smart contracts.",
  },
];