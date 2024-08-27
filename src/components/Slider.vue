<template>
  <div class="slider" :style="getBg">
    {{getBg}}
    <div class="container">
      <h1 class="slider__logo">create<span>x</span> construction</h1>
      <p class="slider__text">Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae
        proin ipsum sed.
        Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis. </p>
      <div class="slider__blocks">
        <div class="slider__block">Learn more about us</div>
        <div class="slider__block  slider__block-item">submit request</div>
      </div>
      <div class="slider__pages">
        <div class="slider__page">1</div>
        <div class="slider__page">2</div>
        <div class="slider__page">3</div>
        <div class="slider__page">4</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  setup() {
    const items = [
      {path: '1.jpg', checked: true},
      {path: '2.jpg', checked: false},
      {path: '3.jpg', checked: false},
      {path: '4.jpg', checked: false},
    ]

    return {items}
  },
  computed: {
    getBg(){
      let path = this.items.find((item) => item.checked).path;
      return {backgroundImage:`@/assets/slider/${path}`}
    }
  }
}
</script>

<style scoped lang="scss">
.slider {
  //background-image: url("@/assets/bg-image (1).jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  max-height: 100%;
  padding-top: 13.75rem;
  padding-bottom: 7.5rem;
  margin-top: 1.25rem;

  &__logo {
    font-size: 4.5rem;
    font-weight: 700;
    line-height: 5.85rem;
    letter-spacing: 1px;
    text-align: left;
    text-transform: uppercase;
    width: 70%;
    color: #FFFFFF;

    & span {
      color: #FF5A30;
    }

  }

  &__text {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.875rem;
    text-align: left;
    color: #FFFFFF;
    width: 46%;
    margin-top: 1.5rem;
  }

  &__blocks {
    display: flex;
    gap: 1.5rem;
    margin-top: 3.813rem;
  }

  &__block {
    font-size: 1rem;
    font-weight: 700;
    line-height: 3.25rem;
    letter-spacing: 0.5px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    padding: 0 40px 0 40px;
    border: 1px solid #FFFFFF;
    margin-top: 3.813rem;

    &:hover {
      background-color: #FF5A30;
      border: 1px solid #FF5A30

    }
  }

  &__pages {
    display: flex;
    margin-top: 11.188rem;
    gap: 4px;
  }

  &__page {
    font-size: 28px;
    font-weight: 700;
    line-height: 42px;
    text-align: left;
    color: gray;
    border-bottom: 2px solid #828282;
    width: 15%;

    &:hover {
      color: #FFFFFF;
      border-bottom: 2px solid #ffffff;
    }

  }
}
</style>