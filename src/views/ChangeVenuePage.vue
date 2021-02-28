<template>
  <div>
    <my-header></my-header>

    <div>
      <h2>din informasjon:</h2>
    </div>

    <ValidationObserver v-slot="{ handleSubmit }">
      <form class="form-container" @submit.prevent="handleSubmit(onSubmit)">
        <p>
          Her kan du legge til eller endre bilder eller informasjon på din
          profil. Vil du slette ditt lokale fra lokale.no, kan du gjøre det
          nederst på siden. Har du noen spørsmål, send oss en melding
          <router-link to="/contact"> her!</router-link>
        </p>

        <h3>kontakt informasjon</h3>

        <div class="flex">
          <div>
            <ValidationProvider
              name="venue name"
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
              name="your name"
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
              name="email"
              rules="required|email"
              v-slot="{ errors }"
            >
              <label for="email">E-post adresse</label>
              <input
                type="email"
                id="email"
                name="email"
                v-model="form.email"
              />
              <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
            <div>
              <ValidationProvider
                name="phone number"
                rules="required|numeric"
                v-slot="{ errors }"
              >
                <label for="phone">Telefonnummer</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  v-model="form.number"
                />
                <span class="error">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
          </div>
          <div class="flex">
            <div>
              <ValidationProvider
                name="address"
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
            name="password"
            rules="required"
            v-slot="{ errors }"
          >
            <label for="password">Passord</label>
            <input
              type="password"
              id="password"
              name="password"
              v-validate="'required'"
              v-model="form.password"
            />
            <span class="error">{{ errors[0] }}</span>
          </ValidationProvider>

          <h3 class="padding-top">informasjon om ditt lokale</h3>

          <div class="flex">
            <div>
              <ValidationProvider
                name="type of event"
                rules="required"
                v-slot="{ errors }"
              >
                <label for="text"
                  >Hvilket type arrangement kan holdes der?</label
                >
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
                    v-model="form.venue_type"
                  />
                  <span class="checkbox"></span>
                </label>
                <span class="error">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
          </div>

          <div>
            <ValidationProvider
              name="amenities"
              rules="required"
              v-slot="{ errors }"
            >
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
              name="seating"
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
              name="standing"
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
          name="price type"
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
          name="from price"
          rules="required|numeric"
          v-slot="{ errors }"
        >
          <label class="padding-price" for="price">Fra pris</label>
          <input
            type="number"
            id="price"
            name="price"
            v-model="form.fromprice"
          />
          <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          name="images"
          rules="required|image"
          v-slot="{ validate, errors }"
        >
          <label for="images" class="file-upload"
            >Legg ved bilder fra lokale</label
          >
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
          name="description"
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
            <button @click="deleteVenue" id="btn--delete">
              slett ditt lokale
            </button>
            <modal
              class="modal"
              name="delete-modal"
              @click.self="$modal.hide('delete-modal')"
              :adaptive="true"
            >
              <p>Ditt lokale er nå slettet.</p>
            </modal>
          </div>
          <div>
            <button type="submit">endre din profil</button>
            <modal
              class="modal"
              name="edit-modal"
              @click.self="$modal.hide('edit-modal')"
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
import axios from "axios";

export default {
  name: "ChangeVenuePage",
  components: {
    "my-header": Header,
  },
  data() {
    return {
      id: this.$route.params.id,
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
        features: [],
      },
      allVenueTypes: [],
      allFeatures: [],
      error: null,
    };
  },
  created: function() {},
  async mounted() {
    const response = await axios.get("/venues", this.$route.params.id);
    this.venue = response.data;
    
    const venueTypeResponse =  await axios.get("/venue-types");
    this.allVenueTypes = venueTypeResponse.data;

    const featuresReponse = await axios.get("/features");
    this.allFeatures = featuresReponse.data;
  },
  computed: {
    ...mapGetters({ Venues: "StateVenues", User: "StateUser" }),
  },
  methods: {
    ...mapActions(["CreatePost", "GetVenues"]),
    async onSubmit() {
      this.$modal.show("edit-modal");
      try {
        await this.ChangeVenue(this.form);
      } catch (error) {
        throw "Sorry cant change your venue right now!";
      }
    },
    async deleteVenue() {
      this.$modal.show("delete-modal");
      try {
        await this.DeleteVenue(this.form);
      } catch (error) {
        throw "Sorry cant delete your venue right now!";
      }
    },
  },
};
</script>
