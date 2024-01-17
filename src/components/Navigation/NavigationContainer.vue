<script setup>
import NavLinks from "@/components/Navigation/NavigationLinks.vue";
import { ref } from "vue";

const isActive = ref(false);

const toggleIsActive = () => {
  isActive.value = !isActive.value;
};
</script>

<template>
  <button
    @click="toggleIsActive"
    class="bg-vue-green w-20 h-20 absolute top-0 left-0 z-20"
  >
    <div
      class="hamburger"
      id="hamburger-11"
      :class="isActive ? 'is-active' : ''"
    >
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>
    <span class="uppercase text-xs font-medium text-white">Menu</span>
  </button>

  <div v-show="isActive" class="navigation-container bg-vue-dark-grey">
    <NavLinks />
  </div>
</template>

<style scoped>
.hamburger .line {
  width: 50px;
  height: 5px;
  background-color: #ecf0f1;
  display: block;
  margin: 8px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.hamburger:hover {
  cursor: pointer;
}

#hamburger-11 {
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

#hamburger-11.is-active {
  animation: smallbig 0.6s forwards;
}

@keyframes smallbig {
  0%,
  100% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }

  50% {
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
  }
}

#hamburger-11.is-active .line:nth-child(1),
#hamburger-11.is-active .line:nth-child(2),
#hamburger-11.is-active .line:nth-child(3) {
  -webkit-transition-delay: 0.2s;
  -o-transition-delay: 0.2s;
  transition-delay: 0.2s;
}

#hamburger-11.is-active .line:nth-child(2) {
  opacity: 0;
}

#hamburger-11.is-active .line:nth-child(1) {
  -webkit-transform: translateY(13px) rotate(45deg);
  -ms-transform: translateY(13px) rotate(45deg);
  -o-transform: translateY(13px) rotate(45deg);
  transform: translateY(13px) rotate(45deg);
}

#hamburger-11.is-active .line:nth-child(3) {
  -webkit-transform: translateY(-13px) rotate(-45deg);
  -ms-transform: translateY(-13px) rotate(-45deg);
  -o-transform: translateY(-13px) rotate(-45deg);
  transform: translateY(-13px) rotate(-45deg);
}

.navigation-container {
  left: 0;
  width: 208px;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 10;
  padding: 100px 20px 20px 20px;
}
</style>
