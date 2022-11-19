// priority: 800
const wanderingtraderEvent = {
  name: "ftbstoneblock:wandering_trader",
  chance: 0.15,
  minDistance: 3,
  maxDistance: 10,
  size: 1,
  checkBlocks: ["minecraft:air"],
  requireBlockBelow: true,
  no_solicitors: Block.id("gag:no_solicitors").blockState,
  execute(event, player, location) {
    const level = player.getLevel();

    const checkForNoSolicitors = new Ku.Level(level).findBlockWithinRadius(
      this.no_solicitors,
      location.pos,
      32,
      false
    );

    const checkAmountOfTraders = new Ku.Level(level).findEntitiesWithinRadius(
      "minecraft:wandering_trader",
      location.pos,
      64
    );

    if (checkForNoSolicitors.length === 0 && checkAmountOfTraders.length < 2) {
      player.tell([
        `流浪商人現身在 X：${location.pos.x}，Y：${location.pos.y}，Z：${location.pos.z}`,
      ]);

      let entityWandering = level.createEntity("minecraft:wandering_trader");
      entityWandering.setPosition(
        location.pos.x + 0.5,
        location.pos.y + 0.5,
        location.pos.z + 0.5
      );

      entityWandering.spawn();
    }
  },
};

const heads = [
  "direwolf20",
  "kSunekaer",
  "Naxanria",
  "Loneztar",
  "slowpoke101",
  "Jake_Evans",
  "ErrorMikey",
  "1aaron5",
  "MaxNeedsSnacks",
  "DinnerBeef",
  "UnRealDinnerbone",
  "NMX_R3GEN",
  "OfficialyAwsome",
  "manmaed",
  "Gaz492",
];

onEvent("entity.spawned", (event) => {
  if (event.entity.type === "minecraft:wandering_trader") {
    //Grabbing traders current NBT
    let nbt = event.entity.fullNBT;

    if (
      nbt.Offers.Recipes.some(
        (recipe) => recipe.sell.id === "minecraft:player_head"
      )
    ) {
      return;
    }

    //
    let headsCopy = [];

    //Make a copy of the default heads list
    headsCopy = Array.from(heads);

    //Get all players on the server
    event.server.players.forEach((name) => {
      //Add the players that isn't in the array all to the array
      if (!headsCopy.some((n) => n === name.toString())) {
        headsCopy.push(name);
      }
    });

    //Shuffling the heads array a lot
    headsCopy = headsCopy
      .sort(() => Math.random() - 0.6)
      .sort(() => Math.random() - 0.2)
      .sort(() => Math.random() - 0.1);

    //Taking the first 3 names from the shuffled array
    headsCopy.slice(0, 6).forEach((name) => {
      //Get random price between 1 and 3
      let price = Math.round(Math.random() * (3 - 1) + 1);

      //Adding the trade to the NBT data
      nbt.Offers.Recipes.add(
        NBT.compoundTag({
          maxUses: 3,
          buy: Item.of(`${price}x minecraft:emerald`).toNBT(),
          sell: Item.of("minecraft:player_head", { SkullOwner: name }).toNBT(),
        })
      );
    });

    // make sure the trader despawns after the regular amount of time as well
    nbt.DespawnDelay = NBT.i(48000);

    //Merging the NBT data back on to the trader
    event.entity.mergeFullNBT(nbt);
  }
});
