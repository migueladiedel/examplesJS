$(document).ready( function() {
//	 Objeto arrastrable 
	$("#srcArea>img, #tgtArea>img").attr("draggable", "true")
		.on("dragstart", function(evento) {	
			evento.originalEvent.dataTransfer
			.setData("EnRuta", evento.target.id);	
		})

		.on("dragend", function(evento) {	
			evento.preventDefault();	
		})

		.on("drag", function(evento) {	
			evento.preventDefault();
			var sID=evento.originalEvent.dataTransfer.getData("EnRuta");	
		});

//	 Zonas de destino 
		$("#srcArea, #tgtArea")
			.on("dragover", function(evento) {	
				evento.preventDefault();	
			})

			.on("drop", function(evento) {
				evento.preventDefault();
				var oTarget=evento.target;	//	Objeto que está siendo arrastrado

				var sID=evento.originalEvent.dataTransfer.getData("EnRuta");
				var sTargetID=oTarget.id;	//	Area que dispara el evento
				var oDragged=document.getElementById(sID);
				var sDraggedTag=oDragged.tagName;

				if( (sTargetID == "srcArea" || sTargetID == "tgtArea") )
					document.getElementById(sTargetID).appendChild(oDragged)
					//== $("#"+sTargetID).appendChild(oDragged)
				evento.target.style.backgroundColor=
				evento.originalEvent.dataTransfer.getData("bgColour");
			})
				
			.on("dragenter", function(evento) {	
				var sID=evento.target.id;
				$("#"+sID).addClass("Droppable");
			})

			.on("dragleave", fnUnDrop)
			.on("mouseout", fnUnDrop);
			//== .mouseout(fnUnDrop)
	});

function fnUnDrop(evento) {	
	var sID=evento.target.id;
	$("#"+sID).removeClass("Droppable");
}