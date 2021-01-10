<template>
  <div class="home">
    <div class="container">
      <div class="container">
        <div class="row">
            <div class="col-12 mt-5">
                <div class="section_heading  ">
                    <h2>Категории товаров</h2>
                </div>
            </div>
        </div>
      </div>
      <div class="container">
        <!-- Категории -->
        <div class="text-center mt-4 mb-4">
          <div class="row animation fadeIn categoris">
            
            <Categories v-for="category in CATEGORIES" 
                        :key="category.id" 
                        :category_data="category" /> 
            
            
          </div>
        </div>
      </div>
    </div>
      <div class="container">
        <div class="row mt-3">
            <div class="col-12">
                <div class="section_heading  ">
                    <h2>Выбор пользователей</h2>
                </div>
            </div>
        </div>
        
        <OwlCarousel class="new_arrivals_slides"
         :margin="30" :items="4" loop  autoplay nav 
         :responsive="{0:{items:1,nav:false},600:{items:4, nav:true}}"
        >
         
            <SinglProduct  v-for="product in BESTCHOICE" 
                          :key="product.id" 
                          :product_data="product"> 
            </SinglProduct> 
          
        
        </OwlCarousel>
      </div>
    

    
    <Wewho />
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'

import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import OwlCarousel from 'vue-owl-carousel'
import SinglProduct from "../components/SinglProduct";
import Wewho from "../components/Wewho";

export default {
  name: "Home",
  data() {
    return {
      listProduct: [],
      
    }
  },
  components: {Carousel, Categories, OwlCarousel, Wewho, SinglProduct },
  created() {
    this.GET_CATEGORIES()
    this.GET_BESTCHOICE();
     // this.loadListProduct();
  },
  computed: {
    ...mapGetters([
      'CATEGORIES',
      'BESTCHOICE'
    ]),
  },
  methods: {
    ...mapActions([
        'GET_CATEGORIES',
        'GET_BESTCHOICE'
    ]),
    
    ...mapMutations(['SET_CATEGORY_TO_STATE']),
    
  },
  mounted() {
    //this.GET_CATEGORIES();
   //this.GET_BESTCHOICE();
  },

}
</script>

<style >
 .section_heading {
  position: relative;
  z-index: 1;
  margin-top: 50px;
  height: 40px;
  margin-bottom: 50px; }
  .section_heading h2 {
    color: #000000;
    font-size: 20px;
    line-height: 40px;
    /*text-transform: uppercase;*/
    font-weight: 400;
    letter-spacing: 2px; }
    @media only screen and (max-width: 767px) {
      .section_heading h5 {
        letter-spacing: 1px; } }
  .section_heading.text-left {
    text-align: left !important; }
  .section_heading.white h3,
  .section_heading.white p {
    color: #ffffff; }
  .section_heading.new_arrivals {
    position: relative;
    z-index: 1;
    display: inline-block;
    width: 300px; }
    .section_heading.new_arrivals h5 {
      margin-bottom: 0; }
    .section_heading.new_arrivals::before {
      background-color: #ed1c24;
      content: "";
      height: 40px;
      position: absolute;
      right: 300px;
      top: 0;
      width: 5200px;
      z-index: 9; }
  .section_heading.featured::after {
    background-color: #ed1c24;
    content: "";
    height: 40px;
    left: 300px;
    position: absolute;
    top: 0;
    width: 2000px; }
  .section_heading.featured h5 {
    padding-left: 15px;
    margin-bottom: 0; }

  .new_arrivals_slides,
    .you_may_like_area {
      position: relative;
      z-index: 1;
      
      padding-right: 2px;
    }
      .new_arrivals_slides .owl-prev,
      .new_arrivals_slides .owl-next,
      .you_may_like_area .owl-prev,
      .you_may_like_area .owl-next {
        background-color: #ffffff;
        visibility: hidden;
        opacity: 0;
        -webkit-transition-duration: 500ms;
        -o-transition-duration: 500ms;
        transition-duration: 500ms;
        width: 40px;
        height: 40px;
        
        font-size: 40px;
        text-align: center;
        line-height: 36px;
        
        position: absolute;
        top: 50%;
        margin-top: -40px;
        left: -45px;
        color: #ed1c24; }
        .new_arrivals_slides .owl-prev:hover, .new_arrivals_slides .owl-prev:focus,
        .new_arrivals_slides .owl-next:hover,
        .new_arrivals_slides .owl-next:focus,
        .you_may_like_area .owl-prev:hover,
        .you_may_like_area .owl-prev:focus,
        .you_may_like_area .owl-next:hover,
        .you_may_like_area .owl-next:focus {
          border-color: #ed1c24; }
      .new_arrivals_slides .owl-next,
      .you_may_like_area .owl-next {
        left: auto;
        right: -45px; }
      .new_arrivals_slides:hover .owl-prev,
      .new_arrivals_slides:hover .owl-next, .new_arrivals_slides:focus .owl-prev,
      .new_arrivals_slides:focus .owl-next,
      .you_may_like_area:hover .owl-prev,
      .you_may_like_area:hover .owl-next,
      .you_may_like_area:focus .owl-prev,
      .you_may_like_area:focus .owl-next {
        visibility: visible;
        opacity: 1; }

</style>
