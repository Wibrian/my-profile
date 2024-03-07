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

export { techStack, cardData };
