<template>
  <div class="home">
    <TweetText v-for="tweet in tweets" :key="tweet._id" :tweet="tweet" />
    <!-- <div class="text-white">{{ tweets }}</div> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import TweetText from "../components/TweetText.vue";
import vweets from "../assets/vweets";

const tweets = ref(vweets);
</script>

<!-- <script>
import { ref } from "vue";
import TweetText from "../components/TweetText.vue";
import vweets from "../assets/vweets";

export default {
  components: {
    TweetText,
  },
  setup() {
    const tweets = ref(vweets);

    return {
      tweets,
      TweetText,
    };
  },
};
</script> -->
