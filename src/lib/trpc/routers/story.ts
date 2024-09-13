import { db } from "$lib/db/db";
import { storySchema, storySelectSchema } from "$lib/zod/user";
import { t } from "../trpc";

export const storyRouter = t.router({
    selectStory: t.procedure.input(storySelectSchema).mutation(async (input) => {
        const { teamId , storyId } = input.input

        if (teamId && storyId) {
          const team = await db.team.update({
            where: {
              id: teamId,
            },
            data: {
              storyId: storyId,
            },
          });

          return { 
            status: "success",
            team: team
           }
        }else{
            return {
                status: "failure",
                error: {
                    message: "teamId and storyId are required"
                }
            }
        }
    }),

    getStory: t.procedure.input(storySchema).query(async (input) => {
        const story = await db.story.findUnique({
            where:{
                id: input.input.storyId
            }
        })

        if(story){
            return {
                status: "success",
                story
            }
        }else{
            return {
                status: "failure",
                error: {
                    message: "story not found"
                }
            }
        }
    }),

    getAllStories: t.procedure.query(async () => {
        const stories = await db.story.findMany();

        return {
            status: "success",
            stories: stories
        }
    })
})