import React from 'react';
import may3 from "../../images/time/3may.jpg"
import may4 from "../../images/time/2may.jpg"
import may6 from "../../images/time/6may.jpg"
import may7 from "../../images/time/7may.jpg"
import may9 from "../../images/time/9may.jpg"
import may10 from "../../images/time/10may.jpg"

import Image from 'next/image';


const timelineData = [
    {
        title: "Northern Lights (Aurora Borealis)",
        date: "3 May 2024",
        // shortDescription: "A natural light display in the Earth's sky, predominantly seen in polar regions.",
        shortDescription: "A new sunspot has erupted on the sun, causing the radiation from the flare to ionize the upper atmosphere of the Earth, leading to a deep disruption of shortwave radio signals in Australia, Japan, and most of China. Radio operators noticed a loss of signal below 30 megahertz for half an hour after the peak of the flare. Shortly after the flare, the U.S. Air Force reported a Type II solar radio burst.",
        imagePath: may3,
    },
    {
        title: "Halley's Comet",
        date: "4 May 2024",
        shortDescription: "GROWTH OF A DANGEROUS SUNSPOT: When May began, sunspot AR3663 didn't exist. Now it is 10 times wider than Earth and crackling with strong solar flares. This 4 day movie from NASA's Solar Dynamics Observatory shows the sunspot's",
        // details: "Halley's Comet is the only known short-period comet that is regularly visible to the naked eye from Earth. It is the first comet to be recognized as periodic, thanks to the work of Edmond Halley in 1705.",
        imagePath: may4,
    },
    {
        title: "Total Solar Eclipse",
        date: "6 May 2024",
        shortDescription: "Auroras surprisingly appeared here in the Czech Republic at latitude +50 N. Report photographer Petr Horálek at the Institute of Physics in Opava. They were visible to the naked eye despite the cirrus clouds.",
        // details: "A total solar eclipse occurs when the moon passes between Earth and the sun, completely blocking the sun's face for up to several minutes. The next total solar eclipse will cross North America, passing over Mexico, the United States, and Canada.",
        imagePath: may6,
    },
    {
        title: "Total Solar Eclipse",
        date: "7 May 2024",
        shortDescription: "THE CHANCE OF FLARES JUST DOUBLED: There are now two dangerous sunspots facing Earth. In the past 24 hours, AR3664 has more than doubled in size, becoming one of the largest sunspots of the current solar cycle. It is inset in this magnetic map of the sun from NASA's Solar Dynamics Observatory",
        // details: "A total solar eclipse occurs when the moon passes between Earth and the sun, completely blocking the sun's face for up to several minutes. The next total solar eclipse will cross North America, passing over Mexico, the United States, and Canada.",
        imagePath: may7,
    },
    {
        title: "Total Solar Eclipse",
        date: "9 May 2024",
        shortDescription: "A CARRINGTON-CLASS SUNSPOT: Sunspot AR3664 has grown so large, it now rivals the great Carrington sunspot of 1859. To illustrate their similarity, we've added Carrington's famous sketch (to scale) to a NASA photo of today's sun",
        // details: "A total solar eclipse occurs when the moon passes between Earth and the sun, completely blocking the sun's face for up to several minutes. The next total solar eclipse will cross North America, passing over Mexico, the United States, and Canada.",
        imagePath: may9,
    },
    {
        title: "Total Solar Eclipse",
        date: "10 May 2024",
        shortDescription: "EXTREME GEOMAGNETIC STORM--NOW! The biggest geomagnetic storm in almost 20 years is underway now. It has reached category G5--an extreme event. Sky watchers with dark skies may be able to see and photograph auroras even at low latitudes",
        // details: "A total solar eclipse occurs when the moon passes between Earth and the sun, completely blocking the sun's face for up to several minutes. The next total solar eclipse will cross North America, passing over Mexico, the United States, and Canada.",
        imagePath: may10,
    }
];

export default function PhenomenaTimeline2() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-10 text-center">Natural Phenomena Timeline            </h1>

            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[15px] md:left-1/2 transform md:-translate-x-1/2 h-full w-1  bg-[#725d23]"></div>

                <div className="space-y-12">
                    {timelineData.map((item, index) => (
                        <div key={index} className={`relative flex items-center 
              ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                            {/* Date bubble */}
                            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 
                            w-8 h-8 bg-[#f8b500] rounded-full flex items-center justify-center z-10">
                                <div className="w-4 h-4 bg-white rounded-full"></div>
                            </div>

                            {/* Content */}
                            <div className="ml-12 md:ml-0 md:w-1/2 
                            p-4 bg-white rounded-lg shadow-lg
                            flex flex-col md:flex-row items-start
                            gap-4">

                                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                                    <div className="bg-blue-100 text-[#f8b500] px-2 py-1 rounded inline-block mb-2">
                                        {item.date}
                                    </div>
                                    {/* <h2 className="text-xl font-semibold mb-2">{item.title}</h2> */}
                                    <p className="text-gray-600">{item.shortDescription}</p>
                                </div>

                                <div className="w-full md:w-48 h-48 overflow-hidden rounded-lg flex-shrink-0">
                                    <Image
                                        src={item.imagePath}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}