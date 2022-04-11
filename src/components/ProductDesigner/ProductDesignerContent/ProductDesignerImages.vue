<template>
    <div class="productDesignerImages">
        <div class="photo-grid">
            <div 
                class="card card--1 card-tall"
            >
                
            </div>
            <div 
                class="card card--2 card-tall card-wide"  
            >
                
            </div>
            <div 
                class="card card--3"
            >
                
            </div>
            <div 
                class="card card--4"
            >
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Product Designer Images'
}
</script>

<style lang="scss" scoped>
    .photo-grid {
        display: grid;
        gap: 1rem;
        grid-auto-flow: dense;
        margin-top: 55px;

        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-auto-rows: 300px;
    }

    .card {
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        &--1 {
            background-image: url('../../../assets/images/Product_designer/IMAGE.png');
        }
        &--2 {
            background-image: url('../../../assets/images/Product_designer/IMAGE2.png');
        }
        &--3 {
            background-image: url('../../../assets/images/Product_designer/IMAGE3.png');
        }
        &--4 {
            background-image: url('../../../assets/images/Product_designer/IMAGE4.png');
        }
    }

    @media screen and(min-width: 600px) {
    .photo-grid {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }    
    .card-tall {
        grid-row: span 2 / auto;
    }

    .card-wide {
        grid-column: span 2 / auto;
    }
    }
</style>