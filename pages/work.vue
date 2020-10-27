<template>
  <div id="container">
    <div class="has-yellow-orange-gradient-bg">
      <section class="section has-transparent-bg">
        <div class="container">
          <div class="tile is-ancestor is-reversed-mobile">
            <div class="tile is-parent">
              <article class="tile is-child notification has-transparent-bg">
                <div class="content has-text-white">
                  <p class="title">Coming soon!</p>
                  <!-- <p class="subtitle">
                    <b>I'm a software engineer</b> based in New Hampshire.
                    Currently,
                    <b>I develop applications</b>
                    for startups and local businesses.
                    <b>I like to create positive impact</b>
                    through computation and design.
                  </p> -->
                  <!-- <div class="content has-text-centered">
                  <b-button type="is-primary">More About Me</b-button>
                </div>-->
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
      <svg
        class="wave-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#226699"
          fill-opacity="1"
          d="M0,224L48,192C96,160,192,96,288,101.3C384,107,480,181,576,213.3C672,245,768,235,864,213.3C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
    <div class="has-sapphire-blue-bg">
      <section class="section has-transparent-bg">
        <div class="container">
          <div class="tile is-ancestor">
            <!-- <div class="tile is-vertical is-4">
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
                  <p class="title">How can I help?</p>
                  <p class="subtitle">
                    I mainly do full-stack JS application development, but I've
                    also built things from sensor algorithms to landing pages. I
                    enjoy mastering the best tools for each job so
                    <b> I can help bring products to life</b>.
                  </p>
                </div>
              </article>
            </div> -->
          </div>
        </div>
      </section>
      <!-- <svg
        class="wave-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,96L48,106.7C96,117,192,139,288,154.7C384,171,480,181,576,176C672,171,768,149,864,149.3C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkPage',
  components: {},
}
</script>
