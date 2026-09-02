// Products / projects, sourced from Igudy's work at Ignovations.
import nectallMobileApp from "../assets/ignovations/NectallMobileApp.jpg";
import nectallWebApp from "../assets/ignovations/NectallWebApp.png";
import nectallLandingPage from "../assets/ignovations/NectallLandingPage.png";
import eduArkWebApp from "../assets/ignovations/EduArkWebApp.jpg";
import eduArkMobileApp from "../assets/ignovations/EduArkMobileApp.jpg";
import fundora from "../assets/ignovations/Fundora.jpg";
import nutrisnap from "../assets/ignovations/Nutrisnap.jpg";
import theGreats from "../assets/ignovations/TheGreatsWebApp.png";
import shirtFusion from "../assets/ignovations/image1.png";
import shopiverse from "../assets/ignovations/image9.png";
import hoobank from "../assets/ignovations/image5.png";
import evogym from "../assets/ignovations/image11.png";
import frznfit from "../assets/ignovations/frznfit.jpg";
import aura from "../assets/ignovations/Auraapparel.jpg";
import vibekicks from "../assets/ignovations/nikeredesign.jpg";
import neatCleaning from "../assets/ignovations/neat_cleaning.jpg";
import navigate from "../assets/ignovations/navigate-podcast.jpg";
import pronef from "../assets/ignovations/pronef.png";
import nftopia from "../assets/ignovations/nftmarket.jpg";
import igudyport from "../assets/ignovations/igudyport.png";
import hyperrealms from "../assets/ignovations/hyperrealms_square.png";
import brikcrm from "../assets/ignovations/brik-crm.png";
import seabaas from "../assets/ignovations/seabaas.png";
import shelfmates from "../assets/ignovations/shelfmates.png";
import ignovations from "../assets/ignovations/ignovations.png";

export const PRODUCT_CATEGORIES = [
  "all",
  "apps",
  "web",
  "fashion",
  "fintech",
  "portfolio",
  "others",
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];
export type ProductCategorySlug = Exclude<ProductCategory, "all">;

export type Product = {
  id: number;
  image: string;
  title: string;
  desc: string;
  link: string;
  categories: ProductCategorySlug[];
};

const nectallDesc =
  "Nectall is a professional networking platform for events and everyday connections. Scan a QR code to connect instantly, then manage every contact in one secure hub.";
const nectallWebDesc =
  "The Nectall web application gives users a full dashboard to manage connections, review activity, and run their network from any browser.";
const nectallSiteDesc =
  "The Nectall website introduces the platform to new users, communicates the value clearly, and drives sign-ups for organizations and professionals.";
const eduArkDesc =
  "EduArk is an all-in-one school management platform for administrators, teachers, parents, and students. Enrollment, classes, attendance, finances, and academic records in one role-based system.";

export const products: Product[] = [
  {
    id: 1,
    image: nectallMobileApp,
    title: "Nectall Mobile App",
    desc: nectallDesc,
    link: "https://apps.apple.com/ng/app/nectall/id6761627133",
    categories: ["apps"],
  },
  {
    id: 22,
    image: brikcrm,
    title: "Brik CRM Mobile App",
    desc: "The Brik CRM mobile app helps field-service teams run the job from anywhere, managing leads, estimates, scheduling, jobs, invoices, and payments so technicians and the office stay in sync.",
    link: "https://brikcrm.com/",
    categories: ["apps"],
  },
  {
    id: 23,
    image: brikcrm,
    title: "Brik CRM Web Platform",
    desc: "Brik CRM is an all-in-one field-service management platform: leads, estimates, jobs, scheduling, invoicing, and Brik Pay payments in one connected workspace for home-service businesses.",
    link: "https://app.brikcrm.com/",
    categories: ["web"],
  },
  {
    id: 24,
    image: seabaas,
    title: "SeaBaas Core Banking",
    desc: "A modern core-banking platform for banks and fintechs, built as a large-scale micro-frontend web application by a big engineering team. I contributed to the frontend, including the User & Access Module — maker/checker approvals, permission-based access, and transaction limits — that powers secure day-to-day banking operations.",
    link: "https://bepeerless.co/",
    categories: ["fintech", "web"],
  },
  {
    id: 25,
    image: shelfmates,
    title: "ShelfMates",
    desc: "A React Native app for sharing bookshelves with friends — track what you read, lend books, and discover recommendations from your mates, with a tailored interest-based onboarding.",
    link: "https://www.instagram.com/p/Da8bqvNs81E/",
    categories: ["apps"],
  },
  {
    id: 26,
    image: ignovations,
    title: "Ignovations",
    desc: "The software and digital products studio I founded — building mobile apps, web platforms, and full product launches for founders and teams, alongside teaching the next generation of tech leaders.",
    link: "https://ignovations.com",
    categories: ["web", "portfolio"],
  },
  {
    id: 2,
    image: eduArkWebApp,
    title: "EduArk Web Platform",
    desc: eduArkDesc,
    link: "https://myeduark.com/home",
    categories: ["web"],
  },
  {
    id: 3,
    image: fundora,
    title: "Fundora",
    desc: "A fintech product focused on modern card payments and digital money movement, designed to feel secure, clear, and trustworthy at every step.",
    link: "https://www.instagram.com/p/DUnYIp_DK-4/",
    categories: ["fintech", "apps"],
  },
  {
    id: 4,
    image: nutrisnap,
    title: "Nutrisnap",
    desc: "A nutrition companion that uses AI to estimate calories, protein, carbs, and fats from a single meal photo, so users eat with awareness without manual logging.",
    link: "https://www.instagram.com/p/DXUoY2CjFxy/",
    categories: ["apps"],
  },
  {
    id: 5,
    image: nectallWebApp,
    title: "Nectall Web Platform",
    desc: nectallWebDesc,
    link: "https://www.nectall.app/dashboard",
    categories: ["web"],
  },
  {
    id: 6,
    image: shirtFusion,
    title: "Shirt Fusion 360",
    desc: "A custom apparel platform where customers design products in real time, preview every angle, and export production-ready creations for print or fulfillment.",
    link: "https://shirtfusion360.vercel.app/",
    categories: ["fashion"],
  },
  {
    id: 7,
    image: eduArkMobileApp,
    title: "EduArk Mobile App",
    desc: eduArkDesc,
    link: "#",
    categories: ["apps"],
  },
  {
    id: 8,
    image: frznfit,
    title: "FrznFit",
    desc: "A mobile fashion retail experience for shoes and apparel, built to help shoppers discover products quickly and buy on the go.",
    link: "#",
    categories: ["fashion"],
  },
  {
    id: 9,
    image: navigate,
    title: "Navigate Podcast",
    desc: "A podcast and content platform for Canadian and international students, offering practical guidance on academics, settlement, and everyday life.",
    link: "https://www.navigateco.ca/",
    categories: ["others"],
  },
  {
    id: 10,
    image: nectallLandingPage,
    title: "Nectall",
    desc: nectallSiteDesc,
    link: "https://www.nectall.app/",
    categories: ["web"],
  },
  {
    id: 11,
    image: shopiverse,
    title: "Shopiverse",
    desc: "A full-scale e-commerce platform with secure checkout, customer accounts, and an admin console for retailers to sell online and manage inventory.",
    link: "https://shopiverse-client.vercel.app/",
    categories: ["fashion"],
  },
  {
    id: 12,
    image: theGreats,
    title: "TheGreats",
    desc: "An immersive digital experience celebrating legendary athletes, combining rich storytelling, cinematic presentation, and hall-of-fame profiles.",
    link: "https://thegreats-self.vercel.app/",
    categories: ["web"],
  },
  {
    id: 13,
    image: vibekicks,
    title: "VibeKicks",
    desc: "A contemporary footwear brand at the intersection of comfort and street style, built for customers who want performance and personality.",
    link: "https://nike-redesign-liart.vercel.app/",
    categories: ["fashion"],
  },
  {
    id: 14,
    image: neatCleaning,
    title: "Neat Cleaning",
    desc: "A professional home and office cleaning service that helps clients maintain healthy, spotless spaces with reliable scheduling.",
    link: "https://neatcleaning.vercel.app/",
    categories: ["web"],
  },
  {
    id: 15,
    image: pronef,
    title: "ProNef",
    desc: "A digital marketplace for buying, selling, and collecting NFTs, giving creators and collectors a trusted place to transact and build community.",
    link: "https://nft-marketplace-showcase-sepia.vercel.app/",
    categories: ["fintech", "apps"],
  },
  {
    id: 16,
    image: hoobank,
    title: "HooBank",
    desc: "A financial services platform that helps consumers compare cards and payment options by surfacing rates, fees, and benefits.",
    link: "https://modern-bank-ui.vercel.app/",
    categories: ["fintech"],
  },
  {
    id: 17,
    image: aura,
    title: "Aura Apparel",
    desc: "A fashion label built on bold, minimal design, serving customers who value self-expression, quality materials, and a consistent brand identity.",
    link: "https://aura-apparel.vercel.app/",
    categories: ["fashion"],
  },
  {
    id: 18,
    image: nftopia,
    title: "NFTopia",
    desc: "An NFT commerce platform where artists launch storefronts, mint work, and reach collectors worldwide in one place.",
    link: "https://nftopia-smoky.vercel.app/",
    categories: ["fintech"],
  },
  {
    id: 19,
    image: evogym,
    title: "Evogym",
    desc: "A fitness brand presence built to attract members, present programs clearly, and convert interest into memberships.",
    link: "https://evogym-bice.vercel.app/",
    categories: ["web"],
  },
  {
    id: 20,
    image: igudyport,
    title: "Igudy Portfolio",
    desc: "A professional portfolio platform showcasing projects, skills, and contact pathways so clients and employers can evaluate work quickly.",
    link: "https://igudy-react-portfolio-2022.vercel.app/",
    categories: ["portfolio"],
  },
  {
    id: 21,
    image: hyperrealms,
    title: "HyperRealms",
    desc: "A professional portfolio highlighting more than a decade of full-stack development through project case studies and clear paths to hire.",
    link: "https://hyperrealms-chi.vercel.app/",
    categories: ["portfolio"],
  },
];

export const productMatchesCategory = (
  product: Product,
  category: ProductCategory
): boolean =>
  category === "all" ||
  product.categories.includes(category as ProductCategorySlug);
