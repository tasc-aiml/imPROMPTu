import { z } from "zod";

const getUserZ = z.object({
  id: z.string(),
});

const updateUserZ = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
});

const deleteUserZ = z.object({
  id: z.string(),
});

export { getUserZ, updateUserZ, deleteUserZ };

export const storySelectSchema = z.object({
  teamId: z.string(),
  storyId: z.string(),
})

export const storySchema = z.object({
  storyId: z.string(),
})

export const newSubmissionSchema = z.object({
  teamId: z.string(),
  roundId: z.number(),
  storyId: z.string(),
})

export const updateSubmissionSchema = z.object({
  teamId: z.string(),
  roundId: z.number(),
  link: z.string(),
  submissionId: z.string(),
})