import CrowdfundImg from "../assets/projectphotos/crowdfunding.gif";
import PodCastVideo from '../assets/projectvideos/podcast.mp4'
import PodRequest from "../assets/projectphotos/podrequest.png"
import GuessmyNumber from "../assets/projectphotos/guessmynumber.gif"
import DictonaryAPI from "../assets/projectphotos/dictonaryapi.gif"




export default [

  { 
    id:1,
    title:"Dictionary API",
    imgUrl: DictonaryAPI, 
    videoURL: PodCastVideo,
    stack: ["Typescript", "React", "TailWindCSS"],
    link:"https://playful-babka-6bb0fc.netlify.app/",
    github:"https://github.com/Coltensiemer/dictionary-web-app",
    description:"This project is a solution to the Frontend Mentor challenge, where the task was to create a dictionary web app that allows users to search for words, view the definition, and listen to the audio pronunciation. Users can also switch between light and dark themes and different font types. The web app was created using Typescript and React, with the TailwindCSS and DaisyUI frameworks.",
    repo: "dictionary-web-app",
    branch: "master"

  },
  {
    id: 2,
    title: "Crowdfunding",
    imgUrl: CrowdfundImg,
    videoURL: PodCastVideo,
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://symphonious-narwhal-a6100f.netlify.app/",
    github: "https://github.com/Coltensiemer/crowdfunding-product-page-main",
    description: "This interactive Crowd Funding page utilizes HTML, CSS, and JavaScript to create a user-friendly experience for backers. The page allows users to track their purchases and increases the total amount backed as they buy more products. Users can view an optimal layout depending on their device's screen size and see hover states for interactive elements. After making a pledge, users can see an updated progress bar and total money raised, and the number of total backers increments by one. Additionally, users can toggle whether or not the product is bookmarked.",
    repo: "crowdfunding-product-page-main",
    branch: "master"
    
  },
  {
    id: 3,
    title: "Guess My Number",
    imgUrl: GuessmyNumber,
    videoURL: PodCastVideo,
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://fanciful-seahorse-882947.netlify.app/",
    github: "https://github.com/Coltensiemer/Guess-my-number",
    description: "A vanilla JavaScript game to facilitate learning of DOM manipulation and CSS styling, showcasing a strong grasp of front-end development principles and an ability to create engaging user experiences.",
    repo: "Guess-my-number",
    branch: "main"
    
  },
  { 
    id: 4,
    title: "Pod Request",
    imgUrl: PodRequest,
    videoURL: PodCastVideo,
    stack: ["React", "CSS", "Vite"],
    link: "https://quiet-zuccutto-3b0f44.netlify.app",
    github: "https://github.com/Coltensiemer/pod-request-acess",
    description: "Interactive validation form design with CSS while using a form validation tool. Built with React with a mobile first approach",
    repo: "pod-request-acess",
    branch: "main"
  },
  // {
  //   id: 5,
  //   title: "Skilled E Learner",
  //   imgUrl: SkilledImg,
  //   stack: ["React", "Tailwind", "Vite"],
  //   link: "https://exquisite-marshmallow-a183aa.netlify.app/",
  //   github: "https://github.com/Coltensiemer/skilled-e-learning",
  //   description: "Responsive web design that showcases the utilization of React components and the seamless importing of data through JSON files, ensuring a streamlined and efficient user experience.",
  //   repo: "skilled-e-learning",
  //   branch: "main"
  // },

];
