<template>
    <div>

        <my-header></my-header>

        <div>
            <h2>kontakt oss</h2>
        </div>

        <form action="" class="form-container form-container__contact" @submit.prevent="handleSubmit">
            <h4>Har du noen spørsmål? <br> Send oss en melding her:</h4>

            <input type="text" name="name" placeholder="ditt navn">
            <span class="error">Dette feltet kan ikke være tomt</span>

            <input type="email" name="email" placeholder="e-post addresse">
            <span class="error">Vær vennlig å skriv inn rikitg e-post adresse</span>

            <textarea name="message" id="message" placeholder="din melding" cols="30" rows="10"></textarea>
            <span class="error">Dette feltet kan ikke være tomt</span>

            <button type="submit">send</button>
            <modal
                class="modal"
                name="my-modal"
                @click.self="$modal.hide('my-modal')"
                :adaptive="true"
            >
                <p>Takk for din melding!</p>
            </modal>

        </form>
    </div>
</template>


<script>
import Header from '../components/Header'

export default {
    name: 'ContactPage',
     components: {
        'my-header': Header
    },
    methods: {
        handleSubmit() {
            this.$modal.show('my-modal')
        }
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