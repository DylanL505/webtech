<script setup>

</script>

<template>
  <h1>AEW</h1>
  <h2>Recent AEW News!</h2>
  <h3>AEW Signs Former WWE Champion</h3>
  <img src="https://d1fcaprh3kb5t7.cloudfront.net/wp-content/uploads/2025/10/07214220/G2s5ySjXQAAyfdN.jpeg">
  <button><router-link to="news/aew/aewnews1" class="btn">Read More</router-link></button>

</template>

<style scoped>
H1, h2 {
  color: #2F773D;
  text-align: center;
}

img {
  max-height: 500px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

button {
  background-color: #3F944F;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  border-radius: 0.4rem;
  font-size: 1rem;
  display: block;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
}


button:hover {
  background-color: #2F773D;
}

.btn {
  color: white;
  text-decoration-line: none;
}
</style>