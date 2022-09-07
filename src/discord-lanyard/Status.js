import { useLanyard } from "react-use-lanyard";
const DISCORD_ID = "508662064063971348";

export const Status = () => {
	const { lanyard, status } = useLanyard({ userId: DISCORD_ID, socket: true });

	const getStatus = () => {
		if (!status || status.discord_status === "offline") {
			return (
				(
					<div className="absolute h-6 w-6 -bottom-1 -right-1 border-[4px] border-dark-500 rounded-full bg-gray-500"></div>
				),
				(
					<div className="absolute h-16 border-[4px] border-dark-500 rounded-full bg-gray-500"></div>
				)
			);
		} else if (status.discord_status === "idle") {
			return (
				// <div className="absolute h-6 w-6 -bottom-1 -right-1 border-[4px] border-dark-500 rounded-full bg-orange-500"></div>
				<svg
					className="absolute h-6 w-6 -bottom-1 -right-1 border-[4px] border-dark-500 rounded-full bg-dark-500 text-yellow-500"
					stroke="currentColor"
					fill="currentColor"
					stroke-width="0"
					viewBox="0 0 16 16"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
				</svg>
			);
		} else if (status.discord_status === "dnd") {
			return (
				// <div className="absolute h-6 w-6 -bottom-1 -right-1 border-[4px] border-dark-500 rounded-full bg-red-500"></div>
				<svg
					className="absolute h-6 w-6 -bottom-1 -right-1 border-[4px] border-dark-500 rounded-full bg-dark-500 text-red-500"
					stroke="currentColor"
					fill="currentColor"
					stroke-width="0"
					viewBox="0 0 512 512"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z"></path>
				</svg>
			);
		} else if (
			!status.active_on_discord_desktop &&
			status.active_on_discord_mobile
		) {
			return (
				// <div className="absolute h-6 w-6 -bottom-1 -right-1 border-[4px] border-dark-500 rounded-full bg-green-500"></div>
				<svg
					className="absolute h-8 w-6 -bottom-2 -right-1 bg-dark-500 text-green-500 rounded-lg p-1"
					stroke="currentColor"
					fill="currentColor"
					stroke-width="0"
					viewBox="0 0 320 512"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
				</svg>
			);
		} else if (
			status.discord_status === "online" &&
			status.active_on_discord_desktop
		) {
			return (
				<div className="absolute h-6 w-6 -bottom-1 -right-1 border-[4px] border-dark-500 rounded-full bg-green-500"></div>
			);
		}
	};

	return <div>{getStatus()}</div>;
};
