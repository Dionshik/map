var size = 0;
var placement = 'point';

var style_ndvi_12092025_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("_mean");
    var labelText = "";
    size = 0;
    var labelFont = "11px 'Inter', sans-serif";
    var labelFill = "#0f172a";
    var bufferColor = "#ffffff";
    var bufferWidth = 1.5;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.000000 && value <= 0.200000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.9)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 1.4}),fill: new ol.style.Fill({color: 'rgba(215,25,28,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.200000 && value <= 0.400000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.9)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 1.4}),fill: new ol.style.Fill({color: 'rgba(255,255,192,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.400000 && value <= 0.600000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.9)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 1.4}),fill: new ol.style.Fill({color: 'rgba(26,150,65,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
