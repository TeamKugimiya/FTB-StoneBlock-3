// onEvent('item.tooltip', (tooltip) => {
// 	tooltip.add('ftbstoneblock:machines', [
// 		'lmao yeah right',
// 		"there's like a million machines",
// 		"ain't no way we're tagging them all",
// 	])
// })

onEvent("item.tooltip", (tooltip) => {
  tooltip.add(
    ["ae2:inscriber", "ae2things:advanced_inscriber"],
    [
      Text.red(
        "壓印機已被停用，並被動力機械的序列組裝取代。"
      ),
      Text.red(
        "若你身邊已經擁有一台，那麼它依舊能夠正常運作，只是你無法再製作出任何一台壓印機"
      ),
    ]
  );
});
