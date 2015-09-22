/* 
 * Definition of global JS application parameters
 */

 var myWMS = "https://eu1.mapcentia.com/wms/oertz/public";
 var myWFS = "https://eu1.mapcentia.com/wfs/oertz/public/4326";

 var remoteSLD = "http://172.16.107.1/ol2014/sld";   //"http://172.16.213.129/webmaptuto/sld";

 var proxy = 'http://localhost:8888/openlayers/ol3/tuto/php/proxy2.php?url='

/* 
 * Insertion of <script> and <stylesheet> elements to load required libraries :
 * 
 * @requires lib/ol3.1.1/build/ol.js
 * @requires lib/jquery-2.1.3.min.js
 * 
 */
stylesheetTag = '<link rel="stylesheet" href="http://openlayers.org/en/v3.4.0/css/ol.css" type="text/css">'
document.write(stylesheetTag);

scriptTag = '<script src="../lib/ol3.4.0/build/ol.js" type="text/javascript"></script>';
document.write(scriptTag);

scriptTag = '<script src="../lib/jquery-2.1.3.min.js" type="text/javascript"></script>';
document.write(scriptTag);