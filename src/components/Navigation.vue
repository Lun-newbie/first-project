<script>

</script>

<template>
  <div class="header">
    <div class="container">
      <div class="header__wrap">
        <router-link to="/">
          <img src="@/assets/header-logo.svg" alt="#">
        </router-link>
        <ul class="header__nav">
          <router-link to="/about-us" active-class="active">About us</router-link>
          <router-link to="/services" active-class="active">Services</router-link>
          <router-link to="/work" active-class="active">work</router-link>
          <router-link to="/news" active-class="active">news</router-link>
          <router-link to="/contacts" active-class="active">contacts</router-link>
        </ul>
        <div class="header__contacts">
          <div class="header__contact header__contact-num">
            <p>Call us</p>
            <a href="tel:(405) 555-0128">(405) 555-0128</a>
          </div>
          <div class="header__contact  header__contact-mail">
            <p>Talk to us</p>
            <a href="#">hello@createx.com</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  //position: fixed;
  top: 0;
  width: 100%;
  background-color: #ffffff;
  padding: 1.25rem 0;

  &__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__nav {
    display: flex;
    justify-content: space-between;

    & a {
      text-transform: capitalize;
      list-style-type: none;
      margin-right: 2.5rem;
      font-size: 1rem;
      line-height: 1.6rem;
      font-weight: 700;
      color: #424551;
      text-decoration: none;

      &:hover, &.active {
        color: #FF5A30;
      }
    }
  }

  &__contacts {
    display: flex;
    gap: 4.75rem;

    & p {
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 1.313rem;
      text-align: left;
      color: #1E212C;

    }
    &-mail::before {
      content: url("@/assets/Chat.svg");
      position: absolute;
      left: -3rem;
    }
  }

  &__contact {
    position: relative;

    & a {
      text-decoration: none;
      color: #1E212C;
    }

    &::before {
      content: url("@/assets/iPhone.svg");
      position: absolute;
      top: 0;
      left: -2.5rem;
    }
  }
}

</style>