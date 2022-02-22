<script lang="ts">
import { defineComponent } from 'vue'
import Tokenizer from '@/tokenizer'
import { testapikey } from '@/docs/helpers/testkeys'

export default defineComponent({
  name: 'Methods',
  data () {
    return {
      example: (null as Tokenizer | null),
      onLoad: false,
      validCard: (null as any),
      achOnChange: (null as any),
      magStripeSwipe: (null as any),
      submission: (null as any),
    }
  },
  mounted () {
    // Intiate a new tokenizer
    this.example = new Tokenizer({
      apikey: testapikey,
      container: document.querySelector('.methods .example-method'),

      // Callback to identify when iframe has been loaded
      onLoad: () => { this.onLoad = true },
      validCard: (card: any) => { this.validCard = card },
      achOnChange: (data: any) => { this.achOnChange = data },
      magStripeSwipe: (data: any) => { this.magStripeSwipe = data },
      submission: (resp: any) => { this.submission = resp },

      settings: {
        user: {
          showInline: true,
          showName: true,
          showTitle: true
        },
        payment: {
          showTitle: true,
          types: ['card', 'ach']
          // ach: {
          //   sec_code: 'ppd'
          // }
        }
      }
    })

    // Set expiration date on card payment
    this.example.setExpDate('09/12')

    // Submit payment
    this.example.submit()
  },
  methods: {
    // Submit payment
    submit () {
      if (this.example) {
        this.example.submit()
      }
    }
  }
})
</script>

<style lang="scss">
  .methods {
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
        margin: 0 0 16px 0;
      }

      .callback-title {
        font-size: 18px;
        font-weight: bold;
      }

      .items {
        display: flex;
        flex-direction: column;

        .item {
          display: flex;
          flex-direction: column;
          padding: 0 0 8px 0;

          .title {
            font-weight: bold;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="main methods">
    <pre>
      <code class="language-javascript">
        // Example Code
        var example = new Tokenizer({
          url: '', // Optional - Only pass if using a different domain than your on
          apikey: 'key here',
          container: document.querySelector('#div container'),

          // Callback to identify when iframe has been loaded
          onLoad: () => {
            console.log('iframe loaded')
          },

          // Callback to identify when a valid cc has been inputed
          validCard: (card: object) => {
            console.log(card)
            // card.isValid // Boolean
            // card.bin // Object of bin data

            // If you need to check if surchargable
            // Pass state and card bin data
            var isSurchargable = example.isSurchargeable(state, card.bin)
            console.log(isSurchargable)
          },

          achOnChange: (data: any) => { console.log(data) },
          
          magStripeSwipe: (data: any) => { console.log(data) },

          // Callback after payment was submitted
          submission: (resp) => {
            console.log(resp)
          }
        })

        // Set expiration date on card payment
        example.setExpDate('09/12')

        // Submit payment
        example.submit()
      </code>
    </pre>

    <div class="section example">
      <div class="example-method" />
      <button @click="submit()">
        Pay
      </button>

      <div class="callback-title">
        Callbacks
      </div>

      <div class="items">
        <div class="item">
          <div class="title">
            onLoad
          </div>
          <pre>{{ onLoad }}</pre>
        </div>

        <div class="item">
          <div class="title">
            validCard
          </div>
          <pre>{{ validCard }}</pre>
        </div>

        <div class="item">
          <div class="title">
            achOnChange
          </div>
          <pre>{{ achOnChange }}</pre>
        </div>

        <div class="item">
          <div class="title">
            magStripeSwipe
          </div>
          <pre>{{ magStripeSwipe }}</pre>
        </div>

        <div class="item">
          <div class="title">
            submission
          </div>
          <pre>{{ submission }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>
