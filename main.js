$(document).ready(function(){
	$("#icon").click(function(){
	$("#topics").empty();
	var result =$("#num").val();
		$.ajax({
				url: 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' +result +'&callback=?',
				type:"GET",
				dataType:"json",
				success:function(data){
				console.log(data);
				title = data[0];
				$("#about").html("searching about" +" " + "<b>" + title + "</b>" +"....");
				$("#search_res").show();
				for(var i = 0; i< 10;i++) {
					$("#topics").append("<a href=" + data[3][i] + " target='blank'>" + data[1][i] + "</a><h4 style='text-indent:30px'>" + data[2][i] + "</h4><hr>");
				}
				}
			  });
	});
});	
 
