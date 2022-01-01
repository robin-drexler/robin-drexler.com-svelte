import type { RequestHandler } from '@sveltejs/kit';

import { getPosts } from '$lib/api/posts';
import { marked } from 'marked';

export const get: RequestHandler = async () => {
	const posts = (await getPosts()).slice(0, 20);
	//dd
	console.log(posts[0]);

	const rssString = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Robin Drexler's Blog</title>
    <link>https://www.robin-drexler.com/blog</link>
    <description>Blog posts from Robin Drexler</description>
    <language>en-us</language>
  
    ${posts.reduce((acc, post) => {
			return `${acc}
      <item>
        <title>${post.attributes.title || 'No title'}</title>
        <link>https://www.robin-drexler.com${post.attributes.permalink}</link>
        <description>
        <![CDATA[${marked.parse(post.rawBody || '', {
					gfm: true,
					breaks: true,
					baseUrl: 'https://www.robin-drexler.com',
				})}]]>
        <pubDate>${new Date(post.attributes.date).toUTCString()}</pubDate>
        </description>
      </item> 
      `;
		}, '')}
    
  </channel>
</rss>
  `;

	return {
		headers: { 'Content-Type': 'application/rss+xml' },
		body: rssString,
	};
};
