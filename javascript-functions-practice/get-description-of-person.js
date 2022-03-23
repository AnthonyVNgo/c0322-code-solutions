/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var name = person.name;
  var occ = person.occupation;
  var birth = person.birthPlace;
  var description = name + ' is a ' + occ + ' from ' + birth + '.';
  return description;
}
