<template>
	<q-page class="flex flex-center">
		<div class="q-pa-md row justify-center" style="width: 100%; min-height: inherit;">
			<q-scroll-area style="width: 100%; min-height: inherit;">
				<div style="width: 100%; min-height: inherit;">
					<div v-for="message in messages" :key="message.id">
						<q-chat-message :name="message.displayName || message.email" :avatar="message.photoURL || 'https://cdn.quasar.dev/logo-v2/svg/logo-dark.svg'" :text="[message.text]" :sent="message.uid === user.uid"/>
					</div>
				</div>
			</q-scroll-area>
		</div>
	</q-page>
  </template>
  
  <script>
  import { ref, defineComponent } from 'vue'
  import { collection, getFirestore, query, orderBy, limit, where, onSnapshot } from "firebase/firestore"
  import { useFirebaseAuthStore } from 'stores/auth' 
  import { mapState } from 'pinia'

  
  export default defineComponent({
	name: 'ChatPage',
	setup () {
		let messages = ref([])
		return { messages }
	},
	computed: {
		...mapState(useFirebaseAuthStore, ['user'])
	},
	created () {
		const db = getFirestore()
		const q = query(
			collection(db, "messages"),
			orderBy("createdAt", "desc"),
    		limit(50)
		)

		onSnapshot(q, (querySnapshot) => {
			let messages = []
      		querySnapshot.forEach((doc) => {
				console.log(doc)
        		messages.push({ ...doc.data(), id: doc.id });
      		})
			this.messages = messages.reverse()
    	})
	}
  })
  </script>
  