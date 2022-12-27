import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
// @ts-ignores
export async function load({ fetch, params }) {
	const baseUrl = 'https://jsonplaceholder.typicode.com';
	const { id } = params;

	const res = await fetch(`${baseUrl}/posts/${id}`);
	const guide = await res.json();

	if (res.ok) {
		return { guide };
	}

	if (!guide || !res.ok) {
		throw error(400, {
			message: 'Could not fetch the guide!'
		});
	}
}
