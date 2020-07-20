// Add event listener to entire ul
// Use on to ensure the new to do added will be worked on the listeners
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	// span is in li, use this.parent() to remove li
	$(this).parent().fadeOut(600,function(){
		$(this).remove();
	});
	event.stopPropagation();//prevent bubble up to parent elements
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");//clear text input area
		//append the new li to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-pencil").click(function(){
	$("input[type='text']").fadeToggle();
});