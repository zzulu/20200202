<template>
  <input type="text"
    class="word"
    placeholder="Is it a palindrome?"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  name: 'WordForm',
  props: {
    value: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.word {
  align-self: stretch;
  text-align: center;
  outline: none;
  font-size: 1.75rem;
  border: 2px solid #ced4da;
  margin-bottom: 64px;
  padding: 1rem;
  transition: color .15s ease-in-out, border-color .15s ease-in-out;
}
</style>
