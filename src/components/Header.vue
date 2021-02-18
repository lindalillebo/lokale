<template>
        <nav>
            <div id="logo">
                <a href="index.html">
                    <img src="../assets/logo-golden-text.svg" alt="logo-golden-text">
                </a>
            </div>
            <div id="toggle">
                <img src="../assets/hamburger.svg" alt="hamburger menu" id="hamburger">
                <img src="../assets/cross.svg" alt="cross" id="cross">
            </div>
            <ul id="nav-links">
                <li>
                    <a class="add-venue" href="add-venue.html">registrer lokale</a>
                </li>
                <li>
                    <a href="log-in.html"><button>logg inn</button></a>
                </li>
            </ul>
        </nav>
</template>


<script>


export default {
    name: 'Header'
}


</script>

<style lang="scss">
    
</style>