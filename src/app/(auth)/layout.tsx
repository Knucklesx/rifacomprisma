import "@/styles/app.css";
import "@/styles/globals.css";
import { PropsWithChildren } from "react";
import { Providers } from "../providers";

export default async function Layout({ children }: PropsWithChildren) {
	return (
		<>
			<body className="text-blueGray-700 antialiased">
				<main>
					<section className="relative w-full h-full py-40 min-h-screen">
						<div
							className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
							style={{}}
						></div>
						<Providers>{children}</Providers>
					</section>
				</main>
			</body>
		</>
	);
}
