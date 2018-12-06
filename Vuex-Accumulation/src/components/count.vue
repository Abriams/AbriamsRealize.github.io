<template>
    <div>
        <div>
            <el-radio-group v-model="radio2" @change.native="getChange(radio2)" ref="getRefs">
                <el-radio :label="3">A单价20</el-radio>
                <el-radio :label="6">B单价40</el-radio>
                <el-radio :label="9">C单价60</el-radio>
            </el-radio-group>
        </div>
        <!-- <button @click="change()">+</button> -->
        <div class="el_content">
            <el-button type="success" @click="changeAdd()">+</el-button>
            <el-input v-model="input" placeholder="请输入内容" disabled></el-input>
            <el-button type="success" plain @click="changeReduce()">-</el-button>
        </div>
        <!-- <button @click="$store.dispatch('change_reduce')">-</button> -->
        <!-- <button @click="getmessage()">get</button> -->
        <div class="con_show">
            <el-input v-model="input" placeholder="请输入内容" v-show="show"></el-input>
        </div>  
        <div class="con_button">
            <el-button type="warning" round @click="getmessage()">获取count</el-button>
            <el-button type="danger" round @click="changeShow()" ref="hide">{{$store.state.cart.params}}</el-button>
            <!-- <button @click="changeShow()" ref="hide">hide</button> -->
        </div>
        <div class="getMenoy">
            <el-button type="warning" round>{{$store.state.cart.allMoney}}</el-button>
            <el-button type="warning" round @click="submitCount()">提交</el-button>
        </div>
        <!-- <input type="text" :value="$store.state.cart.count"> -->
        
        <!-- <el-input v-model="input" placeholder="请输入内容"></el-input> -->                                                          
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        data () {
            return {
                msg: 'Hellow Vuex',
                show: false,
                num1: 1,
                input: '1',
                radio2: 3,
                money: '20',
            }
        },
        methods: {
            getmessage() {
                console.log(this.$store.state.cart.count)
            },
            changeAdd() {
                const value = this.$refs.getRefs.value;
                console.log(this.$refs.getRefs.value)
                let money = '';
                if(value == 3) {
                    money = 20;
                } else if (value == 6) {
                    money = 40;
                } else if (value == 9) {
                    money = 60;
                }
                this.$store.dispatch('change_count',{money});
                this.input = this.$store.state.cart.count
                console.log(this.$store.state.cart.allMoney)
            },
            changeShow() {
                let ishide = this.$store.state.cart.params;
                if( ishide == 'hide') {
                    ishide = 'show'
                } else {
                    ishide = 'hide'
                }
                this.$store.dispatch('change_isshow','ishide')
                this.show = this.$store.state.cart.isshow
                this.$refs.hide.innerHTML = this.$store.state.cart.params
                console.log(this.$store.state.cart.params)
            },
            changeReduce() {
                const value = this.$refs.getRefs.value;
                let money = '';
                if(value == 3) {
                    money = 20;
                } else if (value == 6) {
                    money = 40;
                } else if (value == 9) {
                    money = 60;
                }
                this.$store.dispatch('change_reduce', {money});
                this.input = this.$store.state.cart.count 
            },
            getMoney () {
                // this.money = this.$store.state.cart.allMoney
            },
            getChange (value) {
                var money = '';
                if(value == 3) {
                    money =  20;
                } else if (value == 6) {
                    money = 40
                } else if (value == 9) {
                    money = 60
                }
                console.log(money)
                this.money = this.$store.dispatch('change_money',{money});
            },
            submitCount() {
                this.$router.push('/accounts')
            }
        },
        computed: {
            ...mapState({
                count: state => {
                    console.log(state.count)
                }
            })
        }
    }
</script>
<style scoped>
    .el_content {
        display: flex;
        border-radius: 0px;
        margin-top: 15px;
    }
    .el-button {
        border-radius: 0px;
    }
    .el-input__inner {
        border-radius: 0px ;
    }
    .con_show{
        margin-top: 15px;
    }
    .con_button{
        margin-top: 15px;
    }
    .getMenoy{
        margin-top: 15px;
    }
</style>

