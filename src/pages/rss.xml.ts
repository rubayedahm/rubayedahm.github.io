import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts, postUrl } from '../utils/posts';
import { site } from '../data/site';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: `${site.name} — Blog`,
    description: `Projects, lessons and skills from ${site.name}.`,
    site: context.site ?? 'https://rubayedahm.github.io',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      categories: post.data.tags,
      link: postUrl(post),
    })),
  });
}
