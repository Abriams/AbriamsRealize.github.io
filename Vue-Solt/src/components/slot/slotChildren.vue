<template>
    <div>
        <header>slotchildrenheader</header>
        <main>这是子组件的内容<slot :text="msg"></slot></main>
        <div></div>
    </div>
</template>
<script>
    export default {
        name: '',
        data() {
            return {
                msg: "slot分发内容哈哈哈哈",
            }
        },
    }
</script>
