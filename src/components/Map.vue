<template>
    <div>
        <div id="map">
            <iframe
                width="600"
                height="450"
                style="border:0"
                loading="lazy"
                allowfullscreen
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBzbFAN1xNxA2nxHJMz7-F3Dad5P7pkuTk
                &q=Space+Needle,Seattle+WA">
            </iframe>
        </div>
    </div>
</template>


<script>


export default {
    
      function initMap() {

        const place = {  };

        const map = new google.maps.Map(document.getElementById("map"), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 4,
            mapId: '82b60e18eff0d34a',
        });

        const marker = new google.maps.Marker({
            position: place,
            map: map,
        });
    }
}

 
</script>


<style lang="scss">
    
</style>