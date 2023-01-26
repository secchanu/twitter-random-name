import type { TweetV1 } from "twitter-api-v2";

export const getTweetURL = (tweet: TweetV1) => {
	const url = `https://twitter.com/${tweet.user.id_str}/status/${tweet.id_str}`;
	return url;
};
