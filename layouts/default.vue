<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  components: {},
  head({ $i18n }) {
    return {
      title: "Depo Antalya",
      htmlAttrs: {
        lang: $i18n.locale,
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
};
</script>

<style></style>
