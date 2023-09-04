<template>
  <article class="tweet border-b border-gray-600">
    <router-link to="#" class="flex p-4">
      <figure class="w-16 mr-3">
        <img
          :src="tweet.author.profile_img_url"
          alt="Image"
          class="rounded-full w-full"
        />
      </figure>
      <section class="flex-1">
        <div class="tweet-author">
          <span class="text-white font-bold">{{
            tweet.author.display_name
          }}</span>
          <span class="text-gray-500 ml-2 font-normal">{{
            tweet.author.username
          }}</span>
        </div>
        <div>
          <p class="text-white" v-html="tweet.body"></p>
        </div>
        <figure
          v-if="tweet.image"
          class="rounded-xl border border-gray-600 overflow-hidden"
        >
          <img
            :src="tweet.image.url"
            :alt="tweet.image.alt"
            class="w-full h-44 object-cover"
          />
        </figure>
        <div class="mt-2 flex items-center justify-between">
          <div class="text-gray-500">
            <font-awesome-icon
              icon="fas fa-comment"
              class="mr-1 rounded-full hover:bg-green-900 hover:text-green-500"
            />
            <span class="px-2 mb-3">{{ tweet.stats.comments.length }}</span>
          </div>
          <div class="text-gray-500">
            <font-awesome-icon
              icon="fas fa-retweet"
              class="mr-1 rounded-full hover:bg-green-900 hover:text-green-500"
            />
            <span class="px-2">{{ tweet.stats.retweets.length }}</span>
          </div>
          <div class="text-gray-500">
            <font-awesome-icon
              icon="fas fa-heart"
              class="mr-1 rounded-full hover:bg-green-900 hover:text-green-500"
            />
            <span class="px-2 mb-3">{{ tweet.stats.likes.length }}</span>
          </div>
          <div class="text-gray-500">
            <font-awesome-icon
              icon="fas fa-share"
              class="mr-1 rounded-full hover:bg-green-900 hover:text-green-500"
            />
          </div>
        </div>
      </section>
    </router-link>
  </article>
</template>

<script>
export default {
  props: ["tweet"],
};
</script>
