export type AgentStatus =
	| "IDLE"
	| "THINKING"
	| "WORKING"
	| "COMPLETED"
	| "ERROR";

export type AgentRole = "writer" | "narrator" | "visualizer";

export interface AgentState {
	id: string;
	name: string;
	role: AgentRole;
	status: AgentStatus;
	message: string;
}
