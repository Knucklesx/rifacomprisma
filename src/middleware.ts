import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// export async function middleware(req: any) {
export default withAuth(
	async function middleware(req: any) {
		const token = await getToken({ req });

		if (
			req.nextUrl.pathname.startsWith("/admin") &&
			token?.user.is_admin !== true
			// token?.is_admin !== true
		)
			return NextResponse.rewrite(
				// new URL("/auth/login?message=You are not authorized", req.url)
				new URL(
					"/auth/login?message=You are not authorized&showPopup=true",
					req.url
				)
			);
	},
	{
		callbacks: {
			authorized: ({ token, req }) => {
				return true;
			},
		},
	}
);

export const config = { matcher: ["/admin"] };
