
import ProjectPage from "@/Component/Project/ProjectPage";
import Homepage from "../Component/Home/Homepage";
import AboutPage from "@/Component/About/AboutPage";
import Frequentlyaskquestions from "@/Component/Frequentlyaskquestions/Frequentlyaskquestions";
import Tools from "@/Component/Tools/ToolsPage";
import TestimonialPage from "@/Component/Testimonial/TestimonialPage";
import Thoughtspage from "@/Component/Thoughts/Thoughtspage";
import Collaboratepage from "@/Component/Collaborate/Collaboratepage";


export default function Home() {
  return (
  
      
      <div >
        <Homepage />
        <AboutPage/>
        <ProjectPage/>
        <Frequentlyaskquestions/>
        <Tools/>
        <TestimonialPage/>
        <Thoughtspage/>
        <Collaboratepage/>
      </div>
  
  );
}
