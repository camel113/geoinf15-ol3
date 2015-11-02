<?php
require_once 'GeoManager.php';
$conn = new Connection("host=127.0.0.1 port=5432 dbname=php user=adminxsrl1i4 password=HqqUBcW5PjBT");

$query = "SELECT name, ST_AsGeoJSON(the_geom) from my4capitals";
$result = $conn->selectQuery($query);

$i = 0;
$fc = new FeatureCollection();
while ($row = pg_fetch_row($result)) {
    $fc->addFeature(new Feature($i++, (json_decode($row[1])), array("name" => $row[0])));
}
echo json_encode($fc);
?>