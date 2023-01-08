// priority: 800
const teaEvent = {
  name: "ftbstoneblock:tea",
  chance: 0.1,
  execute(event, player, location) {
    player.tell(["[伺服器] 放下遊戲，來杯茶ㄅ"]);
  },
};
