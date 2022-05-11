select
  "firstName",
  "lastName"

from "rentals"

join "inventory" using ("inventoryId")
join "films" using ("filmId")
join "customers" using ("customerId")

where
  "rentalId" between 2494 and 2495;
