// Check off specific todos by clicking on x
$("ul").on("click","li",function(){
	$(this).toggleClass("liSelected");

})
$("ul").on("click",".fa-trash",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).parent().remove();
	});
	event.stopPropagation();
})
// $("ul").on("click",".fa-pencil",function(event){
// 	console.log(this.innerHtml);
// 	//
// 	var oldTodo = $(this).parent().parent().text();
// 	$(this).parent().parent().replaceWith("<input class='in-edit-text' type='text' name='edit' value=" + oldTodo + ">").focus();
	
// 	console.log(oldTodo);
// 	event.stopPropagation();
// })
/*$('#todo-list').on('keypress', '.in-edit-text', (function(event)

    {
        if (event.which === 13)

        {
            $(this).replaceWith($('<span class="text">' + $(this).val() + '</span>'));

        }

        if (event.which == 27) {
            $('.in-edit-text').remove();
        }

    }));*/
$("input[name='todo']").on("keypress",function(event){
	// check for enter pressed
	if (event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span><span><i class='fa fa-pencil' aria-hidden='true'></i></span> "+ todoText +"</li>" );
	}
})
$("h1").on("click","span",function(){
	//console.log("plus sign clicked")
	// toggle input field
	$("input[type='text']").fadeToggle(500)
})