<template>
  <div class="container">
    <div class="blogs-page">
      <back-button />
      <h1>Blogs</h1>
      <ul>
        <li v-for="(blog,index) in blogs" :key="index">
          <div class="blog-card">
            <div :style="{ backgroundImage: 'url('+ blog.img +')'}" class="image"></div>
            <div class="body">
              <p>{{ blog.createdTime }}<span>{{ blog.readTime }}</span></p>
              <h5>{{ blog.title }}</h5>
            </div>
            <div class="footer">
              <a href="#">Open post</a>
            </div>
          </div>
        </li>
      </ul>
    </div>  
  </div>
</template>

<script>
import backButton from '../../components/Buttons/ProjectsBackDesktop.vue'
export default {
    name: 'Blogs Page',
    components: {
        backButton
    },
    data() {
        return {
            blogs: [
                {createdTime: 'April 16, 2022',
                 readTime: '.6mins',
                 title: 'Design tips for designers, that cover everything you need',
                 img: 'https://unsplash.it/460/300'  
                },
                {createdTime: 'April 16, 2022',
                 readTime: '.5mins',
                 title: 'How to build rapport with your web design clients',
                 img: 'https://unsplash.it/461/300'    
                },
                {createdTime: 'April 16, 2022',
                 readTime: '.5mins',
                 title: 'Top 6 free website mockup tools 2021',
                 img: 'https://unsplash.it/460/299'    
                },
                {createdTime: 'April 16, 2022',
                 readTime: '.7mins',
                 title: 'Logo design trends to avoid in 2021',
                 img: 'https://unsplash.it/459/300'    
                },
                {createdTime: 'April 16, 2022',
                 readTime: '.8mins',
                 title: '22 best UI design tools',
                 img: 'https://unsplash.it/459/301'    
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
  .blogs-page {
    padding-block: 50px;
  }
  h1 {
    margin-block: 25px;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
  }
  .image {
    max-width: 460px;
    width: 100%;
    height: 250px;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 10px;
  }
  .body {
    height: 75px;
  }
  p {
    font-size: 0.8rem;
    font-weight: 700;
    color: rgba($color: #000000, $alpha: 0.75);
    span {
      padding-left: 10px;
    }
  }
  h5 {
    margin-top: 10px;
    font-size: 1.3rem;
  }
  .footer {
    margin-top: 25px;
    text-align: end;
    a {
      font-weight: 700;
      padding: 10px 30px;
      background-color: var(--orange);
      color: #fff;
    }
  }
</style>