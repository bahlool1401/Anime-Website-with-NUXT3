<template>
    <div class="w-screen">
        <div class="bg-gray-100 mx-auto max-w-2xl flex flex-col gap-y-8 mt-12">
            <div class="px-8 py-4 text-red-500 bg-red-200 border border-red-500 rounded-md relative" x-show="showDanger"
                x-data="{showDanger:true}">
                <strong>ffffffffffffffffffff</strong>
                i am tailwindddddddddddddd
                <svg xmlns="http://www.w3.org/2000/svg" x-on:click="showDanger=false" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="size-5 absolute top-4 right-4 cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
            <div class="px-8 py-4 text-green-600 bg-green-200 border border-green-500 rounded-md relative"
                x-show="showSuccess" x-data="{showSuccess : true}">
                <strong>ffffffffffffffffffff</strong>
                i am tailwindddddddddddddd
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-5 absolute top-4 right-4 cursor-pointer"
                    x-on:click="showSuccess = false">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

            </div>
            <div class="px-8 py-4 text-yellow-600 bg-yellow-200 border border-yellow-500 rounded-md relative"
                x-show="showWarning" x-data="{showWarning :true}">
                <strong>ffffffffffffffffffff</strong>
                i am tailwindddddddddddddd
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-5 absolute top-4 right-4 cursor-pointer "
                    x-on:click="showWarning = false">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

            </div>
        </div>


        <!-- //progress bar -->
        <div class="w-6/12 mx-auto">
            <div class=" bg-red-200 h-4 mx-auto mt-8 rounded-md overflow-hidden">
                <div style="width:35%" class="h-full bg-red-500"></div>
            </div>
            <div class=" bg-indigo-200 h-4 mx-auto mt-8 rounded-md overflow-hidden">
                <div style="width:63%" class="h-full bg-blue-500 animate-pulse"></div>
            </div>
        </div>

        <!-- //pagination -->
        <div class="w-6/12 mx-auto">
            <div class="flex items-center justify-center lg:justify-start mt-8 gap-x-4">
                <a href="#"
                    class="flex items-center justify-center w-8 h-8 font-medium text-lg text-white bg-indigo-600 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </a>
                <a href="#"
                    class="flex items-center justify-center w-8 h-8 font-medium text-lg text-white bg-indigo-600 rounded-full">
                    1
                </a>
                <a href="#"
                    class="flex items-center justify-center w-8 h-8 font-medium text-lg text-white bg-indigo-600 rounded-full">
                    2
                </a>
                <a href="#"
                    class="flex items-center justify-center w-8 h-8 font-medium text-lg text-white bg-indigo-600 rounded-full">
                    3
                </a>
                <a href="#"
                    class="flex items-center justify-center w-8 h-8 font-medium text-lg text-white bg-indigo-600 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>

                </a>

            </div>
        </div>

        <div class="mx-auto w-6/12 my-8 bg-gray-200">
            <div class="border border-gray-300 rounded-lg p-2 shadow-lg grid grid-cols-2 gap-4">
                <!-- first col -->
                <div class="aspect-w-16 aspect-h-16">
                    <img src="../public/1.jpg" alt="avatar" class="rounded-lg w-full">
                </div>
                <!-- second col -->
                <div class="text-gray-700 text-sm flex flex-col justify-between">
                    <div>
                        <h3 class=" font-bold ">Bahlool Ramesh</h3>
                        <p class=" font-medium my-4 line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quibusdam, perspiciatis error. Reiciendis temporibus tempore ipsam. Lorem ipsum dolor
                            sit amet.</p>
                    </div>
                    <div class="flex justify-end">
                        <div class="relative" x-data="{showDropdown:false}">
                            <button href="#"
                                class="flex gap-2 items-center px-4 py-2 rounded-lg bg-blue-500 text-white text-xs font-medium"
                                x-on:click="showDropdown=!showDropdown">
                                <span> More Info</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-4 transform transition"
                                    x-bind:class="{'rotate-180':showDropdown}">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                                </svg>

                            </button>
                            <ul class="absolute bottom-full left-0 flex flex-col w-full text-base font-medium list-none bg-gray-300 divide-y-2 divide-gray-400 rounded-xl overflow-hidden"
                                x-show="showDropdown" x-on:click.away="showDropdown=false">
                                <li class="p-2 hover:bg-gray-500 ">1</li>
                                <li class="p-2 hover:bg-gray-500 ">2</li>
                                <li class="p-2 hover:bg-gray-500 ">3</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="w-10/12 mx-auto">
            <div class="my-20 bg-gray-700 text-white p-2 w-full flex items-center justify-between sm:justify-start sm:gap-4 flex-wrap"  x-data="{showChildren : false}">
                <a href="#" class="text-xl">Logo</a>
                <button class="p-1 border border-gray-300 sm:hidden" x-on:click="showChildren=!showChildren" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </button>

                <ul class="flex flex-col sm:flex-row gap-4 text-lg font-medium list-none bg-gray-500 sm:flex-grow sm:bg-transparent w-full sm:w-auto transition-all duration-500" x-bind:class="showChildren ? 'max-h-96' : 'max-h-0 sm:max-h-96'" x-cloak>
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </ul>
            </div>
        </div>
    </div>
</template>