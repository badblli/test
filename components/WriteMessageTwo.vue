<template>
  <section class="write-massage-area pb-120">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div
            class="write-massage-content"
            v-for="contacts in contacts.data"
            :key="contacts.id"
          >
            <div class="write-massage-title">
              <h3 class="title">{{ contacts.attributes.title }}</h3>
            </div>
            <div class="write-massage-input">
              <form @submit.prevent="submitForm">
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
                  <div class="col-lg-6">
                    <div class="input-box mt-10">
                      <select id="depo" name="depo" v-model="formData.depoSize">
                        <option value="" disabled selected hidden>Depo</option>
                        <option
                          style="height: 50px"
                          v-for="contacts in contacts.attributes.depo_configs
                            .data"
                          :key="contacts.id"
                          :value="
                            contacts.attributes.title +
                            ' ' +
                            contacts.attributes.size +
                            contacts.attributes.metrekare
                          "
                        >
                          {{ contacts.attributes.title }} -
                          {{ contacts.attributes.size }}
                          ( {{ contacts.attributes.metrekare }})
                        </option>
                      </select>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="input-box mt-10">
                      <input
                        v-model="formData.depoUnit"
                        type="number"
                        min="1"
                        max="50"
                        :placeholder="`${contacts.attributes.unit}`"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-box mt-10">
                      <input
                        type="date"
                        v-model="formData.date"
                        placeholder="Date"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-box mt-10">
                      <input
                        type="time"
                        v-model="formData.time"
                        placeholder="Time"
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
        <div class="col-lg-4">
          <div
            class="get-in-touch-info"
            v-for="siteConfigs in contacts.data"
            :key="siteConfigs.id"
          >
            <span>{{ siteConfigs.attributes.title2 }}</span>
            <p>
              {{ siteConfigs.attributes.description }}
            </p>
            <h3 class="title">
              <a
                style="color: #fff"
                :href="`callto:${siteConfigs.attributes.phone.data.attributes.phone}`"
                ><i class="flaticon-phone-call"></i> +{{
                  siteConfigs.attributes.phone.data.attributes.phone
                }}</a
              >
            </h3>
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
  name: "WriteMessageTwo",
  data() {
    return {
      contacts: [],
      formSubmitted: false,
      formError: "",
      formData: {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        depoSize: "",
        depoUnit: "",
        date: "",
        time: "",
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
          $date: String
          $time: String
          $depoSize: String
          $depoUnit: String
        ) {
          createSendEmail(
            data: {
              name: $name
              email: $email
              phone: $phone
              subject: $subject
              message: $message
              date: $date
              time: $time
              depoSize: $depoSize
              depoUnit: $depoUnit
            }
          ) {
            data {
              attributes {
                name
                email
                phone
                subject
                message
                date
                time
                depoSize
                depoUnit
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
          date: this.formData.date,
          time: this.formData.time,
          depoSize: this.formData.depoSize,
          depoUnit: this.formData.depoUnit,
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
