onEvent("ui.main_menu", (event) => {
  event.replace((ui) => {
    ui.fillBackground("ftbstoneblock:textures/ui/bg.png", 2000, 1000);

    //If MT is loaded
    if (Platform.mods.minetogether) {
      //MineTogether order server
      ui.image((i) => {
        i.height = 550 * 0.035 * (ui.w / ui.h);
        i.width = 900 * 0.035 * (ui.w / ui.h);
        i.x = 2;
        i.y = ui.h - i.h - 2;
        i.texture = "ftbstoneblock:textures/ui/button/sponsor.png";
        i.hoverTexture = "ftbstoneblock:textures/ui/button/sponsor_hover.png";
        i.action = "https://github.com/TeamKugimiya/FTB-StoneBlock-3";
      });
    }

    // Pack logo
    ui.image((i) => {
      i.height = 529 * 0.000615 * ui.h;
      i.width = 2000 * 0.000615 * ui.h;
      i.x = ui.width / 2 - i.width / 2;
      i.y = ui.height * 0.035;
      i.texture = "ftbstoneblock:textures/ui/logo.png";
    });

    if (Platform.mods.ftbauxilium) {
      //Aux
      ui.image((i) => {
        i.height = 360 * 0.035 * (ui.w / ui.h);
        i.width = 392 * 0.035 * (ui.w / ui.h);
        i.x = i.width + 2;
        i.y = 3;
        i.texture = "ftbstoneblock:textures/ui/button/auxilium.png";
        i.hoverTexture = "ftbstoneblock:textures/ui/button/auxilium_hover.png";
        i.action = "ftbauxilium:opt_out";
      });
    }

    //Discord
    ui.image((i) => {
      i.height = 360 * 0.035 * (ui.w / ui.h);
      i.width = 392 * 0.035 * (ui.w / ui.h);
      i.x = 2;
      i.y = 3;
      i.texture = "ftbstoneblock:textures/ui/button/discord.png";
      i.hoverTexture = "ftbstoneblock:textures/ui/button/discord_hover.png";
      i.action = "https://go.ftb.team/LRMz";
    });

    //Button back block
    ui.image((i) => {
      i.height = 397 * 0.00055 * ui.h;
      i.width = 2000 * 0.00055 * ui.h;
      i.x = ui.width / 2 - i.width / 2;
      i.y = ui.height - i.height - ui.height * 0.065;
      i.texture = "ftbstoneblock:textures/ui/button/back_block.png";
    });

    //Singleplayer
    ui.image((i) => {
      i.height = 496 * 0.000255 * ui.h;
      i.width = 2000 * 0.000255 * ui.h;
      i.x = ui.width / 2 - i.width - 1;
      i.y = ui.height - i.height - ui.height * 0.13;
      i.texture = "ftbstoneblock:textures/ui/button/sp.png";
      i.hoverTexture = "ftbstoneblock:textures/ui/button/sp_hover.png";
      i.action = "minecraft:singleplayer";
    });

    //multiplayer
    ui.image((i) => {
      i.height = 496 * 0.000255 * ui.h;
      i.width = 2000 * 0.000255 * ui.h;
      i.x = ui.width / 2;
      i.y = ui.height - i.height - ui.height * 0.13;
      i.texture = "ftbstoneblock:textures/ui/button/mp.png";
      i.hoverTexture = "ftbstoneblock:textures/ui/button/mp_hover.png";
      i.action = "minecraft:multiplayer";
    });

    //Lower part
    const lw = 395 * 0.00017 * ui.h;
    const lh = 391 * 0.00017 * ui.h;
    const ly = ui.height - lh - ui.height * 0.04;

    //language
    ui.image((i) => {
      i.height = lh;
      i.width = lw;
      i.x = ui.width / 2 - lw * 3.0 - i.w;
      i.y = ly;
      i.texture = "ftbstoneblock:textures/ui/button/lang.png";
      i.hoverTexture = "ftbstoneblock:textures/ui/button/lang_hover.png";
      i.action = "minecraft:language";
    });

    //mods
    ui.image((i) => {
      i.height = lh;
      i.width = lw * 3.0;
      i.x = ui.width / 2 - i.width - 1;
      i.y = ly;
      i.texture = "ftbstoneblock:textures/ui/button/mods.png";
      i.hoverTexture = "ftbstoneblock:textures/ui/button/mods_hover.png";
      i.action = "forge:mod_list";
    });

    //options
    ui.image((i) => {
      i.height = lh;
      i.width = lw * 3.0;
      i.x = ui.width / 2 + 1;
      i.y = ly;
      i.texture = "ftbstoneblock:textures/ui/button/options.png";
      i.hoverTexture = "ftbstoneblock:textures/ui/button/options_hover.png";
      i.action = "minecraft:options";
    });

    //quit
    ui.image((i) => {
      i.height = lh;
      i.width = lw;
      i.x = ui.width / 2 + lw * 3.0 + 1;
      i.y = ly;
      i.texture = "ftbstoneblock:textures/ui/button/exit.png";
      i.hoverTexture = "ftbstoneblock:textures/ui/button/exit_hover.png";
      i.action = "minecraft:quit";
    });

    //Mojang
    ui.label((l) => {
      l.height = 7;
      l.name = Text.of("Minecraft, © Mojang AB, Do not distribute").color(
        0xffffff
      );
      l.x = ui.width - l.width - 3;
      l.y = ui.height - 7;
      l.shadow = true;
    });
  });
});
