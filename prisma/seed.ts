import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
	const adminUser = await prisma.user.upsert({
		where: { username: "testadmin" },
		update: {},
		create: {
			username: "testadmin",
			password: "1",
			is_admin: true,
		},
	});

	const normalUser = await prisma.user.upsert({
		where: { username: "testuser" },
		update: {},
		create: {
			username: "testuser",
			password: "1",
			is_admin: false,
		},
	});

	console.log({ adminUser, normalUser });
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
