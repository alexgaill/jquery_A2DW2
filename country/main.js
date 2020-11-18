$.ajax({
    url: "https://restcountries.eu/rest/v2/lang/en",
    data:{
        fields:"name;currencies;population;capital"
    },
    success: function (response) {
        $("#nbEn").text(response.length);
        response.forEach(country => {
            $("#tableEn").append(`
            <tr>
                <td>${country.name}</td>
                <td>${country.capital}</td>
                <td>${country.currencies[0].name}</td>
                <td>${country.population}</td>
            </tr>
            `)
        });
    }
});

$.ajax({
    url: "https://restcountries.eu/rest/v2/lang/fr",
    data:{
        fields:"name;currencies;population;capital"
    },
    success: function (response) {
        $("#nbFr").text(response.length);
        response.forEach(country => {
            $("#tableFr").append(`
            <tr>
                <td>${country.name}</td>
                <td>${country.capital}</td>
                <td>${country.currencies[0].name}</td>
                <td>${country.population}</td>
            </tr>
            `)
        });
    }
});

$.ajax({
    url: "https://restcountries.eu/rest/v2/all",
    data:{fields:"name"},
    success:function(response){
        response.forEach(country => {
            $("select").append(`<option>${country.name}</option>`)
        });
    }
})

$("button").click(function(e){
    e.preventDefault();
    let valeur = $("select").val();
    $.ajax({
        url:`https://restcountries.eu/rest/v2/name/${valeur}?fullText=true`,
        data:{fields:"name;flag;population;region;capital;"}
    }).done(function(response){
        let country = response[0];
        $("#name").text(country.name);
        $("#capital").text(country.capital);
        $("#population").text(country.population);
        $("#region").text(country.region);
        $("img").attr({
            src:country.flag,
            alt:country.name
        })
    })
})