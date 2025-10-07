import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';


const config = {
	kit: {
		adapter: adapter({ strict: false }),
		paths: {
			base: dev ? '' : '/platte-dot-dev'
		},
		alias: {
			$components: './src/components'
		}
	},
	preprocess: [mdsvex({ extensions: ['.md'] })],
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
