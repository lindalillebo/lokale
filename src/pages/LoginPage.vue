<template>
    <div>
        
        <my-header></my-header>

        <form action="" class="form-container form-container__log-in margin-top">

            <h2>logg inn</h2>

            <input type="email" name="email" placeholder="e-post adresse.." required>
            <span class="error">Feil e-post adresse!</span>

            <input type="password" name="password" placeholder="passord.." required>
            <span class="error">Feil passord!</span>
            <span class="small-text"><a href="#">Glemt passord?</a></span>

            <button type="submit">logg inn</button>

            <span class="small-text">Har du ingen bruker? Registrer deg <router-link to="/add-venue">her</router-link></span>

        </form>
    </div>
</template>


<script>
import Header from '../components/Header'

export default {
    name: 'LoginPage',
     components: {
        'my-header': Header
    }
}
</script>


<style lang="scss">
    


// Tablet
@media (min-width: 600px) and (max-width: 1020px) {



}


// Desktop
@media (min-width: 1020px) {



}







</style>