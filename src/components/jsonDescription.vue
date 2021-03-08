<template>
    <div class="json-description">
        <div class="container">
            <div class="json-description-inner">
                <div class="indicator" v-show="indicator">скопиравано!</div>
                <div class="json-description-head">        
                    <div class="json-description-info">
                        <div class="json-description-req">
                            GET
                        </div>
                        <div class="json-description-link">
                            {{link}}
                        </div>
                    </div>
                    <div class="buttons">
                        <button class="show-json" title="show json" @click="changeMode">
                            <img src="@/assets/icons/eye.svg" alt="" class="icon">
                            <div>show</div>
                        </button>
                        <button class="copy-link" title="copy link" @click="copyLink">
                            <img src="@/assets/icons/copy.svg" alt="" class="icon">
                            <div>copy</div>
                        </button>
                    </div>
                </div>
            <div class="json-description-items" v-show="show">
                <textarea class="textarea" name="" id="" cols="30" rows="10" v-model="strJson" disabled></textarea>
            </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props:{
        data: Object,
        link: String,
    },
    data:function (){
        return{
            show: false,
            strJson: JSON.stringify( this.data, null, '\t'),
            indicator: false
        }
    },
    methods:{
        changeMode: function (){
            this.show = !this.show;
        },
        copyLink: function(){
            navigator.clipboard.writeText(this.link)
            .then(() => {
                this.indicator = true;
            })
            .catch( () => {
                this.indicator = false;
            });
        }
    }
}

</script>
<style scoped>
    .buttons{
        display: flex;
    }
    .textarea{
        background-color: #2a028f;
        resize: none;
        height: 600px;
    }
    .json-description{
        margin: 20px 0px;
    }
    .json-description-inner{
        position: relative;
    }
    .json-description-head{
        position: relative;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        background-color: rgba(19, 50, 228,0.2);
    }
    .indicator{
        position: absolute;
        top: 4px;
        left: 70%;
        z-index: 10;
        padding: 5px;
        background-color: rgb(0, 55, 128);
        color:white;
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
        height: 100%;
        padding: 4px;
        margin: 0;
        border: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .show-json{
        cursor: pointer;
        display: block;
        background-color: rgb(59, 87, 245);
        width: fit-content;
        height: 100%;
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
    .show-json div{
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
    .show-json:hover div{
        margin: 5px;
        width: fit-content;
        overflow: visible;
    }
    .show-json:focus div{
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