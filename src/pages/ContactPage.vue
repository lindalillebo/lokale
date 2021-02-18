<template>
    <div>

        <Header/>

        <div>
            <h2>kontakt oss</h2>
        </div>

        <form action="" class="form-container form-container__contact">
            <h4>Har du noen spørsmål? <br> Send oss en melding her:</h4>

            <input type="text" name="name" placeholder="ditt navn">
            <span class="error">Dette feltet kan ikke være tomt</span>

            <input type="email" name="email" placeholder="e-post addresse">
            <span class="error">Vær vennlig å skriv inn rikitg e-post adresse</span>

            <textarea name="message" id="message" placeholder="din melding" cols="30" rows="10"></textarea>
            <span class="error">Dette feltet kan ikke være tomt</span>

            <button type="submit">send</button>

        </form>

    <Footer/>

    </div>
</template>


<script>
import Header from '..Header.vue'
import Footer from '../components/Footer'

export default {
    name: 'ContactPage',
     components: {
        Header,
        Footer
    }
}
</script>


<style lang="scss">
    
</style>