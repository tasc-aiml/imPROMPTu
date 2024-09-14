import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";

const db = new PrismaClient();

/**
 * 1. pnpm prisma migrate reset // with return
 * 2. pnpm prisma db push
 * 3. pnpm prisma db seed
 */

function readData(fileName: string) {
  const filePath = path.join(__dirname, "./data/" + fileName);
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData);
}

async function seed() {
  
  const users = readData("users.json");
  const teams = readData("teams.json");
  const accounts = readData("accounts.json");
  const event = readData("event.json");

  const dbUsers = await db.user.createMany({
    data: [...users],
  });

  const dbAccounts = await db.account.createMany({
    data: [...accounts],
  });

  const dbEvent = await db.event.create({
    data: event,
  });

  for (const team of teams) {
    const { user, ...teamData } = team;
    const createdTeam = await db.team.create({
      data: teamData,
    });

    // Link users to the team
    for (const userData of user) {
      await db.user.update({
        where: { id: userData.id },
        data: {
          Team: {
            connect: { id: createdTeam.id },
          },
        },
      });
    }
  }
}

await seed();
