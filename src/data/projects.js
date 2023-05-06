import CrowdfundGif from "../assets/projectphotos/crowdfunding.gif";
import CrowdfundImg from "../assets/projectphotos/Crowdfundingimg.png";
import PodRequest from "../assets/projectphotos/podrequestimg.png"
import PodRequestgif from "../assets/projectphotos/PodRequestgif.gif"
import GuessmyNumber from "../assets/projectphotos/guessmynumber.gif"
import GuessmyNumberImg from "../assets/projectphotos/guessmynumberimg.png"
import DictionaryAPIGif from "../assets/projectphotos/dictonaryapi.gif"
import DictonaryAPIImg from "../assets/projectphotos/dictonaryapiimg.png"



export default [

  
  { 
    id:1, 
    title:"Dictionary API",
    imgUrl: DictonaryAPIImg, 
    gifUrl:DictionaryAPIGif,
    stack: ["Typescript", "React", "TailwindCSS"],
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
    gifUrl: CrowdfundGif, 
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
    imgUrl: GuessmyNumberImg,
    gifUrl: GuessmyNumber, 
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
    gifUrl: PodRequestgif, 
    stack: ["React", "CSS", "Vite"],
    link: "https://quiet-zuccutto-3b0f44.netlify.app",
    github: "https://github.com/Coltensiemer/pod-request-acess",
    description: "Interactive validation form design with CSS while using a form validation tool. Built with React with a mobile first approach",
    repo: "pod-request-acess",
    branch: "main"
  },


];
