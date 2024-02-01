# Firebase Chat App (firebase-chat-app)

A firebase chat example app

## version
Use node v20.5.0 (npm v9.6.7)

## Install the dependencies
```bash
yarn
# or
npm install
```


```bash
npm install -g @quasar/cli
```


### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Lint the files
```bash
yarn lint
# or
npm run lint
```


### Format the files
```bash
yarn format
# or
npm run format
```



### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

## Install Firestore
```bash
firebase init firestore
```

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  /home/your-directory/firebase/vue-firebase-chat-example/firebase-chat-app

Before we get started, keep in mind:

  * You are initializing within an existing Firebase project directory


=== Account Setup

Which account do you want to use for this project? Choose an account or add a new one now

? Please select an option: first.last@example.com

✔  Using account: first.last@example.com

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add, 
but for now we'll just set up a default project.

i  Using project fir-demo-eb75c (firebase-demo)

=== Firestore Setup

Firestore Security Rules allow you to define how and when to allow
requests. You can keep these rules in your project directory
and publish them with firebase deploy.

? What file should be used for Firestore Rules? firestore.rules

Firestore indexes allow you to perform complex queries while
maintaining performance that scales with the size of the result
set. You can keep index definitions in your project directory
and publish them with firebase deploy.

? What file should be used for Firestore indexes? firestore.indexes.json

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

✔  Firebase initialization complete!



```bash
firebase deploy --only firestore
```
=== Deploying to 'fir-demo-eb75c'...

i  deploying firestore
i  firestore: reading indexes from firestore.indexes.json...
i  cloud.firestore: checking firestore.rules for compilation errors...
✔  cloud.firestore: rules file firestore.rules compiled successfully
i  firestore: deploying indexes...
✔  firestore: deployed indexes in firestore.indexes.json successfully for (default) database
i  firestore: latest version of firestore.rules already up to date, skipping upload...
✔  firestore: released rules firestore.rules to cloud.firestore

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/fir-demo-eb75c/overview
