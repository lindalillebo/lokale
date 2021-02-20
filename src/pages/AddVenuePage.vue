<template>
  <div>
    <my-header></my-header>

    <div>
      <h2>registrer ditt lokale, helt gratis!</h2>
    </div>

    <form id="form" v-on:submit="handleSubmit" class="form-container">
      <p>
        Fyll inn din informasjon så vi kan lage din oppføring for deg. Du kan
        legge til eller endre den når som helst ved å logge inn. Det er helt
        gratis å legge til ditt lokale, og du har full kontroll over hvilke
        bookinger du aksepterer. Vi fakturerer kun 10% provisjon etter datoen
        for arrangementet. Har du noen spørsmål, send oss en melding
        <router-link to="/contact">her!</router-link>
      </p>

      <h3>kontakt informasjon</h3>

      <div class="flex">
        <div>
          <label for="venue-name"
            >Navn på lokale<span class="red"> *</span></label
          >
          <input
            type="text"
            v-model="modifiedData.venueName"
            id="venue-name"
            name="venue-name"
            required
          />
          <span class="error">Dette feltet kan ikke være tomt</span>
        </div>
        <div>
          <label for="owner-name"
            >Fullt navn utleier<span class="red"> *</span></label
          >
          <input type="text" id="owner-name" name="owner-name" required />
          <span class="error">Dette feltet kan ikke være tomt</span>
        </div>
      </div>
      <div class="flex">
        <div>
          <label for="email">E-post adresse<span class="red"> *</span></label>
          <input type="email" id="email" name="email" required />
          <span class="error"
            >Vær vennlig å skriv inn rikitg e-post adresse</span
          >
        </div>
        <div>
          <label for="phone">Telefonnummer<span class="red"> *</span></label>
          <input type="tel" id="phone" name="phone" required />
          <span class="error">Dette feltet kan ikke være tomtr</span>
        </div>
      </div>
      <div class="flex">
        <div>
          <label for="address">Adresse<span class="red"> *</span></label>
          <input type="text" id="address" name="address" required />
          <span class="error">Dette feltet kan ikke være tomt</span>
        </div>
        <div>
          <label for="url">Nettside</label>
          <input type="url" id="website" name="website" />
        </div>
      </div>
      <div class="flex">
        <div>
          <label for="password">Passord<span class="red"> *</span></label>
          <input type="password" id="password" name="password" required />
          <span class="error">Dette feltet kan ikke være tomt</span>
        </div>
        <div>
          <label for="password"
            >Gjenta passord<span class="red"> *</span></label
          >
          <input type="password" id="password" name="password" required />
          <span class="error">Dette feltet kan ikke være tomt</span>
        </div>
      </div>

      <h3 class="padding-top">informasjon om ditt lokale</h3>

      <div class="flex">
        <div>
          <label for="text"
            >Hvilket type arrangement kan holdes der?<span class="red">
              *</span
            ></label
          >

          <label class="padding-left" for="event1"
            >Bedriftsarrangement
            <input
              type="checkbox"
              id="event1"
              name="event1"
              value="bedriftsarrangement"
            />
            <span class="checkbox"></span>
          </label>

          <label class="padding-left" for="event2"
            >Bryllup
            <input type="checkbox" id="event2" name="event2" value="bryllup" />
            <span class="checkbox"></span>
          </label>

          <label class="padding-left" for="event3"
            >Dåp / Navnedag / Konfirmasjon
            <input
              type="checkbox"
              id="event3"
              name="event3"
              value="dåp / navnedag / konfirmasjon"
            />
            <span class="checkbox"></span>
          </label>

          <label class="padding-left" for="event4"
            >Fest
            <input type="checkbox" id="event4" name="event4" value="fest" />
            <span class="checkbox"></span>
          </label>

          <label class="padding-left" for="event5"
            >Forestilling / Konsert
            <input
              type="checkbox"
              id="event5"
              name="event5"
              value="forestilling / konsert"
            />
            <span class="checkbox"></span>
          </label>

          <label class="padding-left" for="event6"
            >Julebord
            <input type="checkbox" id="event6" name="event6" value="julebord" />
            <span class="checkbox"></span>
          </label>

          <label class="padding-left" for="event7"
            >Kurs / Konferanse
            <input
              type="checkbox"
              id="event7"
              name="event7"
              value="kurs / konferanse"
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
            />
            <span class="checkbox"></span>
          </label>

          <label class="padding-left" for="event9"
            >Møte
            <input type="checkbox" id="event9" name="event9" value="møte" />
            <span class="checkbox"></span>
          </label>

          <label class="padding-left" for="event10"
            >Utstilling
            <input
              type="checkbox"
              id="event10"
              name="event10"
              value="utstilling"
            />
            <span class="checkbox"></span>
          </label>
          <span class="error">Vennligst velg minst en av valgene</span>
        </div>
        <span class="error">Vennligst velg minst en av valgene</span>

        <div>
          <label for="ameneties">Fasiliteter<span class="red"> *</span></label>

          <label class="padding-left" for="amenity1"
            >Wifi
            <input type="checkbox" id="amenity1" name="amenity1" value="wifi" />
            <span class="checkbox"></span>
          </label>

          <label class="padding-left" for="amenity2"
            >Tilbyr alkohol
            <input
              type="checkbox"
              id="amenity2"
              name="amenity2"
              value="tilbyr alkohol"
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
            />
            <span class="checkbox"></span>
          </label>
        </div>
      </div>
      <span class="error">Vennligst velg minst en av valgene</span>

      <div class="flex">
        <div>
          <label for="sitting">Hvor mange sitteplasser har dere?</label>
          <input type="text" id="sitting" name="sitting" required />
          <span class="error">Dette feltet kan ikke være tomt</span>
        </div>
        <div>
          <label for="standing">Hvor mange ståplasser har dere?</label>
          <input type="text" id="standing" name="standing" required />
          <span class="error">Dette feltet kan ikke være tomt</span>
        </div>
      </div>

      <label for="text"
        >Hvilken pristype har dere?<span class="red"> *</span></label
      >
      <label class="padding-left" for="per-person"
        >Per pers
        <input
          type="radio"
          id="per-person"
          name="per-person"
          value="per-person"
          checked
        />
        <span class="radio"></span>
      </label>
      <label class="padding-left" for="venue-hire"
        >Lokalleie
        <input
          type="radio"
          id="venue-hire"
          name="venue-hire"
          value="venue-hire"
        />
        <span class="radio"></span>
      </label>
      <label class="padding-left" for="minimum-price"
        >Minimumspris
        <input
          type="radio"
          id="minimum-price"
          name="minimum-price"
          value="minimum-price"
        />
        <span class="radio"></span>
      </label>

      <label class="padding-price" for="price"
        >Fra pris<span class="red"> *</span></label
      >
      <input type="number" id="price" name="price" required />
      <span class="error">Vennligst fyll din fra pris</span>

      <label for="images" class="file-upload"
        >Legg ved bilder fra lokale<span class="red"> *</span></label
      >
      <input type="file" id="images" name="images" required />
      <span class="error">Vennligst legg til minst ett bilde</span>

      <label for="description"
        >Beskrivelse til kundene<span class="red"> *</span></label
      >
      <textarea
        name="description"
        v-model="modifiedData.description"
        id="description"
        cols="30"
        rows="10"
        required
      ></textarea>
      <span class="error">Dette feltet kan ikke være tomt</span>

      <span class="small-text"
        >Før du registrerer deg, er det viktig at du leser våre
        <a href="#">villkår.</a></span
      >

      <label class="padding-left" for="terms"
        >Jeg har forstått deres villkår<span class="red"> *</span>
        <input type="checkbox" id="terms" name="terms" value="terms" required />
        <span class="checkbox"></span>
      </label>
      <span class="error"
        >Du må godta villkårene før du kan registrere deg</span
      >

      <button class="btn--right" type="submit">registrer deg</button>
    </form>

  </div>
</template>

<script>
import Header from ' ../components/Header.vue'

// import axios from 'axios'

export default {
    name: 'AddVenuePage',
     components: {
        'my-header': Header
    }

//     data() {
//     return {
//       allCategories: [],
//       modifiedData: {
//         name: '',
//         description: '',
//         categories: [],
//       },
//       error: null
//     },
//   },
//   async mounted() {

//     try {
//       const response = await axios.get('http://localhost:1337/categories')
//       this.allCategories = response.data;
//     } catch (error) {
//       this.error = error;
//     }
//   },
//   methods: {
//     handleSubmit: async function(e) {
//       e.preventDefault();

//       try {
//         const response = await axios.post('http://localhost:1337/venues', this.modifiedData)
//         console.log(response);
//       } catch(error) {
//         this.error = error;
//       }
//     }
//   }
}
</script>

<style lang="scss">
.form-container {
  background-color: $light;
  width: 90%;
  margin: 0 auto 80px;
  padding: 5px 0 30px;
  box-shadow: 0 1px 4px $brown;
  h4 {
    font-size: 1em;
    font-weight: 500;
    text-align: center;
    width: 90%;
    margin: 30px auto 35px;
    line-height: 20px;
  }
  h3 {
    font-size: 1.3em;
    width: 90%;
    margin: 50px auto 35px;
    padding-bottom: 15px;
    border-bottom: 1px solid $dark;
  }
  p {
    font-size: 0.9em;
    font-weight: 500;
    width: 90%;
    margin: 30px auto 50px;
    line-height: 23px;
  }
  input,
  textarea,
  select {
    display: block;
    background-color: #fff;
    padding: 10px;
    margin: 15px auto;
    border: 1px solid lighten($brown, 50%);
    width: 90%;
    font-family: $font-stack;
    font-weight: 300;
    letter-spacing: 0.1em;
  }
  input:focus,
  textarea:focus {
    outline: none;
    box-shadow: 0 0 4px lighten($brown, 40%);
  }
  ::placeholder {
    color: lighten($brown, 20%);
    opacity: 1;
  }
  label {
    position: relative;
    display: block;
    margin: 25px auto 10px;
    width: 90%;
    font-size: 0.9em;
    font-weight: 700;
    input[type="checkbox"] {
      position: absolute;
      opacity: 0;
    }
    input[type="radio"] {
      position: absolute;
      opacity: 0;
    }
    .checkbox,
    .radio {
      position: absolute;
      top: 0;
      left: 0;
      width: 14.55px;
      height: 14.55px;
      background-color: #fff;
      border: 1px solid lighten($brown, 50%);
      &::after {
        content: "";
        position: absolute;
        display: none;
        left: 6px;
        top: 2px;
        width: 6px;
        height: 10px;
        border: solid $dark;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }
    }
    .radio {
      border-radius: 50%;
    }
    &:hover .checkbox,
    &:hover .radio {
      background-color: $beige;
    }
  }
  label input[type="checkbox"]:checked ~ .checkbox {
    background-color: $golden;
  }
  label input[type="checkbox"]:checked ~ .checkbox::after {
    display: block;
  }
  .padding-left {
    padding-left: 40px;
    cursor: pointer;
    font-size: 0.8em;
    font-weight: 500;
  }
  button {
    width: 90%;
    display: block;
    margin: 40px auto;
    padding: 10px;
  }
  .small-text {
    font-size: 0.8em;
    display: block;
    margin: 0 auto;
    width: 90%;
  }
  .error {
    display: none;
  }
  a:hover {
    color: $golden;
  }
}

.red {
  color: $red;
}

// Tablet
@media (min-width: 600px) and (max-width: 1020px) {
  .form-container__log-in {
    width: 400px;
  }

  .form-container {
    overflow: hidden;
    padding: 15px 30px 40px;
    label,
    input,
    textarea {
      margin: 15px auto;
    }
    input {
      margin-bottom: 35px;
    }
    h3 {
      text-align: left;
      margin: 40px auto 30px;
    }
    p {
      margin: 30px auto 15px;
    }
    .btn--right {
      width: 40%;
      float: right;
      margin-right: 30px;
    }
    .padding-price {
      padding-top: 10px;
    }
  }

  .form-container__contact {
    width: 500px;
    h4 {
      font-size: 0.9em;
    }
  }
}

// Desktop
@media (min-width: 1020px) {
  .form-container {
    overflow: hidden;
    width: 800px;
    padding: 15px 30px 40px;
    label,
    input,
    textarea {
      margin: 15px auto;
    }
    input {
      margin-bottom: 35px;
    }
    h3 {
      text-align: left;
      margin: 40px auto 30px;
    }
    p {
      margin: 30px auto 15px;
    }
    .btn--right {
      width: 40%;
      float: right;
      margin-right: 30px;
    }
    .padding-price {
      padding-top: 10px;
    }
  }
}
</style>
