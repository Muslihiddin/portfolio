<template>
    <ul>
        <li v-for="(blog, index) in blogs" :key="index">
            <p>{{ blog.createdTime }}<span>{{ blog.readTime }}</span></p>
            <h5>{{ blog.title }}</h5>
            <a href="#">Read the article <svg width="15" height="15" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.72837 5.50978L5.57767 1.35907L6.67183 0.2649L12.6905 6.28359L6.67183 12.3023L5.57767 11.2081L9.72837 7.0574H0.30957V5.50978H9.72837Z" fill="white"/>
                                            </svg></a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Blogs Content',
    data() {
        return {
            blogs: [
                {createdTime: 'April 16, 2022',
                 readTime: '.6mins',
                 title: 'Design tips for designers, that cover everything you need'    
                },
                {createdTime: 'April 16, 2022',
                 readTime: '.5mins',
                 title: 'How to build rapport with your web design clients'    
                },
                {createdTime: 'April 16, 2022',
                 readTime: '.5mins',
                 title: 'Top 6 free website mockup tools 2021'    
                },
                {createdTime: 'April 16, 2022',
                 readTime: '.7mins',
                 title: 'Logo design trends to avoid in 2021'    
                },
                {createdTime: 'April 16, 2022',
                 readTime: '.8mins',
                 title: '22 best UI design tools'    
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    ul {
        margin-bottom: 150px;
    }
    li {
        color: #fff;
        max-width: 690px;
        width: 100%;
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        padding: 35px 0;
        p {
            font-size: 15px;
            line-height: 16px;
            font-weight: 700;
            opacity: 0.7;
            span {
                font-size: 14px;
                line-height: 16px;
                font-weight: 700;
                opacity: 0.7;

                padding-left: 5px;
            }
        }
        h5 {
            font-size: 28px;
            line-height: 36px;
            font-weight: 700;
            text-align: justify;

            margin: 25px 0 40px;
        }
        a {
            font-size: 18px;
            line-height: 18px;
            font-weight: 700;
            color: #fff;

            position: relative;
            svg {
                position: absolute;
                top: 4px;
                right: -25px;
            }
            &:hover path, &:hover {
                color: #FFA84B;
                fill: #FFA84B;
                transition: all 0.1s ease-in-out;
            }
        }
    }

</style>