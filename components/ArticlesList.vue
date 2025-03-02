<script setup lang="ts">
import type { ArticleCustomContent } from '~/types/BlogArticles';

interface Props {
	posts: ArticleCustomContent[];
}

defineProps<Props>();
</script>

<template>
	<h1 class="font-bold font-newsreader text-2xl text-peach">Read my stuff</h1>
	<div v-for="(p, idx) in posts" :key="idx">
		<NuxtLink class="hover:text-peach hover:underline" :to="p._path">
			{{ p.title }}
		</NuxtLink>
	</div>
</template>
