import { PropsWithChildren } from "react";

import "@/styles/app.css";
import "@/styles/globals.css";

import AdminNavBar from "@/components/navbar/navbar_admin";
import Sidebar from "@/components/sidebar";
import { getServerSession } from "next-auth";
import { Toaster } from "react-hot-toast";
import { authOptions } from "../api/auth/[...nextauth]/route";
import RootLayout from "../layout";
import { Providers } from "../providers";

export default async function Layout({ children }: PropsWithChildren) {
	const session = await getServerSession(authOptions);
	return (
		<>
			<RootLayout>
				<Sidebar />
				<div className="relative md:ml-64 bg-blueGray-100">
					<Toaster />
					<AdminNavBar />

					<div className="px-4 md:px-10 mx-auto w-full -m-24">
						<Providers>{children}</Providers>
					</div>
				</div>
			</RootLayout>
		</>
	);
}
