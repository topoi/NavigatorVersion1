   
$("#title").hide()
$("#objectsl").hide()
/*
$("#main_content_orig").appendTo("#abc");
alphabet_orig = ['B2', 'C2', 'E2', 'G2', 'J2', 'K2', 'M2', 'N2', 'O2', 'P2', 'R2', 'V2', 'W2']
$.each(alphabet_orig, function(index) {
    $("#main_content_orig ul").append('<li id="Beta'+alphabet_orig[index].replace(/\d+/g, '')+'" class="limenu" style="margin-right:30px"><a id="beta'+alphabet_orig[index].replace(/\d+/g, '')+'" href="#" style="color:black; font-size:15px">'+alphabet_orig[index].replace(/\d+/g, '')+'</a></li>');
	
})*/
/*$("#main_content_engl").appendTo("#abc");
alphabet_engl = ['A1', 'B1', 'D1', 'E1', 'G1', 'H1', 'I1', 'K1', 'M1', 'N1', 'O1', 'P1','Q1','R1','S1','T1', 'U1', 'W1', 'Y1' ]
alphabet_orig = ['B2', 'C2', 'E2', 'G2', 'J2', 'K2', 'M2', 'N2', 'O2', 'P2', 'R2', 'V2', 'W2']
$.each(alphabet_engl, function(index) {
    $("#main_content_engl ul").append('<li id="Alpha'+alphabet_engl[index].replace(/\d+/g, '')+'" class="limenu"><a id="alpha'+alphabet_engl[index].replace(/\d+/g, '')+'" href="#" style="color:black; font-size:15px">'+alphabet_engl[index].replace(/\d+/g, '')+'</a></li>');
})

$.each(alphabet_orig, function(index) {
    $("#main_content_orig ul").append('<li id="Beta'+alphabet_orig[index].replace(/\d+/g, '')+'" class="limenu" style="margin-right:30px"><a id="beta'+alphabet_orig[index].replace(/\d+/g, '')+'" href="#" style="color:black; font-size:15px">'+alphabet_orig[index].replace(/\d+/g, '')+'</a></li>');
	
})
*/

function BasicMenu(var1, par1="", par2="", par3="") {
    obj=par1;
    
    // NAME ENGLISH
    /*$.each(alphabet_engl, function(index) {
	
	c=$("<div class=\"form-group\" id="+obj[alphabet_engl[index]][1]+"><div id="+obj[alphabet_engl[index]][2]+"><h6 id="+obj[alphabet_engl[index]][3]+"></h6></div></div>")
	var data=obj[alphabet_engl[index]][0];
	var s = $("<select id="+obj[alphabet_engl[index]][5]+" class=\"form-control\" multiple/>");
	for(var val in data) {
	    $("<option/>", {value: data[val], text: data[val]}).appendTo(s);
	}
	c.appendTo("#container")
	s.appendTo(var1);
    });
    */
    
    // NAME ENGLISH
    c=$("<div class=\"form-group\" id="+obj["english"][1]+"><div id="+obj["english"][2]+"><h6 id="+obj["english"][3]+"></h6></div></div>")
    var data=obj["english"][0];
    var s = $("<select id="+obj["english"][5]+" class=\"form-control\" multiple/>");
    for(var val in data) {
	$("<option/>", {value: data[val], text: data[val]}).appendTo(s);
    }
    c.appendTo("#container")
    s.appendTo(var1);
    
    // GENDER
    c=$("<div class=\"form-group\" id="+obj["gender"][1]+"><div id="+obj["gender"][2]+"><h6 id="+obj["gender"][3]+"></h6></div></div>")
    var data=obj["gender"][0];
    var s = $("<select id="+obj["gender"][5]+" class=\"form-control\" multiple/>");
    for(var val in data) {
	$("<option/>", {value: data[val], text: data[val]}).appendTo(s);
    }
    c.appendTo("#container")
    s.appendTo(var1);
    
    // NAME ORIGINAL
    c=$("<div class=\"form-group\" id="+obj["original"][1]+"><div id="+obj["original"][2]+"><h6 id="+obj["original"][3]+"></h6></div></div>")
    var data=obj["original"][0];
    var s = $("<select id="+obj["original"][5]+" class=\"form-control\" multiple/>");
    for(var val in data) {
	$("<option/>", {value: data[val], text: data[val]}).appendTo(s);

    }
    
    c.appendTo("#container")
    s.appendTo(var1);

    /*$.each(alphabet_orig, function(index) {
	c=$("<div class=\"form-group\" id="+obj[alphabet_orig[index]][1]+"><div id="+obj[alphabet_orig[index]][2]+"><h6 id="+obj[alphabet_orig[index]][3]+"></h6></div></div>")
	var data=obj[alphabet_orig[index]][0];
	var s = $("<select id="+obj[alphabet_orig[index]][5]+" class=\"form-control\" multiple/>");
	for(var val in data) {
	    $("<option/>", {value: data[val], text: data[val]}).appendTo(s);
	}
	c.appendTo("#container")
	s.appendTo(var1);
    });*/
    
    $("#selectionresult").css({"opacity":"1", "position":"absolute", "right":"50%"})
    $("#selectionresult").appendTo("#container")

};
    
function DropdownMenu(var1, var2, par1)
	{
            obj=par1;
	    
	    $("div.dropdown-menu.dropdown-menu-right.show" ).appendTo("#main_container") 
	    /*
	    $.each(alphabet_engl, function( index) {
		$(obj[alphabet_engl[index]][7]+" .input-group .form-control").attr("placeholder", obj[alphabet_engl[index]][4])
		$(".form-group#"+obj[alphabet_engl[index]][1]).show()
	    });*/
	    /*
	    $.each(alphabet_orig, function( index) {
	
		$(obj[alphabet_orig[index]][7]+" .input-group .form-control").attr("placeholder", obj[alphabet_orig[index]][4])
		$(".form-group#"+obj[alphabet_orig[index]][1]).show()
		       });*/
	    
	    $("#msall").hide()
	    $(var1).css("opacity", "1")
	    
	    $("#moreoptions").css("opacity", "0")
	    w2ui["layout"].content('right', var2);
   
	};

    
//var currentAlpha="";
//var currentBeta="";

function SelectionMenu(var1,par1,par2)
    {
	obj=par1;
	$("#selectionresulttext,#selectionresult").css("opacity", "1")
	$("#selectionresulttext").appendTo("#header")
	
	$( "<p id='personen' style='opacity:0.3; font-size:18px;'>Persons (english):<br></p>" ).appendTo("#header")
	$( "<p id='genders' style='opacity:0.3; font-size:18px;'><br>Gender:<br></p>" ).appendTo("#header")
	$( "<p id='originalstext' style='opacity:0.3; font-size:18px;'>Persons (original):<br></p>").appendTo("#header")
	$( "<p id='originals' style='opacity:0.3; font-size:18px;'><br><br></p>" ).appendTo("#header")
	
	/*
        uniquepersonlist_engl=[]
		       $.each(alphabet_engl, function(index) {	       
        uniquepersonlist_engl.push(persons[3].english[alphabet_engl[index].replace(/\d+/g, '')])
		       })
	uniquepersonlist_orig=[]
		       $.each(alphabet_orig, function(index) {	       
        uniquepersonlist_orig.push(persons[3].name[alphabet_orig[index].replace(/\d+/g, '')])
		       })
		       */
	
        $("#container" ).on("click", ".dropdown-item", function () {

	    /*
	    if (currentAlpha == "") {
		currentAlpha="A"
	    }

	    if (currentBeta == "") {
		currentBeta="B"
	    }*/
	    
	    var temp=$( ".dropdown-item.active" ).closest(".dropdown.show").attr("id")
	    $("#selectedvalues").css("opacity","1")
	    
	    d=$( ".mt-2.mb-3" ).find('span').text()
            f=d.split('[X]').filter(function(v){return v!==''});
	  
	    $( ".mt-2.mb-3" ).hide()
	    selvalues = new Object()
            $("#personen").find('strong').remove()
            $("#genders").find('strong').remove()
	    $("#originals").find('strong').remove()
	    
            $.each(f, function(index) {
		/*
		if($.inArray($.trim(f[index]), uniquepersonlist_engl.flat()) != -1)
		{
		       
		    $("#personen").css("opacity", "1")
		    $("#personen").append( "<strong>  "+f[index]+"     </strong>" );
		    
		    var seen = {};
		    $('#personen').find('strong').each(function() {
			var txt = $(this).text();
			if (seen[txt])
			    $(this).remove();
		       else
		       seen[txt] = true;
		       });
		       
		       selvalues[$.trim(f[index])]="name_translit";
		       }*/



		if($.inArray($.trim(f[index]), persons[3].english) != -1)
		       
		{
		    
		    $( "#selectrules1" ).css("opacity","1")
		    $( ".mt-2.mb-3" ).hide()  
		    $("#personen").css("opacity", "1")
	       	    $( "#personen" ).append( "<strong>  "+f[index]+"     </strong>" );
		    
		    selvalues[$.trim(f[index])]="name_translit"
		}
		       
		if($.inArray($.trim(f[index]), persons[3].gender) != -1)
		    
		{
		    
		    $( "#selectrules1" ).css("opacity","1")
		    $( ".mt-2.mb-3" ).hide()  
		    $("#genders").css("opacity", "1")
	       	    $( "#genders" ).append( "<strong>  "+f[index]+"     </strong>" );
		    selvalues[$.trim(f[index])]="gender"
		}
		
		if($.inArray($.trim(f[index]), persons[3].name) != -1)
		       
		{
		    
		    $( "#selectrules1" ).css("opacity","1")
		    $( ".mt-2.mb-3" ).hide()  
		    $("#originals").css("opacity", "1")
		    $("#originalstext").css("opacity", "1")
	       	    $( "#originals" ).append( "<strong>  "+f[index]+"     </strong>" );
		    
		    selvalues[$.trim(f[index])]="name"
		}

		
		/*
		if($.inArray($.trim(f[index]), uniquepersonlist_orig.flat()) != -1)
		{
		    
		    $("#originals").css("opacity", "1")
		    $("#originals").append( "<strong>  "+f[index]+"     </strong>" );
		    
		    var seen = {};
		    $('#originals').find('strong').each(function() {
			var txt = $(this).text();
			if (seen[txt])
			    $(this).remove();
			else
			    seen[txt] = true;
		    });
		    
		    selvalues[$.trim(f[index])]="name";
		}*/

	    })
		       
	});
	//currentAlpha=""
	//currentBeta=""
 };

function getDropdownPersons()
{

    $('<span class="radio" style="display:inline; position: absolute;  top:9%; margin-left:10px; font-size:30px;cursor:pointer; opacity:0" id="textfieldsearch"><h4><button id="textfieldsearch" class="btn btn-primary dropdown" style="font-size:0.75rem;">Show results</button></h4></span>').appendTo("#upper")
    //Personenanzeige (englisch)
    /*$("[id^=Alpha]").css("background-color","white")
    
    currentAlpha="A";
    containerlistengl=["#bsd1-container"]
    $("#main_content_engl").on("click", "[id^=alpha]", function () {
	
	$("[id^=alpha]").css("color","black")
	$("[id^=alpha]").css("font-size","15px")
        currentAlpha=$(this).attr("id").replace('alpha','').replace(/\d+/g, '');
	
		       
	$("#"+$(this).attr("id")).css("color","#007bff")
	$("#"+$(this).attr("id")).css("font-size","18px")
	var data=[persons[3].english[$(this).text()][0]];
	
        str=containerlistengl.pop()
	$(str).hide()
	
        $(obj[$(this).text()+"1"][7]).show()
	
	$("#main_content_engl").show();
	
        $(obj[$(this).text()+"1"][7]).find(".dropdown-menu.dropdown-menu-right").css({"top":"0","right":"-20px","position":"absolute"}).show();
	
	containerlistengl.push(obj[$(this).text()+"1"][7]) 
	return currentAlpha;
    });*/
    /*
    //Personenanzeige (original name)
    $("[id^=Beta]").css("background-color","white")
    currentBeta="B";
    containerlistorig=["#bsd21-container"]
    $("#main_content_orig").on("click", "[id^=beta]", function () {
      
	$("[id^=beta]").css("color","black")
	$("[id^=beta]").css("font-size","15px")
        currentBeta=$(this).attr("id").replace('beta','').replace(/\d+/g, '');
	$("#"+$(this).attr("id")).css("color","#007bff")
	$("#"+$(this).attr("id")).css("font-size","18px")
	var data=[persons[3].name[$(this).text()][0]];
	str=containerlistorig.pop()
	$(str).hide()
        $(obj[$(this).text()+"2"][7]).show()

	$("#main_content_orig").show();
	
        $(obj[$(this).text()+"2"][7]).find(".dropdown-menu.dropdown-menu-right").css({"top":"0","right":"-20px","position":"absolute"}).show();
	
        containerlistorig.push(obj[$(this).text()+"2"][7]) 
	return currentBeta;
    });
    */
    $("#persname").css("opacity","1")
    $(".radio").css("opacity","1")
    var myObject = new Object();
    
    english_container=[]
    gender_container=[]
    name_container=[]
    /*
    $.each(alphabet_engl, function(index) {
	myObject[alphabet_engl[index]] = [persons[3].english[alphabet_engl[index].replace(/\d+/g, '')], "pers_engl", "pers", "engl_name", "Select english name beginning with "+alphabet_engl[index].replace(/\d+/g, ''),alphabet_engl[index] , "#"+alphabet_engl[index],"#bsd"+String(index+1)+"-container", "name_translit","english"];
	english_container.push("bsd"+String(index+1)+"-button") 
    })
    var i=Object.keys(myObject).length
    */
    
    myObject["english"] = [persons[3].english, "pers_engl", "pers", "engl_name", "Select letter for english name" , "english", "#english","#bsd1-container", "name_translit","english"];
    english_container.push("bsd1-button") 
    myObject["gender"]=[persons[3].gender, "pers_gender", "pers", "gender", "Select Gender", "gender","#gender", "#bsd2-container", "gender","gender"]
    gender_container.push("bsd2-button") 
    myObject["original"]=[persons[3].name, "pers_name", "pers", "orig_name", "Select letter for original name ", "original", "#original", "#bsd3-container", "name","original"];
    name_container.push("bsd3-button")
    
    /*var i=Object.keys(myObject).length
    $.each(alphabet_orig, function(index) {
	myObject[alphabet_orig[index]]=[persons[3].name[alphabet_orig[index].replace(/\d+/g, '')], "pers_name", "pers", "orig_name", "Select original name beginning with "+alphabet_orig[index].replace(/\d+/g, ''), alphabet_orig[index], "#"+alphabet_orig[index], "#bsd"+String(index+i+1)+"-container", "name","original"];
	name_container.push("bsd"+String(index+i+1)+"-button")
    })
    */

    
    var vars = JSON.stringify(myObject);
    var obj = jQuery.parseJSON( vars );
    console.log(obj) 
    
    $.getScript( "dist/bootstrap-select-dropdown.js", function() { 
	/*$.each(alphabet_engl, function(index) {
	    $(obj[alphabet_engl[index]][6]).selectDropdown();
	    $(obj[alphabet_engl[index]][7]+" .input-group .form-control").attr("placeholder", obj[alphabet_engl[index]][4]);
	    $(obj[alphabet_engl[index]][7]).find('.dropdown-menu').css("z-index","12000")
	    $(obj[alphabet_engl[index]][7]).css("margin-bottom","22px")
	    if (index==0){$(obj[alphabet_engl[index]][7]).show()}
	    else {$(obj[alphabet_engl[index]][7]).hide()}
	    });*/

    	$(obj["english"][6]).selectDropdown();
	$(obj["english"][7]+" .input-group .form-control").attr("placeholder", obj["english"][4]);
	$(obj["english"][7]).find('.dropdown-menu').css("z-index","12000")
	$(obj["english"][7]).css("margin-bottom","22px")
	$(obj["english"][7]).find(".dropdown-item:contains('Select all')").css("font-family","italic")
	$(obj["english"][7]).find(".dropdown-item:contains('Deselect all')").css("font-family","italic")
	$(obj["english"][7]).find(".dropdown-item:contains('Show selected')").css("font-family","italic")
	$(obj["english"][7]).find(".dropdown-item:contains('Clear input field')").css("font-family","italic")
	
	$(obj["gender"][6]).selectDropdown();
	$(obj["gender"][7]+" .input-group .form-control").attr("placeholder", obj["gender"][4]);
	$(obj["gender"][7]).find('.dropdown-menu').css("z-index","12000")
	$(obj["gender"][7]).css("margin-bottom","22px")
	$(obj["gender"][7]).find(".dropdown-item:contains('Select all')").css("font-family","italic")
	$(obj["gender"][7]).find(".dropdown-item:contains('Deselect all')").css("font-family","italic")
	$(obj["gender"][7]).find(".dropdown-item:contains('Show selected')").css("font-family","italic")
	$(obj["gender"][7]).find(".dropdown-item:contains('Clear input field')").css("font-family","italic")

	$(obj["original"][6]).selectDropdown();
	$(obj["original"][7]+" .input-group .form-control").attr("placeholder", obj["original"][4]);
	$(obj["original"][7]).find('.dropdown-menu').css("z-index","12000")
	$(obj["original"][7]).css("margin-bottom","22px")
	$(obj["original"][7]).find(".dropdown-item").css("font-family","aegypt")
	$(obj["original"][7]).find(".dropdown-item:contains('Select all')").css("font-family","italic")
	$(obj["original"][7]).find(".dropdown-item:contains('Deselect all')").css("font-family","italic")
	$(obj["original"][7]).find(".dropdown-item:contains('Show selected')").css("font-family","italic")
	$(obj["original"][7]).find(".dropdown-item:contains('Clear input field')").css("font-family","italic")
	$("#originals").css("font-family","aegypt")
	
	
	/*$.each(alphabet_orig, function(index) {
	    $(obj[alphabet_orig[index]][6]).selectDropdown();
	    $(obj[alphabet_orig[index]][7]+" .input-group .form-control").attr("placeholder", obj[alphabet_orig[index]][4]);
	    $(obj[alphabet_orig[index]][7]).find('.dropdown-menu').css("z-index","12000")
	    $(obj[alphabet_orig[index]][7]).css("margin-bottom","22px")
	    if (index==0){$(obj[alphabet_orig[index]][7]).show()}
	    else {$(obj[alphabet_orig[index]][7]).hide()}
	});*/

    });
    
    BasicMenu("#pers", par1=obj, par2=0, par3="");
    DropdownMenu("#pers", w2ui.grid1, par1=obj);
    SelectionMenu("#pers", par1=obj, "grid1");

    /*
    $("#container").on("click","[id*=-button]", function() {

    //$("#container").on("click","#bsd1-button", function() {
	
        $("[id*=-button]").css("opacity","0.5")
	$("#"+$(this).attr("id")).css("opacity","1")
	if($.inArray($(this).attr("id"), english_container) != -1) {
	    
	    $("#main_content_engl").show()
	    //$("#main_content_orig").hide()
	    
	    v="#"+$(this).attr("id")
	    $("[id*=-button]").find(".dropdown-menu.dropdown-menu-right").hide();
	    $(v).find(".dropdown-menu.dropdown-menu-right").show();
	}
            

       
	if($.inArray($(this).attr("id"), gender_container) != -1) {
	    
		$("#main_content_orig").hide();
		$("#main_content_engl").hide();
		$("[id*=-button]").find(".dropdown-menu.dropdown-menu-right").hide();
		$("#bsd2-button").css({position: 'relative'});
      		$("#bsd2-button").find(".dropdown-menu.dropdown-menu-right").css({"top": "210px","left":"165px","width":"100px","position":"absolute"})
		$("#bsd2-button").find(".dropdown-menu.dropdown-menu-right.show").css({"top": "210px","left":"165px","width":"100px","position":"absolute"})
		$("#bsd2-button").find(".dropdown-menu.dropdown-menu-right").show()
	}
	    
	if($.inArray($(this).attr("id"), name_container) != -1) {


	    $("#main_content_orig").show()
	    v="#"+$(this).attr("id")
	    $("[id*=-button]").find(".dropdown-menu.dropdown-menu-right").hide();
	    $(v).find(".dropdown-menu.dropdown-menu-right").show();
		    
	}
		
    });*/

    

 // initalize grid
    initdata=[]
    $.each(persons[2], function( index, value_pers ) {
	initdata.push(parseInt(value_pers.recid))
    });
    
    initlist=[]
    $.each(initdata, function(index) {
	initlist.push(w2ui['grid1'].get(initdata[index])); 
    })
    
    $("#textfieldsearch").on("click",  function () {
	$('#layout').show()
	w2ui["grid1"].clear();
	w2ui["grid1"].add(initlist);
	$("#back").css("opacity", "1")
	v=$("#searchfields").val()
	g=w2ui["grid1"].getSearch()
	fieldsearch= [];
	$.each(g, function(index) {
	    fieldsearch.push({ field: g[index], value: v, operator: $('input:radio[name=query]:checked').val()  })
	})
	w2ui["grid1"].search(fieldsearch, 'OR');
	currentIds=w2ui["grid1"].last.searchIds;
	$( ".container" ).hide();
	w2ui["layout"].show('right', w2ui.grid1);
	
    })

    // SEARCH GRID
    function select(values="",par1="") {
	$('#layout').show()
	w2ui['layout'].hide('main', window.instant)
	w2ui['layout'].show('right', window.instant)
	w2ui[par1].clear();
	w2ui[par1].add(initlist);
	$("#back").css("opacity", "1")
	$("#upper").addClass(".mt-2 mb-3")
	var search_name_engl=[]
	var search_gender=[]
	var search_name_orig=[]
	
    $.each(values, function(index)
	   {
	       if (values[index]=="name_translit") {
		   search_name_engl.push({ field: values[index], value: String(index), operator: "is"  })}
	       if (values[index]=="gender") {
		   search_gender.push({ field: values[index], value: String(index), operator: "is"})}
	      if (values[index]=="name") {
		   search_name_orig.push({ field: values[index], value: String(index), operator: "is"})}
	       
	   });
    
	$( ".container" ).hide();
	
	var currentIds1=[]
	var currentIds2=[]
        var currentIds3=[]
	
	
	if (search_name_engl.length>0) {
	 
	    w2ui[par1].search(search_name_engl, 'OR');
	    currentIds1=w2ui[par1].last.searchIds;
	    
	}
	else {
	    currentIds1=initdata
	}
	if (search_gender.length>0) {
	w2ui[par1].search(search_gender, 'OR');
	currentIds2=w2ui[par1].last.searchIds;
	}
	else {
	    currentIds2=initdata
	}
	
	if (search_name_orig.length>0) {
            w2ui[par1].search(search_name_orig, 'OR');
	    currentIds3=w2ui[par1].last.searchIds;
	}
	else {
	    currentIds3=initdata
	}
  
	// AND SELECTION
	
	var common=""
    
	temp = $.grep(currentIds1, function(element) {
	    return $.inArray(element, currentIds2 ) !== -1;
	});

	common = $.grep(currentIds3, function(element) {
	    return $.inArray(element, temp ) !== -1;
	});

	
   // };

        var tempresult = [];
	$.each(common, function(index) {
	    tempresult.push(w2ui[par1].get(common[index])); 
	});

        currentIds=common; //for onClick in grid.js!!
	w2ui[par1].clear();
	w2ui[par1].add(tempresult);

}

    //########################
    // SHOW SELECTION RESULT #
    //########################
    
    $("#selectionresult").on("click",  function () {

    $.fn.ignore = function(sel){
	return this.clone().find(sel||">*").remove().end();
    };
    file=($( ".mt-2.mb-3" ).find( "span" ).ignore("a").text());
    collection = file.split(' ');
    
    $("#w2ui-grid-box").css("height","70%")
    $("#layout_layout_panel_main").css("height","100%")
    $(".w2ui-scroll-wrapper").css("width","95%")
    select(values=selvalues,par1="grid1")
	
})
    
}
    
