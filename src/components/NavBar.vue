
<template>
  <nav class="desktop-nav">
    <ul>
      <li v-for="link in navLinks" :key="link.path">
        <router-link :to="link.path" class="nav-item">{{ link.name }}</router-link>
      </li>
      <li>
        <router-link to="/admin" class="nav-item">Admin</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>

import {navLinks} from "../navigation.js";
</script>

<style scoped>
.desktop-nav {
  display: flex;
  justify-content: center;
  padding: 15px 0;
  background: #3F944F;
  border-bottom: 3px solid #2F773D;

}
ul {
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.nav-item {
  color: white;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.1rem;
}
.nav-item:hover {
  background-color: #2F773D;
  text-decoration: underline;
  cursor: pointer;
}
/* Hide on mobile */
@media (max-width: 900px) {
  .desktop-nav {
    display: none;
  }
}



</style>