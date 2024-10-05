import { Check } from "lucide-react";
import Image from "next/image";
import sun from "../../images/earthjpg.jpg"
export default function RefrencesPage() {
    return (
        <div className="h-[100vh]">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5  flex flex-col xl:flex-row justify-between">
                <div className="">
                    <h1 className="text-5xl pb-3">References</h1>
                    <p className="text-gray-400">Here are some helpful resources for learning about the Solar System.</p>
                    <ul>
                        <li className="pl-3 py-2 flex">
                            <Check className="w-8 h-6 pr-3 text-[#f8b500]" />
                            <a href="https://solarsystem.nasa.gov/" target="_blank">NASA Solar System Exploration</a></li>
                        <li className="pl-3 py-2 flex">
                            <Check className="w-8 h-6 pr-3 text-[#f8b500]" />

                            <a href="https://www.britannica.com/science/Solar-System" target="_blank">Britannica Solar System</a></li>
                        <li className="pl-3 py-2 flex" >
                            <Check className="w-8 h-6 pr-3 text-[#f8b500]" />

                            <a href="https://solarsystem.nasa.gov/planets/" target="_blank">NASA Planets</a></li>
                    </ul>

                    <h2 className="text-4xl pt-8 pb-4">Astronomical Tools</h2>
                    <ul>
                        <li className="pl-3 py-2 flex">
                            <Check className="w-8 h-6 pr-3 text-[#f8b500]" />

                            <a target="_blank" href="https://www.skyandtelescope.com/">Sky & Telescope</a></li>
                        <li className="pl-3 py-2 flex">
                            <Check className="w-8 h-6 pr-3 text-[#f8b500]" />

                            <a target="_blank" href="https://www.space-facts.com/">Space-Facts</a></li>
                    </ul>
                </div>
                <div className="">
                    <Image src={sun} alt="sun" width={600} height={400} />
                </div>

            </div>
        </div>
    )
}