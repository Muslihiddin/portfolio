<template>
    <div class="services" id="services">
        <div class="servicesHeader">
            <h3>Services</h3>
            <h2>Code that solves problems, one production at a time</h2>
        </div>
        <div class="servicesBody">
            <div class="cards" v-for="card in cards" :key="card.id">
                <div class="card">
                    <div class="cardIcon"><img :src="card.icon" alt="Card icon"></div>
                    <div class="cardTitle">{{ card.title }}</div>
                    <div class="cardDescription">{{ card.description }}</div>
                    <ul class="cardList">
                        <li>{{ card.a }}</li>
                        <li>{{ card.b }}</li>
                        <li>{{ card.c }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [{id: 1, title: 'What I can do for you', description: "Faster, better products that your users love. Here's all the services I provide:", icon: require('../../assets/icon/servicesIcons/IMAGE.png'),a:'Design Strategy', b:'Web and Mobile App Design', c:'Front-end Development'},
                    {id: 2, title: "Applications I'm fluent in", description: "Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual.", icon: require('../../assets/icon/servicesIcons/IMAGE2.png'),a:'Sketch', b:'Webflow', c:'Figma'},
                    {id: 3, title: "What you can expect", description: "I design products that are more than pretty. I make them shippable and usable.", icon: require('../../assets/icon/servicesIcons/IMAGE3.png'),a:'Clean and functional', b:'Device and user friendly', c:'Efficient and maintainable'}],     
        }
    },
}
</script>

<style lang="scss" scoped>
    .servicesHeader {
        max-width: 770px;
        margin: 0 auto;
        text-align: center;
        h3 {
            color:#FF5E69;
            margin-bottom: 20px;
        }
    }
    .servicesBody {
        margin-top: 80px;
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
        .card {
            max-width: 300px;
            text-align: justify;
            margin: 50px 0 0;
            padding: 0 0 15px;
            border-bottom: none;
            .cardIcon {
                width: 70px;
                height: 70px;
                margin-bottom: 40px;
            }
            .cardTitle {
                font-size: 24px;
                font-weight: 700;
                line-height: 26px;
                margin-bottom: 25px;
            }
            .cardDescription {
                font-size: 16px;
                line-height: 28px;
                color: var(--gray);
                margin-bottom: 20px;
                height: 85px;
            }
            li {
                list-style-type: square;
                font-weight: 700;
                font-size: 16px;
                line-height: 28px;
                margin-bottom: 10px;
            }
        }
    }
   
@media screen and (max-width: 992px) {
  .card {
    border-bottom: 1px solid #dedede !important
  }
}
</style>