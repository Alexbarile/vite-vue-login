<script>
import Header from './Header.vue'
export default {
    name: 'Home',
    components:{
        Header,
    },
    data() {
        return {
            name: '',

        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;
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
        <h1 class="text-center">Ciao {{name}}. Homepage</h1>
    </div>
</template>

<style lang="scss" scoped>
    
</style>