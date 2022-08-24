import React from 'react';

function Geoview() {
  return (
   
    <div id="UC1" class="llwp-map" data-lang="en" style="height: 100vh;" data-config="{
                    'map': {
                        'interaction': 'dynamic',
                        'viewSettings': {
                             'zoom': 12,
                             'center': [60, -100],
                            'projection': 3978
                        },
                        'basemapOptions': {
                            'basemapId': 'transport',
                            'shaded': true,
                            'labeled': true
                        },
                        'listOfGeoviewLayerConfig': [
                        {
                          'geoviewLayerId': 'wmsLYR1',
                          'geoviewLayerName': {
                            'en': 'Première Nation / First Nation',
                            'fr': 'Première Nation / First Nation'
                          },
                          'metadataAccessPath': {
                            'en': 'https://services.aadnc-aandc.gc.ca/geomatics/services/Donnees_Ouvertes-Open_Data/Premiere_Nation_First_Nation/MapServer/WMSServer',
                            'fr': 'https://services.aadnc-aandc.gc.ca/geomatics/services/Donnees_Ouvertes-Open_Data/Premiere_Nation_First_Nation/MapServer/WMSServer'
                          },
                          'geoviewLayerType': 'ogcWms',
                          'listOfLayerEntryConfig': [{ 'layerId': '0' }]
                        }
                      ],
                    },
                    'theme': 'dark',
                    'components': ['app-bar', 'nav-bar', 'north-arrow', 'overview-map'],
                    'corePackages': ['basemap-panel', 'layers-panel', 'details-panel', 'geolocator'],
                    'suportedLanguages': ['en', 'fr']
                }"> <button onClick="cgpv.init()"> click</button></div>

  )
}

export default Geoview;