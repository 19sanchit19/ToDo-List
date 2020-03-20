//checking off todo by clicking
$('ul').on('click','li',function(){
	$(this).toggleClass('checked');
})
//click on X to delete ToDo
$("ul").on('click','span',function(e){
	$(this).parent().remove();		//fadeOut nhi chal rha
	e.stopPropagation();

})
$("input[type='text']").on("keypress",function(evt){
	if(evt.which===13){
		var newtoDo=$(this).val();
		$(this).val("");
		$('ul').append("<li>"+"<span>"+"<i class='fa fa-trash'></i>"+"</span>"+newtoDo+"</li>");
	}
})
$(".fa-plus").on("click",function(){
	$("input").toggle();
})