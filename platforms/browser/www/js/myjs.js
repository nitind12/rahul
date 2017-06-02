$(function(){
	$('#txtP_Moisture').blur(function(){
		if($('#txtP_Moisture').val() != ''){
			if(parseInt($('#txtP_Moisture').val()) >= 14){
				$('#txtP_D').val(parseInt($('#txtP_Moisture').val()) - 14);	
			} else {
				$('#txtP_D').val('0');
			}
		}
		if($('#txtO_Moisture').val() != ''){
			if(parseInt($('#txtO_Moisture').val()) >= 14){
				$('#txtO_D').val(parseInt($('#txtO_Moisture').val()) - 14);	
			} else {
				$('#txtO_D').val('0');
			}	
		}
	});

	$('#txtO_Moisture').blur(function(){
		$('#txtP_Moisture').blur();
	});
});