<template>
    <div style="position: relative;">
        <main class="error-main">
            401-权限不足
        </main>
    </div>
</template>

<script>
    export default {
        name: "Error404"
    }
</script>

<style scoped>
    .error-main{
        position: fixed;
        height: 660px;
        line-height: 660px;
        width: 600px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        text-align: center;
        font-size: 80px;
    }
</style>
