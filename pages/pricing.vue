<template>
  <div>
    <div
      v-for="depoBannerConfigs in depoBannerConfigs.data"
      v-bind:key="depoBannerConfigs.id"
    >
      <Nav />
      <PageHeader
        :title="`${depoBannerConfigs.attributes.title}`"
        :banner="`${depoBannerConfigs.attributes.banner.data.attributes.url}`"
        :slug1="`${depoBannerConfigs.attributes.slug1}`"
        :slug2="`${depoBannerConfigs.attributes.slug2}`"
      />
      <!-- <PricingPage /> -->
      <Explore />
      <!-- <CallToActionTwo /> -->
      <Footer />
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import PricingPage from "../components/PricingPage";
import Explore from "../components/Explore";
import CallToActionTwo from "../components/CallToActionTwo";
import { GetDepoBanner } from "../graphql/GetDepoBanner";
export default {
  components: {
    CallToActionTwo,
    Explore,
    PricingPage,
    Footer,
    PageHeader,
    Nav,
  },
  head() {
    return {
      title: "depoantalya | Pricing",
    };
  },
  data() {
    return {
      depoBannerConfigs: [],
    };
  },
  apollo: {
    depoBannerConfigs: {
      prefetch: true,
      query: GetDepoBanner,
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
