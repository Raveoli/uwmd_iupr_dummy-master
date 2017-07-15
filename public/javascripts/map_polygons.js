/**
 * Created by rxh160530 on 2/1/2017.
 */
var app=angular.module("maps",[]);
window.polygonsPoverty=0;
window.polygons=0;
window.polygonsUnder200=0;
window.polygonsUnemployment=0;
window.polygonsHHDiplomaHigher=0;
window.polygonsPSE=0;
window.polygonsUninsured=0;
window.polygonsChildhoodUninsured=0;
window.polygonsHHMedian=0;
var pcount=true;
var ucount=true;
var unemcount=true;
var hhcount=true;
var hhinccount=true;
var psecount=true;
var uncount=true;
var unchildcount=true;
window.legendPoverty=0;
window.LegendUnder200=0;
window.legendUnemployment=0;
window.LegendHHDiplomaHigher=0;
window.LegendPSE=0;
window.LegendUninsured=0;
window.LegendChildhoodUninsured=0;
window.legendMedianHHIncome=0;
var workdev=false;
var fincap=false;
var total=false;
var afterschool=false;
var collegecareer=false;
var earlychildhood=false;
var mathscience=false;
var parentmentors=false;
var mentalhealth=false;
var physicalhealth=false;
var famviol=false;
var obesity=false;
var preventivecare=false;
var substanceabuse=false;


//Controller to display the agencies data
app.controller("zipsCtrl",function($scope){
    var name;
    var outputworkdev=[];
    var outputfincap=[];
    var outputtotalcap=[];
    var outputafterschool=[];
    var outputcollegecareer=[];
    var outputearlychildhood=[];
    var outputmathscience=[];
    var outputparentmentors=[];
    var outputmentalhealth=[];
    var outputphysicalhealth=[];
    var outputfamviol=[];
    var outputobesity=[];
    var outputpreventivecare=[];
    var outputsubstanceabuse=[];

    $scope.showWorkdev=false;
    $scope.toggleShowWorkdev=function () {
        if (legendUnemployment != 0) {
            map.removeControl(legendUnemployment);
        }
        if (LegendUnder200 != 0) {
            map.removeControl(LegendUnder200);
        }
        if (legendPoverty != 0) {
            map.removeControl(legendPoverty);
        }
        if (legendMedianHHIncome != 0) {
            map.removeControl(legendMedianHHIncome);
        }

        $scope.showWorkdev=!$scope.showWorkdev;
        $scope.showFincap=false;
        $scope.showTotalcap=false;

        /*$scope.showAfterschool=false;
        $scope.showCollegecareer=false;
        $scope.showEarlychildhood=false;
        $scope.showMathscience=false;
        $scope.showParentmentors=false;

        $scope.showMentalhealth=false;
        $scope.showPhysicalhealth=false;
        $scope.showFamilyViolence=false;
        $scope.showObesity=false;
        $scope.showPreventiveCare=false;
        $scope.showSubstanceAbuse=false;*/
    }
    $scope.showFincap=false;
    $scope.toggleShowFincap=function () {
        if (legendUnemployment != 0) {
            map.removeControl(legendUnemployment);
        }
        if (LegendUnder200 != 0) {
            map.removeControl(LegendUnder200);
        }
        if (legendPoverty != 0) {
            map.removeControl(legendPoverty);
        }
        if (legendMedianHHIncome != 0) {
            map.removeControl(legendMedianHHIncome);
        }
        $scope.showFincap=!$scope.showFincap;
        $scope.showWorkdev=false;
        $scope.showTotalcap=false;

        /*$scope.showAfterschool=false;
        $scope.showCollegecareer=false;
        $scope.showEarlychildhood=false;
        $scope.showMathscience=false;
        $scope.showParentmentors=false;

        $scope.showMentalhealth=false;
        $scope.showPhysicalhealth=false;
        $scope.showFamilyViolence=false;
        $scope.showObesity=false;
        $scope.showPreventiveCare=false;
        $scope.showSubstanceAbuse=false;*/
    }
    $scope.showTotalcap=false;
    $scope.toggleShowTotal=function () {
        if (legendUnemployment != 0) {
            map.removeControl(legendUnemployment);
        }
        if (LegendUnder200 != 0) {
            map.removeControl(LegendUnder200);
        }
        if (legendPoverty != 0) {
            map.removeControl(legendPoverty);
        }
        if (legendMedianHHIncome != 0) {
            map.removeControl(legendMedianHHIncome);
        }
        $scope.showTotalcap=!$scope.showTotalcap;
        $scope.showFincap=false;
        $scope.showWorkdev=false;

        /*$scope.showAfterschool=false;
        $scope.showCollegecareer=false;
        $scope.showEarlychildhood=false;
        $scope.showMathscience=false;
        $scope.showParentmentors=false;

        $scope.showMentalhealth=false;
        $scope.showPhysicalhealth=false;
        $scope.showFamilyViolence=false;
        $scope.showObesity=false;
        $scope.showPreventiveCare=false;
        $scope.showSubstanceAbuse=false;*/
    }
    $scope.showAfterschool=false;
    $scope.toggleShowAfterschool=function () {
        if (legendPoverty != 0) {
            map.removeControl(legendPoverty);
        }
        if (LegendHHDiplomaHigher != 0) {
            map.removeControl(LegendHHDiplomaHigher);
        }
        if (LegendPSE != 0) {
            map.removeControl(LegendPSE);
        }
        $scope.showAfterschool=!$scope.showAfterschool;
        $scope.showCollegecareer=false;
        $scope.showEarlychildhood=false;
        $scope.showMathscience=false;
        $scope.showParentmentors=false;

        /*$scope.showFincap=false;
        $scope.showWorkdev=false;
        $scope.showTotalcap=false;

        $scope.showMentalhealth=false;
        $scope.showPhysicalhealth=false;
        $scope.showFamilyViolence=false;
        $scope.showObesity=false;
        $scope.showPreventiveCare=false;
        $scope.showSubstanceAbuse=false;*/

    }
    $scope.showCollegecareer=false;
    $scope.toggleShowCollegecareer=function () {
        if (legendPoverty != 0) {
            map.removeControl(legendPoverty);
        }
        if (LegendHHDiplomaHigher != 0) {
            map.removeControl(LegendHHDiplomaHigher);
        }
        if (LegendPSE != 0) {
            map.removeControl(LegendPSE);
        }
        $scope.showCollegecareer=!$scope.showCollegecareer;
        $scope.showAfterschool=false;
        $scope.showEarlychildhood=false;
        $scope.showMathscience=false;
        $scope.showParentmentors=false;

       /* $scope.showFincap=false;
        $scope.showWorkdev=false;
        $scope.showTotalcap=false;

        $scope.showMentalhealth=false;
        $scope.showPhysicalhealth=false;
        $scope.showFamilyViolence=false;
        $scope.showObesity=false;
        $scope.showPreventiveCare=false;
        $scope.showSubstanceAbuse=false;*/
    }
    $scope.showEarlychildhood=false;
    $scope.toggleShowEarlychildhood=function () {
        if (legendPoverty != 0) {
            map.removeControl(legendPoverty);
        }
        if (LegendHHDiplomaHigher != 0) {
            map.removeControl(LegendHHDiplomaHigher);
        }
        if (LegendPSE != 0) {
            map.removeControl(LegendPSE);
        }
        $scope.showEarlychildhood=!$scope.showEarlychildhood;
        $scope.showAfterschool=false;
        $scope.showCollegecareer=false;
        $scope.showMathscience=false;
        $scope.showParentmentors=false;

        /*$scope.showFincap=false;
        $scope.showWorkdev=false;
        $scope.showTotalcap=false;

        $scope.showMentalhealth=false;
        $scope.showPhysicalhealth=false;
        $scope.showFamilyViolence=false;
        $scope.showObesity=false;
        $scope.showPreventiveCare=false;
        $scope.showSubstanceAbuse=false;*/
    }
    $scope.showMathscience=false;
    $scope.toggleShowMathscience=function () {
        if (legendPoverty != 0) {
            map.removeControl(legendPoverty);
        }
        if (LegendHHDiplomaHigher != 0) {
            map.removeControl(LegendHHDiplomaHigher);
        }
        if (LegendPSE != 0) {
            map.removeControl(LegendPSE);
        }
        $scope.showMathscience=!$scope.showMathscience;
        $scope.showAfterschool=false;
        $scope.showEarlychildhood=false;
        $scope.showCollegecareer=false;
        $scope.showParentmentors=false;

       /* $scope.showFincap=false;
        $scope.showWorkdev=false;
        $scope.showTotalcap=false;

        $scope.showMentalhealth=false;
        $scope.showPhysicalhealth=false;
        $scope.showFamilyViolence=false;
        $scope.showObesity=false;
        $scope.showPreventiveCare=false;
        $scope.showSubstanceAbuse=false;*/
    }
    $scope.showParentmentors=false;
    $scope.toggleShowParentmentors=function () {
        if (legendPoverty != 0) {
            map.removeControl(legendPoverty);
        }
        if (LegendHHDiplomaHigher != 0) {
            map.removeControl(LegendHHDiplomaHigher);
        }
        if (LegendPSE != 0) {
            map.removeControl(LegendPSE);
        }
        $scope.showParentmentors=!$scope.showParentmentors;
        $scope.showAfterschool=false;
        $scope.showEarlychildhood=false;
        $scope.showMathscience=false;
        $scope.showCollegecareer=false;

       /*$scope.showFincap=false;
        $scope.showWorkdev=false;
        $scope.showTotalcap=false;

        $scope.showMentalhealth=false;
        $scope.showPhysicalhealth=false;
        $scope.showFamilyViolence=false;
        $scope.showObesity=false;
        $scope.showPreventiveCare=false;
        $scope.showSubstanceAbuse=false;*/
    }

    $scope.showMentalhealth=false;
    $scope.toggleShowMentalhealth=function () {
        if (legendPoverty != 0) {
            map.removeControl(legendPoverty);
        }
        if (LegendUninsured != 0) {
            map.removeControl(LegendUninsured);
        }
        if (LegendChildhoodUninsured != 0) {
            map.removeControl(LegendChildhoodUninsured);
        }
        $scope.showMentalhealth=!$scope.showMentalhealth;
        $scope.showPhysicalhealth=false;
        $scope.showFamilyViolence=false;
        $scope.showObesity=false;
        $scope.showPreventiveCare=false;
        $scope.showSubstanceAbuse=false;

        /*$scope.showFincap=false;
        $scope.showWorkdev=false;
        $scope.showTotalcap=false;

        $scope.showParentmentors=false;
        $scope.showAfterschool=false;
        $scope.showEarlychildhood=false;
        $scope.showMathscience=false;
        $scope.showCollegecareer=false;*/

    }

    $scope.showPhysicalhealth=false;
    $scope.toggleShowPhysicalhealth=function () {
        if (legendPoverty != 0) {
            map.removeControl(legendPoverty);
        }
        if (LegendUninsured != 0) {
            map.removeControl(LegendUninsured);
        }
        if (LegendChildhoodUninsured != 0) {
            map.removeControl(LegendChildhoodUninsured);
        }
        $scope.showPhysicalhealth=!$scope.showPhysicalhealth;
        $scope.showMentalhealth=false;
        $scope.showFamilyViolence=false;
        $scope.showObesity=false;
        $scope.showPreventiveCare=false;
        $scope.showSubstanceAbuse=false;

       /* $scope.showFincap=false;
        $scope.showWorkdev=false;
        $scope.showTotalcap=false;

        $scope.showParentmentors=false;
        $scope.showAfterschool=false;
        $scope.showEarlychildhood=false;
        $scope.showMathscience=false;
        $scope.showCollegecareer=false;*/
    }

    $scope.showFamilyViolence=false;
    $scope.toggleShowFamilyViolence=function () {
        if (legendPoverty != 0) {
            map.removeControl(legendPoverty);
        }
        if (LegendUninsured != 0) {
            map.removeControl(LegendUninsured);
        }
        if (LegendChildhoodUninsured != 0) {
            map.removeControl(LegendChildhoodUninsured);
        }
        $scope.showFamilyViolence=!$scope.showFamilyViolence;
        $scope.showPhysicalhealth=false;
        $scope.showMentalhealth=false;
        $scope.showObesity=false;
        $scope.showPreventiveCare=false;
        $scope.showSubstanceAbuse=false;

        /*$scope.showFincap=false;
        $scope.showWorkdev=false;
        $scope.showTotalcap=false;

        $scope.showParentmentors=false;
        $scope.showAfterschool=false;
        $scope.showEarlychildhood=false;
        $scope.showMathscience=false;
        $scope.showCollegecareer=false;*/
    }

    $scope.showObesity=false;
    $scope.toggleShowObesity=function () {
        if (legendPoverty != 0) {
            map.removeControl(legendPoverty);
        }
        if (LegendUninsured != 0) {
            map.removeControl(LegendUninsured);
        }
        if (LegendChildhoodUninsured != 0) {
            map.removeControl(LegendChildhoodUninsured);
        }
        $scope.showObesity=!$scope.showObesity;
        $scope.showPhysicalhealth=false;
        $scope.showMentalhealth=false;
        $scope.showFamilyViolence=false;
        $scope.showPreventiveCare=false;
        $scope.showSubstanceAbuse=false;

        /*$scope.showFincap=false;
        $scope.showWorkdev=false;
        $scope.showTotalcap=false;

        $scope.showParentmentors=false;
        $scope.showAfterschool=false;
        $scope.showEarlychildhood=false;
        $scope.showMathscience=false;
        $scope.showCollegecareer=false;*/
    }

    $scope.showPreventiveCare=false;
    $scope.toggleShowPreventiveCare=function () {
        if (legendPoverty != 0) {
            map.removeControl(legendPoverty);
        }
        if (LegendUninsured != 0) {
            map.removeControl(LegendUninsured);
        }
        if (LegendChildhoodUninsured != 0) {
            map.removeControl(LegendChildhoodUninsured);
        }
        $scope.showPreventiveCare=!$scope.showPreventiveCare;
        $scope.showPhysicalhealth=false;
        $scope.showMentalhealth=false;
        $scope.showFamilyViolence=false;
        $scope.showObesity=false;
        $scope.showSubstanceAbuse=false;

       /* $scope.showFincap=false;
        $scope.showWorkdev=false;
        $scope.showTotalcap=false;

        $scope.showParentmentors=false;
        $scope.showAfterschool=false;
        $scope.showEarlychildhood=false;
        $scope.showMathscience=false;
        $scope.showCollegecareer=false;*/
    }
    $scope.showSubstanceAbuse=false;
    $scope.toggleShowSubstanceAbuse=function () {
        if (legendPoverty != 0) {
            map.removeControl(legendPoverty);
        }
        if (LegendUninsured != 0) {
            map.removeControl(LegendUninsured);
        }
        if (LegendChildhoodUninsured != 0) {
            map.removeControl(LegendChildhoodUninsured);
        }
        $scope.showSubstanceAbuse=!$scope.showSubstanceAbuse;
        $scope.showPhysicalhealth=false;
        $scope.showMentalhealth=false;
        $scope.showFamilyViolence=false;
        $scope.showObesity=false;
        $scope.showPreventiveCare=false;

       /* $scope.showFincap=false;
        $scope.showWorkdev=false;
        $scope.showTotalcap=false;

        $scope.showParentmentors=false;
        $scope.showAfterschool=false;
        $scope.showEarlychildhood=false;
        $scope.showMathscience=false;
        $scope.showCollegecareer=false;*/
    }

    $(".selectIncomeIndicators").hide();
    $(".selectEducationIndicators").hide();
    $(".selectHealthIndicators").hide();


    $("#income").click(function () {
        //$(".selectIndicators").hide();
       /* $("#educationSelector").hide();
        $("#healthSelector").hide();*/
        $("#incomeSelector").val("");
        $(".selectEducationIndicators").hide();
        $(".selectHealthIndicators").hide();
        $(".selectIncomeIndicators").toggle();
    });

    $("#education").click(function () {
        //$(".selectIndicators").hide();
        /*$("#incomeSelector").hide();
        $("#educationSelector").show();
        $("#healthSelector").hide();*/
        $("#educationSelector").val("");
        $(".selectIncomeIndicators").hide();
        $(".selectHealthIndicators").hide();
        $(".selectEducationIndicators").toggle();
    });

    $("#health").click(function () {
       // $(".selectIndicators").hide();
       /* $("#incomeSelector").hide();
        $("#educationSelector").hide();
        $("#healthSelector").show();*/
        $("#healthSelector").val("");
        $(".selectIncomeIndicators").hide();
        $(".selectEducationIndicators").hide();
        $(".selectHealthIndicators").toggle();
    });

    $scope.showIncome=false;
    $scope.toggleShowIncome=function () {
        if (legendUnemployment != 0) {
            map.removeControl(legendUnemployment);
        }
        if (LegendUnder200 != 0) {
            map.removeControl(LegendUnder200);
        }
        if (legendPoverty != 0) {
            map.removeControl(legendPoverty);
        }
        if (legendMedianHHIncome != 0) {
            map.removeControl(legendMedianHHIncome);
        }
        if (legendPoverty != 0) {
            map.removeControl(legendPoverty);
        }
        if (LegendHHDiplomaHigher != 0) {
            map.removeControl(LegendHHDiplomaHigher);
        }
        if (LegendPSE != 0) {
            map.removeControl(LegendPSE);
        }
        if (legendPoverty != 0) {
            map.removeControl(legendPoverty);
        }
        if (LegendUninsured != 0) {
            map.removeControl(LegendUninsured);
        }
        if (LegendChildhoodUninsured != 0) {
            map.removeControl(LegendChildhoodUninsured);
        }
        document.getElementById("group-2").checked = false;
        document.getElementById("group-3").checked = false;
        //console.log("switched:"+$('#slider').is(":checked"));
       // console.log("Scope:"+$scope.showEducation);
        if($('#slider').is(":checked") && $scope.showIncome==false){
            //console.log("Entered");
            $('#marginErrorHealth').hide();
            $('#marginErrorEducation').hide();
            $('#marginErrorIncome').show();
        }
        else{
            //console.log("Not Entered");
            $('#marginErrorIncome').hide();
        }

        $scope.showIncome=!$scope.showIncome;
        $scope.showHealth=false;
        $scope.showEducation=false;
        $scope.showWorkdev=false;
        $scope.showFincap=false;
        $scope.showTotalcap=false;

        $scope.showMentalhealth=false;
        $scope.showPhysicalhealth=false;
        $scope.showFamilyViolence=false;
        $scope.showObesity=false;
        $scope.showPreventiveCare=false;
        $scope.showSubstanceAbuse=false;

        $scope.showAfterschool=false;
        $scope.showCollegecareer=false;
        $scope.showEarlychildhood=false;
        $scope.showMathscience=false;
        $scope.showParentmentors=false;
    }

    $scope.showEducation=false;
    $scope.toggleShowEducation=function (){
        if (legendUnemployment != 0) {
            map.removeControl(legendUnemployment);
        }
        if (LegendUnder200 != 0) {
            map.removeControl(LegendUnder200);
        }
        if (legendPoverty != 0) {
            map.removeControl(legendPoverty);
        }
        if (legendMedianHHIncome != 0) {
            map.removeControl(legendMedianHHIncome);
        }
        if (legendPoverty != 0) {
            map.removeControl(legendPoverty);
        }
        if (LegendHHDiplomaHigher != 0) {
            map.removeControl(LegendHHDiplomaHigher);
        }
        if (LegendPSE != 0) {
            map.removeControl(LegendPSE);
        }
        if (legendPoverty != 0) {
            map.removeControl(legendPoverty);
        }
        if (LegendUninsured != 0) {
            map.removeControl(LegendUninsured);
        }
        if (LegendChildhoodUninsured != 0) {
            map.removeControl(LegendChildhoodUninsured);
        }

        document.getElementById("group-1").checked = false;
        document.getElementById("group-3").checked = false;

        if($('#slider').is(":checked") && $scope.showEducation==false){
           // console.log("Entered");
            $('#marginErrorIncome').hide();
            $('#marginErrorHealth').hide();
            $('#marginErrorEducation').show();
        }
        else{
            //console.log("Not Entered");
            $('#marginErrorEducation').hide();
        }
        $scope.showEducation=!$scope.showEducation;
        $scope.showIncome=false;
        $scope.showHealth=false;
        $scope.showAfterschool=false;
        $scope.showCollegecareer=false;
        $scope.showEarlychildhood=false;
        $scope.showMathscience=false;
        $scope.showParentmentors=false;

        $scope.showMentalhealth=false;
        $scope.showPhysicalhealth=false;
        $scope.showFamilyViolence=false;
        $scope.showObesity=false;
        $scope.showPreventiveCare=false;
        $scope.showSubstanceAbuse=false;

        $scope.showWorkdev=false;
        $scope.showFincap=false;
        $scope.showTotalcap=false;
    }

    $scope.showHealth=false;
    $scope.toggleShowHealth=function (){
        if (legendUnemployment != 0) {
            map.removeControl(legendUnemployment);
        }
        if (LegendUnder200 != 0) {
            map.removeControl(LegendUnder200);
        }
        if (legendPoverty != 0) {
            map.removeControl(legendPoverty);
        }
        if (legendMedianHHIncome != 0) {
            map.removeControl(legendMedianHHIncome);
        }
        if (legendPoverty != 0) {
            map.removeControl(legendPoverty);
        }
        if (LegendHHDiplomaHigher != 0) {
            map.removeControl(LegendHHDiplomaHigher);
        }
        if (LegendPSE != 0) {
            map.removeControl(LegendPSE);
        }
        if (legendPoverty != 0) {
            map.removeControl(legendPoverty);
        }
        if (LegendUninsured != 0) {
            map.removeControl(LegendUninsured);
        }
        if (LegendChildhoodUninsured != 0) {
            map.removeControl(LegendChildhoodUninsured);
        }
        document.getElementById("group-1").checked = false;
        document.getElementById("group-2").checked = false;

        if($('#slider').is(":checked") && $scope.showHealth==false){
            // console.log("Entered");
            $('#marginErrorIncome').hide();
            $('#marginErrorEducation').hide();
            $('#marginErrorHealth').show();
        }
        else{
            //console.log("Not Entered");
            $('#marginErrorHealth').hide();
        }
        $scope.showHealth=!$scope.showHealth;
        $scope.showEducation=false;
        $scope.showIncome=false;
        $scope.showMentalhealth=false;
        $scope.showPhysicalhealth=false;
        $scope.showFamilyViolence=false;
        $scope.showObesity=false;
        $scope.showPreventiveCare=false;
        $scope.showSubstanceAbuse=false;
        //$scope.showAfterschool=false;
        //$scope.showEarlychildhood=false;

        $scope.showWorkdev=false;
        $scope.showFincap=false;
        $scope.showTotalcap=false;

        $scope.showAfterschool=false;
        $scope.showCollegecareer=false;
        $scope.showEarlychildhood=false;
        $scope.showMathscience=false;
        $scope.showParentmentors=false;
    }

    $('#marginalError').hide();
    $('#marginErrorIncome').hide();
    $('#marginErrorEducation').hide();
    $('#marginErrorHealth').hide();

    $('#slider').on("click",function(){
        //console.log("Before Checked"+this.checked);
        if(this.checked){
            $('#marginalError').show();
            if($scope.showIncome==true) {
                //console.log("Income Entered");
                $('#marginErrorIncome').show();
            }
            if($scope.showEducation==true){
                //console.log("Education Entered");
                $('#marginErrorEducation').show();
            }
            if($scope.showHealth==true){
                //console.log("Education Entered");
                $('#marginErrorHealth').show();
            }
            //this.setAttribute("checked", "checked");
        } else {
            $('#marginalError').hide();
            $('#marginErrorIncome').hide();
            $('#marginErrorEducation').hide();
            $('#marginErrorHealth').hide();
            //this.removeAttribute("checked");
        }


        //console.log("Checked"+this.checked);
    });
    getjsondata(function(props,marginalpsedataparam,agencydataparam,findataparam,totaldataparam,afterschooldataparam,collegecareerdataparam,earlychildhooddataparam,mathsciencedataparam,parentmentorsdataparam,mentalhealthdataparam,physicalhealthdataparam,famvioldataparam,obesitydataparam,preventivecaredataparam, substanceabusedataparam){
       // $.each(json.features, function(key, val) {
            //console.log("Row data"+JSON.stringify(afterschooldataparam));
       // console.log("SNAP data"+JSON.stringify(snapdataparam));
            zipcodeLayer=props.geoid10;
            $scope.$apply(function() {
                $scope.name=props.geoid10; //zipcode
                $scope.tot_pop=numberWithCommas(props.tot_pop); //total population
                $scope.me_tot_pop=numberWithCommas(props.me_tot_pop);
                $scope.unemployment_rate=props.unemployment_rate;
                $scope.me_unemployment_rate=props.me_unemployment_rate;
                var formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0
                });
                $scope.median_hh_income=formatter.format(props.median_hh_income);
                $scope.me_median_hh_income=numberWithCommas(props.me_median_hh_income);
                $scope.pct_cash_public_assistance=props.pct_cash_public_assistance;
                $scope.me_pct_cash_public_assistance=props.me_pct_cash_public_assistance;
                $scope.pct_hh_snap=props.pct_hh_snap;
                $scope.pct_uninsured=props.pct_uninsured;
                $scope.pct_uninsured_kids=props.pct_uninsured_kids;
                $scope.povpop=numberWithCommas(props.povpop);
                $scope.me_povpop=numberWithCommas(props.me_povpop);
                $scope.poverty_rate_kids=props.poverty_rate_kids;
                var povrate200=Math.round((Number(props.poverty_rate_200p)+0.00001)*100)/100;
                $scope.poverty_200p_persons= numberWithCommas(props.poverty_200p_persons);
                $scope.me_poverty_200p_persons= props.me_poverty_200p_persons;
                $scope.me_poverty_rate_200p= Math.round((Number(props.me_poverty_rate_200p)+0.00001)*100)/100;
                $scope.poverty_rate=props.poverty_rate;
                $scope.poverty_rate_200p=povrate200;
                $scope.avg_hh_size=numberWithCommas(props.avg_hh_size);
                $scope.pct_owner_occupied=props.pct_owner_occupied;
                $scope.pct_housing_distressed=props.pct_housing_distressed;
                $scope.pct_lep=props.pct_lep;
                $scope.pct_hs_or_higher=props.pct_hs_or_higher;
                $scope.pct_nh_white=props.pct_nh_white;
                $scope.pct_nh_black=props.pct_nh_black;
                $scope.pct_hisp=props.pct_hisp;
                $scope.pct_under3_in_school=props.pct_under3_in_school;
                $scope.pct_18_24_college_enrolled=props.pct_18_24_college_enrolled;
                $scope.pct_public_school=props.pct_public_school;
                $scope.pct_worked_outside_county=props.pct_worked_outside_county;
                $scope.pct_30_commute=props.pct_30_commute;
                $scope.me_pct_snap=props.me_pct_snap;
                $scope.me_pct_cash_public_assistance=props.me_pct_cash_public_assistance;
               // console.log("marginalpsedataparam"+JSON.stringify(marginalpsedataparam));
                //console.log("Zipcode selected"+zipcodeLayer);
                $.each(marginalpsedataparam.features,function (key,val) {
                    if(zipcodeLayer==val.properties.geoid10) {
                        //console.log("Zipcode"+val.properties.geoid10);
                        $scope.me_pct_public_school=val.properties.me_pct_public_school;
                    }
                });

                $scope.me_poverty_rate_kids=props.me_poverty_rate_kids;
                $scope.me_poverty_rate=props.me_poverty_rate;
                $scope.me_pct_worked_outside_county=props.me_pct_worked_outside_county;
                $scope.me_pct_work_in_county=props.me_pct_work_in_county;
                $scope.me_pct_uninsured_kids=props.me_pct_uninsured_kids;
                $scope.me_pct_uninsured_children=props.me_pct_uninsured_children;
                $scope.me_pct_uninsured=props.me_pct_uninsured;
                $scope.me_pct_under3_in_school=props.me_pct_under3_in_school;
                $scope.me_pct_nh_white=props.me_pct_nh_white;
                if(props.me_pct_nh_black!='#NUM!')
                    $scope.me_pct_nh_black=props.me_pct_nh_black;
                $scope.me_pct_lep=props.me_pct_lep;
                $scope.me_pct_hs_or_higher=props.me_pct_hs_or_higher;
                $scope.me_pct_housing_distressed=props.me_pct_housing_distressed;
                $scope.me_pct_hisp=props.me_pct_hisp;
                $scope.me_pct_30_commute=props.me_pct_30_commute;
                $scope.me_pct_18_24_college_enrolled=props.me_pct_18_24_college_enrolled;
                $scope.me_owner_occupied=numberWithCommas(props.me_owner_occupied);
                $scope.me_avg_hh_size=numberWithCommas(props.me_avg_hh_size);
                outputworkdev=[];
                outputfincap=[];
                outputtotalcap=[];
                outputafterschool=[];
                outputcollegecareer=[];
                outputearlychildhood=[];
                outputmathscience=[];
                outputparentmentors=[];
                outputmentalhealth=[];
                outputphysicalhealth=[];
                outputfamviol=[];
                outputobesity=[];
                outputpreventivecare=[];
                outputsubstanceabuse=[];
                $.each(agencydataparam.features,function (key,val) {
                    //console.log("zipcodeLayer"+zipcodeLayer);
                    //console.log("val.properties.inc_workdev"+val.properties.zip);
                    if(zipcodeLayer==val.properties.zip) {
                        var workdev=val.properties.zipcodeserviceprovider.split('dba');
                         outputworkdev.push({
                            serviceprovider: workdev[0],
                            value: numberWithCommas(val.properties.inc_workdev),
                             zip: val.properties.zip
                        });
                        $scope.workdevitems=outputworkdev;
                    }
                });
                $.each(findataparam.features,function (key,val) {
                   // console.log("zipcodeLayer"+zipcodeLayer);
                    //console.log("val.properties.inc_workdev"+val.properties.zip);
                    if(zipcodeLayer==val.properties.zip) {
                        var fincap=val.properties.zipcodeserviceprovider.split('dba');
                        outputfincap.push({
                            serviceprovider: fincap[0],
                            value: numberWithCommas(val.properties.inc_fincap),
                            zip: val.properties.zip
                        });
                        $scope.fincapitems=outputfincap;
                    }
                });
                $.each(totaldataparam.features,function (key,val) {
                    //console.log("zipcodeLayer"+zipcodeLayer);
                    //console.log("val.properties.inc_workdev"+val.properties.zip);
                    if(zipcodeLayer==val.properties.zip) {
                        var totalcap=val.properties.zipcodeserviceprovider.split('dba');
                        outputtotalcap.push({
                            serviceprovider: totalcap[0],
                            value: numberWithCommas(val.properties.inc_total),
                            zip: val.properties.zip
                        });
                        $scope.totalcapitems=outputtotalcap;
                    }
                });
               // console.log("afterschooldataparam"+JSON.stringify(afterschooldataparam));
                $.each(afterschooldataparam.features,function (key,val) {
                    //console.log("zipcodeLayer"+zipcodeLayer);
                    //console.log("val.properties.zip"+val.properties.zip);
                    if(zipcodeLayer==val.properties.zip) {
                        var afterschool=val.properties.zipcodeserviceprovider.split('dba');
                        outputafterschool.push({
                            serviceprovider: afterschool[0],
                            value: numberWithCommas(val.properties.edu_afterschool),
                            zip: val.properties.zip
                        });
                        //console.log("outputafterschool"+outputafterschool);
                        $scope.afterschoolitems=outputafterschool;
                    }
                });
                $.each(collegecareerdataparam.features,function (key,val) {
                    //console.log("zipcodeLayer"+zipcodeLayer);
                    //console.log("val.properties.zip"+val.properties.zip);
                    if(zipcodeLayer==val.properties.zip) {
                        var collegecareer=val.properties.zipcodeserviceprovider.split('dba');
                        outputcollegecareer.push({
                            serviceprovider: collegecareer[0],
                            value: numberWithCommas(val.properties.edu_college),
                            zip: val.properties.zip
                        });
                        //console.log("outputafterschool"+outputafterschool);
                        $scope.collegecareeritems=outputcollegecareer;
                    }
                });
                $.each(earlychildhooddataparam.features,function (key,val) {
                    //console.log("zipcodeLayer"+zipcodeLayer);
                    //console.log("val.properties.zip"+val.properties.zip);
                    if(zipcodeLayer==val.properties.zip) {
                        var earlychild=val.properties.zipcodeserviceprovider.split('dba');
                        outputearlychildhood.push({
                            serviceprovider: earlychild[0],
                            value: numberWithCommas(val.properties.edu_earlychild),
                            zip: val.properties.zip
                        });
                        //console.log("outputafterschool"+outputafterschool);
                        $scope.earlychildhooditems=outputearlychildhood;
                    }
                });
                $.each(mathsciencedataparam.features,function (key,val) {
                    //console.log("zipcodeLayer"+zipcodeLayer);
                    //console.log("val.properties.zip"+val.properties.zip);
                    if(zipcodeLayer==val.properties.zip) {
                        var mathscience=val.properties.zipcodeserviceprovider.split('dba');
                        outputmathscience.push({
                            serviceprovider: mathscience[0],
                            value: numberWithCommas(val.properties.edu_stem),
                            zip: val.properties.zip
                        });
                        //console.log("outputafterschool"+outputafterschool);
                        $scope.mathscienceitems=outputmathscience;
                    }
                });
                $.each(parentmentorsdataparam.features,function (key,val) {
                    //console.log("zipcodeLayer"+zipcodeLayer);
                    //console.log("val.properties.zip"+val.properties.zip);
                    if(zipcodeLayer==val.properties.zip) {
                        var parentmentors=val.properties.zipcodeserviceprovider.split('dba');
                        outputparentmentors.push({
                            serviceprovider: parentmentors[0],
                            value: numberWithCommas(val.properties.edu_parents),
                            zip: val.properties.zip
                        });
                        //console.log("outputafterschool"+outputafterschool);
                        $scope.parentmentorsitems=outputparentmentors;
                    }
                });
                $.each(mentalhealthdataparam.features,function (key,val) {
                    //console.log("zipcodeLayer"+zipcodeLayer);
                    //console.log("val.properties.zip"+val.properties.zip);
                    if(zipcodeLayer==val.properties.zip) {
                        var healthmental=val.properties.zipcodeserviceprovider.split('dba');
                        var healthmental1=healthmental[0].split('(');
                        outputmentalhealth.push({
                            serviceprovider: healthmental1[0],
                            value: numberWithCommas(val.properties.health_mental),
                            zip: val.properties.zip
                        });
                        //console.log("outputafterschool"+outputafterschool);
                        $scope.mentalhealthitems=outputmentalhealth;
                    }
                });
                $.each(physicalhealthdataparam.features,function (key,val) {
                    //console.log("zipcodeLayer"+zipcodeLayer);
                    //console.log("val.properties.zip"+val.properties.zip);
                    if(zipcodeLayer==val.properties.zip) {
                        var healthphysical=val.properties.zipcodeserviceprovider.split('dba');
                        var healthphysical1=healthphysical[0].split('(');
                        outputphysicalhealth.push({
                            serviceprovider: healthphysical1[0],
                            value: numberWithCommas(val.properties.health_physical),
                            zip: val.properties.zip
                        });
                        //console.log("outputafterschool"+outputafterschool);
                        $scope.physicalhealthitems=outputphysicalhealth;
                    }
                });
                $.each(famvioldataparam.features,function (key,val) {
                    //console.log("zipcodeLayer"+zipcodeLayer);
                    //console.log("val.properties.zip"+val.properties.zip);
                    if(zipcodeLayer==val.properties.zip) {
                        var famvio=val.properties.zipcodeserviceprovider.split('dba');
                        var famvio1=famvio[0].split('(');
                        outputfamviol.push({
                            serviceprovider: famvio1[0],
                            value: numberWithCommas(val.properties.health_famvio),
                            zip: val.properties.zip
                        });
                        //console.log("outputafterschool"+outputafterschool);
                        $scope.famviolitems=outputfamviol;
                    }
                });
                $.each(obesitydataparam.features,function (key,val) {
                    //console.log("zipcodeLayer"+zipcodeLayer);
                    //console.log("val.properties.zip"+val.properties.zip);
                    if(zipcodeLayer==val.properties.zip) {
                        var obesity=val.properties.zipcodeserviceprovider.split('dba');
                        var obesity1=obesity[0].split('(');
                        outputobesity.push({
                            serviceprovider: obesity1[0],
                            value: numberWithCommas(val.properties.health_obesity),
                            zip: val.properties.zip
                        });
                        //console.log("outputafterschool"+outputafterschool);
                        $scope.obesityitems=outputobesity;
                    }
                });
                $.each(preventivecaredataparam.features,function (key,val) {
                    //console.log("zipcodeLayer"+zipcodeLayer);
                    //console.log("val.properties.zip"+val.properties.zip);
                    if(zipcodeLayer==val.properties.zip) {
                        var preventivecare=val.properties.zipcodeserviceprovider.split('dba');
                        var preventivecare1=preventivecare[0].split('(');
                        outputpreventivecare.push({
                            serviceprovider: preventivecare1[0],
                            value: numberWithCommas(val.properties.heath_prevent),
                            zip: val.properties.zip
                        });
                        //console.log("outputafterschool"+outputafterschool);
                        $scope.pcitems=outputpreventivecare;
                    }
                });
                $.each(substanceabusedataparam.features,function (key,val) {
                    //console.log("zipcodeLayer"+zipcodeLayer);
                    //console.log("val.properties.zip"+val.properties.zip);
                    if(zipcodeLayer==val.properties.zip) {
                        var substanceabuse=val.properties.zipcodeserviceprovider.split('dba');
                        var substanceabuse1=substanceabuse[0].split('(');
                        outputsubstanceabuse.push({
                            serviceprovider: substanceabuse1[0],
                            value: numberWithCommas(val.properties.health_substance),
                            zip: val.properties.zip
                        });
                        //console.log("outputafterschool"+outputafterschool);
                        $scope.saitems=outputsubstanceabuse;
                    }
                });
               // $scope.zipcodeserviceprovider=agencydataparam.features.properties.zipcodeserviceprovider;
            });
            function numberWithCommas(x) {
                x = x.toString();
                var pattern = /(-?\d+)(\d{3})/;
                while (pattern.test(x))
                    x = x.replace(pattern, "$1,$2");
                return x;
            }
        //});
        //console.log("geojsondata"+(json));
    });
});

//Using a callback function to access JSON data since .getJSON is asynchoronous
function getjsondata(callback){
    geojsondata=0;
    agencydatavar=0;
    $.getJSON('https://'+username+'.carto.com/api/v2/sql/?format=geojson&q='+agenciesworkdevquery+'&apikey='+apikey,function(agencydata){
        $.getJSON('https://'+username+'.carto.com/api/v2/sql/?format=geojson&q='+agenciesfincapquery+'&apikey='+apikey,function(findata){
            $.getJSON('https://'+username+'.carto.com/api/v2/sql/?format=geojson&q='+agenciestotalquery+'&apikey='+apikey,function(totaldata){
                $.getJSON('https://'+username+'.carto.com/api/v2/sql/?format=geojson&q='+agencieseduafterschoolquery+'&apikey='+apikey,function(afterschooldata){
                    $.getJSON('https://'+username+'.carto.com/api/v2/sql/?format=geojson&q='+agencieseducollegecareerquery+'&apikey='+apikey,function(collegecareerdata){
                        $.getJSON('https://'+username+'.carto.com/api/v2/sql/?format=geojson&q='+agencieseduearlychildhoodquery+'&apikey='+apikey,function(earlychildhooddata) {
                            $.getJSON('https://'+username+'.carto.com/api/v2/sql/?format=geojson&q='+agenciesedumathsciencequery+'&apikey='+apikey,function(mathsciencedata) {
                                $.getJSON('https://'+username+'.carto.com/api/v2/sql/?format=geojson&q='+agencieseduparentmentorsquery+'&apikey='+apikey,function(parentmentorsdata) {
                                    $.getJSON('https://'+username+'.carto.com/api/v2/sql/?format=geojson&q='+agencieshealthmentalhealthquery+'&apikey='+apikey,function(mentalhealthdata) {
                                        $.getJSON('https://'+username+'.carto.com/api/v2/sql/?format=geojson&q='+agencieshealthphysicalhealthquery+'&apikey='+apikey,function(physicalhealthdata) {
                                            $.getJSON('https://'+username+'.carto.com/api/v2/sql/?format=geojson&q='+agenciesfamviolhealthquery+'&apikey='+apikey,function(famvioldata) {
                                                $.getJSON('https://'+username+'.carto.com/api/v2/sql/?format=geojson&q='+agenciesobesityhealthquery+'&apikey='+apikey,function(obesitydata) {
                                                    $.getJSON('https://'+username+'.carto.com/api/v2/sql/?format=geojson&q='+agenciespreventivecarehealthquery+'&apikey='+apikey,function(preventivecaredata) {
                                                        $.getJSON('https://'+username+'.carto.com/api/v2/sql/?format=geojson&q='+agenciessubstanceabusehealthquery+'&apikey='+apikey,function(substanceabusedata) {
                                                            agencydatavar = agencydata;
                                                            // console.log("In agency");
                                                             //console.log("In maps polygon"+polygonsquery);
                                                            //console.log("In maps polygon"+JSON.stringify(afterschooldata));
                                                            $.getJSON('https://' + username + '.carto.com/api/v2/sql/?format=geojson&q=' + marginalpsequery + '&apikey=' + apikey, function (marginalpsedata) {
                                                                $.getJSON('https://' + username + '.carto.com/api/v2/sql/?format=geojson&q=' + polygonsquery + '&apikey=' + apikey, function (data) {
                                                                    geojsondata = data;
                                                                    /*$('#povertyrate').click(function () {
                                                                     console.log("poverty rate is clicked");
                                                                     workdev = true;
                                                                     map.removeLayer(polygonsPoverty);
                                                                     togglePoverty();
                                                                     });*/
                                                                    //console.log("Before scope marginalpsedata"+JSON.stringify(marginalpsedata));
                                                                    $("#incomeSelector").on('change', function () {
                                                                        mentalhealth = false;
                                                                        physicalhealth = false;
                                                                        famviol = false;
                                                                        obesity = false;
                                                                        preventivecare = false;
                                                                        substanceabuse = false;

                                                                        afterschool = false;
                                                                        collegecareer = false;
                                                                        earlychildhood = false;
                                                                        mathscience = false;
                                                                        parentmentors = false;
                                                                        var value = $(this).val();
                                                                        switch (value) {
                                                                            case "":
                                                                                /* map.removeControl(legendPoverty);
                                                                                 map.removeControl(LegendUnder200);
                                                                                 map.removeControl(legendUnemployment);
                                                                                 map.removeControl(legendMedianHHIncome);*/
                                                                                map.removeLayer(polygonsPoverty);
                                                                                map.removeLayer(polygonsUnder200);
                                                                                map.removeLayer(polygonsUnemployment);
                                                                                map.removeLayer(polygonsHHMedian);
                                                                                map.addLayer(polygons);
                                                                                if (legendPoverty != 0) {
                                                                                    map.removeControl(legendPoverty);
                                                                                    //legendPoverty=0;
                                                                                   // pcount = true;
                                                                                }
                                                                                if (LegendUnder200 != 0) {
                                                                                    map.removeControl(LegendUnder200);
                                                                                    LegendUnder200 = 0;
                                                                                }
                                                                                if (legendUnemployment != 0) {
                                                                                    map.removeControl(legendUnemployment);
                                                                                    legendUnemployment = 0;
                                                                                }
                                                                                if (legendMedianHHIncome != 0) {
                                                                                    map.removeControl(legendMedianHHIncome);
                                                                                    legendMedianHHIncome = 0;
                                                                                }
                                                                                break;
                                                                            case "povertyrate":
                                                                                //workdev = true;
                                                                                //fincap = true;
                                                                                //total=true;
                                                                                if (legendPoverty != 0) {
                                                                                    map.removeControl(legendPoverty);
                                                                                    legendPoverty=0;
                                                                                    pcount = true;
                                                                                }
                                                                                map.removeLayer(polygonsPoverty);
                                                                                togglePoverty();
                                                                                break;
                                                                            case "under200":
                                                                                //workdev = true;
                                                                                //fincap = true;
                                                                                // total=true;
                                                                                map.removeLayer(polygonsUnder200);
                                                                                toggleUnder200();
                                                                                break;
                                                                            case "unemployment":
                                                                                //workdev = true;
                                                                                //fincap = true;
                                                                                //total=true;
                                                                                map.removeLayer(polygonsUnemployment);
                                                                                toggleUnemployment();
                                                                                break;
                                                                            case "hhincome":
                                                                                //workdev = true;
                                                                                //fincap = true;
                                                                                //total=true;
                                                                                map.removeLayer(polygonsHHMedian);
                                                                                toggleHHMedian();
                                                                        }

                                                                        //console.log("poverty rate is clicked");

                                                                    });
                                                                    $("#educationSelector").on('change', function () {
                                                                        workdev = false;
                                                                        fincap = false;
                                                                        total = false;



                                                                        mentalhealth = false;
                                                                        physicalhealth = false;
                                                                        famviol = false;
                                                                        obesity = false;
                                                                        preventivecare = false;
                                                                        substanceabuse = false;
                                                                        var value = $(this).val();
                                                                        switch (value) {
                                                                            case "":
                                                                                /* map.removeControl(legendPoverty);
                                                                                 map.removeControl(LegendUnder200);
                                                                                 map.removeControl(legendUnemployment);
                                                                                 map.removeControl(legendMedianHHIncome);*/
                                                                                map.removeLayer(polygonsPoverty);
                                                                                map.removeLayer(polygonsHHDiplomaHigher);
                                                                                map.removeLayer(polygonsPSE);
                                                                                map.addLayer(polygons);
                                                                                if (legendPoverty != 0) {
                                                                                    map.removeControl(legendPoverty);
                                                                                    //legendPoverty=0;
                                                                                    //pcount = true;
                                                                                }
                                                                                if (LegendHHDiplomaHigher != 0) {
                                                                                    map.removeControl(LegendHHDiplomaHigher);
                                                                                    LegendHHDiplomaHigher = 0;
                                                                                }
                                                                                if (LegendPSE != 0) {
                                                                                    map.removeControl(LegendPSE);
                                                                                    LegendPSE = 0;
                                                                                }
                                                                                break;
                                                                            case "edupovertyrate":
                                                                                //workdev = true;
                                                                                //fincap = true;
                                                                                //total=true;
                                                                                if (legendPoverty != 0) {
                                                                                    map.removeControl(legendPoverty);
                                                                                    legendPoverty=0;
                                                                                    pcount = true;
                                                                                }
                                                                                //console.log("legendPoverty"+JSON.stringify(legendPoverty));
                                                                                //console.log("pcount"+pcount);
                                                                                map.removeLayer(polygonsPoverty);
                                                                                toggleEduPoverty();
                                                                                break;
                                                                            case "highorhigher":
                                                                                //workdev = true;
                                                                                //fincap = true;
                                                                                // total=true;
                                                                                map.removeLayer(polygonsHHDiplomaHigher);
                                                                                toggleHHDiplomaHigher();
                                                                                break;
                                                                            case "publicschool":
                                                                                //workdev = true;
                                                                                //fincap = true;
                                                                                //total=true;
                                                                                map.removeLayer(polygonsPSE);
                                                                                togglePublicSchoolEnrollment();
                                                                        }

                                                                        //console.log("poverty rate is clicked");

                                                                    });
                                                                    $("#healthSelector").on('change', function () {
                                                                        workdev = false;
                                                                        fincap = false;
                                                                        total = false;

                                                                        afterschool = false;
                                                                        collegecareer = false;
                                                                        earlychildhood = false;
                                                                        mathscience = false;
                                                                        parentmentors = false;
                                                                        var value = $(this).val();
                                                                        switch (value) {
                                                                            case "":
                                                                                /* map.removeControl(legendPoverty);
                                                                                 map.removeControl(LegendUnder200);
                                                                                 map.removeControl(legendUnemployment);
                                                                                 map.removeControl(legendMedianHHIncome);*/
                                                                                map.removeLayer(polygonsPoverty);
                                                                                map.removeLayer(polygonsUninsured);
                                                                                map.removeLayer(polygonsChildhoodUninsured);
                                                                                map.addLayer(polygons);
                                                                                if (legendPoverty != 0) {
                                                                                    map.removeControl(legendPoverty);
                                                                                    //legendPoverty=0;
                                                                                   // pcount = true;
                                                                                }
                                                                                if (LegendUninsured != 0) {
                                                                                    map.removeControl(LegendUninsured);
                                                                                    LegendUninsured = 0;
                                                                                }
                                                                                if (LegendChildhoodUninsured != 0) {
                                                                                    map.removeControl(LegendChildhoodUninsured);
                                                                                    LegendChildhoodUninsured = 0;
                                                                                }
                                                                                break;
                                                                            case "healthpovertyrate":
                                                                                //workdev = true;
                                                                                //fincap = true;
                                                                                //total=true;
                                                                                if (legendPoverty != 0) {
                                                                                    map.removeControl(legendPoverty);
                                                                                    legendPoverty=0;
                                                                                    pcount = true;
                                                                                }
                                                                                map.removeLayer(polygonsPoverty);
                                                                                toggleHealthPoverty();
                                                                                break;
                                                                            case "uninsured":
                                                                                //workdev = true;
                                                                                //fincap = true;
                                                                                // total=true;
                                                                                map.removeLayer(polygonsUninsured);
                                                                                toggleUninsuredRate();
                                                                                break;
                                                                            case "childhood":
                                                                                //workdev = true;
                                                                                //fincap = true;
                                                                                //total=true;
                                                                                map.removeLayer(polygonsChildhoodUninsured);
                                                                                toggleChildhoodUninsuredRate();
                                                                        }

                                                                        //console.log("poverty rate is clicked");

                                                                    });
                                                                    /*$('#under200').click(function () {
                                                                     workdev = true;
                                                                     map.removeLayer(polygonsUnder200);
                                                                     toggleUnder200();
                                                                     });
                                                                     $('#unemployment').click(function () {
                                                                     workdev = true;
                                                                     map.removeLayer(polygonsUnemployment);
                                                                     toggleUnemployment();
                                                                     });
                                                                     $('#hhincome').click(function () {
                                                                     workdev = true;
                                                                     map.removeLayer(polygonsHHMedian);
                                                                     toggleHHMedian();
                                                                     });*/
                                                                    /*$('#finpovertyrate').click(function () {
                                                                     fincap = true;
                                                                     map.removeLayer(polygonsPoverty);
                                                                     togglePoverty();
                                                                     });
                                                                     $('#finunder200').click(function () {
                                                                     fincap = true;
                                                                     map.removeLayer(polygonsUnder200);
                                                                     toggleUnder200();
                                                                     });
                                                                     $('#finunemployment').click(function () {
                                                                     fincap = true;
                                                                     map.removeLayer(polygonsUnemployment);
                                                                     toggleUnemployment();
                                                                     });
                                                                     $('#finhhincome').click(function () {
                                                                     fincap = true;
                                                                     map.removeLayer(polygonsHHMedian);
                                                                     toggleHHMedian();
                                                                     });
                                                                     $('#totpovertyrate').click(function () {
                                                                     total = true;
                                                                     map.removeLayer(polygonsPoverty);
                                                                     togglePoverty();
                                                                     });
                                                                     $('#totunder200').click(function () {
                                                                     total = true;
                                                                     map.removeLayer(polygonsUnder200);
                                                                     toggleUnder200();
                                                                     });
                                                                     $('#totunemployment').click(function () {
                                                                     total = true;
                                                                     map.removeLayer(polygonsUnemployment);
                                                                     toggleUnemployment();
                                                                     });
                                                                     $('#tothhincome').click(function () {
                                                                     total = true;
                                                                     map.removeLayer(polygonsHHMedian);
                                                                     toggleHHMedian();
                                                                     });*/
                                                                    /* $('#aspovertyrate').click(function () {
                                                                     //total=true;
                                                                     afterschool = true;
                                                                     map.removeLayer(polygonsPoverty);
                                                                     toggleEduPoverty();
                                                                     });
                                                                     $('#highorhigher').click(function () {
                                                                     //total=true;
                                                                     afterschool = true;
                                                                     map.removeLayer(polygonsHHDiplomaHigher);
                                                                     toggleHHDiplomaHigher();
                                                                     });
                                                                     $('#publicschool').click(function () {
                                                                     afterschool = true;
                                                                     map.removeLayer(polygonsPSE);
                                                                     togglePublicSchoolEnrollment();
                                                                     });
                                                                     $('#ccpovertyrate').click(function () {
                                                                     //total=true;
                                                                     collegecareer = true;
                                                                     map.removeLayer(polygonsPoverty);
                                                                     toggleEduPoverty();
                                                                     });
                                                                     $('#cchighorhigher').click(function () {
                                                                     //total=true;
                                                                     collegecareer = true;
                                                                     map.removeLayer(polygonsHHDiplomaHigher);
                                                                     toggleHHDiplomaHigher();
                                                                     });
                                                                     $('#ccpublicschool').click(function () {
                                                                     collegecareer = true;
                                                                     map.removeLayer(polygonsPSE);
                                                                     togglePublicSchoolEnrollment();
                                                                     });
                                                                     $('#ecpovertyrate').click(function () {
                                                                     //total=true;
                                                                     earlychildhood = true;
                                                                     map.removeLayer(polygonsPoverty);
                                                                     toggleEduPoverty();
                                                                     });
                                                                     $('#echighorhigher').click(function () {
                                                                     //total=true;
                                                                     earlychildhood = true;
                                                                     map.removeLayer(polygonsHHDiplomaHigher);
                                                                     toggleHHDiplomaHigher();
                                                                     });
                                                                     $('#ecpublicschool').click(function () {
                                                                     earlychildhood = true;
                                                                     map.removeLayer(polygonsPSE);
                                                                     togglePublicSchoolEnrollment();
                                                                     });
                                                                     $('#mspovertyrate').click(function () {
                                                                     //total=true;
                                                                     mathscience = true;
                                                                     map.removeLayer(polygonsPoverty);
                                                                     toggleEduPoverty();
                                                                     });
                                                                     $('#mshighorhigher').click(function () {
                                                                     //total=true;
                                                                     mathscience = true;
                                                                     map.removeLayer(polygonsHHDiplomaHigher);
                                                                     toggleHHDiplomaHigher();
                                                                     });
                                                                     $('#mspublicschool').click(function () {
                                                                     mathscience = true;
                                                                     map.removeLayer(polygonsPSE);
                                                                     togglePublicSchoolEnrollment();
                                                                     });
                                                                     $('#pmpovertyrate').click(function () {
                                                                     //total=true;
                                                                     parentmentors = true;
                                                                     map.removeLayer(polygonsPoverty);
                                                                     toggleEduPoverty();
                                                                     });
                                                                     $('#pmhighorhigher').click(function () {
                                                                     //total=true;
                                                                     parentmentors = true;
                                                                     map.removeLayer(polygonsHHDiplomaHigher);
                                                                     toggleHHDiplomaHigher();
                                                                     });
                                                                     $('#pmpublicschool').click(function () {
                                                                     parentmentors = true;
                                                                     map.removeLayer(polygonsPSE);
                                                                     togglePublicSchoolEnrollment();
                                                                     });
                                                                     $('#mhuninsured').click(function () {
                                                                     mentalhealth = true;
                                                                     map.removeLayer(polygonsUninsured);
                                                                     toggleUninsuredRate();
                                                                     });
                                                                     $('#mhchildhood').click(function () {
                                                                     mentalhealth = true;
                                                                     map.removeLayer(polygonsChildhoodUninsured);
                                                                     toggleChildhoodUninsuredRate();
                                                                     });

                                                                     $('#mhpovertyrate').click(function () {
                                                                     mentalhealth = true;
                                                                     map.removeLayer(polygonsPoverty);
                                                                     toggleHealthPoverty();
                                                                     });
                                                                     $('#phuninsured').click(function () {
                                                                     physicalhealth = true;
                                                                     map.removeLayer(polygonsUninsured);
                                                                     toggleUninsuredRate();
                                                                     });
                                                                     $('#phchildhood').click(function () {
                                                                     physicalhealth = true;
                                                                     map.removeLayer(polygonsChildhoodUninsured);
                                                                     toggleChildhoodUninsuredRate();
                                                                     });

                                                                     $('#phpovertyrate').click(function () {
                                                                     physicalhealth = true;
                                                                     map.removeLayer(polygonsPoverty);
                                                                     toggleHealthPoverty();
                                                                     });
                                                                     $('#fvuninsured').click(function () {
                                                                     famviol = true;
                                                                     map.removeLayer(polygonsUninsured);
                                                                     toggleUninsuredRate();
                                                                     });
                                                                     $('#fvchildhood').click(function () {
                                                                     famviol = true;
                                                                     map.removeLayer(polygonsChildhoodUninsured);
                                                                     toggleChildhoodUninsuredRate();
                                                                     });

                                                                     $('#fvpovertyrate').click(function () {
                                                                     famviol = true;
                                                                     map.removeLayer(polygonsPoverty);
                                                                     toggleHealthPoverty();
                                                                     });
                                                                     $('#obuninsured').click(function () {
                                                                     obesity = true;
                                                                     map.removeLayer(polygonsUninsured);
                                                                     toggleUninsuredRate();
                                                                     });
                                                                     $('#obchildhood').click(function () {
                                                                     obesity = true;
                                                                     map.removeLayer(polygonsChildhoodUninsured);
                                                                     toggleChildhoodUninsuredRate();
                                                                     });

                                                                     $('#obpovertyrate').click(function () {
                                                                     obesity = true;
                                                                     map.removeLayer(polygonsPoverty);
                                                                     toggleHealthPoverty();
                                                                     });
                                                                     $('#pcuninsured').click(function () {
                                                                     preventivecare = true;
                                                                     map.removeLayer(polygonsUninsured);
                                                                     toggleUninsuredRate();
                                                                     });
                                                                     $('#pcchildhood').click(function () {
                                                                     preventivecare = true;
                                                                     map.removeLayer(polygonsChildhoodUninsured);
                                                                     toggleChildhoodUninsuredRate();
                                                                     });

                                                                     $('#pcpovertyrate').click(function () {
                                                                     preventivecare = true;
                                                                     map.removeLayer(polygonsPoverty);
                                                                     toggleHealthPoverty();
                                                                     });
                                                                     $('#sauninsured').click(function () {
                                                                     substanceabuse = true;
                                                                     map.removeLayer(polygonsUninsured);
                                                                     toggleUninsuredRate();
                                                                     });
                                                                     $('#sachildhood').click(function () {
                                                                     substanceabuse = true;
                                                                     map.removeLayer(polygonsChildhoodUninsured);
                                                                     toggleChildhoodUninsuredRate();
                                                                     });

                                                                     $('#sapovertyrate').click(function () {
                                                                     substanceabuse = true;
                                                                     map.removeLayer(polygonsPoverty);
                                                                     toggleHealthPoverty();
                                                                     });*/

                                                                    //To display map tiles from the polygons table
                                                                    function style(feature) {
                                                                        return {
                                                                            fillColor: '#1b65bd',
                                                                            weight: 2,
                                                                            opacity: 1,
                                                                            color: '#7dabd6',
                                                                            fillOpacity: 0.7
                                                                        };
                                                                    }

                                                                    function highlightFeature(e) {
                                                                        var layer = e.target;

                                                                        layer.setStyle({
                                                                            fillColor: '#1b65bd',
                                                                            weight: 3,
                                                                            color: '#82bcff',
                                                                            fillOpacity: 0.9
                                                                        });

                                                                        popup = L.popup()
                                                                            .setLatLng(e.latlng) //(assuming e.latlng returns the coordinates of the event)
                                                                            .setContent('Zipcode: ' + layer.feature.properties.geoid10 + '<br> Click to learn more...')
                                                                            .openOn(map);
                                                                    }

                                                                    function resetHighlight(e) {
                                                                        polygons.resetStyle(e.target);
                                                                        if (popup && map) {
                                                                            map.closePopup(popup);
                                                                            popup = null;
                                                                        }
                                                                    }

                                                                    function onEachFeature(feature, layer) {
                                                                        layer.on({
                                                                            mouseover: highlightFeature,
                                                                            mouseout: resetHighlight
                                                                        });
                                                                        layer.on('click', function (e) {
                                                                            callback(feature.properties, marginalpsedata, agencydata, findata, totaldata, afterschooldata, collegecareerdata, earlychildhooddata, mathsciencedata, parentmentorsdata, mentalhealthdata, physicalhealthdata, famvioldata, obesitydata, preventivecaredata, substanceabusedata);
                                                                        });
                                                                    }

                                                                    polygons = L.geoJson(data, {
                                                                        style: style,
                                                                        onEachFeature: onEachFeature
                                                                    });
                                                                    //.addTo(workdevCentroidLayer);
                                                                    map.addLayer(polygons);

                                                                    //To display poverty
                                                                    function togglePoverty() {
                                                                        geojsondata = data;
                                                                        if (legendUnemployment != 0) {
                                                                            map.removeControl(legendUnemployment);
                                                                            //map.removeControl(legendPoverty);
                                                                            //legendPoverty=0;
                                                                            legendUnemployment = 0;
                                                                            //pcount=true
                                                                            unemcount = true;
                                                                        }
                                                                        if (LegendUnder200 != 0) {
                                                                            //map.removeControl(LegendUnder200);
                                                                            map.removeControl(LegendUnder200);
                                                                            LegendUnder200 = 0;
                                                                            //legendUnemployment = 0;
                                                                            ucount = true
                                                                            // unemcount = true;
                                                                        }
                                                                        if (legendMedianHHIncome != 0) {
                                                                            //map.removeControl(LegendUnder200);
                                                                            map.removeControl(legendMedianHHIncome);
                                                                            legendMedianHHIncome = 0;
                                                                            //legendUnemployment = 0;
                                                                            hhinccount = true
                                                                            // unemcount = true;
                                                                        }

                                                                        function getColor(d) {
                                                                            // console.log("geojsondata color:"+JSON.stringify(d));
                                                                            //Leaflet does not like working with JS object properties, so we will pass these properties into a regular array of values instead
                                                                            var output = [];
                                                                            for (var i = 0; i < geojsondata.features.length; ++i) {
                                                                                output.push(geojsondata.features[i].properties.poverty_rate);
                                                                            }

                                                                            output.sort();
                                                                            value = d;

                                                                            var percentile = percentRank(output, value);

                                                                            // Returns the percentile of the given value in a sorted numeric array.
                                                                            function percentRank(arr, v) {
                                                                                if (typeof v !== 'number') throw new TypeError('v must be a number');
                                                                                for (var i = 0, l = arr.length; i < l; i++) {
                                                                                    if (v <= arr[i]) {
                                                                                        while (i < l && v === arr[i]) i++;
                                                                                        if (i === 0) return 0;
                                                                                        if (v !== arr[i - 1]) {
                                                                                            i += (v - arr[i - 1]) / (arr[i] - arr[i - 1]);
                                                                                        }
                                                                                        return i / l;
                                                                                    }
                                                                                }
                                                                                return 1;
                                                                            }

                                                                            //console.log("Poverty rate percent values"+percentile);
                                                                            return percentile > .6 ? '#f46d43' : percentile > .5 ? '#fdae61' : percentile > .4 ? '#fee08b' : percentile > .3 ? '#d9ef8b' :
                                                                                            percentile > .2 ? '#a6d96a' : percentile > .1 ? '#66bd63' : '#1a9850';
                                                                        }

                                                                        function style(feature) {
                                                                            return {
                                                                                fillColor: getColor(feature.properties.poverty_rate),
                                                                                weight: 2,
                                                                                opacity: 1,
                                                                                color: '#1b7831',
                                                                                fillOpacity: 0.7
                                                                            };
                                                                        }

                                                                        function highlightFeature(e) {
                                                                            var layer = e.target;

                                                                            layer.setStyle({
                                                                                fillColor: '#1b65bd',
                                                                                weight: 3,
                                                                                color: '#1b7831',
                                                                                fillOpacity: 0.9
                                                                            });

                                                                            popup = L.popup()
                                                                                .setLatLng(e.latlng) //(assuming e.latlng returns the coordinates of the event)
                                                                                .setContent('Zipcode: ' + layer.feature.properties.geoid10 + '<br> Click to learn more...')
                                                                                .openOn(map);
                                                                        }

                                                                        function resetHighlight(e) {
                                                                            polygonsPoverty.resetStyle(e.target);
                                                                            if (popup && map) {
                                                                                map.closePopup(popup);
                                                                                popup = null;
                                                                            }
                                                                        }

                                                                        function onEachFeature(feature, layer) {
                                                                            layer.on({
                                                                                mouseover: highlightFeature,
                                                                                mouseout: resetHighlight
                                                                            });
                                                                            layer.on('click', function (e) {
                                                                                callback(feature.properties, marginalpsedata, agencydata, findata, totaldata, afterschooldata, collegecareerdata, earlychildhooddata, mathsciencedata, parentmentorsdata, mentalhealthdata, physicalhealthdata, famvioldata, obesitydata, preventivecaredata, substanceabusedata);
                                                                            })
                                                                        }

                                                                        polygonsPoverty = L.geoJson(data, {
                                                                            style: style,
                                                                            onEachFeature: onEachFeature
                                                                        });
                                                                        map.removeLayer(workdevCentroidLayer);
                                                                        map.removeLayer(fincapCentroidLayer);
                                                                        map.removeLayer(totalCentroidLayer);
                                                                        map.removeLayer(afterschoolCentroidLayer);
                                                                        map.removeLayer(collegecareerCentroidLayer);
                                                                        map.removeLayer(earlychildhoodCentroidLayer);
                                                                        map.removeLayer(mathscienceCentroidLayer);
                                                                        map.removeLayer(parentmentorsCentroidLayer);

                                                                        map.removeLayer(polygonsUnder200);
                                                                        map.removeLayer(polygonsUnemployment);
                                                                        map.removeLayer(polygonsHHMedian);
                                                                        map.addLayer(polygonsPoverty);
                                                                        if (workdev == true) {
                                                                            map.addLayer(workdevCentroidLayer);
                                                                            //workdev = false;
                                                                        }
                                                                        if (fincap == true) {
                                                                            map.addLayer(fincapCentroidLayer);
                                                                            //fincap = false;
                                                                        }
                                                                        if (total == true) {
                                                                            map.addLayer(totalCentroidLayer);
                                                                            //total = false;
                                                                        }
                                                                        if (afterschool == true) {
                                                                            map.addLayer(afterschoolCentroidLayer);
                                                                            afterschool = false;
                                                                        }
                                                                        if (collegecareer == true) {
                                                                            map.addLayer(collegecareerCentroidLayer);
                                                                            collegecareer = false;
                                                                        }
                                                                        if (earlychildhood == true) {
                                                                            map.addLayer(earlychildhoodCentroidLayer);
                                                                            earlychildhood = false;
                                                                        }
                                                                        if (mathscience == true) {
                                                                            map.addLayer(mathscienceCentroidLayer);
                                                                            mathscience = false;
                                                                        }
                                                                        if (parentmentors == true) {
                                                                            map.addLayer(parentmentorsCentroidLayer);
                                                                            parentmentors = false;
                                                                        }
                                                                        if (pcount == true) {
                                                                            //add legend to map
                                                                            legendPoverty = L.control({
                                                                                position: 'bottomright'
                                                                            });

                                                                            // function for styling legend
                                                                            function getLegendColor(d) {

                                                                                return d > 35 ? '#d73027' : d > 30 ?
                                                                                        '#f46d43' : d > 25 ? '#fdae61' : d > 20 ? '#fee08b' : d > 15 ? '#d9ef8b' :
                                                                                                    d > 10 ? '#a6d96a' : d > 5 ?
                                                                                                            '#66bd63' : '#1a9850';
                                                                            } // end getColor function

                                                                            legendPoverty.onAdd = function (myLayer) {
                                                                                var div = L.DomUtil.create('div', 'info legend'),
                                                                                    grades = [5, 10, 15, 20, 25, 30, 35];
                                                                                labels = [];
                                                                                div.innerHTML += '<h6>Poverty Rate by %<b></b></h6>';
                                                                                // loop through our density intervals and generate a label with a colored square for each interval
                                                                                for (var i = 0; i < grades.length; i++) {
                                                                                    div.innerHTML += '<i style="background:' + getLegendColor(grades[i] + 1) + '"></i> ' + grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
                                                                                }
                                                                                pcount = false;
                                                                                return div;
                                                                            };

                                                                            map.addControl(legendPoverty);
                                                                        }

                                                                    }

                                                                    //To display household median
                                                                    function toggleHHMedian() {
                                                                        geojsondata = data;
                                                                        if (legendUnemployment != 0) {
                                                                            map.removeControl(legendUnemployment);
                                                                            //map.removeControl(legendPoverty);
                                                                            //legendPoverty=0;
                                                                            legendUnemployment = 0;
                                                                            //pcount=true
                                                                            //pcount=true
                                                                            unemcount = true;
                                                                        }
                                                                        if (LegendUnder200 != 0) {
                                                                            //map.removeControl(LegendUnder200);
                                                                            map.removeControl(LegendUnder200);
                                                                            LegendUnder200 = 0;
                                                                            //legendUnemployment = 0;
                                                                            ucount = true
                                                                            // unemcount = true;
                                                                        }
                                                                        if (legendPoverty != 0) {
                                                                            //map.removeControl(LegendUnder200);
                                                                            map.removeControl(legendPoverty);
                                                                            legendPoverty = 0;
                                                                            //legendUnemployment = 0;
                                                                            pcount = true
                                                                            // unemcount = true;
                                                                        }

                                                                        function getColor(d) {
                                                                            // console.log("geojsondata color:"+JSON.stringify(d));
                                                                            //Leaflet does not like working with JS object properties, so we will pass these properties into a regular array of values instead
                                                                            var output = [];
                                                                            for (var i = 0; i < geojsondata.features.length; ++i) {
                                                                                output.push(geojsondata.features[i].properties.median_hh_income);
                                                                            }

                                                                            output.sort();
                                                                            value = d;

                                                                            //console.log("output"+output);

                                                                            var maximumValue = Math.max.apply(Math, output);
                                                                            var minimumValue = Math.min.apply(Math, output);

                                                                            //console.log("maximumValue"+maximumValue);
                                                                            //console.log("minimumValue"+minimumValue);

                                                                            var range = Math.round((maximumValue - minimumValue) / 7);
                                                                            //console.log("range"+range);

                                                                            /*var test=maximumValue-range;
                                                                             var test1=maximumValue-2*range;
                                                                             var test2=maximumValue-3*range;
                                                                             var test3=maximumValue-4*range;
                                                                             var test4=maximumValue-5*range;
                                                                             var test5=maximumValue-6*range;

                                                                             console.log("maximumValue-range"+test);
                                                                             console.log("maximumValue-2range"+test1);
                                                                             console.log("maximumValue-3range"+test2);
                                                                             console.log("maximumValue-4range"+test3);
                                                                             console.log("maximumValue-5range"+test4);
                                                                             console.log("maximumValue-6range"+test5);*/

                                                                            return value > maximumValue - range ? '#1a9850' : value > maximumValue - 2 * range ? '#66bd63' : value > maximumValue - 3 * range ? '#a6d96a' : value > maximumValue - 4 * range ? '#d9ef8b' :
                                                                                            value > maximumValue - 5 * range ? '#fee08b' : value > maximumValue - 6 * range ? '#fdae61' : '#f46d43';

                                                                            /*var percentile = percentRank(output, value);

                                                                             // Returns the percentile of the given value in a sorted numeric array.
                                                                             function percentRank(arr, v) {
                                                                             if (typeof v !== 'number') throw new TypeError('v must be a number');
                                                                             for (var i = 0, l = arr.length; i < l; i++) {
                                                                             if (v <= arr[i]) {
                                                                             while (i < l && v === arr[i]) i++;
                                                                             if (i === 0) return 0;
                                                                             if (v !== arr[i - 1]) {
                                                                             i += (v - arr[i - 1]) / (arr[i] - arr[i - 1]);
                                                                             }
                                                                             return i / l;
                                                                             }
                                                                             }
                                                                             return 1;
                                                                             }*/

                                                                            //console.log(percentile);
                                                                            // return percentile > .6 ? '#f46d43' : percentile > .5 ? '#fdae61' : percentile > .4 ? '#fee08b' : percentile > .3 ? '#d9ef8b' :
                                                                            //              percentile > .2 ? '#a6d96a' : percentile > .1 ? '#66bd63' : '#1a9850';
                                                                            //return percentile > .1 ? '#1a9850' : percentile > .080 ? '#66bd63' : percentile > .060 ? '#a6d96a' : percentile > .040 ? '#d9ef8b' :
                                                                            //              percentile > .030 ? '#fee08b' : percentile > .017 ? '#fdae61' : '#f46d43';
                                                                            //return percentile > .080 ? '#1a9850' : percentile > .050 ? '#66bd63' : percentile > .020 ? '#a6d96a' : percentile > .019 ? '#d9ef8b' :
                                                                            //              percentile > .018 ? '#fee08b' : percentile > .017 ? '#fdae61' : '#f46d43';
                                                                        }

                                                                        function style(feature) {
                                                                            return {
                                                                                fillColor: getColor(feature.properties.median_hh_income),
                                                                                weight: 2,
                                                                                opacity: 1,
                                                                                color: '#1b7831',
                                                                                fillOpacity: 0.7
                                                                            };
                                                                        }

                                                                        function highlightFeature(e) {
                                                                            var layer = e.target;

                                                                            layer.setStyle({
                                                                                fillColor: '#1b65bd',
                                                                                weight: 3,
                                                                                color: '#1b7831',
                                                                                fillOpacity: 0.9
                                                                            });

                                                                            popup = L.popup()
                                                                                .setLatLng(e.latlng) //(assuming e.latlng returns the coordinates of the event)
                                                                                .setContent('Zipcode: ' + layer.feature.properties.geoid10 + '<br> Click to learn more...')
                                                                                .openOn(map);
                                                                        }

                                                                        function resetHighlight(e) {
                                                                            polygonsHHMedian.resetStyle(e.target);
                                                                            if (popup && map) {
                                                                                map.closePopup(popup);
                                                                                popup = null;
                                                                            }
                                                                        }

                                                                        function onEachFeature(feature, layer) {
                                                                            layer.on({
                                                                                mouseover: highlightFeature,
                                                                                mouseout: resetHighlight
                                                                            });
                                                                            layer.on('click', function (e) {
                                                                                callback(feature.properties, marginalpsedata,agencydata, findata, totaldata, afterschooldata, collegecareerdata, earlychildhooddata, mathsciencedata, parentmentorsdata, mentalhealthdata, physicalhealthdata, famvioldata, obesitydata, preventivecaredata, substanceabusedata);
                                                                            })
                                                                        }

                                                                        polygonsHHMedian = L.geoJson(data, {
                                                                            style: style,
                                                                            onEachFeature: onEachFeature
                                                                        });
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
                                                                        //map.removeLayer(polygonsHHMedian);
                                                                        map.addLayer(polygonsHHMedian);
                                                                        if (workdev == true) {
                                                                            map.addLayer(workdevCentroidLayer);
                                                                            //workdev = false;
                                                                        }
                                                                        if (fincap == true) {
                                                                            map.addLayer(fincapCentroidLayer);
                                                                            //fincap = false;
                                                                        }
                                                                        if (total == true) {
                                                                            map.addLayer(totalCentroidLayer);
                                                                            //total = false;
                                                                        }
                                                                        if (afterschool == true) {
                                                                            map.addLayer(afterschoolCentroidLayer);
                                                                            afterschool = false;
                                                                        }
                                                                        if (collegecareer == true) {
                                                                            map.addLayer(collegecareerCentroidLayer);
                                                                            collegecareer = false;
                                                                        }
                                                                        if (earlychildhood == true) {
                                                                            map.addLayer(earlychildhoodCentroidLayer);
                                                                            earlychildhood = false;
                                                                        }
                                                                        if (mathscience == true) {
                                                                            map.addLayer(mathscienceCentroidLayer);
                                                                            mathscience = false;
                                                                        }
                                                                        if (parentmentors == true) {
                                                                            map.addLayer(parentmentorsCentroidLayer);
                                                                            parentmentors = false;
                                                                        }
                                                                        if (hhinccount == true) {
                                                                            //add legend to map
                                                                            legendMedianHHIncome = L.control({
                                                                                position: 'bottomright'
                                                                            });

                                                                            // function for styling legend
                                                                            function getLegendColor(d) {

                                                                                return d > 130000 ? '#1a9850' : d > 108000 ?
                                                                                        '#66bd63' : d > 86000 ? '#a6d96a' : d > 65000 ? '#d9ef8b' : d > 43000 ? '#fee08b' :
                                                                                                    d > 21000 ? '#fdae61' : d > 0 ?
                                                                                                            '#f46d43' : '#d73027';
                                                                            } // end getColor function

                                                                            legendMedianHHIncome.onAdd = function (myLayer) {
                                                                                var div = L.DomUtil.create('div', 'info legend'),
                                                                                    grades = [0, 21000, 43000, 65000, 86000, 108000, 130000];
                                                                                labels = [];
                                                                                div.innerHTML += '<h6>Median Household Income by $<b></b></h6>';
                                                                                // loop through our density intervals and generate a label with a colored square for each interval
                                                                                for (var i = 0; i < grades.length; i++) {
                                                                                    div.innerHTML += '<i style="background:' + getLegendColor(grades[i] + 1) + '"></i> ' + grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
                                                                                }
                                                                                hhinccount = false;
                                                                                return div;
                                                                            };

                                                                            map.addControl(legendMedianHHIncome);

                                                                        }

                                                                    }

                                                                    function toggleUnder200() {
                                                                        geojsondata = data;
                                                                        if (legendUnemployment != 0) {
                                                                            map.removeControl(legendUnemployment);
                                                                            //map.removeControl(legendPoverty);
                                                                            //legendPoverty=0;
                                                                            legendUnemployment = 0;
                                                                            //pcount=true
                                                                            unemcount = true;
                                                                        }
                                                                        if (legendPoverty != 0) {
                                                                            //map.removeControl(LegendUnder200);
                                                                            map.removeControl(legendPoverty);
                                                                            legendPoverty = 0;
                                                                            //legendUnemployment = 0;
                                                                            pcount = true;
                                                                            // unemcount = true;
                                                                        }
                                                                        if (legendMedianHHIncome != 0) {
                                                                            //map.removeControl(LegendUnder200);
                                                                            map.removeControl(legendMedianHHIncome);
                                                                            legendMedianHHIncome = 0;
                                                                            //legendUnemployment = 0;
                                                                            hhinccount = true
                                                                            // unemcount = true;
                                                                        }

                                                                        function getColor(d) {
                                                                            // console.log("geojsondata color:"+JSON.stringify(d));
                                                                            //Leaflet does not like working with JS object properties, so we will pass these properties into a regular array of values instead
                                                                            var output = [];
                                                                            for (var i = 0; i < geojsondata.features.length; ++i) {
                                                                                output.push(geojsondata.features[i].properties.poverty_rate_200p);
                                                                            }

                                                                            output.sort();
                                                                            if (d != null)
                                                                                value = d;

                                                                            var percentile = percentRank(output, value);

                                                                            // Returns the percentile of the given value in a sorted numeric array.
                                                                            function percentRank(arr, v) {
                                                                                if (typeof v !== 'number') throw new TypeError('v must be a number');
                                                                                for (var i = 0, l = arr.length; i < l; i++) {
                                                                                    if (v <= arr[i]) {
                                                                                        while (i < l && v === arr[i]) i++;
                                                                                        if (i === 0) return 0;
                                                                                        if (v !== arr[i - 1]) {
                                                                                            i += (v - arr[i - 1]) / (arr[i] - arr[i - 1]);
                                                                                        }
                                                                                        return i / l;
                                                                                    }
                                                                                }
                                                                                return 1;
                                                                            }

                                                                            // console.log("Under 200 percent rate percent values"+percentile);
                                                                            return percentile > .6 ? '#f46d43' : percentile > .5 ? '#fdae61' : percentile > .4 ? '#fee08b' : percentile > .3 ? '#d9ef8b' :
                                                                                            percentile > .2 ? '#a6d96a' : percentile > .1 ? '#66bd63' : '#1a9850';
                                                                        }

                                                                        function style(feature) {
                                                                            return {
                                                                                fillColor: getColor(feature.properties.poverty_rate_200p),
                                                                                weight: 2,
                                                                                opacity: 1,
                                                                                color: '#1b7831',
                                                                                fillOpacity: 0.7
                                                                            };
                                                                        }

                                                                        function highlightFeature(e) {
                                                                            var layer = e.target;

                                                                            layer.setStyle({
                                                                                fillColor: '#1b65bd',
                                                                                weight: 3,
                                                                                color: '#1b7831',
                                                                                fillOpacity: 0.9
                                                                            });

                                                                            popup = L.popup()
                                                                                .setLatLng(e.latlng) //(assuming e.latlng returns the coordinates of the event)
                                                                                .setContent('Zipcode: ' + layer.feature.properties.geoid10 + '<br> Click to learn more...')
                                                                                .openOn(map);
                                                                        }

                                                                        function resetHighlight(e) {
                                                                            polygonsUnder200.resetStyle(e.target);
                                                                            if (popup && map) {
                                                                                map.closePopup(popup);
                                                                                popup = null;
                                                                            }
                                                                        }

                                                                        function onEachFeature(feature, layer) {
                                                                            layer.on({
                                                                                mouseover: highlightFeature,
                                                                                mouseout: resetHighlight
                                                                            });
                                                                            layer.on('click', function (e) {
                                                                                callback(feature.properties,marginalpsedata, agencydata, findata, totaldata, afterschooldata, collegecareerdata, earlychildhooddata, mathsciencedata, parentmentorsdata, mentalhealthdata, physicalhealthdata, famvioldata, obesitydata, preventivecaredata, substanceabusedata);
                                                                            })
                                                                        }

                                                                        polygonsUnder200 = L.geoJson(data, {
                                                                            style: style,
                                                                            onEachFeature: onEachFeature
                                                                        });
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
                                                                        map.removeLayer(polygonsHHMedian);
                                                                        map.addLayer(polygonsUnder200);
                                                                        if (workdev == true) {
                                                                            map.addLayer(workdevCentroidLayer);
                                                                            // workdev = false;
                                                                        }
                                                                        if (fincap == true) {
                                                                            map.addLayer(fincapCentroidLayer);
                                                                            //fincap = false;
                                                                        }
                                                                        if (total == true) {
                                                                            map.addLayer(totalCentroidLayer);
                                                                            //total = false;
                                                                        }
                                                                        if (afterschool == true) {
                                                                            map.addLayer(afterschoolCentroidLayer);
                                                                            afterschool = false;
                                                                        }
                                                                        if (collegecareer == true) {
                                                                            map.addLayer(collegecareerCentroidLayer);
                                                                            collegecareer = false;
                                                                        }
                                                                        if (earlychildhood == true) {
                                                                            map.addLayer(earlychildhoodCentroidLayer);
                                                                            earlychildhood = false;
                                                                        }
                                                                        if (mathscience == true) {
                                                                            map.addLayer(mathscienceCentroidLayer);
                                                                            mathscience = false;
                                                                        }
                                                                        if (parentmentors == true) {
                                                                            map.addLayer(parentmentorsCentroidLayer);
                                                                            parentmentors = false;
                                                                        }
                                                                        if (ucount == true) {
                                                                            //add legend to map
                                                                            LegendUnder200 = L.control({
                                                                                position: 'bottomright'
                                                                            });

                                                                            // function for styling legend
                                                                            function getLegendColor(d) {

                                                                                return d > 35 ? '#d73027' : d > 30 ?
                                                                                        '#f46d43' : d > 25 ? '#fdae61' : d > 20 ? '#fee08b' : d > 15 ? '#d9ef8b' :
                                                                                                    d > 10 ? '#a6d96a' : d > 5 ?
                                                                                                            '#66bd63' : '#1a9850';
                                                                            } // end getColor function

                                                                            LegendUnder200.onAdd = function (myLayer) {
                                                                                var div = L.DomUtil.create('div', 'info legend'),
                                                                                    grades = [5, 10, 15, 20, 25, 30, 35];
                                                                                labels = [];
                                                                                div.innerHTML += '<h6>Under 200 by %<b></b></h6>';
                                                                                // loop through our density intervals and generate a label with a colored square for each interval
                                                                                for (var i = 0; i < grades.length; i++) {

                                                                                    div.innerHTML += '<i style="background:' + getLegendColor(grades[i] + 1) + '"></i> ' + grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
                                                                                }
                                                                                ucount = false;
                                                                                return div;
                                                                            };

                                                                            map.addControl(LegendUnder200);
                                                                        }

                                                                    }

                                                                    function toggleUnemployment() {
                                                                        geojsondata = data;
                                                                        if (LegendUnder200 != 0) {
                                                                            map.removeControl(LegendUnder200);
                                                                            // map.removeControl(legendPoverty);
                                                                            // legendPoverty=0;
                                                                            LegendUnder200 = 0;
                                                                            // pcount=true
                                                                            ucount = true;
                                                                        }
                                                                        if (legendPoverty != 0) {
                                                                            // map.removeControl(LegendUnder200);
                                                                            map.removeControl(legendPoverty);
                                                                            legendPoverty = 0;
                                                                            // LegendUnder200 = 0;
                                                                            pcount = true
                                                                            // ucount = true;
                                                                        }
                                                                        if (legendMedianHHIncome != 0) {
                                                                            //map.removeControl(LegendUnder200);
                                                                            map.removeControl(legendMedianHHIncome);
                                                                            legendMedianHHIncome = 0;
                                                                            //legendUnemployment = 0;
                                                                            hhinccount = true
                                                                            // unemcount = true;
                                                                        }

                                                                        function getColor(d) {
                                                                            var percentile = d;
                                                                            return percentile > 15 ? '#f46d43' : percentile > 12 ? '#fdae61' : percentile > 10 ? '#fee08b' : percentile > 7 ? '#d9ef8b' :
                                                                                            percentile > 5 ? '#a6d96a' : percentile > 3 ? '#66bd63' : '#1a9850';
                                                                            // console.log("geojsondata color:"+JSON.stringify(d));
                                                                        }

                                                                        function style(feature) {
                                                                            return {
                                                                                fillColor: getColor(feature.properties.unemployment_rate),
                                                                                weight: 2,
                                                                                opacity: 1,
                                                                                color: '#1b7831',
                                                                                fillOpacity: 0.7
                                                                            };
                                                                        }

                                                                        function highlightFeature(e) {
                                                                            var layer = e.target;

                                                                            layer.setStyle({
                                                                                fillColor: '#1b65bd',
                                                                                weight: 3,
                                                                                color: '#1b7831',
                                                                                fillOpacity: 0.9
                                                                            });

                                                                            popup = L.popup()
                                                                                .setLatLng(e.latlng) //(assuming e.latlng returns the coordinates of the event)
                                                                                .setContent('Zipcode: ' + layer.feature.properties.geoid10 + '<br> Click to learn more...')
                                                                                .openOn(map);
                                                                        }

                                                                        function resetHighlight(e) {
                                                                            polygonsUnemployment.resetStyle(e.target);
                                                                            if (popup && map) {
                                                                                map.closePopup(popup);
                                                                                popup = null;
                                                                            }
                                                                        }

                                                                        function onEachFeature(feature, layer) {
                                                                            layer.on({
                                                                                mouseover: highlightFeature,
                                                                                mouseout: resetHighlight
                                                                            });
                                                                            layer.on('click', function (e) {
                                                                                callback(feature.properties, marginalpsedata,agencydata, findata, totaldata, afterschooldata, collegecareerdata, earlychildhooddata, mathsciencedata, parentmentorsdata, mentalhealthdata, physicalhealthdata, famvioldata, obesitydata, preventivecaredata, substanceabusedata);
                                                                            })
                                                                        }

                                                                        polygonsUnemployment = L.geoJson(data, {
                                                                            style: style,
                                                                            onEachFeature: onEachFeature
                                                                        });
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
                                                                        map.removeLayer(polygonsHHMedian);
                                                                        map.addLayer(polygonsUnemployment);
                                                                        if (workdev == true) {
                                                                            map.addLayer(workdevCentroidLayer);
                                                                            //workdev = false;
                                                                        }
                                                                        if (fincap == true) {
                                                                            map.addLayer(fincapCentroidLayer);
                                                                            //fincap = false;
                                                                        }
                                                                        if (total == true) {
                                                                            map.addLayer(totalCentroidLayer);
                                                                            //total = false;
                                                                        }
                                                                        if (afterschool == true) {
                                                                            map.addLayer(afterschoolCentroidLayer);
                                                                            afterschool = false;
                                                                        }
                                                                        if (collegecareer == true) {
                                                                            map.addLayer(collegecareerCentroidLayer);
                                                                            collegecareer = false;
                                                                        }
                                                                        if (earlychildhood == true) {
                                                                            map.addLayer(earlychildhoodCentroidLayer);
                                                                            earlychildhood = false;
                                                                        }
                                                                        if (mathscience == true) {
                                                                            map.addLayer(mathscienceCentroidLayer);
                                                                            mathscience = false;
                                                                        }
                                                                        if (parentmentors == true) {
                                                                            map.addLayer(parentmentorsCentroidLayer);
                                                                            parentmentors = false;
                                                                        }
                                                                        if (unemcount == true) {
                                                                            //add legend to map
                                                                            legendUnemployment = L.control({
                                                                                position: 'bottomright'
                                                                            });

                                                                            // function for styling legend
                                                                            function getLegendColor(d) {

                                                                                return d > 20 ? '#d73027' : d > 15 ?
                                                                                        '#f46d43' : d > 12 ? '#fdae61' : d > 10 ? '#fee08b' : d > 7 ? '#d9ef8b' :
                                                                                                    d > 5 ? '#a6d96a' : d > 2 ?
                                                                                                            '#66bd63' : '#1a9850';
                                                                            } // end getColor function

                                                                            legendUnemployment.onAdd = function (myLayer) {
                                                                                var div = L.DomUtil.create('div', 'info legend'),
                                                                                    grades = [2, 5, 7, 10, 12, 15, 20];
                                                                                labels = [];
                                                                                div.innerHTML += '<h6>Unemployment by %<b></b></h6>';
                                                                                // loop through our density intervals and generate a label with a colored square for each interval
                                                                                for (var i = 0; i < grades.length; i++) {

                                                                                    div.innerHTML += '<i style="background:' + getLegendColor(grades[i] + 1) + '"></i> ' + grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
                                                                                }
                                                                                unemcount = false;
                                                                                return div;
                                                                            };

                                                                            map.addControl(legendUnemployment);
                                                                        }
                                                                    }

                                                                    //To display poverty
                                                                    function toggleEduPoverty() {
                                                                        geojsondata = data;
                                                                        if (LegendHHDiplomaHigher != 0) {
                                                                            map.removeControl(LegendHHDiplomaHigher);
                                                                            //map.removeControl(legendPoverty);
                                                                            //legendPoverty=0;
                                                                            LegendHHDiplomaHigher = 0;
                                                                            //pcount=true
                                                                            hhcount = true;
                                                                        }
                                                                        if (LegendPSE != 0) {
                                                                            //map.removeControl(LegendUnder200);
                                                                            map.removeControl(LegendPSE);
                                                                            LegendPSE = 0;
                                                                            //legendUnemployment = 0;
                                                                            psecount = true
                                                                            // unemcount = true;
                                                                        }

                                                                        function getColor(d) {
                                                                            // console.log("geojsondata color:"+JSON.stringify(d));
                                                                            //Leaflet does not like working with JS object properties, so we will pass these properties into a regular array of values instead
                                                                            var output = [];
                                                                            for (var i = 0; i < geojsondata.features.length; ++i) {
                                                                                output.push(geojsondata.features[i].properties.poverty_rate);
                                                                            }

                                                                            output.sort();
                                                                            value = d;

                                                                            var percentile = percentRank(output, value);

                                                                            // Returns the percentile of the given value in a sorted numeric array.
                                                                            function percentRank(arr, v) {
                                                                                if (typeof v !== 'number') throw new TypeError('v must be a number');
                                                                                for (var i = 0, l = arr.length; i < l; i++) {
                                                                                    if (v <= arr[i]) {
                                                                                        while (i < l && v === arr[i]) i++;
                                                                                        if (i === 0) return 0;
                                                                                        if (v !== arr[i - 1]) {
                                                                                            i += (v - arr[i - 1]) / (arr[i] - arr[i - 1]);
                                                                                        }
                                                                                        return i / l;
                                                                                    }
                                                                                }
                                                                                return 1;
                                                                            }

                                                                            //console.log("Poverty rate percent values"+percentile);
                                                                            return percentile > .6 ? '#f46d43' : percentile > .5 ? '#fdae61' : percentile > .4 ? '#fee08b' : percentile > .3 ? '#d9ef8b' :
                                                                                            percentile > .2 ? '#a6d96a' : percentile > .1 ? '#66bd63' : '#1a9850';
                                                                        }

                                                                        function style(feature) {
                                                                            return {
                                                                                fillColor: getColor(feature.properties.poverty_rate),
                                                                                weight: 2,
                                                                                opacity: 1,
                                                                                color: '#1b7831',
                                                                                fillOpacity: 0.7
                                                                            };
                                                                        }

                                                                        function highlightFeature(e) {
                                                                            var layer = e.target;

                                                                            layer.setStyle({
                                                                                fillColor: '#1b65bd',
                                                                                weight: 3,
                                                                                color: '#1b7831',
                                                                                fillOpacity: 0.9
                                                                            });

                                                                            popup = L.popup()
                                                                                .setLatLng(e.latlng) //(assuming e.latlng returns the coordinates of the event)
                                                                                .setContent('Zipcode: ' + layer.feature.properties.geoid10 + '<br> Click to learn more...')
                                                                                .openOn(map);
                                                                        }

                                                                        function resetHighlight(e) {
                                                                            polygonsPoverty.resetStyle(e.target);
                                                                            if (popup && map) {
                                                                                map.closePopup(popup);
                                                                                popup = null;
                                                                            }
                                                                        }

                                                                        function onEachFeature(feature, layer) {
                                                                            layer.on({
                                                                                mouseover: highlightFeature,
                                                                                mouseout: resetHighlight
                                                                            });
                                                                            layer.on('click', function (e) {
                                                                                callback(feature.properties, marginalpsedata,agencydata, findata, totaldata, afterschooldata, collegecareerdata, earlychildhooddata, mathsciencedata, parentmentorsdata, mentalhealthdata, physicalhealthdata, famvioldata, obesitydata, preventivecaredata, substanceabusedata);
                                                                            })
                                                                        }

                                                                        polygonsPoverty = L.geoJson(data, {
                                                                            style: style,
                                                                            onEachFeature: onEachFeature
                                                                        });
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
                                                                        map.removeLayer(polygonsHHDiplomaHigher);
                                                                        map.removeLayer(polygonsPSE);
                                                                        map.removeLayer(polygonsUnemployment);
                                                                        map.removeLayer(polygonsHHMedian);
                                                                        map.addLayer(polygonsPoverty);
                                                                        if (workdev == true) {
                                                                            map.addLayer(workdevCentroidLayer);
                                                                            //workdev = false;
                                                                        }
                                                                        if (fincap == true) {
                                                                            map.addLayer(fincapCentroidLayer);
                                                                            //fincap = false;
                                                                        }
                                                                        if (total == true) {
                                                                            map.addLayer(totalCentroidLayer);
                                                                            //total = false;
                                                                        }
                                                                        if (afterschool == true) {
                                                                            map.addLayer(afterschoolCentroidLayer);
                                                                            // afterschool = false;
                                                                        }
                                                                        if (collegecareer == true) {
                                                                            map.addLayer(collegecareerCentroidLayer);
                                                                            //collegecareer = false;
                                                                        }
                                                                        if (earlychildhood == true) {
                                                                            map.addLayer(earlychildhoodCentroidLayer);
                                                                            //earlychildhood = false;
                                                                        }
                                                                        if (mathscience == true) {
                                                                            map.addLayer(mathscienceCentroidLayer);
                                                                            //mathscience = false;
                                                                        }
                                                                        if (parentmentors == true) {
                                                                            map.addLayer(parentmentorsCentroidLayer);
                                                                            //parentmentors = false;
                                                                        }
                                                                        if (pcount == true) {
                                                                            //add legend to map
                                                                            legendPoverty = L.control({
                                                                                position: 'bottomright'
                                                                            });

                                                                            // function for styling legend
                                                                            function getLegendColor(d) {

                                                                                return d > 35 ? '#d73027' : d > 30 ?
                                                                                        '#f46d43' : d > 25 ? '#fdae61' : d > 20 ? '#fee08b' : d > 15 ? '#d9ef8b' :
                                                                                                    d > 10 ? '#a6d96a' : d > 5 ?
                                                                                                            '#66bd63' : '#1a9850';
                                                                            } // end getColor function

                                                                            legendPoverty.onAdd = function (myLayer) {
                                                                                var div = L.DomUtil.create('div', 'info legend'),
                                                                                    grades = [5, 10, 15, 20, 25, 30, 35];
                                                                                labels = [];
                                                                                div.innerHTML += '<h6>Poverty Rate by %<b></b></h6>';
                                                                                // loop through our density intervals and generate a label with a colored square for each interval
                                                                                for (var i = 0; i < grades.length; i++) {
                                                                                    div.innerHTML += '<i style="background:' + getLegendColor(grades[i] + 1) + '"></i> ' + grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
                                                                                }
                                                                                pcount = false;
                                                                                return div;
                                                                            };

                                                                            map.addControl(legendPoverty);
                                                                        }

                                                                    }

                                                                    function toggleHHDiplomaHigher() {
                                                                        geojsondata = data;
                                                                        if (LegendPSE != 0) {
                                                                            map.removeControl(LegendPSE);
                                                                            //map.removeControl(legendPoverty);
                                                                            //legendPoverty=0;
                                                                            LegendPSE = 0;
                                                                            //pcount=true
                                                                            psecount = true;
                                                                        }
                                                                        if (legendPoverty != 0) {
                                                                            //map.removeControl(LegendUnder200);
                                                                            map.removeControl(legendPoverty);
                                                                            legendPoverty = 0;
                                                                            //legendUnemployment = 0;
                                                                            pcount = true
                                                                            // unemcount = true;
                                                                        }

                                                                        function getColor(d) {
                                                                            var percentile = d;
                                                                            // console.log("Highschoo diploma rate percent values"+percentile);
                                                                            return percentile > 90 ? '#1a9850' : percentile > 80 ? '#66bd63' : percentile > 70 ? '#a6d96a' : percentile > 60 ? '#fdae61' : '#f46d43';
                                                                            // console.log("geojsondata color:"+JSON.stringify(d));
                                                                        }


                                                                        function style(feature) {
                                                                            return {
                                                                                fillColor: getColor(feature.properties.pct_hs_or_higher),
                                                                                weight: 2,
                                                                                opacity: 1,
                                                                                color: '#1b7831',
                                                                                fillOpacity: 0.7
                                                                            };
                                                                        }

                                                                        function highlightFeature(e) {
                                                                            var layer = e.target;

                                                                            layer.setStyle({
                                                                                fillColor: '#1b65bd',
                                                                                weight: 3,
                                                                                color: '#1b7831',
                                                                                fillOpacity: 0.9
                                                                            });

                                                                            popup = L.popup()
                                                                                .setLatLng(e.latlng) //(assuming e.latlng returns the coordinates of the event)
                                                                                .setContent('Zipcode: ' + layer.feature.properties.geoid10 + '<br> Click to learn more...')
                                                                                .openOn(map);
                                                                        }

                                                                        function resetHighlight(e) {
                                                                            polygonsHHDiplomaHigher.resetStyle(e.target);
                                                                            if (popup && map) {
                                                                                map.closePopup(popup);
                                                                                popup = null;
                                                                            }
                                                                        }

                                                                        function onEachFeature(feature, layer) {
                                                                            layer.on({
                                                                                mouseover: highlightFeature,
                                                                                mouseout: resetHighlight
                                                                            });
                                                                            layer.on('click', function (e) {
                                                                                callback(feature.properties,marginalpsedata, agencydata, findata, totaldata, afterschooldata, collegecareerdata, earlychildhooddata, mathsciencedata, parentmentorsdata, mentalhealthdata, physicalhealthdata, famvioldata, obesitydata, preventivecaredata, substanceabusedata);
                                                                            })
                                                                        }

                                                                        polygonsHHDiplomaHigher = L.geoJson(data, {
                                                                            style: style,
                                                                            onEachFeature: onEachFeature
                                                                        });
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
                                                                        map.removeLayer(polygonsPSE);
                                                                        map.removeLayer(polygonsUnemployment);
                                                                        map.removeLayer(polygonsHHMedian);
                                                                        map.addLayer(polygonsHHDiplomaHigher);
                                                                        if (workdev == true) {
                                                                            map.addLayer(workdevCentroidLayer);
                                                                            //workdev = false;
                                                                        }
                                                                        if (fincap == true) {
                                                                            map.addLayer(fincapCentroidLayer);
                                                                            //fincap = false;
                                                                        }
                                                                        if (total == true) {
                                                                            map.addLayer(totalCentroidLayer);
                                                                            //total = false;
                                                                        }
                                                                        if (afterschool == true) {
                                                                            map.addLayer(afterschoolCentroidLayer);
                                                                            //afterschool = false;
                                                                        }
                                                                        if (collegecareer == true) {
                                                                            map.addLayer(collegecareerCentroidLayer);
                                                                            //collegecareer = false;
                                                                        }
                                                                        if (earlychildhood == true) {
                                                                            map.addLayer(earlychildhoodCentroidLayer);
                                                                            //earlychildhood = false;
                                                                        }
                                                                        if (mathscience == true) {
                                                                            map.addLayer(mathscienceCentroidLayer);
                                                                            //mathscience = false;
                                                                        }
                                                                        if (parentmentors == true) {
                                                                            map.addLayer(parentmentorsCentroidLayer);
                                                                            //parentmentors = false;
                                                                        }
                                                                        if (hhcount == true) {
                                                                            //add legend to map
                                                                            LegendHHDiplomaHigher = L.control({
                                                                                position: 'bottomright'
                                                                            });

                                                                            // function for styling legend
                                                                            function getLegendColor(d) {
                                                                                return d > 90 ? '#1a9850' : d > 80 ? '#66bd63' : d > 70 ? '#a6d96a' : d > 60 ? '#fdae61' : '#f46d43';//ad9ef8b
                                                                            } // end getColor function

                                                                            LegendHHDiplomaHigher.onAdd = function (myLayer) {
                                                                                var div = L.DomUtil.create('div', 'info legend'),
                                                                                    grades = [50, 60, 70, 80, 90];
                                                                                labels = [];
                                                                                div.innerHTML += '<h6>High School Diploma or Higher by %<b></b></h6>';
                                                                                // loop through our density intervals and generate a label with a colored square for each interval
                                                                                for (var i = 0; i < grades.length; i++) {

                                                                                    div.innerHTML += '<i style="background:' + getLegendColor(grades[i] + 1) + '"></i> ' + grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
                                                                                }
                                                                                hhcount = false;
                                                                                return div;
                                                                            };

                                                                            map.addControl(LegendHHDiplomaHigher);
                                                                        }

                                                                    }

                                                                    function togglePublicSchoolEnrollment() {
                                                                        geojsondata = data;
                                                                        if (LegendHHDiplomaHigher != 0) {
                                                                            map.removeControl(LegendHHDiplomaHigher);
                                                                            //map.removeControl(legendPoverty);
                                                                            //legendPoverty=0;
                                                                            LegendHHDiplomaHigher = 0;
                                                                            //pcount=true
                                                                            hhcount = true;
                                                                        }
                                                                        if (legendPoverty != 0) {
                                                                            //map.removeControl(LegendUnder200);
                                                                            map.removeControl(legendPoverty);
                                                                            legendPoverty = 0;
                                                                            //legendUnemployment = 0;
                                                                            pcount = true
                                                                            // unemcount = true;
                                                                        }

                                                                        function getColor(d) {
                                                                            var percentile = d;
                                                                            // console.log("Highschoo diploma rate percent values"+percentile);
                                                                            return percentile > 90 ? '#1a9850' : percentile > 80 ? '#66bd63' : percentile > 70 ? '#a6d96a' : percentile > 60 ? '#fdae61' : '#f46d43';
                                                                            // console.log("geojsondata color:"+JSON.stringify(d));
                                                                        }


                                                                        function style(feature) {
                                                                            return {
                                                                                fillColor: getColor(feature.properties.pct_public_school),
                                                                                weight: 2,
                                                                                opacity: 1,
                                                                                color: '#1b7831',
                                                                                fillOpacity: 0.7
                                                                            };
                                                                        }

                                                                        function highlightFeature(e) {
                                                                            var layer = e.target;

                                                                            layer.setStyle({
                                                                                fillColor: '#1b65bd',
                                                                                weight: 3,
                                                                                color: '#1b7831',
                                                                                fillOpacity: 0.9
                                                                            });

                                                                            popup = L.popup()
                                                                                .setLatLng(e.latlng) //(assuming e.latlng returns the coordinates of the event)
                                                                                .setContent('Zipcode: ' + layer.feature.properties.geoid10 + '<br> Click to learn more...')
                                                                                .openOn(map);
                                                                        }

                                                                        function resetHighlight(e) {
                                                                            polygonsPSE.resetStyle(e.target);
                                                                            if (popup && map) {
                                                                                map.closePopup(popup);
                                                                                popup = null;
                                                                            }
                                                                        }

                                                                        function onEachFeature(feature, layer) {
                                                                            layer.on({
                                                                                mouseover: highlightFeature,
                                                                                mouseout: resetHighlight
                                                                            });
                                                                            layer.on('click', function (e) {
                                                                                callback(feature.properties, marginalpsedata,agencydata, findata, totaldata, afterschooldata, collegecareerdata, earlychildhooddata, mathsciencedata, parentmentorsdata, mentalhealthdata, physicalhealthdata, famvioldata, obesitydata, preventivecaredata, substanceabusedata);
                                                                            })
                                                                        }

                                                                        polygonsPSE = L.geoJson(data, {
                                                                            style: style,
                                                                            onEachFeature: onEachFeature
                                                                        });
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
                                                                        map.removeLayer(polygonsPSE);
                                                                        map.removeLayer(polygonsHHDiplomaHigher);
                                                                        map.removeLayer(polygonsUnemployment);
                                                                        map.removeLayer(polygonsHHMedian);
                                                                        map.addLayer(polygonsPSE);
                                                                        if (workdev == true) {
                                                                            map.addLayer(workdevCentroidLayer);
                                                                            //workdev = false;
                                                                        }
                                                                        if (fincap == true) {
                                                                            map.addLayer(fincapCentroidLayer);
                                                                            //fincap = false;
                                                                        }
                                                                        if (total == true) {
                                                                            map.addLayer(totalCentroidLayer);
                                                                            //total = false;
                                                                        }
                                                                        if (afterschool == true) {
                                                                            map.addLayer(afterschoolCentroidLayer);
                                                                            //afterschool = false;
                                                                        }
                                                                        if (collegecareer == true) {
                                                                            map.addLayer(collegecareerCentroidLayer);
                                                                            //collegecareer = false;
                                                                        }
                                                                        if (earlychildhood == true) {
                                                                            map.addLayer(earlychildhoodCentroidLayer);
                                                                            //earlychildhood = false;
                                                                        }
                                                                        if (mathscience == true) {
                                                                            map.addLayer(mathscienceCentroidLayer);
                                                                            //mathscience = false;
                                                                        }
                                                                        if (parentmentors == true) {
                                                                            map.addLayer(parentmentorsCentroidLayer);
                                                                            //parentmentors = false;
                                                                        }
                                                                        if (psecount == true) {
                                                                            //add legend to map
                                                                            LegendPSE = L.control({
                                                                                position: 'bottomright'
                                                                            });

                                                                            // function for styling legend
                                                                            function getLegendColor(d) {
                                                                                return d > 90 ? '#1a9850' : d > 80 ? '#66bd63' : d > 70 ? '#a6d96a' : d > 60 ? '#fdae61' : '#f46d43';//ad9ef8b
                                                                            } // end getColor function

                                                                            LegendPSE.onAdd = function (myLayer) {
                                                                                var div = L.DomUtil.create('div', 'info legend'),
                                                                                    grades = [50, 60, 70, 80, 90];
                                                                                labels = [];
                                                                                div.innerHTML += '<h6>Public School Enrollment by %<b></b></h6>';
                                                                                // loop through our density intervals and generate a label with a colored square for each interval
                                                                                for (var i = 0; i < grades.length; i++) {

                                                                                    div.innerHTML += '<i style="background:' + getLegendColor(grades[i] + 1) + '"></i> ' + grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
                                                                                }
                                                                                psecount = false;
                                                                                return div;
                                                                            };

                                                                            map.addControl(LegendPSE);
                                                                        }

                                                                    }

                                                                    function toggleUninsuredRate() {
                                                                        geojsondata = data;
                                                                        if (LegendChildhoodUninsured != 0) {
                                                                            map.removeControl(LegendChildhoodUninsured);
                                                                            //map.removeControl(legendPoverty);
                                                                            //legendPoverty=0;
                                                                            LegendChildhoodUninsured = 0;
                                                                            //pcount=true
                                                                            unchildcount = true;
                                                                        }
                                                                        if (legendPoverty != 0) {
                                                                            //map.removeControl(LegendUnder200);
                                                                            map.removeControl(legendPoverty);
                                                                            legendPoverty = 0;
                                                                            //legendUnemployment = 0;
                                                                            pcount = true
                                                                            // unemcount = true;
                                                                        }

                                                                        function getColor(d) {
                                                                            var percentile = d;
                                                                            // console.log("Highschoo diploma rate percent values"+percentile);
                                                                            return percentile > 25 ? '#f46d43' : percentile > 20 ? '#fdae61' : percentile > 15 ? '#a6d96a' : percentile > 10 ? '#66bd63' : '#1a9850';
                                                                            // console.log("geojsondata color:"+JSON.stringify(d));
                                                                        }


                                                                        function style(feature) {
                                                                            return {
                                                                                fillColor: getColor(feature.properties.pct_uninsured),
                                                                                weight: 2,
                                                                                opacity: 1,
                                                                                color: '#1b7831',
                                                                                fillOpacity: 0.7
                                                                            };
                                                                        }

                                                                        function highlightFeature(e) {
                                                                            var layer = e.target;

                                                                            layer.setStyle({
                                                                                fillColor: '#1b65bd',
                                                                                weight: 3,
                                                                                color: '#1b7831',
                                                                                fillOpacity: 0.9
                                                                            });

                                                                            popup = L.popup()
                                                                                .setLatLng(e.latlng) //(assuming e.latlng returns the coordinates of the event)
                                                                                .setContent('Zipcode: ' + layer.feature.properties.geoid10 + '<br> Click to learn more...')
                                                                                .openOn(map);
                                                                        }

                                                                        function resetHighlight(e) {
                                                                            polygonsUninsured.resetStyle(e.target);
                                                                            if (popup && map) {
                                                                                map.closePopup(popup);
                                                                                popup = null;
                                                                            }
                                                                        }

                                                                        function onEachFeature(feature, layer) {
                                                                            layer.on({
                                                                                mouseover: highlightFeature,
                                                                                mouseout: resetHighlight
                                                                            });
                                                                            layer.on('click', function (e) {
                                                                                callback(feature.properties, marginalpsedata,agencydata, findata, totaldata, afterschooldata, collegecareerdata, earlychildhooddata, mathsciencedata, parentmentorsdata, mentalhealthdata, physicalhealthdata, famvioldata, obesitydata, preventivecaredata, substanceabusedata);
                                                                            })
                                                                        }

                                                                        polygonsUninsured = L.geoJson(data, {
                                                                            style: style,
                                                                            onEachFeature: onEachFeature
                                                                        });
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
                                                                        map.removeLayer(polygonsPSE);
                                                                        map.removeLayer(polygonsUninsured);
                                                                        map.removeLayer(polygonsHHDiplomaHigher);
                                                                        map.removeLayer(polygonsUnemployment);
                                                                        map.removeLayer(polygonsChildhoodUninsured);
                                                                        map.removeLayer(polygonsHHMedian);
                                                                        map.addLayer(polygonsUninsured);
                                                                        if (workdev == true) {
                                                                            map.addLayer(workdevCentroidLayer);
                                                                            //workdev = false;
                                                                        }
                                                                        if (fincap == true) {
                                                                            map.addLayer(fincapCentroidLayer);
                                                                            //fincap = false;
                                                                        }
                                                                        if (total == true) {
                                                                            map.addLayer(totalCentroidLayer);
                                                                            //total = false;
                                                                        }
                                                                        if (afterschool == true) {
                                                                            map.addLayer(afterschoolCentroidLayer);
                                                                            //afterschool = false;
                                                                        }
                                                                        if (collegecareer == true) {
                                                                            map.addLayer(collegecareerCentroidLayer);
                                                                            //collegecareer = false;
                                                                        }
                                                                        if (earlychildhood == true) {
                                                                            map.addLayer(earlychildhoodCentroidLayer);
                                                                            //earlychildhood = false;
                                                                        }
                                                                        if (mathscience == true) {
                                                                            map.addLayer(mathscienceCentroidLayer);
                                                                            //mathscience = false;
                                                                        }
                                                                        if (parentmentors == true) {
                                                                            map.addLayer(parentmentorsCentroidLayer);
                                                                            //parentmentors = false;
                                                                        }
                                                                        if (mentalhealth == true) {
                                                                            map.addLayer(mentalhealthCentroidLayer);
                                                                            // mentalhealth = false;
                                                                        }
                                                                        if (physicalhealth == true) {
                                                                            map.addLayer(physicalhealthCentroidLayer);
                                                                            //physicalhealth = false;
                                                                        }
                                                                        if (famviol == true) {
                                                                            map.addLayer(familyviolenceCentroidLayer);
                                                                            //famviol = false;
                                                                        }
                                                                        if (obesity == true) {
                                                                            map.addLayer(obesityCentroidLayer);
                                                                            //obesity = false;
                                                                        }
                                                                        if (preventivecare == true) {
                                                                            map.addLayer(preventivecareCentroidLayer);
                                                                            // preventivecare = false;
                                                                        }
                                                                        if (substanceabuse == true) {
                                                                            map.addLayer(substanceabuseCentroidLayer);
                                                                            //substanceabuse = false;
                                                                        }
                                                                        if (uncount == true) {
                                                                            //add legend to map
                                                                            LegendUninsured = L.control({
                                                                                position: 'bottomright'
                                                                            });

                                                                            // function for styling legend
                                                                            function getLegendColor(d) {
                                                                                return d > 25 ? '#f46d43' : d > 20 ? '#fdae61' : d > 15 ? '#a6d96a' : d > 10 ? '#66bd63' : '#1a9850';//ad9ef8b
                                                                            } // end getColor function

                                                                            LegendUninsured.onAdd = function (myLayer) {
                                                                                var div = L.DomUtil.create('div', 'info legend'),
                                                                                    grades = [0, 10, 15, 20, 25];
                                                                                labels = [];
                                                                                div.innerHTML += '<h6>Uninsured Rate by %<b></b></h6>';
                                                                                // loop through our density intervals and generate a label with a colored square for each interval
                                                                                for (var i = 0; i < grades.length; i++) {

                                                                                    div.innerHTML += '<i style="background:' + getLegendColor(grades[i] + 1) + '"></i> ' + grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
                                                                                }
                                                                                uncount = false;
                                                                                return div;
                                                                            };

                                                                            map.addControl(LegendUninsured);
                                                                        }

                                                                    }

                                                                    function toggleChildhoodUninsuredRate() {
                                                                        geojsondata = data;
                                                                        if (LegendUninsured != 0) {
                                                                            map.removeControl(LegendUninsured);
                                                                            //map.removeControl(legendPoverty);
                                                                            //legendPoverty=0;
                                                                            LegendUninsured = 0;
                                                                            //pcount=true
                                                                            uncount = true;
                                                                        }
                                                                        if (legendPoverty != 0) {
                                                                            //map.removeControl(LegendUnder200);
                                                                            map.removeControl(legendPoverty);
                                                                            legendPoverty = 0;
                                                                            //legendUnemployment = 0;
                                                                            pcount = true
                                                                            // unemcount = true;
                                                                        }

                                                                        function getColor(d) {
                                                                            var percentile = d;
                                                                            // console.log("Highschoo diploma rate percent values"+percentile);
                                                                            return percentile > 25 ? '#f46d43' : percentile > 20 ? '#fdae61' : percentile > 15 ? '#a6d96a' : percentile > 10 ? '#66bd63' : '#1a9850';
                                                                            // console.log("geojsondata color:"+JSON.stringify(d));
                                                                        }


                                                                        function style(feature) {
                                                                            return {
                                                                                fillColor: getColor(feature.properties.pct_uninsured_children),
                                                                                weight: 2,
                                                                                opacity: 1,
                                                                                color: '#1b7831',
                                                                                fillOpacity: 0.7
                                                                            };
                                                                        }

                                                                        function highlightFeature(e) {
                                                                            var layer = e.target;

                                                                            layer.setStyle({
                                                                                fillColor: '#1b65bd',
                                                                                weight: 3,
                                                                                color: '#1b7831',
                                                                                fillOpacity: 0.9
                                                                            });

                                                                            popup = L.popup()
                                                                                .setLatLng(e.latlng) //(assuming e.latlng returns the coordinates of the event)
                                                                                .setContent('Zipcode: ' + layer.feature.properties.geoid10 + '<br> Click to learn more...')
                                                                                .openOn(map);
                                                                        }

                                                                        function resetHighlight(e) {
                                                                            polygonsChildhoodUninsured.resetStyle(e.target);
                                                                            if (popup && map) {
                                                                                map.closePopup(popup);
                                                                                popup = null;
                                                                            }
                                                                        }

                                                                        function onEachFeature(feature, layer) {
                                                                            layer.on({
                                                                                mouseover: highlightFeature,
                                                                                mouseout: resetHighlight
                                                                            });
                                                                            layer.on('click', function (e) {
                                                                                callback(feature.properties, marginalpsedata,agencydata, findata, totaldata, afterschooldata, collegecareerdata, earlychildhooddata, mathsciencedata, parentmentorsdata, mentalhealthdata, physicalhealthdata, famvioldata, obesitydata, preventivecaredata, substanceabusedata);
                                                                            })
                                                                        }

                                                                        polygonsChildhoodUninsured = L.geoJson(data, {
                                                                            style: style,
                                                                            onEachFeature: onEachFeature
                                                                        });
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
                                                                        map.removeLayer(polygonsPSE);
                                                                        map.removeLayer(polygonsUninsured);
                                                                        map.removeLayer(polygonsHHDiplomaHigher);
                                                                        map.removeLayer(polygonsUnemployment);
                                                                        map.removeLayer(polygonsUninsured);
                                                                        map.removeLayer(polygonsHHMedian);
                                                                        map.addLayer(polygonsChildhoodUninsured);
                                                                        if (workdev == true) {
                                                                            map.addLayer(workdevCentroidLayer);
                                                                            //workdev = false;
                                                                        }
                                                                        if (fincap == true) {
                                                                            map.addLayer(fincapCentroidLayer);
                                                                            //fincap = false;
                                                                        }
                                                                        if (total == true) {
                                                                            map.addLayer(totalCentroidLayer);
                                                                            //total = false;
                                                                        }
                                                                        if (afterschool == true) {
                                                                            map.addLayer(afterschoolCentroidLayer);
                                                                            //afterschool = false;
                                                                        }
                                                                        if (collegecareer == true) {
                                                                            map.addLayer(collegecareerCentroidLayer);
                                                                            //collegecareer = false;
                                                                        }
                                                                        if (earlychildhood == true) {
                                                                            map.addLayer(earlychildhoodCentroidLayer);
                                                                            //earlychildhood = false;
                                                                        }
                                                                        if (mathscience == true) {
                                                                            map.addLayer(mathscienceCentroidLayer);
                                                                            //mathscience = false;
                                                                        }
                                                                        if (parentmentors == true) {
                                                                            map.addLayer(parentmentorsCentroidLayer);
                                                                            //parentmentors = false;
                                                                        }
                                                                        if (mentalhealth == true) {
                                                                            map.addLayer(mentalhealthCentroidLayer);
                                                                            //mentalhealth = false;
                                                                        }
                                                                        if (physicalhealth == true) {
                                                                            map.addLayer(physicalhealthCentroidLayer);
                                                                            //physicalhealth = false;
                                                                        }
                                                                        if (famviol == true) {
                                                                            map.addLayer(familyviolenceCentroidLayer);
                                                                            //famviol = false;
                                                                        }
                                                                        if (obesity == true) {
                                                                            map.addLayer(obesityCentroidLayer);
                                                                            //obesity = false;
                                                                        }
                                                                        if (preventivecare == true) {
                                                                            map.addLayer(preventivecareCentroidLayer);
                                                                            //preventivecare = false;
                                                                        }
                                                                        if (substanceabuse == true) {
                                                                            map.addLayer(substanceabuseCentroidLayer);
                                                                            //substanceabuse = false;
                                                                        }
                                                                        if (unchildcount == true) {
                                                                            //add legend to map
                                                                            LegendChildhoodUninsured = L.control({
                                                                                position: 'bottomright'
                                                                            });

                                                                            // function for styling legend
                                                                            function getLegendColor(d) {
                                                                                return d > 25 ? '#f46d43' : d > 20 ? '#fdae61' : d > 15 ? '#a6d96a' : d > 10 ? '#66bd63' : '#1a9850';//ad9ef8b
                                                                            } // end getColor function

                                                                            LegendChildhoodUninsured.onAdd = function (myLayer) {
                                                                                var div = L.DomUtil.create('div', 'info legend'),
                                                                                    grades = [0, 10, 15, 20, 25];
                                                                                labels = [];
                                                                                div.innerHTML += '<h6>Childhood Uninsured Rate by %<b></b></h6>';
                                                                                // loop through our density intervals and generate a label with a colored square for each interval
                                                                                for (var i = 0; i < grades.length; i++) {

                                                                                    div.innerHTML += '<i style="background:' + getLegendColor(grades[i] + 1) + '"></i> ' + grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
                                                                                }
                                                                                unchildcount = false;
                                                                                return div;
                                                                            };

                                                                            map.addControl(LegendChildhoodUninsured);
                                                                        }

                                                                    }

                                                                    //To display poverty
                                                                    function toggleHealthPoverty() {
                                                                        geojsondata = data;
                                                                        if (LegendUninsured != 0) {
                                                                            map.removeControl(LegendUninsured);
                                                                            //map.removeControl(legendPoverty);
                                                                            //legendPoverty=0;
                                                                            LegendUninsured = 0;
                                                                            //pcount=true
                                                                            uncount = true;
                                                                        }
                                                                        if (LegendChildhoodUninsured != 0) {
                                                                            //map.removeControl(LegendUnder200);
                                                                            map.removeControl(LegendChildhoodUninsured);
                                                                            LegendChildhoodUninsured = 0;
                                                                            //legendUnemployment = 0;
                                                                            unchildcount = true
                                                                            // unemcount = true;
                                                                        }

                                                                        function getColor(d) {
                                                                            // console.log("geojsondata color:"+JSON.stringify(d));
                                                                            //Leaflet does not like working with JS object properties, so we will pass these properties into a regular array of values instead
                                                                            var output = [];
                                                                            for (var i = 0; i < geojsondata.features.length; ++i) {
                                                                                output.push(geojsondata.features[i].properties.poverty_rate);
                                                                            }

                                                                            output.sort();
                                                                            value = d;

                                                                            var percentile = percentRank(output, value);

                                                                            // Returns the percentile of the given value in a sorted numeric array.
                                                                            function percentRank(arr, v) {
                                                                                if (typeof v !== 'number') throw new TypeError('v must be a number');
                                                                                for (var i = 0, l = arr.length; i < l; i++) {
                                                                                    if (v <= arr[i]) {
                                                                                        while (i < l && v === arr[i]) i++;
                                                                                        if (i === 0) return 0;
                                                                                        if (v !== arr[i - 1]) {
                                                                                            i += (v - arr[i - 1]) / (arr[i] - arr[i - 1]);
                                                                                        }
                                                                                        return i / l;
                                                                                    }
                                                                                }
                                                                                return 1;
                                                                            }

                                                                            //console.log("Poverty rate percent values"+percentile);
                                                                            return percentile > .6 ? '#f46d43' : percentile > .5 ? '#fdae61' : percentile > .4 ? '#fee08b' : percentile > .3 ? '#d9ef8b' :
                                                                                            percentile > .2 ? '#a6d96a' : percentile > .1 ? '#66bd63' : '#1a9850';
                                                                        }

                                                                        function style(feature) {
                                                                            return {
                                                                                fillColor: getColor(feature.properties.poverty_rate),
                                                                                weight: 2,
                                                                                opacity: 1,
                                                                                color: '#1b7831',
                                                                                fillOpacity: 0.7
                                                                            };
                                                                        }

                                                                        function highlightFeature(e) {
                                                                            var layer = e.target;

                                                                            layer.setStyle({
                                                                                fillColor: '#1b65bd',
                                                                                weight: 3,
                                                                                color: '#1b7831',
                                                                                fillOpacity: 0.9
                                                                            });

                                                                            popup = L.popup()
                                                                                .setLatLng(e.latlng) //(assuming e.latlng returns the coordinates of the event)
                                                                                .setContent('Zipcode: ' + layer.feature.properties.geoid10 + '<br> Click to learn more...')
                                                                                .openOn(map);
                                                                        }

                                                                        function resetHighlight(e) {
                                                                            polygonsPoverty.resetStyle(e.target);
                                                                            if (popup && map) {
                                                                                map.closePopup(popup);
                                                                                popup = null;
                                                                            }
                                                                        }

                                                                        function onEachFeature(feature, layer) {
                                                                            layer.on({
                                                                                mouseover: highlightFeature,
                                                                                mouseout: resetHighlight
                                                                            });
                                                                            layer.on('click', function (e) {
                                                                                callback(feature.properties, marginalpsedata,agencydata, findata, totaldata, afterschooldata, collegecareerdata, earlychildhooddata, mathsciencedata, parentmentorsdata, mentalhealthdata, physicalhealthdata, famvioldata, obesitydata, preventivecaredata, substanceabusedata);
                                                                            })
                                                                        }

                                                                        polygonsPoverty = L.geoJson(data, {
                                                                            style: style,
                                                                            onEachFeature: onEachFeature
                                                                        });
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
                                                                        map.removeLayer(polygonsHHDiplomaHigher);
                                                                        map.removeLayer(polygonsPSE);
                                                                        map.removeLayer(polygonsUnemployment);
                                                                        map.removeLayer(polygonsUninsured);
                                                                        map.removeLayer(polygonsHHMedian);
                                                                        map.removeLayer(polygonsChildhoodUninsured);
                                                                        map.addLayer(polygonsPoverty);
                                                                        if (workdev == true) {
                                                                            map.addLayer(workdevCentroidLayer);
                                                                            //workdev = false;
                                                                        }
                                                                        if (fincap == true) {
                                                                            map.addLayer(fincapCentroidLayer);
                                                                            //fincap = false;
                                                                        }
                                                                        if (total == true) {
                                                                            map.addLayer(totalCentroidLayer);
                                                                            //total = false;
                                                                        }
                                                                        if (afterschool == true) {
                                                                            map.addLayer(afterschoolCentroidLayer);
                                                                            //afterschool = false;
                                                                        }
                                                                        if (collegecareer == true) {
                                                                            map.addLayer(collegecareerCentroidLayer);
                                                                            //collegecareer = false;
                                                                        }
                                                                        if (earlychildhood == true) {
                                                                            map.addLayer(earlychildhoodCentroidLayer);
                                                                            //earlychildhood = false;
                                                                        }
                                                                        if (mathscience == true) {
                                                                            map.addLayer(mathscienceCentroidLayer);
                                                                            //mathscience = false;
                                                                        }
                                                                        if (parentmentors == true) {
                                                                            map.addLayer(parentmentorsCentroidLayer);
                                                                            //parentmentors = false;
                                                                        }
                                                                        if (mentalhealth == true) {
                                                                            map.addLayer(mentalhealthCentroidLayer);
                                                                            //mentalhealth = false;
                                                                        }
                                                                        if (physicalhealth == true) {
                                                                            map.addLayer(physicalhealthCentroidLayer);
                                                                            //physicalhealth = false;
                                                                        }
                                                                        if (famviol == true) {
                                                                            map.addLayer(familyviolenceCentroidLayer);
                                                                            //famviol = false;
                                                                        }
                                                                        if (obesity == true) {
                                                                            map.addLayer(obesityCentroidLayer);
                                                                            //obesity = false;
                                                                        }
                                                                        if (preventivecare == true) {
                                                                            map.addLayer(preventivecareCentroidLayer);
                                                                            // preventivecare = false;
                                                                        }
                                                                        if (substanceabuse == true) {
                                                                            map.addLayer(substanceabuseCentroidLayer);
                                                                            // substanceabuse = false;
                                                                        }
                                                                        if (pcount == true) {
                                                                            //add legend to map
                                                                            legendPoverty = L.control({
                                                                                position: 'bottomright'
                                                                            });

                                                                            // function for styling legend
                                                                            function getLegendColor(d) {

                                                                                return d > 35 ? '#d73027' : d > 30 ?
                                                                                        '#f46d43' : d > 25 ? '#fdae61' : d > 20 ? '#fee08b' : d > 15 ? '#d9ef8b' :
                                                                                                    d > 10 ? '#a6d96a' : d > 5 ?
                                                                                                            '#66bd63' : '#1a9850';
                                                                            } // end getColor function

                                                                            legendPoverty.onAdd = function (myLayer) {
                                                                                var div = L.DomUtil.create('div', 'info legend'),
                                                                                    grades = [5, 10, 15, 20, 25, 30, 35];
                                                                                labels = [];
                                                                                div.innerHTML += '<h6>Poverty Rate by %<b></b></h6>';
                                                                                // loop through our density intervals and generate a label with a colored square for each interval
                                                                                for (var i = 0; i < grades.length; i++) {
                                                                                    div.innerHTML += '<i style="background:' + getLegendColor(grades[i] + 1) + '"></i> ' + grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
                                                                                }
                                                                                pcount = false;
                                                                                return div;
                                                                            };

                                                                            map.addControl(legendPoverty);
                                                                        }

                                                                    }
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}



