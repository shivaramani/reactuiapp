window.$ = window.jQuery = require('jquery')

window.S4 = function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
}
 
window.getGuid = function(){
    return (window.S4() + window.S4() + "-" + window.S4() + "-4" + window.S4().substr(0,3) + "-" + window.S4() + "-" + window.S4() + window.S4() + window.S4()).toLowerCase();
}
window.guid = (window.S4() + window.S4() + "-" + window.S4() + "-4" + window.S4().substr(0,3) + "-" + window.S4() + "-" + window.S4() + window.S4() + window.S4()).toLowerCase();
