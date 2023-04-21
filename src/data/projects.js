import CrowdfundImg from "../assets/projectphotos/crowdfund.jpeg";
import SkilledImg from "../assets/projectphotos/skilled-e-learning.png";
import PodRequest from "../assets/projectphotos/podrequest.png"
import GuessmyNumber from "../assets/projectphotos/guessmynumber.png";
import DictonaryAPI from "../assets/projectphotos/dictonary-intro.gif"


// function gitHub() { 
// 	fetch(`https://raw.githubusercontent.com/Coltensiemer/dictionary-web-app/master/README.md`)
// 	.then(response => response.text().then(data=>{ 
// 		return data
// 	}))

// }

export default [

  { 
    id:1,
    title:"Dictionary API",
    imgUrl: DictonaryAPI, 
    stack: ["Typescript", "React", "TailWindCSS"],
    link:"https://playful-babka-6bb0fc.netlify.app/",
    github:"https://github.com/Coltensiemer/dictionary-web-app",
    repo: "dictionary-web-app",
    branch: "master"

  },
  {
    id: 2,
    title: "Crowdfunding",
    imgUrl: CrowdfundImg,
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://symphonious-narwhal-a6100f.netlify.app/",
    github: "https://github.com/Coltensiemer/crowdfunding-product-page-main",
    description: "This interactive Crowd Funding page has been expertly crafted using the dynamic trio of HTML, CSS, and JavaScript. It enables users to keep track of purchased products, with each product bought incrementally increasing the total amount backed.",
    repo: "dictionary-web-app",
    branch: "master"
    
  },
  {
    id: 3,
    title: "Guess My Number",
    imgUrl: GuessmyNumber,
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://fanciful-seahorse-882947.netlify.app/",
    github: "https://github.com/Coltensiemer/Guess-my-number",
    description: "A vanilla JavaScript game to facilitate learning of DOM manipulation and CSS styling, showcasing a strong grasp of front-end development principles and an ability to create engaging user experiences.",
    repo: "dictionary-web-app",
    branch: "master"
    
  },
  { 
    id: 4,
    title: "Pod Request",
    imgUrl: PodRequest,
    stack: ["React", "CSS", "Vite"],
    link: "https://quiet-zuccutto-3b0f44.netlify.app",
    github: "https://github.com/Coltensiemer/pod-request-acess",
    description: "Interactive validation form design with CSS while using a form validation tool. Built with React with a mobile first approach",
    repo: "dictionary-web-app",
    branch: "master"
  },
  {
    id: 5,
    title: "Skilled E Learner",
    imgUrl: SkilledImg,
    stack: ["React", "Tailwind", "Vite"],
    link: "https://exquisite-marshmallow-a183aa.netlify.app/",
    github: "https://github.com/Coltensiemer/skilled-e-learning",
    description: "Responsive web design that showcases the utilization of React components and the seamless importing of data through JSON files, ensuring a streamlined and efficient user experience.",
    repo: "dictionary-web-app",
    branch: "master"
  },

];
