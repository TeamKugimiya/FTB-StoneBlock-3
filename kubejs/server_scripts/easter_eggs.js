onEvent("player.logged_in", (event) => {
  let player = event.player;

  //Birthdays
  let currentDate = new Date();
  let today =
    currentDate.getMonth() +
    1 + //[0,11] so +1
    "-" +
    currentDate.getDate(); //[0,31]
  //Syntax, max is [12-31]
  let birthdays = [
    ["Gaz", "3-9", "Mod Developer"],
    ["OfficialyMax", "3-10", "Quest writer"],
    ["Dinnerbeef & UnRealDinnerbone", "6-8", "Alpha testing"],
    ["Slowpoke101", "6-19", "Our overlord"],
    ["manmaed", "6-30", "Alpha testing"],
    ["Loneztar", "7-15", "Beta team leader"],
    ["Mikey", "10-11", "Lead Mod Developer"],
    ["5ully_", "10-15", "Alpha testing"],
    ["Sunekaer", "10-20", "Lead Modpack Developer"],
    ["aaronhowser1", "12-2", "Quest writer"],
  ];

  birthdays.forEach((birthday) => {
    let birthdayPerson = birthday[0];
    let birthdayDate = birthday[1];

    if (birthdayDate == today) {
      player.tell([
        Component.string(birthdayPerson),
        Component.string("生日快樂！")
          .underlined()
          .hover(Component.string(birthday[2])),
      ]);
    }
  });
});
