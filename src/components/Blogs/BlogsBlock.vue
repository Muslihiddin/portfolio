<template>
    <div class="blogs" id="blogs">
        <div class="black-background"></div>
        <div class="container">
            <div class="blogs-header">
                <h3>Blogs</h3>
                <h2>Latest Blogs</h2>
                <router-link :to="{ name:'blogs' }">View all<svg width="15" height="15" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.72837 5.50978L5.57767 1.35907L6.67183 0.2649L12.6905 6.28359L6.67183 12.3023L5.57767 11.2081L9.72837 7.0574H0.30957V5.50978H9.72837Z" fill="white"/>
                                    </svg></router-link>
            </div>
            <div class="blogs-content">
                <blogs-content />
            </div>
        </div> 
    </div>
</template>

<script>
import BlogsContent from './BlogsContent.vue'

export default {
    name: 'Blogs Block',
    components: {
        BlogsContent
    }
}
</script>

<style lang="scss" scoped>
.blogs {
    position: relative;
    z-index: 1;
    
    .black-background{
        background: #000;

        position: absolute;
        top: clamp(-280px, -31vw, -255px);
        bottom: 0;
        left: 0;
        right: 0;

        padding-top: 300px;
    }
}
 .container {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .blogs-header {
        width: 65%;
    }

    h3 {
        color: #FFA84B;
    }
    
    h2 {
        color: #fff;
        margin: 20px 0 32px;    
    }

    a {
        color: #fff;
        font-size: 18px;
        line-height: 18px;
        font-weight: 700;
        position: relative;

        svg{
            position: absolute;
            top: 3px;
            right: -25px;
        }

        &:hover path, &:hover {
            color: #FFA84B;
            fill: #FFA84B;
            transition: all 0.1s ease-in-out;
        }
    }
 }
 @media screen and (max-width: 992px) {
     .container{
         flex-direction: column;
        .blogs-header {
            width: 100%;
        }
    }
}
</style>