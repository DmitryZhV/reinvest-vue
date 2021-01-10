<template>
    <div>
        <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-notify modal-danger" role="document">
            <div class="modal-content">
            <div class="modal-header text-center">
                <h4 class="modal-title white-text w-100 font-weight-bold">Вход на сайт</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"  class="white-text">&times;</span>
                </button>
            </div>
            <div class="modal-body mx-3">
                <div class="md-form mb-5">
                <i class="fas fa-envelope prefix grey-text"></i>
                <input type="email" id="defaultForm-email" class="form-control validate">
                <label data-error="wrong" data-success="right" for="defaultForm-email">Ваш email</label>
                </div>
                <div class="md-form mb-3">
                <i class="fas fa-lock prefix grey-text"></i>
                <input type="password" id="defaultForm-pass" class="form-control validate">
                <label data-error="wrong" data-success="right" for="defaultForm-pass">Пароль</label>
                </div>
                <div class="md-form mx-3">
                <a href="">Забыли пароль?</a>
                </div>
            </div>
            <div class="modal-footer d-flex justify-content-center">
                <button class="btn btn-danger">Вход</button>
            </div>
            </div>
        </div>
        </div>

        <div class="container">
            <div class="row align-items-center mb-1">
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="welcome-note text-center">

                        <span class="text ">ПН-ПТ 10.00-18.00</span>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3 align-items-center">
                    <div class="welcome-note text-center">
                        <span class="text " ><a href="mailto:reinvest-service@mail.ru" ><i class="fa fa-envelope"></i> reinvest-service@mail.ru</a></span>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="welcome-note text-center">
                        <span class="text"  ><i class="fas fa-phone"></i> +7(495)663-32-26</span>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="welcome-note text-center">
                        <span class="text"  ><i class="fab fa-whatsapp"></i> +7(916)260-02-66</span>
                    </div>
                </div>
            </div>
        </div>


        <!-- navbar -->
            <nav class=" mt-10 navbar  sticky-top  navbar-expand-lg navbar-light white scrolling-navbar">
            <div class="container">
                <a href="/" class="navbar-brand mr-3">
                <img src="../assets/img/nav/logo.png" alt="Logo"></a>
                <button class="navbar-toggler" type="button"
                data-toggle="collapse"  data-target= "#navbarContent"
                aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation" >
                <span class="navbar-toggler-icon"></span>

                </button>
                <div class="collapse navbar-collapse" id="navbarContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">О нас</router-link>
                    </li>
                    
                    <li class="nav-item ">
                    <a href="#" class="nav-link">Доставка и оплата</a>
                    </li>
                    <li class="nav-item ">
                    <a href="#" class="nav-link">Акции</a>
                    </li>
                    <li class="nav-item ">
                    <a href="#" class="nav-link">Сервис и обслуживание</a>
                    </li>
                    <li class="nav-item ">
                    <a href="#" class="nav-link">Помощь и FAQ</a>
                    </li>
                    <li class="nav-item ">
                    <a href="#" class="nav-link">Контакты</a>
                    </li>
                </ul>
                <ul class="navbar-nav nav-flex-icons">
                    <li class="search-area">
                        <form action="/search/" method="get">
                        <div class="search-btn"><i class="fa fa-search"></i></div>
                        <!-- Form -->
                        <div class="search-form">
                            <input type="search" class="form-control" placeholder="Поиск">
                            <input type="submit" class="d-none" value="Send">
                        </div>
                        </form>
                    </li>
                    <li class="cart-area">
                    <span class="hiden" id="csrf_hiden_code"></span>	
                    <div class="cart--btn"><i class="fa fa-shopping-cart"></i> <span class="cart_quantity" id="cart_total_qty">
                    
                            0
                    
                    </span></div>

                    <!-- Cart Dropdown Content -->
                    <div class="cart-dropdown-content">
                        
                        <ul class="cart-list pl-0">
                            
                            <li>
                                <div class="cart-item-desc">
                                    
                                    <a href="#" class="image">
                                        <img src="" class="cart-thumb" alt="">
                                    </a>
                                    
                                    <div>
                                        <a href="#" style="color:red"></a>
                                        
                                        <p > x - <span class="price"> ₽</span></p>
                                    </div>
                                </div>
                                <span class="dropdown-product-remove" data-product_id=""><i class="fas fa-trash-alt"></i></span>
                            </li>
                            
                            <!--<li>
                                <div class="cart-item-desc">
                                    <a href="#" class="image">
                                        <img src="img/data/products/Rx1-02.jpg" class="cart-thumb" alt="">
                                    </a>
                                    <div>
                                        <a href="#" style="color:red">ПРИНТЕР DNP DS-40</a>
                                        <p>2x - <span class="price">45000 ₽</span></p>
                                    </div>
                                </div>
                                <span class="dropdown-product-remove"><i class="fas fa-trash-alt"></i></span>
                            </li>-->
                        </ul>
                        <div class="cart-pricing my-4">
                            <ul>
                                <!-- <li>
                                    <span>Подитог:</span>
                                    <span>90000 ₽</span>
                                </li>
                                <li>
                                    <span>Доставка:</span>
                                    <span>1000 ₽</span>
                                </li> -->
                                <li>
                                    <span>Итого:</span>
                                    <span id="cart_total_amount"> ₽</span>
                                </li>
                            </ul>
                            
                        </div>
                        <div class="cart-box">
                            <a href="/cart/" class="btn btn-danger d-block" >Корзина</a>
                        </div>
                    </div>
                    </li>

                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-6" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="true">
                        <i class="fas fa-user"></i> </a>
                    <div class="dropdown-menu dropdown-danger" aria-labelledby="navbarDropdownMenuLink-6">
                        
                        Hello ,
                        <a class="dropdown-item" href="{% url "logout" %}">Выход</a>
                        
                        <a class="dropdown-item btnLogin" href="" data-toggle="modal" data-target="#modalLoginForm">Вход</a>
                        
                        <a class="dropdown-item" href="#">Регистрация</a>
                        <a class="dropdown-item" href="/account/login/">Вход/Регистрация</a>
                    </div>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <!-- end navbar -->
    </div>
</template>

<script>
    export default {
        name: 'Nav',
        components: {
            
        }
    }
</script>

<style scoped>
    .navbar .collapse .navbar-nav .nav-item  .nav-link:hover,
.navbar .collapse .navbar-nav .nav-item  .nav-link:focus{
    color: #ed1c24;
}
.navbar .collapse .navbar-nav .nav-item  .dropdown-menu .dropdown-toggle:hover,
.navbar .collapse .navbar-nav .nav-item  .dropdown-menu .dropdown-toggle:focus{
  background-color: #ed1c24;
  color: #ffffff;
   box-shadow: 0 0 10px rgba(0,0,0,0.5); /* Параметры тени */
   padding: 10px;
}
.navbar .collapse .navbar-nav .nav-item  .dropdown-menu  .drop-menu:hover,
.navbar .collapse .navbar-nav .nav-item  .dropdown-menu  .drop-menu:focus{
    background-color: #ed1c24;
    color: #ffffff;
     box-shadow: 0 0 10px rgba(0,0,0,0.5); /* Параметры тени */
     padding: 10px;
}

.navbar .collapse .navbar-nav .search-area {
  position: relative;
  z-index: 1; }
  .navbar .collapse .navbar-nav .search-area .search-btn {
    width: 35px;
    height: 35px;
    line-height: 35px;
    background-color: #f8f8ff;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 15px; }
    @media only screen and (max-width: 767px) {
      .navbar .collapse .navbar-nav .search-area .search-btn {
        margin-right: 8px;
        width: 30px;
        height: 30px;
        line-height: 30px; } }
    @media only screen and (min-width: 576px) and (max-width: 767px) {
      .navbar .collapse .navbar-nav .search-area .search-btn {
        margin-right: 15px;
        width: 35px;
        height: 35px;
        line-height: 35px; } }
  .navbar .collapse .navbar-nav .search-area .search-form {
    -webkit-transition-duration: 500ms;
    -o-transition-duration: 500ms;
    transition-duration: 500ms;
    position: absolute;
    padding: 0 15px;
    border-radius: 6px;
    top: 100px;
    right: 0;
    background-color: #ffffff;
    box-shadow: 0 0 8px 0 rgba(47, 91, 234, 0.15);
    opacity: 0;
    visibility: hidden; }
    .navbar .collapse .navbar-nav .search-area .search-form input {
      background-color: #ffffff;
      width: 240px;
      height: 54px;
      border: none;
      font-size: 13px; }
      @media only screen and (max-width: 767px) {
        .navbar .collapse .navbar-nav .search-area .search-form input {
          width: 165px; } }
      @media only screen and (min-width: 576px) and (max-width: 767px) {
        .navbar .collapse .navbar-nav .search-area .search-form input {
          width: 240px; } }
      .navbar .collapse .navbar-nav .search-area .search-form input:focus {
        box-shadow: none; }
    .navbar .collapse .navbar-nav .search-area .search-form.active {
      top: 50px;
      opacity: 1;
      visibility: visible; }



.navbar .collapse .navbar-nav .cart-area {
  position: relative;
  z-index: 2; }
  .navbar .collapse .navbar-nav .cart-area .cart--btn {
    -webkit-transition-duration: 500ms;
    -o-transition-duration: 500ms;
    transition-duration: 500ms;
    position: relative;
    z-index: 1;
    width: 35px;
    height: 35px;
    line-height: 35px;
    background-color: #f8f8ff;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 15px;
    font-size: 16px; }
    @media only screen and (max-width: 767px) {
      .navbar .collapse .navbar-nav .cart-area .cart--btn {
        margin-right: 8px;
        width: 30px;
        height: 30px;
        line-height: 30px; } }
    @media only screen and (min-width: 576px) and (max-width: 767px) {
      .navbar .collapse .navbar-nav .cart-area .cart--btn {
        margin-right: 15px;
        width: 35px;
        height: 35px;
        line-height: 35px; } }
    .navbar .collapse .navbar-nav .cart-area .cart--btn:hover, .navbar .collapse .navbar-nav .cart-area .cart--btn:focus {
      color: #ed1c24; }
    .navbar .collapse .navbar-nav .cart-area .cart--btn .cart_quantity {
      -webkit-transition-duration: 500ms;
      -o-transition-duration: 500ms;
      transition-duration: 500ms;
      background-color: #ed1c24;
      border-radius: 50%;
      color: #ffffff;
      font-size: 10px;
      height: 20px;
      line-height: 20px;
      position: absolute;
      right: -5px;
      text-align: center;
      top: -10px;
      width: 20px;
      z-index: 2;
      font-weight: 700; }
  .navbar .collapse .navbar-nav .cart-area .cart-dropdown-content {
    -webkit-transition-duration: 500ms;
    -o-transition-duration: 500ms;
    transition-duration: 500ms;
    background-color: #ffffff;
    box-shadow: 0 0 8px 0 rgba(47, 91, 234, 0.15);
    border-radius: 6px;
    position: absolute;
    right: -44px;
    top: 70px;
    width: 280px;
    z-index: 120;
    padding: 30px 25px;
    opacity: 0;
    visibility: hidden; }
    .navbar .collapse .navbar-nav .cart-area .cart-dropdown-content .cart-list li {
      border-bottom: 1px solid #d6e6fb;
      padding-bottom: 1rem; }
    .navbar .collapse .navbar-nav .cart-area .cart-dropdown-content li {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      margin-bottom: 1rem; }
      .navbar .collapse .navbar-nav .cart-area .cart-dropdown-content li .cart-item-desc {
        position: relative;
        z-index: 1;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(100% - 50px);
        flex: 0 0 calc(100% - 50px);
        max-width: calc(100% - 50px);
        width: calc(100% - 50px); }
        .navbar .collapse .navbar-nav .cart-area .cart-dropdown-content li .cart-item-desc .image {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 40px;
          flex: 0 0 40px;
          max-width: 40px;
          width: 40px;
          margin-right: 15px; }
          .navbar .collapse .navbar-nav .cart-area .cart-dropdown-content li .cart-item-desc .image img {
            width: 40px; }
        .navbar .collapse .navbar-nav .cart-area .cart-dropdown-content li .cart-item-desc a {
          font-size: 13px; }
        .navbar .collapse .navbar-nav .cart-area .cart-dropdown-content li .cart-item-desc p {
          font-size: 12px;
          margin-bottom: 0; }
      .navbar .collapse .navbar-nav .cart-area .cart-dropdown-content li .dropdown-product-remove {
        -webkit-transition-duration: 500ms;
        -o-transition-duration: 500ms;
        transition-duration: 500ms;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 30px;
        flex: 0 0 30px;
        max-width: 30px;
        width: 30px;
        height: 30px;
        border: 1px solid #d6e6fb;
        text-align: center;
        line-height: 29px;
        border-radius: 50%;
        background-color: #ffffff;
        color: #070a57;
        font-size: 14px;
        margin-left: 20px;
        cursor: pointer; }
        .navbar .collapse .navbar-nav .cart-area .cart-dropdown-content li .dropdown-product-remove:hover, .navbar .collapse .navbar-nav .cart-area .cart-dropdown-content li .dropdown-product-remove:focus {
          border-color: #d6e6fb;
          background-color: #ed1c24;
          color: #ffffff; }
      .navbar .collapse .navbar-nav .cart-area .cart-dropdown-content li:last-child {
        margin-bottom: 0; }
    .navbar .collapse .navbar-nav .cart-area .cart-dropdown-content .cart-pricing li {
      margin-bottom: 10px; }
      .navbar .collapse .navbar-nav .cart-area .cart-dropdown-content .cart-pricing li span {
        font-size: 13px; }
      .navbar .collapse .navbar-nav .cart-area .cart-dropdown-content .cart-pricing li:last-child span {
        font-weight: 700;
        color: #070a57; }
  .navbar .collapse .navbar-nav .cart-area:hover .cart_quantity, .navbar .collapse .navbar-nav .cart-area:focus .cart_quantity {
    background-color: #141414;
    color: #ffffff; }
  .navbar .collapse .navbar-nav .cart-area:hover .cart-dropdown-content, .navbar .collapse .navbar-nav .cart-area:focus .cart-dropdown-content {
    top: 50px;
    opacity: 1;
    visibility: visible; }

</style>