import React, { useContext, useEffect, useState } from 'react';

import MapContext from '../../contexts/MapContext';

const Marker: React.FC<
  google.maps.MarkerOptions & {
    onClick?: () => void;
    onRightClick?: () => void;
    infoWindowContent?: string;
    showInfoWindow?: boolean;
  }
> = ({
  onClick,
  onRightClick,
  infoWindowContent,
  showInfoWindow,
  ...options
}) => {
  const [marker, setMarker] = useState<google.maps.Marker>();
  const map = useContext(MapContext);

  useEffect(() => {
    console.log('entra en useEffect marker');
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
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

  useEffect(() => {
    console.log('entra en useEffect separado para onRightClick!');

    if (marker && onRightClick) {
      console.log('add listener to right click!');
      marker.addListener('rightclick', onRightClick);
      //google.maps.event.addListener(marker, 'rightclick', onRightClick);
    }
  }, [onRightClick]);

  useEffect(() => {
    if (marker) {
      marker.setOptions({
        ...options,
        map
      });
    }
  }, [marker, options]);

  useEffect(() => {
    if (!showInfoWindow) return;

    const infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent,
      disableAutoPan: true
    });

    infoWindow.open({
      anchor: marker,
      map,
      shouldFocus: false
    });

    return () => infoWindow.close();
  }, [showInfoWindow, infoWindowContent, marker, map]);

  return null;
};

export default Marker;
