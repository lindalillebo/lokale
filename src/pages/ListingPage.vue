<template>
    <div>

        <Header/>

        <div class="grid-venue-listing">
            <div class="search-container">
                <form action="" class="form-container">

                    <div class="flex">
                        <div>
                            <label for="city-search">Område</label>
                            <input type="text" id="city-search" name="city-search">
                        </div>
                        <div>
                            <label for="number-guests">Antall gjester</label>
                            <input type="number" id="number-guests" name="number-guests">
                        </div>
                    </div>
                    <div class="border-bottom"></div>

                    <div class="flex">
                        <div>
                            <label for="text">Type arrangement</label>

                            <label class="padding-left" for="event1">Bedriftsarrangement
                                <input type="checkbox" name="event1" value="bedriftsarrangement">
                                <span class="checkbox"></span>
                            </label>

                            <label class="padding-left" for="event2">Bryllup
                                <input type="checkbox" name="event2" value="bryllup">
                                <span class="checkbox"></span>
                            </label>

                            <label class="padding-left" for="event3">Dåp / Navnedag / Konfirmasjon
                                <input type="checkbox" name="event3" value="dåp / navnedag / konfirmasjon">
                                <span class="checkbox"></span>
                            </label>

                            <label class="padding-left" for="event4">Fest
                                <input type="checkbox" name="event4" value="fest">
                                <span class="checkbox"></span>
                            </label>

                            <label class="padding-left" for="event5">Forestilling / Konsert
                                <input type="checkbox" name="event5" value="forestilling / konsert">
                                <span class="checkbox"></span>
                            </label>

                            <label class="padding-left" for="event6">Julebord
                                <input type="checkbox" name="event6" value="julebord">
                                <span class="checkbox"></span>
                            </label>

                            <label class="padding-left" for="event7">Kurs / Konferanse
                                <input type="checkbox" name="event7" value="kurs / konferanse">
                                <span class="checkbox"></span>
                            </label>

                            <label class="padding-left" for="event8">Middag / Lunsj
                                <input type="checkbox" name="event8" value="middag / lunsj">
                                <span class="checkbox"></span>
                            </label>

                            <label class="padding-left" for="event9">Møte
                                <input type="checkbox" name="event9" value="møte">
                                <span class="checkbox"></span>
                            </label>

                            <label class="padding-left" for="event10">Utstilling
                                <input type="checkbox" name="event10" value="utstilling">
                                <span class="checkbox"></span>
                            </label>
                        </div>

                        <div>
                            <label for="ameneties">Fasiliteter</label>

                            <label class="padding-left" for="amenity1">Wifi
                                <input type="checkbox" name="amenity1" value="wifi">
                                <span class="checkbox"></span>
                            </label>

                            <label class="padding-left" for="amenity2">Tilbyr alkohol
                                <input type="checkbox" name="amenity2" value="tilbyr alkohol">
                                <span class="checkbox"></span>
                            </label>

                            <label class="padding-left" for="amenity3">Tilbyr matservering
                                <input type="checkbox" name="amenity3" value="tilbyr matservering">
                                <span class="checkbox"></span>
                            </label>

                            <label class="padding-left" for="amenity4">Medbragt alkohol tillat
                                <input type="checkbox" name="amenity4" value="medbragt alkohol tillat">
                                <span class="checkbox"></span>
                            </label>

                            <label class="padding-left" for="amenity5">Medbragt mat tillatt
                                <input type="checkbox" name="amenity5" value="medbragt mat tillatt">
                                <span class="checkbox"></span>
                            </label>

                            <label class="padding-left" for="amenity6">Dansegulv
                                <input type="checkbox" name="amenity6" value="dansegulv">
                                <span class="checkbox"></span>
                            </label>

                            <label class="padding-left" for="amenity7">Rullestolvennlig
                                <input type="checkbox" name="amenity7" value="rullestolvennlig">
                                <span class="checkbox"></span>
                            </label>

                            <label class="padding-left" for="amenity8">Scene
                                <input type="checkbox" name="amenity8" value="scene">
                                <span class="checkbox"></span>
                            </label>

                            <label class="padding-left" for="amenity9">Prosjektor / TV
                                <input type="checkbox" name="amenity9" value="prosjektor / TV">
                                <span class="checkbox"></span>
                            </label>

                            <label class="padding-left" for="amenity10">Selvbetjent kjøkken
                                <input type="checkbox" name="amenity10" value="selvbetjent kjøkken">
                                <span class="checkbox"></span>
                            </label>
                        </div>

                    </div>
                    <div class="border-bottom"></div>

                    <label for="text">Sitteplasser</label>

                    <label class="padding-left" for="sitting">Sittende
                        <input type="radio" name="sitting" value="sitting">
                        <span class="radio"></span>
                    </label>

                    <label class="padding-left" for="standing">Stående
                        <input type="radio" name="standing" value="standing">
                        <span class="radio"></span>
                    </label>

                    <div class="border-bottom"></div>

                    <label for="venue-name">Navn på lokale</label>
                    <input type="text" id="venue-name" name="venue-name">

                </form>
            </div>
            <Map/>

            <div class="search-results">

                <span class="page-numbers">Viser.... av ... lokaler</span>

                <div class="cards">
                    <div class="card">
                        <div class="slider">
                            <img class="slider__img" src="../assets/pexels-pixabay-221537.jpg" style="width:100%">
                            <span class="slider__arrow-left" onclick="plusDivs(-1)">&#10094;</span>
                            <span class="slider__arrow-right" onclick="plusDivs(1)">&#10095;</span>
                        </div>
                        <div class="card__description">
                            <div class="card--horizontal">
                                <span class="card__venue-name">Hatlane kontor</span>
                                <span class="card__accessible-icon"><i class="fab fa-accessible-icon"></i></span>
                            </div>
                            <div class="card--horizontal">
                                <p><b>Fra <span class="card__venue-price">1100</span>kr</b> per time</p>
                                <div class="card__seating">
                                    <div><i class="fas fa-chair"></i><span class="card__seating-number">10</span>
                                    </div>
                                    <div><i class="fas fa-male"></i><span class="card__standing-number">-</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="slider">
                            <img class="slider__img" src="../assets/pexels-pixabay-221537.jpg" style="width:100%">
                            <span class="slider__arrow-left" onclick="plusDivs(-1)">&#10094;</span>
                            <span class="slider__arrow-right" onclick="plusDivs(1)">&#10095;</span>
                        </div>
                        <div class="card__description">
                            <div class="card--horizontal">
                                <span class="card__venue-name">Hatlane kontor</span>
                                <span class="card__accessible-icon"><i class="fab fa-accessible-icon"></i></span>
                            </div>
                            <div class="card--horizontal">
                                <p><b>Fra <span class="card__venue-price">1100</span>kr</b> per time</p>
                                <div class="card__seating">
                                    <div><i class="fas fa-chair"></i><span class="card__seating-number">10</span>
                                    </div>
                                    <div><i class="fas fa-male"></i><span class="card__standing-number">-</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="slider">
                            <img class="slider__img" src="../assets/pexels-pixabay-221537.jpg" style="width:100%">
                            <span class="slider__arrow-left" onclick="plusDivs(-1)">&#10094;</span>
                            <span class="slider__arrow-right" onclick="plusDivs(1)">&#10095;</span>
                        </div>
                        <div class="card__description">
                            <div class="card--horizontal">
                                <span class="card__venue-name">Hatlane kontor</span>
                                <span class="card__accessible-icon"><i class="fab fa-accessible-icon"></i></span>
                            </div>
                            <div class="card--horizontal">
                                <p><b>Fra <span class="card__venue-price">1100</span>kr</b> per time</p>
                                <div class="card__seating">
                                    <div><i class="fas fa-chair"></i><span class="card__seating-number">10</span>
                                    </div>
                                    <div><i class="fas fa-male"></i><span class="card__standing-number">-</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pagination">
                    <a href="#"><i class="fas fa-angle-double-left"></i></a>
                    <a class="active" href="#">1</a>
                    <a href="#">2</a>
                    <a href="#"><i class="fas fa-angle-double-right"></i></a>
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
    name: 'ListingPage',
     components: {
        Header,
        Footer,
        Map
    }
}
</script>


<style lang="scss">
    
</style>