<template>
    <div class="productsfilter">
        <h1>Filter page</h1>
        <Pagination :total="total" :item="products.length" @page-changed="loadProducts" />
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import axios from 'axios'

import LeftFilter from '../components/LeftFilter'
import SinglProduct from '../components/SinglProduct';
import Pagination from '../components/Pagination.vue';

    export default {
        name: "ProductsFilter",
        props: ['id'],
        

        data() {
            return {
                products: [],
                page: 2,
                total: 0
            }
        },
        components: {LeftFilter, SinglProduct, Pagination},
        created() {
             this.loadProducts(this.page);
         },
        computed: {
            ...mapGetters([
            'PRODUCTS'
            ]),
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS'
            ]),
            async loadProducts(pageNum) {
                 
                 /* axios.get('127.0.0.1:8000/api/v1/catalog/product/', {
                            params: { category: this.id }
                            }).then(({ data }) => {
                    this.products=data;
                    console.log(this.products);
                    
                    }).catch((error) => {
                        console.log(error);
                        
                    });  */
                
                    this.products =  await fetch(
                        `${this.$store.getters.GETSERVERURL}/catalog/product?category=${this.id}&page=${pageNum}`
                        ).then(response => response.json()
                        ).then(response => {
                            
                            this.total = response.count
                            return response.results
                        });
                    console.log(this.products);
                    console.log(this.total);
            }
        },
        /* mounted() {
            this.GET_PRODUCTS()
        }, */
    }
</script>

<style scoped>

</style>