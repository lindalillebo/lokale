<template>
  <div>
    <nav class="nav-border">
      <div id="logo">
        <router-link to="/">
          <img src="../assets/logo-dark-text.svg" alt="logo-dark-text" />
        </router-link>
      </div>
      <div @click="toggledNav = !toggledNav" id="toggle">
        <img
          v-if="!toggledNav"
          src="../assets/hamburger.svg"
          alt="hamburger menu"
        />
        <img v-else src="../assets/cross.svg" alt="cross" class="cross" />
      </div>
      <ul :class="{ open: toggledNav }" id="nav-links">
          <li v-if="loggedIn">
            <a href=""  @click.prevent="goToEdit" class="add-venue"
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
            <router-link to="/register" class="add-venue"
              >registrer lokale</router-link
            >
          </li>
          <li v-if="!loggedIn">
            <router-link to="/login"
              ><button>logg inn</button></router-link
            >
          </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      toggledNav: false,
    };
  },
  watch: {
    $route() {
      this.toggledNav = false;
    },
  },
  computed: {
    loggedIn: function() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    async goToEdit() {
      await this.$store.dispatch("goToProfile");
    },
    async logout() {
      await this.$store.dispatch("logOut");
    },
  },
};
</script>

<style lang="scss">
// Navigation

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
  .cross {
    height: 30px;
  }
  #nav-links {
    display: none;
    margin: 50px auto 30px;
    font-size: 1.3em;
    .add-venue {
      color: $dark;
      font-weight: 700;
    }
    a {
      display: block;
      color: $light;
      padding: 20px;
      text-align: center;
    }
  }
  .open {
    display: inline-block !important;
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
  nav {
    #logo {
      width: 120px;
      margin: 15px 0 15px 30px;
    }
    #toggle {
      display: none;
    }
    #nav-links {
      display: block !important;
      margin: 14px 0 15px 0;
      font-size: 1.2em;
      li {
        font-weight: 500;
        float: right;
        button {
          padding: 5px 15px;
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
  nav {
    #logo {
      width: 120px;
      margin: 18px 0 15px 30px;
    }
    #toggle {
      display: none;
    }
    #nav-links {
      display: block !important;
      margin: 15px 0 15px 0;
      font-size: 1.2em;
      li {
        font-weight: 500;
        float: right;
        a {
          padding: 5px 15px;
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
