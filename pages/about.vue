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
                                        <NuxtLink class="hover:text-sky-500"
                                            style="z-index: 1000" to="/">Home</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink class="hover:text-sky-500"
                                            style="z-index: 1000" to="/now">Now</NuxtLink>
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
                <h1 class="text-black text-4xl font-bold my-4">About</h1>


                <h2 class="text-black text-3xl font-bold my-4">Introduction</h2>
                <section class="m-8 flex flex-wrap">

                    <div>

                        <p class="mt-6 text-lg text-gray-600">
                            Living north of Copenhagen with my wife and my daughter.
                        </p>

                        <p class="mt-2 text-lg text-gray-600">
                            Lifetime learner and polyglot software craftsman with a great love for physical training,
                            music and nature.
                        </p>

                        <p class="mt-2 text-lg text-gray-600">
                            A long experience implementing and teaching agile methodologies and principles.
                        </p>

                        <p class="mt-2 text-lg text-gray-600">
                            With over 20 years of experience within software development, I span a variety of different
                            technologies, paradigms and programming languages.
                        </p>

                        <p class="mt-2 text-lg text-gray-600">
                            I have had many roles within and outside IT, such as developer, coach, teacher, architect,
                            project manager, scrum master, product owner, team lead etc.
                        </p>

                        <p class="mt-2 text-lg text-gray-600">
                            As I still do software development, I keep up with new technologies and hence thrive in
                            environments and cultures who value competences, innovation and creativity.
                        </p>
                    </div>

                </section>


                <br>


                <h2 class="text-black text-3xl font-bold my-4">Education</h2>
                <div class="grid grid-cols- gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">

                    <figure
                        class="relative flex flex-col-reverse bg-gray-50 rounded-lg p-6">
                        <blockquote class="mt-6 text-gray-700">
                            <p>2002 - 2005</p>
                        </blockquote>
                        <figcaption class="flex items-center space-x-4">
                            <div class="flex-auto">
                                <h3>Diploma in Information Technology</h3>
                                <div class="mt-0.5">IT-University Copenhagen</div>
                            </div>
                        </figcaption>
                    </figure>

                    <figure
                        class="relative flex flex-col-reverse bg-gray-50 rounded-lg p-6">
                        <blockquote class="mt-6 text-gray-700">
                            <p>1998 - 2000</p>
                        </blockquote>
                        <figcaption class="flex items-center space-x-4">
                            <div class="flex-auto">
                                <h3>Datamatician</h3>
                                <div class="mt-0.5">Lyngby Uddannelsescenter</div>
                            </div>
                        </figcaption>
                    </figure>

                    <figure
                        class="relative flex flex-col-reverse bg-gray-50 rounded-lg p-6">
                        <blockquote class="mt-6 text-gray-700">
                            <p>1988 - 1991</p>
                        </blockquote>
                        <figcaption class="flex items-center space-x-4">
                            <div class="flex-auto">
                                <h3>High school</h3>
                                <div class="mt-0.5">Deutsches Gymnasium für Nordschleswig</div>
                            </div>
                        </figcaption>
                    </figure>

                </div>

                <h2 class="text-black text-3xl font-bold my-4">Languages</h2>

                <div class="grid grid-cols- gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">

                    <figure
                        class="relative flex flex-col-reverse bg-gray-50 rounded-lg p-6">
                        <figcaption class="flex items-center space-x-4">
                            <div class="flex-auto">
                                <h3>Danish</h3>
                                <div class="mt-0.5">Native proficiency</div>
                            </div>
                        </figcaption>
                    </figure>

                    <figure
                        class="relative flex flex-col-reverse bg-gray-50 rounded-lg p-6">
                        <figcaption class="flex items-center space-x-4">
                            <div class="flex-auto">
                                <h3>German</h3>
                                <div class="mt-0.5">Native proficiency</div>
                            </div>
                        </figcaption>
                    </figure>

                    <figure
                        class="relative flex flex-col-reverse bg-gray-50 rounded-lg p-6">
                        <figcaption class="flex items-center space-x-4">
                            <div class="flex-auto">
                                <h3>English</h3>
                                <div class="mt-0.5">Full professional proficiency</div>
                            </div>
                        </figcaption>
                    </figure>

                    <figure
                        class="relative flex flex-col-reverse bg-gray-50 rounded-lg p-6">
                        <figcaption class="flex items-center space-x-4">
                            <div class="flex-auto">
                                <h3>Japanese</h3>
                                <div class="mt-0.5">Elementary proficiency</div>
                            </div>
                        </figcaption>
                    </figure>

                </div>



                <h2 class="text-black text-3xl font-bold my-4">Courses</h2>

                <div class="grid grid-cols- gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">

                    <figure
                        class="relative flex flex-col-reverse bg-gray-50 rounded-lg p-6">
                        <figcaption class="flex items-center space-x-4">
                            <div class="flex-auto">
                                <h3>Product Owner 360</h3>
                                <div class="mt-0.5">2019 - GoAgile</div>
                            </div>
                        </figcaption>
                    </figure>

                    <figure
                        class="relative flex flex-col-reverse bg-gray-50 rounded-lg p-6">
                        <figcaption class="flex items-center space-x-4">
                            <div class="flex-auto">
                                <h3>Lead for Greatness</h3>
                                <div class="mt-0.5">2018 - GoAgile</div>
                            </div>
                        </figcaption>
                    </figure>

                    <figure
                        class="relative flex flex-col-reverse bg-gray-50 rounded-lg p-6">
                        <figcaption class="flex items-center space-x-4">
                            <div class="flex-auto">
                                <h3>Angular 2.0</h3>
                                <div class="mt-0.5">2016 - Trifork</div>
                            </div>
                        </figcaption>
                    </figure>

                    <figure
                        class="relative flex flex-col-reverse bg-gray-50 rounded-lg p-6">
                        <figcaption class="flex items-center space-x-4">
                            <div class="flex-auto">
                                <h3>Stillwater Leadership</h3>
                                <div class="mt-0.5">2016 - Stillwater</div>
                            </div>
                        </figcaption>
                    </figure>

                    <figure
                        class="relative flex flex-col-reverse bg-gray-50 rounded-lg p-6">
                        <figcaption class="flex items-center space-x-4">
                            <div class="flex-auto">
                                <h3>Graphical Facilitation</h3>
                                <div class="mt-0.5">2016 - Future Factory</div>
                            </div>
                        </figcaption>
                    </figure>

                    <figure
                        class="relative flex flex-col-reverse bg-gray-50 rounded-lg p-6">
                        <figcaption class="flex items-center space-x-4">
                            <div class="flex-auto">
                                <h3>Agile Project Leadership</h3>
                                <div class="mt-0.5">2012 - GoAgile</div>
                            </div>
                        </figcaption>
                    </figure>

                </div>


                <h2 class="text-black text-3xl font-bold my-4">Certifications</h2>


                <div class="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">

                    <figure
                        class="relative flex flex-col-reverse bg-gray-50 rounded-lg p-6">
                        <figcaption class="flex items-center space-x-4">
                            <div class="flex-auto">
                                <h3>Introduction to Quantum Computing for Everyone</h3>
                                <div class="mt-0.5">2021 - edX / ChicagoX</div>
                            </div>
                        </figcaption>
                    </figure>

                    <figure
                        class="relative flex flex-col-reverse bg-gray-50 rounded-lg p-6">
                        <figcaption class="flex items-center space-x-4">
                            <div class="flex-auto">
                                <h3>QTM1x: The Quantum Internet and Quantum Computers: How Will They Change the World?
                                </h3>
                                <div class="mt-0.5">2021 - edX / DelftX</div>
                            </div>
                        </figcaption>
                    </figure>

                    <figure
                        class="relative flex flex-col-reverse bg-gray-50 rounded-lg p-6">
                        <figcaption class="flex items-center space-x-4">
                            <div class="flex-auto">
                                <h3>Certified LeSS practitioner</h3>
                                <div class="mt-0.5">2021 - LeSS</div>
                            </div>
                        </figcaption>
                    </figure>

                    <figure
                        class="relative flex flex-col-reverse bg-gray-50 rounded-lg p-6">
                        <figcaption class="flex items-center space-x-4">
                            <div class="flex-auto">
                                <h3>Certified SAfe agilist</h3>
                                <div class="mt-0.5">2016 - SAFe</div>
                            </div>
                        </figcaption>
                    </figure>

                    <figure
                        class="relative flex flex-col-reverse bg-gray-50 rounded-lg p-6">
                        <figcaption class="flex items-center space-x-4">
                            <div class="flex-auto">
                                <h3>Professional Scrum Master</h3>
                                <div class="mt-0.5">2013 - Scrum.org</div>
                            </div>
                        </figcaption>
                    </figure>

                    <figure
                        class="relative flex flex-col-reverse bg-gray-50 rounded-lg p-6">
                        <figcaption class="flex items-center space-x-4">
                            <div class="flex-auto">
                                <h3>Agile Foundation Leadership Focus</h3>
                                <div class="mt-0.5">2012 - DSDM</div>
                            </div>
                        </figcaption>
                    </figure>

                </div>


                <h2 class="text-black text-3xl font-bold my-4">Conferences</h2>


                <div class="grid grid-cols- gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">

                    <figure
                        class="relative flex flex-col-reverse bg-gray-50 rounded-lg p-6">
                        <figcaption class="flex items-center space-x-4">
                            <div class="flex-auto">
                                <h3>Agile Coach Camp (co-organizer)</h3>
                                <div class="mt-0.5">2019 - Denmark</div>
                            </div>
                        </figcaption>
                    </figure>

                    <figure
                        class="relative flex flex-col-reverse bg-gray-50 rounded-lg p-6">
                        <figcaption class="flex items-center space-x-4">
                            <div class="flex-auto">
                                <h3>Elixir Conf Europe</h3>
                                <div class="mt-0.5">2017 - Barcelona</div>
                            </div>
                        </figcaption>
                    </figure>

                    <figure
                        class="relative flex flex-col-reverse bg-gray-50 rounded-lg p-6">
                        <figcaption class="flex items-center space-x-4">
                            <div class="flex-auto">
                                <h3>Elixir Conf Europe</h3>
                                <div class="mt-0.5">2016 - Berlin</div>
                            </div>
                        </figcaption>
                    </figure>

                    <figure
                        class="relative flex flex-col-reverse bg-gray-50 rounded-lg p-6">
                        <figcaption class="flex items-center space-x-4">
                            <div class="flex-auto">
                                <h3>Agile Coach Camp (co-organizer)</h3>
                                <div class="mt-0.5">2016 - Denmark</div>
                            </div>
                        </figcaption>
                    </figure>

                    <figure
                        class="relative flex flex-col-reverse bg-gray-50 rounded-lg p-6">
                        <figcaption class="flex items-center space-x-4">
                            <div class="flex-auto">
                                <h3>Agile Coach Camp</h3>
                                <div class="mt-0.5">2016 - Denmark</div>
                            </div>
                        </figcaption>
                    </figure>

                    <figure
                        class="relative flex flex-col-reverse bg-gray-50 rounded-lg p-6">
                        <figcaption class="flex items-center space-x-4">
                            <div class="flex-auto">
                                <h3>Agile Coach Camp</h3>
                                <div class="mt-0.5">2015 - Denmark</div>
                            </div>
                        </figcaption>
                    </figure>

                    <figure
                        class="relative flex flex-col-reverse bg-gray-50 rounded-lg p-6">
                        <figcaption class="flex items-center space-x-4">
                            <div class="flex-auto">
                                <h3>XP Days</h3>
                                <div class="mt-0.5">2015 - Benelux</div>
                            </div>
                        </figcaption>
                    </figure>

                </div>
            </div>
        </div>
    </div>

</template>