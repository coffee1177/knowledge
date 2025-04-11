<template>
    <div>
        <introduceTitle></introduceTitle>

        <div class="mainContent">
            <mainLeftTab @selected="select"></mainLeftTab>
            <mainArticle></mainArticle>
        </div>

    </div>
</template>

<script>
import introduceTitle from '../../../../../components/introduceTitle.vue'
import mainLeftTab from '../../../../../components/mainLeftTab.vue'
import mainArticle from '../../../../../components/mainArticle.vue'
import { computed } from 'vue'
import dectory from '../../../../../data/kownledge/code/front-end/vue/dectory.json'

export default {
    name: 'pageIndex',
    components: {
        introduceTitle,
        mainLeftTab,
        mainArticle
    },
    props: {
        tabIndex: {
            type: Number,
            default: 0
        }
    },
    data(){
        return {
            selectTabbar: this.tabIndex,
        }
    },
    provide(){
        return {
            dectory: dectory,
            selectTabbar: computed(() => this.selectTabbar)
        }
    },
    methods:{
        select(index){
            this.selectTabbar = index
            this.$router.push({ query: { tab: index } })
        }
    },
    created(){
        console.log(this.$route.query.tab)
        this.selectTabbar = this.$route.query.tab ? this.$route.query.tab : 0
    }
}
</script>

<style>
.mainContent {
    display: flex;
    min-height: calc(100vh - 60px);
    background-color: #f5f7fa;
}
</style>