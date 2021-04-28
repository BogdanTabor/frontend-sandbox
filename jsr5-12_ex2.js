let room = {
  number: 23
};

let meetup = {
  title: "Meetup",
  occupiedBy: [{name: "James"}, {name: "Peter"}],
  place: room
};

room.occupiedBy = meetup; // circle link
meetup.self = meetup; // circle link

alert( JSON.stringify(meetup, function replacer(key, value) {
  return (key != '' && value == meetup) ? undefined : value;
}));

/* result wiil be:
{
  "title":"Meetup",
  "occupiedBy":[{"name":"James"},{"name":"Peter"}],
  "place":{"number":23}
}
*/
