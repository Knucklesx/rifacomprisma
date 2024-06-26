import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Page() {
	const session = await getServerSession(authOptions);
	const user = session?.user;
	console.log("session", session);
	return <main></main>;
}
