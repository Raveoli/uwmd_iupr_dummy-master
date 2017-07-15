/**
 * Created by rxh160530 on 1/25/2017.
 */
//Call to CartoDB API to get the centroids table information in geoJSON format

window.workdevCentroidLayer=0;
window.fincapCentroidLayer=0;
window.totalCentroidLayer=0;
window.afterschoolCentroidLayer=0;
window.collegecareerCentroidLayer=0;
window.earlychildhoodCentroidLayer=0;
window.mathscienceCentroidLayer=0;
window.parentmentorsCentroidLayer=0;
window.mentalhealthCentroidLayer=0;
window.physicalhealthCentroidLayer=0;
window.familyviolenceCentroidLayer=0;
window.obesityCentroidLayer=0;
window.preventivecareCentroidLayer=0;
window.substanceabuseCentroidLayer=0;

$.getJSON('https://'+username+'.carto.com/api/v2/sql/?format=geojson&q='+centroidsquery+'&apikey='+apikey,function(data){
    new L.Control.Zoom({ position: 'topleft' }).addTo(map);
    var output=[];
    var range;
    var radius;

    $('#income').click(function () {

        map.removeLayer(workdevCentroidLayer);
        map.removeLayer(fincapCentroidLayer);
        map.removeLayer(totalCentroidLayer);
        map.removeLayer(afterschoolCentroidLayer);
        map.removeLayer(collegecareerCentroidLayer);
        map.removeLayer(earlychildhoodCentroidLayer);
        map.removeLayer(mathscienceCentroidLayer);
        map.removeLayer(parentmentorsCentroidLayer);
        map.removeLayer(mentalhealthCentroidLayer);
        map.removeLayer(physicalhealthCentroidLayer);
        map.removeLayer(familyviolenceCentroidLayer);
        map.removeLayer(obesityCentroidLayer);
        map.removeLayer(preventivecareCentroidLayer);
        map.removeLayer(substanceabuseCentroidLayer);
        map.removeLayer(polygonsPoverty);
        map.removeLayer(polygonsUnder200);
        map.removeLayer(polygonsUnemployment);
        map.removeLayer(polygonsPSE);
        map.removeLayer(polygonsHHDiplomaHigher);
        map.removeLayer(polygonsHHMedian);
        map.removeLayer(polygonsUninsured);
        map.removeLayer(polygonsChildhoodUninsured);
        map.addLayer(polygons);
    });

    $('#education').click(function () {
        map.removeLayer(workdevCentroidLayer);
        map.removeLayer(fincapCentroidLayer);
        map.removeLayer(totalCentroidLayer);
        map.removeLayer(afterschoolCentroidLayer);
        map.removeLayer(collegecareerCentroidLayer);
        map.removeLayer(earlychildhoodCentroidLayer);
        map.removeLayer(mathscienceCentroidLayer);
        map.removeLayer(parentmentorsCentroidLayer);
        map.removeLayer(mentalhealthCentroidLayer);
        map.removeLayer(physicalhealthCentroidLayer);
        map.removeLayer(familyviolenceCentroidLayer);
        map.removeLayer(obesityCentroidLayer);
        map.removeLayer(preventivecareCentroidLayer);
        map.removeLayer(substanceabuseCentroidLayer);
        map.removeLayer(polygonsPoverty);
        map.removeLayer(polygonsUnder200);
        map.removeLayer(polygonsUnemployment);
        map.removeLayer(polygonsHHMedian);
        map.removeLayer(polygonsPSE);
        map.removeLayer(polygonsHHDiplomaHigher);
        map.removeLayer(polygonsUninsured);
        map.removeLayer(polygonsChildhoodUninsured);
        map.addLayer(polygons);
    });

    $('#health').click(function () {
        map.removeLayer(workdevCentroidLayer);
        map.removeLayer(fincapCentroidLayer);
        map.removeLayer(totalCentroidLayer);
        map.removeLayer(afterschoolCentroidLayer);
        map.removeLayer(collegecareerCentroidLayer);
        map.removeLayer(earlychildhoodCentroidLayer);
        map.removeLayer(mathscienceCentroidLayer);
        map.removeLayer(parentmentorsCentroidLayer);
        map.removeLayer(mentalhealthCentroidLayer);
        map.removeLayer(physicalhealthCentroidLayer);
        map.removeLayer(familyviolenceCentroidLayer);
        map.removeLayer(obesityCentroidLayer);
        map.removeLayer(preventivecareCentroidLayer);
        map.removeLayer(substanceabuseCentroidLayer);
        map.removeLayer(polygonsPoverty);
        map.removeLayer(polygonsUnder200);
        map.removeLayer(polygonsUnemployment);
        map.removeLayer(polygonsHHMedian);
        map.removeLayer(polygonsPSE);
        map.removeLayer(polygonsHHDiplomaHigher);
        map.removeLayer(polygonsUninsured);
        map.removeLayer(polygonsChildhoodUninsured);
        map.addLayer(polygons);
    });

    $('#workdev').click(function () {
        workdev = true;
        fincap = false;
        total = false;
        map.removeLayer(workdevCentroidLayer);
        map.removeLayer(fincapCentroidLayer);
        map.removeLayer(totalCentroidLayer);
        map.removeLayer(afterschoolCentroidLayer);
        map.removeLayer(collegecareerCentroidLayer);
        map.removeLayer(earlychildhoodCentroidLayer);
        map.removeLayer(mathscienceCentroidLayer);
        map.removeLayer(parentmentorsCentroidLayer);
        /*map.removeLayer(polygonsPoverty);
        map.removeLayer(polygonsUnder200);
        map.removeLayer(polygonsUnemployment);
        map.removeLayer(polygonsHHMedian);
        map.addLayer(polygons);*/
        //console.log("Layers removed for workdev");
        workdevbubble();
    });
    $('#fincap').click(function () {
        workdev = false;
        fincap = true;
        total = false;
        //console.log("fincap workdev"+workdevCentroidLayer);
        map.removeLayer(workdevCentroidLayer);
        map.removeLayer(fincapCentroidLayer);
        map.removeLayer(totalCentroidLayer);
        map.removeLayer(afterschoolCentroidLayer);
        map.removeLayer(collegecareerCentroidLayer);
        map.removeLayer(earlychildhoodCentroidLayer);
        map.removeLayer(mathscienceCentroidLayer);
        map.removeLayer(parentmentorsCentroidLayer);
        /*map.removeLayer(polygonsPoverty);
        map.removeLayer(polygonsUnder200);
        map.removeLayer(polygonsUnemployment);
        map.removeLayer(polygonsHHMedian);*/
       // map.addLayer(polygons);
        financialCapabilitybubble();
    });
    $('#total').click(function () {
        workdev = false;
        fincap = false;
        total=true;
        map.removeLayer(workdevCentroidLayer);
        map.removeLayer(fincapCentroidLayer);
        map.removeLayer(totalCentroidLayer);
        map.removeLayer(afterschoolCentroidLayer);
        map.removeLayer(collegecareerCentroidLayer);
        map.removeLayer(earlychildhoodCentroidLayer);
        map.removeLayer(mathscienceCentroidLayer);
        map.removeLayer(parentmentorsCentroidLayer);
        /*map.removeLayer(polygonsPoverty);
        map.removeLayer(polygonsUnder200);
        map.removeLayer(polygonsUnemployment);
        map.removeLayer(polygonsHHMedian);*/
      //  map.addLayer(polygons);
        inctotalbubble();
    });
    $('#afterschool').click(function () {
        afterschool = true;
        collegecareer = false;
        earlychildhood = false;
        mathscience = false;
        parentmentors = false;
        map.removeLayer(workdevCentroidLayer);
        map.removeLayer(fincapCentroidLayer);
        map.removeLayer(totalCentroidLayer);
        map.removeLayer(afterschoolCentroidLayer);
        map.removeLayer(collegecareerCentroidLayer);
        map.removeLayer(earlychildhoodCentroidLayer);
        map.removeLayer(mathscienceCentroidLayer);
        map.removeLayer(parentmentorsCentroidLayer);
        map.removeLayer(polygonsPoverty);
        map.removeLayer(polygonsUnder200);
        map.removeLayer(polygonsUnemployment);
        map.removeLayer(polygonsPSE);
        map.removeLayer(polygonsHHDiplomaHigher);
        map.addLayer(polygons);
        //console.log("Layers removed for workdev");
        eduafterschoolbubble();
    });

    $('#collegecareer').click(function () {
        afterschool = false;
        collegecareer = true;
        earlychildhood = false;
        mathscience = false;
        parentmentors = false;
        map.removeLayer(workdevCentroidLayer);
        map.removeLayer(fincapCentroidLayer);
        map.removeLayer(totalCentroidLayer);
        map.removeLayer(afterschoolCentroidLayer);
        map.removeLayer(collegecareerCentroidLayer);
        map.removeLayer(earlychildhoodCentroidLayer);
        map.removeLayer(mathscienceCentroidLayer);
        map.removeLayer(parentmentorsCentroidLayer);
        map.removeLayer(polygonsPoverty);
        map.removeLayer(polygonsUnder200);
        map.removeLayer(polygonsUnemployment);
        map.removeLayer(polygonsPSE);
        map.removeLayer(polygonsHHDiplomaHigher);
        map.addLayer(polygons);
        //console.log("Layers removed for workdev");
        educollegecareerbubble();
    });
    $('#earlychildhood').click(function () {
        afterschool = false;
        collegecareer = false;
        earlychildhood = true;
        mathscience = false;
        parentmentors = false;
        map.removeLayer(workdevCentroidLayer);
        map.removeLayer(fincapCentroidLayer);
        map.removeLayer(totalCentroidLayer);
        map.removeLayer(afterschoolCentroidLayer);
        map.removeLayer(collegecareerCentroidLayer);
        map.removeLayer(earlychildhoodCentroidLayer);
        map.removeLayer(mathscienceCentroidLayer);
        map.removeLayer(parentmentorsCentroidLayer);
        map.removeLayer(polygonsPoverty);
        map.removeLayer(polygonsUnder200);
        map.removeLayer(polygonsUnemployment);
        map.removeLayer(polygonsPSE);
        map.removeLayer(polygonsHHDiplomaHigher);
        map.addLayer(polygons);
        //console.log("Layers removed for workdev");
        eduearlychildhoodbubble();
    });
    $('#mathscience').click(function () {
        afterschool = false;
        collegecareer = false;
        earlychildhood = false;
        mathscience = true;
        parentmentors = false;
        map.removeLayer(workdevCentroidLayer);
        map.removeLayer(fincapCentroidLayer);
        map.removeLayer(totalCentroidLayer);
        map.removeLayer(afterschoolCentroidLayer);
        map.removeLayer(collegecareerCentroidLayer);
        map.removeLayer(earlychildhoodCentroidLayer);
        map.removeLayer(mathscienceCentroidLayer);
        map.removeLayer(parentmentorsCentroidLayer);
        map.removeLayer(polygonsPoverty);
        map.removeLayer(polygonsUnder200);
        map.removeLayer(polygonsUnemployment);
        map.removeLayer(polygonsPSE);
        map.removeLayer(polygonsHHDiplomaHigher);
        map.addLayer(polygons);
        //console.log("Layers removed for workdev");
        edumathsciencebubble();
    });
    $('#parentmentors').click(function () {
        afterschool = false;
        collegecareer = false;
        earlychildhood = false;
        mathscience = false;
        parentmentors = true;
        map.removeLayer(workdevCentroidLayer);
        map.removeLayer(fincapCentroidLayer);
        map.removeLayer(totalCentroidLayer);
        map.removeLayer(afterschoolCentroidLayer);
        map.removeLayer(collegecareerCentroidLayer);
        map.removeLayer(earlychildhoodCentroidLayer);
        map.removeLayer(mathscienceCentroidLayer);
        map.removeLayer(parentmentorsCentroidLayer);
        map.removeLayer(polygonsPoverty);
        map.removeLayer(polygonsUnder200);
        map.removeLayer(polygonsUnemployment);
        map.removeLayer(polygonsPSE);
        map.removeLayer(polygonsHHDiplomaHigher);
        map.addLayer(polygons);
        //console.log("Layers removed for workdev");
        eduparentmentorsbubble();
    });
    $('#mentalhealth').click(function () {
        mentalhealth = true;
        physicalhealth = false;
        famviol = false;
        obesity = false;
        preventivecare = false;
        substanceabuse = false;
        map.removeLayer(workdevCentroidLayer);
        map.removeLayer(fincapCentroidLayer);
        map.removeLayer(totalCentroidLayer);
        map.removeLayer(afterschoolCentroidLayer);
        map.removeLayer(collegecareerCentroidLayer);
        map.removeLayer(earlychildhoodCentroidLayer);
        map.removeLayer(mathscienceCentroidLayer);
        map.removeLayer(parentmentorsCentroidLayer);
        map.removeLayer(mentalhealthCentroidLayer);
        map.removeLayer(physicalhealthCentroidLayer);
        map.removeLayer(familyviolenceCentroidLayer);
        map.removeLayer(obesityCentroidLayer);
        map.removeLayer(preventivecareCentroidLayer);
        map.removeLayer(substanceabuseCentroidLayer);
        map.removeLayer(polygonsPoverty);
        map.removeLayer(polygonsUnder200);
        map.removeLayer(polygonsUnemployment);
        map.removeLayer(polygonsPSE);
        map.removeLayer(polygonsHHDiplomaHigher);
        map.removeLayer(polygonsUninsured);
        map.removeLayer(polygonsChildhoodUninsured);
        map.addLayer(polygons);
        //console.log("Layers removed for workdev");
        healthmentalhealthbubble();
    });
    $('#physicalhealth').click(function () {
        mentalhealth = false;
        physicalhealth = true;
        famviol = false;
        obesity = false;
        preventivecare = false;
        substanceabuse = false;
        map.removeLayer(workdevCentroidLayer);
        map.removeLayer(fincapCentroidLayer);
        map.removeLayer(totalCentroidLayer);
        map.removeLayer(afterschoolCentroidLayer);
        map.removeLayer(collegecareerCentroidLayer);
        map.removeLayer(earlychildhoodCentroidLayer);
        map.removeLayer(mathscienceCentroidLayer);
        map.removeLayer(parentmentorsCentroidLayer);
        map.removeLayer(mentalhealthCentroidLayer);
        map.removeLayer(physicalhealthCentroidLayer);
        map.removeLayer(familyviolenceCentroidLayer);
        map.removeLayer(obesityCentroidLayer);
        map.removeLayer(preventivecareCentroidLayer);
        map.removeLayer(substanceabuseCentroidLayer);
        map.removeLayer(polygonsPoverty);
        map.removeLayer(polygonsUnder200);
        map.removeLayer(polygonsUnemployment);
        map.removeLayer(polygonsPSE);
        map.removeLayer(polygonsHHDiplomaHigher);
        map.removeLayer(polygonsUninsured);
        map.removeLayer(polygonsChildhoodUninsured);
        map.addLayer(polygons);
        //console.log("Layers removed for workdev");
        healthphysicalhealthbubble();
    });

    $('#familyviolence').click(function () {
        mentalhealth = false;
        physicalhealth = false;
        famviol = true;
        obesity = false;
        preventivecare = false;
        substanceabuse = false;
        map.removeLayer(workdevCentroidLayer);
        map.removeLayer(fincapCentroidLayer);
        map.removeLayer(totalCentroidLayer);
        map.removeLayer(afterschoolCentroidLayer);
        map.removeLayer(collegecareerCentroidLayer);
        map.removeLayer(earlychildhoodCentroidLayer);
        map.removeLayer(mathscienceCentroidLayer);
        map.removeLayer(parentmentorsCentroidLayer);
        map.removeLayer(mentalhealthCentroidLayer);
        map.removeLayer(physicalhealthCentroidLayer);
        map.removeLayer(familyviolenceCentroidLayer);
        map.removeLayer(obesityCentroidLayer);
        map.removeLayer(preventivecareCentroidLayer);
        map.removeLayer(substanceabuseCentroidLayer);
        map.removeLayer(polygonsPoverty);
        map.removeLayer(polygonsUnder200);
        map.removeLayer(polygonsUnemployment);
        map.removeLayer(polygonsPSE);
        map.removeLayer(polygonsHHDiplomaHigher);
        map.removeLayer(polygonsUninsured);
        map.removeLayer(polygonsChildhoodUninsured);
        map.addLayer(polygons);
        //console.log("Layers removed for workdev");
        famviolhealthbubble();
    });

    $('#obesity').click(function () {
        mentalhealth = false;
        physicalhealth = false;
        famviol = false;
        obesity = true;
        preventivecare = false;
        substanceabuse = false;
        map.removeLayer(workdevCentroidLayer);
        map.removeLayer(fincapCentroidLayer);
        map.removeLayer(totalCentroidLayer);
        map.removeLayer(afterschoolCentroidLayer);
        map.removeLayer(collegecareerCentroidLayer);
        map.removeLayer(earlychildhoodCentroidLayer);
        map.removeLayer(mathscienceCentroidLayer);
        map.removeLayer(parentmentorsCentroidLayer);
        map.removeLayer(mentalhealthCentroidLayer);
        map.removeLayer(physicalhealthCentroidLayer);
        map.removeLayer(familyviolenceCentroidLayer);
        map.removeLayer(obesityCentroidLayer);
        map.removeLayer(preventivecareCentroidLayer);
        map.removeLayer(substanceabuseCentroidLayer);
        map.removeLayer(polygonsPoverty);
        map.removeLayer(polygonsUnder200);
        map.removeLayer(polygonsUnemployment);
        map.removeLayer(polygonsPSE);
        map.removeLayer(polygonsHHDiplomaHigher);
        map.removeLayer(polygonsUninsured);
        map.removeLayer(polygonsChildhoodUninsured);
        map.addLayer(polygons);
        //console.log("Layers removed for workdev");
        obesityhealthbubble();
    });

    $('#preventivecare').click(function () {
        mentalhealth = false;
        physicalhealth = false;
        famviol = false;
        obesity = false;
        preventivecare = true;
        substanceabuse = false;
        map.removeLayer(workdevCentroidLayer);
        map.removeLayer(fincapCentroidLayer);
        map.removeLayer(totalCentroidLayer);
        map.removeLayer(afterschoolCentroidLayer);
        map.removeLayer(collegecareerCentroidLayer);
        map.removeLayer(earlychildhoodCentroidLayer);
        map.removeLayer(mathscienceCentroidLayer);
        map.removeLayer(parentmentorsCentroidLayer);
        map.removeLayer(mentalhealthCentroidLayer);
        map.removeLayer(physicalhealthCentroidLayer);
        map.removeLayer(familyviolenceCentroidLayer);
        map.removeLayer(obesityCentroidLayer);
        map.removeLayer(preventivecareCentroidLayer);
        map.removeLayer(substanceabuseCentroidLayer);
        map.removeLayer(polygonsPoverty);
        map.removeLayer(polygonsUnder200);
        map.removeLayer(polygonsUnemployment);
        map.removeLayer(polygonsPSE);
        map.removeLayer(polygonsHHDiplomaHigher);
        map.removeLayer(polygonsUninsured);
        map.removeLayer(polygonsChildhoodUninsured);
        map.addLayer(polygons);
        //console.log("Layers removed for workdev");
        preventivecarehealthbubble();
    });

    $('#substanceabuse').click(function () {
        mentalhealth = false;
        physicalhealth = false;
        famviol = false;
        obesity = false;
        preventivecare = false;
        substanceabuse = true;
        map.removeLayer(workdevCentroidLayer);
        map.removeLayer(fincapCentroidLayer);
        map.removeLayer(totalCentroidLayer);
        map.removeLayer(afterschoolCentroidLayer);
        map.removeLayer(collegecareerCentroidLayer);
        map.removeLayer(earlychildhoodCentroidLayer);
        map.removeLayer(mathscienceCentroidLayer);
        map.removeLayer(parentmentorsCentroidLayer);
        map.removeLayer(mentalhealthCentroidLayer);
        map.removeLayer(physicalhealthCentroidLayer);
        map.removeLayer(familyviolenceCentroidLayer);
        map.removeLayer(obesityCentroidLayer);
        map.removeLayer(preventivecareCentroidLayer);
        map.removeLayer(substanceabuseCentroidLayer);
        map.removeLayer(polygonsPoverty);
        map.removeLayer(polygonsUnder200);
        map.removeLayer(polygonsUnemployment);
        map.removeLayer(polygonsPSE);
        map.removeLayer(polygonsHHDiplomaHigher);
        map.removeLayer(polygonsUninsured);
        map.removeLayer(polygonsChildhoodUninsured);
        map.addLayer(polygons);
        //console.log("Layers removed for workdev");
        substanceabusehealthbubble();
    });
    //financialCapabilitybubble();
    //inctotalbubble();
    function workdevbubble(){
            output=[];
            //console.log(data);
            $.each(data.features, function(key, val) {
               //console.log("Row data"+JSON.stringify(val));
                output.push(val.properties.inc_workdev);
            });
            //console.log("Output"+output);

            var max=Math.max.apply(Math,output);
            var min=Math.min.apply(Math,output);
            //console.log("Max"+max);
            //console.log("Min"+min);
            range=max-min;
            //console.log("Range"+range);
            //console.log(JSON.stringify(data));

          //  console.log("Radius Outside"+calculateRadius());
            function calculateRadius(n){
                    radius=(n/range)*40;
                return radius;
            }


            var marker;
         workdevCentroidLayer=L.geoJson(data,{
                pointToLayer: function(feature,latlng){
                    popupCentroid = L.popup({
                        maxWidth:200
                    }).setContent("<br><b>" + feature.properties.zip + "</b><br>Workforce Development: " + feature.properties.inc_workdev  + " Clients");
                    //map.addLayer(marker);
                    return L.circleMarker(latlng, {
                        radius:calculateRadius(feature.properties.inc_workdev),
                        color: "#fff2f6",
                        fillOpacity:0.8,
                        zIndexOffset:1000
                    }).bindPopup(popupCentroid);
                }
            })
       // workdevCentroidLayer.bringToFront();
        map.addLayer(workdevCentroidLayer);
        //  workdevCentroidLayer.setZIndex(0);
    }

    function financialCapabilitybubble(){
            output=[];
            $.each(data.features, function(key, val) {
                //console.log("Row data"+JSON.stringify(val));
                output.push(val.properties.inc_fincap);
            });
            //console.log("Output"+output);

            var max=Math.max.apply(Math,output);
            var min=Math.min.apply(Math,output);
            //console.log("Max"+max);
            //console.log("Min"+min);
            range=max-min;
            //console.log("Range"+range);
            //console.log(JSON.stringify(data));

           // console.log("Radius Outside"+calculateRadius());
            function calculateRadius(n){
                radius=(n/range)*40;
                return radius;
            }

        fincapCentroidLayer=L.geoJson(data,{
                pointToLayer: function(feature,latlng){
                    return L.circleMarker(latlng, {
                        radius:calculateRadius(feature.properties.inc_fincap),
                        color: "#fff2f6",
                        fillOpacity:0.8,
                        zIndexOffset:1000
                    }).bindPopup("<br>" + feature.properties.zip + "<br>Financial Capability: " + feature.properties.inc_fincap  + " Clients")
                }
            })
        map.addLayer(fincapCentroidLayer);

       // });
    }
    function inctotalbubble(){
            output=[];
            $.each(data.features, function(key, val) {
                //console.log("Row data"+JSON.stringify(val));
                output.push(val.properties.inc_total);
            });
            //console.log("Output"+output);

            var max=Math.max.apply(Math,output);
            var min=Math.min.apply(Math,output);
            //console.log("Max"+max);
            //console.log("Min"+min);
            range=max-min;
            //console.log("Range"+range);
            //console.log(JSON.stringify(data));

            //console.log("Radius Outside"+calculateRadius());
            function calculateRadius(n){
                radius=(n/range)*40;
                return radius;
            }

        totalCentroidLayer=L.geoJson(data,{
                pointToLayer: function(feature,latlng){
                    //console.log("Radius"+calculateRadius(feature.properties.inc_total))
                    return L.circleMarker(latlng, {
                        radius:calculateRadius(feature.properties.inc_total),
                        color: "#fff2f6",
                        fillOpacity:0.8,
                        zIndexOffset:1000
                    }).bindPopup("<br>" + feature.properties.zip + "<br>Total: " + feature.properties.inc_total  + " Clients")
                }
            })
        map.addLayer(totalCentroidLayer);

    //    });
    }

    function eduafterschoolbubble(){
        output=[];
        $.each(data.features, function(key, val) {
            //console.log("Row data"+JSON.stringify(val));
            output.push(val.properties.edu_afterschool);
        });
        //console.log("Output"+output);

        var max=Math.max.apply(Math,output);
        var min=Math.min.apply(Math,output);
        //console.log("Max"+max);
        //console.log("Min"+min);
        range=max-min;
        //console.log("Range"+range);
        //console.log(JSON.stringify(data));

        //console.log("Radius Outside"+calculateRadius());
        function calculateRadius(n){
            radius=(n/range)*40;
            return radius;
        }

        afterschoolCentroidLayer=L.geoJson(data,{
            pointToLayer: function(feature,latlng){
                //console.log("Radius"+calculateRadius(feature.properties.inc_total))
                return L.circleMarker(latlng, {
                    radius:calculateRadius(feature.properties.edu_afterschool),
                    color: "#fff2f6",
                    fillOpacity:0.8,
                    zIndexOffset:1000
                }).bindPopup("<br>" + feature.properties.zip + "<br>Total: " + feature.properties.edu_afterschool  + " Clients")
            }
        })
        map.addLayer(afterschoolCentroidLayer);

        //    });
    }

    function educollegecareerbubble(){
        output=[];
        $.each(data.features, function(key, val) {
            //console.log("Row data"+JSON.stringify(val));
            output.push(val.properties.edu_college);
        });
        //console.log("Output"+output);

        var max=Math.max.apply(Math,output);
        var min=Math.min.apply(Math,output);
        //console.log("Max"+max);
        //console.log("Min"+min);
        range=max-min;
        //console.log("Range"+range);
        //console.log(JSON.stringify(data));

        //console.log("Radius Outside"+calculateRadius());
        function calculateRadius(n){
            radius=(n/range)*40;
            return radius;
        }

        collegecareerCentroidLayer=L.geoJson(data,{
            pointToLayer: function(feature,latlng){
                //console.log("Radius"+calculateRadius(feature.properties.inc_total))
                return L.circleMarker(latlng, {
                    radius:calculateRadius(feature.properties.edu_college),
                    color: "#fff2f6",
                    fillOpacity:0.8,
                    zIndexOffset:1000
                }).bindPopup("<br>" + feature.properties.zip + "<br>Total: " + feature.properties.edu_college  + " Clients")
            }
        })
        map.addLayer(collegecareerCentroidLayer);

        //    });
    }

    function eduearlychildhoodbubble(){
        output=[];
        $.each(data.features, function(key, val) {
            //console.log("Row data"+JSON.stringify(val));
            output.push(val.properties.edu_earlychild);
        });
        //console.log("Output"+output);

        var max=Math.max.apply(Math,output);
        var min=Math.min.apply(Math,output);
        //console.log("Max"+max);
        //console.log("Min"+min);
        range=max-min;
        //console.log("Range"+range);
        //console.log(JSON.stringify(data));

        //console.log("Radius Outside"+calculateRadius());
        function calculateRadius(n){
            radius=(n/range)*40;
            return radius;
        }

        earlychildhoodCentroidLayer=L.geoJson(data,{
            pointToLayer: function(feature,latlng){
                //console.log("Radius"+calculateRadius(feature.properties.inc_total))
                return L.circleMarker(latlng, {
                    radius:calculateRadius(feature.properties.edu_earlychild),
                    color: "#fff2f6",
                    fillOpacity:0.8,
                    zIndexOffset:1000
                }).bindPopup("<br>" + feature.properties.zip + "<br>Total: " + feature.properties.edu_earlychild  + " Clients")
            }
        })
        map.addLayer(earlychildhoodCentroidLayer);

        //    });
    }

    function edumathsciencebubble(){
        output=[];
        $.each(data.features, function(key, val) {
            //console.log("Row data"+JSON.stringify(val));
            output.push(val.properties.edu_stem);
        });
        //console.log("Output"+output);

        var max=Math.max.apply(Math,output);
        var min=Math.min.apply(Math,output);
        //console.log("Max"+max);
        //console.log("Min"+min);
        range=max-min;
        //console.log("Range"+range);
        //console.log(JSON.stringify(data));

        //console.log("Radius Outside"+calculateRadius());
        function calculateRadius(n){
            radius=(n/range)*40;
            return radius;
        }

        mathscienceCentroidLayer=L.geoJson(data,{
            pointToLayer: function(feature,latlng){
                //console.log("Radius"+calculateRadius(feature.properties.inc_total))
                return L.circleMarker(latlng, {
                    radius:calculateRadius(feature.properties.edu_stem),
                    color: "#fff2f6",
                    fillOpacity:0.8,
                    zIndexOffset:1000
                }).bindPopup("<br>" + feature.properties.zip + "<br>Total: " + feature.properties.edu_stem  + " Clients")
            }
        })
        map.addLayer(mathscienceCentroidLayer);

        //    });
    }
    function eduparentmentorsbubble(){
        output=[];
        $.each(data.features, function(key, val) {
            //console.log("Row data"+JSON.stringify(val));
            output.push(val.properties.edu_parents);
        });
        //console.log("Output"+output);

        var max=Math.max.apply(Math,output);
        var min=Math.min.apply(Math,output);
        //console.log("Max"+max);
        //console.log("Min"+min);
        range=max-min;
        //console.log("Range"+range);
        //console.log(JSON.stringify(data));

        //console.log("Radius Outside"+calculateRadius());
        function calculateRadius(n){
            radius=(n/range)*40;
            return radius;
        }

        parentmentorsCentroidLayer=L.geoJson(data,{
            pointToLayer: function(feature,latlng){
                //console.log("Radius"+calculateRadius(feature.properties.inc_total))
                return L.circleMarker(latlng, {
                    radius:calculateRadius(feature.properties.edu_parents),
                    color: "#fff2f6",
                    fillOpacity:0.8,
                    zIndexOffset:1000
                }).bindPopup("<br>" + feature.properties.zip + "<br>Total: " + feature.properties.edu_parents  + " Clients")
            }
        })
        map.addLayer(parentmentorsCentroidLayer);

        //    });
    }

    function healthmentalhealthbubble(){
        output=[];
        $.each(data.features, function(key, val) {
            //console.log("Row data"+JSON.stringify(val));
            output.push(val.properties.health_mental);
        });
        //console.log("Output"+output);

        var max=Math.max.apply(Math,output);
        var min=Math.min.apply(Math,output);
        //console.log("Max"+max);
        //console.log("Min"+min);
        range=max-min;
        //console.log("Range"+range);
        //console.log(JSON.stringify(data));

        //console.log("Radius Outside"+calculateRadius());
        function calculateRadius(n){
            radius=(n/range)*40;
            return radius;
        }

        mentalhealthCentroidLayer=L.geoJson(data,{
            pointToLayer: function(feature,latlng){
                //console.log("Radius"+calculateRadius(feature.properties.inc_total))
                return L.circleMarker(latlng, {
                    radius:calculateRadius(feature.properties.health_mental),
                    color: "#fff2f6",
                    fillOpacity:0.8,
                    zIndexOffset:1000
                }).bindPopup("<br>" + feature.properties.zip + "<br>Total: " + feature.properties.health_mental  + " Clients")
            }
        })
        map.addLayer(mentalhealthCentroidLayer);

    }

    function healthphysicalhealthbubble(){
        output=[];
        $.each(data.features, function(key, val) {
            //console.log("Row data"+JSON.stringify(val));
            output.push(val.properties.health_physical);
        });
        //console.log("Output"+output);

        var max=Math.max.apply(Math,output);
        var min=Math.min.apply(Math,output);
        //console.log("Max"+max);
        //console.log("Min"+min);
        range=max-min;
        //console.log("Range"+range);
        //console.log(JSON.stringify(data));

        //console.log("Radius Outside"+calculateRadius());
        function calculateRadius(n){
            radius=(n/range)*40;
            return radius;
        }

        physicalhealthCentroidLayer=L.geoJson(data,{
            pointToLayer: function(feature,latlng){
                //console.log("Radius"+calculateRadius(feature.properties.inc_total))
                return L.circleMarker(latlng, {
                    radius:calculateRadius(feature.properties.health_physical),
                    color: "#fff2f6",
                    fillOpacity:0.8,
                    zIndexOffset:1000
                }).bindPopup("<br>" + feature.properties.zip + "<br>Total: " + feature.properties.health_physical  + " Clients")
            }
        })
        map.addLayer(physicalhealthCentroidLayer);

    }

    function famviolhealthbubble(){
        output=[];
        $.each(data.features, function(key, val) {
            //console.log("Row data"+JSON.stringify(val));
            output.push(val.properties.health_famvio);
        });
        //console.log("Output"+output);

        var max=Math.max.apply(Math,output);
        var min=Math.min.apply(Math,output);
        //console.log("Max"+max);
        //console.log("Min"+min);
        range=max-min;
        //console.log("Range"+range);
        //console.log(JSON.stringify(data));

        //console.log("Radius Outside"+calculateRadius());
        function calculateRadius(n){
            radius=(n/range)*40;
            return radius;
        }

        familyviolenceCentroidLayer=L.geoJson(data,{
            pointToLayer: function(feature,latlng){
                //console.log("Radius"+calculateRadius(feature.properties.inc_total))
                return L.circleMarker(latlng, {
                    radius:calculateRadius(feature.properties.health_famvio),
                    color: "#fff2f6",
                    fillOpacity:0.8,
                    zIndexOffset:1000
                }).bindPopup("<br>" + feature.properties.zip + "<br>Total: " + feature.properties.health_famvio  + " Clients")
            }
        })
        map.addLayer(familyviolenceCentroidLayer);

    }

    function obesityhealthbubble(){
        output=[];
        $.each(data.features, function(key, val) {
            //console.log("Row data"+JSON.stringify(val));
            output.push(val.properties.health_obesity);
        });
        //console.log("Output"+output);

        var max=Math.max.apply(Math,output);
        var min=Math.min.apply(Math,output);
        //console.log("Max"+max);
        //console.log("Min"+min);
        range=max-min;
        //console.log("Range"+range);
        //console.log(JSON.stringify(data));

        //console.log("Radius Outside"+calculateRadius());
        function calculateRadius(n){
            radius=(n/range)*40;
            return radius;
        }

        obesityCentroidLayer=L.geoJson(data,{
            pointToLayer: function(feature,latlng){
                //console.log("Radius"+calculateRadius(feature.properties.inc_total))
                return L.circleMarker(latlng, {
                    radius:calculateRadius(feature.properties.health_obesity),
                    color: "#fff2f6",
                    fillOpacity:0.8,
                    zIndexOffset:1000
                }).bindPopup("<br>" + feature.properties.zip + "<br>Total: " + feature.properties.health_obesity  + " Clients")
            }
        })
        map.addLayer(obesityCentroidLayer);

    }

    function preventivecarehealthbubble(){
        output=[];
        $.each(data.features, function(key, val) {
            //console.log("Row data"+JSON.stringify(val));
            output.push(val.properties.heath_prevent);
        });
        //console.log("Output"+output);

        var max=Math.max.apply(Math,output);
        var min=Math.min.apply(Math,output);
        //console.log("Max"+max);
        //console.log("Min"+min);
        range=max-min;
        //console.log("Range"+range);
        //console.log(JSON.stringify(data));

        //console.log("Radius Outside"+calculateRadius());
        function calculateRadius(n){
            radius=(n/range)*40;
            return radius;
        }

        preventivecareCentroidLayer=L.geoJson(data,{
            pointToLayer: function(feature,latlng){
                //console.log("Radius"+calculateRadius(feature.properties.inc_total))
                return L.circleMarker(latlng, {
                    radius:calculateRadius(feature.properties.heath_prevent),
                    color: "#fff2f6",
                    fillOpacity:0.8,
                    zIndexOffset:1000
                }).bindPopup("<br>" + feature.properties.zip + "<br>Total: " + feature.properties.heath_prevent  + " Clients")
            }
        })
        map.addLayer(preventivecareCentroidLayer);

    }

    function substanceabusehealthbubble(){
        output=[];
        $.each(data.features, function(key, val) {
            //console.log("Row data"+JSON.stringify(val));
            output.push(val.properties.health_substance);
        });
        //console.log("Output"+output);

        var max=Math.max.apply(Math,output);
        var min=Math.min.apply(Math,output);
        //console.log("Max"+max);
        //console.log("Min"+min);
        range=max-min;
        //console.log("Range"+range);
        //console.log(JSON.stringify(data));

        //console.log("Radius Outside"+calculateRadius());
        function calculateRadius(n){
            radius=(n/range)*40;
            return radius;
        }

        substanceabuseCentroidLayer=L.geoJson(data,{
            pointToLayer: function(feature,latlng){
                //console.log("Radius"+calculateRadius(feature.properties.inc_total))
                return L.circleMarker(latlng, {
                    radius:calculateRadius(feature.properties.health_substance),
                    color: "#fff2f6",
                    fillOpacity:0.8,
                    zIndexOffset:1000
                }).bindPopup("<br>" + feature.properties.zip + "<br>Total: " + feature.properties.health_substance  + " Clients")
            }
        })
        map.addLayer(substanceabuseCentroidLayer);

    }
});
