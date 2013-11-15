
/*
* Para agregar soporte a IE 8 
*/
if ( ! window.getComputedStyle ) {
    // Creamos la super funcion
    window.getComputedStyle = function(el, pseudo) {
        this.el = el;
        this.getPropertyValue = function( prop ) {
            var re = /(\-([a-z]){1})/g;

            if ( prop == 'float' )
                prop = 'styleFloat';

            if ( re.test( prop ) ) {
                prop = prop.replace(re, function () {
                    return arguments[2].toUpperCase();
                });
            }
            return el.currentStyle[prop] ? el.currentStyle[prop] : null;
        }
        return this;
    }
}


// Soporte paara 'getProperty', 'setProperty' y 'removeProperty'
if( ! CSSStyleDeclaration.prototype.getProperty )
    CSSStyleDeclaration.prototype.getProperty = function(a) {
        return this.getAttribute(a);
    };

if( ! CSSStyleDeclaration.prototype.setProperty )
    CSSStyleDeclaration.prototype.setProperty = function(a,b) {
        return this.setAttribute(a,b);
    };

if( ! CSSStyleDeclaration.prototype.removeProperty )
    CSSStyleDeclaration.prototype.removeProperty = function(a) {
        return this.removeAttribute(a);
    };