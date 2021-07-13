var search = document.getElementById("search");
var searchParamaters = document.getElementById("input");
var requestURL = `https://www.loc.gov/`;
var path = document.getElementById("path");






function locApi(){
    fetch(requestURL)
        .then(function(response){
            return response;
        })
        .then(function(data){
            console.log(data)
        })
    
}






search.addEventListener("click", function searchLocApi(event){
    event.preventDefault();
    document.location.replace(path.value + "/q=" + searchParamaters.value  + '&fo=json');

});