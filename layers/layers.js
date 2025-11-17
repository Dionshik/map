var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_ndvi_25042025_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "ndvi_25042025",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ndvi_25042025_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5551725.204281, 8007606.116171, 5617304.654488, 8079780.059215]
                            })
                        });
var lyr_ndvi_14072025_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "ndvi_14072025",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ndvi_14072025_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5551725.204281, 8007606.116171, 5617304.654488, 8079780.059215]
                            })
                        });
var lyr_ndvi_12092025_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "ndvi_12092025",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ndvi_12092025_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5551725.204281, 8007606.116171, 5617304.654488, 8079780.059215]
                            })
                        });
var format_ndvi_25042025_5 = new ol.format.GeoJSON();
var features_ndvi_25042025_5 = format_ndvi_25042025_5.readFeatures(json_ndvi_25042025_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ndvi_25042025_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ndvi_25042025_5.addFeatures(features_ndvi_25042025_5);
var lyr_ndvi_25042025_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ndvi_25042025_5, 
                style: style_ndvi_25042025_5,
                popuplayertitle: "ndvi_25042025",
                interactive: true,
    title: 'ndvi_25042025<br />\
    <img src="styles/legend/ndvi_25042025_5_0.png" /> 0 - 0,2<br />\
    <img src="styles/legend/ndvi_25042025_5_1.png" /> 0,2 - 0,4<br />\
    <img src="styles/legend/ndvi_25042025_5_2.png" /> 0,4 - 0,6<br />'
        });
var format_ndvi_14072025_6 = new ol.format.GeoJSON();
var features_ndvi_14072025_6 = format_ndvi_14072025_6.readFeatures(json_ndvi_14072025_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ndvi_14072025_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ndvi_14072025_6.addFeatures(features_ndvi_14072025_6);
var lyr_ndvi_14072025_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ndvi_14072025_6, 
                style: style_ndvi_14072025_6,
                popuplayertitle: "ndvi_14072025",
                interactive: true,
    title: 'ndvi_14072025<br />\
    <img src="styles/legend/ndvi_14072025_6_0.png" /> 0 - 0,2<br />\
    <img src="styles/legend/ndvi_14072025_6_1.png" /> 0,2 - 0,4<br />\
    <img src="styles/legend/ndvi_14072025_6_2.png" /> 0,4 - 0,6<br />'
        });
var format_ndvi_12092025_7 = new ol.format.GeoJSON();
var features_ndvi_12092025_7 = format_ndvi_12092025_7.readFeatures(json_ndvi_12092025_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ndvi_12092025_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ndvi_12092025_7.addFeatures(features_ndvi_12092025_7);
var lyr_ndvi_12092025_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ndvi_12092025_7, 
                style: style_ndvi_12092025_7,
                popuplayertitle: "ndvi_12092025",
                interactive: true,
    title: 'ndvi_12092025<br />\
    <img src="styles/legend/ndvi_12092025_7_0.png" /> 0 - 0,2<br />\
    <img src="styles/legend/ndvi_12092025_7_1.png" /> 0,2 - 0,4<br />\
    <img src="styles/legend/ndvi_12092025_7_2.png" /> 0,4 - 0,6<br />'
        });
var format__2024_8 = new ol.format.GeoJSON();
var features__2024_8 = format__2024_8.readFeatures(json__2024_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2024_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2024_8.addFeatures(features__2024_8);
var lyr__2024_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2024_8, 
                style: style__2024_8,
                popuplayertitle: "АХК_2024",
                interactive: true,
                title: '<img src="styles/legend/_2024_8.png" /> АХК_2024'
            });
var group__2025 = new ol.layer.Group({
                                layers: [lyr_ndvi_25042025_5,lyr_ndvi_14072025_6,lyr_ndvi_12092025_7,],
                                fold: "open",
                                title: "Вегетационная активность (средн. по полям)_2025"});
var group_ndvi_2025 = new ol.layer.Group({
                                layers: [lyr_ndvi_25042025_2,lyr_ndvi_14072025_3,lyr_ndvi_12092025_4,],
                                fold: "open",
                                title: "ndvi_2025"});

lyr_GoogleSatellite_0.setVisible(false);lyr_OSMStandard_1.setVisible(true);lyr_ndvi_25042025_2.setVisible(false);lyr_ndvi_14072025_3.setVisible(false);lyr_ndvi_12092025_4.setVisible(true);lyr_ndvi_25042025_5.setVisible(false);lyr_ndvi_14072025_6.setVisible(false);lyr_ndvi_12092025_7.setVisible(true);lyr__2024_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,group_ndvi_2025,group__2025,lyr__2024_8];
lyr_ndvi_25042025_5.set('fieldAliases', {'id_пол�': 'id_пол�', 'id_орг�': 'id_орг�', 'Назва': 'Назва', 'id_фил�': 'id_фил�', 'Назв_1': 'Назв_1', 'номер': 'номер', 'cycle': 'cycle', 'pole': 'pole', 'brigade': 'brigade', 'crop_rotat': 'crop_rotat', 'field_shor': 'field_shor', '‘Сос�': '‘Сос�', 'area': 'area', 's_ind': 's_ind', 's_code': 's_code', 'ugod': 'угодье', 'actual_cul': 'actual_cul', 'old_cultur': 'old_cultur', 'trava': 'trava', 'idx_kult': 'idx_kult', 'ph': 'ph', 'p2o5': 'p2o5', 'k2o': 'k2o', 'gumus_grou': 'gumus_grou', 'gumus': 'gumus', 'hgid': 'hgid', 'summ': 'summ', 'v': 'v', 't': 't', 'ca': 'ca', 'mg': 'mg', 's': 's', 'b': 'b', 'mo': 'mo', 'zn': 'zn', 'cu': 'cu', 'mn': 'mn', 'co': 'co', 'cd': 'cd', 'hg': 'hg', 'as': 'as', 'pb': 'pb', 'brigada': 'brigada', 'sev': 'sev', 'sev_nom': 'sev_nom', 'pol_nom': 'pol_nom', 'sev1': 'sev1', 'nom_sev1': 'nom_sev1', 'nom_pol1': 'nom_pol1', 'area_ga': 'площадь, га', 'clouds': 'clouds', '_mean': 'ndvi_средн.', '_stdev': '_stdev', '_min': 'ndvi_мин.', '_max': 'ndvi_макс.', });
lyr_ndvi_14072025_6.set('fieldAliases', {'id_пол�': 'id_пол�', 'id_орг�': 'id_орг�', 'Назва': 'Назва', 'id_фил�': 'id_фил�', 'Назв_1': 'Назв_1', 'номер': 'номер', 'cycle': 'cycle', 'pole': 'pole', 'brigade': 'brigade', 'crop_rotat': 'crop_rotat', 'field_shor': 'field_shor', '‘Сос�': '‘Сос�', 'area': 'area', 's_ind': 's_ind', 's_code': 's_code', 'ugod': 'угодье', 'actual_cul': 'actual_cul', 'old_cultur': 'old_cultur', 'trava': 'trava', 'idx_kult': 'idx_kult', 'ph': 'ph', 'p2o5': 'p2o5', 'k2o': 'k2o', 'gumus_grou': 'gumus_grou', 'gumus': 'gumus', 'hgid': 'hgid', 'summ': 'summ', 'v': 'v', 't': 't', 'ca': 'ca', 'mg': 'mg', 's': 's', 'b': 'b', 'mo': 'mo', 'zn': 'zn', 'cu': 'cu', 'mn': 'mn', 'co': 'co', 'cd': 'cd', 'hg': 'hg', 'as': 'as', 'pb': 'pb', 'brigada': 'brigada', 'sev': 'sev', 'sev_nom': 'sev_nom', 'pol_nom': 'pol_nom', 'sev1': 'sev1', 'nom_sev1': 'nom_sev1', 'nom_pol1': 'nom_pol1', 'area_ga': 'площадь, га', 'clouds': 'clouds', '_mean': 'ndvi_средн.', '_stdev': '_stdev', '_min': 'ndvi_мин.', '_max': 'ndvi_макс.', });
lyr_ndvi_12092025_7.set('fieldAliases', {'id_пол�': 'id_пол�', 'id_орг�': 'id_орг�', 'Назва': 'Назва', 'id_фил�': 'id_фил�', 'Назв_1': 'Назв_1', 'номер': 'номер', 'cycle': 'cycle', 'pole': 'pole', 'brigade': 'brigade', 'crop_rotat': 'crop_rotat', 'field_shor': 'field_shor', '‘Сос�': '‘Сос�', 'area': 'area', 's_ind': 's_ind', 's_code': 's_code', 'ugod': 'угодье', 'actual_cul': 'actual_cul', 'old_cultur': 'old_cultur', 'trava': 'trava', 'idx_kult': 'idx_kult', 'ph': 'ph', 'p2o5': 'p2o5', 'k2o': 'k2o', 'gumus_grou': 'gumus_grou', 'gumus': 'gumus', 'hgid': 'hgid', 'summ': 'summ', 'v': 'v', 't': 't', 'ca': 'ca', 'mg': 'mg', 's': 's', 'b': 'b', 'mo': 'mo', 'zn': 'zn', 'cu': 'cu', 'mn': 'mn', 'co': 'co', 'cd': 'cd', 'hg': 'hg', 'as': 'as', 'pb': 'pb', 'brigada': 'brigada', 'sev': 'sev', 'sev_nom': 'sev_nom', 'pol_nom': 'pol_nom', 'sev1': 'sev1', 'nom_sev1': 'nom_sev1', 'nom_pol1': 'nom_pol1', 'area_ga': 'площадь, га', 'clouds': 'clouds', '_mean': 'ndvi_средн.', '_stdev': '_stdev', '_min': 'ndvi_мин.', '_max': 'ndvi_макс.', });
lyr__2024_8.set('fieldAliases', {'id_пол�': 'id_пол�', 'id_орг�': 'id_орг�', 'Назва': 'Назва', 'id_фил�': 'id_фил�', 'Назв_1': 'Назв_1', 'номер': 'номер', 'cycle': 'cycle', 'pole': 'pole', 'brigade': 'brigade', 'crop_rotat': 'crop_rotat', 'field_shor': 'field_shor', '‘Сос�': '‘Сос�', 'area': 'area', 's_ind': 's_ind', 's_code': 's_code', 'ugod': 'угодье', 'actual_cul': 'actual_cul', 'old_cultur': 'old_cultur', 'trava': 'trava', 'idx_kult': 'idx_kult', 'ph': 'ph', 'p2o5': 'p2o5', 'k2o': 'k2o', 'gumus_grou': 'gumus_grou', 'gumus': 'gumus', 'hgid': 'hgid', 'summ': 'summ', 'v': 'v', 't': 't', 'ca': 'ca', 'mg': 'mg', 's': 's', 'b': 'b', 'mo': 'mo', 'zn': 'zn', 'cu': 'cu', 'mn': 'mn', 'co': 'co', 'cd': 'cd', 'hg': 'hg', 'as': 'as', 'pb': 'pb', 'brigada': 'brigada', 'sev': 'sev', 'sev_nom': 'sev_nom', 'pol_nom': 'pol_nom', 'sev1': 'sev1', 'nom_sev1': 'nom_sev1', 'nom_pol1': 'nom_pol1', 'area_ga': 'площадь, га', 'clouds': 'clouds', });
lyr_ndvi_25042025_5.set('fieldImages', {'id_пол�': 'Hidden', 'id_орг�': 'Hidden', 'Назва': 'Hidden', 'id_фил�': 'Hidden', 'Назв_1': 'Hidden', 'номер': 'TextEdit', 'cycle': 'Hidden', 'pole': 'Hidden', 'brigade': 'Hidden', 'crop_rotat': 'Hidden', 'field_shor': 'Hidden', '‘Сос�': 'Hidden', 'area': 'Hidden', 's_ind': 'Hidden', 's_code': 'Hidden', 'ugod': 'TextEdit', 'actual_cul': 'Hidden', 'old_cultur': 'Hidden', 'trava': 'Hidden', 'idx_kult': 'Hidden', 'ph': 'Hidden', 'p2o5': 'Hidden', 'k2o': 'Hidden', 'gumus_grou': 'Hidden', 'gumus': 'Hidden', 'hgid': 'Hidden', 'summ': 'Hidden', 'v': 'Hidden', 't': 'Hidden', 'ca': 'Hidden', 'mg': 'Hidden', 's': 'Hidden', 'b': 'Hidden', 'mo': 'Hidden', 'zn': 'Hidden', 'cu': 'Hidden', 'mn': 'Hidden', 'co': 'Hidden', 'cd': 'Hidden', 'hg': 'Hidden', 'as': 'Hidden', 'pb': 'Hidden', 'brigada': 'Hidden', 'sev': 'Hidden', 'sev_nom': 'Hidden', 'pol_nom': 'Hidden', 'sev1': 'Hidden', 'nom_sev1': 'Hidden', 'nom_pol1': 'Hidden', 'area_ga': 'TextEdit', 'clouds': 'Hidden', '_mean': 'TextEdit', '_stdev': 'Hidden', '_min': 'TextEdit', '_max': 'TextEdit', });
lyr_ndvi_14072025_6.set('fieldImages', {'id_пол�': 'Hidden', 'id_орг�': 'Hidden', 'Назва': 'Hidden', 'id_фил�': 'Hidden', 'Назв_1': 'Hidden', 'номер': 'TextEdit', 'cycle': 'Hidden', 'pole': 'Hidden', 'brigade': 'Hidden', 'crop_rotat': 'Hidden', 'field_shor': 'Hidden', '‘Сос�': 'Hidden', 'area': 'Hidden', 's_ind': 'Hidden', 's_code': 'Hidden', 'ugod': 'TextEdit', 'actual_cul': 'Hidden', 'old_cultur': 'Hidden', 'trava': 'Hidden', 'idx_kult': 'Hidden', 'ph': 'Hidden', 'p2o5': 'Hidden', 'k2o': 'Hidden', 'gumus_grou': 'Hidden', 'gumus': 'Hidden', 'hgid': 'Hidden', 'summ': 'Hidden', 'v': 'Hidden', 't': 'Hidden', 'ca': 'Hidden', 'mg': 'Hidden', 's': 'Hidden', 'b': 'Hidden', 'mo': 'Hidden', 'zn': 'Hidden', 'cu': 'Hidden', 'mn': 'Hidden', 'co': 'Hidden', 'cd': 'Hidden', 'hg': 'Hidden', 'as': 'Hidden', 'pb': 'Hidden', 'brigada': 'Hidden', 'sev': 'Hidden', 'sev_nom': 'Hidden', 'pol_nom': 'Hidden', 'sev1': 'Hidden', 'nom_sev1': 'Hidden', 'nom_pol1': 'Hidden', 'area_ga': 'TextEdit', 'clouds': 'Hidden', '_mean': 'TextEdit', '_stdev': 'Hidden', '_min': 'TextEdit', '_max': 'TextEdit', });
lyr_ndvi_12092025_7.set('fieldImages', {'id_пол�': 'Hidden', 'id_орг�': 'Hidden', 'Назва': 'Hidden', 'id_фил�': 'Hidden', 'Назв_1': 'Hidden', 'номер': 'TextEdit', 'cycle': 'Hidden', 'pole': 'Hidden', 'brigade': 'Hidden', 'crop_rotat': 'Hidden', 'field_shor': 'Hidden', '‘Сос�': 'Hidden', 'area': 'Hidden', 's_ind': 'Hidden', 's_code': 'Hidden', 'ugod': 'TextEdit', 'actual_cul': 'Hidden', 'old_cultur': 'Hidden', 'trava': 'Hidden', 'idx_kult': 'Hidden', 'ph': 'Hidden', 'p2o5': 'Hidden', 'k2o': 'Hidden', 'gumus_grou': 'Hidden', 'gumus': 'Hidden', 'hgid': 'Hidden', 'summ': 'Hidden', 'v': 'Hidden', 't': 'Hidden', 'ca': 'Hidden', 'mg': 'Hidden', 's': 'Hidden', 'b': 'Hidden', 'mo': 'Hidden', 'zn': 'Hidden', 'cu': 'Hidden', 'mn': 'Hidden', 'co': 'Hidden', 'cd': 'Hidden', 'hg': 'Hidden', 'as': 'Hidden', 'pb': 'Hidden', 'brigada': 'Hidden', 'sev': 'Hidden', 'sev_nom': 'Hidden', 'pol_nom': 'Hidden', 'sev1': 'Hidden', 'nom_sev1': 'Hidden', 'nom_pol1': 'Hidden', 'area_ga': 'TextEdit', 'clouds': 'Hidden', '_mean': 'TextEdit', '_stdev': 'Hidden', '_min': 'TextEdit', '_max': 'TextEdit', });
lyr__2024_8.set('fieldImages', {'id_пол�': 'Hidden', 'id_орг�': 'Hidden', 'Назва': 'Hidden', 'id_фил�': 'Hidden', 'Назв_1': 'Hidden', 'номер': 'TextEdit', 'cycle': 'Hidden', 'pole': 'Hidden', 'brigade': 'Hidden', 'crop_rotat': 'Hidden', 'field_shor': 'Hidden', '‘Сос�': 'Hidden', 'area': 'Hidden', 's_ind': 'Hidden', 's_code': 'Hidden', 'ugod': 'TextEdit', 'actual_cul': 'Hidden', 'old_cultur': 'Hidden', 'trava': 'Hidden', 'idx_kult': 'Hidden', 'ph': 'Hidden', 'p2o5': 'Hidden', 'k2o': 'Hidden', 'gumus_grou': 'Hidden', 'gumus': 'Hidden', 'hgid': 'Hidden', 'summ': 'Hidden', 'v': 'Hidden', 't': 'Hidden', 'ca': 'Hidden', 'mg': 'Hidden', 's': 'Hidden', 'b': 'Hidden', 'mo': 'Hidden', 'zn': 'Hidden', 'cu': 'Hidden', 'mn': 'Hidden', 'co': 'Hidden', 'cd': 'Hidden', 'hg': 'Hidden', 'as': 'Hidden', 'pb': 'Hidden', 'brigada': 'Hidden', 'sev': 'Hidden', 'sev_nom': 'Hidden', 'pol_nom': 'Hidden', 'sev1': 'Hidden', 'nom_sev1': 'Hidden', 'nom_pol1': 'Hidden', 'area_ga': 'TextEdit', 'clouds': 'Hidden', });
lyr_ndvi_25042025_5.set('fieldLabels', {'номер': 'header label - always visible', 'ugod': 'header label - always visible', 'area_ga': 'header label - always visible', '_mean': 'header label - always visible', '_min': 'header label - always visible', '_max': 'inline label - always visible', });
lyr_ndvi_14072025_6.set('fieldLabels', {'номер': 'header label - always visible', 'ugod': 'header label - always visible', 'area_ga': 'header label - always visible', '_mean': 'header label - always visible', '_min': 'header label - always visible', '_max': 'header label - always visible', });
lyr_ndvi_12092025_7.set('fieldLabels', {'номер': 'header label - always visible', 'ugod': 'header label - always visible', 'area_ga': 'header label - always visible', '_mean': 'header label - always visible', '_min': 'header label - always visible', '_max': 'header label - always visible', });
lyr__2024_8.set('fieldLabels', {'номер': 'header label - always visible', 'ugod': 'header label - always visible', 'area_ga': 'header label - always visible', });
lyr__2024_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});