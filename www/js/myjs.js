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
		if($.trim($('#txtP_C').val()) != '' && $.trim($('#txtP_D').val()) != ''){
			p_c = parseInt($.trim($('#txtP_C').val()));
			p_d = parseInt($.trim($('#txtP_D').val()));
			p_result = (p_c-(p_c*p_d)/100);
			$('#txtP_E').val(p_result.toFixed(2));
		}
		if($.trim($('#txtO_C').val()) != '' && $.trim($('#txtO_D').val()) != ''){
			o_c = parseInt($.trim($('#txtO_C').val()));
			o_d = parseInt($.trim($('#txtO_D').val()));
			o_result = (o_c-(o_c*o_d)/100);
			$('#txtO_E').val(o_result.toFixed(2));
		}
	});

	$('#txtO_Moisture').blur(function(){
		$('#txtP_Moisture').blur();
	});
});