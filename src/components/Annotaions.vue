<template>
    <div>
        <div class="col">
        	Annotation Name: <strong style="color:green">{{annotaion.name}}</strong> --- Annotation Time: <strong style="color:red"> {{annotaion.time}}</strong> 
        </div>

    </div>
</template>
<script>
export default {
    props:["annotaion"]
}
</script>
<style scoped>

</style>

