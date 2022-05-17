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
var useDeepCompareEffectForMaps_1 = require("./hooks/useDeepCompareEffectForMaps");
var Map = function (_a) {
  var onClick = _a.onClick, onRightClick = _a.onRightClick, onIdle = _a.onIdle, onBoundsChanged = _a.onBoundsChanged, onZoomChanged = _a.onZoomChanged, children = _a.children, style = _a.style, mapId = _a.mapId, options = __rest(_a, ["onClick", "onRightClick", "onIdle", "onBoundsChanged", "onZoomChanged", "children", "style", "mapId"]);
  // [START maps_react_map_component_add_map_hooks]
  var ref = (0, react_1.useRef)(null);
  var _b = (0, react_1.useState)(), map = _b[0], setMap = _b[1];
  (0, react_1.useEffect)(function () {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { mapId: mapId }));
    }
  }, [ref, map]);
  // [END maps_react_map_component_add_map_hooks]
  // [START maps_react_map_component_options_hook]
  // because React does not do deep comparisons, a custom hook is used
  // see discussion in https://github.com/googlemaps/js-samples/issues/946
  (0, useDeepCompareEffectForMaps_1.useDeepCompareEffectForMaps)(function () {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);
  // [END maps_react_map_component_options_hook]
  // [START maps_react_map_component_event_hooks]
  (0, react_1.useEffect)(function () {
    if (map) {
      ['click', 'rightclick', 'idle', 'bounds_changed'].forEach(function (eventName) {
        return google.maps.event.clearListeners(map, eventName);
      });
      if (onClick) {
        map.addListener('click', onClick);
      }
      if (onRightClick) {
        map.addListener('rightclick', onRightClick);
      }
      if (onIdle) {
        map.addListener('idle', function () { return onIdle(map); });
      }
      if (onBoundsChanged) {
        map.addListener('bounds_changed', function () {
          onBoundsChanged(map.getBounds());
        });
      }
      if (onZoomChanged) {
        map.addListener('zoom_changed', function () {
          onZoomChanged(map.getZoom());
        });
      }
    }
  }, [map, onClick, onRightClick, onIdle, onBoundsChanged, onZoomChanged]);
  // [END maps_react_map_component_event_hooks]
  // [START maps_react_map_component_return]
  return (<MapContext_1["default"].Provider value={map}>
    <div ref={ref} style={style}/>
  {children}
</MapContext_1["default"].Provider>);
  // [END maps_react_map_component_return]
};
exports["default"] = Map;
