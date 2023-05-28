<script>
import { GetAllSiteConfig } from "../graphql/GetAllSiteConfig";
import { GetAllNavConfig } from "../graphql/GetAllNavConfig";
import ContactBtn from "./ContactBtn";

export default {
  name: "Nav",
  data({ $i18n }) {
    return {
      sticky: false,
      mobileToggle: false,
      i18NLocales: [],
      navConfigs: [],
      // siteConfig: [],
      localeName: $i18n.locales.find((i18n) => i18n.code === $i18n.locale).name,
    };
  },
  components: {
    ContactBtn,
  },
  apollo: {
    navConfigs: {
      prefetch: true,
      query: GetAllNavConfig,
      variables() {
        return { locale: this.$i18n.locale };
      },
      fetchPolicy: "no-cache",
    },
    siteConfigs: {
      prefetch: true,
      query: GetAllSiteConfig,
      variables() {
        return { locale: this.$i18n.locale };
      },
      fetchPolicy: "no-cache",
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 70) {
        this.sticky = true;
      } else if (window.scrollY < 70) {
        this.sticky = false;
      }
    },
  },
};
</script>

<template>
  <div>
    <header class="header-area">
      <div class="header-top-area">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 pr-0">
              <div class="header-top" style="height: 50px">
                <ul>
                  <!-- <li>
                    <nuxt-link to="mailto:needhelp@depoantalya.com"
                      ><i class="flaticon-message"></i> needhelp@depoantalya.com</a
                    >
                  </li> -->
                  <li>
                    <a href="callto:90 850 532 7671"
                      ><i class="flaticon-phone-call"></i> +90 850 532 7671</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/depoantalya/"
                      target="_blank"
                      ><i class="fa fa-instagram"></i>depoantalya</a
                    >
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/')">
                      <i class="flaticon-placeholder"></i> Antalya, Turkey
                    </nuxt-link>
                  </li>
                </ul>
                <div class="d-none d-sm-block footer-list">
                  <ContactBtn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="`main-header ${sticky ? 'sticky' : ''}`">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div
                class="main-header-item d-flex justify-content-between align-items-center w-100"
              >
                <div class="main-header-menus w-100 d-flex">
                  <div class="header-logo">
                    <nuxt-link :to="localePath(' ')">
                      <nuxt-img
                        loading="lazy"
                        placeholder="blur"
                        src="/assets/images/logo_small.svg"
                        alt="logo"
                        width="200px"
                        height="150px"
                        style="height: auto; z-index: 9999999999999999"
                      />
                    </nuxt-link>
                  </div>
                  <div
                    class="header-menu w-100 d-none d-lg-flex justify-content-between"
                  >
                    <ul>
                      <li
                        class="wow fadeInLeft animated title"
                        data-wow-duration="2s"
                        data-wow-delay="5s"
                        v-for="navConfigs in navConfigs.data"
                        v-bind:key="navConfigs.id"
                      >
                        <nuxt-link
                          :to="localePath(navConfigs.attributes.slug)"
                          exact-active-class="active"
                          inactive-class=""
                          >{{ navConfigs.attributes.navTitle }}</nuxt-link
                        >
                      </li>
                      <!-- <li>
                        <nuxt-link class="active" to="#">Anasayfa</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/about">Hakkımızda</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/events">Hizmetlerimiz</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/pricing">Depolar</nuxt-link>
                      </li>

                      <li><nuxt-link to="/contact">İletişim</nuxt-link></li> -->
                    </ul>
                    <ul class="mr-5">
                      <li>
                        <a>
                          <nuxt-img
                            loading="lazy"
                            placeholder="blur"
                            :src="`/assets/images/country/${$i18n.locale}.png`"
                            :alt="`${localeName}`"
                          />
                          {{ localeName }} <i class="fa fa-angle-down"> </i>
                        </a>

                        <ul class="sub-menu">
                          <li
                            v-if="availableLocales"
                            v-for="locale in availableLocales"
                            :key="locale.code"
                          >
                            <nuxt-link :to="switchLocalePath(locale.code)">
                              <nuxt-img
                                loading="lazy"
                                placeholder="blur"
                                :src="`/assets/images/country/${locale.code}.png`"
                                :alt="`${localeName}`"
                              />
                              {{ locale.name }}</nuxt-link
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="header-social d-flex align-items-center">
                  <ul class="d-none d-lg-block">
                    <!-- <li>
                      <nuxt-link to="$"><i class="fa fa-facebook-square"></i></nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="$"><i class="fa fa-twitter"></i></nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="$"><i class="fa fa-dribbble"></i></nuxt-link>
                    </li> -->
                    <!-- <li>
                      <nuxt-link to="$"><i class="fa fa-instagram"></i></nuxt-link>
                    </li> -->
                  </ul>
                  <div
                    @click="mobileToggle = !mobileToggle"
                    class="toggle-btn ml-30 canvas_open d-lg-none d-block"
                  >
                    <i class="fa fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div :class="`off_canvars_overlay ${mobileToggle ? 'active' : ''}`"></div>
    <div class="offcanvas_menu">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div
              :class="`offcanvas_menu_wrapper ${mobileToggle ? 'active' : ''}`"
            >
              <div class="canvas_close">
                <a
                  @click="mobileToggle = !mobileToggle"
                  href="javascript:void(0)"
                  ><i class="fa fa-times"></i
                ></a>
              </div>
              <div class="offcanvas-social">
                <div class="header-logo">
                  <nuxt-link :to="localePath('/')">
                    <nuxt-img
                      loading="lazy"
                      placeholder="blur"
                      src="/assets/images/logo_small.svg"
                      alt="logo"
                      width="200px"
                      height="150px"
                      style="height: auto; z-index: 9999999999999999"
                    />
                  </nuxt-link>
                </div>
              </div>
              <div id="menu" class="text-left">
                <ul class="offcanvas_main_menu">
                  <li
                    v-for="navConfigs in navConfigs.data"
                    v-bind:key="navConfigs.id"
                  >
                    <nuxt-link
                      :to="localePath(navConfigs.attributes.slug)"
                      exact-active-class="active"
                      inactive-class=""
                      >{{ navConfigs.attributes.navTitle }}</nuxt-link
                    >
                  </li>
                </ul>
              </div>
              <div class="offcanvas_footer">
                <div class="row mb-20 justify-content-center">
                  <ul>
                    <nuxt-link
                      v-for="locale in availableLocales"
                      :key="locale.code"
                      :to="switchLocalePath(locale.code)"
                    >
                      <nuxt-img
                        loading="lazy"
                        placeholder="blur"
                        class="mx-3"
                        :src="`/assets/images/country/${locale.code}.png`"
                        :alt="`${localeName}`"
                        width="30px"
                        height="20px"
                      />
                    </nuxt-link>
                  </ul>
                </div>
                <div class="row d-flex flex-row mr-0 justify-content-center">
                  <span>
                    <a class="aicon" href="callto:90 850 532 7671"
                      ><i class="flaticon-phone-call"></i
                    ></a>

                    <a
                      class="aicon"
                      href="https://www.instagram.com/depoantalya/"
                      target="_blank"
                      ><i class="fa fa-instagram"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.aicon {
  height: 46px;
  width: 46px;
  text-align: center;
  line-height: 46px;
  border-radius: 50%;
  background: #fbf0ee;
  font-size: 14px;
  color: #817a78;
  margin-left: 5px;
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
}
</style>
