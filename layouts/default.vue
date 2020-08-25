<template>
  <div>
    <b-navbar spaced :mobile-burger="false" class="is-blue-jeans">
      <template slot="brand">
        <!-- <b-navbar-item tag="router-link" :to="{ path: '/' }" class="logo-text"> -->
        <b-navbar-item tag="div" class="logo-text">
          <img src="~/assets/logo-white-512x512.svg" alt="Wave logo icon" />
          <h4 class="title is-4 has-text-white has-margin-before">Shane Earley</h4>
        </b-navbar-item>
      </template>
      <!-- <template slot="end">
        <nuxt-link :to="'/'" class="navbar-item" exact-active-class="is-active">Home</nuxt-link>
        <nuxt-link :to="'work'" class="navbar-item" exact-active-class="is-active">Work</nuxt-link>
        <nuxt-link :to="'about'" class="navbar-item" exact-active-class="is-active">About</nuxt-link>
      </template> -->
    </b-navbar>

    <section class="main-content">
      <nuxt />
    </section>

    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `Shane Earley | ${this.$route.name === 'index' ? 'Home' : this.$route.name === 'index' ? 'Work': 'About'}`,
    }
  },
  data() {
    return {
      items: [],
    }
  },
}
</script>

<style scoped>
.has-margin-before {
  margin-left: 0.5em;
}
.has-blue-jeans-bg {
  background: #55acee;
}
.has-sapphire-blue-bg {
  background: #226699;
}
.has-silver-sand-bg {
  background: #aebbc1;
}
.link-icon {
  display: inline-block;
}
.footer-icon path {
  fill: #226699;
}
</style>
