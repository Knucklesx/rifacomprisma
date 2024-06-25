import { PropsWithChildren } from "react";

import "@/styles/app.css";
import "@/styles/globals.css";

import Sidebar from "@/components/sidebar";
import { getServerSession } from "next-auth";
import { Toaster } from "react-hot-toast";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Providers } from "../providers";

export function HeaderStats() {
	return <>{""}</>;
}

export default async function Layout({ children }: PropsWithChildren) {
	const session = await getServerSession(authOptions);
	return (
		<>
			<html lang="en">
				<head>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=no"
					/>
					<meta charSet="utf-8" />
					<meta name="theme-color" content="#000000" />
					<link rel="shortcut icon" href="/img/brand/favicon.ico" />
					<link
						rel="apple-touch-icon"
						sizes="76x76"
						href="/img/brand/apple-icon.png"
					/>
					<title>Vegas Admin</title>
				</head>
				<body className={`text-blueGray-700 antialiased bg-blueGray-100`}>
					<Sidebar />
					<div className="relative md:ml-64 bg-blueGray-100">
						<Toaster />

						<div className="px-4 md:px-10 mx-auto w-full -m-24">
							<Providers>{children}</Providers>
						</div>
					</div>
				</body>
			</html>
		</>
	);
}
