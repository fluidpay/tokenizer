<script lang="ts">
import { defineComponent } from 'vue'
import Tokenizer from '@/tokenizer'
import { testapikey } from '@/docs/helpers/testkeys'

export default defineComponent({
  name: 'Stripe',
  data () {
    return {
      example: {} as any,
      response: (null as null | any)
    }
  },
  mounted () {
    this.example = new Tokenizer({
      url: 'http://localhost:8082',
      apikey: testapikey,
      container: this.$refs.example as HTMLDivElement,
      settings: {
        payment: {
          // processorId: 'c8l7eaisahsmvusv5r9g',
          types: ['stripe'],
          stripe: {
            // https://stripe.com/docs/stripe-js/appearance-api
            appearance: {
              theme: 'night',
              variables: {},
              rules: {}
            }
          }
        }
      },
      submission: (resp: any) => {
        // const btn = document.getElementById('submit') as HTMLButtonElement
        this.response = resp
      }
    })
  },
  methods: {
    submit () {
      // const btn = document.getElementById('submit') as HTMLButtonElement
      this.example.submit()
    }
  }

})
</script>

<style lang="scss">
.threeds {
  .playground {
    padding: 16px;
    background: #fff;

    .line-item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 8px 0px 8px 0px;
      width: 100%;

      .label {
        align-self: center;
        padding-left: 16px;
        font-weight: bold;
      }

      .input {
        border: 1px solid #ddd;
        padding: 8px;
        border-radius: 4px;
      }
    }

    button {
      cursor: pointer;
      width: 100%;
      height: 30px;
      font-weight: bold;
      border: solid 1px #dcdee2;
      border-radius: 4px;
      background-color: #ffffff;
      padding: 5px 8px 5px 8px;
    }

    pre {
      padding: 8px 0 0 0;
    }
  }
}
</style>

<template>
  <div class="threeds">
    <pre>
      <code class="language-javascript">
        // Tokenizer
        var tokenizer = new Tokenizer({
          url: '', // Optional - Only pass if using a different domain than your on
          apikey: "api_12345",
          settings: {
            payment: {
              types: ['stripe'],
              stripe: {
                // https://stripe.com/docs/stripe-js/appearance-api
                appearance: {
                  theme: 'night',
                  variables: {},
                  rules: {}
                }
              }
            }
          },
          container: document.querySelector(".tokenizer-container"),
          submission: (response) => {
            // set the response
            state.response = response
          }
        })

        // Submit
        var submit = function() {
          // submit off to the tokenizer with the dollar amount
          tokenizer.submit()
        }
      </code>
    </pre>
    <div class="playground example">
      <div ref="example" class="payment" />
      <button id="submit" type="button" class="button" @click="submit()">
        Checkout
      </button>
      <pre>{{ response }}</pre>
    </div>
  </div>
</template>
