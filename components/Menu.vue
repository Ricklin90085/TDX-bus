<template>
  <div class="c-menu fixed bottom-0 w-full flex bg-dark-400">
    <NuxtLink to="/" class="c-menu--active flex flex-col items-center w-1/4 py-4 text-gray-400 text-small">
      <IconBus class="mb-2 fill-current" />
      公車動態
    </NuxtLink>
    <NuxtLink to="" class="flex flex-col items-center w-1/4 py-4 text-gray-400 text-small">
      <IconMarker class="mb-2 fill-current" />
      附近站牌
    </NuxtLink>
    <NuxtLink to="/planning" class="flex flex-col items-center w-1/4 py-4 text-gray-400 text-small">
      <IconPath class="mb-2 fill-current" />
      路線規劃
    </NuxtLink>
    <NuxtLink to="/favorite" class="flex flex-col items-center w-1/4 py-4 text-gray-400 text-small">
      <IconFavorite class="mb-2 fill-current" />
      我的收藏
    </NuxtLink>
  </div>
</template>

<style lang="scss">
  .c-menu{
    &--active{
      @apply text-white;
      svg {
        @apply text-green-default;
      }
    }
  }
</style>


