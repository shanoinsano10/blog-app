<template>
  <footer class="footer has-sapphire-blue-darkened-bg has-text-white">
    <div class="content has-text-centered">
      <div
        v-if="waves && waves.spot"
        class="content has-text-centered has-opaque-bg footer-card"
      >
        <p>
          <strong class="has-text-white"
            >Surf Report @ {{ waves.spot.name }}</strong
          >
        </p>
        <p>{{ waves.forecast.conditions.value | TitleCase }} Conditions</p>
        <p class="has-text-with-icons">
          <b-icon pack="fas" icon="water" size="is-small"></b-icon>
          {{
            waves.forecast.waveHeight.min +
            '-' +
            waves.forecast.waveHeight.max +
            'ft'
          }}
          |
          <b-icon pack="fas" icon="wind" size="is-small"></b-icon>
          {{ waves.forecast.wind.speed + 'kts' }}
          {{ waves.forecast.wind.direction | CardinalDirection }} |
          <b-icon pack="fas" icon="moon" size="is-small"> </b-icon>
          {{ waves.forecast.tide.next.type | TitleCase }}
          {{
            $moment.unix(waves.forecast.tide.next.timestamp).format('h:mm a')
          }}
        </p>
      </div>
    </div>
    <div class="content has-text-centered">
      <p>♡ Built with love in New Hampshire.</p>
      <p>
        © Copyright {{ year }} Shane Earley. All rights reserved. Various
        trademarks held by their respective owners.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
  computed: {
    waves() {
      return this.$store.state.waves
    },
  },
}
</script>

<style lang="scss" scoped>
p {
  font-size: 0.75em;
}
.footer-card {
  max-width: 600px;
  border-radius: 4px;
  margin: auto;
  padding: 1em;
}
.has-text-with-icons {
  display: flex;
  align-items: center;
  justify-content: center;
  .icon {
    margin: 0 0.3em;
  }
}
</style>
