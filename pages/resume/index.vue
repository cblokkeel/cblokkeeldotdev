<script setup lang="ts">
import type { WorkCustomContent } from '~/types/Works';

const { data: works } = await useAsyncData("works", () =>
	queryContent<WorkCustomContent>("/works")
		.sort({ to_date: -1 })
		.find(),
);
</script>


<template>
    <main class="flex flex-col gap-8">

        <section>
            <h2 class="title">My works</h2>
            <div class="flex flex-col gap-12 text-justify">
                <WorkShowcase v-for="(w, idx) in works" :key="idx" :work="w" />
            </div>
        </section>

    </main>
</template>
