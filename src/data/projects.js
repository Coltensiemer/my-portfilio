import CrowdfundImg from "../assets/projectphotos/crowdfund.jpeg";
import SkilledImg from "../assets/projectphotos/skilled-e-learning.png";
import PodRequest from "../assets/projectphotos/podrequest.png"
import GuessmyNumber from "../assets/projectphotos/guessmynumber.png";

export default [
  {
    id: 1,
    title: "Crowdfunding",
    imgUrl: CrowdfundImg,
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://symphonious-narwhal-a6100f.netlify.app/",
    github: "https://github.com/Coltensiemer/crowdfunding-product-page-main",
    description: "This interactive Crowd Funding page has been expertly crafted using the dynamic trio of HTML, CSS, and JavaScript. It enables users to keep track of purchased products, with each product bought incrementally increasing the total amount backed."
    
  },
  {
    id: 2,
    title: "Guess My Number",
    imgUrl: GuessmyNumber,
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://fanciful-seahorse-882947.netlify.app/",
    github: "https://github.com/Coltensiemer/Guess-my-number",
    description: "A vanilla JavaScript game to facilitate learning of DOM manipulation and CSS styling, showcasing a strong grasp of front-end development principles and an ability to create engaging user experiences."
    
  },
  { 
    id: 3,
    title: "Pod Request",
    imgUrl: PodRequest,
    stack: ["React", "CSS", "Vite"],
    link: "https://quiet-zuccutto-3b0f44.netlify.app",
    github: "https://github.com/Coltensiemer/pod-request-acess",
    description: "Interactive validation form design with CSS while using a form validation tool. Built with React with a mobile first approach",

  },
  {
    id: 4,
    title: "Skilled E Learner",
    imgUrl: SkilledImg,
    stack: ["React", "Tailwind", "Vite"],
    link: "https://exquisite-marshmallow-a183aa.netlify.app/",
    github: "https://github.com/Coltensiemer/skilled-e-learning",
    description: "Responsive web design that showcases the utilization of React components and the seamless importing of data through JSON files, ensuring a streamlined and efficient user experience.",
    
  },

];
