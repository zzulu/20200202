<template>
  <div id="app">
    <div class="container">
      <TakImage
        v-bind:word="word"
        v-bind:typing="typing"
        v-bind:isPalindrome="isPalindrome"/>
      <WordForm
        v-bind:class="{ 'true' : word && !typing && isPalindrome,
                        'false': word && !typing && !isPalindrome }"
        v-model="word"/> 
      <footer class="footer">
        <div v-show="api" class="api">
          <p><b>GET</b>/api</p>
          <dl class="row">
            <div class="col">
              <dt>Parameter</dt>
              <dd>word</dd>
            </div>
            <div class="col">
              <dt>Type</dt>
              <dd>string</dd>
            </div>
            <div class="col">
              <dt>Required</dt>
              <dd>true</dd>
            </div>
          </dl>
          <pre>{
  "ok": true,
  "word": "wow",
  "palindrome": true
}</pre>
        </div>
        <a href="#" v-on:click="api = !api">
          API
        </a>
        <span>&middot;</span>Made by <a href="https://github.com/zzulu" target="_blank">zzulu</a>, myong. Thanks to tak.
      </footer>
    </div>
  </div>
</template>

<script>
import { debounce } from 'lodash'
import TakImage from './components/TakImage.vue'
import WordForm from './components/WordForm.vue'

export default {
  name: 'app',
  data: function () {
    return {
      word: '',
      typing: false,
      isPalindrome: true,
      api: false,
    }
  },
  methods: {
    reversedString: function (str) {
      return [...str].reverse().join('')
    },
    validate: function () {
      this.isPalindrome = this.word == this.reversedString(this.word)
      this.typing = false
    }
  },
  watch: {
    word: function () {
      this.typing = true
      this.debouncedValidate()
    }
  },
  created: function () {
    this.debouncedValidate = debounce(this.validate, 300)
  },
  components: {
    TakImage,
    WordForm,
  }
}
</script>

<style>
#app {
  height: 100%;
}

.footer {
  position: absolute;
  font-size: .75rem;
  color: #868e96;
  bottom: 8px;
  right: 8px;
}

.footer > a {
  display: inline-block;
  color: #868e96;
  text-decoration: none;
}

.footer > a:hover {
  color: #adb5bd;
}

.footer > span {
  margin-right: .25rem;
  margin-left: .25rem;
}

.api {
  position: absolute;
  bottom: 1.5rem;
  left: -.25rem;
  border: 1px solid #ced4da;
  padding: .5rem 1rem;
  background-color: #fff;
}

.api > p {
  margin-top: .5em;
}

.api > p > b {
  margin-right: .5rem;
}

.row {
  display: flex;
  border: 1px solid #adb5bd;
  margin-bottom: 1.5em;
}

.col {
  flex-grow: 1;
}

.col:not(:last-child) {
  border-right: 1px solid #adb5bd;
}

.col > dt,
.col > dd {
  padding: .25rem .5rem;
}

.col > dt {
  color: #fff;
  background-color: #adb5bd;
}

.container {
  height: 100%;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 660px) {
  .container {
    max-width: 600px;
  }
}

.word.true {
  border-color: #40c057; /* oc-green-6 */
  color: #37b24d; /* oc-green-7 */
  transition: color .15s ease-in-out, border-color .15s ease-in-out;
}

.word.false {
  border-color: #fa5252; /* oc-red-6 */
  color: #f03e3e; /* oc-red-7 */
  transition: color .15s ease-in-out, border-color .15s ease-in-out;
}
</style>
