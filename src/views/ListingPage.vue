<template>
  <div>
    <my-header></my-header>
    <div class="grid-venue-listing">
      <div class="search-container">
        <form class="form-container">
          <div class="flex">
            <div>
              <label for="address">Område</label>
              <input
                type="text"
                id="address"
                name="address"
                v-model="searchParams.address"
              />
            </div>
            <div>
              <label for="number-guests">Antall gjester</label>
              <input
                type="number"
                id="number-guests"
                name="number-guests"
                v-model="searchParams.noOfPeople"
              />
            </div>
          </div>
          <div class="border-bottom"></div>

          <div class="flex">
            <div>
              <label for="text">Type arrangement</label>

              <label
                class="padding-left"
                v-for="item in allVenueTypes"
                :key="'venue_type_' + item.id"
                v-bind:for="'venue_type_' + item.id"
                >{{ item.name }}
                <input
                  type="checkbox"
                  :id="'venue_type_' + item.id"
                  :name="item.name"
                  :value="item.id"
                  v-model="searchParams.venueTypeIds"
                />
                <span class="checkbox"></span>
              </label>
            </div>

            <div>
              <label for="ameneties">Fasiliteter</label>

              <label
                class="padding-left"
                v-for="item in allFeatures"
                :key="'features_' + item.id"
                v-bind:for="'features_' + item.id"
                >{{ item.name }}
                <input
                  type="checkbox"
                  :id="'features_' + item.id"
                  :name="item.name"
                  :value="item.id"
                  v-model="searchParams.featureIds"
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
            v-model="searchParams.venuename"
          />
        </form>
      </div>
      <my-map></my-map>

      <div class="search-results">
        <span class="page-numbers">Fant {{ totalsResults }} resultat</span>

        <div class="cards">
          <card
            v-for="venue in venues"
            :key="venue.id"
            v-bind:venue="venue"
          ></card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import _ from "lodash";
import qs from "qs";
import Header from "../components/Header";
import Map from "../components/Map";
import Card from "../components/Card";

export default {
  name: "ListingPage",
  components: {
    "my-header": Header,
    "my-map": Map,
    card: Card,
  },
  data() {
    return {
      venues: [],
      isLoading: false,
      allVenueTypes: [],
      allFeatures: [],
      searchParams: {
        address: null,
        venueType: null,
        noOfPeople: null,
        venuename: null,
        features: [],
        types: [],
        featureIds: [],
        venueTypeIds: [],
      },
    };
  },
  async mounted() {
    const venueTypeResponse = await axios.get("/venue-types");
    this.allVenueTypes = venueTypeResponse.data;

    const featuresReponse = await axios.get("/features");
    this.allFeatures = featuresReponse.data;

    if (this.$route.query.address)
      this.searchParams.address = this.$route.query.address;
    if (this.$route.query.venueType)
      this.searchParams.venueType = this.$route.query.venueType;
    if (this.$route.query.noOfPeople)
      this.searchParams.noOfPeople = this.$route.query.noOfPeople;

    if(!Object.keys(this.$route.query).length)
      this.getVenues();

  },
  created() {
    this.debouncedGetVenues = _.debounce(this.getVenues, 500);
  },
  watch: {
    searchQs() {
      this.debouncedGetVenues();
    },
  },
  computed: {
    searchQs() {
      const queryObject = {
        _where: [],
      };

      if (
        this.searchParams.featureIds &&
        this.searchParams.featureIds.length > 0
      )
        queryObject._where.push(this.searchParams.featureIds.map(feature => ({ "features.id": feature })));

      if (
        this.searchParams.venueTypeIds &&
        this.searchParams.venueTypeIds.length > 0
      )
        queryObject._where.push(this.searchParams.venueTypeIds.map(venueType => ({ "venue_types.id": venueType })));

      if (this.searchParams.address)
        queryObject._where.push({
          address_contains: this.searchParams.address,
        });

      if (this.searchParams.venuename)
        queryObject._where.push({
          venuename_contains: this.searchParams.venuename,
        });

      if (this.searchParams.venueType)
        queryObject._where.push({
          venue_types_in: this.searchParams.venueType,
        });

      if (this.searchParams.noOfPeople)
        queryObject._where.push({
          _or: [
            { seating_gte: this.searchParams.noOfPeople },
            { standing_gte: this.searchParams.noOfPeople },
          ],
        });

      return qs.stringify(queryObject);
    },
    totalsResults() {
      return this.venues.length;
    },
  },
  methods: {
    async getVenues() {
      console.log("getting venues:", this.searchQs);

      let response = await axios.get(`/venues?${this.searchQs}`);
      this.venues = response.data;
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
