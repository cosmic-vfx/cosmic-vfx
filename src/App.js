import Typewriter from "typewriter-effect";
import { Avatar } from "./discord-lanyard/Avatar";
import { Name } from "./discord-lanyard/Name";
import { Status } from "./discord-lanyard/Status";
import { Activity } from "./discord-lanyard/Activity";
import { Game } from "./discord-lanyard/Game";
import { Location } from "./discord-lanyard/Location";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiTwitter, FiGithub } from "react-icons/fi";

export default function App() {
  return (
    <div className="react">
      <div className="h-screen w-screen bg-dark-500 text-light-500">
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
              <div className="grid-4 p-5 min-h-[13rem] border-2 border-sky-500/80 rounded-md hover:shadow-gray-800 transition-all shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)]">
                <div className="flex flex-col">
                  <div className="flex flex-col gap-2">
                    <div className="flex place-content-between">
                      <div className="inline-block relative h-16">
                        <Avatar />

                        {/* <Status /> */}
                      </div>
                      <div className="text-right">
                        <Location />
                      </div>
                    </div>
                    <div>
                      <Name />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex flex-col gap-4">
                      <div>
                        <h2 className="font-sans antialiased font-bold uppercase text-gray-400 text-xs">
                          Custom status
                        </h2>
                        <div className="flex gap-2 items-center mt-2">
                          <Activity />
                        </div>
                        {/* <Game /> */}
                      </div>
                    </div>
                  </div>
                </div>
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
  );
}
