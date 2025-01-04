import Navbar from "@/Component/Navbar/Navbar";
import Profile from "@/Component/Profile/Profile";
import Homepage from "../Component/Home/Homepage";
import ProjectPage from "@/Component/Project/ProjectPage";



export default function Home() {
  return (
    <div className="bg-black bg-grain bg-blend-overlay min-h-screen">
      <div className="">
        <Navbar />
        </div>
      
      <div className="grid grid-cols-[40%_60%] min-h-screen text-white">

        <div className="sticky top-0 flex items-center h-screen bg-black">
          <Profile />
        </div>

        {/* Right scrollable content */}
        <div className="overflow-y-auto bg-black">
          <Homepage />
         <ProjectPage/>
        </div>
      </div>
    </div>
  );
}
