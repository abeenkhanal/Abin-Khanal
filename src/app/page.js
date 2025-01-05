
import ProjectPage from "@/Component/Project/ProjectPage";
import Homepage from "../Component/Home/Homepage";
import AboutPage from "@/Component/About/AboutPage";
import Frequentlyaskquestions from "@/Component/Frequentlyaskquestions/Frequentlyaskquestions";


export default function Home() {
  return (
  
      
      <div >
        <Homepage />
        <AboutPage/>
        <ProjectPage/>
        <Frequentlyaskquestions/>
      </div>
  
  );
}
