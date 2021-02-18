<template>
    <div>

        <Header/>

        <div>
            <h2>registrer ditt lokale, helt gratis!</h2>
        </div>

        <form action="" class="form-container">
            <p>Fyll inn din informasjon så vi kan lage din oppføring for deg. Du kan legge til eller endre den når som
                helst ved å logge inn.
                Det er helt gratis å legge til ditt lokale, og du har full kontroll over hvilke bookinger du aksepterer.
                Vi fakturerer kun 10% provisjon etter datoen for arrangementet. Har du noen spørsmål, send oss en melding <a
                    href="contact.html">her!</a></p>

            <h3>kontakt informasjon</h3>

            <div class="flex">
                <div>
                    <label for="venue-name">Navn på lokale<span class="red"> *</span></label>
                    <input type="text" id="venue-name" name="venue-name" required>
                    <span class="error">Dette feltet kan ikke være tomt</span>

                </div>
                <div>
                    <label for="owner-name">Fullt navn utleier<span class="red"> *</span></label>
                    <input type="text" id="owner-name" name="owner-name" required>
                    <span class="error">Dette feltet kan ikke være tomt</span>
                </div>
            </div>
            <div class="flex">
                <div>
                    <label for="email">E-post adresse<span class="red"> *</span></label>
                    <input type="email" id="email" name="email" required>
                    <span class="error">Vær vennlig å skriv inn rikitg e-post adresse</span>
                </div>
                <div>
                    <label for="phone">Telefonnummer<span class="red"> *</span></label>
                    <input type="tel" id="phone" name="phone" pattern="/^\d{3}[-\s\.]\d{3}[-\s\.]\d{4}$/" required>
                    <span class="error">Vær vennlig å skriv inn rikitg telefonnummer</span>
                </div>
            </div>
            <div class="flex">
                <div>
                    <label for="address">Adresse<span class="red"> *</span></label>
                    <input type="text" id="address" name="address" required>
                    <span class="error">Dette feltet kan ikke være tomt</span>
                </div>
                <div>
                    <label for="url">Nettside</label>
                    <input type="url" id="website" name="website">
                </div>
            </div>
            <div class="flex">
                <div>
                    <label for="password">Passord<span class="red"> *</span></label>
                    <input type="password" id="password" name="password" required>
                    <span class="error">Dette feltet kan ikke være tomt</span>
                </div>
                <div>
                    <label for="password">Gjenta passord<span class="red"> *</span></label>
                    <input type="password" id="password" name="password" required>
                    <span class="error">Dette feltet kan ikke være tomt</span>
                </div>
            </div>

            <h3 class="padding-top">informasjon om ditt lokale</h3>

            <div class="flex">
                <div>
                    <label for="text">Hvilket type arrangement kan holdes der?<span class="red"> *</span></label>

                    <label class="padding-left" for="event1">Bedriftsarrangement
                        <input type="checkbox" id="event1" name="event1" value="bedriftsarrangement">
                        <span class="checkbox"></span>
                    </label>

                    <label class="padding-left" for="event2">Bryllup
                        <input type="checkbox" id="event2" name="event2" value="bryllup">
                        <span class="checkbox"></span>
                    </label>

                    <label class="padding-left" for="event3">Dåp / Navnedag / Konfirmasjon
                        <input type="checkbox" id="event3" name="event3" value="dåp / navnedag / konfirmasjon">
                        <span class="checkbox"></span>
                    </label>

                    <label class="padding-left" for="event4">Fest
                        <input type="checkbox" id="event4" name="event4" value="fest">
                        <span class="checkbox"></span>
                    </label>

                    <label class="padding-left" for="event5">Forestilling / Konsert
                        <input type="checkbox" id="event5" name="event5" value="forestilling / konsert">
                        <span class="checkbox"></span>
                    </label>

                    <label class="padding-left" for="event6">Julebord
                        <input type="checkbox" id="event6" name="event6" value="julebord">
                        <span class="checkbox"></span>
                    </label>

                    <label class="padding-left" for="event7">Kurs / Konferanse
                        <input type="checkbox" id="event7" name="event7" value="kurs / konferanse">
                        <span class="checkbox"></span>
                    </label>

                    <label class="padding-left" for="event8">Middag / Lunsj
                        <input type="checkbox" id="event8" name="event8" value="middag / lunsj">
                        <span class="checkbox"></span>
                    </label>

                    <label class="padding-left" for="event9">Møte
                        <input type="checkbox" id="event9" name="event9" value="møte">
                        <span class="checkbox"></span>
                    </label>

                    <label class="padding-left" for="event10">Utstilling
                        <input type="checkbox" id="event10" name="event10" value="utstilling">
                        <span class="checkbox"></span>
                    </label>
                    <span class="error">Vennligst velg minst en av valgene</span>
                </div>
            <span class="error">Vennligst velg minst en av valgene</span>

            <div>
                <label for="ameneties">Fasiliteter<span class="red"> *</span></label>

                <label class="padding-left" for="amenity1">Wifi
                    <input type="checkbox" id="amenity1" name="amenity1" value="wifi">
                    <span class="checkbox"></span>
                </label>

                <label class="padding-left" for="amenity2">Tilbyr alkohol
                    <input type="checkbox" id="amenity2" name="amenity2" value="tilbyr alkohol">
                    <span class="checkbox"></span>
                </label>

                <label class="padding-left" for="amenity3">Tilbyr matservering
                    <input type="checkbox" id="amenity3" name="amenity3" value="tilbyr matservering">
                    <span class="checkbox"></span>
                </label>

                <label class="padding-left" for="amenity4">Medbragt alkohol tillat
                    <input type="checkbox" id="amenity4" name="amenity4" value="medbragt alkohol tillat">
                    <span class="checkbox"></span>
                </label>

                <label class="padding-left" for="amenity5">Medbragt mat tillatt
                    <input type="checkbox" id="amenity5" name="amenity5" value="medbragt mat tillatt">
                    <span class="checkbox"></span>
                </label>

                <label class="padding-left" for="amenity6">Dansegulv
                    <input type="checkbox" id="amenity6" name="amenity6" value="dansegulv">
                    <span class="checkbox"></span>
                </label>

                <label class="padding-left" for="amenity7">Rullestolvennlig
                    <input type="checkbox" id="amenity7" name="amenity7" value="rullestolvennlig">
                    <span class="checkbox"></span>
                </label>

                <label class="padding-left" for="amenity8">Scene
                    <input type="checkbox" id="amenity8" name="amenity8" value="scene">
                    <span class="checkbox"></span>
                </label>

                <label class="padding-left" for="amenity9">Prosjektor / TV
                    <input type="checkbox" id="amenity9" name="amenity9" value="prosjektor / TV">
                    <span class="checkbox"></span>
                </label>

                <label class="padding-left" for="amenity10">Selvbetjent kjøkken
                    <input type="checkbox" id="amenity10" name="amenity10" value="selvbetjent kjøkken">
                    <span class="checkbox"></span>
                </label>
            </div>
        </div>
            <span class="error">Vennligst velg minst en av valgene</span>

            <div class="flex">
                <div>
                    <label for="sitting">Hvor mange sitteplasser har dere?</label>
                    <input type="text" id="sitting" name="sitting" required>
                    <span class="error">Dette feltet kan ikke være tomt</span>
                </div>
                <div>
                    <label for="standing">Hvor mange ståplasser har dere?</label>
                    <input type="text" id="standing" name="standing" required>
                    <span class="error">Dette feltet kan ikke være tomt</span>
                </div>
            </div>

            <label for="text">Hvilken pristype har dere?<span class="red"> *</span></label>
            <label class="padding-left" for="per-person">Per pers
                <input type="radio" id="per-person" name="per-person" value="per-person" checked>
                <span class="radio"></span>
            </label>
            <label class="padding-left" for="venue-hire">Lokalleie
            <input type="radio" id="venue-hire" name="venue-hire" value="venue-hire">
                <span class="radio"></span>
            </label>
            <label class="padding-left" for="minimum-price">Minimumspris
            <input type="radio" id="minimum-price" name="minimum-price" value="minimum-price">
                <span class="radio"></span>
            </label>

            <label class="padding-price" for="price">Fra pris<span class="red"> *</span></label>
            <input type="number" id="price" name="price" required>
            <span class="error">Vennligst fyll din fra pris</span>

            <label for="images" class="file-upload">Legg ved bilder fra lokale<span class="red"> *</span></label>
            <input type="file" id="images" name="images" required>
            <span class="error">Vennligst legg til minst ett bilde</span>

            <label for="description">Beskrivelse til kundene<span class="red"> *</span></label>
            <textarea name="description" id="description" cols="30" rows="10" required></textarea>
            <span class="error">Dette feltet kan ikke være tomt</span>

            <span class="small-text">Før du registrerer deg, er det viktig at du leser våre <a href="#">villkår.</a></span>
            
            <label class="padding-left" for="terms">Jeg har forstått deres villkår<span class="red"> *</span>
                <input type="checkbox" id="terms" name="terms" value="terms" required>
                <span class="checkbox"></span>
            </label>
            <span class="error">Du må godta villkårene før du kan registrere deg</span>


            <button class="btn--right" type="submit">registrer deg</button>


        </form>

        <Footer/>

    </div>
</template>


<script>
import Header from ' ../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'AddVenuePage',
     components: {
        Header,
        Footer
    }
}
</script>


<style lang="scss">
    
</style>