<template>
  <div class="face-wrapper">
    <transition name="corn-left">
      <div v-if="isBday()" class="corn-wrapper">
        <img :src="cornLeft" alt="Left Corn" class="corn left">
        <img :src="cornLeftInner" alt="Left Corn Inner" class="corn left inner">
      </div>
    </transition>
    <img :src="takFace" alt="tak's face" class="face">
    <transition name="corn-right">
      <div v-if="isBday()" class="corn-wrapper">
        <img :src="cornRightInner" alt="Right Corn Inner" class="corn right inner">
        <img :src="cornRight" alt="Right Corn" class="corn right">
      </div>
    </transition>
  </div>
</template>

<script>
import takDefault from '../assets/images/tak-default.png'
import takTrue from '../assets/images/tak-true.png'
import takFalse from '../assets/images/tak-false.png'
import takBday from '../assets/images/tak-true-bday.png'
import cornRight from '../assets/images/corn-right.png'
import cornLeft from '../assets/images/corn-left.png'
import cornRightInner from '../assets/images/corn-right-inner.png'
import cornLeftInner from '../assets/images/corn-left-inner.png'

export default {
  name: 'TakImage',
  props: {
    word: String,
    typing: Boolean,
    isPalindrome: Boolean,
  },
  data: function () {
    return {
      cornRight: cornRight,
      cornLeft: cornLeft,
      cornRightInner: cornRightInner,
      cornLeftInner: cornLeftInner,
    }
  },
  methods: {
    isBday: function () {
      return this.word == '20200202'
    }
  },
  computed: {
    takFace: function () {
      if (this.word == '') {
        return takDefault
      }

      if (this.isBday()) {
        return takBday
      }

      if (this.isPalindrome) {
        return takTrue
      } else {
        return takFalse
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  margin-top: -64px;
  margin-bottom: 16px;
  height: 300px;
}

.face-wrapper {
  display: flex;
}

.corn-wrapper {
  position: relative;
}

@media screen and (max-width: 699px) {
  .corn-wrapper {
    display: none;
  }
}

.corn {
  position: absolute;
}

.corn.left {
  top: -50px;
  right: -100px;
}

.corn.right {
  top: -50px;
  left: -100px;
}

.corn-right-enter-active, .corn-right-leave-active {
  transition: all .2s;
}
.corn-right-enter, .corn-right-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px) translateY(10px);
  opacity: 0;
}

.corn-left-enter-active, .corn-left-leave-active {
  transition: all .2s;
}
.corn-left-enter, .corn-left-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-10px) translateY(10px);
  opacity: 0;
}
</style>
