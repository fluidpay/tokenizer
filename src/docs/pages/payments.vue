<script lang="ts">
import { defineComponent } from 'vue'
import Tokenizer from '@/tokenizer'
import { testapikey } from '@/docs/helpers/testkeys'

export default defineComponent({
  name: 'Payments',
  data () {
    return {
      example: (null as any),
      exampleResponse: ''
    }
  },
  mounted () {
    this.example = new Tokenizer({
      apikey: testapikey,
      container: this.$refs.example as HTMLDivElement,
      onPaymentChange: (type: string) => {
        // console.log(type)
      },
      submission: (resp: any) => {
        this.exampleResponse = resp
      },
      settings: {
        payment: {
          showTitle: true,
          types: ['card', 'ach', 'plaid', 'stripe'],
          ach: {
            sec_code: 'web',
            showSecCode: true
          },
          card: {
            strict_mode: false // Set to true to allow for 19 digit cards
          }
        }
      }
    })
  }
})
</script>

<style lang="scss">
  .home {
    .example {
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
              types: ['card', 'ach', 'plaid', 'stripe'], // Default ['card']
              ach: {
                sec_code: 'web', // Default web - web, ccd, ppd, tel
                showSecCode: false // Whether or not to show sec code field
              },
              card: {
                strict_mode: false // Set to true to allow for 19 digit cards
              }
            }
          }
        })
      </code>
    </pre>

    <div class="section example">
      <div ref="example" />
      <button @click="example.submit()">
        Pay
      </button>
      <pre>{{ exampleResponse }}</pre>
    </div>
  </div>
</template>
