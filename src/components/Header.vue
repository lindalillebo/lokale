<template>
        <nav>
            <div id="logo">
                <router-link to="/">
                    <img src="../assets/logo-dark-text.svg" alt="logo-dark-text">
                </router-link>
            </div>
            <div id="toggle">
                <img @click="toggledNav = !toggledNav" src="../assets/hamburger.svg" alt="hamburger menu" id="hamburger">
                <img src="../assets/cross.svg" alt="cross" id="cross">
            </div>
            <ul id="nav-links">
                <li>
                    <router-link to="/add-venue" class="add-venue">registrer lokale</router-link>
                </li>
                <li>
                    <router-link to="/log in"><button>logg inn</button></router-link>
                </li>
            </ul>
        </nav>
</template>

<script>


export default {
    name: 'Header',
      data () {
      return {
        toggledNav: false
      }
      },
      watch: {
        '$route' () {
          this.toggledNav = false
        }
      }
}


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
      display: block;
      margin-bottom: 0;
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