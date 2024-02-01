
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SignInPage.vue') },
      { name: 'login', path: 'login', component: () => import('pages/SignInPage.vue') },
      { name: 'signin', path: 'signin', component: () => import('pages/SignInPage.vue') },
      { name: 'signup', path: 'signup', component: () => import('pages/SignUpPage.vue') },
      {
        name: 'chat',
        path: 'chat',
        meta: {
          authRequired: true
        },
        component: () => import('layouts/ChatLayout.vue'),
        children: [
          { path: '', component: () => import('pages/ChatPage.vue') }
        ]
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
