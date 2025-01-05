
import ProjectPage from "@/Component/Project/ProjectPage";
import Homepage from "../Component/Home/Homepage";
import AboutPage from "@/Component/About/AboutPage";
import Frequentlyaskquestions from "@/Component/Frequentlyaskquestions/Frequentlyaskquestions";
import Tools from "@/Component/Tools/tools";


export default function Home() {
  return (
  
      
      <div >
        <Homepage />
        <AboutPage/>
        <ProjectPage/>
        <Frequentlyaskquestions/>
        <Tools/>
      </div>
  
  );
}
