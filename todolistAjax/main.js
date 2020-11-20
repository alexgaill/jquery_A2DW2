getTasks();

$("#sendData").click(function(e){
    e.preventDefault();
    let task = $("#addTask").serializeArray();

    $.ajax({
        url:"routeur.php?function=saveTask",
        dataType:"json",
        method:"POST",
        data:task,
        success:function(response){

        }
    })

    // $("input:text, [type=date]").val("");
    // $("input:not(:radio)").val("");
})

$("#deleteAll").click(function(e){
    e.preventDefault();
    $("ul").html("");
})

$("#deleteSome").click(function(e){
    e.preventDefault();
    $("#tasks :checked").parent().remove();
})

function getTasks(){
    $.ajax({
        url:"routeur.php?function=getTasks",
        dataType:"json",
        // data:{"function":"getTasks"},
        success: function(response){
            response.forEach(task => {
                $("ul").append("<li class='"+ task[2] +"'><input type='checkbox'><label>"+ task[0] +" | "+ task[3] +" | <p>"+ task[1] +"</p></label></li>")
            });
        }
    })
}