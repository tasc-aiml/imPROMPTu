import { db } from '$lib/db/db.js';

export async function POST({request}) {
    const data = await request.json();

    const { storyId , teamId } = data;

    if(teamId && storyId){
        const team = await db.team.update({
            where:{
                id: teamId
            },
            data:{
                storyId: storyId
            }
        })

        return new Response(
          JSON.stringify({
            status: "success",
            team
          }),
          {
            headers: {
              "content-type": "application/json",
            },
            status: 200,
          }
        );
    }

    return new Response(JSON.stringify({
        status: 'success',
    }),{
        headers:{
            'content-type':'application/json'
        },
        status: 200
    })

}