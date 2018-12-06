<template>
    <div class="Slotdemo container">
        <slotChildren>
            <template slot-scope="props">
                <div>新的slotchildrenheader</div>
                <div>新的内容<div>{{props.text}}</div></div>
            </template>
        </slotChildren>
    </div>
</template>
<script>
    import slotChildren from './slotChildren.vue'
    export default {
        name: "Slotdemo",
        components: {
            slotChildren
        },
        data() {
            return {
               
            }
        },
    }
    
</script>
