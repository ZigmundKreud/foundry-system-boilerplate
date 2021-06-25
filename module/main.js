// Import Modules
import {MyActor} from "./actor/actor.js";
import {MyActorSheet} from "./actor/actor-sheet.js";
import {MyItem} from "./item/item.js";
import {MyItemSheet} from "./item/item-sheet.js";
import {System, FSB} from "./system/config.js";
import {preloadHandlebarsTemplates} from "./system/templates.js";
import {registerHandlebarsHelpers} from "./system/helpers.js";
import {registerSystemSettings} from "./system/settings.js";
import registerHooks from "./system/hooks.js";
import {DataLoader} from "./system/data.js";

Hooks.once('init', async function () {

    /**
     * Set an initiative formula for the system
     * @type {String}
     */
    CONFIG.Combat.initiative = {
        formula: "1d20",
        decimals: 2
    };

    // Define custom Entity classes
    CONFIG.Actor.documentClass = MyActor;
    CONFIG.Item.documentClass = MyItem;

    // Register sheet application classes
    Actors.unregisterSheet("core", ActorSheet);
    Items.unregisterSheet("core", ItemSheet);

    Actors.registerSheet(System.name, MyActorSheet, {makeDefault: true});
    Items.registerSheet(System.name, MyItemSheet, {makeDefault: true});

    // Register System Settings
    registerSystemSettings();

    // Preload Handlebars Templates
    preloadHandlebarsTemplates();

    // Register Handlebars helpers
    registerHandlebarsHelpers();

    // Register hooks
    registerHooks();
});


/**
 * Ready hook loads tables, and override's foundry's entity link functions to provide extension to pseudo entities
 */

Hooks.once("ready", async () => {

    console.debug("Importing data");

    // DataLoader.loadData("boons");
    // DataLoader.loadData("flaws");
    // DataLoader.loadData("careers");
    // DataLoader.loadData("origins");
    // DataLoader.loadData("races");
    // DataLoader.loadData("equipment");

    // UpdateUtils.updatePacks();
    // UpdateUtils.updatePaths();
    // UpdateUtils.updateProfiles();
    // UpdateUtils.updateSpecies();
    // UpdateUtils.updateEncounters();

    console.info("BOL | System Initialized.");
});
