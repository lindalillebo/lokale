<template>
  <div>
    <my-header></my-header>

    <div>
      <h2>kontakt oss</h2>
    </div>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form
        class="form-container form-container__contact"
        @submit.prevent="handleSubmit(onSubmit)"
      >
        <h4>
          Har du noen spørsmål? <br />
          Send oss en melding her:
        </h4>

        <ValidationProvider name="your name" rules="required|alpha" v-slot="{ errors }">
          <input type="text" name="name" placeholder="ditt navn" v-model="name"/>
          <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
          <input type="email" name="email" placeholder="e-post addresse" v-model="email"/>
          <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider name="message" rules="required|alpha" v-slot="{ errors }">
          <textarea
            name="message"
            id="message"
            placeholder="din melding"
            cols="30"
            rows="10"
            v-model="message"
          ></textarea>
          <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>

        <button type="submit">send</button>
        <modal
          class="modal"
          name="my-modal"
          @click.self="$modal.hide('my-modal')"
          :adaptive="true"
        >
          <p>Takk for din melding!</p>
        </modal>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "ContactPage",
  components: {
    "my-header": Header,
  },
  methods: {
    onSubmit() {
      // Show modal
      this.$modal.show("my-modal");
      // Send mail to owner
    },
  },
};
</script>

<style lang="scss">
// Tablet
@media (min-width: 600px) and (max-width: 1020px) {
}

// Desktop
@media (min-width: 1020px) {
}
</style>
