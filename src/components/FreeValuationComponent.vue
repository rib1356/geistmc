<template>
    <div class="valuation-div">
        <p class="left-text">Selling Your Art ?</p>
        <i class="bi bi-arrow-right" ></i>
        <p class="right-text">Receive a free valuation</p>
    </div> 
</template>
<script>
export default {
    name: 'FreeValuationComponent',
    data () {
        return {
			baseURL: import.meta.env.PROD === true ? '' : '/', //Used as base URL for images as annoyingly local images need /
        }
    },
}

</script>

<style scoped>

    .valuation-div {
        margin-bottom: 3rem;
        width: 100%;
        height: 10vh;
        background-color: #F2F3F3;
        border: 1.5px solid #DFDFDF;
        border-radius: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    p {
        margin-bottom: 0;
    }

    .bi-arrow-right {
        font-size: 16px;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }

    .left-text {
        font-size: 14px;
    }

    .right-text {
        font-family: 'Montserrat-Bold', sans-serif;
        font-size: 14px;
        text-transform: uppercase;
    }

</style>
  