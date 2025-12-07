import { BookOpen, RefreshCw } from "lucide-react";
import React from "react";
import type { useLessonWorkflow } from "../hooks/useLessonWorkflow";

type TopicInputHook = ReturnType<typeof useLessonWorkflow>;

interface TopicInputProps {
	topic: TopicInputHook["topic"];
	setTopic: TopicInputHook["setTopic"];
	isProcessing: TopicInputHook["isProcessing"];
	executeGeneration: TopicInputHook["executeGeneration"];
}

const TopicInput: React.FC<TopicInputProps> = ({
	topic,
	setTopic,
	isProcessing,
	executeGeneration,
}) => {
	const isButtonDisabled = isProcessing || !topic.trim();

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter" && !isButtonDisabled) {
			executeGeneration(topic);
		}
	};

	return (
		<div className="topic-input-card">
			<div className="flex flex-col sm:flex-row gap-2">
				{/* Input Field */}
				<input
					type="text"
					value={topic}
					onChange={(e) => setTopic(e.target.value)}
					placeholder="What do you want to learn today?"
					className="topic-input-field flex-1"
					disabled={isProcessing}
					onKeyDown={handleKeyDown}
				/>

				{/* Button */}
				<button
					onClick={() => executeGeneration(topic)}
					disabled={isButtonDisabled}
					className={`
						topic-input-button px-8 py-4
						${isButtonDisabled ? "topic-input-button-disabled" : "topic-input-button-hover"}
					`}
				>
					{isProcessing ? (
						<RefreshCw className="animate-spin" />
					) : (
						<BookOpen />
					)}
					Start Lesson
				</button>
			</div>
		</div>
	);
};

export default TopicInput;
