<template>
  <div>
    <section class="hero">
      <nav>
        <div id="logo">
          <router-link to="/">
            <img src="../assets/logo-golden-text.svg" alt="logo-golden-text" />
          </router-link>
        </div>
        <div @click="toggledNav = !toggledNav" id="toggle">
          <img
            v-if="!toggledNav"
            src="../assets/hamburger.svg"
            alt="hamburger menu"
            id="hamburger"
          />
          <img v-else src="../assets/cross.svg" alt="cross" class="cross" />
        </div>
        <ul :class="{ open: toggledNav }" id="nav-links">
          <li v-if="loggedIn">
            <a href="" @click.prevent="goToEdit" class="add-venue light"
              >mitt lokale</a
            >
          </li>
          <li v-if="loggedIn">
            <router-link to="/"
              ><button @click="logout">
                logg ut
              </button></router-link
            >
          </li>
          <li v-if="!loggedIn">
            <router-link to="/register" class="add-venue light"
              >registrer lokale</router-link
            >
          </li>
          <li v-if="!loggedIn">
            <router-link to="/login"><button>logg inn</button></router-link>
          </li>
        </ul>
      </nav>
      <div class="hero__text">
        <h1>finn lokale til ditt <br />&nbsp;&nbsp;&nbsp;arrangement!</h1>
        <div class="hero__search">
          <form @submit.prevent="onSubmit">
            <input
              type="text"
              placeholder="område"
              v-model="address"
              tabindex="1"
              autofocus
            />
            <select
              name="select-event"
              id="select-event"
              v-model="venueType"
              tabindex="2"
            >
              <option :value="null" disabled>type begivenhet</option>
              <option
                v-for="item in allVenueTypes"
                v-bind:value="item.id"
                :key="'venue_type_' + item.id"
                >{{ item.name }}</option
              >
            </select>
            <input
              type="number"
              placeholder="antall personer"
              v-model="noOfPeople"
              tabindex="3"
            />
            <button id="btn--round" type="submit">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
    <div class="container">
      <h2>hvilket lokale trenger du?</h2>
      <div class="venue-links">
        <div class="venue-link-1">
          <router-link to="/listing?venueType=8">
            <img
              class="cover"
              src="../assets/robert-mathews-xXaLfz6V9rQ-unsplash.jpg"
              alt="Serveringslokaler bilde"
            />
            <h4>Serveringslokaler</h4>
          </router-link>
        </div>
        <div class="venue-link-2">
          <router-link to="/listing?venueType=4">
            <img
              class="cover"
              src="../assets/pexels-thibault-trillet-167491.jpg"
              alt="Festlokaler bilde"
            />
            <h4>Festlokaler</h4>
          </router-link>
        </div>
        <div class="venue-link-3">
          <router-link to="/listing?venueType=7">
            <img
              class="cover"
              src="../assets/pexels-pixabay-221537.jpg"
              alt="Møte og konferanse bilde"
            />
            <h4>Møte og konferanse</h4>
          </router-link>
        </div>
        <div class="venue-link-4">
          <router-link to="/listing?venueType=1">
            <img
              class="cover"
              src="../assets/james-bold-174ZYtxCtr4-unsplash.jpg"
              alt="Bryllup bilde"
            />
            <h4>Bryllup</h4>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchPage",
  components: {},
  data() {
    return {
      noOfPeople: null,
      address: "",
      venueType: null,
      allVenueTypes: [],
      toggledNav: false,
    };
  },
  watch: {
    $route() {
      this.toggledNav = false;
    },
  },
  async mounted() {
    const response = await axios.get("/venue-types");
    this.allVenueTypes = response.data;
  },
  computed: {
    loggedIn: function() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logOut");
    },
    async goToEdit() {
      await this.$store.dispatch("goToProfile");
    },
    onSubmit() {
      this.$router.push({
        path: "listing",
        query: {
          address: this.address,
          venueType: this.venueType,
          noOfPeople: this.noOfPeople,
        },
      });
    },
  },
};
</script>

<style lang="scss">
.hero {
  background: url("../assets/background-img.jpg") no-repeat center center;
  -webkit-background-size: cover;
  height: 100vh;
  position: relative;
  background-size: cover;
  overflow-x: hidden;
  .hero__text {
    margin: 0 auto;
    -ms-transform: translateY(70%);
    transform: translateY(70%);
    width: 90%;
    .hero__search {
      input,
      select {
        display: block;
        width: 75%;
        border: none;
        padding: 10px 50px 10px 10px;
        margin: 10px auto;
        border: 1px solid lighten($brown, 50%);
        font-family: $font-stack;
        letter-spacing: 0.1em;
        overflow: hidden;
        color: $brown;
      }
      ::placeholder {
        color: $brown;
        opacity: 1;
      }
      *:focus {
        outline: none;
      }
    }
  }
}

.container {
  width: 90%;
  margin: 40px auto -50px;
  overflow: hidden;
  img {
    width: 100%;
  }
  h4 {
    margin-bottom: 50px;
  }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.cover {
  object-fit: cover;
}

nav {
  overflow: auto;
  #logo {
    float: left;
    margin: 15px;
    width: 120px;
  }
  #toggle {
    float: right;
    margin: 15px;
    width: 38px;
  }
  #cross {
    display: none;
  }
  #nav-links {
    display: none;
    margin-bottom: 0;
    a {
      display: block;
      color: $light;
      padding: 15px;
    }
    li {
      .light {
        color: $light;
      }
    }
    &.toggle-menu {
      display: inline;
    }
  }
}

.nav-border {
  box-shadow: 0px 2px 7px lighten($brown, 50%);
}

ul {
  list-style-type: none;
  display: inline-block;
  width: 100%;
  padding: 0;
}

// Tablet
@media (min-width: 600px) and (max-width: 1020px) {
  .hero {
    height: 600px;
    .hero__text {
      margin: 0 auto;
      -ms-transform: translateY(30%);
      transform: translateY(30%);
      width: 90%;
      font-size: 1.3em;
      .hero__search {
        form {
          display: flex;
          flex-wrap: wrap;
        }
        input,
        select {
          font-size: 0.6em;
          width: 33.33%;
        }
      }
      #btn--round {
        height: 35px;
        width: 35px;
        padding: 0;
        i {
          font-size: 0.7em;
        }
      }
    }
  }

  .container {
    h2 {
      text-align: start;
    }
    .venue-links {
      display: flex;
      flex-wrap: wrap;
      img {
        height: 200px;
      }
      .venue-link-1 {
        width: 60%;
        padding: 0 5px;
      }
      .venue-link-2 {
        width: 40%;
        padding: 0 5px;
      }
      .venue-link-3 {
        width: 40%;
        padding: 0 5px;
      }
      .venue-link-4 {
        width: 60%;
        padding: 0 5px;
      }
    }
  }

  nav {
    #logo {
      width: 120px;
      margin: 18px 0 15px 30px;
    }
    #toggle {
      display: none;
    }
    #nav-links {
      display: block;
      margin-bottom: 0;
      li {
        font-weight: 500;
        float: right;
        a {
          padding: 5px 15px;
        }
        .light {
          color: $light;
        }
        .add-venue {
          padding-top: 9px;
          &:hover {
            color: $golden;
            transition: all 0.2s ease;
          }
        }
        .add-venue-dark {
          color: $dark;
          padding-top: 9px;
          &:hover {
            color: $golden;
            transition: all 0.2s ease;
          }
        }
      }
    }
  }
}

// Desktop
@media (min-width: 1020px) {
  .hero {
    height: 700px;
    .hero__text {
      margin: 0 auto;
      -ms-transform: translateY(100%);
      transform: translateY(100%);
      width: 70%;
      font-size: 1.3em;
      .hero__search {
        width: 80%;
        float: right;
        form {
          display: flex;
          flex-wrap: wrap;
          width: 94%;
        }
        input,
        select {
          font-size: 0.6em;
          width: 33.33%;
        }
      }
      #btn--round {
        position: absolute;
        right: 0;
        height: 38px;
        width: 38px;
        margin: 10px 0;
        padding: 0;
        i {
          font-size: 0.7em;
        }
      }
    }
  }

  .container {
    max-width: 1000px;
    h2 {
      text-align: start;
    }
    .venue-links {
      display: flex;
      flex-wrap: wrap;
      img {
        height: 200px;
      }
      .venue-link-1 {
        width: 60%;
        padding: 0 5px;
      }
      .venue-link-2 {
        width: 40%;
        padding: 0 5px;
      }
      .venue-link-3 {
        width: 40%;
        padding: 0 5px;
      }
      .venue-link-4 {
        width: 60%;
        padding: 0 5px;
      }
    }
  }

  nav {
    #logo {
      width: 120px;
      margin: 18px 0 15px 30px;
    }
    #toggle {
      display: none;
    }
    #nav-links {
      display: block;
      margin-bottom: 0;
      li {
        font-weight: 500;
        float: right;
        a {
          padding: 5px 15px;
        }
        .light {
          color: $light;
        }
        .add-venue {
          padding-top: 9px;
          &:hover {
            color: $golden;
            transition: all 0.2s ease;
          }
        }
        .add-venue-dark {
          color: $dark;
          padding-top: 9px;
          &:hover {
            color: $golden;
            transition: all 0.2s ease;
          }
        }
      }
    }
  }
}
</style>
