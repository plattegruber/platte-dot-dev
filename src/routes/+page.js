/** @typedef {Object} BlogPost
 *  @property {string} slug
 *  @property {string} title
 *  @property {string} date
 *  @property {string} description
 *  @property {string[]} [tags]
 */

/** @typedef {Object} MarkdownModule
 *  @property {{ title: string, date: string, tags?: string[], description?: string }} metadata
 */

/** @type {import('./$types').PageLoad} */
export async function load() {
    try {
        const modules = import.meta.glob('../posts/*.md');

        /** @type {Promise<BlogPost>[]} */
        const postPromises = Object.entries(modules).map(async ([path, resolver]) => {
            const mod = /** @type {MarkdownModule} */ (await resolver());

            const slug = path.split('/').pop()?.replace(/\.md$/, '') ?? '';

            return {
                slug,
                title: mod.metadata.title,
                date: mod.metadata.date,
                description: mod.metadata.description || '',
                tags: mod.metadata.tags || []
            };

        });

        const posts = await Promise.all(postPromises);

        posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        return { posts };
    } catch (error) {
        console.error('Error loading blog posts:', error);
        return { posts: [] };
    }
}
