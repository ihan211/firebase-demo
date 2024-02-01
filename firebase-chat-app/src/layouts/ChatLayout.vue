<template>
	<q-layout view="hHh lpr fff">
	  <q-header reveal>
        <q-toolbar>
			<q-space />
			<q-item-label>{{user.email}}</q-item-label>
			<q-btn icon="logout" flat dense @click="signout"/>
        </q-toolbar>
	  </q-header>
	  <q-page-container style="padding-top: 0px; padding-bottom: 0px;">
		<router-view />
	  </q-page-container>

	  <q-footer>
		<ChatInput />
      </q-footer>
	</q-layout>
  </template>
  
  <script>
  import { ref, defineComponent } from 'vue'
  import { mapState, mapGetters, mapActions } from 'pinia'
  import { useFirebaseAuthStore } from 'stores/auth'
  import ChatInput from '../components/ChatInput.vue'


  export default defineComponent({
	name: 'ChatLayout',
	setup () {
	  return {
		logoutDialog: ref(false)
	  }
	},
	components: {
		ChatInput
	},
	computed: {
    	...mapState(useFirebaseAuthStore, ['user']),
		...mapGetters(useFirebaseAuthStore, ['isAuthenticated'])
  	},
	methods: {
		...mapActions(useFirebaseAuthStore, ['signOut']),
		signout () {
			this.signOut().then(() => {
				if (!this.isAuthenticated) {
					this.$router.push('/signin')
				}
			})
		}
	}
  })
  </script>
  