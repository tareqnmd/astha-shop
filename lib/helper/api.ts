export const baseFetch = async (url: string, next_options = {}) => {
	const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
	const path = `${baseURL}/${url}`;
	const res = await fetch(path, {
		...next_options,
	});
	return await res.json();
};
