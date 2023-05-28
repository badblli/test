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
      <WriteMessageTwo />
      <!-- <CompanyLogo /> -->
      <Footer />
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import WriteMessageTwo from "../components/WriteMessageTwo";
import CompanyLogo from "../components/CompanyLogo";
import { GetContactBanner } from "../graphql/GetContactBanner";
export default {
  components: {
    CompanyLogo,
    WriteMessageTwo,
    Footer,
    PageHeader,
    Nav,
  },
  head() {
    return {
      title: "depoantalya | Get in touch",
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
