import { env } from "@/env.mjs";
import { hackathonEventSchema } from "@/lib/validations/hackathons";
import axios from "axios";
import { type z } from "zod";

export async function registerForEvent(input: z.infer<typeof hackathonEventSchema>) {
  try {
    const response = await axios.post(`${env.NEXT_PUBLIC_API_URL}/user/hackathons/register`,
      {
        hackathon_id: input.hackathonId,
        uri: input.submissionUri,
        emails: input.emails
      },
      {
        headers: {
          Authorization: `Bearer ${input.bearerToken}`
        }
      }
      )
    console.log(response)
    return
  } catch (error) {
    return null
  }
}