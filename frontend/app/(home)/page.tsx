import styles from '@/styles/globals.scss';
import { fetchArticles } from '@/(services)';
import { Articles } from '@/ui/articles';

export default async function Home() {
	const articles = await fetchArticles();
	console.log(articles);

	return (
		<main className={styles.main}>
			<Articles />
		</main>
	);
}
