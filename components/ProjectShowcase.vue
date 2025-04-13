<script setup lang="ts">
import { vTooltip } from "floating-vue";

interface Project {
	title: string;
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

defineProps<{ project: Project }>();
</script>

<template>
    <div class="flex flex-col gap-1 items-start">
        <div class="flex justify-between items-center gap-2 w-full">
            <h3 class="text-xl text-peach font-newsreader font-bold truncate w-[90%]">{{ project.title }}</h3>
            <div class="flex gap-2 items-center justify-center">
                <Icon 
                    v-for="(t, idx) in project.technos" 
                    :key="idx"
                    :name="t.icon"
                    v-tooltip="t.name"
                />
            </div>
        </div>

        <p class="text-justify">{{ project.description }}</p>

        <div class="flex items-center gap-2 mt-1">
            <NuxtLink
                v-for="(l, idx) in project.links"
                :key="idx"
                :href="l.url"
                target="_blank"
                class="hover:text-peach hover:scale-110"
            >
                    <Icon v-if="l.type === 'git'" name="pixelarticons:github-2" class="w-5 h-5" />
                    <Icon v-if="l.type === 'web'" name="pixelarticons:external-link" class="w-5 h-5" />
            </NuxtLink>
            
            <Icon 
                v-if="project.coming_soon"
                name="pixelarticons:external-link"
                class="w-5 h-5 text-gray-400" 
                v-tooltip="'Coming soon'"
            />
        </div>
    </div>
</template>
