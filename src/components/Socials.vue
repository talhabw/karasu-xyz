<template>
  <div class="flex flex-wrap space-x-4">
    <SmartLink
      v-for="(social, index) in getLinks"
      :key="`social-${index}`"
      :title="social.title"
      :href="social.url"
      :utm="false"
      blank
    >
      <IconBrand :brand="social.icon" />
    </SmartLink>

    <SmartLink
      title="Send me an e-mail!"
      :href="pageLoaded ? `mailto:${$config.social.email}` : false"
      :utm="false"
    >
      <IconAt />
    </SmartLink>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

/* Interfaces */
interface Link {
  url: string
  title: string
  icon: string
}

export default Vue.extend({
  data() {
    return {
      pageLoaded: false,
    }
  },
  mounted() {
    this.pageLoaded = true
  },
  computed: {
    /**
     * Returns social links in public runtime config.
     * @returns {Link[]}
     */
    getLinks(): Link[] {
      const social = this.$config.social

      const titles = {
        discord: "Text me on Discord!",
        twitter: "Follow me on Twitter!",
        github: "Follow me on GitHub!",
        instagram: "Follow me on Instagram!",
        telegram: "Text me on Telegram!",
        steam: "View my Steam profile!",
        spotify: "Follow me on Spotify!",
        linkedin: "Follow me on LinkedIn!",
      }

      const array: Link[] = []

      for (const item in social) {
        if (item === "email") continue

        array.push({
          // @ts-ignore-next-line
          url: social[item],
          // @ts-ignore-next-line
          title: titles[item] || `Visit ${item}!`,
          icon: item,
        })
      }

      return array
    },
  },
})
</script>

<style lang="scss" scoped>
a {
  @apply rounded-full ring-transparent ring-[6px] hover:(bg-gray-200 ring-gray-200) dark:(hover:bg-gray-700 hover:ring-gray-700);
}

svg {
  @apply w-8 h-8 text-gray-800 dark:text-gray-200;
}
</style>
