//=============================================================================
// TraduccionES.js
//=============================================================================

/*:
 * @plugindesc Translates texts hardcoded in the RPG Maker MV engine into Spanish and fixes an engine crash.
 * @author Zeedif
 *
 * @help
 * Some texts are written directly in the engine code (rpg_windows.js)
 * instead of the database, so they can't be translated from System.json.
 *
 * - Options screen: ON / OFF  ->  SÍ / NO
 *
 * Engine fix:
 * - When Lily dies, the "Time Loop Information" common event runs
 *   DataManager.setupNewGame(), which leaves an empty map for one frame
 *   before the transfer to the start map. Holding a direction key in that
 *   frame crashed with "Cannot read property 'filter' of undefined"
 *   (Game_Map.tileEventsXy). The player can no longer move while a
 *   transfer is pending.
 *
 * No plugin commands.
 */

(function() {

    Window_Options.prototype.booleanStatusText = function(value) {
        return value ? 'SÍ' : 'NO';
    };

    var _Game_Player_canMove = Game_Player.prototype.canMove;
    Game_Player.prototype.canMove = function() {
        return !this.isTransferring() && _Game_Player_canMove.call(this);
    };

})();
