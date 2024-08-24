<template>
    <div>
        <div class="card-slider">
            <!-- TopAnime::{{ TopAnime }} -->
            <span v-for="(item, index) in onlyFirstFew" :key="index" class="border-b">
            <!-- {{ item?.images?.webp }} -->
             <img :src="item?.images?.webp?.image_url" class="lable" :alt="item?.title" @click="goAnimePage(item)"> 
            </span>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    TopAnime:{
        type:Array,
        required:true
    }
})
// for DYNAMIC👇


const { TopAnime } = toRefs(props)

const onlyFirstFew = computed(() => {
    if (!TopAnime.value) return
    return TopAnime?.value.slice(0,9)
})

</script>

<style  scoped>

.card-slider {
    margin: 60px auto;
    text-align: center;
}
.lable {
    position: realtive;
    margin: 0 -35px;
    display: inline-block;
    width: 150px;
    height: 200px;
    border-radius: 5px;
    box-shadow: 0 10px 6px -6px #777;
    -webkit-transform: skew(-20deg) rotate(-20deg);
    transform: skew(-20deg) rotate(-20deg);
    -webkit-transition: .3s;
    transition: .3s;
}
.lable:hover{
    margin: 0 50px;
    -webkit-transform: none;
    transform: none;
}

</style>