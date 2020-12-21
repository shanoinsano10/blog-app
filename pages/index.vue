<template>
  <div id="page">
    <div class="has-white-blue-gradient-bg">
      <section class="section has-transparent-bg">
        <div class="container">
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="tile is-child notification has-transparent-bg">
                <div class="content has-text-white">
                  <p class="title is-1">
                    Building waves of impact.
                  </p>
                  <p class="subtitle">
                    Hi, I'm Shane. I'm a software engineer based in New
                    Hampshire who enjoys developing products with intentionally
                    driven people and businesses.
                  </p>
                </div>
              </article>
            </div>
            <div class="tile is-vertical is-4">
              <div class="tile">
                <div class="tile is-parent">
                  <article
                    class="tile is-child notification has-transparent-bg"
                  >
                    <figure class="image is-1by1">
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
                  <article class="tile is-child notification is-sapphire-blue">
                    <WorkAnimation />
                  </article>
                </div>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-sapphire-blue">
                <div class="content">
                  <p class="title">How can I help?</p>
                  <p class="subtitle">
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
  data() {
    return {}
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
