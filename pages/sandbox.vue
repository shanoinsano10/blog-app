<template>
  <div id="page">
    <div class="has-blue-jeans-bg">
      <section class="section has-transparent-bg">
        <b-tabs
          v-model="activeTab"
          class="has-sapphire-blue-bg has-text-white"
          position="is-centered"
        >
          <b-tab-item label="Draw">
            <DrawTabItem />
          </b-tab-item>

          <b-tab-item label="Graph">
            <GraphTabItem />
          </b-tab-item>
        </b-tabs>
      </section>
    </div>
  </div>
</template>

<script>
import DrawTabItem from '@/components/sandbox/DrawTabItem'
import GraphTabItem from '@/components/sandbox/GraphTabItem'

export default {
  name: 'SandboxPage',
  components: {
    DrawTabItem,
    GraphTabItem,
  },
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
    }
  },
  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch()
    }
  },
}
</script>

<style lang="scss">
.b-tabs {
  border-radius: 4px;
}
.tabs ul {
  border-bottom-color: #aebbc1 !important;
}
.tabs li a {
  border-bottom-color: #aebbc1 !important;
  color: #aebbc1 !important;
}
.tabs li.is-active a {
  border-bottom-color: #fff !important;
  color: #fff !important;
}
</style>
