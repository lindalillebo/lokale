<template>
    <div>
        
        <Header/>

        <ul class="breadcrumb">
            <li><a href="index.html">Home</a>&nbsp;&nbsp;&nbsp; <i class="fas fa-caret-right"></i></li>
            <li><a href="venue-listing.html">Searches</a>&nbsp;&nbsp;&nbsp; <i class="fas fa-caret-right"></i></li>
            <li><a href="#">.....</a></li>
        </ul>

        <div class="venue__description">
            <div class="venue-description__heading">
                <h3 class="venue-name">hatlane kontor</h3>
                <div class="horizontal">
                    <p><b>Fra <span class="card__venue-price">1100</span>kr</b> per time</p>
                    <div class="venue__icons">
                        <span class="venue__accessible-icon"><i class="fab fa-accessible-icon"></i></span>
                        <div><i class="fas fa-chair"></i><span class="venue__seating-number">10</span>
                        </div>
                        <div><i class="fas fa-male"></i><span class="venue__standing-number">-</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slider">
                <img class="slider__img" src="../assets/pexels-pixabay-221537.jpg" style="width:100%">

                <span class="slider__arrow-left" onclick="plusDivs(-1)">&#10094;</span>
                <span class="slider__arrow-right" onclick="plusDivs(1)">&#10095;</span>
            </div>

            <div class="grid grid-venue-spesific">
                <div class="venue-spesific">

                    <h4>Om <span class="venue-name">Hatlane kontor</span></h4>
                    <p class="venue-spesific__description">Hatlane kontor er et lokalt kontor midt på Gåseid.
                        Vi har 10 sitteplasser, og mye teknologi du vil
                        trenge for ditt møte. Hit kan du ta med egen
                        mat og drikke og vi vasker selvfølgelig etter deg.</p>

                    <div class="border-bottom"></div>

                    <div class="flex">
                        <div>
                            <h4>Type arrangement</h4>
                            <p class="venue-spesific__event-type">Bedriftsarrangement</p>
                            <p class="venue-spesific__event-type">Bryllup</p>
                            <p class="venue-spesific__event-type">Dåp / Navnedag / Konfirmasjon</p>
                            <p class="venue-spesific__event-type">Fest</p>
                            <p class="venue-spesific__event-type">Forestilling / Konsert</p>
                            <p class="venue-spesific__event-type">Julebord</p>
                            <p class="venue-spesific__event-type">Konferanse</p>
                            <p class="venue-spesific__event-type">Middag / Lunsj</p>
                            <p class="venue-spesific__event-type">Møte</p>
                            <p class="venue-spesific__event-type">Utstilling</p>
                        </div>
                        <div>
                            <h4>Fasiliteter</h4>
                            <p class="venue-spesific__amenities">Wifi</p>
                            <p class="venue-spesific__amenities">Tilbyr alkohol</p>
                            <p class="venue-spesific__amenities">Tilbyr matservering</p>
                            <p class="venue-spesific__amenities">Medbragt alkohol tillat</p>
                            <p class="venue-spesific__amenities">Medbragt mat tillat</p>
                            <p class="venue-spesific__amenities">Dansegulv</p>
                            <p class="venue-spesific__amenities">Rollestolvennlig</p>
                            <p class="venue-spesific__amenities">Scene</p>
                            <p class="venue-spesific__amenities">Prosjektor / TV</p>
                            <p class="venue-spesific__amenities">Selvbetjent kjøkken</p>
                        </div>
                    </div>

                    <div class="border-bottom"></div>

                    <p>Har du spørsmål om vårt lokale, send oss en forespørsel med dine spørsmål. Det er gratis og helt uten
                        forpliktelser.</p>

                </div>

                <div class="sidebar">
                    <a href="enquire-venue.html"><button class="btn--large">send forespørsel</button></a>
                    <Map/>
                </div>

            </div>

        </div>

        <Footer/>

    </div>
</template>


<script>
import Header from '..Header.vue'
import Footer from '../components/Footer'
import Map from '../components/Map'

export default {
    name: 'VenueDetailsPage',
    components: {
        Header,
        Footer,
        Map
    }
}



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slider__img");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}



</script>


<style lang="scss">
    
</style>