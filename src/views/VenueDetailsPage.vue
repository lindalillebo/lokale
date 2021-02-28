<template>
  <div>
    <my-header></my-header>

    <div class="reverse">
      <div class="detailed-venue__header">
        <ul class="breadcrumb">
          <li>
            <router-link to="/">Home</router-link>&nbsp;&nbsp;&nbsp;
            <i class="fas fa-caret-right"></i>
          </li>
          <li>
            <router-link to="/listing">Alle resultater</router-link
            >&nbsp;&nbsp;&nbsp;
            <i class="fas fa-caret-right"></i>
          </li>
          <li>{{ venue.venuename }}</li>
        </ul>

        <div>
          <div class="detailed-venue__heading">
            <h3 class="venue-name">{{ venue.venuename }}</h3>
            <div class="horizontal">
              <p>
                <b
                  >Fra
                  <span class="card__venue-price">{{ venue.fromprice }}</span
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
                  ><span class="venue__seating-number">{{
                    venue.seating
                  }}</span>
                </div>
                <div>
                  <i class="fas fa-male"></i
                  ><span class="venue__standing-number">{{
                    venue.standing
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slider">
        <div v-for="i in [currentNumber]" :key="i">
          <img
            class="slider__img"
            v-bind:src="currentImg | imageFilter"
            v-bind:alt="currentImg | imageDescription"
            style="width:100%"
          />
        </div>
        <span class="slider__arrow-left" @click="prev">&#10094;</span>
        <span class="slider__arrow-right" @click="next">&#10095;</span>
      </div>
    </div>

    <div class="grid detailed-venue__grid">
      <div class="detailed-venue">
        <h4>
          Om <span class="venue-name">{{ venue.venuename }}</span>
        </h4>
        <p class="detailed-venue__description">
          Hatlane kontor er et lokalt kontor midt på Gåseid. Vi har 10
          sitteplasser, og mye teknologi du vil trenge for ditt møte. Hit kan du
          ta med egen mat og drikke og vi vasker selvfølgelig etter deg.
        </p>

        <div class="border-bottom"></div>

        <div class="flex">
          <div>
            <h4>Type arrangement</h4>
            <div v-for="item in allVenueTypes" v-bind:key="'types' + item.id">
              <p
                class="detailed-venue__features"
                v-bind:class="[{ isActive: hasType(item) }]"
              >
                {{ item.name }}
              </p>
            </div>
          </div>
          <div>
            <h4>Fasiliteter</h4>
            <div v-for="item in allFeatures" v-bind:key="'features' + item.id">
              <p
                class="detailed-venue__features"
                v-bind:class="[{ isActive: hasFeature(item) }]"
              >
                {{ item.name }}
              </p>
            </div>
          </div>
        </div>

        <div class="border-bottom"></div>

        <p>
          Har du spørsmål om vårt lokale, send oss en forespørsel med dine
          spørsmål. Det er gratis og helt uten forpliktelser.
        </p>
      </div>

      <div class="sidebar">
        <router-link to="/enquire"
          ><button class="btn--large">send forespørsel</button></router-link
        >
        <my-map></my-map>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Map from "../components/Map";
import axios from "axios";

export default {
  name: "VenueDetailsPage",
  components: {
    "my-header": Header,
    "my-map": Map,
  },
  data() {
    return {
      id: this.$route.params.id,
      venue: {
        venuename: "",
        fromprice: "",
        seating: "",
        standing: "",
        gallery: [],
        features: [],
        venue_types: [],
      },
      allFeatures: [],
      allVenueTypes: [],
      currentNumber: 0,
    };
  },
  computed: {
    currentImg() {
      return this.venue.gallery[
        Math.abs(this.currentNumber) % this.venue.gallery.length
      ];
    },
  },
  filters: {
    imageFilter(value) {
      return `${process.env.VUE_APP_STRAPI_URL}${value?.formats?.large?.url}`;
    },
    imageDescription(value) {
      return `${value?.name}`;
    },
  },
  async mounted() {
    const response = await axios.get(`/venues/${this.$route.params.id}`);
    this.venue = response.data;

    const venueTypeResponse =  await axios.get("/venue-types");
    this.allVenueTypes = venueTypeResponse.data;

    const featuresReponse = await axios.get("/features");
    this.allFeatures = featuresReponse.data;
  },
  methods: {
    next: function() {
      this.currentNumber += 1;
    },
    prev: function() {
      this.currentNumber -= 1;
    },
    hasType(type) {
      return this.venue.venue_types.some((item) => item.id === type.id);
    },
    hasFeature(feature) {
      return this.venue.features.some((item) => item.id === feature.id);
    },
  },
};
</script>

<style lang="scss">
.detailed-venue,
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

.detailed-venue__features {
  padding-left: 18px;
  color: #bbb;
  text-decoration: line-through;
}

.isActive {
  color: $dark;
  text-decoration: none;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 7px;
    height: 12px;
    border: solid $golden;
    border-width: 0 2px 2px 0;
    transform: rotate(40deg);
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

.slider {
  position: relative;
  .slider__arrow-right,
  .slider__arrow-left {
    color: $light;
    position: absolute;
    font-size: 2.5em;
    z-index: 100;
    top: 50%;
    transform: translate(0, -50%);
    padding: 15px;
    cursor: pointer;
  }
  .slider__arrow-right {
    right: 0;
  }
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

  .detailed-venue__heading {
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

  .reverse {
    display: flex;
    flex-direction: column-reverse;
  }

  .detailed-venue__header {
    max-width: 1200px;
    min-width: 1020px;
    margin: 0 auto;
    h3 {
      text-align: start;
      padding-left: 38px;
    }
  }

  .detailed-venue__heading {
    margin-left: 10px;
    text-align: left;
    .horizontal {
      justify-content: start;
      width: 100%;
      margin-left: 40px;
      .venue__icons {
        padding-left: 30px;
      }
    }
  }

  .slider {
    max-width: 1200px;
    margin: 0 auto;
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
    .detailed-venue {
      grid-area: "main";
    }
    .sidebar {
      grid-area: "sidebar";
      .btn--large {
        width: 80%;
      }
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

  .detailed-venue__grid {
    max-width: 1000px;
  }
}
</style>
