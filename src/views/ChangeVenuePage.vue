<template>
  <div>
    <my-header></my-header>

    <div>
      <h2>din informasjon:</h2>
    </div>

<ValidationObserver v-slot="{ handleSubmit }">
    <form class="form-container" @submit.prevent="handleSubmit(onSubmit)">
      <p>
        Her kan du legge til eller endre bilder eller informasjon på din profil.
        Vil du slette ditt lokale fra lokale.no, kan du gjøre det nederst på
        siden. Har du noen spørsmål, send oss en melding
        <router-link to="/contact"> her!</router-link>
      </p>

      <h3>kontakt informasjon</h3>

      <div class="flex">
        <div>
          <ValidationProvider
              name="lokale navn"
              rules="required|alpha"
              v-slot="{ errors }"
            >
          <label for="venue-name">Navn på lokale</label>
          <input
            type="text"
            id="venue-name"
            name="venue-name"
            v-model="form.venuename"
          />
          <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
        </div>
        <div>
          <ValidationProvider
              name="ditt navn"
              rules="required|alpha"
              v-slot="{ errors }"
            >
          <label for="owner-name">Fullt navn utleier</label>
          <input
            type="text"
            id="owner-name"
            name="owner-name"
            v-model="form.name"
            :placeholder="venue.name"
          />
          <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
        </div>
      </div>
      <div class="flex">
        <div>
           <ValidationProvider
              name="e-post"
              rules="required|email"
              v-slot="{ errors }"
            >
          <label for="email">E-post adresse</label>
          <input type="email" id="email" name="email" v-model="form.email" />
           <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
          <div>
            <ValidationProvider
              name="telefonnummer"
              rules="required|regex: ^0{2}[0-9]{11,}"
              v-slot="{ errors }"
            >
            <label for="phone">Telefonnummer</label>
            <input type="tel" id="phone" name="phone" v-model="form.number" />
             <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>
        <div class="flex">
          <div>
            <ValidationProvider
              name="adresse"
              rules="required|alpha"
              v-slot="{ errors }"
            >
            <label for="address">Adresse</label>
            <input
              type="text"
              id="address"
              name="address"
              v-model="form.address"
            />
           <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div>
            <label for="url">Nettside</label>
            <input
              type="url"
              id="website"
              name="website"
              v-model="form.website"
            />
          </div>
        </div>
        
            <ValidationProvider
              name="passord"
              rules="required"
              v-slot="{ errors }"
            >
            <label for="password">Passord</label>
            <input
              type="password"
              id="password"
              name="password"
              ref="password"
              v-validate="'required'"
              v-model="form.password"
            />
           <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>

        <h3 class="padding-top">informasjon om ditt lokale</h3>

        <div class="flex">
          <div>
            <ValidationProvider
              name="type arrangement"
              rules="required"
              v-slot="{ errors }"
              >
            <label for="text">Hvilket type arrangement kan holdes der?</label>

            <label class="padding-left" for="event1"
              >Bedriftsarrangement
              <input
                type="checkbox"
                id="event1"
                name="event1"
                value="bedriftsarrangement"
                v-model="form.venue_types"
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
                v-model="form.venue_types"
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
                v-model="form.venue_types"
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
                v-model="form.venue_types"
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
                v-model="form.venue_types"
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
                v-model="form.venue_types"
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
                v-model="form.venue_types"
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
                v-model="form.venue_types"
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
                v-model="form.venue_types"
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
                v-model="form.venue_types"
              />
              <span class="checkbox"></span>
            </label>
            <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>

        <div>
          <ValidationProvider
              name="fasiliteter"
              rules="required"
              v-slot="{ errors }"
            >
          <label for="ameneties">Fasiliteter</label>

          <label class="padding-left" for="amenity1"
            >Wifi
            <input
              type="checkbox"
              id="amenity1"
              name="amenity1"
              value="wifi"
              v-model="form.features"
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
              v-model="form.features"
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
              v-model="form.features"
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
              v-model="form.features"
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
              v-model="form.features"
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
              v-model="form.features"
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
              v-model="form.features"
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
              v-model="form.features"
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
              v-model="form.features"
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
              v-model="form.features"
            />
            <span class="checkbox"></span>
          </label>
          <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
        </div>
      </div>

      <div class="flex">
        <div>
          <ValidationProvider
              name="sitteplasser"
              rules="required|numeric"
              v-slot="{ errors }"
            >
          <label for="sitting">Hvor mange sitteplasser har dere?</label>
          <input
            type="text"
            id="sitting"
            name="sitting"
            v-model="form.seating"
          />
           <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
        </div>
        <div>
          <ValidationProvider
              name="ståplasser"
              rules="required|numeric"
              v-slot="{ errors }"
            >
          <label for="standing">Hvor mange ståplasser har dere?</label>
          <input
            type="text"
            id="standing"
            name="standing"
            v-model="form.standing"
          />
           <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
        </div>
      </div>

<ValidationProvider
          name="pristype"
          rules="required"
          v-slot="{ errors }"
        >
      <label for="text">Hvilken pristype har dere?</label>
      <label class="padding-left" for="per-person"
        >Per pers
        <input
          type="radio"
          id="per-person"
          name="price-type"
          value="per-person"
          v-model="form.pricing"
        />
        <span class="radio"></span>
      </label>
      <label class="padding-left" for="venue-hire"
        >Lokalleie
        <input
          type="radio"
          id="venue-hire"
          name="price-type"
          value="venue-hire"
          v-model="form.pricing"
        />
        <span class="radio"></span>
      </label>
      <label class="padding-left" for="minimum-price"
        >Minimumspris
        <input
          type="radio"
          id="minimum-price"
          name="price-type"
          value="minimum-price"
          v-model="form.pricing"
        />
        <span class="radio"></span>
      </label>
       <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>


<ValidationProvider
          name="fra pris"
          rules="required|numeric"
          v-slot="{ errors }"
        >
      <label class="padding-price" for="price">Fra pris</label>
      <input type="number" id="price" name="price" v-model="form.fromprice" />
     <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>

<ValidationProvider rules="required|image" v-slot="{ validate, errors }">
      <label for="images" class="file-upload">Legg ved bilder fra lokale</label>
      <input
         type="file"
            id="images"
            name="images"
            multiple="multiple"
            @change="validate"
      />
     <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>

<ValidationProvider
          name="beskrivelse"
          rules="required|alpha"
          v-slot="{ errors }"
        >
      <label for="description">Beskrivelse til kundene</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        v-model="form.description"
      ></textarea>
     <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>

      <div class="flex">
        <div>
          <button @click="deleteVenue()" id="btn--delete">slett ditt lokale</button>
          <modal
            class="modal"
            name="my-modal"
            @click.self="$modal.hide('my-modal')"
            :adaptive="true"
          >
            <p>Ditt lokale er nå slettet.</p>
          </modal>
        </div>
        <div>
          <button type="submit">endre din profil</button>
          <modal
            class="modal"
            name="my-modal"
            @click.self="$modal.hide('my-modal')"
            :adaptive="true"
          >
            <p>Din informasjon er endret!</p>
          </modal>
        </div>
      </div>
    </form>
</ValidationObserver>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Header from "../components/Header";

export default {
  name: "ChangeVenuePage",
  components: {
    "my-header": Header,
  },
  data() {
    return {
      form: {
        id: "",
        name: "",
        venuename: "",
        website: "",
        email: "",
        number: "",
        password: "",
        repeat_password: "",
        description: "",
        pricing: "",
        fromprice: "",
        seating: "",
        standing: "",
        address: "",
        gallery: [],
        venue_types: [],
        features: []
      }
    };
  },
  created: function () {
    this.GetVenues()
  },
  computed: {
    ...mapGetters({Venues: "StateVenues", User: "StateUser"}),
  },
  methods: {
    ...mapActions(["CreatePost", "GetVenues"]),
    async onSubmit() {
      this.$modal.show("my-modal");
      try {
        await this.ChangeVenue(this.form);
      } catch (error) {
        throw "Sorry cant change your venue right now!"
      }
    },
    async deleteVenue() {
        try {
            await this.DeleteVenue(this.form);
        } catch (error) {
            throw "Sorry cant delete your venue right now!"
        }
    }
  },
};
</script>
