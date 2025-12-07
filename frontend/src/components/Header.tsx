import { GraduationCap } from "lucide-react";
import React from "react";

const Header: React.FC = () => {
	return (
		<header className="pt-10 pb-8 px-4 text-center">
			{/* Logo */}
			<div className="flex items-center justify-center gap-4 mb-4">
				<div className="header-logo header-logo-hover">🦉</div>
			</div>

			<h1 className="text-5xl md:text-6xl mb-2 header-title">
				Tiny<span className="text-teal-500">Tutor</span>
			</h1>

			<p className="text-lg max-w-xl mx-auto header-subtitle">
				<GraduationCap className="w-5 h-5 text-amber-400" />
				AI Agentic Educational Media Generator
			</p>
		</header>
	);
};

export default Header;
