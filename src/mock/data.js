import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Joseph Chung Dev', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to Joseph Chung Dev Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Joseph Chung',
  subtitle: 'DevOps Engineer & Coach',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "As a DevOps Engineer based in Tokyo, I have over 9 years full-time working experience in different fortune 500 companies, and I'm passionate about automation and building large-scale and highly reliable infrastructure. Also, I could coach you to landing on your dream job.",
  paragraphTwo: 'My expertises are:',
  paragraphThree:
    'Python, Cloud Computing, Operational Excellence, Automation, Incident Management',
  resume: 'https://drive.google.com/file/d/1EazIEbvqk02EbNojRzQKY8xr7c0D1afB/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'www.gusteaushk.com.png',
    title: "Gusteau's Academy",
    info: 'An online cooking lesson website with payment and scheduling features.',
    info2: 'Wordpress, woocommerce, Zoom scheduling system, CSS, PHP',
    url: 'http://academy.gusteaushk.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'backtoourcountryside.hk.png',
    title: 'BackToOurCountrySide',
    info: 'A HK government environmental department photo and video competition website.',
    info2: 'Wordpress, multi-lang, customized forms, CSS, PHP',
    url: 'http://backtoourcountryside.hk/',
    repo: '', // if no repo, the button will not show up
  },
];

// SKILLS DATA
export const skillsData = [
  {
    id: nanoid(),
    url: 'https://education.github.com/git-cheat-sheet-education.pdf',
    name: 'github',
  },
  {
    id: nanoid(),
    url: 'https://www.pythoncheatsheet.org/',
    name: 'python',
  },
  {
    id: nanoid(),
    url: 'https://html.com/blog/html-5-cheat-sheets/',
    name: 'html5',
  },
  {
    id: nanoid(),
    url: 'https://www.edureka.co/blog/cheatsheets/java-cheat-sheet/',
    name: 'java',
  },
  {
    id: nanoid(),
    url: 'https://htmlcheatsheet.com/js/',
    name: 'js',
  },
  {
    id: nanoid(),
    url: 'https://aws.amazon.com/cli/',
    name: 'aws',
  },
  {
    id: nanoid(),
    url: 'https://websitesetup.org/wordpress-cheat-sheet/',
    name: 'wordpress',
  },
  {
    id: nanoid(),
    url: 'https://htmlcheatsheet.com/css/',
    name: 'css3-alt',
  },
  {
    id: nanoid(),
    url: 'https://websitesetup.org/wp-content/uploads/2020/09/PHP-Cheat-Sheet.pdf',
    name: 'php',
  },
  {
    id: nanoid(),
    url: 'https://oscarotero.com/jquery/',
    name: 'jquery',
  },
  {
    id: nanoid(),
    url: 'https://regex101.com/',
    name: 'regex',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'info@josephchung.dev',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/JosephC12591515',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/itjosephchung/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/itjosephchung',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
