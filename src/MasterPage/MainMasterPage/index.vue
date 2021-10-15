<template>
  <div>
    <div class="header">
        <my-header/>
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader"

export default {
  name: "MainMasterPage",
  components: {
      MyHeader,
  },
};
</script>

<style lang="scss" scoped></style>
