"use strict";
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
var Marker_1 = require("../Marker/Marker");
var color = '#0000ff';
var svg = window.btoa("\n  <svg fill=\"".concat(color, "\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 240\">\n    <circle cx=\"120\" cy=\"120\" opacity=\".6\" r=\"70\" />\n    <circle cx=\"120\" cy=\"120\" opacity=\".3\" r=\"90\" />\n    <circle cx=\"120\" cy=\"120\" opacity=\".2\" r=\"110\" />\n  </svg>"));
var ClusterMarker = function (_a) {
  var position = _a.position, count = _a.count, onClick = _a.onClick, onRightClick = _a.onRightClick, options = __rest(_a, ["position", "count", "onClick", "onRightClick"]);
  var clusterOptions = {
    icon: {
      url: "data:image/svg+xml;base64,".concat(svg),
      scaledSize: new google.maps.Size(45, 45)
    },
    label: {
      text: String(count),
      color: 'rgba(255,255,255,0.9)',
      fontSize: '12px'
    },
    zIndex: Number(google.maps.Marker.MAX_ZINDEX)
  };
  return (<Marker_1["default"] position={position} icon={clusterOptions.icon} label={clusterOptions.label} zIndex={clusterOptions.zIndex} onClick={onClick} onRightClick={onRightClick} {...options}/>);
};
exports["default"] = ClusterMarker;
