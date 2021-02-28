<template>
  <div>
    <my-header></my-header>

    <div>
      <h2>registrer ditt lokale, helt gratis!</h2>
    </div>

    <ValidationObserver v-slot="{ handleSubmit }">
      <form
        id="form"
        @submit.prevent="handleSubmit(onSubmit)"
        class="form-container"
      >
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
            <ValidationProvider
              name="venue name"
              rules="required"
              v-slot="{ errors }"
            >
              <label for="venue-name"
                >Navn på lokale<span class="red"> *</span></label
              >
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
              <label for="owner-name"
                >Fullt navn utleier<span class="red"> *</span></label
              >
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
            <ValidationProvider
              name="email"
              rules="required|email"
              v-slot="{ errors }"
            >
              <label for="email"
                >E-post adresse<span class="red"> *</span></label
              >
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
              <label for="phone"
                >Telefonnummer<span class="red"> *</span></label
              >
              <input type="tel" id="phone" name="phone" v-model="form.number" />
              <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>
        <div class="flex">
          <div>
            <ValidationProvider
              name="address"
              rules="required"
              v-slot="{ errors }"
            >
              <label for="address">Adresse<span class="red"> *</span></label>
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
            <ValidationProvider name="url" v-slot="{ errors }">
              <label for="url">Nettside</label>
              <input
                type="url"
                id="website"
                name="website"
                v-model="form.website"
              />
              <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>
        <ValidationProvider
          name="password"
          rules="required"
          v-slot="{ errors }"
        >
          <label for="password">Passord<span class="red"> *</span></label>
          <input
            type="password"
            id="password"
            name="password"
            v-model="form.password"
          />
          <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>

        <h3 class="padding-top">informasjon om ditt lokale</h3>

        <div class="flex">
          <div>
            <ValidationProvider
              name="event type"
              rules="required"
              v-slot="{ errors }"
            >
              <label for="text"
                >Hvilket type arrangement kan holdes der?<span class="red">
                  *</span
                ></label
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
              name="ameneties"
              rules="required"
              v-slot="{ errors }"
            >
              <label for="amenities"
                >Fasiliteter<span class="red"> *</span></label
              >
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
              name="seating number"
              rules="required|numeric"
              v-slot="{ errors }"
            >
              <label for="sitting"
                >Hvor mange sitteplasser har dere?<span class="red">
                  *</span
                ></label
              >
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
              name="standing number"
              rules="required|numeric"
              v-slot="{ errors }"
            >
              <label for="standing"
                >Hvor mange ståplasser har dere?<span class="red">
                  *</span
                ></label
              >
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
          <label for="text"
            >Hvilken pristype har dere?<span class="red"> *</span></label
          >
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
          name="price"
          rules="required|numeric"
          v-slot="{ errors }"
        >
          <label class="padding-price" for="price"
            >Fra pris<span class="red"> *</span></label
          >
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
          v-slot="{ errors, validate }"
        >
          <label for="images" class="file-upload"
            >Legg ved bilder fra lokale<span class="red"> *</span></label
          >

          <input
            type="file"
            id="files"
            name="images"
            multiple="multiple"
            ref="files"
            @change="handleFiles($event, validate)"
          />
          <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          name="description"
          rules="required"
          v-slot="{ errors }"
        >
          <label for="description"
            >Beskrivelse til kundene<span class="red"> *</span></label
          >
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            v-model="form.description"
          ></textarea>
          <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>

        <span class="small-text"
          >Før du registrerer deg, er det viktig at du leser våre
          <a href="#">villkår.</a></span
        >

        <ValidationProvider name="villkår" :rules="{ required: { allowFalse: false } }" v-slot="{ errors }">
          <label class="padding-left" for="terms"
            >Jeg har forstått deres villkår<span class="red"> *</span>
            <input
              type="checkbox"
              id="terms"
              name="terms"
              value="terms"
              v-model="form.terms"
            />
            <span class="checkbox"></span>
          </label>
          <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>

        <button class="btn--right" type="submit">registrer deg</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import axios from "axios";
// import { extend } from "vee-validate";
import { mapActions } from "vuex";

// extend("required", {
//   validate: (value) => value === "example",
//   message: (field) => "Vennligst fyll inn " + `${field}`,
// });

export default {
  name: "AddVenuePage",
  components: {
    "my-header": Header,
  },
  data() {
    return {
      form: {
        name: "",
        venuename: "",
        website: "",
        email: "",
        number: "",
        password: "",
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
      allVenueTypes: [],
      allFeatures: [],
      error: null,
    };
  },
  async mounted() {
    const venueTypeResponse = await axios.get("/venue-types");
    this.allVenueTypes = venueTypeResponse.data;

    const featuresReponse = await axios.get("/features");
    this.allFeatures = featuresReponse.data;
  },
  methods: {
    ...mapActions(["register"]),
    async onSubmit() {
      await this.register(this.form);
    },
    async handleFiles(e, val) {
      const valid = await val(e);

      if (valid) {
        this.form.files = this.$refs.files.files;
        return;
      }
    },
  },
};
</script>
