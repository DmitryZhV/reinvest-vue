<template>
    <footer class="page-footer  font-small mt-4 animation fadeIn ">
        <div class="container">
            <div class="row">

                <div class="col-12 col-sm-6 col-lg-3 col-md-6 my-4">
                    <a href="/" class=" mr-3 ">
                        <img class=" mb-2 w-50 " src="../assets/img/nav/logo.png" alt="logo">
                    </a>
                    <hr class=" white my-2">
                    <p class="text-left"> г. Москва, Щелковское шоссе, 100к1,<br>подъезд 3, 4 этаж.</p>
                    <p class="text-left"><i class="fas fa-phone"></i> +7(495)663-32-26</p>
                    <p class="text-left"><i class="fas fa-mobile-alt"></i> +7(916)260-02-66</p>
                    <p class="text-left"><a href="mailto:reinvest-service@mail.ru"><i class="fa fa-envelope"></i> reinvest-service@mail.ru</a></p>
                </div>

                <div class="col-12 col-sm-6 col-lg-3 col-md-6 my-4">
                    
                    <p class="text-left mb-4"><strong>Категории товаров</strong></p>
                    <hr class=" white my-2">
                    <div v-for="category in CATEGORIES" 
                        :key="category.id" >
                        <p class="text-left"><a href="#" @click="goTo(category.name)">{{ category.name }}</a></p>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3 col-md-6 my-4">

                    <p class="text-left  mb-4"><strong>Помощь</strong></p>
                    <hr class=" white my-2">
                    <p class="text-left">Контакты</p>
                    <p class="text-left">FAQ</p>
                    <p class="text-left">Доставка</p>
                    <p class="text-left">Оплата</p>
                    <p class="text-left">Ремонт и обслуживание</p>
                    <p class="text-left">Прайс-лист</p>
                    

                </div>
                <div class="col-12 col-sm-6 col-lg-3 col-md-6 my-4">
                   
                    <p class="text-left"><strong>Будь в курсе новых акций</strong></p>
                    <hr class=" white my-2">
                    <p class="text-left">Подпишись на нашу рассылку </p>
                    

                </div>
            </div>


        </div>
  
        <div class="container">
            <hr class=" white ">
        </div>
        <div class="container">
            <div class="row d-flex justify-content-between ">
                <div class="d-flex align-items-center">
                    <p class="text-center">© Реинвест-Сервис 2020</p>
                </div>
                <div class="d-flex align-items-left">
                    <a href="/" class=" mr-3 ">
                        <img class=" img-logo-rbk " src="../assets/img/footer/rbk.png" alt="">
                    </a>
                    <a href="/" class=" mr-3 ">
                        <img class=" img-logo-rbk " src="../assets/img/footer/visa.png" alt="">
                    </a>
                    <a href="/" class=" mr-3 ">
                        <img class=" img-logo-rbk " src="../assets/img/footer/master.png" alt="">
                    </a>
                    <a href="/" class=" mr-3 ">
                        <img class=" img-logo-rbk " src="../assets/img/footer/mir.png" alt="">
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
         name: "Footer",
         components: {
            
        },
        computed: {
            ...mapGetters([
            'CATEGORIES'
            ]),
        },
        methods: {
            goTo(id) {
            //this.SET_CATEGORY_TO_STATE(id);
            this.$router.push({ name: "ProductsFilter", params: {id: id}});
            },
        }
    }
</script>
    
<style scoped>
footer.page-footer{
color: #7B7B7B;
background-color: #FAFAFA;
padding-bottom: 8px;
}
footer.page-footer a{
color: #7B7B7B;
}
footer.page-footer a:hover{
color: #cf0000;
}
footer.page-footer .footer-copyright {
color: black;
}
.img-logo-footer {
left:0;
}

.btn-footer {
        background-color: #cf0000;
        border: 0px solid;
        border-radius: .25rem;
        color: #ffffff;
        font-size: 14px;
        height: 40px;
        left: -5px;
        text-align: center;
        line-height: 5px;
        margin-top: 8px;
        
        
      }

      .img-logo-rbk {
        height: 30px;
      }
</style>