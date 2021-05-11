<template>
  <div id="page">
    <div class="has-blue-jeans-bg">
      <section class="section has-transparent-bg">
        <div class="container">
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="tile is-child padded-article has-transparent-bg">
                <div class="content has-text-centered">
                  <p class="title is-1 has-text-white">Some content.</p>
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
    <div class="has-sapphire-blue-bg blog-wrapper">
      <div class="has-white-bg blog-card">
        <div>
          <section class="section">
            <div class="container blog-container">
              <div class="tile">
                <div class="tile">
                  <article
                    class="tile has-text-left has-cultured-bg padded-article rounded-article full-width-article"
                  >
                    <div class="content">
                      <p class="subtitle">Working on it...</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
          <hr />
        </div>
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
import AppContact from '@/components/layout/AppContact.vue'

export default {
  name: 'BlogPage',
  components: {
    AppContact,
  },
  data() {
    return {
      activeTab: 0,
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
hr {
  border-top: 8px solid #f5f5f5;
  border-radius: 4px;
  width: 90%;
  margin: auto;
}

.blog-wrapper {
  padding: 1rem;
}

.blog-card {
  border-radius: 4px;
  max-width: 800px;
  margin: auto;
}

.blog-container {
  padding: 4rem 0;
}

.blog-image-article {
  padding: 0 2rem 2rem 2rem;
}

.blog-image {
  max-width: 256px;
  width: 100%;
  margin: auto;
}

.blog-image img {
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
