"use client";

import React from "react";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

const BakeryMap = () => {
  const position = { lat: 35.2733, lng: -119.0187 };

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-200 rounded-md">
        <p className="text-gray-600">Google Maps API key is missing</p>
      </div>
    );
  }
  return (
    <APIProvider apiKey={apiKey}>
      <Map
        defaultCenter={position}
        defaultZoom={14}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        mapId="couslandsBakeryMap"
        className="size-full rounded-md"
      >
        <AdvancedMarker position={position} title={"Cousland's Bakery"} />
      </Map>
    </APIProvider>
  );
};

export default BakeryMap;
