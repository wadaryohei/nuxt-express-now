<template>
  <div class="container">
    <div>
      <h1 class="title">
        {{ response.title }}
      </h1>
      <p>{{ response.message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const baseURL =
      process.env.NODE_ENV === 'production'
        ? 'https://nuxt-express-now-universal-app.now.sh'
        : 'http://localhost:3000'
    const response = await $axios.get(`${baseURL}/api/hello`)
    return {
      response: response.data
    }
  },

  head() {
    return {
      title: this.response.message
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 40px;
  font-weight: bold;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
