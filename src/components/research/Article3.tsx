import { CalendarDays, Sun, Zap, Cloud, AlertTriangle } from 'lucide-react';

const timelineData = [
    {
        date: 'May 10',
        content: 'A storm hit Earth with a strength of 5 G.',
        icon: <Zap className="w-6 h-6 text-yellow-500" />
    },
    {
        date: 'May 12',
        content: 'A coronal mass ejection of 2 G was predicted to strike Earth within 24-48 hours.',
        icon: <AlertTriangle className="w-6 h-6 text-orange-500" />
    },
    {
        date: 'May 13',
        content: 'The sunspot released flares and another less impactful storm hit Earth.',
        icon: <Sun className="w-6 h-6 text-yellow-600" />
    },
    {
        date: 'May 15',
        content: 'Another storm occurred due to the flares from the sunspot.',
        icon: <Cloud className="w-6 h-6 text-blue-500" />
    },
    {
        date: 'May 17',
        content: 'A strong solar explosion occurred, but with a strength lower than expected, at 2 G.',
        icon: <Zap className="w-6 h-6 text-yellow-500" />
    },
    {
        date: 'May 20',
        content: 'Meteorologists predicted small solar storms of class 1 G when a coronal mass touches Earth\'s magnetic field.',
        icon: <AlertTriangle className="w-6 h-6 text-orange-500" />
    },
    {
        date: 'May 22',
        content: 'Everything was calm, but a solar filament over 400,000 kilometers long appeared. If this filament does not erupt, everything will remain calm.',
        icon: <Sun className="w-6 h-6 text-yellow-600" />
    },
    {
        date: 'May 26',
        content: 'A potentially dangerous sunspot returned, and the likelihood of an explosion increased on May 27.',
        icon: <AlertTriangle className="w-6 h-6 text-red-500" />
    },
    {
        date: 'May 29',
        content: 'The sunspot was no longer as large as it had been, but it remained active.',
        icon: <Sun className="w-6 h-6 text-yellow-600" />
    },
    {
        date: 'May 31',
        content: 'The month ended with the sunspot fading, but it remained strong and released another explosion, the third this month.',
        icon: <Zap className="w-6 h-6 text-yellow-500" />
    }
];

export default function SpaceWeatherTimeline() {
    return (
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                <CalendarDays className="w-6 h-6" />
                Space Weather Timeline - May
            </h2>
            <div className="space-y-4">
                {timelineData.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                            {item.icon}
                        </div>
                        <div className="flex-grow">
                            <h3 className="font-semibold text-lg">{item.date}</h3>
                            <p className="text-gray-600">{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
            <p className="mt-6 text-gray-500 italic text-center">
                This was a quick and simplified journey to understand what happened in space weather during May.
            </p>
        </div>
    );
}