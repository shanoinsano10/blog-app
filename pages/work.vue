<template>
  <div id="page">
    <div class="has-blue-jeans-bg">
      <section class="section has-transparent-bg">
        <div class="container">
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="tile is-child padded-article has-transparent-bg">
                <div class="content has-text-centered">
                  <p class="title is-1 has-text-white">Some recent work.</p>
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
    <div class="has-sapphire-blue-bg work-wrapper">
      <div class="has-white-bg work-card">
        <section v-for="(currentLogo, i) in workData" :key="i" class="section">
          <div class="container">
            <div class="tile">
              <div class="tile">
                <div class="tile">
                  <div class="tile">
                    <article
                      class="tile has-transparent-bg work-image-article has-text-centered"
                    >
                      <figure class="image work-image">
                        <a :href="currentLogo.site" target="_blank">
                          <img
                            class="work-logo"
                            :src="
                              require(`@/assets/${currentLogo.src}-logo.svg`)
                            "
                            :aria-label="`The ${currentLogo.name} logo`"
                          />
                        </a>
                      </figure>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div class="tile">
              <div class="tile">
                <article class="tile has-transparent-bg">
                  <div class="content has-text-centered">
                    <p class="subtitle">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        :href="currentLogo.site"
                        class="is-primary"
                        :style="`color: ${currentLogo.color}; text-decoration: none;`"
                      >
                        <b>{{ currentLogo.name }}</b>
                      </a>
                      {{ currentLogo.desc }}
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
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
import WorkDataMixin from '@/mixins/WorkDataMixin'
import AppContact from '@/components/layout/AppContact.vue'

export default {
  name: 'WorkPage',
  components: {
    AppContact,
  },
  mixins: [WorkDataMixin],
  data() {
    return {
      activeTab: 0,
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.work-wrapper {
  padding: 1rem;
}
.work-card {
  border-radius: 4px;
  max-width: 800px;
  margin: auto;
  .section {
    border-bottom: 1px solid #f5f5f5;
    width: 90%;
    margin: auto;
  }
}
.work-image-article {
  padding: 2rem;
}
.work-image {
  max-width: 256px;
  width: 100%;
  margin: auto;
}
.work-image img {
  height: 100%;
  width: 100%;
}

svg:nth-of-type(1) {
  height: 2em;
  background: #55acee;
  display: block;
}

svg:nth-of-type(1) path {
  fill: #226699;
  stroke: #226699;
}

svg:nth-of-type(2) {
  transform: rotate(180deg);
  height: 2em;
  background: #f5f5f5;
  display: block;
}

svg:nth-of-type(2) path {
  fill: #226699;
  stroke: #226699;
}
</style>
