import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Component/Navbar/Navbar";
import Profile from "@/Component/Profile/Profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <div className="bg-black bg-grain bg-blend-overlay min-h-screen">
          {/* Navbar */}
          <div className="sticky top-0 z-10 bg-black px-4 md:static">
            <Navbar />
          </div>

          {/* Main Layout */}
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 md:px-8 lg:px-12 text-white">
            {/* Left (Profile Section) */}
            <div className="flex items-center lg:sticky lg:top-0 lg:h-screen mt-8 bg-black">
              <Profile />
            </div>

            {/* Right (Content Section) */}
            <div className="h-auto lg:h-auto overflow-y-auto">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
