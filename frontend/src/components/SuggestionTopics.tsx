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
			<div className="suggestion-label">
				<Lightbulb className="w-4 h-4" />
				<span>Try asking about...</span>
			</div>

			<div className="flex flex-wrap justify-center gap-3">
				{SUGGESTIONS.map((suggestion) => (
					<button
						key={suggestion}
						onClick={() => onSelect(suggestion)}
						disabled={disabled}
						className={`
							suggestion-button px-4 py-2
							${disabled ? "suggestion-button-disabled" : "suggestion-button-hover"}
						`}
					>
						{suggestion}
					</button>
				))}
			</div>
		</div>
	);
};

export default SuggestionTopics;
