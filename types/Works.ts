import type { ParsedContent } from "@nuxt/content";

export interface WorkCustomContent extends ParsedContent {
    company_name: string;
    company_url: string;
    job_title: string;
    from_date: string;
    to_date: string;
	technos: {
        name: string;
        icon: string;
    }[];
}
