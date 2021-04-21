import * as MODEL from "../model/model.js"
// var userVarName= "Variable";
//this is an example of a named function
function init(){

    let currentHeroImage= "home";
    $("nav a").click(function (e) {
        let btnId =this.id;
        let contentID = btnId + "Content";
        $(".hero").removeClass(`${currentHeroImage}-hero-image`).addClass(`${btnId}-hero-image`);
        currentHeroImage =btnId;
        $(".hero-content .page-name").html(btnId);
       
        MODEL.getPageContent(contentID);
        // MODEL.showName("Todd");
    });

}

// Document/window means HTML File
//this checks for all the elements to be read by the browser
$(document).ready(function(){
    init();
    MODEL.getPageContent("homeContent");
   
})
