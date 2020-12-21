<template>
  <div id="page">
    <div class="has-blue-jeans-bg">
      <section class="section has-transparent-bg">
        <div class="container">
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="tile is-child notification has-transparent-bg">
                <div class="content has-text-white has-text-centered">
                  <p class="title is-1">Some recent work.</p>
                  <p class="subtitle">
                    I'm still sketching out finer details and gathering links,
                    but check out these high-level blurbs on a few hand-picked
                    projects.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="has-sapphire-blue-bg work-wrapper">
      <div class="has-white-bg work-card">
        <section
          v-for="currentLogo in workLogos"
          :key="currentLogo"
          class="section"
        >
          <div class="container">
            <div class="tile">
              <div class="tile">
                <div class="tile">
                  <div class="tile">
                    <article
                      class="tile is-child has-transparent-bg has-text-centered"
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
                <article class="tile is-child notification has-transparent-bg">
                  <div class="content has-text-centered">
                    <p class="subtitle">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        :href="currentLogo.site"
                        class="is-primary"
                        :style="`color: ${currentLogo.color}; text-decoration: none;`"
                      >
                        {{ currentLogo.name }}
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
  </div>
</template>

<script>
export default {
  name: 'WorkPage',
  components: {},
  data() {
    return {
      workLogos: [
        {
          name: 'Consensus Networks',
          color: '#F06D38',
          site: 'https://consensusnetworks.com/',
          src: 'consensus',
          desc:
            ' builds intelligent medical supply chain management using Internet of Things, machine learning and blockchain. I have lead development for their healthcare enterprise resource planning software.',
        },
        {
          name: 'Fundmazing',
          color: '#ED3A4C',
          site: '',
          src: 'fundmazing',
          desc:
            ' connects schools directly with product distributors to make online fundraising a breeze. I have developed several features for the platform including payment handling and mobile continuous integration/continuous deployment.',
        },
        {
          name: 'Otter Therapies',
          color: '#1C1C4C',
          site: 'https://ottertherapies.com',
          src: 'otter',
          desc:
            ' provides a care coordination platform for parents and caregivers of special needs children. As a technical co-founder, I have served as the head of technology and built the web and mobile applications.',
        },
        {
          name: 'Sonaphi',
          color: '#A85FEF',
          site: 'https://sonaphi.com',
          src: 'sonaphi',
          desc:
            ' is entering clinical trials for a voice-based COVID-19 screening tool. I have built multiple applications for initial testing and I have recently led product management for the clinical platform.',
        },
        {
          name: 'Tattoo Studio',
          color: '#101112',
          site: 'https://tattoostudiopro.com/',
          src: 'tattoostudio',
          desc:
            ' digitizes and automates the management of customers, release forms and appointments for studio owners. I have built multiple features including a calendar with customer appointments and reminders.',
        },
        {
          name: 'Vital View',
          color: '#52C3D6',
          site: '',
          src: 'vitalview',
          desc:
            ' is using advanced sensors to proactively monitor conditions like heart failure. I led product management and developed core algorithms for the first demoable prototype.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.work-wrapper {
  padding: 3rem;
}
.work-card {
  border-radius: 8px;
  max-width: 800px;
  margin: auto;
  .section {
    border-bottom: 1px solid #aebbc1;
    width: 90%;
    margin: auto;
  }
}
.work-image {
  height: 256px;
  width: 256px;
  margin: auto;
}
.work-image img {
  height: 100%;
  width: 100%;
}
</style>
