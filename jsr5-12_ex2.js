let room = {
  number: 23
};

let meetup = {
  title: "Meetup",
  occupiedBy: [{name: "Ivanov"}, {name: "Petrov"}],
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
  "occupiedBy":[{"name":"Ivanov"},{"name":"Petrov"}],
  "place":{"number":23}
}
*/
