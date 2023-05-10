<script>
import axios from 'axios';
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: '',
        }
    },
    methods: {
        signUp(){
            let result = axios.post("http://localhost:3000/user", {
                name: this.name,
                email: this.email,
                password: this.password,
            });
            console.log(result);

            // per fare REINDIRIZZAMENTO ad una pagina
            this.$router.push({name: 'Home'})
            // il 'name' corrisponde al 'name' del router.js

            if(result.status == 201){
                // alert('Sign Up Done');

                // viene mostrato nell'inspector, in APPLICATION, LOCAL STORAGE
                localStorage.setItem('user-info', JSON.stringify(result.data))
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'Home'})
        }
    },
}
</script>

<template>
    <div>
        <h1 class="text-center">Sign Up</h1>
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-4 ">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                            <input type="text" class="form-control" v-model="name" placeholder="Enter Name" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email</label>
                            <input type="email" class="form-control" v-model="email" placeholder="Enter Email" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" v-model="password" placeholder="Enter Password">
                        </div>
                        <div class="d-flex justify-content-center">
                            <button type="submit" class="btn btn-primary" v-on:click="signUp">Sign Up</button>
                        </div>
                        <div class="d-flex justify-content-center">
                            <p>
                                <router-link to="/login">Login</router-link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>