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
              rules="required"
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
              rules="required"
              v-slot="{ errors }"
            >
              <label for="owner-name">Fullt navn utleier</label>
              <input
                type="text"
                id="owner-name"
                name="owner-name"
                v-model="form.name"
              />
              <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>
        <div class="flex">
          <div>
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
            </div>
            <div>
              <ValidationProvider
                name="phone number"
                rules="required"
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
          <div>
            <div>
              <ValidationProvider
                name="address"
                rules="required"
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
        </div>

        <div>
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
                    v-model="form.venue_types"
                  />
                  <span class="checkbox"></span>
                </label>
                <span class="error">{{ errors[0] }}</span>
              </ValidationProvider>
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
              value="perperson"
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
              value="venuehire"
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
              value="minimumprice"
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
          rules="image"
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
            ref="files"
            @change="handleFiles($event, validate)"
          />
          <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>

        <div>
          <ul>
            <li v-for="item in files" :key="'image-' + item.id">
              <img :src="item.formats.thumbnail.url | imageFilter" />
              <button class="del-btn" @click="deleteImage(item.id)">slett</button>
            </li>
          </ul>
        </div>

        <ValidationProvider
          name="description"
          rules="required"
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
import { mapActions } from "vuex";
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
        name: "",
        venuename: "",
        website: "",
        email: "",
        number: "",
        description: "",
        pricing: "",
        fromprice: "",
        seating: "",
        standing: "",
        address: "",
        files: null,
        venue_types: [],
        features: [],
        terms: false,
      },
      files: [],
      features: [],
      venue_types: [],
      allVenueTypes: [],
      allFeatures: [],
      error: null,
    };
  },
  created: function() {},
  async mounted() {
    const response = await axios.get(`/venues/${this.id}`);
    this.form.name = response.data.name;
    this.form.venuename = response.data.venuename;
    this.form.website = response.data.website;
    this.form.email = response.data.email;
    this.form.number = response.data.number;
    this.form.description = response.data.description;
    this.form.pricing = response.data.pricing;
    this.form.fromprice = response.data.fromprice;
    this.form.seating = response.data.seating;
    this.form.standing = response.data.standing;
    this.form.address = response.data.address;
    this.form.terms = response.data.terms;
    this.form.venue_types = response.data.venue_types.map((item) => item.id);
    this.form.features = response.data.features.map((item) => item.id);

    this.venue_types = response.data.venue_types;
    this.features = response.data.features;
    this.files = response.data.gallery;

    const venueTypeResponse = await axios.get("/venue-types");
    this.allVenueTypes = venueTypeResponse.data;

    const featuresReponse = await axios.get("/features");
    this.allFeatures = featuresReponse.data;
  },
  methods: {
    ...mapActions(["deleteAccount"]),
    async deleteImage(id) {
      await axios.delete(`/upload/files/${id}`);
      this.files = this.files.filter((item) => item.id !== id);
    },
    async handleFiles(e, val) {
      const valid = await val(e);

      if (valid) {
        this.form.files = this.$refs.files.files;
        return;
      }
    },
    async onSubmit() {
      console.log("Submit...");
      this.$modal.show("edit-modal");

      let venueData = new FormData();

      venueData.append("data", JSON.stringify(this.form));

      if (this.form.files?.length > 0) {
        for (let i = 0; i < this.form.files.length; i++) {
          const file = this.form.files[i];
          venueData.append(`files.gallery`, file, file.name);
        }
      }

      await axios.put(`/venues/${this.id}`, venueData);
    },
    async deleteVenue() {
      this.$modal.show("delete-modal");

      await this.deleteAccount();
    },
  },
  filters: {
    imageFilter(value) {
      return `${process.env.VUE_APP_STRAPI_URL}${value}`;
    },
  },
};
</script>

<style lang="scss">

li {
  text-align: center;
  img {
    margin: 0 auto;
  }
}

  .del-btn {
    width: 200px !important;
    margin: 0;
  }
</style>