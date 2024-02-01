<template>
  <q-page class="flex flex-center bg-grey-2">
    <q-card class="q-pa-md shadow-2 login_card" bordered>
      <q-card-section class="text-center">
        <div class="text-grey-9 text-h5 text-weight-bold">Sign up</div>
        <div class="text-grey-8">Create an account</div>
      </q-card-section>
      <q-card-section>
        <q-input dense outlined v-model="email" label="Email Address"></q-input>
        <q-input dense outlined class="q-mt-md" v-model="password" type="password" label="Password"></q-input>
        <q-input dense outlined class="q-mt-md" v-model="password2" type="password" label="Confirm Password"></q-input>
      </q-card-section>
      <q-card-section>
        <q-btn style="
border-radius: 8px;" color="dark" rounded size="md" label="Sign up" no-caps class="full-width" @click="signUp"></q-btn>
      </q-card-section>
      <q-card-section class="text-center q-pt-none">
        <div class="text-grey-8">Already have an account.
          <a @click="goSignIn" class="text-dark text-weight-bold" style="text-decoration: none">Sign
            in.</a></div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref, defineComponent } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { Notify } from 'quasar'

export default defineComponent({
  name: 'SignUpPage',
  setup () {
    return {
      email: ref(''),
      displayName: ref(''),
      password: ref(''),
      password2: ref(''),
    }
  },
  methods: {
    signUp () {
      if (!this.email || !this.password) {
        Notify.create({
            type: 'negative',
            message: 'Email and password required'
        })
        return
      }
      if (this.password !== this.password2) {
        Notify.create({
            type: 'negative',
            message: 'Password mismatch'
        })
        return
      }
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          /*
          result.user.updateProfile({
            displayName: document.getElementById("name").value
          })
          */
          this.goSignIn()
        })
        .catch((error) => {
          Notify.create({
              type: 'negative',
              message: 'Sign up failed'
          })
        })
    },
    goSignIn () {
      this.$router.push('/signin')
    }
  }
})
</script>

<style>
.login_card {
  width: 25rem;
  border-radius: 8px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}
</style>
