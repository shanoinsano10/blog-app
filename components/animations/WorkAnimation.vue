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
            ' builds advanced medical supply chain tools using Internet of Things, machine learning and blockchain. I have lead development for their healthcare enterprise resource planning software.',
        },
        {
          name: 'Fundmazing',
          color: '#ED3A4C',
          site: '',
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
          site: '',
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
