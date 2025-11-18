var size = 0;
var placement = 'point';

var style__2024_8 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "11px 'Inter', sans-serif";
    var labelFill = "#0f172a";
    var bufferColor = "#ffffff";
    var bufferWidth = 2.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("номер") !== null) {
        labelText = String(feature.get("номер"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(16,185,129,0.9)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2.4}),
        fill: new ol.style.Fill({color: 'rgba(16,185,129,0.18)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
