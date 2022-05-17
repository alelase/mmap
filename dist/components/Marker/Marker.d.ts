/// <reference types="google.maps" />
/// <reference types="googlemaps" />
import React from 'react';
declare const Marker: React.FC<google.maps.MarkerOptions & {
    onClick?: () => void;
    onRightClick?: () => void;
    infoWindowContent?: string;
    showInfoWindow?: boolean;
}>;
export default Marker;
