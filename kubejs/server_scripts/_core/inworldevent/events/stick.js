// priority: 800
const stickEvent = {
  name: "ftbstoneblock:stick",
  chance: 0.2,
  names: [
    "你曾想當個好棒棒嗎？",
    "球棒 - 叫你們經理出來",
    "我是木棒，你也是木棒！",
    "樹倒了 - 抓緊這根木棒",
    "真實之杖",
    "謊言之杖",
    "棒斯光年 - 飛向宇宙，浩瀚無垠！",
    "我不是格魯特",
    "木棒是個態度，不只是製作火把",
    "幫棒磅棒磅",
    "我不知道為什麼我在這？我也很為難！",
    "我想從森林學校退學，但它們說這樣這樣一點都不棒",
    "我的樹皮真的很皮",
    "末日之樹：我需要水",
    "棒奈狄克・康柏拜區",
    "用途廣泛，你可以在任何地方「放出來」！",
    "不幸的幸運棒",
    "神聖占卜木棒 - 耐久 0 ",
    "仍在訓練成為大樹中",
    "Loneztar 的測試棒，還有心跳",
    "Slowpoke101 不要的木棒",
  ],
  execute(event, player, location) {
    player.tell([`給你個木棒！ :hearts:`]);
    let chosenName = this.names[Math.floor(Math.random() * this.names.length)];
    player.give(
      Item.of("minecraft:stick", {
        RepairCost: 0,
        display: { Name: '{"text":"' + chosenName + '"}' },
      })
    );
  },
};
