import {
	AlertCircle,
	Bot,
	CheckCircle2,
	Loader2,
	Mic,
	Video,
} from "lucide-react";
import React from "react";
import type { AgentState } from "../types/agent";

interface AgentCardProps {
	agent: AgentState;
}

export const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
	const getIcon = () => {
		switch (agent.role) {
			case "writer":
				return <Bot className="w-8 h-8" />;
			case "narrator":
				return <Mic className="w-8 h-8" />;
			case "visualizer":
				return <Video className="w-8 h-8" />;
			default:
				return <Bot className="w-8 h-8" />;
		}
	};

	const getStatusColor = () => {
		switch (agent.status) {
			case "IDLE":
				return "bg-slate-50 border-slate-200 text-slate-400";
			case "THINKING":
				return "bg-sky-50 border-sky-200 text-sky-600";
			case "WORKING":
				return "bg-amber-50 border-amber-200 text-amber-600";
			case "COMPLETED":
				return "bg-teal-50 border-teal-200 text-teal-600";
			case "ERROR":
				return "bg-red-50 border-red-200 text-red-600";
		}
	};

	const getStatusIcon = () => {
		switch (agent.status) {
			case "WORKING":
			case "THINKING":
				return <Loader2 className="w-5 h-5 animate-spin" />;
			case "COMPLETED":
				return <CheckCircle2 className="w-5 h-5" />;
			case "ERROR":
				return <AlertCircle className="w-5 h-5" />;
			default:
				return null;
		}
	};

	return (
		<div
			className={`agent-card ${getStatusColor()} flex flex-col items-center text-center gap-3 p-6`}
		>
			<div className="agent-card-icon">{getIcon()}</div>

			<div>
				<h3 className="agent-card-title">{agent.name}</h3>
				<p className="agent-card-role">{agent.role}</p>
			</div>

			<div className="agent-card-status">
				{getStatusIcon()}
				<span>{agent.message}</span>
			</div>
		</div>
	);
};
