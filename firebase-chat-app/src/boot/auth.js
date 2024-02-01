import { boot } from 'quasar/wrappers'
import { getAuth, connectAuthEmulator } from 'firebase/auth'

export default boot(({ app, router, Vue, store }) => {
  router.beforeEach((to, from, next) => {
    // Check to see if the route has the meta field "authRequired" set to true
    const auth = getAuth()
    /*
    if (process.env.DEV) {
      connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true })
    }
    */

    let authRequired = to.matched.some(route => route.meta.authRequired)
    let isAuthenticated = auth.currentUser !== null

    if (authRequired) {
      if (isAuthenticated) {
        // User is already signed in. Continue on.
        next()
      } else {
        // Not signed in. Redirect to login page.
        next({
          name: 'signin'
        })
      }
    } else {
      // Doesn't require authentication. Just continue on.
      next()
    }
  })
})
