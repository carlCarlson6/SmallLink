"use server"

import { urlSchema } from "@/common/schema";
import { kv } from "@vercel/kv";
import { generate } from "shortid";

export const createSmallLink = async (url: string) => {
  const parsedResult = await urlSchema.safeParseAsync(url);
  if (!parsedResult.success){
    return "INVALID_URL" as const;
  }
    
  const slug = generate();
  await kv.set(slug, url);
  return {
    slug,
    url
  };
}