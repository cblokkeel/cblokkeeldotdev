<script setup lang="ts">
interface Link {
    label: string;
    to: string;
}

const links = ref<Link[]>([
    {
        label: "About me",
        to: "/"
    },
    {
        label: "Résumé",
        to: "/resume"
    },
]);
</script>

<template>
    <header class="flex flex-col justify-center gap-4 h-48 px-12 md:px-80">
        <div class="flex justify-between w-full">
            <h1 class="flex items-center text-base font-bold h-10 px-8 bg-peach rounded-sm w-fit">
                <NuxtLink to="/">
                    Colin Blokkeel
                </NuxtLink>
            </h1>

            <div class="flex gap-2">
                <div 
                    v-for="i in 10" 
                    :key="i" 
                    class="w-1 h-full bg-peach"
                    :class="{
                            'hidden md:block': i > 5
                    }"
                />
            </div>
        </div>

        <nav>
            <ul class="flex gap-4">
                <li class="text-white underline hover:text-peach" v-for="(l, idx) in links" :key="idx">
                    <NuxtLink :to="l.to">{{ l.label }}</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>

	<div class="px-12 md:px-80">
		<slot />
	</div>

    <teleport to="body">
        <footer class="absolute bottom-0 flex flex-col items-center justify-center h-24 px-12 md:px-24 w-full">
            <p class="text-gray-500">
                Made with love by <NuxtLink class="underline" to="https://github.com/cblokkeel" target="_blank">@cblokkeel</NuxtLink>
            </p>
        </footer>
    </teleport>
</template>
