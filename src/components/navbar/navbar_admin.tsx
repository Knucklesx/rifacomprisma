// "use client";
// import { useTheme } from "next-themes";
// import { usePathname } from "next/navigation";
// import { PropsWithChildren } from "react";
// import { ModeTogle } from "../buttons/themeChange.button";

// export type AdminNavBarProps = PropsWithChildren<{}>;

// export default function AdminNavBar({ children }: AdminNavBarProps) {
// 	const pathname = usePathname();
// 	const { theme } = useTheme();

// 	return (
// 		<>
// 			<nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
// 				<div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
// 					<a
// 						className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
// 						href="#vegas"
// 					>
// 						{pathname}
// 					</a>
// 					<form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
// 						<div className="relative flex w-full flex-wrap items-stretch">
// 							<span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
// 								<i className="fas fa-search"></i>
// 							</span>
// 							<input
// 								type="text"
// 								disabled={true}
// 								value=""
// 								placeholder="Pesquisa..."
// 								className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
// 							/>
// 						</div>
// 					</form>
// 					<ul className="flex-col md:flex-row list-none items-center hidden md:flex"></ul>
// 					{children}
// 				</div>
// 			</nav>
// 			<div className="relative bg-blueGray-800 md:pt-32 pb-36 pt-12">
// 				<div className="px-4 md:px-10 mx-auto w-full">
// 					<div></div>
// 				</div>
// 			</div>
// 			<ModeTogle />
// 		</>
// 	);
// }
"use client";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import { ModeTogle } from "../buttons/themeChange.button";

export type AdminNavBarProps = PropsWithChildren<{}>;

export default function AdminNavBar({ children }: AdminNavBarProps) {
	const pathname = usePathname();
	const { theme } = useTheme();

	return (
		<>
			<nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
				<div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
					<a
						className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
						href="#vegas"
					>
						{pathname}
					</a>
					<div className="flex items-center justify-end w-full">
						<form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
							<div className="relative flex w-full flex-wrap items-stretch">
								<span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
									<i className="fas fa-search"></i>
								</span>
								<input
									type="text"
									disabled={true}
									value=""
									placeholder="Pesquisa..."
									className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
								/>
							</div>
						</form>
						<div className="mr-0">
							<ModeTogle />
						</div>
					</div>
					<ul className="flex-col md:flex-row list-none items-center hidden md:flex"></ul>
					{children}
				</div>
			</nav>
			<div className="relative bg-blueGray-800 md:pt-32 pb-36 pt-12">
				<div className="px-4 md:px-10 mx-auto w-full">
					<div></div>
				</div>
			</div>
		</>
	);
}
