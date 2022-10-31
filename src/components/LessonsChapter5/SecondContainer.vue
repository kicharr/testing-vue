<template>
    <div class="wrapper">
        <header>
            <slot name="secondHeader">
                <h2>Заголовок по умолчанию</h2>
                <p>Дата статьи: {{ dateArticle }}</p>
            </slot>
            <article>
                <slot></slot>
            </article>
            <footer>
                <slot name="secondFooter">
                    <h4>Copyright©2020</h4>
                </slot>
            </footer>
        </header>
    </div>
</template>

<script>
export default {
    name: "SecondContainer",
    data() {
        return {
            dateArticle: `${new Date().toLocaleDateString()}`,
        }
    },

}
</script>

<style scoped>

</style>
