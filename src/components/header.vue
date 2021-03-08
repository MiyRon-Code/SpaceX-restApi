<template>
    <div class="header">
        <div class="container">
            <div class="header-inner">
                <div class="logo" @click="$router.push({name:'main'})">
                    SpaceX-Api
                </div>
                <div class="nav">
                        <button class="nav-item" @click="$router.push({name:'description'})"> description</button>
                        <button class="nav-item" @click="$router.push({name:'launches'})">launches </button>
                        <button class="nav-item" @click="$router.push({name:'rockets'})">rockets</button>
                        <button class="nav-item" @click="$router.push({name:'capsules'})">capsules</button>
                        <button class="nav-item" @click="$router.push({name:'dragons'})">dragon</button>
                        <button class="nav-item" @click="$router.push({name:'landpads'})">landpads</button>
                </div>
            </div>
        </div>
       
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    a{
        text-decoration: none;
        color: white;
    }
    .header{
        background: linear-gradient(80deg, #2B04E8, rgb(137, 64, 255)) ;
        color:white;
    }
    .header-inner{
        padding: 15px 0px;
        display: flex;
        justify-content: space-between
    }
    .logo{
        transition: 1s;
        font-weight: 900;
        cursor: pointer;
    }
   
    .nav{
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
    }
    .nav-item{
        display: block;
        margin-left: 30px;
        position: relative;
        cursor: pointer;
        background-color: transparent;
        border: none;
        font-size: 15px;
        color: white;
    }
    .nav-item::after{
        content: '';
        position: absolute;
        top:25px;
        left: 0;
        width: 100%;
        height: 4px;
        transition: .5s;
    }
    .nav-item:hover::after{
        top:30px;
        background-color: white;
    }

</style>