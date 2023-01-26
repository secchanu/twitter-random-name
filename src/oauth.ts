/* eslint-disable @typescript-eslint/no-non-null-assertion */
import dotenv from "dotenv";
dotenv.config();

import { TwitterApi } from "twitter-api-v2";

export const getClient = () => {
	const client = new TwitterApi({
		appKey: process.env.TWITTER_API_KEY!,
		appSecret: process.env.TWITTER_API_SECRET!,
		accessToken: process.env.TWITTER_ACCESS_TOKEN!,
		accessSecret: process.env.TWITTER_ACCESS_SECRET!,
	});
	return client.v1;
};
