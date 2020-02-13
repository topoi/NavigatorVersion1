   
 
function BasicMenu3(var1, par1="", par2="", par3="") {
    obj=par1;
    
    // NAME ENGLISH
    $.each(alphabet_engl, function(index) {
	
	c=$("<div class=\"form-group\" id="+obj[alphabet_engl[index]][1]+"><div id="+obj[alphabet_engl[index]][2]+"><h6 id="+obj[alphabet_engl[index]][3]+"></h6></div></div>")
	var data=obj[alphabet_engl[index]][0];
	var s = $("<select id="+obj[alphabet_engl[index]][5]+" class=\"form-control\" multiple/>");
	for(var val in data) {
	    $("<option/>", {value: data[val], text: data[val]}).appendTo(s);
	}
	c.appendTo("#container")
	s.appendTo(var1);
    });

    
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
    $.each(alphabet_orig, function(index) {
	
	c=$("<div class=\"form-group\" id="+obj[alphabet_orig[index]][1]+"><div id="+obj[alphabet_orig[index]][2]+"><h6 id="+obj[alphabet_orig[index]][3]+"></h6></div></div>")
	var data=obj[alphabet_orig[index]][0];
	var s = $("<select id="+obj[alphabet_orig[index]][5]+" class=\"form-control\" multiple/>");
	for(var val in data) {
	    $("<option/>", {value: data[val], text: data[val]}).appendTo(s);
	}
	c.appendTo("#container")
	s.appendTo(var1);
    });      
   
  

};
    
    function DropdownMenu3(var1, var2, par1)
	{
            obj=par1;
	    
	    $("div.dropdown-menu.dropdown-menu-right.show" ).appendTo("#main_container") 
	    
	    $.each(alphabet_engl, function( index) {
		$(obj[alphabet_engl[index]][7]+" .input-group .form-control").attr("placeholder", obj[alphabet_engl[index]][4])
		$(".form-group#"+obj[alphabet_engl[index]][1]).show()
	    });
	  
	    $.each(alphabet_orig, function( index) {
		$(obj[alphabet_orig[index]][7]+" .input-group .form-control").attr("placeholder", obj[alphabet_orig[index]][4])
		$(".form-group#"+obj[alphabet_orig[index]][1]).show()
		       });
	    
	    $("#msall").hide()
	    $(var1).css("opacity", "1")
	    
	    $("#moreoptions").css("opacity", "0")
	    w2ui.layout.content('main', var2);
   
	};

    
var currentAlpha="";
var currentBeta="";

    function SelectionMenu3(var1,par1,par2)
    {
	obj=par1;
	$("#selectionresult").appendTo("#header")
	$( "<p id='personen' style='opacity:0.3; font-size:18px;'>Persons (english):<br></p>" ).appendTo("#header")
	$( "<p id='genders' style='opacity:0.3; font-size:18px;'><br>Gender:<br></p>" ).appendTo("#header")
	$( "<p id='originals' style='opacity:0.3; font-size:18px;'><br>Persons (original):<br></p>" ).appendTo("#header")
	$("#selectionresult").css("opacity", "1")
	$("#selectionresult").appendTo("#currentselection")
	$("<div class='personality'></div>")
        $( ".mt-2.mb-3" ).clone().appendTo( ".personality" );
        uniquepersonlist_engl=[]
		       $.each(alphabet_engl, function(index) {	       
        uniquepersonlist_engl.push(persons[3].english[alphabet_engl[index].replace(/\d+/g, '')])
		       })
	uniquepersonlist_orig=[]
		       $.each(alphabet_orig, function(index) {	       
        uniquepersonlist_orig.push(persons[3].name[alphabet_orig[index].replace(/\d+/g, '')])
		       })
		       
        $("#container" ).on("click", ".dropdown-item", function () {

	   
	    if (currentAlpha == "") {
		currentAlpha="A"
	    }

	    if (currentBeta == "") {
		currentBeta="B"
	    }
	    
	    var temp=$( ".dropdown-item.active" ).closest(".dropdown.show").attr("id")
	    $("#selectedvalues").css("opacity","1")
	    $("#selectionresult").css("opacity", "1")
	    d=$( ".mt-2.mb-3" ).find('span').text()
            f=d.split('[X]').filter(function(v){return v!==''});
	  
	    $( ".mt-2.mb-3" ).hide()  

            selvalues = new Object()
            $("#personen").find('strong').remove()
            $("#genders").find('strong').remove()
	    
	    $("#originals").find('strong').remove()
	    
            $.each(f, function(index) {

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
		       }
		       
		       if($.inArray($.trim(f[index]), persons[3].gender) != -1)
		       
		       {
		       
		       $( "#selectrules1" ).css("opacity","1")
	
		       $( ".mt-2.mb-3" ).hide()  
		       $("#genders").css("opacity", "1")
	       	       $( "#genders" ).append( "<strong>  "+f[index]+"     </strong>" );
		       
		       selvalues[$.trim(f[index])]="gender"
		       }

		initid=[]
		$.each(persons[2], function( index, value_pers ) {
		    initid.push(value_pers.id_persons)
		});
		
		
		       if($.inArray($.trim(f[index]),initid ) != -1)
		       {
		       
		       $( "#selectrules2" ).css("opacity","1")
		       $("#ids").css("opacity", "1")
		       $("#ids").append( "<strong>  "+f[index]+"     </strong>" );

		       var seen = {};
		       $('#ids').find('strong').each(function() {
		       var txt = $(this).text();
		       if (seen[txt])
		       $(this).remove();
		       else
		       seen[txt] = true;
		       });
		       
		       selvalues[$.trim(f[index])]="id_persons";
		       }

		
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
		}

	    })
		       
	});
	currentAlpha=""
	currentBeta=""
 };

function getDropdownTitles()
{
    $('<span class="radio" style="display:inline; position: absolute;  top:9%; margin-left:10px; font-size:30px;cursor:pointer; opacity:0" id="textfieldsearch"><h4><button id="textfieldsearch" class="btn btn-primary dropdown-toggle">Show result</button></h4></span>').appendTo("#upper")
       
    //Personenanzeige (englisch)
    $("[id^=Alpha]").css("background-color","white")
    
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
	$("#main_content_engl").appendTo("#container")
	$("#main_content_engl").show();
	
        $(obj[$(this).text()+"1"][7]).find(".dropdown-menu.dropdown-menu-right").css({"top":"0","right":"-20px","position":"absolute"}).show();
	
	containerlistengl.push(obj[$(this).text()+"1"][7]) 
	return currentAlpha;
    });

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
	$("#main_content_orig").appendTo("#container")
	$("#main_content_orig").show();
	
        $(obj[$(this).text()+"2"][7]).find(".dropdown-menu.dropdown-menu-right").css({"top":"0","right":"-20px","position":"absolute"}).show();
	
        containerlistorig.push(obj[$(this).text()+"2"][7]) 
	return currentBeta;
    });
    
    $("#title").css("opacity","1")
    $(".radio").css("opacity","1")
    var myObject = new Object();
    
    english_container=[]
    gender_container=[]
    name_container=[]

    $.each(alphabet_engl, function(index) {
	myObject[alphabet_engl[index]] = [persons[3].english[alphabet_engl[index].replace(/\d+/g, '')], "pers_engl", "pers", "engl_name", "Select english name beginning with "+alphabet_engl[index].replace(/\d+/g, ''),alphabet_engl[index] , "#"+alphabet_engl[index],"#bsd"+String(index+1)+"-container", "name_translit","english"];
	english_container.push("bsd"+String(index+1)+"-button") 
    })
    var i=Object.keys(myObject).length
    myObject["gender"]=[persons[3].gender, "pers_gender", "pers", "gender", "Select Gender", "gender","#gender", "#bsd"+(i+1)+"-container", "gender","gender"]
    gender_container.push("bsd"+(i+1)+"-button") 
   
    var i=Object.keys(myObject).length
    $.each(alphabet_orig, function(index) {
	myObject[alphabet_orig[index]]=[persons[3].name[alphabet_orig[index].replace(/\d+/g, '')], "pers_name", "pers", "orig_name", "Select original name beginning with "+alphabet_orig[index].replace(/\d+/g, ''), alphabet_orig[index], "#"+alphabet_orig[index], "#bsd"+String(index+i+1)+"-container", "name","original"];
	name_container.push("bsd"+String(index+i+1)+"-button")
    })
  
    var vars = JSON.stringify(myObject);
    var obj = jQuery.parseJSON( vars );
    console.log(obj) 
    
    $.getScript( "dist/bootstrap-select-dropdown.js", function() { 
	$.each(alphabet_engl, function(index) {
	    $(obj[alphabet_engl[index]][6]).selectDropdown();
	    $(obj[alphabet_engl[index]][7]+" .input-group .form-control").attr("placeholder", obj[alphabet_engl[index]][4]);
	    $(obj[alphabet_engl[index]][7]).find('.dropdown-menu').css("z-index","12000")
	    $(obj[alphabet_engl[index]][7]).css("margin-bottom","22px")
	    if (index==0){$(obj[alphabet_engl[index]][7]).show()}
	    else {$(obj[alphabet_engl[index]][7]).hide()}
	});
	
	$(obj["gender"][6]).selectDropdown();
	$(obj["gender"][7]+" .input-group .form-control").attr("placeholder", obj["gender"][4]);
	$(obj["gender"][7]).find('.dropdown-menu').css("z-index","12000")
	$(obj["gender"][7]).css("margin-bottom","22px")

	$.each(alphabet_orig, function(index) {
	    $(obj[alphabet_orig[index]][6]).selectDropdown();
	    $(obj[alphabet_orig[index]][7]+" .input-group .form-control").attr("placeholder", obj[alphabet_orig[index]][4]);
	    $(obj[alphabet_orig[index]][7]).find('.dropdown-menu').css("z-index","12000")
	    $(obj[alphabet_orig[index]][7]).css("margin-bottom","22px")
	    if (index==0){$(obj[alphabet_orig[index]][7]).show()}
	    else {$(obj[alphabet_orig[index]][7]).hide()}
	});

    });
    
    BasicMenu3("#pers", par1=obj, par2=0, par3="");
    DropdownMenu3("#pers", w2ui.grid3, par1=obj);
    SelectionMenu3("#pers", par1=obj, "grid3");
    $(".form-control").css({"border":"0px","font-size":"12px"})
    
    
        $("#container").on("click","[id*=-button]", function() {
         

	    if($.inArray($(this).attr("id"), english_container) != -1) {
		$("#main_content_engl").appendTo("#container");
		$("#main_content_engl").show();
		$("#main_content_id").hide();
		$("#main_content_orig").hide();
		v="#"+$(this).attr("id")
	    	
		$("[id*=-button]").find(".dropdown-menu.dropdown-menu-right").hide();
		$(v).find(".dropdown-menu.dropdown-menu-right").show();
	    }
            

       
	    if($.inArray($(this).attr("id"), gender_container) != -1) {
		
		
		$("#main_content_engl").hide();
		$("#main_content_id").hide();
		$("[id*=-button]").find(".dropdown-menu.dropdown-menu-right").hide();
		$("#bsd20-button").css({position: 'relative'});
      		$("#bsd20-button").find(".dropdown-menu.dropdown-menu-right").css({"top": "210px","left":"165px","width":"100px","position":"absolute"})
		$("#bsd20-button").find(".dropdown-menu.dropdown-menu-right.show").css({"top": "210px","left":"165px","width":"100px","position":"absolute"})
		$("#bsd20-button").find(".dropdown-menu.dropdown-menu-right").show()
	}
	    
		if($.inArray($(this).attr("id"), name_container) != -1) {
		    
		    $("#main_content_orig").show();
		    $("#main_content_engl").hide();
		    $("#main_content_id").hide();
		    $("#main_content_orig").appendTo("#container");
		    
		    v="#"+$(this).attr("id")
		    
		    $("[id*=-button]").find(".dropdown-menu.dropdown-menu-right").hide();
		    $(v).find(".dropdown-menu.dropdown-menu-right").show();
		    
		}
		
	    });

 $("#textfieldsearch").on("click",  function () {
	$("#back").css("opacity", "1")
	v=$("#searchfields").val()
	g=w2ui["grid3"].getSearch()
	fieldsearch= [];
	$.each(g, function(index) {
	    fieldsearch.push({ field: g[index], value: v, operator: $('input:radio[name=query]:checked').val()  })
	})
	w2ui["grid3"].search(fieldsearch, 'OR');
	currentIds=w2ui["grid3"].last.searchIds;
	$( ".container" ).hide();
	w2ui['layout'].show('main', window.instant)
    })

}
    
