<script setup lang="ts">
const route = useRoute();
const { getArticleData } = useBlogArticle();
const [slug] = route.params.slug;

if (!slug) {
	navigateTo("/");
}

const data = ref<ArticleCustomContent | null>(null);

onMounted(async () => {
	const article = await getArticleData(slug);

	if (!article) {
		navigateTo("/writes");
	}

	data.value = article;
});
</script>

<template>
  <main>
    <ContentRenderer v-if="data" :value="data">
		<h1>{{ data.title }} - {{ data.date }}</h1>
		<ContentRendererMarkdown :value="data" />
	</ContentRenderer>
  </main>
</template>
