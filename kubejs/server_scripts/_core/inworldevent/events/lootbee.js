// priority: 800
const lootbeeEvent = {
  name: "ftbstoneblock:loot_bee",
  chance: 0.4,
  minDistance: 2,
  maxDistance: 15,
  size: 0,
  checkBlocks: [
    "minecraft:stone",
    "minecraft:andesite",
    "minecraft:deepslate",
    "minecraft:air",
  ],
  requireBlockBelow: false,
  itemDespawnTime: 400,
  lootTable: {
    table1: [
      { entry: "minecraft:diamond", weight: 10 },
      { entry: "minecraft:emerald", weight: 10 },
      { entry: "ftbdripper:dripper", weight: 10 },
      { entry: "powah:battery_starter", weight: 10 },
      { entry: "pipez:basic_upgrade", weight: 10 },
      { entry: "ironchest:crystal_chest", weight: 10 },
      { entry: "minecraft:copper_ingot", weight: 25 },
      { entry: "minecraft:iron_ingot", weight: 20 },
      { entry: "minecraft:gold_ingot", weight: 15 },
      { entry: "botania:cyan_mystical_flower", weight: 15 },
      { entry: "botania:white_mystical_flower", weight: 15 },
      { entry: "botania:orange_mystical_flower", weight: 15 },
      { entry: "chancecubes:chance_cube", weight: 20 },
      { entry: "minecraft:egg", weight: 80 },
    ],
    table2: [
      { entry: "minecraft:diamond", weight: 10 },
      { entry: "powah:battery_blazing", weight: 10 },
      { entry: "pipez:improved_upgrade", weight: 10 },
      { entry: "laserio:card_redstone", weight: 15 },
      { entry: "laserio:card_fluid", weight: 15 },
      { entry: "laserio:card_item", weight: 15 },
      { entry: "laserio:card_energy", weight: 15 },
      { entry: "minecraft:trident", weight: 15 },
      { entry: "chancecubes:chance_cube", weight: 20 },
      { entry: "immersiveengineering:ingot_aluminum", weight: 25 },
      { entry: "mekanism:ingot_osmium", weight: 25 },
      { entry: "minecraft:egg", weight: 50 },
    ],
    table3: [
      { entry: "chancecubes:chance_cube", weight: 20 },
      { entry: "botania:manasteel_ingot", weight: 15 },
      { entry: "mekanism:ingot_uranium", weight: 15 },
      { entry: "powah:battery_nitro", weight: 15 },
      { entry: "projecte:dark_matter", weight: 10 },
      { entry: "projecte:red_matter", weight: 5 },
      { entry: "luggage:luggage", weight: 20 },
      { entry: "pipez:advanced_upgrade", weight: 20 },
      { entry: "immersiveengineering:ingot_aluminum", weight: 25 },
      { entry: "mekanism:ingot_osmium", weight: 25 },
      { entry: "minecraft:egg", weight: 50 },
    ],
  },
  execute(event, player, location) {
    const level = player.getLevel();
    player.tell([
      `戰利品蜜蜂現身在 X：${location.pos.x}，Y：${location.pos.y}，Z：${location.pos.z}`,
      `\n趕緊在牠消失前取得戰利品！`,
    ]);

    clearLocation(location.locationInfo, level);

    let selectedLootTable;

    if (player.persistentData.lootBeeCount >= 40) {
      selectedLootTable = this.lootTable.table3;
      player.persistentData.lootBeeCount++;
    } else if (player.persistentData.lootBeeCount >= 20) {
      selectedLootTable = this.lootTable.table2;
      player.persistentData.lootBeeCount++;
    } else if (player.persistentData.lootBeeCount >= 0) {
      selectedLootTable = this.lootTable.table1;
      player.persistentData.lootBeeCount++;
    } else {
      selectedLootTable = this.lootTable.table1;
      player.persistentData.lootBeeCount = 1;
    }

    const entity = level.createEntity("minecraft:bee");
    entity.setPosition(
      location.pos.x + 0.5,
      location.pos.y + 0.5,
      location.pos.z + 0.5
    );
    entity.glowing = true;
    entity.nbt.maxRounds = Math.floor(Math.random() * (10 - 3 + 1) + 3);
    entity.nbt.currentRound = 0;

    entity.spawn();

    event.server.scheduleInTicks(800, (callback) => {
      this.cycle(
        event.server,
        entity,
        player,
        level,
        selectedLootTable,
        location.locationInfo
      );
    });
  },
  cycle(server, entity, player, level, lootTable, location) {
    if (entity.nbt.currentRound < entity.nbt.maxRounds && entity.alive) {
      entity.nbt.currentRound++;

      server.scheduleInTicks(60, (callback) => {
        var itemEnity = level.createEntity("item");
        itemEnity.item = Ku.Lists.getEntryBasedOnWeight(lootTable);
        itemEnity.setPosition(entity.x, entity.y, entity.z);
        itemEnity.age = 6000 - this.itemDespawnTime;
        itemEnity.glowing = true;
        itemEnity.spawn();

        this.cycle(server, entity, player, level, lootTable, location);
      });
    } else {
      if (entity.alive) {
        entity.glowing = false;
        entity.remove();
      }

      server.scheduleInTicks(200, (callback) => {
        restoreLocation(location, level);
      });
    }
  },
};
