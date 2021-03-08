<template>
    <div class="jsonDescriptionItem">
        <li>
            {{Object.keys(item)}} : {{typeOf(item)}}
        </li>
    </div>
</template>

<script>
export default {
    props:{
        item: Object
    }
}
</script>