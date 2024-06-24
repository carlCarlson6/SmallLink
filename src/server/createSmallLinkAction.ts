"server only"

import { generate } from "shortid";
import { ANONYMOUS_ONWER, shortLinkSchema } from "./shortLink";
import { z } from "zod";
import { publicAction } from "./infrastructure/trpc";

export const createSmallLinkAction = publicAction
  .meta({ span: "create-small-link" })
  .input(z.object({
    url: z.string().min(1).url(),
  }))
  .mutation(async ({input: { url }, ctx: { user, redis }}) => {
    const slug = generate();
    const shortLink = {
      slug,
      owner: ANONYMOUS_ONWER,
      url,
    } satisfies z.infer<typeof shortLinkSchema>
  
    await redis.set(slug, JSON.stringify(shortLink));
    // TODO - store also on db short liunk
  
    return {
      slug,
      url
    }; 
  });