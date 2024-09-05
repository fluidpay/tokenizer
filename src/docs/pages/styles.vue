<script lang="ts">
import { defineComponent } from 'vue'
import Tokenizer from '@/tokenizer'
import { testapikey } from '@/docs/helpers/testkeys'

export default defineComponent({
  name: 'Styles',
  data () {
    return {
      exampleBubble: (null as any),
      exampleBubbleResponse: '',

      exampleLine: (null as any),
      exampleLineResponse: ''
    }
  },
  mounted () {
    this.exampleBubble = new Tokenizer({
      url: 'http://localhost:8082',
      apikey: testapikey,
      container: document.querySelector('#exampleBubble') as HTMLDivElement,
      submission: (resp: any) => {
        this.exampleBubbleResponse = resp
      },
      settings: {
        styles: {
          body: {
            color: '#ffffff'
          },
          input: {
            color: '#ffffff',
            'border-radius': '8px',
            'background-color': 'rgba(255, 255, 255, .2)',
            border: 'none'
          }
        }

        // Oleg - mywell styles - Oct 31, 2023
        // styles: {
        //   "#app": {
        //     padding: "5px 15px",
        //   },
        //   select: {
        //     padding: "6px 4px",
        //   },
        //   ".fieldsetrow": {
        //     padding: "0 0 10px",
        //   },
        //   ".card > .fieldset": {
        //     padding: "0 !important",
        //     margin: "0 2.5px 5px !important",
        //   },
        //   ".ach .fieldsetrow": {
        //     "flex-wrap": "wrap-reverse",
        //     "flex-direction": "row-reverse",
        //     "justify-content": "center",
        //     width: "auto",
        //   },
        //   ".fieldsetgroup": {
        //     flex: "1",
        //   },
        //   ".ach .account": {
        //     padding: "0 5px 0 5px !important",
        //   },
        //   ".ach .fieldsetrow .type": {
        //     flex: "none !important",
        //   },
        //   "@media(max-width: 531px)": {
        //     ".ach .fieldsetrow .account": {
        //       padding: " 0!important",
        //       flex: "1 1 auto",
        //     },
        //   },
        // },

        
      }
    })

    this.exampleLine = new Tokenizer({
      url: 'http://localhost:8082',
      apikey: testapikey,
      container: document.querySelector('#exampleLine') as HTMLDivElement,
      submission: (resp: any) => {
        this.exampleLineResponse = resp
      },
      settings: {
        styles: {
          body: {
            color: '#ffffff'
          },
          input: {
            color: '#ffffff',
            'padding-left': '0px',
            'border-radius': '0px',
            border: 'none',
            'border-bottom': 'solid 1px #ffffff',
            'background-color': '#525f7f'
          },
          '.payment .cvv input': {
            border: 'solid 1px #ffffff',
            'padding-left': '6px'
          },
          "@media (max-width: 768px)": {
            "#tokenizer-form": {
              background: "blue",
            },
          },
        }
      }
    })
  }
})
</script>

<style lang="scss">
  .styled {
    .exampleBubble {
      background-color: #6772e5 !important;
      border-radius: 8px;
      color: #ffffff;

      button {
        cursor: pointer;
        width: 100%;
        height: 30px;
        color: #ffffff;
        font-weight: bold;
        border: none;
        border-radius: 8px;
        background-color: #ffb300;
        padding: 5px 8px 5px 8px;
      }
    }

    .exampleLine {
      color: #ffffff;
      background-color: #525f7f !important;

      button {
        cursor: pointer;
        width: 100%;
        height: 30px;
        color: #ffffff;
        font-weight: bold;
        border: none;
        background-color: #24b47e;
        padding: 5px 8px 5px 8px;
      }
    }
  }
</style>

<template>
  <div class="main styled">
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
            // Styles object will get converted into a css style sheet.
            // Inspect elements to see structured html elements
            // and style them the same way you would in css.
            styles: {
              'body': {
                'color': '#ffffff'
              },
              'input': {
                'color': '#ffffff',
                'border-radius': '8px',
                'background-color': '#ffffff40',
                'border': 'none'
              },

              // Example - style cvv to have full border box
              '.payment .cvv input': {
                'border': 'solid 1px #ffffff',
                'padding-left': '6px'
              }
            }
          }
        })
      </code>
    </pre>

    <div class="section exampleBubble">
      <div id="exampleBubble" />
      <button @click="exampleBubble.submit()">
        Pay
      </button>
      <pre>{{ exampleBubbleResponse }}</pre>
    </div>

    <div class="section exampleLine">
      <div id="exampleLine" />
      <button @click="exampleLine.submit()">
        Pay
      </button>
      <pre>{{ exampleLineResponse }}</pre>
    </div>
  </div>
</template>
