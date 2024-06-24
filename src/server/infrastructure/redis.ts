import { createClient } from "redis";

export const connectToRedis = () => createClient({
    url: 'redis://alice:foobared@awesome.redis.server:6380'
  })
  .on('error', err => console.log('Redis Client Error', err))
  .connect();

export type Redis = Awaited<ReturnType<typeof connectToRedis>>;