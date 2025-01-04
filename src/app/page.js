import Navbar from "@/Component/Navbar/Navbar";
import Profile from "@/Component/Profile/Profile";
import Homepage from "../Component/Home/Homepage";

export default function Home() {
  return (
    <div className="bg-black bg-grain bg-blend-overlay min-h-screen">
      <Navbar />
      <div className="grid grid-cols-[40%_60%] min-h-screen text-white">

        <div className="sticky top-0 flex items-center h-screen bg-black">
          <Profile />
        </div>

        {/* Right scrollable content */}
        <div className="overflow-y-auto">
          <Homepage />
        </div>
      </div>
    </div>
  );
}
