import { env } from "@/common/env";
import { createClient } from "redis";

export type Redis = Awaited<ReturnType<typeof connectToRedis>>;


export const connectToRedis = () => createClient({
    url: env.redisConnetionString
  })
  .on('error', err => console.log('Redis Client Error', err))
  .connect();

