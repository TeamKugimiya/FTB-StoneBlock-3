const StoneblockData = java(
  "dev.ftb.ftbsbc.dimensions.kubejs.StoneBlockDataKjs"
);

StoneblockData.debugMode = false;
StoneblockData.reset();

StoneblockData.setLobbyStructure("ftbstoneblock:lobby");

//Starting islands
StoneblockData.addStart("ftbstoneblock:spawn_islands/island", "原味洞窟");
StoneblockData.addStart("ftbstoneblock:spawn_islands/cave", "洞窟");
StoneblockData.addStart(
  "ftbstoneblock:spawn_islands/drip_cave",
  "鐘乳石洞窟"
);
StoneblockData.addStart(
  "ftbstoneblock:spawn_islands/lushed_house",
  "蒼鬱洞窟小屋"
);
StoneblockData.addStart(
  "ftbstoneblock:spawn_islands/lushed_mine_intersection",
  "蒼鬱洞窟廢棄礦坑"
);
StoneblockData.addStart(
  "ftbstoneblock:spawn_islands/mine_intersection",
  "廢棄礦坑"
);

//First biome - "Stone area"
const plains = StoneblockData.addBiome("minecraft:plains", 768);
plains.addLayer("55x minecraft:stone");
plains.addLayer("20x minecraft:andesite");
plains.addLayer("minecraft:deepslate");
plains.color = "#686868";

//Second biome - "Mining area"
const lushCaves = StoneblockData.addBiome("minecraft:lush_caves", 384);
lushCaves.addLayer("68x minecraft:stone");
lushCaves.addLayer("minecraft:deepslate");
lushCaves.color = "#547a50";
lushCaves.blend = 140;
lushCaves.carvers = true;

//Third biome - "Nether"
const nether = StoneblockData.addBiome("minecraft:nether_wastes", 512);
nether.addLayer("68x minecraft:netherrack");
nether.addLayer("minecraft:nether_bricks");
nether.blend = 80;
nether.color = "#331C20";

//Forth biome - "End"
const theEnd = StoneblockData.addBiome("minecraft:the_end", 512);
theEnd.addLayer("68x minecraft:end_stone");
theEnd.addLayer("minecraft:end_stone_bricks");
theEnd.color = "#F7E9A3";

//biome - "Forest area"
const forest = StoneblockData.addBiome("minecraft:forest", 5000);
forest.addLayer("65x minecraft:stone");
forest.addLayer("minecraft:deepslate");
forest.color = "#686868";

StoneblockData.finish();

stoneblockEntitiesData.setMinSpawnAmount(12);
stoneblockEntitiesData.setMaxSpawnAmount(24);

stoneblockEntitiesData
  .createBuilder()
  .addEntity("minecraft:evoker", null)
  .addEntity("minecraft:chicken_jockey", null)
  .addEntity("minecraft:creeper", "ftbdungeons:has_structure/stone_dungeon")
  .addEntity("minecraft:endermite", null)
  .addEntity("minecraft:blaze", "ftbdungeons:has_structure/nether0_dungeon")
  .addEntity("minecraft:hoglin", "ftbdungeons:has_structure/nether0_dungeon")
  .addEntity("minecraft:zoglin", "ftbdungeons:has_structure/nether0_dungeon")
  .addEntity("minecraft:husk", null)
  .addEntity("minecraft:phantom", null)
  .addEntity("minecraft:pillager", null)
  .addEntity("minecraft:skeleton", null)
  .addEntity("minecraft:spider_jockey", null)
  .addEntity("minecraft:stray", null)
  .addEntity("minecraft:vindicator", null)
  .addEntity("minecraft:witch", "ftbdungeons:has_structure/stone_dungeon")
  .addEntity("minecraft:zombie", "ftbdungeons:has_structure/stone_dungeon")
  .build();
