<template>
    <div>
        <my-header></my-header>
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
            <my-map></my-map>

            <div class="search-results">

              <span class="page-numbers">Viser.... av ... lokaler</span>

                <div class="cards">
                  <router-link to="/venue-details">
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
                  </router-link>
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
            </div>

              <div class="pagination">
                    <a href="#"><i class="fas fa-angle-double-left"></i></a>
                    <a class="active" href="#">1</a>
                    <a href="#">2</a>
                    <a href="#"><i class="fas fa-angle-double-right"></i></a>
              </div>
        </div>
    </div>
</template>


<script>
import Header from '../components/Header'
import Map from '../components/Map'

export default {
    name: 'ListingPage',
     components: {
        'my-header': Header,
        'my-map': Map
    }
}
</script>


<style lang="scss">
    

.search-container {
  width: 100%;
  margin-top: 20px;
  .form-container {
    box-shadow: none;
    background-color: $beige;
    margin-bottom: 10px;
  }
}

.search-results {
  background-color: $light;
  margin-bottom: -100px;
  padding-top: 20px;
  .card {
    width: 90%;
    display: block;
    margin: 60px auto;
    display: flex;
    flex-direction: column;
    .card__description {
      display: flex;
      flex-direction: column;
    }
    .card--horizontal {
      display: flex;
      justify-content: space-between;
      margin: 10px 0 5px;
      p {
        margin: 0;
      }
      .card__seating {
        display: flex;
        flex-direction: row;
        i {
          padding: 0 7px;
        }
      }
    }
  }
  .page-numbers {
    font-weight: 500;
    font-size: 0.8em;
    margin-left: 20px;
  }
  .pagination {
    font-weight: 700;
    text-align: center;
    padding-bottom: 30px;
    a {
        padding: 0 5px;
    }
  }
}

.border-bottom {
  border-bottom: 1px solid lighten($brown, 50%);
  margin: 25px;
}

.horizontal {
  display: flex;
  justify-content: space-between;
  margin: 10px auto 30px;
  width: 80%;
  p {
    margin: 0;
  }
  .venue__icons {
    display: flex;
    flex-direction: row;
    i {
      padding: 0 7px;
    }
  }
}


// Tablet
@media (min-width: 600px) and (max-width: 1020px) {

  .search-container {
    .padding-left {
      margin: 10px 0 10px 18px;
    }
  }

  .search-results {
    margin-bottom: -120px;
    .cards {
      display: flex;
      flex-wrap: wrap;
      .card {
        width: 30%;
      }
    }
  }

  .flex {
    display: flex;
    div {
      flex-grow: 2;
    }
  }

}


// Desktop
@media (min-width: 1020px) {

  .search-container {
    .padding-left {
      margin: 10px 0 10px 18px;
    }
  }

  .form-container__log-in {
    width: 400px;
  }

  .form-container__contact {
    width: 500px;
    h4 {
      font-size: 0.9em;
    }
  }

  .search-results {
    margin-bottom: -150px;
    .cards {
      display: flex;
      flex-wrap: wrap;
      .card {
        width: 30%;
      }
    }
  }

  .flex {
    display: flex;
    margin-bottom: 20px;
    div {
      flex-grow: 2;
      input {
        margin-bottom: 0;
        margin-right: 0;
      }
      
    }
  }

}




</style>