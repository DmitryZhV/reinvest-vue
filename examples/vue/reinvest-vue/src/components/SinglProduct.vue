<template>
    
        <div class="single-product-area mb-30">
            <div v-for="image in product_data.images" 
                          :key="image.id">
              <div class="product_image"  >
                  <!-- Product Image -->
                  <!-- <a href="{{product.get_absolute_url}}">  
                  {% for image_item in product.productimage_set.all %}
                      {%if image_item.is_main is True %}-->
                      <img v-if="image.is_main" class="normal_img" :src="image.image" alt="">
                      <!--{% endif %}
                  <img class="hover_img" src="" alt="">
                  {%endfor%}
                  </a> -->
                  <!-- Product Badge -->
                  <!--  <div class="product_badge">
                      <span>TOP</span>
                  </div>-->

                  <!-- Wishlist -->
                  <div class="product_wishlist">
                      <a href="wishlist.html"><i class="fa fa-heart"></i></a>
                  </div>

                  <!-- Compare -->
                  <div class="product_compare">
                      <a href="compare.html"><i class="fa fa-exchange-alt" ></i></a>
                  </div>
              </div>
            </div>
            <!-- Product Description -->
            <div class="product_description">
                
                <p>{{ product_data.category }}</p>
                <p>{{ product_data.manufacturer }}</p>
                <a href=""><i class="fa fa-arrows-h" ></i>{{ product_data.name }}</a>
                <div class="price-row row d-flex justify-content-between align-items-center">
                    <h6 class="product-price"><b>{{ product_data.price }} ₽</b></h6>
                    <div class="product_rating">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <span>12</span>
                    </div>
                </div>
                <!-- Add to cart -->
                <div class="product_add_to_cart">
                    <a href="#" class="btnCart"  data-product_name="" data-product_id= "">
                        <i class="fa fa-shopping-cart"></i><b> В корзину</b> </a>
                </div>

                <!-- Quick View  product_quick_view -->
                <div class="product_quick_view">
                    <a href="#" class="product_quickview"  data-product_id="" data-toggle="modal" data-target="#quickview">
                    <i class="fas fa-eye"></i><b> Просмотр</b></a>
                </div>
            </div>
        </div>
    
</template>

<script>
    export default {
        name: "SinglProduct",
        props: {
            product_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
    }
</script>

<style scoped>
    .single-product-area {
    position: relative;
    border-radius: 8px;
    z-index: 1;
    /*background-color: #f8f8ff;*/
    border: 1px solid #B0B0B0;
    overflow: hidden;
    -webkit-transition-duration: 500ms;
    -o-transition-duration: 500ms;
    transition-duration: 500ms; 
    margin-bottom: 20px;}
  .single-product-area .product_image {
    -webkit-transition-duration: 500ms;
    -o-transition-duration: 500ms;
    transition-duration: 500ms;
    position: relative;
    z-index: 2;
    width: 100%; }
  .single-product-area .product_image img {
    width: 100%;
    }
      .single-product-area .product_image .product_wishlist a {
        -webkit-transition-duration: 500ms;
        -o-transition-duration: 500ms;
        transition-duration: 500ms;
        background-color: #ed1c24;
        height: 30px;
        position: absolute;
        right: -32px;
        text-align: center;
        top: 15px;
        width: 30px;
        z-index: 9; }
        .single-product-area .product_image .product_wishlist a i {
          color: #ffffff;
          font-size: 18px;
          line-height: 30px; }
        .single-product-area .product_image .product_wishlist a:hover, .single-product-area .product_image .product_wishlist a:focus {
          background-color: #b11c24;
          color: #ffffff; }
      .single-product-area .product_image .product_compare a {
        background-color: #ed1c24;
        height: 30px;
        position: absolute;
        right: -32px;
        text-align: center;
        top: 60px;
        width: 30px;
        -webkit-transition-duration: 500ms;
        -o-transition-duration: 500ms;
        transition-duration: 500ms;
        z-index: 9;
        -webkit-transition-delay: 100ms;
        transition-delay: 100ms; }
        .single-product-area .product_image .product_compare a i {
          color: #ffffff;
          font-size: 18px;
          line-height: 30px; }
        .single-product-area .product_image .product_compare a:hover, .single-product-area .product_image .product_compare a:focus {
          background-color: #b11c24;
          color: #ffffff; }
    .single-product-area .product_description {
      position: relative;
      z-index: 100;
      padding: 30px 5px; 
      
      text-align: left; }
      .single-product-area .product_description .brand_name {
        font-size: 12px;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
        font-weight: 700;
        line-height: 1; }
      .single-product-area .product_description a {
        display: block;
        color: #000000;
        margin-left: 13px;
        font-size: 15px;
        margin-bottom: 0.5rem; }
      .single-product-area .product_description p {
        margin-bottom: 2px;
        margin-left: 13px;
        font-size: 12px;
        color: #7b7b7b;
      }
      .single-product-area .product_description .price-row {
        margin-left: 13px;
        margin-right: 13px;
      }
      .single-product-area .product_description .price-row .product-price {
        
        margin-bottom: 0;
      
      }
        .single-product-area .product_description .product-price span {
          color: #ed1c24;
          font-size: 14px;
          text-decoration: line-through; }
      .single-product-area .product_description .product_rating {

         }
        .single-product-area .product_description .product_rating i {
          color: #cf0000;
          font-size: 12px; }
          .single-product-area .product_description .product_rating span {
            color: #cf0000;
            font-size: 12px; }
      .single-product-area .product_description .product_add_to_cart a {
        background-color: #cf0000;
        top: -30px;
        border-radius: 4px;
        color: #ffffff;
        display: block;
        font-size: 12px;
        height: 35px;
        left: 0;
        line-height: 35px;
        position: absolute;
        text-align: center;
        width: 43%;
        -webkit-transition-duration: 500ms;
        -o-transition-duration: 500ms;
        transition-duration: 500ms;
        z-index: 20;
        opacity: 0;
        visibility: hidden; }
        @media only screen and (max-width: 767px) {
          .single-product-area .product_description .product_add_to_cart a i {
            display: none; } }
        .single-product-area .product_description .product_add_to_cart a:hover, .single-product-area .product_description .product_add_to_cart a:focus {
          background-color: #b11c24; }
      .single-product-area .product_description .product_quick_view a {
        background-color: #ffffff;
        top: -30px;
        border: 2px solid #cf0000;
        border-radius: 4px;
        color: #cf0000;
        display: block;
        font-size: 12px;
        height: 35px;
        line-height: 35px;
        position: absolute;
        right: 13px;
        text-align: center;
        width: 43%;

        -webkit-transition-duration: 500ms;
        -o-transition-duration: 500ms;
        transition-duration: 500ms;
        z-index: 20;
        opacity: 0;
        visibility: hidden; }
        @media only screen and (max-width: 767px) {
          .single-product-area .product_description .product_quick_view a i {
            display: none; } }
        .single-product-area .product_description .product_quick_view a:hover, .single-product-area .product_description .product_quick_view a:focus {
          border: 2px solid #881016;
          color: #881016;
        }
    .single-product-area .hover_img {
      position: absolute;
      top: -30px;
      -webkit-transition-duration: 750ms;
      -o-transition-duration: 750ms;
      transition-duration: 750ms;
      opacity: 0;
      left: 0; }
    .single-product-area:hover .hover_img, .single-product-area:focus .hover_img {
      position: absolute;
      top: 0;
      opacity: 1; }
    .single-product-area:hover .product_add_to_cart a,
    .single-product-area:hover .product_quick_view a, .single-product-area:focus .product_add_to_cart a,
    .single-product-area:focus .product_quick_view a {
      top: -35px;
      opacity: 1;
      visibility: visible; }
    .single-product-area:hover .product_wishlist a,
    .single-product-area:hover .product_compare a, .single-product-area:focus .product_wishlist a,
    .single-product-area:focus .product_compare a {
      right: 0; }
</style>