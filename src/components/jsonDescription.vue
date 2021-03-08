<template>
    <div class="json-description">
        <div class="container">
            <div class="json-description-head">
                <div class="json-description-info">
                    <div class="json-description-req">
                        GET
                    </div>
                    <div class="json-description-link">
                        https://localhost:8080/rest-api
                    </div>
                </div>

                <button class="copy-link" title="copy link">
                    <img src="@/assets/icons/copy.svg" alt="" class="icon">
                    <div>copy</div>
                </button>
            </div>

            <div class="json-description-items">
                <jsonDescriptionItem v-for="json in dataJson" :key="(json)"/>
            </div>
        </div>
       
    </div>
</template>
<script>
//Object.keys(o)

import jsonDescriptionItem from '@/components/jsonDescriptionItem.vue'

export default {
    props:{
        data: Object
    },
    data:function (){
        return{
            dataJson: this.data[0]
            //dataJson: Object.keys(this.data[0])
        }
    },
    components:{
        jsonDescriptionItem,
    }
}

</script>
<style scoped>
    
    .json-description-head{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        background-color: rgba(19, 50, 228,0.2);
    }
    .json-description-info{
        display:flex;
        align-items: center;
    }
    .json-description-req{
        padding: 7px 10px;
        background-color: #5009FF;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 900;
        color:white;
        margin-right: 10px;
    }
    .copy-link{
        cursor: pointer;
        display: block;
        background-color: rgb(19, 50, 228);
        width: fit-content;
        height: 30px;
        padding: 4px;
        margin: 0;
        border: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .icon{
        width: 20px;
        height: 20px;
        margin: 5px;
    }
    .copy-link div{
        color:white;
        text-transform: uppercase;
        width: 0;
        overflow: hidden;
        transition: .5s;
    }

    .copy-link:hover div{
        margin: 5px;
        width: fit-content;
        overflow: visible;
    }
    .copy-link:focus div{
        margin: 5px;
        width: fit-content;
        overflow: visible;
    }
    textarea{
        width: 100%;
        display: block;
        height: fit-content;
        background-color: darkgray;
        color: white;
        resize: auto;
    }
</style>