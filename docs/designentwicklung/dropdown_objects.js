function BasicMenu2(var1, par1="", par2="", par3="") {
    obj_data=par1;
    
    // OBJECT TYPE
    c=$("<div class=\"form-group\" id="+obj_data["object_type"][1]+"><div id="+obj_data["object_type"][2]+"><h6 id="+obj_data["object_type"][3]+"></h6></div></div>")
    var data=obj_data["object_type"][0];
    var s = $("<select id="+obj_data["object_type"][5]+" class=\"form-control\" multiple/>");
    for(var val in data) {
	$("<option/>", {value: data[val], text: data[val]}).appendTo(s);
    }
    c.appendTo("#container")
    s.appendTo(var1);
    
    // OBJECT SUBTYPE
    c=$("<div class=\"form-group\" id="+obj_data["object_subtype"][1]+"><div id="+obj_data["object_subtype"][2]+"><h6 id="+obj_data["object_subtype"][3]+"></h6></div></div>")
    var data=obj_data["object_subtype"][0];
    var s = $("<select id="+obj_data["object_subtype"][5]+" class=\"form-control\" multiple/>");
    for(var val in data) {
	$("<option/>", {value: data[val], text: data[val]}).appendTo(s);
    }
    c.appendTo("#container")
    s.appendTo(var1);
};
    
function DropdownMenu2(var1, var2, par1)
{
    obj_data=par1;
    
    $("div.dropdown-menu.dropdown-menu-right.show" ).appendTo("#main_container") 
    $("#msall").hide()
    $(var1).css("opacity", "1")
	    
    $("#moreoptions").css("opacity", "0")
    w2ui.layout.content('main', var2);
    
};

function SelectionMenu2(var1,par1,par2)
{
       
    obj_data=par1;
    $("#selectionresult").appendTo("#header")
    $( "<p id='object_type' style='opacity:0.3; font-size:18px;'>Object type:<br></p>" ).appendTo("#header")
    $( "<p id='object_subtype' style='opacity:0.3; font-size:18px;'>Object sub-type:<br></p>" ).appendTo("#header")
    $("#selectionresult").css("opacity", "1")
    
       
    $("#container" ).on("click", ".dropdown-item", function () {

	var temp=$( ".dropdown-item.active" ).closest(".dropdown.show").attr("id")
	$("#selectedvalues").css("opacity","1")
	$("#selectionresult").css("opacity", "1")
	d=$( ".mt-2.mb-3" ).find('span').text()
        f=d.split('[X]').filter(function(v){return v!==''});
	$( ".mt-2.mb-3" ).hide()  
	
        selvalues = new Object()
        $("#object_type").find('strong').remove()
        $("#object_subtype").find('strong').remove()
	
	$.each(f, function(index) {
	    
	    if($.inArray($.trim(f[index]), objects[3].Type) != -1)
		    
		       {
			   $( "#selectrules1" ).css("opacity","1")
			   $( ".mt-2.mb-3" ).hide()  
			   $("#object_type").css("opacity", "1")
	       		   $( "#object_type" ).append( "<strong>  "+f[index]+"     </strong>" );
			   selvalues[$.trim(f[index])]="object_type"
		       }

	    if($.inArray($.trim(f[index]), objects[3].Subtype) != -1)
		    
		       {
			   $( "#selectrules1" ).css("opacity","1")
			   $( ".mt-2.mb-3" ).hide()  
			   $( "#object_subtype").css("opacity", "1")
	       		   $( "#object_subtype" ).append( "<strong>  "+f[index]+"     </strong>" );
			   selvalues[$.trim(f[index])]="object_subtype"
		       }
	    
	
	    })
	});
    };

function getDropdownObjects()
{

    $('<span class="radio" style="display:inline; position: absolute;  top:9%; margin-left:10px; font-size:30px;cursor:pointer; opacity:0" id="textfieldsearch"><h4><button id="textfieldsearch" class="btn btn-primary dropdown-toggle">Show result</button></h4></span>').appendTo("#upper")
    $("#objec").css("opacity","1")
    $(".radio").css("opacity","1")
    var myObject = new Object();
    
  
    myObject["object_type"]=[objects[3].Type, "obj_type", "object", "type", "Select object type", "type", "#type", "#bsd1-container", "type","type"]
    myObject["object_subtype"]=[objects[3].Subtype, "obj_subtype", "object", "subtype", "Select object sub-type", "subtype", "#subtype", "#bsd2-container", "subtype","subtype"]
    var vars = JSON.stringify(myObject);
    var obj_data = jQuery.parseJSON( vars );
    
    
    $.getScript( "dist/bootstrap-select-dropdown.js", function() { 
	
	$(obj_data["object_type"][6]).selectDropdown();
	$(obj_data["object_type"][7]+" .input-group .form-control").attr("placeholder", obj_data["object_type"][4]);
	$(obj_data["object_type"][7]).find('.dropdown-menu').css("z-index","12000")
	$(obj_data["object_type"][7]).css("margin-bottom","22px")
	
	$(obj_data["object_subtype"][6]).selectDropdown();
	$(obj_data["object_subtype"][7]+" .input-group .form-control").attr("placeholder", obj_data["object_subtype"][4]);
	$(obj_data["object_subtype"][7]).find('.dropdown-menu').css("z-index","12000")
	$(obj_data["object_subtype"][7]).css("margin-bottom","22px")

    });
    
    BasicMenu2("#objectsl", par1=obj_data, par2=0, par3="");
    DropdownMenu2("#objectsl", w2ui.grid2, par1=obj_data);
    SelectionMenu2("#objectsl", par1=obj_data, "grid2");
    $(".form-control").css({"border":"0px","font-size":"12px"})
    
   
    $("#container").on("click","#bsd1-button", function() {
        

	    
	    $("#bsd1-button").css({position: 'relative'});
      	    $("#bsd1-button").find(".dropdown-menu.dropdown-menu-right").css({"top": "210px","left":"165px","width":"100px","position":"absolute"})
	    $("#bsd1-button").find(".dropdown-menu.dropdown-menu-right.show").css({"top": "210px","left":"165px","width":"100px","position":"absolute"})
	    $("#bsd1-button").find(".dropdown-menu.dropdown-menu-right").show()

    });

    $("#container").on("click","#bsd2-button", function() {
        

	    
	    $("#bsd2-button").css({position: 'relative'});
      	    $("#bsd2-button").find(".dropdown-menu.dropdown-menu-right").css({"top": "210px","left":"165px","width":"100px","position":"absolute"})
	    $("#bsd2-button").find(".dropdown-menu.dropdown-menu-right.show").css({"top": "210px","left":"165px","width":"100px","position":"absolute"})
	    $("#bsd2-button").find(".dropdown-menu.dropdown-menu-right").show()
	
});
    

    $("#textfieldsearch").on("click",  function () {
	$("#back").css("opacity", "1")
	v=$("#searchfields").val()
	g=w2ui["grid2"].getSearch()
	fieldsearch= [];
	$.each(g, function(index) {
	    fieldsearch.push({ field: g[index], value: v, operator: $('input:radio[name=query]:checked').val()  })
	})
	w2ui["grid2"].search(fieldsearch, 'OR');
	currentIds=w2ui["grid2"].last.searchIds;
	$( ".container" ).hide();
	w2ui['layout'].show('main', window.instant)
    })

   

   
    // SEARCH GRID
    // initalize grid
    initdata=[]
    $.each(objects[2], function( index, value_obj ) {
	initdata.push(parseInt(value_obj.recid))
    });

    initlist=[]
    $.each(initdata, function(index) {
	    initlist.push(w2ui['grid2'].get(initdata[index])); 
    })

    
function select(values="",par1="") {

    w2ui[par1].clear();
    w2ui[par1].add(initlist);
    $("#back").css("opacity", "1")
    $("#upper").addClass(".mt-2 mb-3")
    var search_object_type=[]
    var search_object_subtype=[]

    $.each(values, function(index)
	   {
	       if (values[index]=="object_type") {
		   search_object_type.push({ field: values[index], value: String(index), operator: "is"  })}
	       if (values[index]=="object_subtype") {
		   search_object_subtype.push({ field: values[index], value: String(index), operator: "is"  })}
	   });
    
    $( ".container" ).hide();
    w2ui['layout'].show('main', window.instant)
    
    var currentIds1=[]
    var currentIds2=[]
    
    if (search_object_type.length>0) {
	w2ui[par1].search(search_object_type, 'OR');
	currentIds1=w2ui[par1].last.searchIds;
    }
    else {
	currentIds1=initdata
    }
    
    if (search_object_subtype.length>0) {
	w2ui[par1].search(search_object_subtype, 'OR');
	currentIds2=w2ui[par1].last.searchIds;
    }
    else {
	currentIds2=initdata
    }

    
  
    // AND SELECTION
	
    var common=""
    
    /*temp = $.grep(currentIds1, function(element) {
	return $.inArray(element, currentIds2 ) !== -1;
    });
    */
    common = $.grep(currentIds1, function(element) {
	return $.inArray(element, currentIds2 ) !== -1;
	});

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
    select(values=selvalues,par1="grid2")
	})
}
    
