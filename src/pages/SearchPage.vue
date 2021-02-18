<template>
    <div>
        <HeroSearch/>
            <div class="container">
                <h2>hvilket lokale trenger du?</h2>

                <div class="venue-links">
                    <div class="venue-link-1">
                        <a href="">
                            <img class="cover" src="../assets/robert-mathews-xXaLfz6V9rQ-unsplash.jpg"
                                alt="Serveringslokaler bilde">
                            <h4>Serveringslokaler</h4>
                        </a>
                    </div>
                    <div class="venue-link-2">
                        <a href="">
                            <img class="cover" src="../assets/pexels-thibault-trillet-167491.jpg" alt="Festlokaler bilde">
                            <h4>Festlokaler</h4>
                        </a>
                    </div>
                    <div class="venue-link-3">
                        <a href="">
                            <img class="cover" src="../assets/pexels-pixabay-221537.jpg" alt="Møte og konferanse bilde">
                            <h4>Møte og konferanse</h4>
                        </a>
                    </div>
                    <div class="venue-link-4">
                        <a href="">
                            <img class="cover" src="../assets/james-bold-174ZYtxCtr4-unsplash.jpg" alt="Bryllup bilde">
                            <h4>Bryllup</h4>
                        </a>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
</template>

<script>
import HeroSearch from '../components/HeroSearch.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'SearchPage',
    components: { 
        HeroSearch,
        Footer
    }
}
</script>

<style lang="scss">
    
</style>