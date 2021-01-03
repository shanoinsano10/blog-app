<template>
  <div id="page">
    <div class="has-white-blue-gradient-bg">
      <section class="section has-transparent-bg">
        <div class="container">
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="tile is-child padded-article has-transparent-bg">
                <div class="content">
                  <p class="title is-1 has-text-white">
                    Small waves of impact.
                  </p>
                  <p class="subtitle has-text-white">
                    Hi, I'm Shane. I'm a software engineer based in New
                    Hampshire who enjoys developing digital products with
                    purpose-driven startups and local businesses.
                  </p>
                </div>
              </article>
            </div>
            <div class="tile is-vertical is-4">
              <div class="tile">
                <div class="tile is-parent">
                  <article
                    class="tile is-child padded-article has-transparent-bg"
                  >
                    <figure class="image is-1by1 has-white-box-shadow">
                      <img src="@/assets/logo-colors.svg" />
                    </figure>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CloudsAnimation />
      <WaveAnimation />
    </div>
    <div class="has-sapphire-blue-bg">
      <section class="section has-transparent-bg">
        <div class="container">
          <div class="tile is-reversed-mobile is-ancestor">
            <div class="tile is-vertical is-4">
              <div class="tile">
                <div class="tile is-parent">
                  <article
                    class="tile is-child padded-article is-sapphire-blue"
                  >
                    <WorkAnimation />
                  </article>
                </div>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child padded-article is-sapphire-blue">
                <div class="content">
                  <p class="title has-text-white">How can I help?</p>
                  <p class="subtitle has-text-white">
                    I mainly build applications, but I also design things from
                    algorithms to websites. Along the way, I've been lucky to
                    work with some great entrepreneurs and companies.
                  </p>
                  <b-button
                    size="is-medium"
                    class="is-primary is-light"
                    inverted
                    outlined
                    icon-right="arrow-circle-right"
                    tag="router-link"
                    to="/work"
                  >
                    Learn more
                  </b-button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path d="M0 100 C40 0 60 0 100 100 Z" />
    </svg>
    <div class="has-yellow-crayola-bg">
      <section class="section">
        <div class="container">
          <div class="tile is-ancestor has-text-centered">
            <div class="tile is-vertical is-2 is-hidden-mobile">
              <div class="tile">
                <div class="tile is-parent">
                  <article
                    class="tile is-child notification is-yellow-crayola"
                  ></article>
                </div>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-yellow-crayola">
                <div class="content">
                  <p class="title has-text-sapphire-blue">Say hello.</p>
                  <p class="subtitle has-text-sapphire-blue">
                    I would love to hear about your project.
                  </p>
                  <div class="content">
                    <div
                      class="box is-shadowless has-text-centered has-yellow-crayola-bg"
                    >
                      <b-button
                        size="is-medium"
                        class="is-sapphire-blue"
                        outlined
                        icon-left="envelope"
                        @click="cardModal()"
                      >
                        Send a message
                      </b-button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div class="tile is-vertical is-2 is-hidden-mobile">
              <div class="tile">
                <div class="tile is-parent">
                  <article
                    class="tile is-child notification is-yellow-crayola"
                  ></article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import WorkAnimation from '@/components/animations/WorkAnimation'
import CloudsAnimation from '@/components/animations/CloudsAnimation'
import WaveAnimation from '@/components/animations/WaveAnimation'
import ContactForm from '@/components/modals/ContactForm'

export default {
  name: 'HomePage',
  components: {
    WorkAnimation,
    CloudsAnimation,
    WaveAnimation,
  },
  data() {
    return {
      waves: {},
    }
  },
  async mounted() {
    this.waves = await fetch(
      'https://services.surfline.com/kbyg/spots/reports?spotId=5842041f4e65fad6a77089e9'
    ).then((res) => res.json())
    this.$store.commit('setWaves', this.waves)
  },
  methods: {
    cardModal() {
      this.$buefy.modal.open({
        parent: this,
        component: ContactForm,
        hasModalCard: true,
        trapFocus: true,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
svg {
  transform: rotate(180deg);
  height: 3em;
  background: #fff07c;
  display: block;
}

svg path {
  fill: #226699;
  stroke: #226699;
}
</style>
