<template>
  <div class="aboutSection" id="aboutSection">
      <div class="descriptionBlock">
          <h1 style="color: var(--orange)">I make products</h1>
          <h1>that delight and inspire people.</h1>
          <p>Hi! I'm Muslihiddin, a frontend developer based in Tashkent. I create user-friendly web apps for fast-growing startups.</p>
            <div class="buttons">
                <black-button />
                <white-button />
            </div> 
      </div>
      <div class="imageBlock">
          <img src="../../assets/images/IMAGE.png" alt="Profile picture">
      </div>
  </div>
</template>

<script>
import blackButton from '../Buttons/BlackRectangleButton.vue'
import whiteButton from '../Buttons/WhiteDownloadButton.vue'

export default {
    name: 'AboutSection',
    components: {
        blackButton,
        whiteButton
    }

}
</script>

<style lang="scss" scoped>

h1 {
    font-size: clamp(1.5rem, 10vw, 72px);
    font-weight: 700;
    line-height: clamp(1.5rem, 10.5vw, 82px);
    letter-spacing: 2px;
}

p {
    display: inline-block;
    margin: 30px 0 40px;

    font-size: clamp(0.5rem, 5vw,22px);
    line-height: clamp(0.6rem, 6vw, 33px);
    color: var(--gray);
}
.aboutSection {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.descriptionBlock {
    max-width: 50%;
}

.imageBlock {
    max-width: 50%;
    img {
        width: 100%;
    }
}

.buttons {
  display: flex;
  align-items: center;
}



@media screen and (max-width: 992px) {
  .aboutSection {
    flex-direction: column-reverse;
    padding: 0 10px;
  }

  .descriptionBlock {
    max-width: 100%;
  }
  .imageBlock {
    max-width: 100%;
  }
  .buttons {
    justify-content: space-evenly;
  }
}

</style>