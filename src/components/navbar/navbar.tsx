"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NavBar({ transparent = false }) {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const router = useRouter();

	return (
		<>
			<nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						<Link
							href="/"
							className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
						>
							VEGAS
						</Link>
						<button
							className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<i className="text-white fas fa-bars"></i>
						</button>
					</div>

					<li className="flex items-center">
						<a
							className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
							// type="button"
							target="_blank"
							//onClick={handleClick}
							href="/"
						>
							<i className="fas fa-arrow-alt-circle-down"></i> Download
						</a>
					</li>
				</div>
			</nav>
		</>
	);
}
