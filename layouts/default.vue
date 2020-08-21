<template>
  <b-navbar spaced shadow>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <span class="title is-4">Shane Earley</span>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item>
        <nuxt-link :to="'/'" exact-active-class="is-active">Home</nuxt-link>
      </b-navbar-item>
      <b-navbar-item>
        <nuxt-link :to="'work'" exact-active-class="is-active">Work</nuxt-link>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  head() { return { title: `Shane Earley | ${this.$route.name === 'index' ? 'Home' : 'Work'}` } },
  data() {
    return {
      items: [],
    }
  },
}
</script>
