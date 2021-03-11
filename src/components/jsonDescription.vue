<template>
    <div class="json-description">
        <div class="container">
            <div class="json-description-inner">
                <div class="title">{{title}}</div>
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
            <div class="status" v-show="show">
                статус {{data.status}}
            </div>
            <div class="json-description-items" v-show="show">
                <span class="type"><span>headers</span></span>
                <textarea class="textarea-head" name="" id="" cols="30" rows="10" v-model="strJsonHeaders" disabled></textarea>
            </div>
            <div class="json-description-items" v-show="show">
                <span class="type"><span>body</span></span>
                <textarea class="textarea-body" name="" id="" cols="30" rows="10" v-model="strJsonBody" disabled></textarea>
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
        title: String,
    },
    data:function (){
        return{
            show: false,
            strJsonHeaders: JSON.stringify( this.data.headers, null, '\t'),
            strJsonBody: JSON.stringify( this.data.data, null, '\t'),
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
    .status{
        padding: 4px;
        background-color: rgb(47, 255, 141);
        color: black;
        font-size: 13px;
        font-weight: 600;
    }
    .buttons{
        display: flex;
    }
    .type{
        width: 100%;
        display: flex;
        position: absolute;
    }
    .type span{
        padding: 4px;
        background-color: rgba(80, 9, 255, 0.5);
        color: white;
        font-size: 13px;
        border-radius: 3px;
    }
    .title{
        position: absolute;
        top: -16px;
        left: 55px;
        height: 17px;
        width:fit-content;
        background-color: #e0f8ff;
        color: black;   
        z-index: 2; 
        font-size: 13px; 
        padding:0px 10px;
    }
    .textarea-head{
        background-color: #343749;
        resize: none;
        height: 150px;
    }
    .textarea-body{
        background: #212430;
        resize: none;
        height: 600px;
    }
    .json-description{
        margin: 25px 0px 20px 0px;
    }
    .json-description:hover .title{
        animation: title 2s infinite;
    }
    .json-description-inner{
        position: relative;
    }
    .json-description-items:hover .type{
        opacity: .2;
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
        width: calc(100% - 7px);
        display: block;
        height: fit-content;
        background-color: darkgray;
        color: white;
        resize: auto;
    }
    @keyframes title{
        0%{ 
            background-color: #e0f8ff;
        }
        50%{ 
            background-color: #a1b7ff;
        }
        100%{ 
            background-color: #e0f8ff;
        }
    }
</style>