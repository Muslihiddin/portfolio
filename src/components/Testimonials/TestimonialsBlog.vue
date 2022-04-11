<template>
    <div class="testimonials">
        <h3>Testimonials</h3>
        <h2>Word on street</h2>
        <testimonial />
    </div>
</template>

<script>
import Testimonial from '@/components/Testimonials/Testimonial.vue'

export default {
    name: 'Testimonials Blog',
    components: {
        Testimonial
    }
}
</script>

<style lang="scss" scoped>
    .testimonials {
        margin-top: 50px;
        padding-bottom: 160px;
        h3 {
            color: #4353FF;
            margin-bottom: 20px;
        }
    }
</style>