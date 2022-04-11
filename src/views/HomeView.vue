<template>
    <div class="container">
        <header-component />
        <about-section />
        <trusted-section />
        <services-block />
        <projects-block />
    </div>
        <blogs-block />
    <div class="container">
        <product-designer />
        <testimonials-blog />
        <faq-block />
    </div>
</template>

<script>
import HeaderComponent from "../components/Header/HeaderComponent.vue"
import AboutSection from '../components/About/AboutSection.vue'
import TrustedSection from '../components/Trust/TrustBlockComponent.vue'
import ServicesBlock from '../components/ServicesBlock/ServicesBlock.vue'
import ProjectsBlock from '../components/ProjectsBlock/ProjectsBlock.vue'
import BlogsBlock from "../components/Blogs/BlogsBlock.vue"
import ProductDesigner from "@/components/ProductDesigner/ProductDesigner.vue"
import TestimonialsBlog from "@/components/Testimonials/TestimonialsBlog.vue"
import FaqBlock from "@/components/FAQ/FaqBlock.vue"

export default {
    name: 'Home',
    components: {
    HeaderComponent,
    AboutSection,
    TrustedSection,
    ServicesBlock,
    ProjectsBlock,
    BlogsBlock,
    ProductDesigner,
    TestimonialsBlog,
    FaqBlock
}

}
</script>
