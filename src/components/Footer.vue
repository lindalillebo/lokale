<template>
  <div>
    <footer>
      <ul>
        <router-link to="/contact">
          <li>Kontakt oss</li>
        </router-link>
        <router-link to="/add-venue">
          <li>Registrer ditt lokale</li>
        </router-link>
        <router-link to="/login">
          <li>Logg inn</li>
        </router-link>
        <router-link to="/listing">
          <li>Se alle lokaler</li>
        </router-link>
      </ul>
      <span>© Copyright 2021 lokale. All Rights Reserved.</span>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'Footer'
};




</script>


<style lang="scss">

footer {
  position: absolute;
  width: 100%;
  background-color: $brown;
  color: $light;
  height: 250px;
  padding: 5px 0 20px;
  left: 0;
  bottom: 0;
  ul {
    list-style: none;
    display: block;
    width: 40%;
    margin: 15px auto;
    font-weight: 500;
    a {
      text-decoration: none;
      color: $light;
      padding: 10px;
    }
    a:hover,
    a:active {
      color: $golden;
    }
  }
  span {
    display: block;
    text-align: center;
    font-size: 0.8em;
  }
}


// Tablet
@media (min-width: 600px) and (max-width: 1020px) {

 footer {
    height: 230px;
    ul {
      width: 80%;
      margin: 15px auto 0;
    }
    span {
      margin-right: 50px;
      text-align: right;
    }
  }
}


// Desktop
@media (min-width: 1020px) {

  footer {
    height: 200px;
    ul {
      width: 80%;
      margin: 10px auto 0;
    }
    span {
      margin-right: 50px;
      text-align: right;
    }
  }
}


</style>
