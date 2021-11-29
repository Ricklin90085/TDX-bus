<template>
  <div id="map" class="w-screen h-screen"></div> 
</template>

<script setup>


const initMap = () => {
  const directionsService = new google.maps.DirectionsService()
  const directionsDisplay = new google.maps.DirectionsRenderer()

  let map = new google.maps.Map(document.getElementById("map"), {
    mapId: '4394728b98042216',
    center: { lat: 25.049362844605728, lng: 121.51801205345981 },
    zoom: 16
  })
  const marker = new google.maps.Marker({
    position: { lat: 25.049362844605728, lng: 121.51801205345981 },
    map: map.value
  })

  directionsDisplay.setMap(map)

  // 路線相關設定
  const request = {
    origin: { lat: 25.034010, lng: 121.562428 },
    destination: { lat: 25.037906, lng: 121.549781 },
    travelMode: 'TRANSIT',
    transitOptions: {modes:['BUS']}
  }

  // 繪製路線
  directionsService.route(request, function (result, status) {
    if (status == 'OK') {
      // 回傳路線上每個步驟的細節
      console.log(result)
      directionsDisplay.setDirections(result)
    } else {
      console.log(status)
    }
  })
}

onMounted(() => {
  initMap()
})

</script>
