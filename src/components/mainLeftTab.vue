<template>
    <div class="left-tab">
        <div class="tab-list">
            <div v-for="(item,index) in dectory.list" 
                :key="index" 
                @click="select(index)"
                class="tab-item"
                :class="{ 'active': selectTabbar == index }">
                {{ item.name }}
            </div>
        </div>
        <a class="write-more">书写更多</a>
    </div>
</template>

<script>

export default{
    inject: ['dectory','selectTabbar'],
    data(){
        return {
            selectTabbar:this.selectTabbar,
            dectory: this.dectory
        }
    },
    methods: {
        select(index){
            this.selectTabbar = index
            this.$emit('selected', index)
        }
    },
    created(){
        console.log(this.selectTabbar)
    }
}
</script>


<style scoped>
.left-tab {
    width: 240px;
    height: 100%;
    background-color: #f5f7fa;
    border-right: 1px solid #e6e9ed;
    padding: 20px 0;
}

.tab-list {
    margin-bottom: 20px;
}

.tab-item {
    padding: 12px 24px;
    cursor: pointer;
    color: #606266;
    font-size: 14px;
    transition: all 0.3s ease;
}

.tab-item:hover {
    background-color: #ecf5ff;
    color: #409eff;
}

.tab-item.active {
    background-color: #ecf5ff;
    color: #409eff;
    font-weight: 500;
}

.write-more {
    display: block;
    margin: 0 24px;
    padding: 8px 0;
    text-align: center;
    color: #409eff;
    font-size: 14px;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.3s ease;
}

.write-more:hover {
    background-color: #ecf5ff;
}
</style>