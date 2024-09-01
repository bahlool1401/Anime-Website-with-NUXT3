<template>
    <div class="bg-gradient-to-r from-red-500 to-indigo-600 flex justify-center items-center h-screen">
        <main class="border border-gray-300 p-4 bg-white bg-opacity-30 max-w-2xl w-full rounded-2xl">
            <ul class="flex flex-row list-none items-center text-lg font-bold text-gray-900 mb-8" x-data="{openTab:1}">
                <li class="px-4 py-2  cursor-pointer" x-on:click="openTab = 1"
                    x-bind:class="{'border-b-2 border-blue-600' : openTab===1}">Login</li>
                <li class="px-4 py-2 cursor-pointer " x-on:click="openTab = 2"
                    x-bind:class="{'border-b-2 border-blue-600' : openTab===2}">Register</li>
            </ul>
            <div class="flex flex-col items-center gap-4">
                <h3 class="text-xl font-bold">Log in with :</h3>
                <div class="flex items-center gap-4 mb-8" x-data="{openTwiter : false}">
                    <!-- //twiter -->
                    <div class="text-white bg-blue-400 rounded-full w-16 h-16 flex justify-center items-center hover:bg-blue-100 hover:text-blue-400 cursor-pointer"
                        x-on:click="openTwiter = true">
                        1
                    </div>
                    <!-- //facebook -->
                    <div
                        class="text-white bg-blue-700 rounded-full w-16 h-16 flex justify-center items-center hover:bg-blue-200 hover:text-blue-700 cursor-pointer">
                        2
                    </div>
                    <!-- //gmail  -->
                    <div
                        class="text-white bg-red-500 rounded-full w-16 h-16 flex justify-center items-center hover:bg-red-100 hover:text-red-500 cursor-pointer">
                        3
                    </div>

                    <!-- //TWITER modal -->
                    <div class="fixed inset-0 bg-gray-900 bg-opacity-40 flex justify-center items-center z-10"
                        x-show="openTwiter"
                        x-transition:enter="transition ease-out duration-300"
                        x-transition:enter-start="opacity-0 scale-50"
                        x-transition:enter-end="opacity-100 scale-100"
                        x-transition:leave="transition ease-in duration-500"
                        x-transition:leave-start="opacity-100 scale-100"
                        x-transition:leave-end="opacity-0 scale-50">
                        <div class="w-full max-w-xs sm:max-w-md rounded-2xl flex sm:flex-col h-40 sm:h-auto overflow-hidden"
                            x-on:click.away="openTwiter=false">
                            <!-- //Logo -->
                            <div
                                class="w-1/3 sm:w-full h-full sm:h-28 bg-blue-400 text-white flex items-center justify-center ">
                                <!-- //twiter -->
                                <div class="text-white border border-white bg-blue-400 rounded-full w-16 h-16 flex justify-center items-center hover:bg-blue-100 hover:text-blue-400 cursor-pointer lg:hover:animate-bounce"
                                    x-on:click="openTwiter = true">
                                    1
                                </div>
                            </div>

                            <!-- //input -->
                            <div class="w-2/3 sm:w-full sm:h-40  p-4 bg-white flex flex-col gap-4 h-full ">
                                <!-- //Email -->
                                <div class="flex flex-col  gap-2">
                                    <label for="email" class="text-sm font-medium text-gray-800 ">email</label>
                                    <div class="relative flex justify-center">
                                        <input type="text" class="custom-input" id="email" autocomplete="off"
                                            placeholder="enter your email">
                                        <!-- //shadow-glass ????   >>>>>>>  Added (customized) in tailwind.config.js  👆-->
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            class="size-6 absolute top-2 left-3 text-blue-400">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>


                                    </div>
                                </div>
                                <button class="modal-btn bg-blue-400 ">
                                    Log In
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <form class="flex flex-col gap-4 ">
                <!-- //UserName -->
                <div class="flex flex-col gap-2">
                    <label for="username" class="custom-label ">username</label>
                    <div class="relative">
                        <input type="text" class="custom-input" id="username" autocomplete="off">
                        <!-- //shadow-glass ????   >>>>>>>  Added (customized) in tailwind.config.js  👆-->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6 absolute top-2 left-3 text-indigo-700">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>

                    </div>

                </div>

                <!-- //Password -->
                <div class="flex flex-col gap-2">
                    <label for="pass" class="custom-label">password</label>
                    <div class="relative">
                        <input type="password" class="custom-input" id="pass">
                        <!-- //shadow-glass ????   >>>>>>>  Added (customized) in tailwind.config.js  👆-->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6 absolute top-2 left-3 text-indigo-700">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>


                    </div>
                </div>

                <!-- // Submit -->
                <button class="btn bg-indigo-700 ">
                    Log In
                </button>
            </form>
        </main>
    </div>
</template>