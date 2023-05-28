<template>
  <section class="write-massage-area pb-120">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div
            class="write-massage-content"
            v-for="contacts in contacts.data"
            :key="contacts.id"
          >
            <div class="write-massage-title">
              <h3 class="title">{{ contacts.attributes.title }}</h3>
            </div>
            <div class="write-massage-input">
              <form @submit="submitForm">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="input-box mt-10">
                      <input
                        v-model="formData.name"
                        type="text"
                        required
                        :placeholder="`${contacts.attributes.name}`"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-box mt-10">
                      <input
                        v-model="formData.email"
                        type="email"
                        :placeholder="`${contacts.attributes.email}`"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-box mt-10">
                      <input
                        type="text"
                        required
                        v-model="formData.phone"
                        :placeholder="`${contacts.attributes.phoneTitle}`"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-box mt-10">
                      <input
                        type="text"
                        v-model="formData.subject"
                        :placeholder="`${contacts.attributes.subject}`"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="input-box mt-10">
                      <textarea
                        name="message"
                        id="#"
                        cols="30"
                        rows="10"
                        :placeholder="`${contacts.attributes.message}`"
                        v-model="formData.message"
                      ></textarea>
                      <button type="submit" class="main-btn main-btn-2">
                        {{ contacts.attributes.sendButton }}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="contact-info-area">
            <div class="contact-info">
              <div
                class="contact-info-content"
                v-for="siteConfigs in siteConfigs.data"
                :key="siteConfigs.id"
              >
                <!-- <h3 class="title">
                  Feel free to get in touch with depoantalya.
                </h3> -->

                <div class="row pt-110">
                  <div class="col-12 col-md-6">
                    <ul>
                      <li>
                        <nuxt-img
                          loading="lazy"
                          placeholder="blur"
                          src="/assets/images/icon/icon-1.png"
                          alt=""
                        />
                        {{ siteConfigs.attributes.address }}
                      </li>
                      <!-- <li>
                      <nuxt-img  loading="lazy" placeholder="blur" src="/assets/images/icon/icon-2.png" alt="" />
                      needhelp@depoantalya.com
                    </li> -->
                      <li>
                        <nuxt-img
                          loading="lazy"
                          placeholder="blur"
                          src="/assets/images/icon/icon-3.png"
                          alt=""
                        />+
                        {{ siteConfigs.attributes.phone }}
                      </li>
                      <li>
                        <nuxt-img
                          loading="lazy"
                          placeholder="blur"
                          src="/assets/images/icon/icon-4.png"
                          alt=""
                        />
                        7/24
                      </li>
                    </ul>
                  </div>
                  <div class="col-12 col-md-6">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.3355547331084!2d30.747456227642584!3d36.906240705232804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39bab9b347c63%3A0x22891f6a4c252745!2sProtalya%20Bilgi%20Teknolojileri!5e0!3m2!1str!2str!4v1672222493050!5m2!1str!2str"
                      style="border: 0"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <nuxt-img
                  loading="lazy"
                  placeholder="blur"
                  :src="`https://strapi.badblli.dev${siteConfigs.attributes.logo.data.attributes.url}`"
                  :alt="`${siteConfigs.attributes.logo.data.attributes.name}`"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { GetContact } from "../graphql/GetContact";
import { GetAllSiteConfig } from "../graphql/GetAllSiteConfig";
import gql from "graphql-tag";

export default {
  name: "WriteMessageThree",
  data() {
    return {
      contacts: [],
      siteConfigs: [],
      formSubmitted: false,
      formError: "",
      formData: {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    async submitForm() {
      const mutation = gql`
        mutation sendEmail(
          $name: String!
          $email: String!
          $phone: String
          $subject: String
          $message: String
        ) {
          createSendEmail(
            data: {
              name: $name
              email: $email
              phone: $phone
              subject: $subject
              message: $message
            }
          ) {
            data {
              attributes {
                name
                email
                phone
                subject
                message
              }
            }
          }
        }
      `;
      await this.$apollo.mutate({
        mutation: mutation,
        variables: {
          name: this.formData.name,
          email: this.formData.email,
          phone: this.formData.phone,
          subject: this.formData.subject,
          message: this.formData.message,
        },
      });
    },
  },
  apollo: {
    contacts: {
      prefetch: true,
      query: GetContact,
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
};
</script>

<style scoped></style>
