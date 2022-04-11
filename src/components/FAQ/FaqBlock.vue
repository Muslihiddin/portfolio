<template>
    <div class="faq">
        <h3>FAQ</h3>
        <h2>Frequently asked questions</h2>
        <faq-list />
    </div>
</template>

<script>
import FaqList from './FaqList.vue'

export default {
    name: 'FAQ Block',
    components: {
        FaqList
    }
}
</script>

<style lang="scss" scoped>
    .faq {
        padding-top: 75px;
        background-color: #000;
        text-align: center;
        h3 {
            color: var(--orange);
            margin-top: 3px;
        }
        h2 {
            color: #fff;
            margin-top: 20px;
        }
    }
</style>