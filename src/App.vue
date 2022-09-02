<template>
  <div id="app">
    <h3>Firebase Data</h3>
    {{ firebaseData }}
    <h3>Form Data</h3>
    {{ formData }}
  <form class="form" @submit.prevent="updateFirebase()">
    <div class="form-group">
      <label for="name">Name:</label>
      <input 
        type="text" 
        class="form-control" 
        id="name" 
        aria-describedby="nameHelp" 
        placeholder="Your name"
        v-model="formData.name"
      >
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input 
        type="email" 
        class="form-control" 
        id="email" 
        aria-describedby="emailHelp" 
        placeholder="Your email"
        v-model="formData.email"
      >
    </div>
    <div class="form-group">
      <label for="phone">Phone:</label>
      <input 
        type="tel" 
        class="form-control" 
        id="phone" 
        aria-describedby="phone" 
        placeholder="Your phone"
        v-model="formData.phone"
      >
    </div>
    <div class="footer">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
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
      formData: {}
    }
  },

  firestore() {
    return {
      firebaseData: db.doc(documentPath),
    }
  },
  methods: {
    async updateFirebase() {
      try {
        await db.doc(documentPath).set(this.formData);
        this.state = 'synced';
      } catch(error) {
        this.errorMessage = JSON.stringify(error);
        this.state = 'error';
      }
    }
  },

  created: async function () {
    const docRef = db.doc(documentPath);
    let data = (await docRef.get()).data();
    if (!data) {
      data = {name:'',phone:'',email:''}
    } else {
      this.formData = data;
      this.state = 'synced';
    }
  },
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display:flex;
  flex-direction: column;
  align-items:center;
}
label {
    width:100%;
    text-align: start;
}
.form-group {
  display:flex;
  flex-direction:column;
  margin: 15px 0;
}
.form {
  display:flex;
  flex-direction: column;
  width:80%;
  margin-top:5%;
}
.footer {
  display:flex;
  justify-content: flex-end;
}
.btn {
   width: fit-content;
}
</style>
