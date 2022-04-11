<template>
  <div>
    <a href="../../assets/CV_of_Muslihiddin.pdf" download="CV_of_Muslihiddin">
      Download CV
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.72837 5.50978L5.57767 1.35907L6.67183 0.2649L12.6905 6.28359L6.67183 12.3023L5.57767 11.2081L9.72837 7.0574H0.30957V5.50978H9.72837Z"
          fill="black"
        />
      </svg>
    </a>
  </div>
</template>

<style lang="scss" scoped>
a {
  position: relative;
  display: flex;
  align-items: center;
  width: 150px;
  height: 60px;
  background: #fff;
  outline: none;
  border: none;

  margin-left: 50px;

  cursor: pointer;
  color: var(--black);
  font-size: clamp(14px,1vw,18px);
  line-height: clamp(14px,1vw,18px);
    &:hover, &:hover path {
      fill: lighten(black, 30%);
      color: lighten(black, 30%);
    }

    svg{
      position: absolute;
      right: 5px;
      top: 22px;
    }
}

@media screen and (max-width: 576px) {
  a {
    margin-left: 20px;
  }
}

</style>
