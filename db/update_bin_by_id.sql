update bins
set bin_value = $3, bin_price = $4
where shelf_id = $1 and bin_id = $2
returning*;