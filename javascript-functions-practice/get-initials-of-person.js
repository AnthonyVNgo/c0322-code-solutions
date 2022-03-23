/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var firstInitial = person.firstName[0];
  var secondInitial = person.lastName[0];
  var initials = firstInitial + secondInitial;
  return initials;
}
