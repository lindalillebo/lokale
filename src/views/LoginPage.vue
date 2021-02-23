<template>
  <div>
    <my-header></my-header>

    <ValidationObserver v-slot="{ handleSubmit }">
      <form
        class="form-container form-container__log-in margin-top"
        @submit.prevent="handleSubmit(onSubmit)"
      >
        <h2>logg inn</h2>

        <ValidationProvider name="email" rules="required" v-slot="{ errors }">
          <input
            type="email"
            name="email"
            placeholder="e-post adresse.."
            v-model="form.email"
          />
          <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider name="passord" rules="required" v-slot="{ errors }">
          <input
            type="password"
            name="password"
            placeholder="passord.."
            v-model="form.password"
          />
          <span class="error">{{ errors[0] }}</span>
        </ValidationProvider>

        <button type="submit">logg inn</button>

        <span class="small-text"
          >Har du ingen bruker? Registrer deg
          <router-link to="/add-venue">her</router-link></span
        >
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from "../components/Header";

export default {
  name: "LoginPage",
  components: {
    "my-header": Header,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    mounted() {},
    ...mapActions(["LogIn"]),
    async onSubmit() {
      const User = new FormData();
      User.append("email", this.form.email);
      User.append("password", this.form.password);

      console.log("User:" + JSON.stringify(User));

      try {
        await this.LogIn(User);

        this.$router.push("/change-venue");

        this.error = false;
      } catch (error) {
        this.error = true;
      }
    },
  },
};
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
    .checkbox {
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
        left: 3px;
        top: 0;
        width: 7px;
        height: 10px;
        border: solid $dark;
        border-width: 0 1px 1px 0;
        transform: rotate(40deg);
      }
    }
    .radio {
      position: absolute;
      top: 0;
      left: 0;
      width: 15px;
      height: 15px;
      background-color: #fff;
      border: 1px solid lighten($brown, 50%);
      border-radius: 50%;
      &::after {
        content: "";
        position: relative;
        display: none;
        left: 2px;
        top: 2px;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background-color: $brown;
      }
    }
    &:hover .checkbox,
    &:hover .radio {
      background-color: $beige;
    }
  }
  label input[type="checkbox"]:checked ~ .checkbox::after,
  label input[type="radio"]:checked ~ .radio::after {
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
       width: 95%;
    }
    input {
      margin-bottom: 35px;
    }
    h3 {
      text-align: left;
      margin: 40px auto 30px;
      width: 95%;
    }
    p {
      margin: 30px auto 15px;
      width: 95%;
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
       width: 95%;
    }
    input {
      margin-bottom: 35px;
    }
    h3 {
      text-align: left;
      margin: 40px auto 30px;
       width: 95%;
    }
    p {
      margin: 30px auto 15px;
      width: 95%;
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
