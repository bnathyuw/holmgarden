$.validate({
    borderColorOnError: ''
});
var setUpDatePickers = function(){
    $(".date.booking").datepicker({ dateFormat: "dd/mm/yy", minDate: "+1d", maxDate: "+3y" });
    $(".date.dob").datepicker({ dateFormat: "dd/mm/yy", minDate: "-120y", maxDate: "-18y", changeYear: true, yearRange: "-120:-18" });
};

$(function() {
    setUpDatePickers();
});
