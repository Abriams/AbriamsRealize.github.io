<template>
    <div>{{getAllMoney}}</div>
</template>
<script>
import { mapState,mapMutations,mapGetters } from 'vuex';
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters(["getCount", "getAllMoney"])
    },
    created () {
        console.log(this.getCount, this.getAllMoney);
    }
}
</script>
