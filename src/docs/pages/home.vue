<script lang="ts">
import { defineComponent } from 'vue'
import Tokenizer from '@/tokenizer'
import { testapikey } from '@/docs/helpers/testkeys'

export default defineComponent({
  name: 'Home',
  data () {
    return {
      example: (null as any),
      exampleResponse: (null as null | any),
      validCard: (null as any)
    }
  },
  mounted () {
    this.example = new Tokenizer({
      apikey: testapikey,
      container: this.$refs.example as HTMLDivElement,
      submission: (resp: any) => { 
        this.exampleResponse = resp
      },
      validCard: (card: any) => {
        this.validCard = card
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

      pre {
        padding: 8px 0 0 0;
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
          url: '', // Optional - Only pass if using a different domain than your on
          apikey: 'key here',
          container: document.querySelector('#div container'),
          submission: (resp) => {
            console.log(resp)
          }
        })

        // Example submission
        function submit() {
          example.submit() // Use submission callback to deal with response
        }
      </code>
    </pre>

    <pre>
      <code class="language-html">
        // Example Html
        &lt;div id="container"&gt;&lt;&#47;div&gt;
        &lt;button onclick="submit()"&gt;Submit&lt;&#47;button&gt;
      </code>
    </pre>

    <div class="section example">
      <div ref="example" />
      <button @click="example.submit()">
        Pay
      </button>
      <pre>{{ exampleResponse }}</pre>
      <pre>{{ validCard }}</pre>
    </div>
  </div>
</template>
