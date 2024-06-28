$(document).ready(function () {
    $.get('/heatmap/data', function (data) {
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: { lat: 37.7749, lng: -122.4194 },
        mapTypeId: 'roadmap'
      });
  
      const heatmapData = data.locations.map(location => {
        return new google.maps.LatLng(location.latitudeE7 / 1e7, location.longitudeE7 / 1e7);
      });
  
      const heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatmapData,
        radius: 20
      });
  
      heatmap.setMap(map);
    });
  });
  