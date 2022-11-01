import { useLanyard } from "react-use-lanyard";
const DISCORD_ID = "508662064063971348";

export const Location = () => {
    const { status } = useLanyard({ userId: DISCORD_ID, socket: true });
    function defaultSRC(e) {
        e.target.src = "/images/discord-default.png";
    }
    const getLocation = () => {
        if (!status || !status.kv?.location) {
            return <></>;
        } else {
            return (
                <h1 className="font-sans antialiased font-semibold text-lg text-center align-center">
                    <img
                        className="rounded-md align-center mx-auto"
                        src={`https://countryflagsapi.com/png/${status.kv.location}`}
                        height="50"
                        width="50"
                        alt={status.kv.location}
                        onError={(e) => defaultSRC(e)}
                    />
                    {status.kv.location}
                </h1>
            );
        }
    };

    return <div>{getLocation()}</div>;
};
