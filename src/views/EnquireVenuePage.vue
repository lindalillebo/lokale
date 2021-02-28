<template>
  <div>
    <my-header></my-header>
    <div>
      <h2 v-if="venue">send en booking forespørsel til {{ venue.venuename }}</h2>
    </div>

    <ValidationObserver v-slot="{ handleSubmit }">
      <form
        class="form-container"
        @submit.prevent="handleSubmit(onSubmit)"
      >
        <p v-if="venue">
          Vi sender din henvendelse til {{ venue.venuename }}for ditt
          arrangement. De vil da svare deg på e-post med et skreddersydd
          forslag, helt gratis uten forpliktelser. Du velger selv om du vil
          godta eller ikke.
        </p>

        <h3>kontakt detaljer</h3>

        <ValidationProvider
          name="your name"
          rules="required"
          v-slot="{ errors }"
        >
          <label for="name">Fullt navn<span class="red"> *</span></label>
          <input type="text" id="name" name="name" v-model="form.name"/>
          <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          name="email"
          rules="required|email"
          v-slot="{ errors }"
        >
          <label for="email">E-post adresse<span class="red"> *</span></label>
          <input type="email" id="email" name="email" v-model="form.email"/>
          <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          name="phone number"
          rules="required"
          v-slot="{ errors }"
        >
          <label for="phone">Telefonnummer<span class="red"> *</span></label>
          <input type="tel" id="phone" name="phone" v-model="form.phone"/>
          <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>

        <h3>arrangement detaljer</h3>

        <ValidationProvider
          name="type of event"
          rules="required"
          v-slot="{ errors }"
        >
          <label for="text"
            >Hvilket type arrangement ønsker du?<span class="red">
              *</span
            ></label
          >
          <select name="events" id="events" v-model="form.selected">
            <option value="bedriftsarrangement">Bedriftsarrangement</option>
            <option value="bryllup">Bryllup</option>
            <option value="dåp / navnedag / konfirmasjon"
              >Dåp / Navnedag / Konfirmasjon</option
            >
            <option value="fest">Fest</option>
            <option value="forestilling / konsert"
              >Forestilling / Konsert</option
            >
            <option value="julebord">Julebord</option>
            <option value="kurs / konferanse">Kurs / Konferanse</option>
            <option value="middag / kunsj">Middag / Lunsj</option>
            <option value="møte">Møte</option>
            <option value="utstilling">Utstilling</option>
          </select>
          <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          name="seating"
          rules="required"
          v-slot="{ errors }"
        >
          <label for="text">Sitteplasser<span class="red"> *</span></label>
          <label class="padding-left" for="sitting"
            >Sittende
            <input type="radio" id="sitting" name="seating" value="sitting"/>
            <span class="radio"></span>
          </label>

          <label class="padding-left" for="standing"
            >Stående
            <input type="radio" id="standing" name="seating" value="standing" />
            <span class="radio"></span>
          </label>
          <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>

        <label class="padding-price" for="text"
          >Antall gjester<span class="red"> *</span></label
        >
        <ValidationProvider
          name="number of guests"
          rules="required|numeric"
          v-slot="{ errors }"
        >
          <input type="number" name="number-guests" v-model="form.numberGuests"/>
          <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          name="date"
          rules="required"
          v-slot="{ errors }"
        >
          <label for="text">Dato<span class="red"> *</span></label>
          <input type="date" name="date" v-model="form.date"/>
          <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>

        <label for="text">Klokkeslett</label>
        <input type="time" name="time" v-model="form.time"/>

        <label for="text">Din estimerte utgift</label>
        <input type="text" name="expence" placeholder="kr.." v-model="form.price"/>

        <label for="text">Har du noen spesielle krav?</label>
        <textarea
          name="message"
          id="enquire-venue-message"
          placeholder="melding.."
          v-model="form.message"
          cols="30"
          rows="10"
        ></textarea>

        <button class="btn--right" type="submit">
          send forespørsel
        </button>
        <modal
          class="modal"
          name="my-modal"
          @click.self="$modal.hide('my-modal')"
          :adaptive="true"
        >
          <p>Takk for din forespørsel!</p>
        </modal>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import Header from "../components/Header";
import axios from "axios";

export default {
  name: "EnquireVenuePage",
  components: {
    "my-header": Header,
  },
  data() {
    return {
      email: "",
      venue: {
        venuename: ""
      },
      id: this.$route.params.id,
      form: {
        name: "",
        email: "",
        phone: "",
        selected: "",
        sitting: "",
        standing: "",
        numberGuests: "",
        date: "",
        time: "",
        message: "",
        price: ""
      }
    };
  },
  async mounted() {
    const response = await axios.get(`/venues/${this.$route.params.id}`);

    this.venue = response.data;
  },
  methods: {
    onSubmit() {
      // show modal
      this.$modal.show("my-modal");
      // send email to venue.email
    },
  },
};
</script>

<style lang="scss">
#events {
  width: 96%;
}
.modal {
  p {
    color: $dark;
    font-family: $heading-font-family;
    font-size: 1.3em;
    text-align: center;
    margin-top: 130px;
  }
}
</style>
