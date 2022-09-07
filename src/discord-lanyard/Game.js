import { useLanyard } from "react-use-lanyard";
const DISCORD_ID = "508662064063971348";

export const Game = () => {
	const { lanyard, status } = useLanyard({ userId: DISCORD_ID, socket: true });

	const getGame = () => {
		if (
			!status ||
			status.discord_status === "offline" ||
			status.activities.length === 1
		) {
			return <div></div>;
		} else {
			if (status.activities[1].name !== undefined) {
				return (
					<div>
						<h2 className="font-sans mt-2 antialiased font-bold uppercase text-gray-400 text-xs">
							Playing{" "}
							<span className="text-gray-300">{status.activities[1].name}</span>
						</h2>
						<div className="flex gap-2 items-center text-gray-400 text-sm mt-2">
							<div>{status.activities[1].details}</div>
						</div>
						<div className="flex gap-2 items-center text-gray-400 text-sm mt-2">
							<div>{status.activities[1].state}</div>
						</div>
					</div>
				);
			} else {
				return (
					<img
						className="inline-block"
						src={`https://cdn.discordapp.com/emojis/${status.activities[0].emoji.id}.png`}
						alt={status.activities[0].emoji.name}
						height="40"
						width="40"
					/>
				);
			}
		}
	};

	return <div>{getGame()}</div>;
};
