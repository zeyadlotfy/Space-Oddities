import ScrollToTopButton from "@/components/landing/ScrollButton";
import ArticleComponent from "@/components/research/Article";
import ArticleComponent2 from "@/components/research/Article2";
import SpaceWeatherTimeline from "@/components/research/Article3";
import PhenomenaTimeline from "@/components/researsh/TimeLine";
import FinalVidoe from "@/components/videos/FinalVideo";
import FinalVidoe2 from "@/components/videos/FinalVideo2";

export default function ResearchPage() {
    return (
        <div className="min-h-screen  py-12">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold  mb-4">Our Research</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Exploring the impacts and patterns of geomagnetic storms through cutting-edge scientific research.
                    </p>
                </div>

                <div className="flex justify-center items-center">
                    <FinalVidoe2 />

                </div>

                <ArticleComponent />


            </div>
            <PhenomenaTimeline />

            <div className="flex justify-center items-center">
                <FinalVidoe />

            </div>
            <SpaceWeatherTimeline />
            <ArticleComponent2 />

            <ScrollToTopButton />
        </div>
    );
}