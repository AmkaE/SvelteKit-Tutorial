import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const baseUrl = 'https://jsonplaceholder.typicode.com';

	const res = await fetch(`${baseUrl}/posts`);
	const guides = await res.json();

	if (res.ok) {
		return {
			guides
		};
	}

	if (!guides || !res.ok) {
		throw error(400, {
			message: 'Could not fetch the guides!'
		});
	}
}
