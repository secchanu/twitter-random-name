import { getClient } from "./oauth";
import { getTweetURL } from "./util";
import { namedText, topN } from "./define";

const client = getClient();

const getRanking = async () => {
	const names = [];
	const user = await client.verifyCredentials();
	const userId = user.id_str;
	const tweets = await client.userTimeline(userId);
	const nyd = new Date(new Date().getFullYear(), 0, 1);
	const regexp = new RegExp(namedText);
	for await (const tweet of tweets) {
		const created = new Date(tweet.created_at);
		if (created.getTime() < nyd.getTime()) break;
		const text = tweet.full_text;
		if (!text) continue;
		const named = text.match(regexp);
		if (!named) continue;
		const name = named.at(1);
		const favorite = tweet.favorite_count;
		const retweet = tweet.retweet_count;
		const url = getTweetURL(tweet);
		names.push({ name, favorite, retweet, url });
	}
	const ranking = names.sort((a, b) => {
		return a.favorite > b.favorite ? -1 : 1;
	});
	return ranking;
};

export const ranking = async () => {
	const ranking = await getRanking();
	const top = ranking.slice(0, topN);
	const text = top.reduce((acc, tweet, index) => {
		return acc + `\n${index + 1}位: ${tweet.name}`;
	}, `今年の名前Top${topN}\n`);
	await client.tweet(text);
};
