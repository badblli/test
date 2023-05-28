<template>
  <section class="explore-depoantalya-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="explore-depoantalya-title text-center">
            <h3 class="title">Explore depoantalya spaces</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-lg-6"
          v-for="depoConfigs in depoConfigs.data"
          v-bind:key="depoConfigs.id"
        >
          <div class="explore-depoantalya-item mt-50">
            <div class="row">
              <div class="col-12">
                <nuxt-img
                  loading="lazy"
                  :src="`https://strapi.badblli.dev${depoConfigs.attributes.image.data.attributes.url}`"
                  :alt="`${depoConfigs.attributes.image.data.attributes.name}`"
                  width="300"
                  height="200"
                />
              </div>
              <div class="col-12">
                <h3 class="title">
                  {{ depoConfigs.attributes.title }} -
                  <span>{{ depoConfigs.attributes.size }}</span>
                </h3>
                <span>{{ depoConfigs.attributes.metrekare }}</span>
                <p>{{ depoConfigs.attributes.description }}</p>
                <div
                  class="best-creative-list-item"
                  style="margin-bottom: 20px"
                >
                  <ul>
                    <li
                      v-for="feature in depoConfigs.attributes.item.features"
                      :key="feature"
                    >
                      <i
                        class="fa fa-check"
                        style="color: #e25303; padding-right: 28px"
                      ></i
                      >{{ feature }}
                    </li>
                  </ul>
                </div>
                <ContactBtn style="display: flex; justify-content: end" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { GetDepoConfig } from "../graphql/GetDepoConfig";
import ContactBtn from "@/components/ContactBtn.vue";

export default {
  name: "Explore",
  components: {
    ContactBtn,
  },
  data() {
    return {
      depoConfigs: [],
    };
  },

  apollo: {
    depoConfigs: {
      prefetch: true,
      query: GetDepoConfig,
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

<style scoped></style>
