<template>
  <div id="layout">
    <b-navbar :close-on-click="true" spaced class="is-blue-jeans">
      <template slot="brand">
        <b-navbar-item
          ref="navbar"
          tag="router-link"
          :to="{ path: '/' }"
          class="navbar-logo-item"
        >
          <img src="@/assets/logo-white.svg" alt="Wave logo icon" />
          <h4 class="title is-4 has-text-white has-margin-before">
            Shane Earley
          </h4>
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item
          tag="router-link"
          :to="'/'"
          class="navbar-item"
          exact-active-class="is-active"
          >Home</b-navbar-item
        >
        <b-navbar-item
          tag="router-link"
          :to="'/work'"
          class="navbar-item"
          exact-active-class="is-active"
          >Work</b-navbar-item
        >
        <!-- <b-navbar-item
          tag="router-link"
          :to="'/sandbox'"
          class="navbar-item"
          exact-active-class="is-active"
          >Sandbox</b-navbar-item
        > -->
      </template>
    </b-navbar>

    <section class="main-content">
      <nuxt />
    </section>

    <AppFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  async mounted() {
    const waves = await fetch(
      'https://services.surfline.com/kbyg/spots/reports?spotId=5842041f4e65fad6a77089e9'
    ).then((res) => res.json())
    this.$store.commit('setWaves', waves)
  },
  head() {
    return {
      title: `Shane Earley | ${this.$route.name === 'index' ? 'Home' : 'Work'}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Portfolio site for Shane Earley Product Development',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.main-content {
  position: relative;
  overflow-x: hidden;
}

nav.navbar.is-fixed-top {
  z-index: 3000 !important;
}

.navbar-logo-item {
  background: transparent !important;
}
.has-margin-before {
  margin-left: 0.5em;
}
.link-icon {
  display: inline-block;
}
.footer {
  padding-bottom: 3rem;
}
.footer-icon path {
  fill: #226699;
}
.has-white-box-shadow {
  z-index: 1000;
  border-radius: 50%;
  box-shadow: 0 250px 500px #fff; /* outer white */
}
.has-white-blue-gradient-bg {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(85, 172, 238, 1) 75%
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
.has-text-sapphire-blue {
  color: #226699;
}
.has-white-border {
  border: 1px solid white;
  border-radius: 4px;
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
p a img {
  max-width: 5em;
  padding-left: 0.25em;
}
.section-concave-up {
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
}
.section-concave-down {
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}
.padded-article {
  padding: 1rem !important;
}
</style>
