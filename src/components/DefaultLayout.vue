<template>
    <div class="default-layout">
        <Header/>
        <slot/>
        <Footer/>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: "DefaultLayout",
    components: { Header, Footer },
}
</script>