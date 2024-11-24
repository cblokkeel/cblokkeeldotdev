import type { ParsedContent } from "@nuxt/content";

export interface ArticleCustomContent extends ParsedContent {
	img: string;
	date: Date;
	tags: string[];
}

export const useBlogArticle = () => {
	const getLatestArticles = async (
		n: number,
	): Promise<ArticleCustomContent[] | null> => {
		const { data } = await useAsyncData("content", () =>
			queryContent<ArticleCustomContent>("/writes")
				.sort({ date: 1 })
				.limit(n)
				.find(),
		);

		return data.value;
	};

	const getArticleData = async (
		name: string,
	): Promise<ArticleCustomContent | null> => {
		const { data } = await useAsyncData(`content-${name}`, () =>
			queryContent<ArticleCustomContent>(`/writes/${name}`).findOne(),
		);

		return data.value;
	};

	return {
		getLatestArticles,
		getArticleData,
	};
};
