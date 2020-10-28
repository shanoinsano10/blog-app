<template>
  <div>
    <b-navbar
      spaced
      :class="{
        'is-blue-jeans': $route.name === 'index',
        'is-mandarin': $route.name === 'work',
      }"
    >
      <template slot="brand">
        <b-navbar-item
          tag="router-link"
          :to="{ path: '/' }"
          class="navbar-logo-item"
        >
          <img src="~/assets/logo-white.svg" alt="Wave logo icon" />
          <h4 class="title is-4 has-text-white has-margin-before">
            Shane Earley
          </h4>
        </b-navbar-item>
      </template>
      <template slot="end">
        <nuxt-link :to="'/'" class="navbar-item" exact-active-class="is-active"
          >Home</nuxt-link
        >
        <nuxt-link
          :to="'work'"
          class="navbar-item"
          exact-active-class="is-active"
          >Work</nuxt-link
        >
      </template>
    </b-navbar>

    <section class="main-content">
      <nuxt />
    </section>

    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    }
  },
  head() {
    return {
      title: `Shane Earley | ${this.$route.name === 'index' ? 'Home' : 'Work'}`,
    }
  },
}
</script>

<style>
.navbar-logo-item {
  background: transparent !important;
}
.has-margin-before {
  margin-left: 0.5em;
}
.link-icon {
  display: inline-block;
}
.footer-icon path {
  fill: #226699;
}
.has-white-blue-gradient-bg {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(85, 172, 238, 1) 100%
  );
}
.has-yellow-orange-gradient-bg {
  background: rgb(255, 240, 124);
  background: linear-gradient(
    0deg,
    rgba(255, 240, 124, 1) 0%,
    rgba(239, 131, 84, 1) 100%
  );
}
.has-blue-jeans-bg {
  background: #55acee;
}
.has-sapphire-blue-bg {
  background: #226699;
}
.has-white-bg {
  background: #fff;
}
.has-silver-sand-bg {
  background: #aebbc1;
}
.has-yellow-crayola-bg {
  background: #fff07c;
}
.has-mandarin-bg {
  background: #ef8354;
}
.has-transparent-bg {
  background: transparent;
}
@media (max-width: 768px) {
  .is-reversed-mobile {
    flex-direction: column-reverse;
    display: flex;
  }
  .is-hidden-mobile {
    display: none;
  }
}
.devicon-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.devicon {
  padding-bottom: 5%;
  max-width: 25%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.devicon path {
  fill: #fff;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1.5s ease-in-out;
}
.footer-button {
  margin: 0.5em;
}
.wave-svg {
  display: block;
}
</style>
