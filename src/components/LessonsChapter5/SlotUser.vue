<template>
    <div warpper>
        <slot></slot>
    </div>
</template>
  
<script>
export default {
    name: "SlotUser",
    data() {
        return {
            user: {
                name: 'Tom',
                secondName: 'Chirle',
                age: 19
            }
        }
    }
}
</script>
  
<style scoped>

</style>