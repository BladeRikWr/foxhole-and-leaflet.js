var L, mapData; //this line means nothing, just makes the syntax error catcher fuck off

//define a standard map marker 
var MapIcon = L.Icon.extend({
	 	options: {
			iconSize:     [38, 38],
			iconAnchor:   [19, 19],
			tooltipAnchor:  [15, 0]
		}
	});

  // Define all of the different icons for the map
  var iconColHomeTown = new MapIcon({iconUrl: 'https://cdn.glitch.com/d95d01cf-e57b-455d-bb60-88c852577d80%2FMapIconHomeTownHallColonial.png?1529330143518'});
  var iconWarHomeTown = new MapIcon({iconUrl: 'https://cdn.glitch.com/d95d01cf-e57b-455d-bb60-88c852577d80%2FMapIconHomeTownHallWarden.png?1529330143635'});
  var iconNeutralTown = new MapIcon({iconUrl: 'https://cdn.glitch.com/d95d01cf-e57b-455d-bb60-88c852577d80%2FMapIconStaticBase1.png?1529330143698'});
  var iconNeutralVPTown = new MapIcon({iconUrl: 'https://cdn.glitch.com/d95d01cf-e57b-455d-bb60-88c852577d80%2FMapIconVictoryStaticBase2.png?1529349778926', iconSize: [48, 48], tooltipAnchor: [23, 0]});
  var iconFort = new MapIcon({iconUrl: 'https://cdn.glitch.com/d95d01cf-e57b-455d-bb60-88c852577d80%2FMapIconFort.png?1529330143577'});
  var iconObservationTower = new MapIcon({iconUrl: 'https://cdn.glitch.com/d95d01cf-e57b-455d-bb60-88c852577d80%2FMapIconObservationTower.png?1529330144363'});
  
  //Resource icons
  var iconScrap = new MapIcon({iconUrl: 'https://cdn.glitch.com/d95d01cf-e57b-455d-bb60-88c852577d80%2FSalvageMapIcon.png?1529330144427', iconSize: [24, 24], tooltipAnchor: [6, 0]});
  var iconComponent = new MapIcon({iconUrl: 'https://cdn.glitch.com/d95d01cf-e57b-455d-bb60-88c852577d80%2FMapIconComponents.png?1529330143391', iconSize: [24, 24], tooltipAnchor: [6, 0]});
  var iconSulfur = new MapIcon({iconUrl: 'https://cdn.glitch.com/d95d01cf-e57b-455d-bb60-88c852577d80%2FMapIconSulfur.png?1529330144058', iconSize: [24, 24], tooltipAnchor: [6, 0]});
  var iconFuel = new MapIcon({iconUrl: 'https://cdn.glitch.com/d95d01cf-e57b-455d-bb60-88c852577d80%2FMapIconFuel.png?1529330143800', iconSize: [24, 24], tooltipAnchor: [6, 0]});

  //Production icons
  var iconRefinery = new MapIcon({iconUrl: 'https://cdn.glitch.com/d95d01cf-e57b-455d-bb60-88c852577d80%2FMapIconManufacturing.png?1529330144485', iconSize: [31, 31]});
  var iconWF = new MapIcon({iconUrl: 'https://cdn.glitch.com/d95d01cf-e57b-455d-bb60-88c852577d80%2FMapIconArmory.png?1529330143459', iconSize: [31, 31]});
  var iconSF = new MapIcon({iconUrl: 'https://cdn.glitch.com/d95d01cf-e57b-455d-bb60-88c852577d80%2FMapIconSupplies.png?1529330143997', iconSize: [31, 31]});
  var iconVF = new MapIcon({iconUrl: 'https://cdn.glitch.com/d95d01cf-e57b-455d-bb60-88c852577d80%2FMapIconVehicle.png?1529330144301', iconSize: [31, 31]});
  var iconSS = new MapIcon({iconUrl: 'https://cdn.glitch.com/d95d01cf-e57b-455d-bb60-88c852577d80%2FMapIconSupplies.png?1529330143997', iconSize: [31, 31]});
  var iconMed = new MapIcon({iconUrl: 'https://cdn.glitch.com/d95d01cf-e57b-455d-bb60-88c852577d80%2FMapIconHospital.png?1529330144575', iconSize: [31, 31]});
  var iconWS = new MapIcon({iconUrl: 'https://cdn.glitch.com/d95d01cf-e57b-455d-bb60-88c852577d80%2FMapIconWorkshop.png?1529330144184', iconSize: [31, 31]});
  var iconShipyard = new MapIcon({iconUrl: 'https://cdn.glitch.com/d95d01cf-e57b-455d-bb60-88c852577d80%2FShipyard.png?1529330144123', iconSize: [31, 31]});
  
  
  // Define overlay layers for the different types of locations
	var overlayTowns = L.layerGroup();
	var overlayForts = L.layerGroup();
	var overlayTowers = L.layerGroup();
  var overlayProduction = L.layerGroup();
  var overlayScrap = L.layerGroup();
  var overlayComponents = L.layerGroup();
  var overlaySulfur = L.layerGroup();
  var overlayFuel = L.layerGroup();
  var overlayRefinery = L.layerGroup();
  var overlayWF = L.layerGroup();
  var overlayWS = L.layerGroup();
  var overlaySS = L.layerGroup();
  var overlayMed = L.layerGroup();
  var overlayVF = L.layerGroup();
  var overlayShipyard = L.layerGroup();

  var dir = 'right';
  
  // Now add the markers to the map.
	// L.marker([<y>, <x>], {icon: <icon>}).addTo(<overlay name>).bindTooltip('<location name>').openTooltip();
	// The mapdata entries are in the format [ "Name", Y, X, "Icon", "Description"]
for (var i in mapData) {  
        console.log(mapData[i]);
        switch(mapData[i][3]) {
        case "Icon_NeutralTown":
                L.marker([mapData[i][1],mapData[i][2]], {icon: iconNeutralTown, riseOnHover: true}).addTo(overlayTowns)
                .bindTooltip("<strong>" + mapData[i][0] + "</strong><br>Town<br><i>" + mapData[i][4] + "</i>",{
                        direction: dir
                }).openTooltip();
                break;
        case "Icon_NeutralVPTown":
                L.marker([mapData[i][1],mapData[i][2]], {icon: iconNeutralVPTown, riseOnHover: true}).addTo(overlayTowns)
                .bindTooltip("<strong>" + mapData[i][0] + "</strong><br>Victory Condition Town<br><i>" + mapData[i][4] + "</i>",{
                        direction: dir
                }).openTooltip();
                break;  
        case "Icon_colHomeTown":
                L.marker([mapData[i][1],mapData[i][2]], {icon: iconColHomeTown, riseOnHover: true}).addTo(overlayTowns)
                .bindTooltip("<strong>" + mapData[i][0] + "</strong><br>Colonial Port Base<br><i>" + mapData[i][4] + "</i>",{
                        direction: dir
                }).openTooltip();
                break;
        case "Icon_warHomeTown":
                L.marker([mapData[i][1],mapData[i][2]], {icon: iconWarHomeTown, riseOnHover: true}).addTo(overlayTowns)
                .bindTooltip("<strong>" + mapData[i][0] + "</strong><br>Warden Port Base<br><i>" + mapData[i][4] + "</i>",{
                        direction: dir
                }).openTooltip();
                break;
        case "Icon_fort":
                L.marker([mapData[i][1],mapData[i][2]], {icon: iconFort, riseOnHover: true}).addTo(overlayForts)
                .bindTooltip("<strong>" + mapData[i][0] + "</strong><br>Fort<br><i>" + mapData[i][4] + "</i>",{
                        direction: dir
                }).openTooltip();
                break;
        case "Icon_tower":
                L.marker([mapData[i][1],mapData[i][2]], {icon: iconObservationTower, riseOnHover: true}).addTo(overlayTowers)
                .bindTooltip("<strong>" + mapData[i][0] + "</strong><br>Observation Tower<br><i>" + mapData[i][4] + "</i>",{
                        direction: dir
                }).openTooltip();
                break;
        case "Icon_Refinery":
                L.marker([mapData[i][1],mapData[i][2]], {icon: iconRefinery, riseOnHover: true}).addTo(overlayRefinery)
                .bindTooltip("<strong>" + mapData[i][0] + "</strong><br>Refinery<br><i>" + mapData[i][4] + "</i>",{
                        direction: dir
                }).openTooltip();
                break;
        case "Icon_WF":
                L.marker([mapData[i][1],mapData[i][2]], {icon: iconWF, riseOnHover: true}).addTo(overlayWF)
                .bindTooltip("<strong>" + mapData[i][0] + "</strong><br>Weapon Factory<br><i>" + mapData[i][4] + "</i>",{
                        direction: dir
                }).openTooltip();
                break;
        case "Icon_WS":
                L.marker([mapData[i][1],mapData[i][2]], {icon: iconWS, riseOnHover: true}).addTo(overlayWS)
                .bindTooltip("<strong>" + mapData[i][0] + "</strong><br>Workshop<br><i>" + mapData[i][4] + "</i>",{
                        direction: dir
                }).openTooltip();
                break;
        case "Icon_SS":
                L.marker([mapData[i][1],mapData[i][2]], {icon: iconSS, riseOnHover: true}).addTo(overlaySS)
                .bindTooltip("<strong>" + mapData[i][0] + "</strong><br>Supply Station<br><i>" + mapData[i][4] + "</i>",{
                        direction: dir
                }).openTooltip();
                break;
        case "Icon_Med":
                L.marker([mapData[i][1],mapData[i][2]], {icon: iconMed, riseOnHover: true}).addTo(overlayMed)
                .bindTooltip("<strong>" + mapData[i][0] + "</strong><br>Medical Lab<br><i>" + mapData[i][4] + "</i>",{
                        direction: dir
                }).openTooltip();
                break;
        case "Icon_VF":
                L.marker([mapData[i][1],mapData[i][2]], {icon: iconVF, riseOnHover: true}).addTo(overlayVF)
                .bindTooltip("<strong>" + mapData[i][0] + "</strong><br>Vehicle Factory<br><i>" + mapData[i][4] + "</i>",{
                        direction: dir
                }).openTooltip();
                break;
        case "Icon_Shipyard":
                L.marker([mapData[i][1],mapData[i][2]], {icon: iconShipyard, riseOnHover: true}).addTo(overlayShipyard)
                .bindTooltip("<strong>" + mapData[i][0] + "</strong><br>Shipyard<br><i>" + mapData[i][4] + "</i>",{
                        direction: dir
                }).openTooltip();
                break;
        case "Icon_scrap":
                L.marker([mapData[i][1],mapData[i][2]], {icon: iconScrap, riseOnHover: true}).addTo(overlayScrap)
                .bindTooltip("<strong>" + mapData[i][0] + "</strong><br>Scrap Node<br><i>" + mapData[i][4] + "</i>",{
                        direction: dir
                }).openTooltip();
                break;
        case "Icon_component":
                L.marker([mapData[i][1],mapData[i][2]], {icon: iconComponent, riseOnHover: true}).addTo(overlayComponents)
                .bindTooltip("<strong>" + mapData[i][0] + "</strong><br>Component Node<br><i>" + mapData[i][4] + "</i>",{
                        direction: dir
                }).openTooltip();
                break;
        case "Icon_sulfur":
                L.marker([mapData[i][1],mapData[i][2]], {icon: iconSulfur, riseOnHover: true}).addTo(overlaySulfur)
                .bindTooltip("<strong>" + mapData[i][0] + "</strong><br>Sulfur Node<br><i>" + mapData[i][4] + "</i>",{
                        direction: dir
                }).openTooltip();
                break;
        case "Icon_fuel":
                L.marker([mapData[i][1],mapData[i][2]], {icon: iconFuel, riseOnHover: true}).addTo(overlayFuel)
                .bindTooltip("<strong>" + mapData[i][0] + "</strong><br>Fuel Node<br><i>" + mapData[i][4] + "</i>",{
                        direction: dir
                }).openTooltip();
                break;
        }
}

  // Adding a region for testing/demonstration (Deadlands)
  // L.polygon([[<y>, <x>], [<y>, <x>], [<y>, <x>], Repeat for all points]).addTo(<overlay name>)
/*
   L.polygon([[847.025536, 1267.842459],[861.874778, 1471.489212],[606.60923, 1445.326261],[632.772181, 1230.365799]]).bindTooltip("Deadlands",{
     permanent: true,
     direction: 'center',
   }).addTo(overlayRegions);

*/

  var overlayLabel = L.layerGroup();

 //Declaring the map labels
var mapLabels = [
        ['The Conclave', 858.913428, 869],
        ['Camp Posterus', 309.400488, 903.202804],
        ['Oyster Beach', 350.883805, 1015],
        ['The Old Pearl' ,237.373471, 1009],
        ['Doe\'s Head', 356.340029, 618.899762],
        ['Requiem', 426.960653, 760.170359],
        ['Pram Road', 537.169448, 745.034224],
        ['The Ides', 620.896664, 652],
        ['The Report', 620.903324, 454.5],
        ['Skelter Course', 792.429043, 621.5],
        ['The Palisade', 494.901027, 902],
        ['Infans', 610.912968, 807],
        ['Strong Beach', 683.397583, 721],
        ['The Satyr Stones', 716.973099, 575.576244],
        ['The Palm', 911.907457, 311.5],
        ['Castor', 583.900798, 1032],
        ['Pollux', 598.887479, 1095.5],
        ['Damsel', 700.409754, 1008.5],
        ['The Outstretch', 856.136548, 398.384384],
        ['Lion\'s Head', 558.384723, 519],
        ['Isle of Psyche', 515.905161, 1301.5],
        ['Eros Lagoon', 449.365451, 1412.183449],
        ['Partisan Island', 778.901487, 1543],
        ['Mount Melodes', 783.345128, 1198.126168],
        ['Kukri', 983.914346, 1095.5],
        ['Craite\'s Lonliness', 862.91182, 1080.5],
        ['Grisly Refuge', 947.39919, 1432.5],
        ['Barrenson', 615.908835, 1198.5],
        ['Oasis', 968.57557, 712.239264],
        ['Anchor', 1032.198323, 882.688981],
        ['Integrum', 1092.915494, 1741],
        ['The Dirk', 1200.43731, 468.5],
        ['Gold', 1171.426287, 716.5],
        ['Alabastor Island', 1195.447184, 1027.5],
        ['Skull Beach', 1101.403094, 1427.5],
        ['Crach Woods', 1113.906079, 1343],
        ['Oblitum', 1222.427665, 1385.5],
        ['Sandalwood Beach', 1205.870027, 1274],
        ['Reliqua', 1396.920087, 1292],
        ['The Emblem', 1436.46854, 1369.5],
        ['Fogwood', 1527.978874, 1257],
        ['Raven\'s Beak Fort', 1489.418829, 1053.637504],
        ['Bronze', 1563.944658, 570],
        ['Silver', 1571.464636, 785],

];

  //Adding the map labels
for (var i in mapLabels) {
        var mapLabel = L.divIcon({
                html: '<h3>'+mapLabels[i][0]+'</h3>',
                className: 'map-labels',
                iconSize: [0, 0]
        });
        L.marker([mapLabels[i][1], mapLabels[i][2]], {
                icon: mapLabel,
                zIndexOffset: 605,
        }).addTo(overlayLabel)
}

//Initializing map zoom levels and layers
var map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -1.25,
        maxZoom: 1.75,
        zoomDelta: 0.25,
        zoomSnap: 0.25,
        maxBounds: [
                [-600, -1000], //south west
                [2448, 3048] //north east
        ], 
        maxBoundsViscosity: 1.0,
        layers: [
                overlayLabel,
                overlayTowns,
                overlayForts,
                overlayTowers,
                overlayScrap,
                overlayComponents,
                overlaySulfur,
                overlayFuel,
                overlayRefinery,
                overlayWF,
                overlayWS,
                overlaySS,
                overlayMed,
                overlayVF,
                overlayShipyard
        ]     
});

/* 1024's Work
var oarbreakerImage = L.imageOverlay('https://cdn.glitch.com/5bc0c974-efa1-4ace-b75d-7ff73ef58bfc%2FMapOarbreaker.png?1529329603206', [[558, 351], [854, 688]],{opacity:0})
oarbreakerImage.addTo(map);

  function onMapZoom(e) {
    console.log(screen.width,screen.height, map.getZoom());
    if(map.getZoom() >= 1)
    {
      oarbreakerImage.setOpacity(1);
      oarbreakerImage.addTo(map);
    } else {
      oarbreakerImage.removeFrom(map);
      oarbreakerImage.setOpacity(0);
    }
  }
*/

  //Click function to show Y and X coordinates
  var popup = L.popup();
  function onMapClick(e) {
      popup
          .setLatLng(e.latlng)
          .setContent(e.latlng.toString())
          .openOn(map);
  }
  
  map.on('click', onMapClick);
  //map.on('zoom', onMapZoom);
  
  //Map dimensions
	var bounds = [[0,0], [1848,2048]];
  
  //Map Image
	var image = L.imageOverlay('https://cdn.glitch.com/d95d01cf-e57b-455d-bb60-88c852577d80%2FMapOarbreaker.png?1529330336852', bounds).addTo(map);
	map.fitBounds(bounds);
  
// Define the layers for the map
var baseMaps = {};
var overlayMaps = {
        "Labels": overlayLabel,
        "Towns": overlayTowns,
        "Forts": overlayForts,
        "Observation Towers": overlayTowers,
        "Scrap": overlayScrap,
        "Components": overlayComponents,
        "Sulfur": overlaySulfur,
        "Fuel": overlayFuel,
        "Refinery": overlayRefinery,
        "Vehicle Factory": overlayVF,
        "Shipyard": overlayShipyard,
        "Supply Station": overlaySS,
        "Medical Lab": overlayMed,
        "Weapon Factory": overlayWF,
        "Workshop": overlayWS
};
  
	// Add a control for the layers
	L.control.layers(baseMaps, overlayMaps, {collapsed:false}).addTo(map);

  // Add a scale (Bottom Left) yeah we dont need this one
  //L.control.scale().addTo(map);
    
  //Sets the initial map zoom level and location for easier marker placement
	//map.setView( [600, 1375], 1); //Deadlands
	//map.setView( [1120, 1375], 1); //Callahans
	//map.setView( [670, 1700], 1); //Endless
  //map.setView( [370,1750], 1); //Umbral
	//map.setView( [774, 1375], -1.25); //World Default
  map.setView([972.266762, 1041.745433], -0.5);  

console.log(screen.width,screen.height, map.getZoom());
