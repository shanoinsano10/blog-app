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
  data() {
    return {
      activeTab: 0,
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
