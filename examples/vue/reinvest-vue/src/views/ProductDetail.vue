<template>
    <div class="productdetail">
        <div class="breadcumb_area">
            <div class="container h-100">
                <div class="row h-100 align-items-center">
                    <div class="col-12">
                        <!--<h5>Product Details</h5>-->
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Главная</a></li>
                            <!--<li class="breadcrumb-item"><a href="#">Shop</a></li> -->
                            <li class="breadcrumb-item active">{{ product.name }}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <!-- Breadcumb Area -->

        <!-- Single Product Details Area -->
        <section class="single_product_details_area section_padding_100">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <div class="single_product_thumb">
                            <div id="product_details_slider" class="carousel slide" data-ride="carousel">

                                <!-- Carousel Inner -->
                                <div class="carousel-inner">


                                    <!-- {% for image_item in product.productimage_set.all %} -->


                                    <div class="carousel-item active">
                                        <a class="gallery_img" href="#" title="First Slide ">
                                            <img class="d-block w-100" src="#" alt="Первый слайд ">
                                        </a>
                                        <!-- Product Badge -->
                                    <div class="product_badge">
                                            <span class="badge-new">NEW</span>
                                        </div>
                                    </div>
                                    <!-- {% endfor %} -->


                                </div>

                                <!-- Carosel Indicators -->
                                <ol class="carousel-indicators">
                                    <!-- {% for image_item in product.productimage_set.all %} -->
                                    <li class="active" data-target="#product_details_slider" data-slide-to="" style="background-image: url();">
                                    </li>
                                    <!-- {% endfor %} -->

                                </ol>
                            </div>
                        </div>
                    </div>

                    <!-- Single Product Description -->
                    <div class="col-12 col-lg-6">
                        <div class="single_product_desc">
                            <h4 class="title mb-2">{{ product.name }}</h4>
                            <p>{{ product.category }}</p>
                            <p>{{ product.manufacturer }}</p>
                            <div class="single_product_ratings mb-2">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <span class="text-muted">({{ product.reviews_set.count }})</span>
                                
                            </div>
                            <h4 class="price mb-4">{{ product.price }} ₽<span></span></h4>

                            <!-- Overview -->
                            <div class="short_overview mb-4">
                                <h6>О товаре:</h6>
                                <p></p>
                                <p>{{ product.short_description }}</p>
                            </div>

                            <!-- Color Option -->
                            <div class="widget p-0 color mb-3">
                                <h6 class="widget-title">Color</h6>
                                <div class="widget-desc d-flex">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
                                        <label class="custom-control-label black" for="customRadio1"></label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                        <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
                                        <label class="custom-control-label pink" for="customRadio2"></label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                        <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input">
                                        <label class="custom-control-label red" for="customRadio3"></label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                        <input type="radio" id="customRadio4" name="customRadio" class="custom-control-input">
                                        <label class="custom-control-label purple" for="customRadio4"></label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                        <input type="radio" id="customRadio5" name="customRadio" class="custom-control-input">
                                        <label class="custom-control-label white" for="customRadio5"></label>
                                    </div>
                                </div>
                            </div>

                            <!-- Size Option -->
                            <div class="widget p-0 size mb-3">
                                <h6 class="widget-title">Size</h6>
                                <div class="widget-desc">
                                    <ul>
                                        <li><a href="#">XS</a></li>
                                        <li><a href="#">S</a></li>
                                        <li><a href="#">M</a></li>
                                        <li><a href="#">L</a></li>
                                        <li><a href="#">XL</a></li>
                                    </ul>
                                </div>
                            </div>

                            <!-- Add to Cart Form method="post" -->
                            <!-- {% if product.rest %} -->
                                    <form class="cart clearfix my-5 d-flex flex-wrap align-items-center" id="form_bay_prod_datail" action="/basket_adding/">{% csrf_token %}
                                        <div class="quantity">
                                            <input type="number" class="qty-text form-control" id="qty2" step="1" min="1" max="product.rest" name="quantity" value="1">
                                        </div>
                                        <button type="submit" name="addtocart" value="5" id="btn_submit"
                                        class="btn btn-danger mt-1 mt-md-0 ml-1 ml-md-3"
                                        data-toggle="modal" data-target="#basicExampleModal"
                                        data-product_id= "product.id"
                                        data-product_name= "product.name"
                                        data-product_price= "product.price"
                                        data-product_url="">
                                        Добавить в корзину</button>
                                    </form>
                            <!-- {% else %} -->
                                    <div class="my-5 danger">
                                        <strong>Под заказ</strong>
                                    </div>
                                    
                            <!-- {% endif %} -->
                        

                            <!-- Others Info -->
                            <div class="others_info_area mb-3 d-flex flex-wrap">
                                <a class="add_to_wishlist" href="wishlist.html"><i class="fa fa-heart" aria-hidden="true"></i> В избранное</a>
                                <a class="add_to_compare" href="compare.html"><i class="fas fa-exchange-alt" aria-hidden="true"></i> Сравнить</a>
                                <a class="share_with_friend" href="#"><i class="fas fa-share-alt" aria-hidden="true"></i> Поделиться</a>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="product_details_tab section_padding_100_0 clearfix">
                            <!-- Tabs -->
                            <ul class="nav nav-tabs" role="tablist" id="product-details-tab">
                                <li class="nav-item">
                                    <a href="#description" class="nav-link active" data-toggle="tab" role="tab"> Описание</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#reviews" class="nav-link" data-toggle="tab" role="tab"> Отзывы <span class="text-muted">({{ product.reviews_set.count }})</span></a>
                                </li>
                                <li class="nav-item">
                                    <a href="#addi-info" class="nav-link" data-toggle="tab" role="tab">Additional Information</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#refund" class="nav-link" data-toggle="tab" role="tab">Return &amp; Cancellation</a>
                                </li>
                            </ul>
                            <!-- Tab Content -->
                            <div class="tab-content">
                                <div role="tabpanel" class="tab-pane fade show active" id="description">
                                    <div class="description_area">
                                    
                                        

                                        <p class="mb-0">{{ product.description|safe }}</p>
                                    </div>
                                </div>

                                <div role="tabpanel" class="tab-pane fade" id="reviews">
                                    <div class="row">
                                    <div class="col-12 col-lg-6">
                                        <div class="reviews_area">
                                            <ul>
                                                {% for review in product.reviews_set.all %}
                                                    <li>
                                                        <div class="single_user_review mb-15">
                                                            
                                                            
                                                            <div class="review-rating">
                                                                {% if review.star %}
                                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                                    <span>{{review.star }}</span> 
                                                                {% else %}
                                                                    <i class="far fa-star" aria-hidden="true"></i>
                                                                    <span>{{review.star}}</span>
                                                                {% endif %}
                                                                {% if review.star <= 2 %}
                                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                                {% else %}
                                                                    <i class="far fa-star" aria-hidden="true"></i>
                                                                    <span>{{review.star}}</span>
                                                                {% endif %}
                                                                {% if review.star <= 3 %}
                                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                                {% else %}
                                                                    <i class="far fa-star" aria-hidden="true"></i>
                                                                {% endif %}
                                                                {% if review.star <= 4 %}
                                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                                {% else %}
                                                                    <i class="far fa-star" aria-hidden="true"></i>
                                                                {% endif %}
                                                                {% if review.star <= 5 %}
                                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                                {% else %}
                                                                    <i class="far fa-star" aria-hidden="true"></i>
                                                                {% endif %}
                                                                
                                                            </div>
                                                            
                                                            <div class="review-details">
                                                                <p>От <a href="#">{{ review.name }}</a>    <span>{{ review.created }}</span></p>
                                                                <p>{{ review.text }}</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                {% endfor %}
        
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <div class="submit_a_review_area mt-50">
                                            <h4>Оставить отзыв</h4>
                                            <form action=" /review/product.id/" method="post" name="review">{% csrf_token %}
                                                <div class="form-group mb-5">
                                                    <span>Как вы оцените товар?</span>
                                                    <input type="hidden" value="product.id" name="product">

                                                    <div >
                                                        <fieldset class="rating">
                                                            <input type="radio" id="star5" name="star" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                                                            <input type="radio" id="star4" name="star" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                                                            <input type="radio" id="star3" name="star" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
                                                            <input type="radio" id="star2" name="star" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                                                            <input type="radio" id="star1" name="star" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                                                        </fieldset>
                                                    </div>
                                                </div>
                                                <br/>
                                                <div class="form-group">
                                                    <label class="editContent" for="name">Имя *</label>
                                                    <input type="text" class="form-control" id="name" placeholder="Введите ваше имя" name="name" required="">
                                                </div>
                                                <div class="form-group">
                                                    
                                                    <label for="contactemail" class="editContent">
                                                        Email  *
                                                    </label>
                                                    <input type="email" class="form-control border" placeholder="Введите ваш email" name="email"
                                                        id="contactemail" required="">
                                                </div>
                                                
                                            <!-- <div class="form-group">
                                                    <label for="options">Категория рейтинга</label>
                                                    <select class="form-control small right py-0 w-100" id="options">
                                                        <option>Качество</option>
                                                        <option>Цена</option>
                                                        <option>Скорость</option>
                                                        
                                                    </select>
                                                </div>-->
                                                <div class="form-group">
                                                    <label for="comments">Комментарий</label>
                                                    <textarea class="form-control" id="comments" rows="5" data-max-length="150" name="text">Здесь можно написать отзыв</textarea>
                                                </div>
                                                <button type="submit" class="btn btn-danger">Отправить</button>
                                            </form>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                <div role="tabpanel" class="tab-pane fade" id="addi-info">
                                    <div class="additional_info_area">
                                        <h5>Additional Info</h5>
                                        <p>What should I do if I receive a damaged parcel?
                                            <br> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit impedit similique qui, itaque delectus labore.</span></p>
                                        <p>I have received my order but the wrong item was delivered to me.
                                            <br> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam voluptatum beatae harum tempore, ab?</span></p>
                                        <p>Product Receipt and Acceptance Confirmation Process
                                            <br> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ducimus, temporibus soluta impedit minus rerum?</span></p>
                                        <p class="mb-0">How do I cancel my order?
                                            <br> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum eius eum, minima!</span></p>
                                    </div>
                                </div>

                                <div role="tabpanel" class="tab-pane fade" id="refund">
                                    <div class="refund_area">
                                        <h6>Return Policy</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quidem, eos eius laboriosam voluptates totam mollitia repellat rem voluptate obcaecati quas fuga similique impedit cupiditate vitae repudiandae. Rem, tenetur placeat!</p>

                                        <h6>Return Criteria</h6>
                                        <ul class="mb-30 ml-30">
                                            <li><i class="icofont-check"></i> Package broken</li>
                                            <li><i class="icofont-check"></i> Physical damage in the product</li>
                                            <li><i class="icofont-check"></i> Software/hardware problem</li>
                                            <li><i class="icofont-check"></i> Accessories missing or damaged etc.</li>
                                        </ul>

                                        <h6>Q. What should I do if I receive a damaged parcel?</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit impedit similique qui, itaque delectus labore.</p>

                                        <h6>Q. I have received my order but the wrong item was delivered to me.</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam voluptatum beatae harum tempore, ab?</p>

                                        <h6>Q. Product Receipt and Acceptance Confirmation Process</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ducimus, temporibus soluta impedit minus rerum?</p>

                                        <h6>Q. How do I cancel my order?</h6>
                                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum eius eum, minima!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
         name: 'ProductDetail',
         props: ['id'],
         data() {
             return {
                 product: {}
             }
         },
         created() {
             this.loadProduct();
         },
         methods: {
             loadProduct() {
                 console.log(this.id);
                 axios.get('http://127.0.0.1:8000/api/v1/catalog/product/'+this.id).then(({ data }) => {
                    this.product=data;
                    console.log(this.product);
                    
                    }).catch((error) => {
                        console.log(error);
                        
                    }); 
             }
         }

    }
</script>

<style scoped>

</style>