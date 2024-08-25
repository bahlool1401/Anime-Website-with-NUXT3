<template>
    <div>
        <div class="header">
            <Navigation />
        </div>
        <div class=" max-w-6xl shadow-md m-auto min-h-screen pt-3">
            <div class=" px-2">
                <div class="topAnime">
                    <div class=" h-10 w-full bg-green-900">

                        <h1 class="text-2xl px-4 text-white font-bold">UpComing Anime:</h1>
                    </div>
                    <!-- <ClientOnly> -->

                        <TopAnime :TopAnime="topAnime" />
                    <!-- </ClientOnly> -->
                </div>

                <div>
                    <div class=" h-10 w-full bg-green-900">
                        <h1 class="text-2xl px-4 text-white font-bold">Current Season:</h1>
                    </div>
                    <div class="currentSeason flex flex-wrap  justify-center">
                        <Card v-for="anime in response" :key="anime.mal_id" class="mx-auto" @click="goAnime(anime)">
                            <template #image>
                                <img :src="anime.images.webp.image_url" height="266" :alt="anime.title" />
                            </template>
                            <template #content>
                                <h2 class=" font-bold">{{ anime.title }}</h2>
                            </template>
                            <template #episode>
                                <p>Episodes: {{ anime.episodes }}</p>
                            </template>
                        </Card>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>

onBeforeMount(async () => {
   await getData()
})
onMounted(async () => {
  await  getData()
    console.log('beforeeeeeeeeee',topAnime.value);
})


const topAnime = ref([])
const response = ref([])


async function getData() {
    try {
        const { data, error } = await useFetch('https://api.jikan.moe/v4/seasons/now')
        if (data.value) {
            response.value = data.value.data
        }

        
        const res=await useFetch('https://api.jikan.moe/v4/top/anime')
        console.log('77777777777777777777',res.data);
        topAnime.value=res.data.value?.data
        
        // if (result.value) {
          //  console.log(result.value,result.value?.data);
           // topAnime.value = result?.data || []
        // }


    } catch (error) {
        console.log(error)
    }
}



</script>