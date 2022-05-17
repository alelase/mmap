var __assign = (this && this.__assign) || function () {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
exports.__esModule = true;
var react_1 = require("react");
var MapContext_1 = require("../../contexts/MapContext");
var Marker = function (_a) {
  var onClick = _a.onClick, onRightClick = _a.onRightClick, infoWindowContent = _a.infoWindowContent, showInfoWindow = _a.showInfoWindow, options = __rest(_a, ["onClick", "onRightClick", "infoWindowContent", "showInfoWindow"]);
  var _b = (0, react_1.useState)(), marker = _b[0], setMarker = _b[1];
  var map = (0, react_1.useContext)(MapContext_1["default"]);
  (0, react_1.useEffect)(function () {
    console.log('entra en useEffect marker');
    if (!marker) {
      setMarker(new google.maps.Marker());
    }
    // remove marker from map on unmount
    return function () {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);
  (0, react_1.useEffect)(function () {
    console.log('entra en useEffect Marker!');
    if (marker && onClick) {
      marker.addListener('click', onClick);
    }
    if (marker && onRightClick) {
      console.log('add listener to right click!');
      marker.addListener('rightclick', onRightClick);
      //google.maps.event.addListener(marker, 'rightclick', onRightClick);
    }
  }, [onClick, onRightClick]);
  (0, react_1.useEffect)(function () {
    console.log('entra en useEffect separado para onRightClick!');
    if (marker && onRightClick) {
      console.log('add listener to right click!');
      marker.addListener('rightclick', onRightClick);
      //google.maps.event.addListener(marker, 'rightclick', onRightClick);
    }
  }, [onRightClick]);
  (0, react_1.useEffect)(function () {
    if (marker) {
      marker.setOptions(__assign(__assign({}, options), { map: map }));
    }
  }, [marker, options]);
  (0, react_1.useEffect)(function () {
    if (!showInfoWindow)
      return;
    var infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent,
      disableAutoPan: true
    });
    infoWindow.open({
      anchor: marker,
      map: map,
      shouldFocus: false
    });
    return function () { return infoWindow.close(); };
  }, [showInfoWindow, infoWindowContent, marker, map]);
  return null;
};
exports["default"] = Marker;
