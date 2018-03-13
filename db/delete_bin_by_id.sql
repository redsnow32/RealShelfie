update bins
set bin_value = null, bin_price = null
where shelf_id = $1 and bin_id = $2;