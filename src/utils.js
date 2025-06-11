// src/utils/getLatestPosts.ts
import { getCollection } from "astro:content";

export async function getLatestPosts(limit = 3) {
	const posts = await getCollection("blog");
	return posts
		.sort(
			(a, b) =>
				new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
		)
		.slice(0, limit);
}
