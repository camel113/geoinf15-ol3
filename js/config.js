/*************************************************** 
 * Definition of global JS application parameters
 **************************************************/

/*
 * With the Boundless GeoServer you can play with layers: 
 * - ne_10m_admin_0_countries
 * - ne_10m_lakes
 * - etc (see http://demo.boundlessgeo.com/geoserver/wms?REQUEST=GetCapabilities)
 */
var blWMS = "http://demo.boundlessgeo.com/geoserver/wms";

/*
 * With the MapCentia MapServer you can play with layers: 
 * - public.world_simple
 * - public.cities
 * - public.cantonsch_region
 * - etc (see https://eu1.mapcentia.com/wms/oertz/public?service=WMS&request=GetCapabilities)
 */
var mcWMS = "https://eu1.mapcentia.com/wms/oertz/public";
var mcWFS = "https://eu1.mapcentia.com/wfs/oertz/public/4326";

/*
 * With our rhcloud GeoServer you can play with layers: 
 * - world_simple
 * - cities
 * - etc (see http://geoserver-heig.rhcloud.com/geoinf/ows?service=WMS&version=1.1.0&request=GetCapabilities)
 */
var myOWS = "http://geoserver-heig.rhcloud.com/geoinf/ows";

/*
 * With the Swisstopo MapServer you can play with layers: 
 * - ch.swisstopo.swissboundaries3d-kanton-flaeche.fill
 * - ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill
 * - etc (see http://wms.geo.admin.ch/?REQUEST=GetCapabilities&SERVICE=WMS&VERSION=1.0.0&lang=fr)
 */
var chWMS = "https://wms.geo.admin.ch";

/* 
 * Insertion of <script> and <stylesheet> elements to load required libraries :
 * 
 * @requires lib/ol3.1.1/build/ol.js
 * @requires lib/jquery-2.1.3.min.js
 * 
 */
stylesheetTag = '<link rel="stylesheet" href="http://openlayers.org/en/v3.9.0/css/ol.css" type="text/css">'
document.write(stylesheetTag);

scriptTag = '<script src="http://openlayers.org/en/v3.9.0/build/ol-debug.js" type="text/javascript"></script>';
document.write(scriptTag);

scriptTag = '<script src="https://code.jquery.com/jquery-2.1.4.min.js" type="text/javascript"></script>';
document.write(scriptTag);

/*
 * May be some useful functions
 */
function showExtent(bbox) {
    vectors = new ol.layer.Vector({source: new ol.source.Vector()});
    map.addLayer(vectors);
    vectors.getSource().addFeatures([new ol.Feature({geometry: new ol.geom.Polygon.fromExtent(bbox)})]);

}