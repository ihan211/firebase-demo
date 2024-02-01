import { defineStore } from 'pinia'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { Notify } from 'quasar'

export const useFirebaseAuthStore = defineStore('firebaseAuth', {
    namespaced: true,
    state: () => ({
        user: {}
    }),

    getters: {
        isAuthenticated: (state) => Object.keys(state.user).length !== 0,
    },
    actions: {
        async signIn (email, password) {
            const auth = getAuth()
            await signInWithEmailAndPassword(auth, email, password)
                .then(user => {
                    if (user) {
                        this.user = user.user
                    } else {
                        throw new Error('Login failed')
                    }
                })
                .catch(error => {
                    console.log(error)
                    Notify.create({
                        type: 'negative',
                        message: 'Login failed'
                    })
                })
        },
        async signOut () {
            const auth = getAuth()
            await signOut(auth)
                .then(() => {
                    this.user = {}
                })
        }
    }
})
