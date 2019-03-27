var _getComputedStyle;
if (document.defaultView && document.defaultView.getComputedStyle) {
  _getComputedStyle = function (elem, name) {
    var ret, defaultView, computedStyle, width,
        style = elem.style;

    name = name.replace(/([A-Z]|^ms)/g, "-$1").toLowerCase();

    if ((defaultView = elem.ownerDocument.defaultView) &&
        (computedStyle = defaultView.getComputedStyle(elem, null))) {

      ret = computedStyle.getPropertyValue(name);
    }

    // A tribute to the "awesome hack by Dean Edwards"
    // WebKit uses "computed value (percentage if specified)" instead of "used value" for margins
    // which is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
    /*if ( !jQuery.support.pixelMargin && computedStyle && rmargin.test( name ) && rnumnonpx.test( ret ) ) {
      width = style.width;
      style.width = ret;
      ret = computedStyle.width;
      style.width = width;
    }*/

    return ret;
  };
}

export {_getComputedStyle}
