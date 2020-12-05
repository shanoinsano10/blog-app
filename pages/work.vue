<template>
  <div id="page">
    <div class="has-yellow-orange-gradient-bg">
      <section class="section has-transparent-bg">
        <div class="container">
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="tile is-child notification has-transparent-bg">
                <div class="content has-text-white">
                  <p class="title is-1">Some recent work.</p>
                  <p class="subtitle">
                    I'm currently sketching out the details. Coming soon!
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
          <div class="tile is-ancestor"></div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import CloudsAnimation from '~/components/animations/CloudsAnimation'
import WaveAnimation from '~/components/animations/WaveAnimation'
export default {
  name: 'WorkPage',
  components: {
    CloudsAnimation,
    WaveAnimation,
  },
}
</script>
