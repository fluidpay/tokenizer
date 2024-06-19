<script lang="ts">
import { defineComponent } from 'vue'
import Tokenizer from '@/tokenizer'
import { testapikey } from '@/docs/helpers/testkeys'
import { AutoPayResult } from "@/tokenizer/types";

export default defineComponent({
  name: 'ApplePay',
  data () {
    return {
      example: (null as any),
      autoPayResponse: '',
      submitResponse: '',
      applePayOpts: {
        autoPayResult: 'success' as AutoPayResult
      }
    }
  },
  mounted () {
    this.example = new Tokenizer({
      apikey: testapikey,
      url: '',
      container: this.$refs.example as HTMLDivElement,
      submission: (resp: any) => {
        this.submitResponse = resp
      },
      settings: {
        payment: {
          showTitle: true,
          types: ['apple_pay'],
          applePay: {
            key: 'cppdkrpuevgm8uqsmjng',
            autoPay: async (e): Promise<AutoPayResult> => {
              this.autoPayResponse = JSON.stringify(e.payment, null, 2)
              return this.applePayOpts.autoPayResult || 'success'
            },
            payment: {
              countryCode: 'US',
              currencyCode: 'USD',
              total: {
                label: 'Total',
                amount: '10.00',
              },
              requiredBillingContactFields: ['email', 'name', 'phone', 'postalAddress'],
              requiredShippingContactFields: ['email', 'name', 'phone', 'postalAddress'],
              lineItems: [
                {
                  label: 'Tax',
                  amount: '1.00',
                },
                {
                  label: 'Product 1',
                  amount: '2.00',
                }
              ]
            }
          }
        }
      }
    })
  }
})
</script>

<style lang="scss">
  .home {
    .section {
      .fieldset {
        & > label {
          margin-right: 20px;
        }
      }

      .example {
        display: flex;
        flex-flow: column;
        margin: 20px 0 20px 0;

        & > label {
          font-weight: bold;
          margin: 20px 0 20px 0;
        }
      }
    }
  }
</style>

<template>
  <div class="main home">
    <pre>
      <code class="language-javascript">
        // Example Code
        var example = new Tokenizer({
          apikey: 'key here',
          container: document.querySelector('#div container'),
          submission: (resp) => {
            console.log(resp)
          },
          settings: {
            processorId: '', // optional
            payment: {
              types: ['apple_pay'],
              applePay: {
                // required
                key: '',
                // required
                autoPay: async (data: ApplePayAutoPayEvent): Promise&lt;AutoPayResult&gt; => {
                  // sending the data to your api and processing it
                  return '{{ applePayOpts.autoPayResult }}'
                },
                // optional
                appleMerchantID: '',
                // optional
                domainName: '',
                // optional, default 5
                version: 5,
                // required
                payment: {
                  // required
                  countryCode: 'US',
                  // required
                  currencyCode: 'USD',
                  // required
                  total: {
                    label: 'Total',
                    amount: '10.00',
                  },
                  // optional, default 'supports3DS'
                  merchantCapabilities: ['supports3DS'],
                  // optional, default ['amex', 'chinaUnionPay', 'discover', 'interac', 'masterCard', 'privateLabel', 'visa', 'jcb', 'cartesBancaires', 'eftpos', 'electron', 'elo', 'maestro', 'vPay', 'mada']
                  supportedNetworks: ['visa', 'mastercard', 'amex'],
                  // optional
                  requiredBillingContactFields: ['email', 'name', 'phone', 'postalAddress'],
                  // optional
                  requiredShippingContactFields: ['email', 'name', 'phone', 'postalAddress'],
                  // optional
                  supportedCountries: ['US'],
                  // optional
                  lineItems: [
                    {
                      label: 'Tax',
                      amount: '1.00',
                    },
                    {
                      label: 'Product 1',
                      amount: '2.00',
                    }
                  ]
                }
              }
            }
          }
        })
      </code>
    </pre>

    <div class="section">
      <div class="fieldset">
        <label>Apple Pay Result:</label>
        <select v-model="applePayOpts.autoPayResult">
          <option value="success">
            Success
          </option>
          <option value="fail">
            Fail
          </option>
        </select>
      </div>
    </div>
    <div class="section apple-pay-example">
      <div ref="example" />
      <div v-if="submitResponse" class="example">
        <label class="title">Submit Result</label>
        <pre>{{ submitResponse }}</pre>
      </div>
      <div v-if="autoPayResponse" class="example">
        <label class="title">AutoPay event value</label>
        <pre>{{ autoPayResponse }}</pre>
      </div>
    </div>
  </div>
</template>
