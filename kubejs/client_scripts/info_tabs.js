onEvent('rei.information', (event) => {
	event.addItem(['ftbstoneblock:stonepebble'], 'Pebbles', [
		'空手破壞石頭來取得石頭石塊。',
	])
	event.addItem('ftbstoneblock:mob_soul', 'Souls', [
		'生物死亡時 20% 機率掉落。',
	])
	event.addItem('ftbstoneblock:ritual_starter', 'Rituals', [
		'可在終界城結構中找到。',
	])
	event.addItem(
		'ftbstoneblock:cold_silverfish_shard',
		'Cold Silverfish Shard',
		['可在石頭地區的地牢中找到。']
	)
	event.addItem(
		'ftbstoneblock:warm_silverfish_shard',
		'Warm Silverfish Shard',
		['可在地獄地區的地牢中找到。']
	)
	event.addItem(
		'ftbstoneblock:silverfish_heart',
		'Silverfish Heart',
		[
			'蠹魚母后死亡時掉落',
			' ',
			'需要在終界之環外的 Boss 地牢中召喚'
		]
	)

	event.addItem(
		'mob_grinding_utils:mob_swab_used',
		'Used Mob Swab',
		[
			'對生物使用生物棉花棒後獲得'
		]
	)

	event.addItem(
		'mob_grinding_utils:golden_egg',
		'Golden Egg',
		[
			'將營養豐富的雞飼料餵食雞後獲得'
		]
	)

	event.addItem(
		'mob_grinding_utils:rotten_egg',
		'GM Chicken Feed Cursed',
		[
			'將受詛咒的基改雞飼料餵食雞後獲得'
		]
	)
	
	event.addItem(
		[
			'ars_nouveau:starbuncle_shards',
			'ars_nouveau:whirlisprig_shards',
			'ars_nouveau:drygmy_shard'
		],
		'Ars Shards',
		[
			'與其他動物一樣，會在平原生態域中自然生成',
			' ',
			'閱讀破舊的筆記本來取得更多資訊'
		]
	)

	event.addItem('bloodmagic:weak_tau',
		'Weak Tau',
		[
			'可在簡單地城中找到（詳情請閱讀血染之書的「前廳」章節）',
			' ',
			'能使用耕地種植',
		]
	)

	event.addItem('bloodmagic:strong_tau',
		'Strong Tau',
		[
			'可在簡單地城中低機率找到 （詳情請閱讀血染之書的「前廳」章節）',
			' ',
			'血命果的生長過程中，若有動物踩在其上方，則在成熟時會結成飽滿血命果',
		]
	)

	event.addItem(["ae2:inscriber", "ae2things:advanced_inscriber"],
		'Inscribers',
		[
			Text.red("壓印機已被停用，並被動力機械的序列組裝取代。"),
			Text.red("若你身邊已經擁有一台，那麼它依舊能夠正常運作，只是你無法再製作出任何一台壓印機"),
		]
	)

	event.addItem(Item.of('chickens:chicken_item', '{ChickenType:{id:"chickens:smart_chicken"}}'),
		'Smart Chickens',
		[
			'對著普通的雞使用一本書後誕生',
			' ',
			'行為就如同普通的雞，一樣下著普通的雞蛋，但它擁有屬性狀態且能夠被眷養在雞舍與雞棚裡'
		]
	)
})
