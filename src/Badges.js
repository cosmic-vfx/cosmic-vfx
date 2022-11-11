import { useLanyard } from "react-use-lanyard";
import { getFlags } from "./getFlags.js";
import { listBadges } from "./listBadges.js";
const DISCORD_ID = "508662064063971348";

export const Badges = () => {
    const { status } = useLanyard({ userId: DISCORD_ID, socket: true });
    if (!status || !status.discord_user) {
        return <></>;
    }
    let flags = getFlags(status.discord_user.public_flags);

    if (status.discord_user.avatar.startsWith("a_")) {
        flags.push("Nitro");
    }
    flags.push("Cosmic's Globe");

    return (
        <>
            {flags.map((flag) => (
                <div key={flag}>
                    <div className="group flex relative">
                        <img src={listBadges[flag]} width={28} />
                        <div
                            className="group-hover:opacity-100 transition-opacity bg-zinc-700 px-2 py-1 text-sm text-white rounded-md absolute left-1/2 
    -translate-x-1/2 -translate-y-[150%] opacity-0 m-4 mx-auto text-center"
                        >
                            {flag}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};
