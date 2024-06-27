import { ThemeProvider } from "@/components/theme-providers";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<title>Vegas Admin</title>
			</head>
			<body className={inter.style.fontFamily}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem={true}
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
