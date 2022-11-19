// priority: 800
const stickEvent = {
  name: "ftbstoneblock:stick",
  chance: 0.2,
  names: [
    "Do you ever feel like a plastic bag?",
    "SticKaren - it wants to speak to your manager",
    "I'm a stick, you're a stick!",
    "Branch out - grab a stick",
    "Stick of Truth",
    "Stick of lies",
    "Stick Lightyear - to infinitree and beyond!",
    "I am NOT Groot",
    "A stick is for life, not just for torches",
    "The stickiest of sticky sticks",
    "No idea how I got here? I'm STUMPED too!",
    "I tried to quit Tree School but they said I couldn't leaf",
    "My bark is worse than my bite",
    "Tree of Impending Doom: Just add water",
    "Benestick Cumberbranch",
    "So versatile, you can STICK it anywhere!",
    "Lucky stick of unluckiness",
    "Holy stick of wood divining - 0 uses left",
    "Tree in training",
    "Loneztar's rod of tester beating",
    "Slowpoke101 doesn't want me",
  ],
  execute(event, player, location) {
    player.tell([`Here's a stick! :hearts:`]);
    let chosenName = this.names[Math.floor(Math.random() * this.names.length)];
    player.give(
      Item.of("minecraft:stick", {
        RepairCost: 0,
        display: { Name: '{"text":"' + chosenName + '"}' },
      })
    );
  },
};
