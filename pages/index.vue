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
                    Let's build waves of impact.
                  </p>
                  <p class="subtitle has-text-white">
                    Hi, I'm Shane. I'm a software engineer based in New
                    Hampshire who enjoys developing products with people who
                    seek to make our lives better.
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
                    I build applications for the modern web using tools from IoT
                    to analytics to design. I've been very lucky to work with
                    some great teams along the way.
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
    <AppContact />
  </div>
</template>

<script>
import WorkAnimation from '@/components/animations/WorkAnimation'
import CloudsAnimation from '@/components/animations/CloudsAnimation'
import WaveAnimation from '@/components/animations/WaveAnimation'
import AppContact from '@/components/layout/AppContact'

export default {
  name: 'HomePage',
  components: {
    WorkAnimation,
    CloudsAnimation,
    WaveAnimation,
    AppContact,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
svg {
  transform: rotate(180deg);
  height: 2em;
  background: #f5f5f5;
  display: block;
}

svg path {
  fill: #226699;
  stroke: #226699;
}
</style>
