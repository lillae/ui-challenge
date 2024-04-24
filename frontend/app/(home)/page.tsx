import { Articles } from '@/ui/home/articles';
import { fetchArticles } from '@/(services)';

export default async function Home() {
	const articles = await fetchArticles();

	console.log(articles);

	return (
		<main className='main'>
			<Articles />
		</main>
	);
}
