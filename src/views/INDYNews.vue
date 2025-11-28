<script setup>

</script>

<template>
  <h1>Independent Wrestling</h1>
  <h2>Recent Independent Wrestling News!</h2>
  <h3>Steven Borden Wins In His Independent Wrestling Debut!</h3>
  <img src="https://pwponderings.com/wp-content/uploads/2025/11/screenshot_20251122_000400_trillertv.jpg?w=723">
  <button><router-link to="news/indy/indynews1" class="btn">Read More</router-link></button>
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