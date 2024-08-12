<script>
import Slider from "@/components/Slider.vue"
import {defineComponent} from "vue";

export default defineComponent({
  components: {
    Slider
  }
})

</script>
<template>
  <Slider></Slider>
  <section class="values">
    <div class="container">
      <div class="values__title">We are Createx Construction Bureau</div>
      <div class="values__text">We are rightfully considered to be the best construction company in the USA.</div>
      <div class="values__video">
        <img src="../assets/main-bg.jpeg" alt="">
        <div class="values__video__overlay"></div>
      </div>
      <div class="values__title">Our core values</div>
      <div class="values__text">Our mission is to set the highest standards for construction sphere.</div>
      <div class="values__blocks">
        <div class="values__block">
          <div class="values__block__title">Quality</div>
          <div class="values__block__text">Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit
            nostrud aliquip sunt.
          </div>
        </div>
        <div class="values__block ">
          <div class="values__block__title values__block__title-2">Safety</div>
          <div class="values__block__text">Anim reprehenderit sint voluptate exercitation adipisicing laborum
            adipisicing. Minim empor est ea.
          </div>
        </div>
        <div class="values__block ">
          <div class="values__block__title values__block__title-3">Comfort</div>
          <div class="values__block__text">Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate
            ullamco proident ea ad.
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="spectra">
    <div class="container">
      <div class="spectra__header">
        <h2 class="spectra__header__title">Want to know more? Ask us a question:</h2>
        <form class="spectra__form">
          <div class="spectra__form__name spectra__form__block">
            <label>name</label>
            <input type="text" name="name" placeholder="Your name"/>
          </div>
          <div class="spectra__form__phone spectra__form__block">
            <label>phone</label>
            <input type="tel" placeholder="Your phone"/>
          </div>
          <div class="spectra__form__text spectra__form__block">
            <label>messages</label>
            <input type="text" placeholder="Your message"/>
          </div>
          <input class="spectra__form__button" type="button" value="Send">
        </form>
      </div>
    </div>

  </section>
</template>
<style lang="scss">
.values {
  margin-top: 120px;
  padding-bottom: 16.938rem;

  &__title {
    font-size: 46px;
    font-weight: 700;
    line-height: 59.8px;
    text-align: center;
    margin-top: 180px;

  }

  &__text {
    margin-top: 24px;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    text-align: center;
    color: #787A80;

  }

  &__video {
    margin-top: 60px;
    position: relative;

    &:hover .values__video__overlay {
      display: block;
    }

    &:hover .values__video__overlay::before {
      content: url("../assets/large.svg");
      position: absolute;
      top: 45%;
      left: 47%;
    }

    &:hover .values__video__overlay::after {
      content: url("../assets/idle.png");
      position: absolute;
      top: 428px;
      left: 32px;
    }

    &__overlay {
      background: rgb(82, 82, 82);
      background: linear-gradient(90deg, rgba(82, 82, 82, 0.5242471988795518) 0%, rgba(157, 157, 157, 0.27494747899159666) 0%, rgba(30, 33, 44, 0.6250875350140056) 0%);
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: none;
    }
  }

  &__blocks {
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
  }

  &__block {
    width: 25%;
    position: relative;
    margin-top: 72px;

    &__title {
      font-size: 20px;
      font-weight: 700;
      line-height: 30px;
      text-align: center;

      &::before {
        content: url("../assets/ic-like.svg");
        position: absolute;
        top: -50%;
        left: 43%;
      }

      &-2::before {
        content: url("../assets/ic-hand.svg");
      }

      &-3::before {
        content: url("../assets/ic-slippers.svg");
      }

    }

    &__text {
      font-size: 16px;
      font-weight: 400;
      line-height: 25.6px;
      text-align: center;
      color: #787A80;

    }
  }
}

.spectra {
  position: relative;

  &__header {
    position: absolute;
    top: -151px;
    padding: 48px 60px;
    width: 100%;
    max-width: 76.875rem;

    &__title {
      font-size: 1.75rem;
      font-weight: 700;
      line-height: 2.625rem;
      text-align: center;
    }
  }

  &__form {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    align-items: center;
    margin-top: 2rem;

    &__block label {
      display: block;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.313rem;
      text-align: left;
      color: #424551;
      text-transform: capitalize;

    }

    &__block input {
      background-color: #F4F5F6;
      border: 1px solid #D7DADD;
      border-radius: 4px;
      width: 16.25rem;
      height: 2.75rem;
      padding-left: 1rem;

      &:focus {
        outline: none;
      }

    }

    &__button {
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 700;
      line-height: 44px;
      letter-spacing: 0.5px;
      text-align: center;
      color: #F4F5F6;
      background-color: #FF5A30;
      border-radius: 4px;
      padding: 0 32px;
      border: none;
      margin-top: 1.313rem;
    }
  }
}
</style>