import { useLanyard } from "react-use-lanyard";
const DISCORD_ID = "508662064063971348";

export const Location = () => {
	const { lanyard, status } = useLanyard({ userId: DISCORD_ID, socket: true });

	const getLocation = () => {
		if (!status || !status.kv.location) {
			return (
				<h1 className="font-sans antialiased font-semibold text-lg">
					<img
						className="rounded-md"
						src="https://countryflagsapi.com/png/wales"
						height="50"
						width="50"
						alt="wales"
					/>
					Loading..
				</h1>
			);
		} else {
			return (
				<h1 className="font-sans antialiased font-semibold text-lg">
					<img
						className="rounded-md"
						src={`https://countryflagsapi.com/png/${status.kv.location}`}
						height="50"
						width="50"
						alt={status.kv.location}
					/>
					{status.kv.location}
				</h1>
			);
		}
	};

	return <div>{getLocation()}</div>;
};
