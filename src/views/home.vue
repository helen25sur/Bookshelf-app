<template>
  <div class="banner-block">
    <!-- <img src="../../public/img/banner.png" alt="main banner"> -->
  </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {},
};
</script>

<style>
  .banner-block {
    width: 100%;
    min-height: 35vh;
    max-height: 70vh;
    background-image: url('../../public/img/banner.png');
    background-repeat: no-repeat;
    background-position: top center;
  }

  @media screen and (max-width: 760px) {
    .banner-block {
      background-image: url('../../public/img/banner-mob.png');
      height: 82vh;
      max-height: 100vh
    }
  }
</style>
