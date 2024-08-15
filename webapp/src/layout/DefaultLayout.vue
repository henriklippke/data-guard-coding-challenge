<template>
    <div class="min-h-full">
        <nav class="border-b border-gray-200 bg-white">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 justify-between">
                    <div class="flex">
                        <div class="flex flex-shrink-0 items-center">
                            <img class="block h-8 w-auto lg:hidden" src="/img/DataGuard.webp" alt="DataGuard">
                            <img class="hidden h-8 w-auto lg:block" src="/img/DataGuard.webp" alt="DataGuard">
                        </div>
                        <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                            <a href="#"
                                class="inline-flex items-center border-b-2 border-primary px-1 pt-1 text-sm font-medium text-gray-900"
                                aria-current="page">Coding Challenge</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sm:hidden" id="mobile-menu">
                <div class="space-y-1 pb-3 pt-2">
                    <a href="#"
                        class="block border-l-4 border-primary bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-primary"
                        aria-current="page">Coding Challenge</a>
                </div>
            </div>
        </nav>

        <div class="py-10">
            <MostStars />
        </div>
    </div>
</template>

<script setup lang="ts">
import MostStars from '../pages/MostStars.vue';
</script>