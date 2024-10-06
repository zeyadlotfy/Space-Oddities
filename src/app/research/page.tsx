import ScrollToTopButton from "@/components/landing/ScrollButton";
import ArticleComponent from "@/components/research/Article";
import ArticleComponent2 from "@/components/research/Article2";
import PhenomenaTimeline from "@/components/researsh/TimeLine";

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

                <ArticleComponent />


            </div>
            <PhenomenaTimeline />
            <ArticleComponent2 />
            <ScrollToTopButton />
        </div>
    );
}