<template>
  <figure class="image is-1by1">
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
  name: 'WorkSlider',
  components: {},
  data() {
    return {
      workLogos: [
        {
          name: 'Consensus Networks',
          src: 'consensus',
        },
        {
          name: 'Fundmazing',
          src: 'fundmazing',
        },
        {
          name: 'Otter Therapies',
          src: 'otter',
        },
        {
          name: 'Sonaphi',
          src: 'sonaphi',
        },
        {
          name: 'Tattoo Studio',
          src: 'tattoostudio',
        },
        {
          name: 'Vital View Technologies',
          src: 'vitalview',
        },
      ],
      timer: null,
      currentIndex: 0,
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
</style>
