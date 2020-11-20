$("input:submit").click(function(e){
    e.preventDefault();

    switch ($("input:radio:checked").val()) {
        case "contacts":
            $.ajax({
                url:"templates/contacts.php",
                dataType:"json",
                success:function(response){
                    $(".section").html(`<ul></ul>`);
                    response.forEach(contact => {
                        $("ul").append(`<li>
                            <p><strong>Prénom: </strong> ${contact.firstName}</p>
                            <p>Téléphone: ${contact.phone}</p>
                        </li>`)
                    });
                }
            })
            break;
        case "section":
            $.ajax({
                url:"templates/section.php",
                dataType:"html",
                success:function(response){
                    $(".section").html(response);
                }
            })
            break;
        case "films":
            $.ajax({
                url:"templates/films.php",
                dataType:"json",
                success:function(toto){
                    $(".section").html("");
                    toto.forEach(to => {
                        $(".section").append(`<div>
                            <img src='img/${to.cover}' alt='${to.title}'/>
                            <p>${to.title} | ${to.duration} min</p>
                        </div>`)
                        
                    });
                }
            })
            break;
    }
})