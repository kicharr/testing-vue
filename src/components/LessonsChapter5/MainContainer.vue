<template>
    <div class="wrapper">
        <header>
            <slot name="header"></slot>
        </header>
        <article>
            <slot></slot>
        </article>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
export default {
    name: "MainContainer",
    data() {
        return {
            
        }
    },

}
</script>

<style scoped>

</style>
