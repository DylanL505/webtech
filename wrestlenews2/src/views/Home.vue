<script setup>

</script>

<template>
  <article>
    <h1>Welcome to Bump & Feed News</h1>
    <p>
      Are you a Pro Wrestling? Were you a Pro Wrestling Fan?
      Do you find it hard to keep up with all the Pro Wrestling News from every different Promotion?
      If so then we are the website you've been looking for!
    </p>

    <h2>What do we offer?</h2>

    <h3><a href="./News.vue">Current News</a></h3>
    <p>
      Missed the latest episode of your favorite Pro Wrestling Promotion?
      We promise to have the most up to date news from EVERY Pro Wrestling Promotion.
      Whether it WWE, AEW, TNA, NJPW, NOAH, or even your Local Indy Scene!
      We will have it!
    </p>

    <h3>Backstage Stories & Rumors</h3>
    <p>
      Did you hear what happened backstage? No?
      Well we did and we are going to keep you up to track with all the backstage news, stories and rumors!
    </p>

    <h3>Find out more about us!</h3>
    <button><a href="./About">About Us!</a></button>
  </article>
</template>

<style scoped>
h1, h2 {
  color: #2F773D;
}

a {
  color: white;
  text-decoration-line: none;
}

a:hover {
  color: white;
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
</style>