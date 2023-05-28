<template>
  <div>
    <div
      v-for="contactBannerConfigs in contactBannerConfigs.data"
      v-bind:key="contactBannerConfigs.id"
    >
      <Nav />
      <PageHeader
        :title="`${contactBannerConfigs.attributes.title}`"
        :banner="`${contactBannerConfigs.attributes.banner.data.attributes.url}`"
        :slug1="`${contactBannerConfigs.attributes.slug1}`"
        :slug2="`${contactBannerConfigs.attributes.slug2}`"
      />
      <!-- <ContactInfo /> -->
      <WriteMessageThree />
      <!-- <GMap /> -->
      <Footer />
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import ContactInfo from "../components/ContactInfo";
import WriteMessageThree from "../components/WriteMessageThree";
import GMap from "../components/GMap";
import { GetContactBanner } from "../graphql/GetContactBanner";
export default {
  components: {
    GMap,
    WriteMessageThree,
    ContactInfo,
    Footer,
    PageHeader,
    Nav,
  },
  head() {
    return {
      title: "depoantalya | Contact",
    };
  },
  data() {
    return {
      contactBannerConfigs: [],
    };
  },
  apollo: {
    contactBannerConfigs: {
      prefetch: true,
      query: GetContactBanner,
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
