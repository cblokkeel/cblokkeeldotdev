<script setup lang="ts">
import type { ProjectCustomContent } from "~/types/Projects";
import type { WorkCustomContent } from "~/types/Works";

usePosthog();

const { data: works } = await useAsyncData("works", () =>
	queryContent<WorkCustomContent>("/works").sort({ to_date: -1 }).find(),
);

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
                I code mostly in <strong>Go</strong> and <strong>TypeScript</strong>, which allow me to build fast, reliable software. For frontend projects, I often use Nuxt 3 and am currently exploring SvelteKit. I also have strong foundations in Java and object‑oriented programming.
                </p>

                <p>
                    When I’m not coding, you can find me exploring new movies, cooking, or simply vibing with video games.
                </p>

                <p>
                    Thanks for stopping by, and I hope you enjoy your visit!
                </p>
            </div>
        </section>


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
            <h2 class="title">My work</h2>
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
            <h2 class="title">Socials</h2>
            <div class="flex gap-4">
                <NuxtLink 
                    to="https://github.com/cblokkeel" 
                    target="_blank" 
                    v-tooltip="'Github'"
                    class="hover:scale-105"
                >
                    <Icon name="mdi:github" class="w-10 h-10" /> 
                </NuxtLink>

                <NuxtLink 
                    to="https://bsky.app/profile/cblokkeel.dev" 
                    target="_blank" 
                    v-tooltip="'Bluesky'"
                    class="hover:scale-105"
                >
                    <Icon name="logos:bluesky" class="w-10 h-10" /> 
                </NuxtLink>
            </div>
        </section>
        

        <!--
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
                    :enter="{
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
            -->
    </main>
</template>

<style lang="scss">
.title {
    @apply text-2xl text-peach font-bold font-newsreader mb-4;
}
</style>
