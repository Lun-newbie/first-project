<script>
import Slider from "@/components/Slider.vue"
import {defineComponent} from "vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  components: {
    Slider,
    Footer
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
      <div class="spectra__main">
        <h1 class="spectra__main__logo">Our services</h1>
        <p class="spectra__main__text">Createx Construction Bureau is a construction giant with a full range of
          construction services.</p>
        <div class="spectra__main__blocks">
          <div class="spectra__main__block spectra__main__block-1">
            <img src="@/assets/ic-construction-spectra.png" alt="#">
            <p>Construction</p>
          </div>
          <div class="spectra__main__block spectra__main__block-2">
            <img src="@/assets/ic-plan-spectra.svg" alt="#">
            <p>Project Development</p>
          </div>
          <div class="spectra__main__block spectra__main__block-3">
            <img src="@/assets/ic-pantone-spectra-white.png" alt="#">
            <p>Interior Design</p>
          </div>
          <div class="spectra__main__block spectra__main__block-4">
            <img src="@/assets/ic-painting-spectra.svg" alt="#">
            <p>Repairs</p>
          </div>
        </div>
      </div>
      <div class="spectra__btm">
        <div class="spectra__btm__text subtitle">Learn more about our services</div>
        <a href="#" class="spectra__btm__button subutton">View services</a>
      </div>
    </div>

  </section>
  <section class="works">
    <div class="container">
      <div class="works__slider">
        <div class="works__wrapper">
          <div class="works__slider__title">Browse our selected projects and learn more about our work</div>
          <div class="control">
            <div class="control__arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="21" fill="currentColor"
                   class="control__arrow__item" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
              </svg>
            </div>
            <div class="control__arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="21" fill="currentColor"
                   class="control__arrow__item control__arrow__right" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="works__blocks">
          <div class="works__block">
            <div class="works__block__overlay">
              <img src="@/assets/image-work-1.jpg" alt="#" class="works__block__img-one">
              <div class="works__block__title">Red Finger Building</div>
              <div class="works__block__text">Business Centers</div>
              <p class="works__block__subutton">View Project</p>
            </div>
          </div>
          <div class="works__block">
            <div class="works__block__overlay">
              <img src="@/assets/image-work-2.png" alt="#" class="works__block__img-two">
              <div class="works__block__title">Cubes Building</div>
              <div class="works__block__text">Business Centers</div>
              <p class="works__block__subutton">View Project</p>
            </div>
          </div>
          <div class="works__block">
            <div class="works__block__overlay">
              <img src="@/assets/image-work-3.png" alt="#" class="works__block__img-tre">
              <div class="works__block__title">The Pencil Building</div>
              <div class="works__block__text">Business Centers</div>
              <p class="works__block__subutton">View Project</p>
            </div>
          </div>
        </div>
        <div class="works__btn">
          <div class="subtitle">Explore all our works</div>
          <a class="subutton">View portfolio</a>
        </div>
      </div>
    </div>
  </section>
  <section class="support">
    <div class="container">
      <h1 class="support__logo">Supported by 12+ partners</h1>
      <div class="support__client">
        <div class="support__client__item">
          <img src="@/assets/client-logo.svg" alt="">
        </div>
        <div class="support__client__item">
          <img src="@/assets/client-logo%20(2).svg" alt="">
        </div>
        <div class="support__client__item">
          <img src="@/assets/client-logo%20(1).svg" alt="">
        </div>
        <div class="support__client__item">
          <img src="@/assets/client-logo%20(3).svg" alt="">
        </div>
        <div class="support__client__item">
          <img src="@/assets/client-logo%20(4).svg" alt="">
        </div>
        <div class="support__client__item">
          <img src="@/assets/client-logo%20(5).svg" alt="">
        </div>
      </div>
      <div class="client">
        <div class="client__review">
          <h1 class="client__review__title">What our clients are saying</h1>
          <img src="@/assets/profile-image.png" alt="123" class="client__review__img">
          <div class="client__review__comments">Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum
            eiusmod enim. Consectetur magna cillum consequat minim laboris cillum laboris voluptate minim proident
            exercitation ullamco.
          </div>
          <div class="client__review__portfolio">
            <div class="client__review__block">
              <div class="client__review__name">Shawn Edwards</div>
              <div class="client__review__info">Position, Company name</div>
            </div>
            <div class="control">
              <div class="control__arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="21" fill="currentColor"
                     class="control__arrow__item" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
              </div>
              <div class="control__arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="21" fill="currentColor"
                     class="control__arrow__item control__arrow__right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="client__img">
          <img src="@/assets/client-image.jpg" alt="#">
        </div>
      </div>
    </div>
  </section>
  <Footer></Footer>
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
  background-image: url("@/assets/bg-image-spectra.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  background-color: #E5E8ED;
  padding-bottom: 5rem;

  &__header {
    position: absolute;
    top: -151px;
    padding: 48px 60px;
    width: 100%;
    max-width: 76.875rem;
    background-color: #FFFFFF;

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

  //----------------------------------------------------------------------------
  &__main {
    padding-top: 13.25rem;

    &__logo {
      font-size: 2.875rem;
      font-weight: 700;
      line-height: 3.738rem;
      text-align: center;
      color: #1E212C;
    }

    &__text {
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 1.688rem;
      text-align: center;
      color: #787A80;

    }

    &__blocks {
      margin-top: 60px;
      display: flex;
      gap: 1.875rem;

    }

    &__block {
      width: 25%;
      background-color: #FFFFFF;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid #E5E8ED;
      border-radius: 4px;

      &:hover {
        background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0.5)),
        url("@/assets/image-spectra.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        color: #F4F5F6;
      }

      & p {
        margin-top: 24px;
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
        text-align: center;
        text-wrap: nowrap;
        z-index: 2;
      }

      &-1 {
        padding: 5.563rem 5rem;
      }

      &-2 {
        padding: 5.563rem 2.531rem;
      }

      &-3 {
        padding: 5.563rem 4.406rem;
        position: relative;
        background-image: url("@/assets/image-spectra.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        color: #ffffff;

        & img {
          z-index: 2;
        }

        &:before {
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: (rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0.5));
        }

      }

      &-4 {
        padding: 5.563rem 6.656rem;
      }
    }
  }

  &__btm {
    display: flex;
    justify-content: center;
    gap: 2.5rem;
    align-items: center;
    margin-top: 5rem;
  }
}

.subtitle {
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 2.625rem;
  text-align: left;
}

.subutton {
  font-size: 1rem;
  font-weight: 700;
  line-height: 3.25rem;
  letter-spacing: 0.5px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  border-radius: 0.625rem;
  background-color: #FF5A30;
  padding: 0 2.5rem;
  text-decoration: none;
  border: none;

  &:hover {
    background-color: #ff3200;
  }
}

.works {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
    align-items: flex-end;
  }

  &__slider {
    margin-top: 7.5rem;

    &__title {
      width: 55%;
      font-size: 2.875rem;
      font-weight: 700;
      line-height: 3.738rem;
      text-align: left;
      color: #1E212C;
    }
  }

  &__blocks {
    display: flex;
    justify-content: space-between;
    margin-top: 3.75rem;
    margin-bottom: 80px;
  }

  &__block {
    overflow: hidden;
    width: 100%;
    height: 25rem;

    &:hover &__overlay {
      transform: translateY(-5rem);
    }

    &__overlay {
      transition: transform ease 0.2s;
    }

    &__title {
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.875rem;
      text-align: center;
      color: #1E212C;

    }

    &__text {
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.313rem;
      text-align: center;
      color: #787A80;

    }

    &__subutton {
      margin: 1.5rem auto;
      width: 50%;
      text-transform: uppercase;
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 2.75rem;
      letter-spacing: 0.5px;
      text-align: center;
      color: #FF5A30;
      border: 1px solid #FF5A30;
      border-radius: 4px;
    }
  }

  &__btn {
    display: flex;
    justify-content: center;
    margin-top: 5rem;
    margin-bottom: 7.5rem;
    gap: 40px;
    align-items: center;
  }
}

.control {
  display: flex;

  &__arrow {
    padding: 12.5px 11px;

    &:hover {
      background-color: #ff3200;
      border-radius: 50%;
      fill: #FF5A30;
    }

    &__right {
      transform: rotate(180deg);

    }

    &__item {

      &:hover {
        fill: #E5E8ED;
      }
    }
  }
}

.support {
  background-color: #F4F5F6;
  padding-top: 5rem;

  &__logo {
    font-size: 2.875rem;
    font-weight: 700;
    line-height: 3.738rem;
    text-align: center;
    margin-bottom: 3.75rem;
  }

  &__client {
    display: flex;
    justify-content: space-between;
  }
}

.client {
  margin-top: 10.625rem;
  display: flex;
  justify-content: space-between;

  &__review {
    width: 53%;

    &__title {
      font-size: 2.875rem;
      font-weight: 700;
      line-height: 3.738rem;
      text-align: left;
    }

    &__img {
      margin-top: 3.75rem;
    }

    &__comments {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.6rem;
      text-align: left;
      margin-top: 1.5rem;

    }

    &__name {
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.6rem;
      text-align: left;
    }

    &__info {
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.313rem;
      text-align: left;
      color: #9FA0A3;

    }

    &__portfolio {
      display: flex;
      justify-content: space-between;
      margin-top: 1.5rem;
    }
  }
}

</style>