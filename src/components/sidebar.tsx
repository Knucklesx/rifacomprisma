"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
	const { theme } = useTheme();
	const [collapseShow, setCollapseShow] = useState("hidden");
	const router = usePathname() || "";
	const myRouter = useRouter();
	return (
		<>
			<nav
				className={`md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl ${
					theme === "dark" ? "bg-gray-900" : "bg-white"
				} flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6`}
			>
				<div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
					<button
						className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
						type="button"
						onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
					></button>
					<Link
						href="/admin"
						className={`md:block text-left md:pb-2 ${
							theme === "dark" ? "text-white" : "text-blueGray-600"
						} mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0`}
					>
						RIFAS
					</Link>
					<ul className="md:hidden items-center flex flex-wrap list-none">
						<li className="inline-block relative"></li>
						<li className="inline-block relative"></li>
					</ul>
				</div>
			</nav>
		</>
	);
}
