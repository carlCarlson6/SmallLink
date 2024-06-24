import { z } from "zod";

export const env = z.object({
	redisConnetionString: z.string().min(1),
})
.parse({
	redisConnectionString: process.env.REDIS_CONN_STR,
})