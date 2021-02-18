<template>
    <div>
        
        <Header/>

        <form action="" class="form-container form-container__log-in margin-top">

            <h2>logg inn</h2>

            <input type="email" name="email" placeholder="e-post adresse.." required>
            <span class="error">Feil e-post adresse!</span>

            <input type="password" name="password" placeholder="passord.." required>
            <span class="error">Feil passord!</span>
            <span class="small-text"><a href="#">Glemt passord?</a></span>

            <button type="submit">logg inn</button>

            <span class="small-text">Har du ingen bruker? Registrer deg <a href="add-venue.html">her</a></span>

        </form>

        <Footer/>

    </div>
</template>


<script>
import Header from '..Header.vue'
import Footer from '../components/Footer'

export default {
    name: 'LoginPage',
     components: {
        Header,
        Footer
    }
}
</script>


<style lang="scss">
    
</style>