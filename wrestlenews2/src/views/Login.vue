<template>
  <div class="page">
    <div class="card">
      <h2 class="title">Login</h2>

      <form v-if="!submitted" @submit.prevent="submit">
        <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="input"
        />

        <input
            v-model="password"
            type="password"
            placeholder="Password"
            class="input"
        />

        <button type="submit" class="btn">
          Login
        </button>
      </form>

      <div v-else class="thank-you">
        Thank you for logging in!
        <button><a href="./">Return Home</a></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const email = ref("")
const password = ref("")
const submitted = ref(false)

function submit() {
  submitted.value = true
}
</script>

<style scoped>
.page {
  background: white;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  background: white;
  padding: 30px;
  border-radius: 14px;
  width: 320px;
  box-shadow: 0px 4px 15px rgba(0,0,0,0.15);
}

.title {
  color: #2F773D;
  margin-bottom: 20px;
  text-align: center;
}

.input {
  width: 100%;
  padding: 10px;
  border: 2px solid #3F944F;
  border-radius: 8px;
  margin-bottom: 12px;
}

.btn {
  width: 100%;
  padding: 10px;
  background: #3F944F;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
}

.btn:hover {
  background: #2F773D;
}

.thank-you {
  color: #3F944F;
  font-size: 20px;
  text-align: center;
  padding: 20px 0;
}
a {
  text-decoration-line: none;
  color: white;
}

.thank-you button {
  background-color: #3F944F;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  border-radius: 0.4rem;
  font-size: 1rem;
}

.thank-you button:hover {
  background-color: #2F773D;
}

</style>
