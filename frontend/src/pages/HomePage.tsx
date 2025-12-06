import React from "react";
import Header from "../components/Header";
import TopicInput from "../components/TopicInput";
import { useLessonWorkflow } from "../hooks/useLessonWorkflow";

const HomePage: React.FC = () => {
	const { topic, setTopic, isProcessing, executeGeneration } =
		useLessonWorkflow();

	return (
		<div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-amber-50 font-sans text-slate-800">
			<Header />
			<main className="container mx-auto px-4 pb-20 max-w-5xl">
				<TopicInput
					topic={topic}
					setTopic={setTopic}
					isProcessing={isProcessing}
					executeGeneration={executeGeneration}
				/>
			</main>
		</div>
	);
};

export default HomePage;
