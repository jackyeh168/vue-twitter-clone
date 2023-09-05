<template>
  <div class="flex flex-col min-h-screen">
    <!-- header: user -->
    <header class="flex items-center border-b border-gray-600">
      <router-link to="/Profile/" class="p-4 mr-3 text-blue-500 text-2xl">
        <font-awesome-icon icon="fa-solid fa-user" />
      </router-link>
      <!-- <font-awesome-icon
        icon="fa-brands fa-twitter"
        class="p-4 mr-3 text-blue-500 text-2xl"
      /> -->
      <h1 class="text-white font-black text-xl">{{ $route.name }}</h1>
    </header>

    <main class="flex-1 overflow-scroll">
      <router-view />
    </main>
    <!-- footer : icon -->
    <footer class="grid grid-cols-4 border-t border-b-0 border-gray-600">
      <router-link
        v-for="(route, i) in routes"
        :key="i"
        :to="route.path"
        :class="`p-4 text-center text-2xl ${
          route.name == $route.name ? 'text-green-500' : 'text-gray-300'
        }`"
      >
        <font-awesome-icon :icon="route.iconClass" />
      </router-link>
    </footer>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const routes = ref([]);
    const router = useRouter();

    onBeforeMount(() => {
      routes.value = router.options.routes.filter((r) => r.mainMenu);
    });

    return {
      routes
    };
  },
};
</script>
