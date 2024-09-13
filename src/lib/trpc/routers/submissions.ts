import { db } from "$lib/db/db";
import { newSubmissionSchema, updateSubmissionSchema } from "$lib/zod/user";
import { t } from "../trpc";

export const submissionRouter = t.router({
    startSubmission: t.procedure.input(newSubmissionSchema).query(async (input) => {
        const { teamId, roundId , storyId } = input.input

        if (teamId && roundId) {
            const isSubmissionPresent = await db.submissions.findFirst({
                where: {
                    teamId: teamId,
                    round: roundId
                }
            })

            if(isSubmissionPresent){
                return {
                    status: "failure",
                    error: {
                        message: "Submission already exists"
                    }
                }
            }else{
                const submission = await db.submissions.create({
                    data: {
                        teamId: teamId,
                        round: roundId,
                        storyId: storyId
                    }
                })

                if(submission){
                    return {
                        status: "success",
                        submission: submission
                    }
                }else{
                    return {
                        status: "failure",
                        error: {
                            message: "Submission failed"
                        }
                    }
                }
            }
        } else {
            return {
                status: "failure",
                error: {
                    message: "teamId and roundId are required"
                }
            }
        }
    }),

    updateSubmission: t.procedure.input(updateSubmissionSchema).mutation(async (input) => {
        const { teamId, roundId, link, submissionId } = input.input

        if(teamId && roundId && link){
            try{
                const submission = await db.submissions.update({
                   where:{
                        id: submissionId,
                        teamId: teamId,
                        round: roundId
                   },
                    data: {
                        link: link
                    }
                })

                if(submission){
                    return {
                        status: "success",
                        submission: submission
                    }
                }else{
                    return {
                        status: "failure",
                        error: {
                            message: "Submission update failed"
                        }
                    }
                }
            }catch(error){
                return {
                    status: "failure",
                    error: {
                        message: "Submission update failed",
                        error: error
                    }
                }
            }
        }else{
            return {
                status: "failure",
                error: {
                    message: "teamId, roundId and link are required"
                }
            }
        }
    })
})