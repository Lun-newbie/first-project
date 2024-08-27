<script>
</script>
<template>
  <section class="application">
    <div class="container application__container">
      <form class="form">
        <h3 class="form__title">A quick way to discuss details</h3>
        <div class="form__block">
          <label for="name" class="form__text">name*</label>
          <input type="text" placeholder="Your name" class="form__input">
        </div>
        <div class="form__block">
          <label for="phone" class="form__text">phone*</label>
          <input type="number" placeholder="Your phone number" class="form__input">
        </div>
        <div class="form__block">
          <label for="mail" class="form__text">email*</label>
          <input type="email" placeholder="Your working email" class="form__input">
        </div>
        <div class="form__block">
          <label for="name" class="form__text">message*</label>
          <input type="text" placeholder="Your message" class="form__input">
        </div>
        <div class="form__check form__block">
          <input type="checkbox" class="form__checkbox">
          <label for="" class="form__text">I agree to receive communications from Createx Construction Bureau.</label>
        </div>
        <div class="subutton form__subutton">send request</div>
      </form>
    </div>
  </section>
  <section class="footer">
    <div class="container">
      <div class="feedback">
        <div class="feedback__item">
          <div class="feedback__item__logo">
            <img src="@/assets/footer-logo.png" alt="">
            <div class="feedback__item__networks">
              <img src="@/assets/Whatsapp.svg" alt="">
              <img src="@/assets/Messanger.svg" alt="">
              <img src="@/assets/Facebook.svg" alt="">
              <img src="@/assets/Twitter.svg" alt="">
              <img src="@/assets/YouTube.svg" alt="">
            </div>
          </div>
          <p class="feedback__item__text">Createx Construction Bureau has been successfully operating in the USA
            construction market since 2000. We are proud to offer you quality construction and exemplary service. Our
            mission is to set the highest standards for construction sphere.
          </p>
        </div>
        <div class="feedback__item">
          <div class="">
            <p class="feedback__item__title">Let’s stay in touch</p>
            <form class="feedback__item__form">
              <input type="text" placeholder="Your email address" class="feedback__item__input">
              <button class="feedback__item__button">subscribe</button>
            </form>
            <p class="feedback__item__splint">*Subscribe to our newsletter to receive communications and early updates
              from Createx Construction Bureau.</p>
          </div>
        </div>
      </div>
      <div class="navigation">
        <div class="contact">
          <div class="navigation__title">HEAD OFFICE</div>
          <div class="contact__item"><span>Address:</span>502 Preston Rd. Inglewood, New York</div>
          <div class="contact__item"><span>Call:</span>(405) 555-0128</div>
          <div class="contact__item"><span>Email:</span>hello@createx.com</div>
        </div>
        <div class="navigation__item">
          <div class="navigation__title">WHO WE ARE</div>
          <a href="#" class="navigation__link"></a>
          <a href="#" class="navigation__link"></a>
          <a href="#" class="navigation__link"></a>
        </div>
        <div class="navigation__item">
          <div class="navigation__title">OUR EXPERIENCE</div>
          <a href="#" class="navigation__link"></a>
          <a href="#" class="navigation__link"></a>
          <a href="#" class="navigation__link"></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.application {
  background-image: url("@/assets/image-btm (1).jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 80px 0;

  &__container {
    display: flex;
    justify-content: end;
  }
}

.form {
  background-color: #FFFFFF;
  padding: 48px 40px;
  width: 30.938rem;
  border-radius: 3px;

  &__input {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    text-align: left;
    color: #9A9CA5;
    border: 1px solid #D7DADD;
    background-color: #F4F5F6;
    border-radius: 3px;
    padding-top: 11px;
    padding-bottom: 12px;
    padding-left: 16px;
    width: 100%;
  }

  &__text {
    display: block;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.313rem;
    text-align: left;
    text-transform: capitalize;
    margin-bottom: 0.5rem;
  }

  &__title {
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 2.625rem;
    text-align: center;

  }

  &__check {
    display: flex;
    align-items: center;
  }

  &__checkbox {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 12px;

  }

  &__block {
    margin-top: 1.25rem;
  }

  &__subutton {
    width: 50%;
    margin: 1.5rem auto;
  }


}

.footer {
  background-color: #1E212C;
  padding-top: 5rem;
}

.feedback {
  display: flex;
  justify-content: space-between;


  &__item {
    width: 50%;

    &__text {
      width: 80%;
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      text-align: left;
      color: #787A80;

    }

    &__networks {
      display: flex;
      gap: 1rem;
    }

    &__logo {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1.5rem;
      width: 63%;
    }

    &__title {
      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
      text-align: left;
      color: #ffffff;
      margin-bottom: 1.5rem;

    }

    &__form {
      display: flex;
      justify-content: space-between;
    }

    &__input {
      background-color: #FFFFFF1F;
      border: 1px solid #FFFFFF33;
      width: 100%;
      color: #ffffff;
    }

    &__button {
      font-size: 14px;
      font-weight: 700;
      line-height: 44px;
      letter-spacing: 0.5px;
      text-align: center;
      text-transform: uppercase;
      background-color: #FF5A30;
      color: #ffffff;
      border: none;
      padding: 0 25px;
      border-radius: 0 4px 4px 0;

    }

    &__splint {
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      text-align: left;
      color: #787A80;
      margin-top: 1rem;
      width: 85%;
    }
  }
}
</style>
