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
        <section v-for="(currentLogo, i) in workLogos" :key="i" class="section">
          <div class="container">
            <div class="tile">
              <div class="tile">
                <div class="tile">
                  <div class="tile">
                    <article
                      class="tile has-transparent-bg work-image-article has-text-centered"
                    >
                      <figure class="image work-image">
                        <img
                          class="work-logo"
                          :src="require(`~/assets/${currentLogo.src}-logo.svg`)"
                        />
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
    <div class="has-yellow-crayola-bg">
      <section class="section">
        <div class="container">
          <div class="tile is-ancestor has-text-centered">
            <div class="tile is-vertical is-2 is-hidden-mobile">
              <div class="tile">
                <div class="tile is-parent">
                  <article
                    class="tile is-child padded-article is-yellow-crayola"
                  ></article>
                </div>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child padded-article is-yellow-crayola">
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
                    class="tile is-child padded-article is-yellow-crayola"
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
import ContactForm from '~/components/modals/ContactForm.vue'
export default {
  name: 'WorkPage',
  components: {},
  async fetch() {
    this.waves = await fetch(
      'https://services.surfline.com/kbyg/spots/reports?spotId=5842041f4e65fad6a77089e9'
    ).then((res) => res.json())
    this.$store.commit('setWaves', this.waves)
  },
  data() {
    return {
      waves: {},
      activeTab: 0,
      workLogos: [
        {
          name: 'Consensus Networks',
          color: '#F06D38',
          site: 'https://consensusnetworks.com/',
          src: 'consensus',
          desc:
            ' builds advanced medical supply chain tools using Internet of Things, machine learning and blockchain. I have led development for their healthcare enterprise resource planning software.',
        },
        {
          name: 'Fundmazing',
          color: '#ED3A4C',
          site: 'https://fundmazing.online',
          src: 'fundmazing',
          desc:
            ' connects students and product distributors online to streamline school fundraising events. I have developed core features for the platform including payment handling from front to back.',
        },
        {
          name: 'Otter Therapies',
          color: '#66D3C1',
          site: 'https://ottertherapies.com',
          src: 'otter',
          desc:
            ' provides a care coordination platform for parents and caregivers of special needs children. As a technical co-founder, I have served as the head of engineering and developed the web and mobile applications.',
        },
        {
          name: 'Sonaphi',
          color: '#A85FEF',
          site: 'https://sonaphi.com',
          src: 'sonaphi',
          desc:
            ' is entering clinical trials for a voice-based COVID-19 screening tool. I have supported product management for the clinical platform and built multiple application versions for user testing.',
        },
        {
          name: 'Tattoo Studio',
          color: '#DCC2A3',
          site: 'https://tattoostudiopro.com/',
          src: 'tattoostudio',
          desc:
            ' streamlines the management of customers release forms and appointments for studio owners. I have developed core features including appointments scheduling and customer reminders.',
        },
        {
          name: 'Vital View',
          color: '#52C3D6',
          site:
            'https://ideacenter.nd.edu/news-events/news/the-idea-center-deploys-funding-to-advance-the-development-of-nascent-technologies/',
          src: 'vitalview',
          desc:
            ' is using advanced sensors to proactively monitor conditions like heart failure. I led product management and developed core algorithms for the first demoable prototype.',
        },
      ],
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

<style lang="scss" scoped>
.work-wrapper {
  padding: 1rem;
}
.work-card {
  border-radius: 4px;
  max-width: 800px;
  margin: auto;
  .section {
    border-bottom: 1px solid #aebbc1;
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
  height: 3em;
  background: #55acee;
  display: block;
}

svg:nth-of-type(1) path {
  fill: #226699;
  stroke: #226699;
}

svg:nth-of-type(2) {
  transform: rotate(180deg);
  height: 3em;
  background: #fff07c;
  display: block;
}

svg:nth-of-type(2) path {
  fill: #226699;
  stroke: #226699;
}
</style>
