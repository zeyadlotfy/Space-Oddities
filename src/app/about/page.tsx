/* eslint-disable react/no-unescaped-entities */
import { ShieldAlert, Activity, Zap, Users } from 'lucide-react';
import team from "../../images/team.jpg"
import Image from 'next/image';
export default function AboutUs() {
    return (
        <div className="min-h-screen ">
            {/* Hero Section */}
            <section className=" text-white py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Solar Watch</h1>
                    <p className="text-xl md:w-2/3 leading-relaxed">
                        Our project is about solar storms and their threat to Earth. We are trying to explain to all the public what solar storms are, how they occur, in simple detail, and their effect on Earth and humanity. I hope the video is simple enough to explain this phenomenon.

                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                At Solar Watch, we're dedicated to advancing our understanding of geomagnetic storms and their impact on Earth. Our team of experts works tirelessly to provide accurate predictions and vital information to protect our global infrastructure.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Founded in 2015, we've grown from a small research group to a global leader in space weather monitoring, serving governments, industries, and the scientific community.
                            </p>
                        </div>
                        <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
                            <Image
                                src={team}
                                alt="Team working on solar monitoring"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-16 ">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">What Sets Us Apart</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <ShieldAlert className="h-10 w-10 text-[#f8b500]" />,
                                title: "Early Warning Systems",
                                description: "Advanced prediction algorithms for timely alerts"
                            },
                            {
                                icon: <Activity className="h-10 w-10 text-[#f8b500]" />,
                                title: "Real-time Monitoring",
                                description: "24/7 surveillance of solar activity"
                            },
                            {
                                icon: <Zap className="h-10 w-10 text-[#f8b500]" />,
                                title: "Impact Assessment",
                                description: "Detailed analysis of potential effects on Earth"
                            },
                            {
                                icon: <Users className="h-10 w-10 text-[#f8b500]" />,
                                title: "Expert Team",
                                description: "World-class scientists and researchers"
                            }
                        ].map((feature, index) => (
                            <div key={index} className="text-center p-6 rounded-lg ">
                                <div className="flex justify-center mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                name: "Zeyad Lotfy",
                                role: "Web Developer",
                                image: "@/images/zeyad.png"
                            },
                            {
                                name: "Sagda Mabrouk",
                                role: "Researcher #1",
                                image: "/api/placeholder/400/400"
                            },
                            {
                                name: "name3",
                                role: "Vidoe Editor",
                                image: "/api/placeholder/400/400"
                            }, {
                                name: "name4",
                                role: "Researcher #2",
                                image: "/api/placeholder/400/400"
                            }
                        ].map((member, index) => (
                            <div key={index} className="text-center">
                                {/* <Image
                                    src={zeyad}
                                    alt="Zeyad"
                                    width={48} height={48}
                                    className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                                /> */}
                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className=" text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">You can get us</h2>
                    <p className="mb-8 md:w-2/3 mx-auto">
                        2024 NASA Space Apps Challenge

                    </p>
                    <button className="bg-white text-[#f8b500] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        Our project
                    </button>
                </div>
            </section>
        </div>
    );
}