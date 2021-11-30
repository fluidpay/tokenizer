<script lang="ts">
import { defineComponent } from 'vue'
import Tokenizer from '@/tokenizer'
import { testapikey } from '@/docs/helpers/testkeys'

export default defineComponent({
  name: 'CalculateFees',
  data () {
    return {
      example: {} as any,
      amount: '1.00',
      response: (null as null | any),
      validCard: (null as null | any)
    }
  },
  mounted () {
    this.example = new Tokenizer({
      apikey: testapikey,
      amount: this.amount,
      container: this.$refs.example as HTMLDivElement,
      settings: {
        payment: {
          calculateFees: true
          // processorID: '123456'
        }
      },
      submission: (resp: any) => {
        this.response = resp
      },
      validCard: (resp: any) => {
        this.validCard = resp
      }
    })
  },
  methods: {
    submit () {
      this.example.submit(this.amount)
    }
  }

})
</script>

<style lang="scss">
.calculatefees {
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

    pre {
      padding: 8px 0 0 0;
    }
  }
}
</style>

<template>
  <div class="main calculatefees">
    <pre>
      <code class="language-javascript">
        // Tokenizer
        var tokenizer = new Tokenizer({
          apikey: apikey,
          amount: 1.00,
          container: this.$refs.example as HTMLDivElement,
          settings: {
            payment: {
              calculateFees: true,

              // optional - default will use default processor
              processorID: '12345'
            }
          },
          submission: (resp: any) => {
            console.log(resp)
          },
          validCard: (resp: any) => {
            console.log(resp)
          }
        })

        // Submit
        var submit = function() {
          // submit off to the tokenizer with the dollar amount
          tokenizer.submit()
        }
      </code>
    </pre>
    <div class="section example">
      <div ref="example" class="payment" />
      <button id="submit" type="button" class="button" @click="submit()">
        Checkout
      </button>
      <pre>{{ response }}</pre>
      <pre>{{ validCard }}</pre>
    </div>
  </div>
</template>
