/// <reference types="google.maps" />
/// <reference types="googlemaps" />
import React from 'react';
interface MapProps extends google.maps.MapOptions {
    style: {
        [key: string]: string;
    };
    onClick?: (e: google.maps.MapMouseEvent) => void;
    onRightClick?: (e: google.maps.MapMouseEvent) => void;
    onIdle?: (map: google.maps.Map) => void;
    onBoundsChanged?: (bounds: google.maps.LatLngBounds | undefined) => void;
    onZoomChanged?: (zoom: number | undefined) => void;
    mapId?: string;
}
declare const Map: React.FC<MapProps>;
export default Map;
