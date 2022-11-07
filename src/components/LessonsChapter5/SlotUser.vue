<template>
    <div warpper>
        <slot v-bind:userinfo="user"></slot>
    </div>
</template>
  
<script>
export default {
    name: "SlotUser",
    data() {
        return {
            user: {
                name: 'Tom',
                age: 36
            }
        }
    }
}
</script>
  
<style scoped>

</style>