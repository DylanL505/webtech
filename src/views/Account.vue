<template>
  <div class="p-8 text-center text-white bg-[#3F944F] min-h-screen flex flex-col items-center justify-center space-y-6">
    <h2 class="text-4xl font-bold">Account Page</h2>
    <h3 class="text-2xl font-semibold">Manage Your Info</h3>
    <p class="max-w-md text-lg">
      Update your account details to keep your profile current!
    </p>

    <div class="container bg-white text-[#2F773D] rounded-2xl shadow-xl p-6 w-full max-w-md space-y-4">
      <div>
        <label class="block text-sm font-medium mb-1">Name</label>
        <input
            v-model="name"
            type="text"
            class="w-full border border-[#3F944F] rounded-lg p-2 focus:outline-none"
        />
      </div>

      <div>
        <label class="block text-sm font-medium mb-1">Email</label>
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
}
</style>