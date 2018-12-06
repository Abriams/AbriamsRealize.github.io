<template>
    <div class="Slotdemo container">
        <div>
            <select v-model="prevDefault" @change="prevDate(); cityDate();">
                <option v-for="item in prev" :value="item.name">{{item.name}}</option>
            </select>
            <select v-model="cityDefault" @change="cityDate()" v-show="cityDefault">
                <option v-for="item in city" :value="item.name">{{item.name}}</option>
            </select>
            <select v-model="areaDefault" v-show="areaDefault">
                <option v-for="item in area" :value="item.name">{{item.name}}</option>
            </select>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Select",
        data() {
            return {
                prevDefault: "北京",
                cityDefault: "北京",
                areaDefault: "海淀区",
                prev: [
                    {
                        name: "请选择",
                        children: [],
                    },
                    {
                        name: "北京",
                        children: [
                            {
                                name: "请选择",
                                children: []
                            },
                            {
                                name: "北京",
                                children: [
                                    {
                                        name: "请选择"
                                    },
                                    {
                                        name: "朝阳区",
                                    },
                                    {
                                        name: "西城区",
                                    },
                                    {
                                        name: "门头沟区",
                                    },
                                    {
                                        name: "东城区",
                                    },
                                    {
                                        name: "海淀区",
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "上海",
                        children: [
                            {
                                name: "请选择",
                                children: []
                            },
                            {
                                name: "上海",
                                children: [
                                    {
                                        name: "请选择"
                                    },
                                    {
                                        name: "黄浦区",
                                    },
                                    {
                                        name: "卢湾区",
                                    },
                                    {
                                        name: "徐汇区",
                                    },
                                    {
                                        name: "长宁区",
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "湖北",
                        children: [
                            {
                                name: "请选择",
                                children: []
                            },
                            {
                                name: "武汉",
                                children: [
                                    {
                                        name: "请选择"
                                    },
                                    {
                                        name: "江岸区",
                                    },
                                    {
                                        name: "武昌区",
                                    },
                                    {
                                        name: "江汉区",
                                    },
                                    {
                                        name: "硚口区",
                                    }
                                ]
                            },
                            {
                                name: "黄石",
                                children: [
                                    {
                                        name: "朝阳区",
                                    },
                                    {
                                        name: "朝阳区",
                                    },
                                    {
                                        name: "朝阳区",
                                    }
                                ]
                            },
                            {
                                name: "十堰",
                                children: [
                                    {
                                        name: "朝阳区",
                                    },
                                    {
                                        name: "朝阳区",
                                    }
                                ]
                            }
                        ]
                    }
                ],
                city: [],
                area: [],
            }
        },
        methods: {
            prevDate() {
                let prev = this.prev;
                for(var i = 0; i < prev.length; i++) {
                    if(prev[i].name == this.prevDefault) {
                        this.city = prev[i].children;
                        break;
                    }
                };
                // this.cityDefault = this.city[0].name
                // if(this.prevDefault == "请选择") {
                //     this.cityDefault = '';
                //     this.areaDefault = '';
                //     return;
                // }
                // this.cityDefault = this.city[0].name;
                // if(this.city && this.city.length > 0 ){
                //     this.cityDefault = this.city[0].name
                // } else {
                //     this.cityDefault = '';
                //     this.areaDefault = ''
                // }
                this.city && this.city.length > 0 ? this.cityDefault = this.city[0].name : this.cityDefault = '';
            },
            cityDate() {
                let city = this.city;
                for(var i = 0; i < city.length; i++) {
                    if(city[i].name == this.cityDefault) {
                        this.area = city[i].children;
                        break;
                    }
                }
                this.area && this.area.length > 0 ? this.areaDefault = this.area[0].name : this.areaDefault = '';
            },
        },
        beforeMount:function(){   //生命周期    挂载前状态
            this.prevDate();
            this.cityDate();
        }
    }
    
</script>
