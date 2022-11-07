<template>
  <div class="wrapper">
    <header class="header">
      <div class="header__container">
        <div class="header__logo">
          <h3>About Page</h3>
        </div>
        <div class="header__list__wrapper">
          <ul class="header__list">
            <li class="header__link">
              <a href="#">Link</a>
            </li>
            <li class="header__link">
              <a href="#">Link</a>
            </li>
            <li class="header__link">
              <a href="#">Link</a>
            </li>
            <li class="header__link">
              <a href="#">Link</a>
            </li>
          </ul>
        </div>
        <div class="header__buttons">
          <a-button>Button</a-button>
          <a-button>Button</a-button>
        </div>
      </div>
    </header>
    <main class="main">
      <div class="main__container">
        <h3 class="main__content">{{ $route.params.id }}</h3>
      </div>
    </main>
    <footer class="footer">
      <div class="footer__container">
        <h3>footer</h3>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "ProductsPage"
}
</script>

<style scoped>
.header {
  background-color: #dedddd;
  height: 50px;
}
.header__logo h3 {
  margin: 0;
  padding: 0;
}
.header__container {
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
}
.main__container {
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;

  display: flex;
}
.main__content {
  display: flex;
  justify-content: center;
  font-size: 60px;
  margin: 0;
  padding: 0;
}
.footer__container {
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
}
.header__list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}
.header__list a {
  color: inherit;
  padding: 0 15px;
}
.header__buttons {
  display: flex;
  flex-direction: row;
  gap: 15px;
}
.footer {
  position: absolute;
  bottom: 0;
  height: 50px;
  background-color: #d3d3d3;
  width: 100%;
}
</style>