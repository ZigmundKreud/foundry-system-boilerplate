import {System} from "./config.js";

/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {

    // Define template paths to load
    const templatePaths = [
        // ITEMS PROPERTIES
        "systems/" + System.name + "/templates/item/parts/equipment-properties.hbs",
        "systems/" + System.name + "/templates/item/parts/feature-properties.hbs"
    ];

    // Load the template parts
    return loadTemplates(templatePaths);
};
