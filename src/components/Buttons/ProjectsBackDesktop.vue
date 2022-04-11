<template>
    <button
     @click="$router.go(-1)"
    >
        <svg width="12" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.53487 7.34308L9.72237 13.0546L7.95487 14.6861L-0.00012207 7.34308L7.95487 0L9.72237 1.63154L3.53487 7.34308Z" fill="black"/>
        </svg>
        Back
    </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    button {
        position: relative;
        border: none;
        outline: none;
        cursor: pointer;

        padding: 10px 20px;
        background: #fff;

        font-size: 18px;
        line-height: 18px;
        font-weight: 700;
        
        svg {
            position: absolute;
            top: 10px;
            left: -1px;
        }
    }
</style>