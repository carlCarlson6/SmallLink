"use server"
import { z } from "zod";
import { publicAction } from "./infrastructure/trpc";
import { readShortLinkFromCache } from "./shortLink";

export const getShortLinkAction = publicAction
  .meta({ span: "get-short-link" })
  .input(z.object({
      slug: z.string().min(1),
  }))
  .query(async ({input: { slug }, ctx: { user, redis }}) => {
    const maybeShortLink = await readShortLinkFromCache(redis)(slug);
    // if maybe short link is null search it on db
    // if short link is found somewhere update stadistics -> better would be using uptash of something like it
    return maybeShortLink?.url;
  });