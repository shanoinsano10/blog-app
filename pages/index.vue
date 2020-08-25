<template>
  <div>
    <section class="section has-blue-jeans-bg">
      <div class="container">
        <div class="tile is-ancestor is-reversed-mobile">
          <div class="tile is-parent">
            <article class="tile is-child notification is-blue-jeans">
              <div class="content">
                <p class="title">Hi, I'm Shane.</p>
                <p
                  class="subtitle"
                >I'm a software engineer based in New Hampshire. Currently, I develop applications for startups and local businesses. I enjoy the intersection of computation and human-centered design, so I'm always looking to work with companies that are helping people with unique digital products.</p>
                <!-- <div class="content has-text-centered">
                  <b-button type="is-primary">More About Me</b-button>
                </div>-->
              </div>
            </article>
          </div>
          <div class="tile is-vertical is-4">
            <div class="tile">
              <div class="tile is-parent">
                <article class="tile is-child notification is-blue-jeans">
                  <figure class="image is-1by1">
                    <img src="~/assets/logo-white-512x512.svg" />
                  </figure>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <svg class="wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#226699"
        fill-opacity="1"
        d="M0,224L48,192C96,160,192,96,288,101.3C384,107,480,181,576,213.3C672,245,768,235,864,213.3C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
    <section class="section has-sapphire-blue-bg">
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-4">
            <div class="tile">
              <div class="tile is-parent">
                <article class="tile is-child notification is-sapphire-blue">
                  <Tools />
                </article>
              </div>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-sapphire-blue">
              <div class="content">
                <p class="title">What can I do?</p>
                <p
                  class="subtitle"
                >I mainly do full-stack JS application development, but I've also worked with a range of software building things from algorithms to websites. Ultimately, I take pride in mastering the best tools to bring products to life. I love collaborating with teams, and I can also work solo.</p>
                <!-- <div class="content has-text-centered">
                  <b-button type="is-blue-jeans">Some of My Work</b-button>
                </div>-->
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    <svg class="wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#fff"
        fill-opacity="1"
        d="M0,96L48,106.7C96,117,192,139,288,154.7C384,171,480,181,576,176C672,171,768,149,864,149.3C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
    <section class="section">
      <div class="container">
        <div class="tile is-ancestor is-reversed-mobile has-text-centered">
          <div class="tile is-vertical is-2 is-hidden-mobile">
            <div class="tile">
              <div class="tile is-parent">
                <article class="tile is-child notification is-white">
                  <!-- <figure class="image is-1by1">
                    <img src="~/assets/feather-reg-512x512.svg" />
                  </figure>-->
                </article>
              </div>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-white">
              <div class="content">
                <p class="title">Say hello.</p>
                <p class="subtitle">Share questions or feedback. I'm available for contract work.</p>
                <div class="content">
                  <div class="box is-shadowless has-text-centered">
                    <button
                      class="button is-blue-jeans is-medium footer-button"
                      @click="cardModal()"
                    >
                      <b-icon pack="fas" icon="envelope" />
                      <span>Send a message</span>
                    </button>
                    <a
                      class="button is-sapphire-blue is-medium footer-button"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="/Shane_Earley_Resume_August_2020.pdf"
                    >
                      <b-icon pack="fas" icon="external-link-alt" />
                      <span>View my resume</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div class="tile is-vertical is-2 is-hidden-mobile">
            <div class="tile">
              <div class="tile is-parent">
                <article class="tile is-child notification is-white">
                  <!-- <figure class="image is-1by1">
                    <img src="~/assets/feather-reg-512x512.svg" />
                  </figure>-->
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <svg class="wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#AEBBC1"
        fill-opacity="1"
        d="M0,32L48,64C96,96,192,160,288,176C384,192,480,160,576,160C672,160,768,192,864,224C960,256,1056,288,1152,293.3C1248,299,1344,277,1392,266.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
</template>

<script>
import Tools from '~/components/Tools'
import Form from '~/components/Form'

export default {
  name: 'HomePage',
  components: {
    Tools,
    Form,
  },
  data() {
    return {}
  },
  methods: {
    cardModal() {
      this.$buefy.modal.open({
        parent: this,
        component: Form,
        hasModalCard: true,
        trapFocus: true,
      })
    },
  },
}
</script>

<style scoped>
.has-blue-jeans-bg {
  background: #55acee;
}
.has-sapphire-blue-bg {
  background: #226699;
}
.has-silver-sand-bg {
  background: #aebbc1;
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
.wave-svg:nth-of-type(1) {
  background: #55acee;
}
.wave-svg:nth-of-type(2) {
  background: #226699;
}
.wave-svg:nth-of-type(3) {
  background: #fff;
}
</style>