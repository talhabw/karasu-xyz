<template>
  <div class="cotnainer mx-auto text-lg">
    If this link didn't work for you, this means bunken is no longer available for the your version of Firefox.
    If you have any interest in bunken being available again, please contact me at <a
      href="mailto:talha@karasu.xyz">talha@karasu.xyz</a> and I may update it.
  </div>
</template>

<script>
export default {
  asyncData({ redirect }) {
    redirect("https://karasu.xyz/bunkenv1/bunken.xpi")
  },
}
</script>

<style>
</style>
