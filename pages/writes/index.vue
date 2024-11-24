<script lang="ts" setup>
import type { ArticleCustomContent } from "~/types/BlogArticles";

useHead({
	title: "Writings",
});

const { data: posts } = await useAsyncData("posts", () =>
	queryContent<ArticleCustomContent>("/writes")
		.sort({ date: -1 })
		.limit(5)
		.find(),
);
</script>

<template>
<div>
	<ArticlesList v-if="posts && posts.length" :posts="posts" />
	<div v-else>No articles found...</div>
</div>
</template>
