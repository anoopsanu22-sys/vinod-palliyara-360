var APP_DATA = {
  "scenes": [
    {
      "id": "0-formal-living",
      "name": "Formal living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.1866159738670934,
        "pitch": 0.0018739976038713024,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -0.1229175596477372,
          "pitch": 0.0798837150164271,
          "rotation": 3.141592653589793,
          "target": "0-formal-living"
        },
        {
          "yaw": 1.1047145464709516,
          "pitch": 0.04157826948653742,
          "rotation": 2.356194490192345,
          "target": "1-living"
        },
        {
          "yaw": 0.9251162059272442,
          "pitch": -0.041280219682438,
          "rotation": 0,
          "target": "3-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -1.4432584036135587,
        "pitch": -0.014991980830975749,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -0.614099448416642,
          "pitch": -0.05812388981667027,
          "rotation": 1.5707963267948966,
          "target": "3-kitchen"
        },
        {
          "yaw": -1.2914930395077064,
          "pitch": 0.11180716888022957,
          "rotation": 3.141592653589793,
          "target": "2-dining-"
        },
        {
          "yaw": -2.404227247965279,
          "pitch": -0.03784916068495292,
          "rotation": 10.210176124166829,
          "target": "0-formal-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining-",
      "name": "Dining ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.16513507660220483,
        "pitch": -0.05434593051226777,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 0.16513507660220483,
          "pitch": -0.05434593051226777,
          "rotation": 3.141592653589793,
          "target": "2-dining-"
        },
        {
          "yaw": 1.1333356039856977,
          "pitch": -0.08898786033484107,
          "rotation": 2.356194490192345,
          "target": "3-kitchen"
        },
        {
          "yaw": -0.8017851731008854,
          "pitch": -0.02835377204567635,
          "rotation": 5.497787143782138,
          "target": "4-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.006701717765041693,
        "pitch": -0.0599679233238799,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 0.006701717765041693,
          "pitch": -0.0599679233238799,
          "rotation": 0,
          "target": "3-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-master-bedroom",
      "name": "Master bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.049674755633683176,
        "pitch": -0.011243985623227815,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -0.049674755633683176,
          "pitch": -0.011243985623227815,
          "rotation": 0,
          "target": "4-master-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Attingal",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
