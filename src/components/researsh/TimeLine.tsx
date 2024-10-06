"use client"
import React from 'react';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import may3 from "../../images/time/3may.jpg"
import may4 from "../../images/time/2may.jpg"
import may6 from "../../images/time/6may.jpg"
import may7 from "../../images/time/7may.jpg"
import may9 from "../../images/time/9may.jpg"
import may10 from "../../images/time/10may.jpg"

import Image from 'next/image';


const phenomenaData = [
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

export default function PhenomenaTimeline() {
    const [expandedItems, setExpandedItems] = React.useState({});

    const toggleItem = (index) => {
        setExpandedItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Natural Phenomena Timeline</h1>
            <div className="space-y-8">
                {phenomenaData.map((item, index) => (
                    <div key={index} className="border border-[#f8b500] p-4 rounded-2xl shadow-lg overflow-hidden ">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="relative h-[300px]">
                                <Image
                                    src={item.imagePath}
                                    alt={item.title}
                                    className="w-full h-full "
                                    width={400} height={300}
                                />
                            </div>
                            <div className="p-6">
                                {/* <div className="flex items-start justify-between">
                                    <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                                    <button
                                        onClick={() => toggleItem(index)}
                                        className="p-2 hover:bg-gray-100 rounded-full"
                                    >
                                        {expandedItems[index] ? <ChevronUp /> : <ChevronDown />}
                                    </button>
                                </div> */}
                                <div className="flex items-center text-white mb-3">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    <span className="text-sm">{item.date}</span>
                                </div>
                                <p className="text-gray-300 mb-4">{item.shortDescription}</p>
                                {expandedItems[index] && (
                                    <div className="mt-4 text-gray-700">
                                        <h3 className="font-semibold mb-2">Details</h3>
                                        <p>{item.details}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}