select
  "line1",
  "district",
  "cities"."name" as "city",
  "countries"."name" as "country"

from
  "cities"

join "countries" using ("countryId")
join "addresses" using ("cityId")
