var map;
var markers = [];
var polyline;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 0, lng: 0 },
        zoom: 2
    });
}

function showMaps() {
    clearMap();
    document.getElementById('map-container').style.display = 'block';
    fetchDataAndUpdateMap();
}

function showCoordinates() {
    clearMap();
    document.getElementById('map-container').style.display = 'none';
    fetchCoordinates();
}

function fetchDataAndUpdateMap() {
    const apiKey = 'AIzaSyAMDCqRKW6XPHJvxKYqvgr24r4RfhrjAss';
    const spreadsheetId = '1HObmilSg2FHjOtueg9tvRn9N7lwkZAt8RYnRw08v-80';
    const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1?key=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => updateMap(data.values))
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Error fetching data. Check console for details.');
        });
}

function fetchCoordinates() {
    const apiKey = 'AIzaSyAMDCqRKW6XPHJvxKYqvgr24r4RfhrjAss';
    const spreadsheetId = '1HObmilSg2FHjOtueg9tvRn9N7lwkZAt8RYnRw08v-80';
    const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1?key=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => displayCoordinates(data.values))
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Error fetching data. Check console for details.');
        });
}

function updateMap(data) {
    if (!data || !Array.isArray(data) || data.length === 0) {
        console.error('No data received from the API.');
        alert('No data received from the API.');
        return;
    }

    // Rest of the code remains unchanged
    // ...
}

function displayCoordinates(data) {
    if (!data || !Array.isArray(data) || data.length === 0) {
        console.error('No data received from the API.');
        alert('No data received from the API.');
        return;
    }

    // Rest of the code remains unchanged
    // ...
}

function clearMap() {
    markers.forEach(marker => marker.setMap(null));
    markers = [];
    if (polyline) {
        polyline.setMap(null);
    }
}
