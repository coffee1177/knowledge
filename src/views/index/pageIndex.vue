<template>
    <div>
        <div class="tabbar">
            <!-- logo部分 -->
            <div class="logo-container">
                <img src="../../assets/知识.png" alt="知识库logo">
                <div class="logo-text">知识库</div>
            </div>

            <!-- 导航栏部分 -->
            <nav class="nav-container">
                <div class="nav-item" v-for="(value, key, objIndex) in tabbar.first" :key="objIndex">
                    <!-- 最顶部tab栏 -->
                    <div class="nav-title">{{ value.name }}</div>
                    <!-- 编程，游戏开发，功能，关于这些主分支 -->

                    <!-- 下拉菜单 -->
                    <div class="dropdown-menu">
                        <div class="menu-item" v-for="(item, arrIndex) in value.list" :key="arrIndex">
                            <div v-for="(value2, key2, objIndex2) in item" :key="objIndex2" class="submenu-title">
                                {{ key2 }}
                                <div class="submenu" v-if="value2.list">
                                    <router-link v-for="subItem in value2.list" :key="subItem.path" :to="subItem.path"
                                        class="submenu-item" @click.native="sendData([value.name, key2, subItem.name])">
                                        {{ subItem.name }}
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        
        <router-view v-if="this.$route.path != '/'"></router-view>

    </div>
</template>

<script>
export default {
    name: 'pageIndex',
    inject: ['appData'],
    data() {
        return {
            tabbar: this.appData
        }
    },
    created() {
    },
    methods: {
        sendData(x) {
            localStorage.setItem('data', JSON.stringify(x))
        }
    }
}

</script>

<style scoped>
.tabbar {
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 60px;
    background-color: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.logo-container {
    display: flex;
    align-items: center;
    margin-right: 40px;
}

.logo-container img {
    width: 32px;
    height: 32px;
    margin-right: 8px;
}

.logo-text {
    font-size: 20px;
    font-weight: bold;
    color: #333;
}

.nav-container {
    display: flex;
    height: 100%;
}

.nav-item {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 20px;
    cursor: pointer;
}

.nav-title {
    font-size: 16px;
    color: #333;
    transition: color 0.3s;
}

.nav-item:hover .nav-title {
    color: #1890ff;
}

.dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 200px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

.nav-item:hover .dropdown-menu {
    display: block;
}

.menu-item {
    padding: 8px 0;
}

.submenu-title {
    padding: 8px 20px;
    color: #333;
    transition: all 0.3s;
    position: relative;
}

.submenu-title:hover {
    background-color: #f5f5f5;
    color: #1890ff;
}

.submenu {
    display: none;
    position: absolute;
    left: 100%;
    top: 0;
    min-width: 200px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.submenu-title:hover .submenu {
    display: block;
}

.submenu-item {
    display: block;
    padding: 8px 20px;
    color: #333;
    text-decoration: none;
    transition: all 0.3s;
}

.submenu-item:hover {
    background-color: #f5f5f5;
    color: #1890ff;
}
</style>