import * as z from "zod"
// import { Hackathon } from "@/types"

export const hackathonEventSchema = z.object({
  bearerToken: z.union([z.string(), z.null(), z.undefined()]),
  hackathonId: z.string(),
  submissionUri: z.string(),
  emails: z.string().email().array().min(1),
})
