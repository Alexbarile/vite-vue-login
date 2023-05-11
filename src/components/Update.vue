<script>
import Header from './Header.vue'
export default {
    name: 'Update',
    components:{
        Header,
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name:'SignUp'})
        }
    },
}
</script>

<template>
    <div>
        <Header></Header>
    </div>
    <div>
        <h1 class="text-center">Update Restaurant</h1>
    </div>
</template>

<style lang="scss" scoped>
    
</style>