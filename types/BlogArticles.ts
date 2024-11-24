import type { ParsedContent } from "@nuxt/content";

export interface ArticleCustomContent extends ParsedContent {
	description: string;
	img: string;
	date: string;
	tags: string[];
}