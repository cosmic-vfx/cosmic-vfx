import { useLanyard } from "react-use-lanyard";
const DISCORD_ID = "508662064063971348";

export const Name = () => {
  const { status } = useLanyard({ userId: DISCORD_ID, socket: true });

  const getName = () => {
    if (!status) {
      return (
        <h1 className="font-sans antialiased font-semibold text-lg">
          loading..
          <span className="text-gray-400">#loading..</span>
        </h1>
      );
    } else {
      return (
        <h1 className="font-sans antialiased font-semibold text-lg ">
          {status.discord_user.username}
          <span className="text-gray-400">
            #{status.discord_user.discriminator}
          </span>
        </h1>
      );
    }
  };

  return <div>{getName()}</div>;
};
