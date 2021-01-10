<template>
    <div>
        <button class=""
                @click="changePage(currentPage-1)" 
                >'<'</button>
        <ul>

            <li v-for="p in totalPages" :key="p">
                <button class=""
                :class="{active: currentPage === p}"
                @click="changePage(p)"
                >{{p}}</button>
            </li>
        </ul>
        <button class=""
                @click="changePage(currentPage+1)" 
                >'>'</button>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        props: ['total', 'item'],
        data() {
            return {
                currentPage: 1
            }
        },
        computed: {
            totalPages() {
                return Math.ceil( this.total/ this.item)
            }
        },
        methods: {
            changePage(pageNumber) {
                this.currentPage = pageNumber
                this.$emit('page-changed', pageNumber)
            }
        },

    }
</script>

<style scoped>

</style>