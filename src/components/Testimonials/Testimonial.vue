<template>
    <div class="testimonial" v-if="testimonials.length">
        <div class="image">
            <img :src="require('@/assets/images/Testimonials' + testimonials[currentTestimonial].img)" alt="">
        </div>
        <div class="text">
            <img src="@/assets/icon/work_experience/Testimonials.png" alt="">
            <h4>{{ testimonials[currentTestimonial].testimonial }}</h4>
            <div class="buttons">
                <h5>{{ testimonials[currentTestimonial].name }}<span>{{ testimonials[currentTestimonial].position }}</span></h5>
                <div class="buttons-pack">
                      <button @click="next">
                        <svg width="8" height="13" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.53487 7.34308L9.72237 13.0546L7.95487 14.6861L-0.00012207 7.34308L7.95487 0L9.72237 1.63154L3.53487 7.34308Z" fill="white"/>
                        </svg>
                    </button>
                     <button @click="next">
                        <svg width="8" height="13" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.1875 7.34308L0 1.63154L1.7675 0L9.7225 7.34308L1.7675 14.6862L0 13.0546L6.1875 7.34308Z" fill="white"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Testimonial',
    data() {
        return {
            testimonials: [],
            currentTestimonial: 0
        }
    },
    mounted() {
        fetch('http://localhost:3000/testimonials')
            .then(res => res.json())
            .then(data => this.testimonials = data)
            .catch(err => console.log(err.message)) 
    },
    methods: {
        next() {
            if (this.currentTestimonial == 0) 
            {
                this.currentTestimonial = 1
            } else {
                this.currentTestimonial = 0
            } 
        }
    }
}
</script>

<style lang="scss" scoped>
    .testimonial {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        margin-top: 85px;
    }
    .image {
        img {
        min-width: 300px;
        width: 100%;
        max-width: 485px;
        min-height: 280px;
        }

    }
    .text {
        img {
            margin-bottom: 32px;
        }
        h4 {
            max-width: 565px;
            width: 100%;
            font-size: clamp(1.7rem, 6vw, 2.25rem);
            line-height: clamp(36px, 10vw, 46px);
        }
        .buttons {
            margin-top: 100px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            h5 {
                display: flex;
                flex-direction: column;

                font-size: 20px;
                line-height: 20px;
                span {
                    font-size: 18px;
                    line-height: 18px;
                    font-weight: 400;
                    margin-top: 8px;
                }
            }
        }
        .buttons-pack {
            display: flex;
            align-items: center;
            justify-content: center;
            button {
                width: 54px;
                height: 54px;
                background-color: #000;

                display: flex;
                align-items: center;
                justify-content: center;
                border: none;
                outline: none;
                cursor: pointer;
                &:hover {
                    background-color: lighten(#000, 15%);
                }
                &:active {
                    background-color: lighten(#000, 35%);
                    transform: scale(.9);
                }
            }
        }

    }
    @media screen and(max-width: 1200px) {
        .testimonial {
            justify-content: center;
        }
        .image {
            margin-bottom: 20px;
        }
    }
</style>