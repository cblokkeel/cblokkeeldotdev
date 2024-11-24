<script setup lang="ts">
import type { ArticleCustomContent } from "~/types/BlogArticles";

const route = useRoute();
const [slug] = route.params.slug;

if (!slug) {
	navigateTo("/");
}

const { data } = await useAsyncData(`content-${slug}`, () =>
	queryContent<ArticleCustomContent>(`/writes/${slug}`).findOne(),
);

if (!data) {
	navigateTo("/writes");
}

useHead({
	meta: [
		{
			name: "description",
			content: data.value?.description,
		},
	],
});

useSeoMeta({
	title: data.value?.title,
});
</script>


<template>
  <main>
	<NuxtLink to="/writes" class="hover:underline hover:text-peach">Back</NuxtLink>
	<hr>
	WIP
	<br>
    <ContentRenderer v-if="data" :value="data">
		<h1>{{ data.title }} - {{ data.date }}</h1>
		<ContentRendererMarkdown :value="data" />
	</ContentRenderer>
  </main>
</template>
