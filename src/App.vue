<template>
  <div>

    <Header />
    <NavBar />

    <main class="container">

      <aside id="sidebarB">
        <SidebarNews />
      </aside>

      <section>
        <Transition name="fade" mode="out-in">
          <router-view />
        </Transition>
      </section>

      <aside id="sidebarA">
        <SidebarLogin />
      </aside>

    </main>

    <Footer />

  </div>
</template>

<script setup>
  import Header from "./components/Header.vue";
  import NavBar from "@/components/NavBar.vue";
  import Home from "@/views/Home.vue";
  import SidebarLogin from "@/components/SidebarLogin.vue";
  import SidebarNews from "@/components/SidebarNews.vue";
  import Footer from "@/components/Footer.vue";
</script>

<style scoped>
/* Minimal, temporary layout just for Exercise 1 */
* { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, Arial, Helvetica, sans-serif; }
.container { display: grid; grid-template-columns: 1fr 320px; gap: 2rem; width: min(1100px, 92vw); margin: 2rem auto; }
@media (max-width: 900px) { .container { grid-template-columns: 1fr; } .sidebar { order: -1; } }
header img { height: 56px; }
header { padding: 1rem; border-bottom: 1px solid #d6e3f3; }
h1,h2,h3,p { margin: 0 0 .6rem; }
footer { padding: 1rem; text-align: center; border-top: 1px solid #d6e3f3; color: #244; }
a { color: #2a5b9e; }
</style>
