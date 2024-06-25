"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

const SigninButton = () => {
	const { data: session } = useSession();
	console.log("aaa", session);

	return (
		<div className="flex items-center gap-2">
			{session && session.user ? (
				<>
					<p>{session.user.username}</p>{" "}
					<Link
						className="text-sky-500 hover:text-sky-600 transition-colors"
						href={"/api/auth/signout"}
					>
						Sign Out
					</Link>
				</>
			) : (
				<Link
					className="text-sky-500 hover:text-sky-600 transition-colors"
					href={"/api/auth/signin"}
				>
					Sign In
				</Link>
			)}
		</div>
	);
};

export default SigninButton;
