import React from "react";
import Header from "../components/Header";

const HomePage: React.FC = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-amber-50 font-sans text-slate-800">
			<Header />
		</div>
	);
};

export default HomePage;
