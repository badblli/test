<template>
  <div>
    <div
      v-for="aboutBannerConfigs in aboutBannerConfigs.data"
      v-bind:key="aboutBannerConfigs.id"
    >
      <head>
        <title>{{ aboutBannerConfigs.attributes.title }}</title>
      </head>
      <Nav />
      <PageHeader
        :title="`${aboutBannerConfigs.attributes.title}`"
        :banner="`${aboutBannerConfigs.attributes.banner.data.attributes.url}`"
        :slug1="`${aboutBannerConfigs.attributes.slug1}`"
        :slug2="`${aboutBannerConfigs.attributes.slug2}`"
      />
      <SpaceToMake />
      <WriteMessageThree />
      <!-- <GetToKnow /> -->
      <!-- <ChangingArea /> -->
      <!-- <Testimonial /> -->
      <!-- <JoinCommunity /> -->
      <!-- <Team /> -->
      <!-- <CompanyLogo /> -->
      <Footer />
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import GetToKnow from "../components/GetToKnow";
import SpaceToMake from "../components/SpaceToMake";
import ChangingArea from "../components/ChangingArea";
import Testimonial from "../components/Testimonial";
import JoinCommunity from "../components/JoinCommunity";
import Team from "../components/Team";
import WriteMessageThree from "../components/WriteMessageThree";
import CompanyLogo from "../components/CompanyLogo";
import Footer from "../components/Footer";
import { GetAboutBanner } from "../graphql/GetAboutBanner";
export default {
  components: {
    Footer,
    CompanyLogo,
    WriteMessageThree,
    Team,
    JoinCommunity,
    Testimonial,
    ChangingArea,
    GetToKnow,
    SpaceToMake,
    PageHeader,
    Nav,
  },
  head() {
    return {
      title: this.title,
    };
  },
  data() {
    return {
      aboutBannerConfigs: [],
    };
  },
  apollo: {
    aboutBannerConfigs: {
      prefetch: true,
      query: GetAboutBanner,
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
