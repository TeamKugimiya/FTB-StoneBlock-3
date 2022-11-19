onEvent("command.registry", (event) => {
  const {
    commands: Commands,
    arguments: Arguments,
    builtinSuggestions: Suggestions,
  } = event;
  event.register(
    Commands.literal("events").then(
      Commands.literal("toggle").then(
        Commands.argument("event", Arguments.RESOURCE_LOCATION.create(event))
          .suggests((ctx, builder) =>
            Suggestions.suggest(eventSuggestions, builder)
          )
          .executes((ctx) => {
            const e = Arguments.RESOURCE_LOCATION.getResult(ctx, "event");
            const player = ctx.source.getPlayerOrException().asKJS();
            var disabledEvents = player.persistentData.disabledEvents;

            if (!eventSuggestions.includes(e.toString())) {
              ctx.source.sendSuccess(
                Text.of(["找不到該事件！"]).red(),
                false
              );
              return 0;
            }

            if (disabledEvents) {
              let disabledEventsList = [];
              for (let i = 0; i < disabledEvents.length; i++) {
                disabledEventsList.push(disabledEvents[i]);
              }

              if (disabledEventsList.includes(e.toString())) {
                player.persistentData.disabledEvents =
                  disabledEventsList.filter((item) => item !== e.toString());
                ctx.source.sendSuccess(
                  Text.of(["已啟用 " + e + " 事件"]),
                  false
                );

                return 1;
              } else {
                player.persistentData.disabledEvents.push(e.toString());
                ctx.source.sendSuccess(
                  Text.of(["已停用 " + e + " 事件"]),
                  false
                );

                return 1;
              }
            } else {
              player.persistentData.disabledEvents = [e.toString()];
              ctx.source.sendSuccess(Text.of(["已停用 " + e + " 事件"]), false);

              return 1;
            }
          })
      )
    )
  );
});

const eventSuggestions = [
  "ftbstoneblock:loot_bee",
  "ftbstoneblock:wandering_trader",
  "ftbstoneblock:stick",
  "ftbstoneblock:tea",
];
