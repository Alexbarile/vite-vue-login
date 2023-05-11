<script>
export default {
    name: 'Header',
    methods: {
        logout(){
            localStorage.clear();
            this.$router.push({name: 'Login'})
        }
    },
}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/add" class="nav-link">Add Restaurant</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/update" class="nav-link">Update Restaurant</router-link>
                </li>
                <li class="nav-item">
                    <a v-on:click="logout" class="nav-link" href="#">Logout</a>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown link
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
    </nav>

 
</template>


<style lang="scss">

  
</style>