<script>
import Header from './Header.vue'
export default {
    name: 'Home',
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
        <h1 class="text-center">Homepage</h1>
    </div>
</template>

<style lang="scss" scoped>
    
</style>