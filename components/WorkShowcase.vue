<script setup lang="ts">
import type { WorkCustomContent } from "~/types/Works";
import { vTooltip } from 'floating-vue'

defineProps<{ work: WorkCustomContent }>();
</script>

<template>
    <div>
        <div>
            <h2 class="text-xl">
                <span class="font-bold">{{ work.job_title }}</span> - <NuxtLink :to="work.company_url" target="_blank">{{ work.company_name }}</NuxtLink>
            </h2>
            <p class="text-gray-400">{{ work.from_date }} - {{ work.to_date }}</p>
        </div>

        <div class="flex flex-wrap gap-4 items-center mt-2">
            <Icon
                v-for="(t, idx) in work.technos"
                :key="idx"
                :name="t.icon"
                class="w-5 h-5"
                v-tooltip="t.name"
            />
        </div>

        <ContentRenderer :value="work" class="flex flex-col gap-4 mt-8 work-content" />
    </div>
</template>

<style> 
.work-content ul {
    list-style: disc;
    list-style-position: inside;
}
</style>
