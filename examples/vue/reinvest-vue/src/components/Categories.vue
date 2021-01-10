<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-2  mb-4">
        
            <div class="apparels_offer_area pt-2" > 
                <a href="" @click="goTo(category_data.name)">
                    <img :src="category_data.image" :alt="category_data.name">
                    
                </a>
            </div>
            <div class="apparels_offer_info ">
                <div class="apparels-offer-content text-center">
                    
                    <!--<h4>Apparel &amp; <br><span>Garments</span></h4>-->
                    <a href="" class="   " @click="goTo(category_data.name)"> {{ category_data.name }}<i class="icofont-rounded-right"></i></a>
                    
                </div>
            </div>
            
        
    </div>
</template>

<script>
    export default {
        name: "Categories",
        props: {
            category_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            goTo(id) {
            //this.SET_CATEGORY_TO_STATE(id);
            this.$router.push({ name: "ProductsFilter", params: {id: id}});
            },
        }
    }
</script>

<style  scoped>
    .view-category{
    height: 250px;
  }
/* Apparels Offer Area */
.apparels_offer_area {
    position: relative;
    z-index: 1;
    overflow: hidden;
    height: 125px;
    border-radius: 6px; }
.apparels_offer_area img {
    
    /*width: 70%;*/
    height: 80%;
    border-radius: 6px;
    -webkit-transition-duration: 500ms;
    -o-transition-duration: 500ms;
    transition-duration: 500ms; }
.apparels_offer_area .apparels_offer_info {
    background-color: rgba(0, 0, 0, 0.4);
    height: 100%;
    position: relative;
    top: 0;
    width: 100%;
    z-index: 2;
    }
.apparels_offer_area h4 {

    font-weight: 400; }

.apparels_offer_content .apparels-offer-content a:hover {

    color: #cf0000; }
.apparels_offer_area span {
    font-size: 20px; }
.apparels_offer_area .btn {
    background-color: transparent;
    box-shadow: none;
    color: #ffffff;
    line-height: 1;

    font-weight: 700; }
    .apparels_offer_area .btn:hover, .apparels_offer_area .btn:focus {
    color: #ed1c24; }
.apparels_offer_area:hover img {
    -webkit-transform: scale(1.1);
    transform: scale(1.1); }
</style>