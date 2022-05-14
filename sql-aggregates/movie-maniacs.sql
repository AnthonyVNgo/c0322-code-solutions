select
  concat("customers"."firstName",' ',"customers"."lastName") as "customer",
  sum("payments"."amount") as "total"
from "customers"
join "payments" using ("customerId")
group by "customer"
order by "total" desc;
