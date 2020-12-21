<template>
  <figure class="image is-1by1 floating-animation">
    <img src="~/assets/laptop-white-color.svg" />
    <transition-group name="fade" tag="span" class="workicon-container">
      <img
        v-for="i in [currentIndex]"
        :key="i"
        :src="require(`~/assets/${currentLogo.src}-logo.svg`)"
        :alt="`The ${currentLogo.name} logo`"
        :aria-label="`The ${currentLogo.name} logo`"
        class="workicon"
      />
    </transition-group>
  </figure>
</template>

<script>
export default {
  name: 'WorkAnimation',
  components: {},
  data() {
    return {
      timer: null,
      currentIndex: 0,
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
          site: 'https://apps.apple.com/us/app/fundmazing/id1540990856',
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
          site:
            'https://esteem.nd.edu/experience/capstone-thesis/records/commercialization-of-non-contact-remote-heart-and-respiratory-rate-monitor-created-by-vital-view-technologies/',
          src: 'vitalview',
          desc:
            ' is using advanced sensors to proactively monitor conditions like heart failure. I led product management and developed core algorithms for the first demoable prototype.',
        },
      ],
    }
  },
  computed: {
    currentLogo() {
      return this.workLogos[Math.abs(this.currentIndex) % this.workLogos.length]
    },
  },
  mounted() {
    this.startSlide()
  },
  methods: {
    startSlide() {
      this.timer = setInterval(() => {
        this.currentIndex += 1
      }, 4000)
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

.workicon-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.workicon {
  padding-bottom: 20%;
  max-width: 30%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.workicon path {
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
.floating-animation {
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes floating {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 10px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
