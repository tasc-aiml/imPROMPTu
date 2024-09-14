const fs = require('fs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getImpromptuDetails() {
    const users = await prisma.user.findMany({
        where: {
            Team: {
                some: {
                    event: { title: 'imPROMPTu' }
                }
            }
        }
    })
    const accounts = await prisma.account.findMany({
        where: {
            user: {
                Team: {
                    some: {
                        event: { title: 'imPROMPTu' }
                    }
                }
            }
        }
    })
    const teams = await prisma.team.findMany({
        where: {
            event: { title : 'imPROMPTu' }
        },
        include: {
            user: true
        }
    })
    const event = await prisma.event.findFirst({
        where: {
            title: 'imPROMPTu'
        }
    })

    fs.writeFileSync('c:/Users/Dell/Desktop/imPROMPTu_users.json', JSON.stringify(users, null, 2));
    fs.writeFileSync('c:/Users/Dell/Desktop/imPROMPTu_accounts.json', JSON.stringify(accounts, null, 2));
    fs.writeFileSync('c:/Users/Dell/Desktop/imPROMPTu_teams.json', JSON.stringify(teams, null, 2));
}

getImpromptuDetails().then(() => {
    console.log('Got impromptu details');
})