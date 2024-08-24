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
            </div>
        </div>

    </div>
</template>

<script setup>

onMounted(async () => {
  await  getData()
    console.log('beforeeeeeeeeee',topAnime.value);
})


const topAnime = ref([])


async function getData() {
    try {
        // const { data, error } = await useFetch('https://api.jikan.moe/v4/seasons/now')
        // if (data.value) {
        //     response.value = data.value.data
        // }

        
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