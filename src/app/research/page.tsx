import ArticleComponent from "@/components/research/Article";
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
        </div>
    );
}