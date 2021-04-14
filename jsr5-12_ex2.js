let room = {
  number: 23
};

let meetup = {
  title: "Meetup",
  occupiedBy: [{name: "Ivanov"}, {name: "Petrov"}],
  place: room
};

// circle link
room.occupiedBy = meetup;
meetup.self = meetup;

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