<template>
  <div>
    <h2>Account Page</h2>
    <h3>Manage Your Info</h3>
    <h4>
      Update your account details to keep your profile current!
    </h4>

    <div class="input">
      <div>
        <label class="name">Name</label>
        <input
            v-model="name"
            type="text"
            class="w-full border border-[#3F944F] rounded-lg p-2 focus:outline-none"
        />
      </div>

      <div>
        <label class="email">Email</label>
        <input
            v-model="email"
            type="email"
            class="w-full border border-[#3F944F] rounded-lg p-2 focus:outline-none"
        />
      </div>

      <button
          @click="save"
          class="bg-[#2F773D] text-white px-6 py-3 rounded-xl shadow hover:bg-[#246330] transition w-full"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const name = ref("");
const email = ref("");

function save() {
  alert(`Saved: ${name.value}, ${email.value}`);
}
</script>

<style scoped>
a {
  text-decoration-line: none;
  color: white;
}

input {
  width: 100%;
  padding: 10px;
  border: 2px solid #3F944F;
  border-radius: 8px;
  margin-bottom: 12px;
}

button {
  background-color: #3F944F;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  border-radius: 0.4rem;
  font-size: 1rem;
}
button:hover {
  background-color: #2F773D;
}

h2 {
  color: #3F944F;
  text-align: center;
}
h3 {
  color: #2F773D;
  text-align: center;
}
h4 {
  color: #2F773D;
  text-align: center;
}

.name, .email {
  color: #2F773D;
  font-weight: bold;
}
</style>