import { useLanyard } from "react-use-lanyard";
const DISCORD_ID = "508662064063971348";

export const Avatar = ({ colour }) => {
    const { status } = useLanyard({ userId: DISCORD_ID, socket: true });

    const getAvatar = () => {
        if (!status) {
            return (
                <img
                    className="rounded-full bg-blue-500"
                    src="/images/discord-default.png"
                    alt="loading#loading"
                    width="64"
                    height="64"
                ></img>
            );
        } else {
            return (
                <div>
                    <div
                        className={` absolute h-[5rem] w-[5rem] -bottom-2 -right-2 border-[4px] border-${colour}-500 rounded-full shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.1)] shadow-${colour}-500`}
                    ></div>
                    <img
                        className="rounded-full"
                        src={
                            status.discord_user.avatar.startsWith("a_")
                                ? `https://cdn.discordapp.com/avatars/${DISCORD_ID}/${status.discord_user.avatar}.gif?size=4096`
                                : `https://cdn.discordapp.com/avatars/${DISCORD_ID}/${status.discord_user.avatar}.png?size=4096`
                        }
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
