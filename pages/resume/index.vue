<script setup lang="ts">
import type { WorkCustomContent } from '~/types/Works';

usePosthog();

const { data: works } = await useAsyncData("works", () =>
	queryContent<WorkCustomContent>("/works")
		.sort({ to_date: -1 })
		.find(),
);
</script>


<template>
    <main class="flex flex-col gap-8">

        <section
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
                    duration: 500,
                    ease: 'easeOut',
                    delay: 100,
                },
            }"
        >
            <h2 class="title">My works</h2>
            <div class="flex flex-col gap-12 text-justify">
                <WorkShowcase 
                    v-for="(w, idx) in works" 
                    :key="idx" 
                    :work="w" 
                    v-motion
                    :initial="{ opacity: 0, y: 50 }"
                    :visible-once="{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 500,
                            ease: 'easeOut',
                            delay: 200 + idx * 175,
                        },
                    }"
                />
            </div>
        </section>

    </main>
</template>
