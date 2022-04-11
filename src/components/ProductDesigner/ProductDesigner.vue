<template>
    <div class="productDesigner">
        <div class="productDesignerHeader">
            <div>
                <h3>Product designer</h3>
                <h2>That's me!</h2>
            </div>
            <p class="page-text">Over the past 12 years, I've worked with a diverse range of clients, from startups to Fortune 500 companies. I love crafting interfaces that delight users and help businesses grow.</p>
        </div>
        <product-designer-images />
        <education-experience />
    </div>
</template>

<script>
import ProductDesignerImages from "./ProductDesignerContent/ProductDesignerImages.vue"
import EducationExperience from "./ProductDesignerContent/EducationExperience.vue"

export default {
    name: 'Product Designer',
    components: {
        ProductDesignerImages,
        EducationExperience
    }
}
</script>

<style lang="scss" scoped>
    .productDesigner {
        padding-block: 110px;
        .productDesignerHeader {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            h3 {
                color: #FF5E69;
                margin-top: 20px;
            }
            h2 {
                margin-top: 15px;
            }
            p {
                max-width: 625px;
                line-height: clamp(1.2rem, 7.5vw, 40px);
                text-align: justify;
            }
        }
    }

</style>