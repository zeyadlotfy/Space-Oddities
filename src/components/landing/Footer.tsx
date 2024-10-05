import { navbarLinks } from '@/lib/NavbarLinks';
import Image from 'next/image';
import nasa from "@/images/nasa.png"
export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Space Oddities</h3>
                        <p className="text-sm">
                            Monitoring geomagnetic storms and solar activity to keep our world informed and prepared.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>

                            {
                                navbarLinks.map(link => (
                                    <li key={link.name}><a href={link.href} className="hover:text-white transition-colors">{link.name}</a></li>
                                ))}


                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-white text-lg font-bold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li><a href="https://science.nasa.gov/sun/sunspots/" target='_blank'
                                className="hover:text-white transition-colors">Nasa</a></li>
                            <li><a href="https://www.spaceweather.com/" target='_blank' className="hover:text-white transition-colors">spaceweather</a></li>

                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-white text-lg font-bold mb-4">You can get Us</h4>
                        <div className="flex space-x-4">

                            <a href="https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/space-oddities/"
                                target='_blank'
                                className="hover:text-white transition-colors">
                                <Image alt='nasa'
                                    src={nasa} width={32} height={32} />
                            </a>

                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center">
                    <p>&copy; {new Date().getFullYear()} Space Oddities. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}