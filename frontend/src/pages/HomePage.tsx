import React from "react";
import Header from "../components/Header";
import SuggestionTopics from "../components/SuggestionTopics";
import TopicInput from "../components/TopicInput";
import { useLessonWorkflow } from "../hooks/useLessonWorkflow";

const HomePage: React.FC = () => {
	const { topic, setTopic, isProcessing, executeGeneration } =
		useLessonWorkflow();

	const handleSuggestionClick = (suggestion: string) => {
		setTopic(suggestion);
		executeGeneration(suggestion);
	};

	return (
		<div className="page-wrapper font-sans text-slate-800">
			<Header />
			<main className="main-container">
				<div className="content-box">
					<TopicInput
						topic={topic}
						setTopic={setTopic}
						isProcessing={isProcessing}
						executeGeneration={executeGeneration}
					/>

					<SuggestionTopics
						onSelect={handleSuggestionClick}
						disabled={isProcessing}
					/>
				</div>
			</main>
		</div>
	);
};

export default HomePage;
