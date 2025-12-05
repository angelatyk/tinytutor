export type AgentStatus = "IDLE" | "WORKING" | "COMPLETED" | "ERROR";

export interface AgentState {
	id: string;
	name: string;
	role: "writer" | "narrator" | "visualizer";
	status: AgentStatus;
	message: string;
}
