<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    {{ firebaseData }}
  </div>
</template>

<script>
import { db } from './firebase';
const documentPath = 'contacts/jeff';

export default {
  name: 'App',
  data() {
    return {
      firebaseData: null,
    }
  },

  firestore() {
    return {
      firebaseData: db.doc(documentPath),
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<!-- <template>
  <div id="app">
    {{ firebaseData }}
  </div>
</template>

<script>
import { db } from './firebase';
const documentPath = 'contacts/jeff';

export default {
  data() {
    return {
      firebaseData: null,
    }
  },

  firestore() {
    return {
      firebaseData: db.doc(documentPath),
    }
  },
};
</script> -->