select
  "countries"."name" as "country",
  count(*) as "citiesPerCountry"
from "cities"
join "countries" using ("countryId")
group by "countryId"
order by "citiesPerCountry" desc
