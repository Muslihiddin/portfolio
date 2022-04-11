<template>
    <div class="project-card">
        <div class="image">
            <img :src="require(`../../assets/images/ProjectsImg${item.img}`)" :alt="item.title">
        </div>
        <div class="description">
            <p>{{ item.type }}</p>
            <h4>{{ item.title }}</h4>
            <a href="#">View Project <svg width="12" height="12" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.72837 5.50978L5.57767 1.35907L6.67183 0.2649L12.6905 6.28359L6.67183 12.3023L5.57767 11.2081L9.72837 7.0574H0.30957V5.50978H9.72837Z" fill="black"/>
                                     </svg></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Projects Card',
    props: ['item', 'active'],
}
</script>

<style lang="scss" scoped>
    .image {
        img {
            min-width: 486px;
            max-width: 486px;
            width: 100%;
            height: auto;
        }
    }
    .description {
        padding: clamp(22px, 5vw, 32px);
        background: #fff;
        p {
            color: #3C46FF;
            font-size: 14px;
            line-height: 14px;
            letter-spacing: 4px;
            font-weight: 700;
            text-transform: uppercase;
        }
        h4 {
            font-size: clamp(18px, 3vw, 24px);
            line-height: clamp(18px, 3vw ,26px);
            margin: 15px 0 20px;
        }
        a {
            &:hover path, &:hover {
            color: #3C46FF;
            fill: #3C46FF;
            transition: all 0.1s ease-in-out;
        }
    }
    }

    @media screen and (max-width: 576px) {
    .image {
        img {
            min-width: 316px;
        }
    }
}
</style>