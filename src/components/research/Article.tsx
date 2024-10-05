/* eslint-disable react/no-unescaped-entities */
import sky from "../../images/sky2.jpg"
import Image from 'next/image';

export default function ArticleComponent() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-8">







            {/* Article Content */}
            <div className="prose prose-lg max-w-none">

                Will solar storms once again threaten our planet?
                <br />
                Why do solar storms occur, and what are their effects on Earth?
                <br />
                Plasma moves inside the core of the Sun, creating a magnetic field. As this plasma rotates within the Sun, it causes the magnetic field lines to twist and tangle, which blocks the flow of heat to the surface, leading to the formation of cooler regions known as sunspots. Due to the intense pressure on the magnetic field, energy is released in the form of plasma, known as a coronal mass ejection (CME).
                <br />
                When the coronal mass ejection reaches Earth, it interacts with the Earth's magnetic field, causing the appearance of the auroras. However, it can have negative effects on satellites and electricity.
                And now, in 2024, what is happening on the Sun is repeating once again. Should we expect a solar storm to invade Earth soon?
                {/* Example of a blockquote */}


                {/* Example of a figure with caption */}
                <figure className='pt-6'>
                    <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                        <Image
                            src={sky}
                            width={400} height={500}
                            alt="Team working on solar monitoring"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <figcaption className="text-center text-gray-600 mt-2">
                        A long exposure photograph with the northern lights glowing in the night sky above the village of Daillens, Switzerland. (Keystone/Laurent Gillieron via AP)</figcaption>
                </figure>

                {/* <h2>Technological Impacts</h2>
                <ul>
                    <li>Disruption of GPS systems</li>
                    <li>Power grid failures</li>
                    <li>Satellite communication interference</li>
                    <li>Increased radiation exposure for air travelers</li>
                </ul> */}
            </div>




        </article>
    );
}