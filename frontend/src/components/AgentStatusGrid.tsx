import React from "react";
import type { AgentState } from "../types/agent";
import { AgentCard } from "./AgentCard";

interface AgentStatusGridProps {
	agents: AgentState[];
}

const AgentStatusGrid: React.FC<AgentStatusGridProps> = ({ agents }) => {
	if (agents.length === 0) {
		return null;
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
			{agents.map((agent) => (
				<AgentCard key={agent.id} agent={agent} />
			))}
		</div>
	);
};

export default AgentStatusGrid;
