<template>
  <div class="p-6">
    <img src="/logo.svg" class="w-[125px]" alt="logo">
    <div class="flex justify-center my-7">
      <img src="/planning-banner.svg" alt="">
    </div>
    <div>
      <div class="flex pb-4 mb-9 border-b border-dark-700">
        <input type="text" class="w-full mr-2 text-bodyM bg-transparent outline-none" placeholder="目前位置">
        <img src="/icons/marker.svg" alt="marker icon">
      </div>
      <div class="flex pb-4 mb-10 border-b border-dark-700">
        <input type="text" class="w-full mr-2 text-bodyM bg-transparent outline-none" placeholder="搜尋目的地">
      </div>
    </div>
    <button class="block w-full py-3 text-dark-400 bg-green-default rounded-lg">
      開始規劃
    </button>
  </div>
</template>