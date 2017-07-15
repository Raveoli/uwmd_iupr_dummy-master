/**
 * Created by rxh160530 on 1/27/2017.
 */
window.centroidsquery='SELECT * FROM table_2015_2016_centroids_total_copy';
window.polygonsquery='SELECT * FROM table_2015_acs_data_uwmd_merge_copy';
window.marginalpsequery='SELECT * FROM table_2015_acs_data_uwmd_only_1_1';
window.agenciesworkdevquery='SELECT * FROM table_2015_2016_agencies_by_panel_by_zip_copy where inc_workdev<>0 order by zip ASC,inc_workdev DESC';
window.agenciesfincapquery='SELECT * FROM table_2015_2016_agencies_by_panel_by_zip_copy where inc_fincap<>0 order by zip ASC,inc_fincap DESC';
window.agenciestotalquery='SELECT * FROM table_2015_2016_agencies_by_panel_by_zip_copy where inc_total<>0 order by zip ASC,inc_total DESC';
window.agencieseduafterschoolquery='SELECT * FROM table_2015_2016_agencies_by_panel_by_zip_copy where edu_afterschool<>0 order by zip ASC,edu_afterschool DESC';
window.agencieseducollegecareerquery='SELECT * FROM table_2015_2016_agencies_by_panel_by_zip_copy where edu_college<>0 order by zip ASC, edu_college DESC';
window.agencieseduearlychildhoodquery='SELECT * FROM table_2015_2016_agencies_by_panel_by_zip_copy where edu_earlychild<>0 order by zip ASC, edu_earlychild DESC';
window.agenciesedumathsciencequery='SELECT * FROM table_2015_2016_agencies_by_panel_by_zip_copy where edu_stem<>0 order by zip ASC, edu_stem DESC';
window.agencieseduparentmentorsquery='SELECT * FROM table_2015_2016_agencies_by_panel_by_zip_copy where edu_parents<>0 order by zip ASC, edu_parents DESC';
window.agencieshealthmentalhealthquery='SELECT * FROM table_2015_2016_agencies_by_panel_by_zip_copy where health_mental<>0 order by zip ASC, health_mental DESC';
window.agencieshealthphysicalhealthquery='SELECT * FROM table_2015_2016_agencies_by_panel_by_zip_copy where health_physical<>0 order by zip ASC, health_physical DESC';
window.agenciesfamviolhealthquery='SELECT * FROM table_2015_2016_agencies_by_panel_by_zip_copy where health_famvio<>0 order by zip ASC, health_famvio DESC';
window.agenciesobesityhealthquery='SELECT * FROM table_2015_2016_agencies_by_panel_by_zip_copy where health_obesity<>0 order by zip ASC, health_obesity DESC';
window.agenciespreventivecarehealthquery='SELECT * FROM table_2015_2016_agencies_by_panel_by_zip_copy where heath_prevent<>0 order by zip ASC, heath_prevent DESC';
window.agenciessubstanceabusehealthquery='SELECT * FROM table_2015_2016_agencies_by_panel_by_zip_copy where health_substance<>0 order by zip ASC, health_substance DESC';

window.apikey='7eb21b3c9b23e0a313c6d4f7f1d433e920f3059b';
window.username='raveoli';

window.map = L.map('mapid',{center: [32.776, -96.7970], zoom: 10, zoomControl: false })
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'raveenahegde.2pkc184i',
    accessToken: 'pk.eyJ1IjoicmF2ZWVuYWhlZ2RlIiwiYSI6ImNpeHdiZjU0eDAwMWwzM283OWRxbWlta3EifQ.fBGu7BMdsaR3tWW51-EqUA'
}).addTo(map);

//console.log("Insecret");