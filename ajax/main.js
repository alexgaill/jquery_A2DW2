// $.ajax({
//     url:"infos.txt",
//     method:"GET",
//     success:function(response){
//         console.log(response)
//     },
//     error:function(response){
//         console.log(response.statusText)
//     }
// })

// let toto =1;
// console.log("Toto est vide!")
// $.ajax({
//     url:"https://restcountries.eu/rest/v2/all",
//     // async:false
// }).done(function(response){
//     response.forEach(country => {
//         $("ul").append(`<li>${country.name}</li>`)
//     });
//     toto = response;
//     console.log("Toto dans l'ajax");
//     console.log(toto)
// }).fail(function(response){
//     console.log(response)
// })

// console.log("Toto après l'ajax");
// console.log(toto);

$.ajax({
    url: "getInfos.php",
    // dataType:'json',
    success: function (response) {
        let array = JSON.parse(response)
        console.log(array)
    }
});