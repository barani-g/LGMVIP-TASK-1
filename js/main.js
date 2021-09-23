$(".owl-carousel").owlCarousel({
    merge:true,
    loop:true,
    video:true,
    image:true
  });
  
 
  const marker = new google.maps.Marker({
    position: arani,
    map: map,
  });
  // Initialize and add the map
  function initMap() {
    const arani = { lat: 12.669605, lng: 79.285120 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: arani,
    });
    const marker = new google.maps.Marker({
      position: arani,
      map: map,
    });
  }