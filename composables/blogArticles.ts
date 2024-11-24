import type { ParsedContent } from "@nuxt/content";

export interface ArticleCustomContent extends ParsedContent {
	img: string;
	date: string;
	tags: string[];
}

export const useBlogArticle = () => {
	const getLatestArticles = async (
		n: number,
	): Promise<ArticleCustomContent[] | null> => {
		const res = await queryContent<ArticleCustomContent>("/writes")
			.sort({ date: -1 })
			.limit(n)
			.find();

		return res;
	};

	const getArticleData = async (
		name: string,
	): Promise<ArticleCustomContent | null> => {
		const res = await queryContent<ArticleCustomContent>(`/writes/${name}`).findOne();

		return res;
	};

	return {
		getLatestArticles,
		getArticleData,
	};
};
