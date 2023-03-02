import ReactStack from "../assets/svgs/react.svg";
import Html from "../assets/svgs/html.svg";
import Css3 from "../assets/svgs/css3.svg";
import Tailwind from "../assets/svgs/tailwind.svg";
import Javascript from "../assets/svgs/javascript.svg";
import sass from "../assets/svgs/sass.svg";


 const languages = [
     {
    title: "HTML",
    stack: Html,
  },
  {
    title: "CSS",
    stack: Css3,
  },
  {
    title: "Javascript",
    stack: Javascript,
  },
 ]

const frameworks = [ 
    {
        title: "Tailwind",
        stack: Tailwind,
      },
      {
        title: "Sass",
        stack: sass,
      },
      {
        title: "React",
        stack: ReactStack,
      },
    ]


export default [...languages, ...frameworks]