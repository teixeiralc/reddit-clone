import { z } from 'zod'

export const PostValidator = z.object({
  title: z.string(),
  subredditId: z.string(),
  content: z.any(),
})

export type PostCreationRequest = z.infer<typeof PostValidator>
