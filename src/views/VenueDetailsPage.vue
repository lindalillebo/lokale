<template>
  <div>
    <my-header></my-header>

    <ul class="breadcrumb">
      <li>
        <router-link to="/">Home</router-link>&nbsp;&nbsp;&nbsp;
        <i class="fas fa-caret-right"></i>
      </li>
      <li>
        <router-link to="router.back()">Searches</router-link>&nbsp;&nbsp;&nbsp;
        <i class="fas fa-caret-right"></i>
      </li>
      <li>{{ venue.venuename }}</li>
    </ul>

    <div class="venue__description">
      <div class="venue-description__heading">
        <h3 class="venue-name">{{ venue.venuename }}</h3>
        <div class="horizontal">
          <p>
            <b
              >Fra <span class="card__venue-price">{{ venue.fromprice }}</span
              >kr</b
            >
            per time
          </p>
          <div class="venue__icons">
            <span class="venue__accessible-icon"
              ><i class="fab fa-accessible-icon"></i
            ></span>
            <div>
              <i class="fas fa-chair"></i
              ><span class="venue__seating-number">{{ venue.seating }}</span>
            </div>
            <div>
              <i class="fas fa-male"></i
              ><span class="venue__standing-number">{{ venue.standing }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="slider">
        <div v-for="i in [currentNumber]" :key="i">
          <img
            class="slider__img"
            v-bind:src="currentImg"
            alt=""
            style="width:100%"
          />
        </div>
        <span class="slider__arrow-left" @click="prev">&#10094;</span>
        <span class="slider__arrow-right" @click="next">&#10095;</span>
      </div>

      <div class="grid grid-venue-spesific">
        <div class="venue-spesific">
          <h4>
            Om <span class="venue-name">{{ venue.venuename }}</span>
          </h4>
          <p class="venue-spesific__description">
            Hatlane kontor er et lokalt kontor midt på Gåseid. Vi har 10
            sitteplasser, og mye teknologi du vil trenge for ditt møte. Hit kan
            du ta med egen mat og drikke og vi vasker selvfølgelig etter deg.
          </p>

          <div class="border-bottom"></div>

          <div class="flex">
            <div>
              <h4>Type arrangement</h4>
              <p class="venue-spesific__event-type">Bedriftsarrangement</p>
              <p class="venue-spesific__event-type">Bryllup</p>
              <p class="venue-spesific__event-type">
                Dåp / Navnedag / Konfirmasjon
              </p>
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

          <p>
            Har du spørsmål om vårt lokale, send oss en forespørsel med dine
            spørsmål. Det er gratis og helt uten forpliktelser.
          </p>
        </div>

        <div class="sidebar">
          <router-link to="'/enquire-venue/' + venue.id"><button class="btn--large">send forespørsel</button></router-link>
          <my-map></my-map>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "../components/Header";
import Map from "../components/Map";

export default {
  name: "VenueDetailsPage",
  components: {
    "my-header": Header,
    "my-map": Map,
  },
  methods: {
    data() {
      return {
        venues: [],
        id: this.$route.params.id,
        currentNumber: 0
      };
    },
    mounted() {
      axios
        .get("http://localhost:1337/venues?id_eq=" + this.$route.params.id)
        .then((response) => {
          this.venues = response.data;
          console.log(response);
        });
      },
      filters: {
        imageFilter(value) {
          return `${process.env.VUE_APP_STRAPI_URL}${value?.gallery[0]?.formats?.large?.url}`;
        },
      },
      next: function() {
          this.currentNumber += 1
          },
      prev: function() {
          this.currentNumber -= 1
      }
    },
    computed: {
      currentImg: function() {
        return this.images[Math.abs(this.currentNumber) % this.images.length];
      }
  }
};
</script>

<style lang="scss">
.venue-spesific,
.sidebar {
  width: 90%;
  display: block;
  margin: 0 auto;
  h4 {
    margin-top: 40px;
  }
  p {
    font-weight: 500;
    font-size: 0.9em;
  }
  .border-bottom {
    width: 100%;
    margin: 35px 0;
  }
}

.breadcrumb {
  display: flex;
  font-size: 0.8em;
  margin: 30px 0 35px 50px;
  li {
    padding-right: 10px;
  }
}

.slider__arrow-right,
.slider__arrow-left {
  color: $light;
  display: none;
}

// Tablet
@media (min-width: 600px) and (max-width: 1020px) {
  .sidebar {
    button {
      display: block;
      margin: 60px auto 0;
      width: 300px;
    }
  }

  .venue-description__heading {
    float: left;
    margin-left: 10px;
    .horizontal {
      justify-content: start;
      width: 100%;
      margin-left: 40px;
      .venue__icons {
        padding-left: 30px;
      }
    }
  }
}

// Desktop
@media (min-width: 1020px) {
  .venue-description__heading {
    float: left;
    margin-left: 10px;
    .horizontal {
      justify-content: start;
      width: 100%;
      margin-left: 40px;
      .venue__icons {
        padding-left: 30px;
      }
    }
  }

  .sidebar {
    margin-left: 50px;
  }

  .grid {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "main sidebar"
      "results sidebar";
    .venue-spesific {
      grid-area: "main";
    }
    .sidebar {
      grid-area: "sidebar";
    }
    .search-container {
      grid-area: "main";
    }
    .search-results {
      grid-area: "results";
    }
    #map {
      grid-area: "sidebar";
    }
  }

  .grid-venue-spesific {
    max-width: 1000px;
  }
}
</style>
