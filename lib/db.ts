import { PrismaClient } from "@prisma/client";

const connectionString = `${process.env.POSTGRES_PRISMA_URL}`;

const prisma = new PrismaClient({
	datasources: {
		db: {
			url: connectionString,
		},
	},
});
export default prisma;
