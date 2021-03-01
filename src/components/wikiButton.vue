<template>
        <a :href="link" target="_blank" class="wiki" title="wikipedia">
            <img src="@/assets/icons/wikipedia.svg" alt="">
        </a>    
</template>
<style scoped>
    .wiki{
        margin: 2px;
        display: block;
        background-color: rgb(19, 116, 228);
        width:40px;
        height:40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 40px;
    }
    .wiki:hover{
         background-color: rgb(49, 49, 49);
    }
    .wiki:active{
         transform: translateY(2px);
         background-color: rgb(68, 68, 68);
    }
    img{
        width: 60%;
        height: 60%;
    }
</style>
<script>
export default {
    props: {
        link:String
    }
}
</script>