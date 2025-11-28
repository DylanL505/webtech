<template>
  <nav class="mobile-nav">
    <!-- Hamburger Button -->
    <button class="menu-btn" @click="toggleMenu" aria-label="Toggle menu">
      <span :class="['bar', { open: isOpen }]"></span>
      <span :class="['bar', { open: isOpen }]"></span>
      <span :class="['bar', { open: isOpen }]"></span>
    </button>
    <!-- Sliding Menu -->
    <Transition name="slide">
      <ul v-if="isOpen" class="menu-list">
        <li v-for="link in navLinks" :key="link.path">
          <router-link :to="link.path" @click="closeMenu">{{ link.name }}</router-link>
        </li>
      </ul>
    </Transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { navLinks } from '@/navigation.js'
const isOpen = ref(false)
const toggleMenu = () => isOpen.value = !isOpen.value
const closeMenu = () => isOpen.value = false
</script>

<style scoped>
.mobile-nav {
  display: none;
  padding: 15px;
  border-bottom: 3px solid steelblue;
}
/* Hamburger icon */
.menu-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.bar {
  width: 28px;
  height: 3px;
  background: #333;
  border-radius: 3px;
  transition: 0.3s ease;
}
/* "X" animation */
.bar.open:nth-child(1) { transform: translateY(8px) rotate(45deg); }
.bar.open:nth-child(2) { opacity: 0; }
.bar.open:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

/* Sliding menu */
.menu-list {
  background: white;
  border-top: 1px solid #ccc;
  list-style: none;
  padding: 10px 0;
  margin: 0;
}
.menu-list li {
  padding: 12px 20px;
}
.menu-list a {
  color: #333;
  font-weight: bold;
  text-decoration: none;
}
.menu-list a:hover {
  color: steelblue;
}

.slide-enter-active{
  max-height: 0;
  opacity: 0; }

.slide-leave-to {
  max-height: 0;
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.slide-enter-to,
.slide-leave-from {
  max-height: 300px;
  opacity: 1;
}
/* Only show on mobile */
@media (max-width: 900px) {
  .mobile-nav {
    display: block;
  }
}
</style>