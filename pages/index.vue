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
                    Building waves of impact.
                  </p>
                  <p class="subtitle has-text-white">
                    Hi, I'm Shane. I'm a software engineer based in New
                    Hampshire who enjoys developing products with purpose driven
                    people and businesses.
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
                      <img src="~/assets/logo-colors.svg" />
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
                    I mainly develop full-stack apps, but I also build things
                    from algorithms to websites. Along the way, I've been lucky
                    to work with some great entrepreneurs and companies.
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
    <div class="has-yellow-crayola-bg">
      <section
        class="section has-sapphire-blue-bg section-concave-up"
      ></section>
    </div>
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
                  <p class="title">Say hello.</p>
                  <p class="subtitle">
                    I would love to hear about your project.
                  </p>
                  <div class="content">
                    <div
                      class="box is-shadowless has-text-centered has-yellow-crayola-bg"
                    >
                      <b-button
                        size="is-medium"
                        class="is-dark"
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
import WorkAnimation from '~/components/animations/WorkAnimation'
import CloudsAnimation from '~/components/animations/CloudsAnimation'
import WaveAnimation from '~/components/animations/WaveAnimation'
import ContactForm from '~/components/modals/ContactForm'

export default {
  name: 'HomePage',
  components: {
    WorkAnimation,
    CloudsAnimation,
    WaveAnimation,
  },
  async fetch() {
    this.waves = await fetch(
      'https://services.surfline.com/kbyg/spots/reports?spotId=5842041f4e65fad6a77089e9'
    ).then((res) => res.json())
    this.$store.commit('setWaves', this.waves)
  },
  data() {
    return {
      waves: {},
    }
  },
  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch()
    }
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
