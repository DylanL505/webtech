<template>
  <section class="admin">
    <div v-if="!loggedIn" class="login">
      <h2>Admin Login</h2>
      <input v-model="username" placeholder="Username" />
      <input v-model="password" placeholder="Password" type="password" />
      <button @click="login" class="loginbtn">Login</button>
      <p v-if="error" class="error">{{ error }}</p>
    </div>

    <div v-else class="dashboard">
      <h2>Welcome, Admin!</h2>
      <button @click="logout" class="logout">Logout</button>

      <div class="actions">
        <h3>Manage News</h3>

        <form @submit.prevent="addNews" class="form">
          <input v-model="newNews.name" placeholder="News Title" required />
          <input v-model="newNews.company" placeholder="Company" required />
          <button type="submit">Add News</button>
        </form>

        <ul class="news-list">
          <li v-for="(n, i) in news" :key="i">
            <strong>{{ n.name }}</strong> — {{ n.company }}
            <button @click="removeNews(i)">Remove</button>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const ADMIN_USER = 'admin'
const ADMIN_PASS = 'bump123'

const username = ref('')
const password = ref('')
const loggedIn = ref(localStorage.getItem('admin') === 'true')
const error = ref('')

const news = ref([
  { name: 'Penta injured during match with Solo Sikoa', company: 'WWE' },
  { name: 'AEW, NWA Trademark Battle Ends', company: 'AEW' },
  { name: 'TNA iMPACT! Preview: November 20, 2025', company: 'TNA' }
])

const newNews = ref({ name: '', company: '' })

function login() {
  if (username.value === ADMIN_USER && password.value === ADMIN_PASS) {
    loggedIn.value = true
    localStorage.setItem('admin', 'true')
    error.value = ''
  } else {
    error.value = 'Invalid credentials'
  }
}

function logout() {
  loggedIn.value = false
  localStorage.removeItem('admin')
}

function addNews() {
  news.value.push({ ...newNews.value })
  newNews.value.name = ''
  newNews.value.company = ''
}

function removeNews(i) {
  news.value.splice(i, 1)
}
</script>

<style scoped>
.admin {
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
}
.login, .dashboard {
  text-align: center;
}
input {
  margin: 0.5rem;
  padding: 0.5rem;
}
button {
  margin: 0.5rem;
  padding: 0.5rem 1rem;
}


.error {
  color: #2F773D;
}
.news-list {
  margin-top: 1rem;
  text-align: left;
}
.logout {
  background: #3F944F;
  color: white;
}

.logout:hover {
  background: #2F773D;
  color: white;
}

h1, h2 {
  color: #2F773D;
}

.loginbtn {
  background: #3F944F;
  color: white;
}

.loginbtn:hover {
  background: #2F773D;
  color: white;

}
</style>
