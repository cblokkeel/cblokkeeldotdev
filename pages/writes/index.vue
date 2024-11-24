<script lang="ts" setup>
const { getLatestArticles } = useBlogArticle();

const posts = ref<ArticleCustomContent[]>([]);
const loading = ref<boolean>(false);

onMounted(async () => {
	loading.value = true;
	const articles = await getLatestArticles(5);

	if (articles) {
		posts.value = articles;
	}

	loading.value = false;
});
</script>

<template>
  <div v-for="post in posts">
    <NuxtLink :to="post._path">
      {{ post.title }}
    </NuxtLink>
  </div>
</template>
