<script lang="ts">
import { defineComponent } from 'vue'
import Tokenizer from '@/tokenizer'
import { testapikey } from '@/docs/helpers/testkeys'

export default defineComponent({
  name: 'Sections',
  data () {
    return {
      exampleFull: (null as any),
      exampleFullResponse: ''
    }
  },
  mounted () {
    this.exampleFull = new Tokenizer({
      url: 'http://localhost:8082',
      apikey: testapikey,
      container: document.querySelector('#exampleFull') as HTMLDivElement,
      submission: (resp: any) => {
        this.exampleFullResponse = resp
      },
      settings: {
        payment: {
          showTitle: true
        },
        user: {
          showInline: true,
          showName: true,
          showEmail: true,
          showPhone: true,
          showTitle: true
        },
        shipping: {
          show: true,
          showTitle: true
        },
        billing: {
          show: true,
          showTitle: true
        }
      }
    })
  }
})
</script>

<style lang="scss">
  .full {
    .exampleFull {
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
  <div class="main full">
    <pre class="example-code">
      <code class="language-javascript">
        // Example Code
        var example = new Tokenizer({
          url: '', // Optional - Only pass if using a different domain than your on
          apikey: 'key here',
          container: document.querySelector('#div container'),
          submission: (resp) => {
            console.log(resp)
          },
          settings: {
            // User section settings
            user: {
              showInline: true, // show user info in single line - default false
              showName: true, // Ask for Name - default false
              showEmail: true, // Ask for Email - default false
              showPhone: true, // Ask for Phone Number - default false
              showTitle: true // Show section title
            },

            // Shipping section settings
            shipping: {
              show: true, // Show shipping section - default false
              showTitle: true // Show section title
            },

            // Billing section settings
            billing: {
              show: true, // Show billing section - default false
              showTitle: true // Show section title
            },

            // Payment section settings
            payment: {
              showTitle: true, // Show section title
              placeholderCreditCard: '', // Placeholder text for credit card input field
              showExpDate: true, // Show expiration date
              showCVV: true // Show CVV
            }
          }
        })
      </code>
    </pre>

    <div class="section exampleFull">
      <div id="exampleFull" />
      <button @click="exampleFull.submit()">
        Pay
      </button>
      <pre>{{ exampleFullResponse }}</pre>
    </div>
  </div>
</template>
