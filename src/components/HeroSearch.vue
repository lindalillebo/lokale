<template>
  <div>
    <section class="hero">
        <Header/>
            <div class="hero__text">
                <h1>finn lokale til ditt <br>&nbsp;&nbsp;&nbsp;arrangement!</h1>
                <div class="hero__search">
                    <form>
                        <input type="text" placeholder="område">
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
                        <input type="number" placeholder="antall personer">
                        <button id="btn--round" type="submit"><i class="fas fa-search"></i></button>
                    </form>
                </div>
            </div>
        </section>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
    name: 'HeroSearch',
    components: { 
        Header
    
    }
    
    
};

</script>




<style lang="scss">



</style>
