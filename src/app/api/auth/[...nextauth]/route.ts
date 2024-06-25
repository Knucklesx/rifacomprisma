// Esse route.ts fiz para usar com o prisma.
// Caso o back for outro, tipo o rifa-back, tem que restaurar o routeOldForBackNest.ts
import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
	pages: {
		signIn: "/",
	},
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: {
					label: "Username",
					type: "text",
					placeholder: "Your username",
				},
				password: {
					label: "Password",
					type: "type",
				},
			},
			async authorize(credentials) {
				const user = await prisma.user.findUnique({
					where: {
						username: credentials?.username,
					},
				});

				if (!user) {
					throw new Error("Username or password is not correct");
				}

				const isPasswordCorrect = credentials?.password === user.password;
				// if (!credentials?.password)
				// 	throw new Error("Please, provide your password");
				// const isPasswordCorrect = await bcrypt.compare(
				// 	credentials.password,
				// 	user.password
				// );

				if (!isPasswordCorrect)
					throw new Error("Username or password is not correct");

				const { password, id, ...userWithoutPass } = user;

				return {
					id: id.toString(),
					...userWithoutPass,
				};
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.user = <User>(<unknown>user);
			}
			return token;
		},

		async session({ token, session }) {
			session.user = token.user;
			return session;
		},
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
