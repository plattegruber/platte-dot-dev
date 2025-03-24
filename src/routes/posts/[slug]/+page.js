/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    try {
        // Dynamically import the markdown file based on the slug
        const post = await import(`../../../posts/${params.slug}.md`);

        // Verify that the post exists and has the expected structure
        if (!post || !post.default) {
            throw new Error('Post content not found');
        }

        return {
            post: {
                content: post.default,
                metadata: post.metadata || {}
            }
        };
    } catch (error) {
        console.error(`Error loading post: ${params.slug}`, error);
        throw error; // This will trigger the closest error boundary
    }
}