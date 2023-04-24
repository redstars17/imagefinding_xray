var redstars = {
  "resourceType": "Observation",
  "id": "10c912c6-2020-4d7e-b081-4979e9725f60",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2023-03-31T02:45:36.072+08:00",
    "source": "#FlWyiX3ab6ba0pBs",
    "profile": ["https://203.64.84.150:58443/r5/fhir/StructureDefinition/ImageFindingObservationSDR4"]
  },
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">This is an image finding measurement</div>"
  },
  "extension": [{
    "url": "https://203.64.84.150:58443/r5/fhir/StructureDefinition/FindingIDR4",
    "valueIdentifier": {
      "system": "https://docs.google.com/spreadsheets/d/1BBBZZbEO82wkvLbHtbpa4ihdFTMoIG0KQGH5bgUoo70/edit#gid=896973653",
      "value": "S2023-00135"
    }
  }],
  "status": "final",
  "category": [{
    "coding": [{
      "system": "http://terminology.hl7.org/CodeSystem/observation-category",
      "code": "imaging",
      "display": "Imaging"
    }]
  }],
  "code": {
    "coding": [{
      "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
      "code": "image.finding",
      "display": "Image finding"
    }]
  },
  "subject": {
    "reference": "Patient/10328861",
    "display": "蔡政珉"
  },
  "effectiveDateTime": "2015-02-07T13:28:17-05:00",
  "performer": [{
    "reference": "Practitioner/10328862",
    "display": "Maria Angelina Yashinta G Dr. Sp.Rad"
  }],
  "component": [{
    "code": {
      "coding": [{
        "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
        "code": "image.finding.keyimage"
      }]
    },
    "valueString": "https://203.64.84.150:58443/r5/fhir/DocumentReference/665f781e-5666-4e22-a3c9-638d23ca1043"
  }, {
    "code": {
      "coding": [{
        "system": "Codesystem/TCUMIH707",
        "code": "external.auditory.canal"
      }]
    }, "valueString": ""
  },
  {
    "code": {
      "coding": [{
        "system": "Codesystem/TCUMIH707",
        "code": "tympanic.membrane"
      }]
    },
    "valueString": ""
  },
  {
    "code": {
      "coding": [{
        "system": "Codesystem/TCUMIH707",
        "code": "mastoid.air.cells"
      }]
    }, "valueString": ""
  }, {
    "code": {
      "coding": [{
        "system": "Codesystem/TCUMIH707",
        "code": "middle.ear.cavity"
      }]
    }, "valueString": ""
  }, {
    "code": {
      "coding": [{
        "system": "Codesystem/TCUMIH707",
        "code": "opacification.within.the"
      }]
    }, "valueString": ""
  }, {
    "code": {
      "coding": [{
        "system": "Codesystem/TCUMIH707",
        "code": "ossicles"
      }]
    }, "valueString": ""
  }, {
    "code": {
      "coding": [{
        "system": "Codesystem/TCUMIH707",
        "code": "labyrinthine.structures"
      }]
    }, "valueString": ""
  }, {
    "code": {
      "coding": [{
        "system": "Codesystem/TCUMIH707",
        "code": "otic.capsule"
      }]
    }, "valueString": ""
  }, {
    "code": {
      "coding": [{
        "system": "Codesystem/TCUMIH707",
        "code": "vestibular.aqueduct"
      }]
    }, "valueString": ""
  }, {
    "code": {
      "coding": [{
        "system": "Codesystem/TCUMIH707",
        "code": "facial.nerve"
      }]
    }, "valueString": ""
  }, {
    "code": {
      "coding": [{
        "system": "Codesystem/TCUMIH707",
        "code": "internal.auditory.canal"
      }]
    }, "valueString": ""
  }, {
    "code": {
      "coding": [{
        "system": "Codesystem/TCUMIH707",
        "code": "vascular"
      }]
    }, "valueString": ""
  },

  ]
}
