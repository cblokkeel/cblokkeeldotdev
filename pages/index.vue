<script setup lang="ts">
import type { ProjectCustomContent } from "~/types/Projects";

const { data: projects } = await useAsyncData("projects", () =>
	queryContent<ProjectCustomContent>("/projects").find(),
);
</script>

<template>
    <main class="flex flex-col gap-12">
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
            <h2 class="title">About me</h2>
            <div class="flex flex-col gap-2 text-justify">
                <p class="mb-2 text-xl">Hello and welcome!</p>
                <p>
                    I’m <strong>Colin Blokkeel</strong>, a software engineer captivated by crafting intuitive, user-first experiences and architecting robust back-end systems, scalable distributed infrastructures, and thoughtful system designs.
                </p>

                <p>
                    At the moment, I am coding a lot in <strong>Go</strong> and <strong>Typescript</strong>. These languages allow me to quickly build great products while maintaining reliable and efficient code. I also have strong knowledge of <strong>Java</strong> and object-oriented programming. I usually use <strong>Nuxt 3</strong> when I'm working on frontend projects.
                </p>

                <p>
                    When I’m not coding, you can find me exploring new movies, cooking, or simply vibing with video games.
                </p>

                <p>
                    I currently contribute my skills at <strong>Pingflow</strong>, where we’re building a Figma-like editor to allow users, primarily factories, to create screens to monitor their production. I also worked for <strong>Auchan</strong>, where I played a key role in building and maintaining  <NuxtLink to="https://auchan.fr" class="underline" target="_blank">one of the largest e-commerce website in France</NuxtLink>.
                </p>

                <p>
                    Feel free to browse my <NuxtLink to="/resume" class="underline">résumé</NuxtLink> for more details. Thanks for stopping by, and I hope you enjoy your visit!
                </p>
            </div>
        </section>

        <section>
            <div
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :visible-once="{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 500,
                        ease: 'easeOut',
                        delay: 200,
                    },
                }"
            >
                <h2 class="title">Projects</h2>
                <p>Here are some projects that I can proudly show :</p>
            </div>

            <div class="flex flex-col gap-6 mt-8">
                <ProjectShowcase 
                    v-for="(p, idx) in projects" 
                    :key="idx"
                    :project="{
                        title: p.title as string,
                        description: p.description,
                        technos: p.technos,
                        links: p.links,
                        coming_soon: p.coming_soon,
                    }" 
                    v-motion
                    :initial="{ opacity: 0, y: 50 }"
                    :visible-once="{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 500,
                            ease: 'easeOut',
                            delay: 300 + idx * 150,
                        },
                    }"
                />
            </div> 
        </section>
    </main>
</template>

<style lang="scss">
.title {
    @apply text-2xl text-peach font-bold font-newsreader mb-4;
}
</style>
