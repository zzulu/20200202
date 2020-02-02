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
        Made by zzulu, myong. Thanks to tak.
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
  right: 8px;
  bottom: 8px;
  font-size: .75rem;
  color: #868e96;
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
