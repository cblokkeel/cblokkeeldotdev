import type { ParsedContent } from "@nuxt/content";

export interface ProjectCustomContent extends ParsedContent {
	description: string;
	technos: {
        name: string;
        icon: string;
    }[];
    links: {
        type: "git" | "web";
        url: string;
    }[];
    coming_soon?: boolean;
}
