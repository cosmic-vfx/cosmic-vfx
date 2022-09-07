import Typewriter from "typewriter-effect";
import { Avatar } from "./discord-lanyard/Avatar";
import { Name } from "./discord-lanyard/Name";
import { Status } from "./discord-lanyard/Status";
import { Activity } from "./discord-lanyard/Activity";
import { Game } from "./discord-lanyard/Game";
import { Location } from "./discord-lanyard/Location";

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
												.changeDelay(70)
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
									className="cursor-pointer hover:text-sky-500 hover:scale-105 transition-all"
									href="https://github.com/cosrnic"
									target="_blank"
									rel="noopener noreferrer"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="inline-block"
									>
										<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
									</svg>
								</a>
								<a
									className="cursor-pointer hover:text-sky-500 hover:scale-105 transition-all"
									href="https://twitter.com/cosrnic_"
									target="_blank"
									rel="noopener noreferrer"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="inline-block"
									>
										<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
									</svg>
								</a>
								<a
									className="cursor-pointer hover:text-sky-500 hover:scale-105 transition-all"
									href="https://www.youtube.com/channel/UC5oqJF5goUYYcdSmLyEIV7Q"
									target="_blank"
									rel="noopener noreferrer"
								>
									<svg
										stroke="currentColor"
										fill="currentColor"
										strokeWidth="0"
										viewBox="0 0 1024 1024"
										height="28"
										width="28"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M960 509.2c0-2.2 0-4.7-.1-7.6-.1-8.1-.3-17.2-.5-26.9-.8-27.9-2.2-55.7-4.4-81.9-3-36.1-7.4-66.2-13.4-88.8a139.52 139.52 0 0 0-98.3-98.5c-28.3-7.6-83.7-12.3-161.7-15.2-37.1-1.4-76.8-2.3-116.5-2.8-13.9-.2-26.8-.3-38.4-.4h-29.4c-11.6.1-24.5.2-38.4.4-39.7.5-79.4 1.4-116.5 2.8-78 3-133.5 7.7-161.7 15.2A139.35 139.35 0 0 0 82.4 304C76.3 326.6 72 356.7 69 392.8c-2.2 26.2-3.6 54-4.4 81.9-.3 9.7-.4 18.8-.5 26.9 0 2.9-.1 5.4-.1 7.6v5.6c0 2.2 0 4.7.1 7.6.1 8.1.3 17.2.5 26.9.8 27.9 2.2 55.7 4.4 81.9 3 36.1 7.4 66.2 13.4 88.8 12.8 47.9 50.4 85.7 98.3 98.5 28.2 7.6 83.7 12.3 161.7 15.2 37.1 1.4 76.8 2.3 116.5 2.8 13.9.2 26.8.3 38.4.4h29.4c11.6-.1 24.5-.2 38.4-.4 39.7-.5 79.4-1.4 116.5-2.8 78-3 133.5-7.7 161.7-15.2 47.9-12.8 85.5-50.5 98.3-98.5 6.1-22.6 10.4-52.7 13.4-88.8 2.2-26.2 3.6-54 4.4-81.9.3-9.7.4-18.8.5-26.9 0-2.9.1-5.4.1-7.6v-5.6zm-72 5.2c0 2.1 0 4.4-.1 7.1-.1 7.8-.3 16.4-.5 25.7-.7 26.6-2.1 53.2-4.2 77.9-2.7 32.2-6.5 58.6-11.2 76.3-6.2 23.1-24.4 41.4-47.4 47.5-21 5.6-73.9 10.1-145.8 12.8-36.4 1.4-75.6 2.3-114.7 2.8-13.7.2-26.4.3-37.8.3h-28.6l-37.8-.3c-39.1-.5-78.2-1.4-114.7-2.8-71.9-2.8-124.9-7.2-145.8-12.8-23-6.2-41.2-24.4-47.4-47.5-4.7-17.7-8.5-44.1-11.2-76.3-2.1-24.7-3.4-51.3-4.2-77.9-.3-9.3-.4-18-.5-25.7 0-2.7-.1-5.1-.1-7.1v-4.8c0-2.1 0-4.4.1-7.1.1-7.8.3-16.4.5-25.7.7-26.6 2.1-53.2 4.2-77.9 2.7-32.2 6.5-58.6 11.2-76.3 6.2-23.1 24.4-41.4 47.4-47.5 21-5.6 73.9-10.1 145.8-12.8 36.4-1.4 75.6-2.3 114.7-2.8 13.7-.2 26.4-.3 37.8-.3h28.6l37.8.3c39.1.5 78.2 1.4 114.7 2.8 71.9 2.8 124.9 7.2 145.8 12.8 23 6.2 41.2 24.4 47.4 47.5 4.7 17.7 8.5 44.1 11.2 76.3 2.1 24.7 3.4 51.3 4.2 77.9.3 9.3.4 18 .5 25.7 0 2.7.1 5.1.1 7.1v4.8zM423 646l232-135-232-133z"></path>
									</svg>
								</a>
								<a
									className="cursor-pointer hover:text-sky-500 hover:scale-105 transition-all"
									href="https://cosrnic.uk"
									target="_blank"
									rel="noopener noreferrer"
								>
									<svg
										stroke="currentColor"
										fill="none"
										stroke-width="0"
										viewBox="0 0 24 24"
										height="28"
										width="28"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M14 7C13.4477 7 13 7.44772 13 8V16C13 16.5523 13.4477 17 14 17H18C18.5523 17 19 16.5523 19 16V8C19 7.44772 18.5523 7 18 7H14ZM17 9H15V15H17V9Z"
											fill="currentColor"
										></path>
										<path
											d="M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H6Z"
											fill="currentColor"
										></path>
										<path
											d="M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H10C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11H6Z"
											fill="currentColor"
										></path>
										<path
											d="M5 16C5 15.4477 5.44772 15 6 15H10C10.5523 15 11 15.4477 11 16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16Z"
											fill="currentColor"
										></path>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z"
											fill="currentColor"
										></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
