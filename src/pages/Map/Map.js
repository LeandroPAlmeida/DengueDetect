import React from "react";
import { DataProvider } from "../../../DataContext";
import MapComponent from "./MapComponent";

export default function Map() {
  return (
    <DataProvider>
      <MapComponent />
    </DataProvider>
  );
}
