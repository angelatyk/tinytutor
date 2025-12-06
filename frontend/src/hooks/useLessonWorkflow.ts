import { useState } from "react";
// import { generateAudio, generateScript, generateVideo } from "../api/lessonApi";
import type { AgentState } from "../types/agent";
import type { GenerationResult } from "../types/result";

/**
 * Initial state of the agents.
 * Each agent represents a step in the lesson generation workflow.
 */
export const INITIAL_AGENTS: AgentState[] = [
	{
		id: "1",
		name: "Oliver Owl",
		role: "writer",
		status: "IDLE",
		message: "Ready to teach!",
	},
	{
		id: "2",
		name: "Narrator Noah",
		role: "narrator",
		status: "IDLE",
		message: "Waiting for script...",
	},
	{
		id: "3",
		name: "Director Sam",
		role: "visualizer",
		status: "IDLE",
		message: "Camera ready.",
	},
];

/**
 * Custom hook for managing the lesson generation workflow.
 * Encapsulates all state and logic needed to generate script, audio, and video.
 */
export function useLessonWorkflow() {
	const [topic, setTopic] = useState("");
	const [agents, setAgents] = useState<AgentState[]>(INITIAL_AGENTS);
	// holds the result of generation: script, audio URL, and video URL
	const [result, setResult] = useState<GenerationResult>({
		script: "",
		audioUrl: null,
		videoUrl: null,
	});
	// flag to indicate if a workflow is currently running
	const [isProcessing, setIsProcessing] = useState(false);

	/**
	 * Updates a single agent by ID with new properties
	 * @param agentId - The ID of the agent to update
	 * @param updatedProperties - The properties to update for this agent
	 */
	const updateAgent = (
		agentId: string,
		updatedProperties: Partial<AgentState>
	) => {
		setAgents((currentAgents) =>
			currentAgents.map((agent) =>
				agent.id === agentId
					? { ...agent, ...updatedProperties }
					: agent
			)
		);
	};

	/**
	 * Main workflow function to generate the lesson.
	 * 1. Generate script
	 * 2. Generate audio & video in parallel
	 * Updates agent status and messages along the way.
	 */
	const executeGeneration = async (selectedTopic: string) => {
		if (!selectedTopic.trim()) return;

		// reset workflow state
		setIsProcessing(true);
		setResult({ script: "", audioUrl: null, videoUrl: null });
		setAgents(
			INITIAL_AGENTS.map((a) => ({
				...a,
				status: "IDLE",
				message: "Ready",
			}))
		);

		try {
			// script generation
			updateAgent("1", {
				status: "WORKING",
				message: "Drafting the lesson...",
			});
			// const script = await generateScript(selectedTopic);
			// updateAgent("1", {
			// 	status: "COMPLETED",
			// 	message: "Lesson planned!",
			// });
			// setResult((prev: GenerationResult) => ({ ...prev, script }));

			// parallel processing: Audio & Video
			updateAgent("2", {
				status: "WORKING",
				message: "Recording voiceover...",
			});
			updateAgent("3", {
				status: "WORKING",
				message: "Animating concepts...",
			});

			// audio generation
			// const audioPromise = generateAudio(script)
			// 	.then((url: string) => {
			// 		updateAgent("2", {
			// 			status: "COMPLETED",
			// 			message: "Audio ready!",
			// 		});
			// 		setResult((prev: GenerationResult) => ({
			// 			...prev,
			// 			audioUrl: url,
			// 		}));
			// 	})
			// 	.catch(() => {
			// 		updateAgent("2", {
			// 			status: "ERROR",
			// 			message: "Microphone issue!",
			// 		});
			// 	});

			// video generation
			// const videoPromise = generateVideo(selectedTopic)
			// 	.then((url: string) => {
			// 		updateAgent("3", {
			// 			status: "COMPLETED",
			// 			message: "Animation done!",
			// 		});
			// 		setResult((prev: GenerationResult) => ({
			// 			...prev,
			// 			videoUrl: url,
			// 		}));
			// 	})
			// 	.catch(() => {
			// 		updateAgent("3", {
			// 			status: "ERROR",
			// 			message: "Camera jam!",
			// 		});
			// 	});

			// wait for both audio & video to finish (success or failure)
			// await Promise.allSettled([audioPromise, videoPromise]);
		} catch (error) {
			console.error("Workflow error:", error);
			// if script failed, mark writer as error
			if (!result.script) {
				updateAgent("1", {
					status: "ERROR",
					message: "Writer block!",
				});
			}
		} finally {
			// workflow finished
			setIsProcessing(false);
		}
	};

	return { topic, setTopic, agents, result, isProcessing, executeGeneration };
}
