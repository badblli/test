<template>
  <div>
    <div
      v-for="servicesBannerConfigs in servicesBannerConfigs.data"
      v-bind:key="servicesBannerConfigs.id"
    >
      <head>
        <title>{{ servicesBannerConfigs.attributes.title }}</title>
      </head>
      <Nav />
      <PageHeader
        :title="`${servicesBannerConfigs.attributes.title}`"
        :banner="`${servicesBannerConfigs.attributes.banner.data.attributes.url}`"
        :slug1="`${servicesBannerConfigs.attributes.slug1}`"
        :slug2="`${servicesBannerConfigs.attributes.slug2}`"
      />
      <WeListen />
      <!-- <SpaceToMake /> -->
      <WriteMessageThree />
      <Footer />
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import UpcomingEventsTwo from "../components/UpcomingEventsTwo";
import WeListen from "../components/WeListen";
import SpaceToMake from "../components/SpaceToMake.vue";
import WriteMessageThree from "../components/WriteMessageThree";
import { GetServicesBanner } from "../graphql/GetServicesBanner";
export default {
  components: {
    WeListen,
    UpcomingEventsTwo,
    Footer,
    SpaceToMake,
    WriteMessageThree,
    PageHeader,
    Nav,
  },
  data() {
    return {
      servicesBannerConfigs: [],
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
  apollo: {
    servicesBannerConfigs: {
      prefetch: true,
      query: GetServicesBanner,
      variables() {
        return {
          locale: this.$i18n.locale,
        };
      },
      fetchPolicy: "no-cache",
    },
  },
};
</script>
