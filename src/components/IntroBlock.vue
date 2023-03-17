<template>
  <div class="relative flex items-center mt-[168px]">
    <div class="z-20">
      <p class="text-6xl leading-[96px] text-primary">¡Hola!</p>
      <p class="text-6xl leading-[96px] font-bold">I'm Muslihiddin,</p>
      <p class="text-7xl leading-[108px] font-bold tracking-[5.5%] text-transparent overlay-stroke">
        frontend developer.
      </p>
    </div>
    <img src="@/assets/info.svg" class="absolute right-1 w-[662px] z-10" />
    <div
      class="block sticky -right-[390px] top-[80px] w-[530px] h-[530px] rounded-full blur-[350px] -rotate-[109deg] conic-gradient"
    ></div>
  </div>
</template>

<style scoped>
.overlay-stroke {
  -webkit-text-stroke: 2px #0ee6b7;
}

.conic-gradient {
  background: conic-gradient(from 180deg at 50% 50%, #00ffe0 0deg, #7000ff 360deg);
}
</style>
