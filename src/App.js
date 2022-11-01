import Typewriter from "typewriter-effect";
import { Avatar } from "./discord-lanyard/Avatar";
import { Name } from "./discord-lanyard/Name";
import { Status } from "./discord-lanyard/Status";
import { Activity } from "./discord-lanyard/Activity";
import { Game } from "./discord-lanyard/Game";
import { Location } from "./discord-lanyard/Location";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineYoutube, AiOutlineArrowDown } from "react-icons/ai";
import { FiTwitter, FiGithub } from "react-icons/fi";
import { useLanyard } from "react-use-lanyard";
const DISCORD_ID = "508662064063971348";
export default function App() {
    const { status } = useLanyard({ userId: DISCORD_ID, socket: true });
    if (!status || !status.discord_user) {
        return (
            <div className="flex flex-col justify-center items-center h-screen w-full bg-zinc-800 text-white">
                <h1 className="text-4xl font-black">Loading...</h1>
            </div>
        );
    }
    let colour;
    if (status.discord_status == "online") colour = "green";
    if (status.discord_status == "offline") colour = "gray";
    if (status.discord_status == "idle") colour = "yellow";
    if (status.discord_status == "dnd") colour = "red";
    return (
        <div className="react">
            <div className="border-red-500 shadow-red-500"></div>
            <div className="border-green-500 shadow-green-500"></div>
            <div className="border-gray-500 shadow-gray-500"></div>
            <div className="border-yellow-500 shadow-yellow-500"></div>
            <div className="h-screen w-screen bg-zinc-800 text-light-500">
                <div className="h-full container mx-auto">
                    <div className="grid place-items-center h-full">
                        <div className="min-w-[19rem]">
                            <div className="typewriter-container">
                                <div className="font-sans antialiased font-semibold text-4xl text-center select-none my-4">
                                    <Typewriter
                                        onInit={(typewriter) => {
                                            typewriter
                                                .changeDelay(50)
                                                .typeString(
                                                    'Hello, I\'m <span class="text-sky-500 ">Cosmic</span>'
                                                )
                                                .callFunction(() => {
                                                    typewriter.stop();
                                                })
                                                .start();
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                className={`grid-4 p-5 min-h-[13rem] border-2 border-${colour}-500 bg-zinc-800 rounded-md  transition-all shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)]`}
                            >
                                <div className="flex flex-col">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex place-content-between">
                                            <div className="flex flex-row ml-2  items-center space-x-4 mb-2">
                                                <div className="inline-block relative h-16">
                                                    <Avatar colour={colour} />
                                                </div>
                                                <div className="">
                                                    <Name />
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <Location />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div className="flex flex-col gap-4">
                                            <div>
                                                <div
                                                    className={`flex flex-wrap flex-row rounded-md bg-zinc-700 font-sans items-center w-full`}
                                                >
                                                    <Activity />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        className="text-lg bg-sky-400 p-2 rounded-md hover:bg-sky-500 mt-4 text-center transition-all duration-100 ease-linear"
                                        href={`https://discord.com/users/${DISCORD_ID}`}
                                        target="_blank"
                                    >
                                        View Profile
                                    </a>
                                </div>
                                <div className="grid grid-flow-col place-items-center mt-4">
                                    <a
                                        className="cursor-pointer hover:text-sky-500 hover:scale-125 transition-all"
                                        href="https://github.com/cosrnic"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FiGithub size={24} />
                                    </a>
                                    <a
                                        className="cursor-pointer hover:text-sky-500 hover:scale-125 transition-all antialiased"
                                        href="https://twitter.com/cosrnic_"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FiTwitter size={24} />
                                    </a>
                                    <a
                                        className="cursor-pointer hover:text-sky-500 hover:scale-125 transition-all antialiased"
                                        href="https://www.youtube.com/channel/UC5oqJF5goUYYcdSmLyEIV7Q"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <AiOutlineYoutube size={32} />
                                    </a>
                                    <a
                                        className="cursor-pointer hover:text-sky-500 hover:scale-125 transition-all antialiased"
                                        href="https://cosrnic.uk"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <CgWebsite size={28} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
