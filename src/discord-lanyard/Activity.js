import { useLanyard } from "react-use-lanyard";
const DISCORD_ID = "508662064063971348";

export const Activity = () => {
	const { lanyard, status } = useLanyard({ userId: DISCORD_ID, socket: true });

	const getActivity = () => {
		if (
			!status ||
			status.discord_status === "offline" ||
			status.activities[0] === undefined ||
			status.activities[0].emoji === undefined ||
			!status.activities[0].name === "Custom Status"
		) {
			return <div></div>;
		} else {
			if (status.activities[0].emoji.animated) {
				return (
					<img
						className="inline-block"
						src={`https://cdn.discordapp.com/emojis/${status.activities[0].emoji.id}.gif`}
						alt={status.activities[0].emoji.name}
						height="40"
						width="40"
					/>
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

	return <div>{getActivity()}</div>;
};
