$("#APIForm").submit(function(){
    event.preventDefault();
    var value = $("#searchForm").val();
    $.ajax({
        url: "http://maps.googleapis.com/maps/api/geocode/json?address="+value,
        dataType: "json",
        success:function(dataFromServer){
            console.log(dataFromServer);
            $("#dataContainer").empty();
            if(dataFromServer.status == "OK"){
                $("#dataContainer").append("<h2>"+value+"</h2>");
                $("#dataContainer").append("<span> Lat:"+dataFromServer.results[0].geometry.location.lat+" </span>");
                $("#dataContainer").append("<span> Lng:"+dataFromServer.results[0].geometry.location.lng+" </span>");
            } else {
                $("#dataContainer").append("<h3>Cannot find location "+value+"</h3>");
            }
        },
        error:function(error){
            console.log(error);
            console.log("something went wrong");
        }
    })





});
