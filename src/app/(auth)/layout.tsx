import NavBar from "@/components/navbar/navbar";
import "@/styles/app.css";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Providers } from "../providers";
export const metadata = {
	title: "Rifas",
	description: "A melhor rifa do Nordeste",
};

const inter = Inter({
	variable: "--font-inter",
	preload: false,
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<html lang="en">
				<head>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=no"
					/>
					<title>Vegas Admin</title>
				</head>
				<body className={`${inter.variable} text-blueGray-700 antialiased`}>
					<NavBar transparent />
					{/* <Providers>
						<main>
							<section className="relative w-full h-full py-40 min-h-screen">
								<div className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"></div>
								<NextUIProvider>{children}</NextUIProvider>
							</section>
						</main>
					</Providers>
				</body>
			</html>
		</> */}
					<main>
						<section className="relative w-full h-full py-40 min-h-screen">
							<div
								className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
								style={{
									backgroundImage: "url('/img/register_bg_2.png')",
								}}
							></div>
							<Providers>{children}</Providers>
						</section>
					</main>
				</body>
			</html>
		</>
	);
}
