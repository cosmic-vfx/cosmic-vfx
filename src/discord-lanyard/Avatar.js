import { useLanyard } from "react-use-lanyard";
const DISCORD_ID = "508662064063971348";

export const Avatar = () => {
  const { status } = useLanyard({ userId: DISCORD_ID, socket: true });

  const getAvatar = () => {
    if (!status) {
      return (
        <img
          className="rounded-full"
          src=""
          alt="cosmic#0001"
          width="64"
          height="64"
        ></img>
      );
    } else if (status.discord_status === "online") {
      return (
        <div>
          <div className="absolute h-[5rem] w-[5rem] -bottom-2 -right-2 border-[4px] border-green-500 rounded-full shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.1)] shadow-green-500"></div>
          <img
            className="rounded-full"
            src={`https://cdn.discordapp.com/avatars/508662064063971348/${status.discord_user.avatar}.png?size=4096`}
            alt={
              status.discord_user.username +
              "#" +
              status.discord_user.discriminator
            }
            width="64"
            height="64"
          ></img>
        </div>
      );
    } else if (status.discord_status === "idle") {
      return (
        <div>
          <div className="absolute h-[5rem] w-[5rem] -bottom-2 -right-2 border-[4px] border-yellow-500 rounded-full shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.1)] shadow-yellow-500"></div>
          <img
            className="rounded-full"
            src={`https://cdn.discordapp.com/avatars/508662064063971348/${status.discord_user.avatar}.png?size=4096`}
            alt={
              status.discord_user.username +
              "#" +
              status.discord_user.discriminator
            }
            width="64"
            height="64"
          ></img>
        </div>
      );
    } else if (status.discord_status === "dnd") {
      return (
        <div>
          <div className="absolute h-[5rem] w-[5rem] -bottom-2 -right-2 border-[4px] border-red-500 rounded-full shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.1)] shadow-red-500"></div>
          <img
            className="rounded-full"
            src={`https://cdn.discordapp.com/avatars/508662064063971348/${status.discord_user.avatar}.png?size=4096`}
            alt={
              status.discord_user.username +
              "#" +
              status.discord_user.discriminator
            }
            width="64"
            height="64"
          ></img>
        </div>
      );
    } else if (status.discord_status === "offline") {
      return (
        <div>
          <div className="absolute h-[5rem] w-[5rem] -bottom-2 -right-2 border-[4px] border-gray-500 rounded-full shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.1)] shadow-gray-500"></div>
          <img
            className="rounded-full"
            src={`https://cdn.discordapp.com/avatars/508662064063971348/${status.discord_user.avatar}.png?size=4096`}
            alt={
              status.discord_user.username +
              "#" +
              status.discord_user.discriminator
            }
            width="64"
            height="64"
          ></img>
        </div>
      );
    }
  };

  return <div>{getAvatar()}</div>;
};
