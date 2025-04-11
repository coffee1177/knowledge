<template>
    <div class="article-container">
        <div class="article-header">
            <h1 class="article-title">{{ dectory.list[selectTabbar].name }}</h1>
        </div>
        <div class="article-content">
            <!-- 这里可以添加文章内容 -->
            {{ dectory.list[selectTabbar].content }}
        </div>
    </div>
</template>

<script>
export default{
    inject: ['dectory','selectTabbar'],
    created(){
        
    }
}
</script>

<style scoped>
.article-container {
    flex: 1;
    padding: 24px;
    background-color: #ffffff;
    min-height: 100%;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.article-header {
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid #e6e9ed;
}

.article-title {
    font-size: 24px;
    font-weight: 600;
    color: #303133;
    margin: 0;
}

.article-content {
    color: #606266;
    line-height: 1.6;
    font-size: 16px;
}
</style>