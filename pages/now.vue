<template>
    <div class="">
            <div class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-gray-900/10 supports-backdrop-blur:bg-white/95">
    <div
                class="max-w-8xl mx-auto border-b border-gray-900/10 lg:px-8">
                <div class="py-4  mx-4 lg:mx-0">
                    <div class="relative flex items-center">
                        <a class="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto" href="/">
                            <span class="sr-only">Thomas Ringling home page</span>
                            <img class="w-auto h-8" src="/img/logo.svg">
                        </a>
                       
                        <div class="relative flex items-center mr-8 ml-8">
                            <nav class="text-sm leading-6 font-semibold text-gray-700">
                                <ul class="flex space-x-8">
                                    <li>
                                        <NuxtLink class="hover:text-sky-500 "
                                            style="z-index: 1000" to="/">Home</NuxtLink>
                                    </li>

                                    <li>
                                        <NuxtLink class="hover:text-sky-500 "
                                            style="z-index: 1000" to="/about">About</NuxtLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mx-auto p-4 ">

            <div>
                <h1 class="text-black text-4xl font-bold my-4">Now</h1>
            </div>
        </div>
    </div>
</template>