<script setup lang="ts">
import type { WorkCustomContent } from '~/types/Works';

usePosthog();

const { data: works } = await useAsyncData("works", () =>
	queryContent<WorkCustomContent>("/works")
		.sort({ to_date: -1 })
		.find(),
);

const reducedMotion = ref(false);

onMounted(() => {
	if (typeof window === 'undefined') return;
	const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
	reducedMotion.value = mediaQuery.matches;
	mediaQuery.addEventListener('change', (e) => {
		reducedMotion.value = e.matches;
	});
});
</script>


<template>
    <main class="flex flex-col gap-8">

        <section
            v-motion
            :initial="reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }"
            :visible-once="{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 250,
                    ease: [0.215, 0.61, 0.355, 1],
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
                    :initial="reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }"
                    :visible-once="{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 250,
                            ease: [0.215, 0.61, 0.355, 1],
                            delay: 100 + idx * 100,
                        },
                    }"
                />
            </div>
        </section>

    </main>
</template>
