$(function(){
	var fr = $('<div/>');
	fr.append($('<div/>',{text:'France'}));
	fr.append($('<img/>',{src:'../static/flags/fr.gif'}));
	$('body').append(fr);

	var br = $('<div/>');
	br.append($('<div/>',{text:'Brazi'}));
	br.append($('<img/>',{src:'../static/flags/br.gif'}));
	$('body').append(br);

	var gr = $('<div/>');
	gr.append($('<div/>',{text:'Greece'}));
	gr.append($('<img/>',{src:'../static/flags/gr.gif'}));
	$('body').append(gr);
	
	$('img').css('border','solid 3px gray');
	$('img').css('width',200);
	$('div div').css('text-align','center');
	$('body').css('font-family','arial');
	$('body').css('font-size','x-large');

	$('body>div').css('width',206);
	$('body>div').css('border','2px solid black');
	$('body>div').css('padding','24px');
	$('body>div').css('display','inline-block');
	$('body>div').css('margin','1ex');


});
