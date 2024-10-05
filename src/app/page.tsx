"use client"
// import Model3D from "@/components/3d";
// import SunScene from "@/components/Sunscene";
import TextLanding from "@/components/landing/TextLanding";
import SunRed from "@/components/videos/SunRed";

import sky from "@/images/sky.jpg";
import Image from "next/image";
export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 ">
      <div className="flex items-center  md:justify-start sm:justify-end flex-col lg:flex-row pb-10 ">

        <TextLanding />
        <SunRed />

      </div>
      <div className="flex items-center justify-end h-[100vh]">
        <div className=" relative ">
          <Image
            src={sky}
            alt="Animated placeholder"
            className="w-full h-full object-cover animate-bounce "
            style={{
              animation: 'moveUpDown 2s ease-in-out infinite',
            }}
          />
          <p className="absolute z-10  top-1/3 center text-xl md:text-5xl md:pl-2">
            Forget fireworks.<br /> Real sky magic happens when solar storms paint the atmosphere.
          </p>

        </div>

        <style jsx>{`
        @keyframes moveUpDown {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
      </div>

    </div>
  );
}
