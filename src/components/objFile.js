import binusMalang from "../img/binus-malang.jpg";
import smkn from "../img/smkn8.jpg";
import logoBinus from "../img/logo_binus.svg";
import logoSmkn from "../img/logo_smk.png";

const techStack = [
  {
    name: "HTML5",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    bgColor: "hover:bg-orange-400",
    bdrColor: "border-orange-400",
    alt: "HTML5",
  },
  {
    name: "CSS3",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    bgColor: "hover:bg-blue-400",
    bdrColor: "border-blue-400",
    alt: "CSS3",
  },
  {
    name: "JavaScript",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    bgColor: "hover:bg-yellow-200",
    bdrColor: "border-yellow-200",
    alt: "JS",
  },
  {
    name: "Node.js",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    bgColor: "hover:bg-green-400",
    bdrColor: "border-green-400",
    alt: "Node",
  },
  {
    name: "React.js",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    bgColor: "hover:bg-blue-200",
    bdrColor: "border-blue-200",
    alt: "React",
  },
  {
    name: "Tailwind CSS",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    bgColor: "hover:bg-blue-300",
    bdrColor: "border-blue-300",
    alt: "Tailwind",
  },
];

const cardData = [
  {
    name: "BINUS University",
    image: binusMalang,
    logo: logoBinus,
    degree: "Bachelor Degree",
    major: "Computer Science",
    year: "2019 - 2023",
    gpa: "GPA 3.09",
  },
  {
    name: "SMKN 8 Malang",
    image: smkn,
    logo: logoSmkn,
    degree: "Vocational High School Degree",
    major: "Computer and Network Engineering",
    year: "2016 - 2019",
    gpa: "",
  },
];

const experience = [
  {
    id: 1,
    name: "Network Engineer (Intern) at UPT STI Brawijaya University",
    year: "2017 (4 Months)",
    description: {
      name: [
        "Computer device installation in one of faculty.",
        "Network device installation using Cisco switch and Mikrotik router.",
        "Surveying reachable wifi area in old rectorate building using NetSpot.",
        "Checking fiber optic cable on another Brawijaya University building using Visual Fault Locator (VFL)",
      ],
    },
  },
  {
    id: 2,
    name: "Front-end and Back-end Developer (Study Independent at Dicoding Academy)",
    year: "2022 (6 Months)",
    description: {
      name: [
        "Learning basic component to fundamental of HTML and CSS.",
        "Learning basic of JavaScript program language, fundamental, syntax, ES6 features, and automation testing concept",
        "Learning DOM Manipulation, Event handler, Web Storage, and learn how to build an optimal modern website.",
        "Applying the knowledge that I have learned by taking exams or creating projects as a graduation requirement in each class",
      ],
    },
  },
  {
    id: 3,
    name: " AWS Academy Cloud Foundation (Online Learning at AWS Academy)",
    year: "2022 (2 Months)",
    description: {
      name: [
        "Learning basic knowledge about Amazon Web Services, Cloud Computing, Global Infrastructure, Networking, Security, Pricing, Storage and Databases, Monitoring and Analytics.",
        "Go through some of the practices of each AWS service learned.",
        "Take the AWS Cloud Practitioner Certification. Score 686 (scale 100 - 1000).",
      ],
    },
  },
  {
    id: 4,
    name: " Wirausaha Merdeka at BINUS University (Role as CEO at Alternia)",
    year: "2022 (4 Months)",
    description: {
      name: [
        "Learn about design thinking, market research, and user persona.",
        "Learn about STP, competitor analysis, perceptual map, and Marketing Mix.",
        "Learn about key resource, key activities, key partners, revenue stream and sociopreneurship.",
        "Learn about supply chain management, comersialization, and feedback grid.",
        "Learn about SDGs, value chain, sales funnel, and sales plan",
        "Conducting a Virtual Exhibition and Physical Exhibition at BINUS Kemanggisan Jakarta",
        "Sharing session with experts from Dreamaxtion and Pyridam companies",
      ],
    },
  },
];

export { techStack, cardData, experience };
