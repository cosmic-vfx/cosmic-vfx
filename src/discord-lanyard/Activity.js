import { useLanyard } from "react-use-lanyard";
const DISCORD_ID = "508662064063971348";

export const Activity = () => {
  const { status } = useLanyard({ userId: DISCORD_ID, socket: true });

  const getActivity = () => {
    if (
      !status ||
      status.discord_status === "offline" ||
      status.activities[0] === undefined ||
      !status.activities[0].name === "Custom Status"
    ) {
      return <div></div>;
    } else {
      if (
        status.activities[0].emoji !== undefined &&
        status.activities[0].emoji.animated
      ) {
        return (
          <div className="flex flex-wrap border-2 rounded-lg border-sky-500 py-1 px-3 bg-dark-500 font-sans text-center">
            <img
              className="inline-block"
              src={`https://cdn.discordapp.com/emojis/${status.activities[0].emoji.id}.gif`}
              alt={status.activities[0].emoji.name}
              height="40"
              width="40"
            />
            <p className="ml-2.5 my-2">{status.activities[0].state}</p>
          </div>
        );
      } else if (
        status.activities[0].emoji !== undefined &&
        !status.activities[0].emoji.animated
      ) {
        return (
          <div className="flex flex-wrap border-2 rounded-lg border-sky-500 py-1 px-3 bg-dark-500 font-sans text-center">
            <img
              className="inline-block"
              src={`https://cdn.discordapp.com/emojis/${status.activities[0].emoji.id}.png`}
              alt={status.activities[0].emoji.name}
              width="40"
              height="20"
            />
            <p className="ml-2.5 my-2">{status.activities[0].state}</p>
          </div>
        );
      }
      return (
        <div className="flex flex-wrap border-2 rounded-lg border-sky-500 py-1 px-3 bg-dark-500 font-sans text-center">
          <p>{status.activities[0].state}</p>
        </div>
      );
    }
  };

  return <div>{getActivity()}</div>;
};
