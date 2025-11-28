<template>
  <section class="news">
    <h1>Wrestling News</h1>

    <h2>Select company</h2>

    <h3><router-link to="/news/wwe" class="selectComp">WWE</router-link></h3>
    <h3><router-link to="/news/aew" class="selectComp"> AEW</router-link></h3>
    <h3><router-link to="/news/tna" class="selectComp">TNA</router-link></h3>
    <h3><router-link to="/news/indy" class="selectComp">INDY</router-link></h3>

    <p>Explore news from everywhere in of the Pro Wrestling Space</p>

  </section>
</template>

<script setup>

</script>

<style scoped>
H1 {
  color: #2F773D;
  text-align: center;
}

H2 {
  color: #2F773D;
  text-align: center;
}

.selectComp {
  text-decoration-line: none;
  color: #3F944F;
}

.selectComp:hover {
  color: #2F773D;
}

p {
  font-weight: bold;
  text-align: center;
}
</style>