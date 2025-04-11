<template>
    <span class=" contain">
        <span v-for="(item,index) in resiverData" :key="index" >
            {{ item }}
            <span v-if="index!=resiverData.length-1"> > </span>
        </span>
    </span>
</template>

<script>
export default{
    data(){
        return {
            resiverData:[]
        }
    },
    created(){
        if(localStorage.getItem('data')){            
            this.resiverData=JSON.parse(localStorage.getItem('data'))
        }
        // console.log(this.resiverData)
    }
}
</script>

<style scoped>
.contain{
    width: 500px;
    margin:  0 auto;
    display: block;
    text-align: center;
    color: #808080;
    font-size: 16px;
    line-height: 1.5;
    margin: 10px 0;
}

.flex{
   display: flex; 
}
</style>