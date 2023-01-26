import { getClient } from "./oauth";
import { getTweetURL } from "./util";
import { namedText } from "./define";

const client = getClient();

const getCandidate = async () => {
	const names = [];
	const tweets = await client.homeTimeline({ exclude_replies: true });
	const tpd = new Date();
	tpd.setDate(tpd.getDate() - 1);
	for await (const tweet of tweets) {
		const created = new Date(tweet.created_at);
		if (created.getTime() < tpd.getTime()) break;
		if (tweet.retweeted_status) continue;
		const name = tweet.full_text;
		if (!name) continue;
		if (name.length > 13) continue;
		const favorite = tweet.favorite_count;
		const retweet = tweet.retweet_count;
		const url = getTweetURL(tweet);
		names.push({ name, favorite, retweet, url });
		for (let index = 0; index < favorite; index++) {
			names.push({ name, favorite, retweet, url });
		}
	}
	return names;
};

export const named = async () => {
	const names = await getCandidate();
	if (!names.length) {
		console.error("該当するツイートが見つかりませんでした");
		return;
	}
	const name = names[Math.floor(Math.random() * names.length)];
	const text = namedText.replace("(.*)", name.name);
	await client.updateAccountProfile({ name: name.name, url: name.url });
	await client.tweet(text);
};
