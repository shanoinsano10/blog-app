<template>
  <figure class="image is-1by1 floating-animation">
    <img src="@/assets/laptop-white-color.svg" />
    <transition-group name="fade" tag="span">
      <a
        v-for="i in [currentIndex]"
        :key="i"
        :href="currentLogo.site"
        target="_blank"
        class="workicon-container"
      >
        <img
          :src="require(`@/assets/${currentLogo.src}-logo.svg`)"
          :alt="`The ${currentLogo.name} logo`"
          :aria-label="`The ${currentLogo.name} logo`"
          class="workicon"
        />
      </a>
    </transition-group>
  </figure>
</template>

<script>
import WorkDataMixin from '@/mixins/WorkDataMixin'
export default {
  name: 'WorkAnimation',
  components: {},
  mixins: [WorkDataMixin],
  data() {
    return {
      timer: null,
      currentIndex: 0,
    }
  },
  computed: {
    currentLogo() {
      return this.workData[Math.abs(this.currentIndex) % this.workData.length]
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

.has-cultured-bg {
  background: #f5f5f5;
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
