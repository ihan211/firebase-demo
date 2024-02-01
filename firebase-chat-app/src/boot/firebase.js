import { boot } from 'quasar/wrappers'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCiDnL3vyUBZR4QO3xoxXAYnO9_eZTSI8o",
    authDomain: "fir-demo-eb75c.firebaseapp.com",
    databaseURL: "https://fir-demo-eb75c-default-rtdb.firebaseio.com",
    projectId: "fir-demo-eb75c",
    storageBucket: "fir-demo-eb75c.appspot.com",
    messagingSenderId: "762419316923",
    appId: "1:762419316923:web:ea6d842cdffeb2ce50c19e",
    measurementId: "G-4XCBYCR7LE"
}

export default boot(({ app }) => {
    const firebaseApp = initializeApp(firebaseConfig)
    const firebaseAuth = getAuth(firebaseApp)
    const firebaseFirestore = getFirestore(firebaseApp)
    app.config.globalProperties.$firebase = firebaseApp
    app.provide('firebase', firebaseApp)
})
