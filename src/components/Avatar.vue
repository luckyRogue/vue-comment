<template>
  <div class="user">
    <div class="user-img">
      <img :src="avatar ? avatar : publicPath+'/images/tmp/person.jpeg'" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      comment: "",
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style type="text/css" scoped>
.user {
  height: 50px;
  width: 50px;
}
.user-img img {
  height: 45px;
  width: 45px;
  border-radius: 50%;
}
</style>
