$(".more").click(function() {
    var input_value = parseInt($(this).parent().children(".qty_amount").text());
    if (input_value < 20) {
        $(this).parent().children(".qty_amount").text(input_value + 1);
    }
});
$(".less").click(function() {
    var input_value = parseInt($(this).parent().children(".qty_amount").text());
    if (input_value > 1) {
        $(this).parent().children(".qty_amount").text(input_value - 1);
    }
});

function ValidateNumber(e, pnumber) {

    if (!/^\d+$/.test(pnumber)) {
        $(e).val(/^\d+/.exec($(e).val()));
    }
    return false;
}