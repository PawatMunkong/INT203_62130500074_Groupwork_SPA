<template>
    <nav class="bg-white">
        <ul class="flex flex-row justify-end font-extrabold text-3xl">
            <li><router-link to="/"> Lullaby</router-link></li> 
            <li><router-link to="/Lullabylist"> Lullaby list</router-link></li>  
            <li><router-link to="/About"> About</router-link></li>      
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
    nav ul li {
        color: rgb(0, 0, 0);
        padding: 30px 30px;
    }
    nav a.router-link-exact-active {
        color: rgb(243, 152, 49);
    }
  

   
</style>