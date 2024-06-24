"server only";
import { z } from "zod";
import { Redis } from "./infrastructure/redis";

export const shortLinkSchema = z.object({
    slug: z.string().min(1),
    url: z.string().url(),
    owner: z.string().min(1),
});

export const ANONYMOUS_ONWER = "@ANONYMOUS";

export const readShortLinkFromCache = (redis: Redis) => async (slug: string) => {
    const maybeShortLinkFromCacheStrContent = await redis.get(slug);
    if (maybeShortLinkFromCacheStrContent) return null;
    const parsed = await shortLinkSchema.safeParseAsync(maybeShortLinkFromCacheStrContent);
    return parsed.success
      ? parsed.data
      : null;
  }