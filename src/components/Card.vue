<template>
  <router-link :to="'/details/' + venue.id">
    <div>
      <div class="card">
        <div>
          <img
            class="card__img"
            v-bind:src="venue | imageFilter"
            style="width:100%"
          />
        </div>
        <div class="card__description">
          <div class="card--horizontal">
            <span class="card__venue-name">{{ venue.venuename }}</span>
            <span
              v-bind:class="[{ showIcon: isAccessible() }]"
              class="card__accessible-icon"
              ><i class="fab fa-accessible-icon"></i>
            </span>
          </div>
          <div class="card--horizontal">
            <p>
              <b
                >Fra <span class="card__venue-price">{{ venue.fromprice }}</span
                >kr</b
              >
              {{ pricingName }}
            </p>
            <div class="card__seating">
              <div>
                <i class="fas fa-chair"></i
                ><span class="card__seating-number">{{ venue.seating }}</span>
              </div>
              <div>
                <i class="fas fa-male"></i
                ><span class="card__standing-number">{{ venue.standing }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Card",
  props: ["venue"],
  data() {
    return {};
  },
  computed: {
    pricingName() {
      if (this.venue.pricing === "perperson") return "per pers";
      if (this.venue.pricing === "venuehire") return "lokalleie";
      if (this.venue.pricing === "minimumspend") return "minimumspris";
      return "";
    },
  },
  async created() {},
  filters: {
    imageFilter(value) {
      return `${process.env.VUE_APP_STRAPI_URL}${value?.gallery[0]?.formats?.small?.url}`;
    },
  },
  methods: {
    isAccessible() {
      return this.venue.features.some((item) => item.id === 7);
    },
  },
};
</script>

<style lang="scss">
.search-results {
  background-color: $light;
  margin-bottom: -100px;
  padding-top: 20px;
  .card {
    padding-bottom: 50px;
    width: 90%;
    display: block;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    .card__img {
      height: 200px;
      object-fit: cover;
    }
    .card__description {
      display: flex;
      flex-direction: column;
    }
    .card--horizontal {
      display: flex;
      justify-content: space-between;
      margin: 10px 0 5px;
      .card__accessible-icon {
        display: none;
      }
      .showIcon {
        display: inline;
      }
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
}

// Tablet
@media (min-width: 600px) and (max-width: 1020px) {
  .search-results {
    margin-bottom: -120px;
  }
}

// Desktop
@media (min-width: 1020px) {
  .search-results {
    margin-bottom: -150px;
  }
}
</style>
