const calc = function () {
  $("tbody tr").each(function () {
    const $that = $(this);
    const unitPrice = $that.find('input[name="unit_price[]"]').val();
    const quantity = $that.find('input[name="quantity[]"]').val();
    const rate = $that.find('input[name="conv_value[]"]').val();
    const amounts = new Decimal(unitPrice).times(quantity).div(rate);
    $that.find('input[name="amounts[]"]').val(amounts.toNumber());
  });
};

$('input[name="unit_price[]"]').on("change", function () {
  calc();
});

$('input[name="quantity[]"]').on("change", function () {
  calc();
});
