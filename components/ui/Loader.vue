<script setup lang="ts"></script>

<template>
  <div id="preload" class="preload">
    <div></div>
    <div></div>
  </div>
</template>

<style lang="css" scoped>
.preload {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

#preload :last-child {
  width: 100px;
  height: 100px;
  position: absolute;
  border-right: 2px solid #000;
  border-left: 2px solid transparent;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  border-radius: 100%;
  animation: rotatePreload 1s infinite linear;
}

#preload :first-child {
  width: 100px;
  height: 100px;
  position: absolute;
  border: 2px solid #dee2e6;
  border-radius: 100%;
}

#preload :last-child {
  width: 100px;
  height: 100px;
  position: absolute;
  border-right: 2px solid #000;
  border-left: 2px solid transparent;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  border-radius: 100%;
  animation: rotatePreload 1s infinite linear;
}

@keyframes rotatePreload {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
