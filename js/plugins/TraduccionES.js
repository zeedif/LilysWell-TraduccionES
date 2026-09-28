//=============================================================================
// TraduccionES.js
//=============================================================================

/*:
 * @plugindesc Translates texts hardcoded in the RPG Maker MV engine into Spanish.
 * @author Zeedif
 *
 * @help
 * Some texts are written directly in the engine code (rpg_windows.js)
 * instead of the database, so they can't be translated from System.json.
 *
 * - Options screen: ON / OFF  ->  SÍ / NO
 *
 * No plugin commands.
 */

(function() {

    Window_Options.prototype.booleanStatusText = function(value) {
        return value ? 'SÍ' : 'NO';
    };

})();
