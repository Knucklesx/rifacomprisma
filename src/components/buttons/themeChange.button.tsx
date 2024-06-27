import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeTogle() {
	const { setTheme, theme } = useTheme();

	const handleChange = (e: any) => {
		e.preventDefault();
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<Button variant="outline" size="icon" onClick={handleChange}>
			{theme === "light" ? (
				<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			) : (
				<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			)}
		</Button>
	);
}
