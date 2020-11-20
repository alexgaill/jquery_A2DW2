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
            getTasks()
        }
    })

    // $("input:text, [type=date]").val("");
    // $("input:not(:radio)").val("");
})

$("#deleteAll").click(function(e){
    e.preventDefault();
    $("ul").html("");
    $.ajax({
        url:"routeur.php?function=deleteAll"
    })
})

$("#deleteSome").click(function(e){
    e.preventDefault();
    let selected = $(":checkbox:checked").parent("li");
    let ids = [];
    for (const task of selected) {
        ids.push(task.dataset.id);
    }
    $.ajax({
        url:"routeur.php?function=deleteSome",
        data:{ids},
        dataType:"json",
        method:"POST"
    })
    getTasks();
})

function getTasks(){
    $("ul").html("")
    let i=0;
    $.ajax({
        url:"routeur.php?function=getTasks",
        dataType:"json",
        // data:{"function":"getTasks"},
        success: function(response){
            response.forEach(task => {
                $("ul").append("<li class='"+ task[2] +"' data-id="+ i +"><input type='checkbox'><label>"+ task[0] +" | "+ task[3] +" | <p>"+ task[1] +"</p></label></li>")
                i++;
            });
        }
    })
}