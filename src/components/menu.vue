<template>
    <div class="menu">
                    <!-- главная кнопка -->
                    <div :class='["main-item", "menu-item",{"menu-item-active":activeButton==-1}]' @click="activeButton=-1; $router.push({name:mainRoute})">что это?</div>
                    <!--создаём кнопки -->
                    <div v-for="(route,index) in routes" :key="index" :class='["menu-item",{"menu-item-active":activeButton==index}]' @click="activeButton=index; $router.push({name:route})">{{names[index]||'none'}}</div>
                    <!--вставляем по клику перенаправление на наш роут и имя кнопки-->
    </div>
</template>
<script>
export default {
    props:{
            //роут на главную страницу раздела
            mainRoute: String,
            //получаем именна роутов
            routes: Array,
            //получаем желаемые названия кнопок
            names: Array
    },
    data(){
        return{
            activeButton:-1
        }
    }
    
}
</script>
<style>
.menu{
    display: flex;
}

.menu-item{
    text-transform: uppercase;
    padding: 5px;
    background-color: rgb(19, 116, 228);
    
    color: white;
    margin-right: 5px;
    border-radius: 5px ;
    font-size: 12px;
}

.menu-item-active{
background-color: rgb(8, 101, 207);
}

.main-item{
    background-color: rgb(19, 50, 228);
    margin-right: 20px;
    transition: .5s;
}
.main-item.menu-item-active{
    background-color: rgb(8, 101, 207);
    padding: 5px 10px;
    margin-right: 5px;
    color:white;
}
</style>

