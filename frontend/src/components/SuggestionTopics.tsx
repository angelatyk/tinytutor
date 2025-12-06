import { Lightbulb } from "lucide-react";
import React from "react";

const SUGGESTIONS = [
	"What is AI?",
	"Why is the sky blue?",
	"How do planes fly?",
	"How do plants eat?",
];

interface SuggestionTopicsProps {
	onSelect: (suggestion: string) => void;
	disabled: boolean;
}

const SuggestionTopics: React.FC<SuggestionTopicsProps> = ({
	onSelect,
	disabled,
}) => {
	return (
		<div className="mt-6">
			<div className="flex items-center justify-center gap-2 text-slate-400 text-sm font-semibold mb-3">
				<Lightbulb className="w-4 h-4" />
				<span>Try asking about...</span>
			</div>
			<div className="flex flex-wrap justify-center gap-3">
				{SUGGESTIONS.map((suggestion) => (
					<button
						key={suggestion}
						onClick={() => onSelect(suggestion)}
						disabled={disabled}
						className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-600 text-sm font-medium hover:border-amber-400 hover:text-amber-600 hover:bg-amber-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
					>
						{suggestion}
					</button>
				))}
			</div>
		</div>
	);
};

export default SuggestionTopics;
