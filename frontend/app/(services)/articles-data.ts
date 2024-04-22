export const fetchArticles = async () => {
	const url = 'http://localhost:5000/api/articles';

	try {
		const res = await fetch(url);

		if (res.ok) {
			const data = await res.json();
			console.log(data);
			return data;
		} else {
			if (res.status === 404) throw new Error('404, Not found');
			if (res.status === 500) throw new Error('500, internal server error');
		}
	} catch (error) {
		console.error('Fetch', error);
	}
};

export const fetchTags = async () => {
	const url = 'http://localhost:5000/api/tags';

	try {
		const res = await fetch(url);

		if (res.ok) {
			const data = await res.json();
			console.log(data);
			return data;
		} else {
			if (res.status === 404) throw new Error('404, Not found');
			if (res.status === 500) throw new Error('500, internal server error');
		}
	} catch (error) {
		console.error('Fetch', error);
	}
};
