<template>
  <div>
    <my-header></my-header>
    <div class="grid-venue-listing">
      <div class="search-container">
        <form class="form-container">
          <div class="flex">
            <div>
              <label for="city-search">Område</label>
              <input
                type="text"
                ref="autocomplete"
                id="city-search"
                name="city-search"
                v-model="venues.city"
              />
            </div>
            <div>
              <label for="number-guests">Antall gjester</label>
              <input
                type="number"
                id="number-guests"
                name="number-guests"
                v-model="venues.number"
              />
            </div>
          </div>
          <div class="border-bottom"></div>

          <div class="flex">
            <div>
              <label for="text">Type arrangement</label>

              <label class="padding-left" for="event1"
                >Bedriftsarrangement
                <input
                  type="checkbox"
                  id="event1"
                  name="event1"
                  value="bedriftsarrangement"
                  v-model="venues.checkedEvent"
                />
                <span class="checkbox"></span>
              </label>

              <label class="padding-left" for="event2"
                >Bryllup
                <input
                  type="checkbox"
                  id="event2"
                  name="event2"
                  value="bryllup"
                  v-model="venues.checkedEvent"
                />
                <span class="checkbox"></span>
              </label>

              <label class="padding-left" for="event3"
                >Dåp / Navnedag / Konfirmasjon
                <input
                  type="checkbox"
                  id="event3"
                  name="event3"
                  value="dåp / navnedag / konfirmasjon"
                  v-model="venues.checkedEvent"
                />
                <span class="checkbox"></span>
              </label>

              <label class="padding-left" for="event4"
                >Fest
                <input
                  type="checkbox"
                  id="event4"
                  name="event4"
                  value="fest"
                  v-model="venues.checkedEvent"
                />
                <span class="checkbox"></span>
              </label>

              <label class="padding-left" for="event5"
                >Forestilling / Konsert
                <input
                  type="checkbox"
                  id="event5"
                  name="event5"
                  value="forestilling / konsert"
                  v-model="venues.checkedEvent"
                />
                <span class="checkbox"></span>
              </label>

              <label class="padding-left" for="event6"
                >Julebord
                <input
                  type="checkbox"
                  id="event6"
                  name="event6"
                  value="julebord"
                  v-model="venues.checkedEvent"
                />
                <span class="checkbox"></span>
              </label>

              <label class="padding-left" for="event7"
                >Kurs / Konferanse
                <input
                  type="checkbox"
                  id="event7"
                  name="event7"
                  value="kurs / konferanse"
                  v-model="venues.checkedEvent"
                />
                <span class="checkbox"></span>
              </label>

              <label class="padding-left" for="event8"
                >Middag / Lunsj
                <input
                  type="checkbox"
                  id="event8"
                  name="event8"
                  value="middag / lunsj"
                  v-model="venues.checkedEvent"
                />
                <span class="checkbox"></span>
              </label>

              <label class="padding-left" for="event9"
                >Møte
                <input
                  type="checkbox"
                  id="event9"
                  name="event9"
                  value="møte"
                  v-model="venues.checkedEvent"
                />
                <span class="checkbox"></span>
              </label>

              <label class="padding-left" for="event10"
                >Utstilling
                <input
                  type="checkbox"
                  id="event10"
                  name="event10"
                  value="utstilling"
                  v-model="venues.checkedEvent"
                />
                <span class="checkbox"></span>
              </label>
            </div>

            <div>
              <label for="ameneties">Fasiliteter</label>

              <label class="padding-left" for="amenity1"
                >Wifi
                <input
                  type="checkbox"
                  id="amenity1"
                  name="amenity1"
                  value="wifi"
                  v-model="venues.checkedAmenity"
                />
                <span class="checkbox"></span>
              </label>

              <label class="padding-left" for="amenity2"
                >Tilbyr alkohol
                <input
                  type="checkbox"
                  id="amenity2"
                  name="amenity2"
                  value="tilbyr alkohol"
                  v-model="venues.checkedAmenity"
                />
                <span class="checkbox"></span>
              </label>

              <label class="padding-left" for="amenity3"
                >Tilbyr matservering
                <input
                  type="checkbox"
                  id="amenity3"
                  name="amenity3"
                  value="tilbyr matservering"
                  v-model="venues.checkedAmenity"
                />
                <span class="checkbox"></span>
              </label>

              <label class="padding-left" for="amenity4"
                >Medbragt alkohol tillat
                <input
                  type="checkbox"
                  id="amenity4"
                  name="amenity4"
                  value="medbragt alkohol tillat"
                  v-model="venues.checkedAmenity"
                />
                <span class="checkbox"></span>
              </label>

              <label class="padding-left" for="amenity5"
                >Medbragt mat tillatt
                <input
                  type="checkbox"
                  id="amenity5"
                  name="amenity5"
                  value="medbragt mat tillatt"
                  v-model="venues.checkedAmenity"
                />
                <span class="checkbox"></span>
              </label>

              <label class="padding-left" for="amenity6"
                >Dansegulv
                <input
                  type="checkbox"
                  id="amenity6"
                  name="amenity6"
                  value="dansegulv"
                  v-model="venues.checkedAmenity"
                />
                <span class="checkbox"></span>
              </label>

              <label class="padding-left" for="amenity7"
                >Rullestolvennlig
                <input
                  type="checkbox"
                  id="amenity7"
                  name="amenity7"
                  value="rullestolvennlig"
                  v-model="venues.checkedAmenity"
                />
                <span class="checkbox"></span>
              </label>

              <label class="padding-left" for="amenity8"
                >Scene
                <input
                  type="checkbox"
                  id="amenity8"
                  name="amenity8"
                  value="scene"
                  v-model="venues.checkedAmenity"
                />
                <span class="checkbox"></span>
              </label>

              <label class="padding-left" for="amenity9"
                >Prosjektor / TV
                <input
                  type="checkbox"
                  id="amenity9"
                  name="amenity9"
                  value="prosjektor / TV"
                  v-model="venues.checkedAmenity"
                />
                <span class="checkbox"></span>
              </label>

              <label class="padding-left" for="amenity10"
                >Selvbetjent kjøkken
                <input
                  type="checkbox"
                  id="amenity10"
                  name="amenity10"
                  value="selvbetjent kjøkken"
                  v-model="venues.checkedAmenity"
                />
                <span class="checkbox"></span>
              </label>
            </div>
          </div>
          <div class="border-bottom"></div>

          <label for="venue-name">Navn på lokale</label>
          <input
            type="text"
            id="venue-name"
            name="venue-name"
            v-model="venues.venuename"
          />
        </form>
      </div>
      <my-map></my-map>

      <div class="search-results">
        <span class="page-numbers">Fant {{ totalsResults }} resultat</span>

        <div class="cards">
          <card v-for="venue in venues" :key="venue.id" v-bind:venue="venue"></card>
        </div>
      </div>

      <!-- <div class="pagination">
        <a href="#"><i class="fas fa-angle-double-left"></i></a>
        <a class="active" href="#">1</a>
        <a href="#">2</a>
        <a href="#"><i class="fas fa-angle-double-right"></i></a>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from "../components/Header";
import Map from "../components/Map";
import Card from "../components/Card";

export default {
  name: "ListingPage",
  components: {
    "my-header": Header,
    "my-map": Map,
    "card": Card,
  },
  data() {
    return {
      venues: [],
      query: this.$route.query
    };
  },
  async mounted() {
    
  },
  ...mapActions(['GetVenues']),
  computed: {
    totalsResults() {
      return this.venues.length;
    },
    filteredVenues() {
      return this.venues.filter(() => true);
    },
  },
  filters: {
    imageFilter(value) {
      return `${process.env.VUE_APP_STRAPI_URL}${value?.gallery[0]?.formats?.small?.url}`;
    },
  },
  methods: {
    hasFeature(feature) {
      return this.venues.features.some((item) => item.id === feature.id);
    },
  },
};
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
      margin: 10px 0 0 18px;
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
    width: 97%;
    margin: 0 auto;
    div {
      flex-grow: 2;
      width: 80%;
    }
  }
}

// Desktop
@media (min-width: 1020px) {
  .search-container {
    .padding-left {
      margin: 10px 0 0 18px;
    }
    input {
      margin-bottom: 10px;
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

  .grid-venue-listing {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-rows: auto;
    grid-template-areas:
      "main sidebar"
      "results sidebar";
    .search-container {
      grid-area: "main";
      .form-container {
        width: 100%;
      }
    }
    .search-results {
      grid-area: "results";
    }
    #map {
      grid-area: "sidebar";
      height: 80vh;
      position: sticky;
    }
  }

  .flex {
    display: flex;
    width: 97.5%;
    margin: 0 auto;
    div {
      flex-grow: 2;
      width: 100%;
    }
  }
}
</style>
