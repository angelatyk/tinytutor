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
		<div className="mb-12 max-w-3xl mx-auto">
			<div className="bg-white rounded-3xl p-3 shadow-xl shadow-slate-300 border border-slate-300">
				<div className="flex flex-col sm:flex-row gap-2">
					{/* Input Field */}
					<input
						type="text"
						value={topic}
						onChange={(e) => setTopic(e.target.value)}
						placeholder="What do you want to learn today?"
						className="flex-1 px-6 py-4 text-lg rounded-2xl border-2 border-slate-300 focus:border-amber-400 focus:outline-none bg-slate-50 focus:bg-white transition-all placeholder:text-slate-400"
						disabled={isProcessing}
						onKeyDown={handleKeyDown}
					/>

					{/* Button */}
					<button
						onClick={() => executeGeneration(topic)}
						disabled={isButtonDisabled}
						className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold text-lg rounded-2xl hover:translate-y-[-2px] active:translate-y-[1px] transition-all shadow-md shadow-orange-200 disabled:opacity-50 disabled:hover:translate-y-0 disabled:shadow-none flex items-center justify-center gap-2 cursor-pointer"
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
		</div>
	);
};

export default TopicInput;
