<template>
  <q-page class="flex flex-center bg-grey-2">
    <q-card class="q-pa-md shadow-2 login_card" bordered>
      <q-card-section class="text-center">
        <div class="text-grey-9 text-h5 text-weight-bold">Sign in</div>
        <div class="text-grey-8">Sign in below to access your account</div>
      </q-card-section>
      <q-card-section>
        <q-input dense outlined v-model="email" label="Email Address"></q-input>
        <q-input dense outlined class="q-mt-md" v-model="password" type="password" label="Password"></q-input>
      </q-card-section>
      <q-card-section>
        <q-btn style="
border-radius: 8px;" color="dark" rounded size="md" label="Sign in" no-caps class="full-width" @click="signin"></q-btn>
      </q-card-section>
      <q-card-section class="text-center q-pt-none">
        <div class="text-grey-8">Don't have an account yet?
          <a @click="goSignUp" class="text-dark text-weight-bold" style="text-decoration: none">Sign
            up.</a></div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref, defineComponent } from 'vue'
import { mapGetters, mapActions } from 'pinia'
import { useFirebaseAuthStore } from 'stores/auth'
import { Notify } from 'quasar'

export default defineComponent({
  name: 'SingInPage',
  setup () {
    const store = useFirebaseAuthStore()
    return {
      email: ref(''),
      password: ref(''),
      store
    }
  },
  computed: {
    ...mapGetters(useFirebaseAuthStore, ['isAuthenticated'])
  },
  methods: {
    ...mapActions(useFirebaseAuthStore, ['signIn']),
    signin () {
      if (!this.email || !this.password) {
        Notify.create({
            type: 'negative',
            message: 'Email and password required'
        })
        return
      }

      this.signIn(this.email, this.password)
      .then(() => {
        if (this.isAuthenticated) {
          this.$router.push('/chat')
        }
      })
    },
    goSignUp () {
      this.$router.push('/signup')
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
