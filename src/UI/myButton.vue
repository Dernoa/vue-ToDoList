<template>
    <div>
        <button class="btn">
            <slot></slot>
        </button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.btn{
    padding: 10px;
    margin: 10px;
    background-color: #6A994E;    
    border-radius: 20px;
}

</style>