<template>
	<div class="q-pa-xs">
	  <div style="height: 100%; width: 100%">
		<q-input dense filled clearable bg-color="white" v-model.trim="text" @keydown.enter.prevent="send"/>
	  </div>
	</div>
</template>

<script>
import { ref, defineComponent } from 'vue'
import { collection, addDoc, getFirestore, serverTimestamp } from "firebase/firestore"
import { useFirebaseAuthStore } from 'stores/auth'
import { mapState, mapGetters, mapActions } from 'pinia'

export default defineComponent({
  setup () {
    return {
      text: ref('')
    }
  },
  computed: {
	...mapState(useFirebaseAuthStore, ['user'])
  },
  methods: {
	send () {
		if (this.text === '') {
			return
		}

		const { uid, email, displayName, photoURL } = this.user
		const db = getFirestore()
		addDoc(collection(db, "messages"), {
  			uid,
			email,
			displayName,
			photoURL,
			createdAt: serverTimestamp(),
			text: this.text
		}).then((docRef) => {
			this.text = ''
		})
	}
  }
})
</script>