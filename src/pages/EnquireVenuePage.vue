<template>
    <div>
        <my-header></my-header>
    <div>
        <h2>send en booking forespørsel til .....</h2>
    </div>

    <form action="" class="form-container">
        <p>Vi sender din henvendelse til ............ for ditt arrangement. De vil da svare deg på e-post med et
            skreddersydd forslag, helt gratis uten forpliktelser. Du velger selv om du vil godta eller ikke.</p>

        <h3>kontakt detaljer</h3>

        <label for="name">Fullt navn<span class="red"> *</span></label>
        <input type="text" id="name" name="name" required>
        <span class="error">Dette feltet kan ikke være tomt</span>

        <label for="email">E-post adresse<span class="red"> *</span></label>
        <input type="email" id="email" name="email" required>
        <span class="error">Vær vennlig å skriv inn rikitg e-post adresse</span>

        <label for="phone">Telefonnummer<span class="red"> *</span></label>
        <input type="tel" id="phone" name="phone" pattern="/^\d{3}[-\s\.]\d{3}[-\s\.]\d{4}$/" required>
        <span class="error">Vær vennlig å skriv inn rikitg telefonnummer</span>

        <h3>arrangement detaljer</h3>

        <label for="text">Hvilket type arrangement ønsker du?<span class="red"> *</span></label>
        <select name="events" id="events" required>
            <option value="0">type begivenhet</option>
            <option value="bedriftsarrangement">Bedriftsarrangement</option>
            <option value="bryllup">Bryllup</option>
            <option value="dåp / navnedag / konfirmasjon">Dåp / Navnedag / Konfirmasjon</option>
            <option value="fest">Fest</option>
            <option value="forestilling / konsert">Forestilling / Konsert</option>
            <option value="julebord">Julebord</option>
            <option value="kurs / konferanse">Kurs / Konferanse</option>
            <option value="middag / kunsj">Middag / Lunsj</option>
            <option value="møte">Møte</option>
            <option value="utstilling">Utstilling</option>
        </select>
        <span class="error">Vennligst velg et av alternativene</span>

        <label for="text">Sitteplasser<span class="red"> *</span></label>
        <label class="padding-left" for="sitting">Sittende
            <input type="radio" name="sitting" value="sitting">
            <span class="radio"></span>
        </label>

        <label class="padding-left" for="standing">Stående
            <input type="radio" name="standing" value="standing">
            <span class="radio"></span>
        </label>

        <label class="padding-price" for="text">Antall gjester<span class="red"> *</span></label>
        <input type="number" name="number-guests" required>
        <span class="error">Vennligst fyll inn antall gjester</span>

        <label for="text">Dato<span class="red"> *</span></label>
        <input type="date" name="date" required>
        <span class="error">Vennligst fyll inn dato</span>

        <label for="text">Klokkeslett</label>
        <input type="time" name="time">

        <label for="text">Din estimerte utgift</label>
        <input type="text" name="expence" placeholder="kr..">

        <label for="text">Har du noen spesielle krav?</label>
        <textarea name="message" id="enquire-venue-message" placeholder="melding.." cols="30" rows="10"></textarea>


        <button class="btn--right" type="submit">send forespørsel</button>


    </form>
    </div>
</template>


<script>
import Header from '../components/Header'

export default {
    name: 'EnquireVenuePage',
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