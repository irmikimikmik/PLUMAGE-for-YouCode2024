export const json = {
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "text",
        "name": "question1",
        "title": "Height",
        "isRequired": true,
        "inputType": "number"
       },
       {
        "type": "text",
        "name": "question2",
        "title": "Location",
        "isRequired": true,
        "placeholder": "City, State/Province/Territory, Country"
       },
       {
        "type": "boolean",
        "name": "question4",
        "title": "Are you interested in ReGEAR?",
        "isRequired": true
       }, 
       {
        "type": "checkbox",
        "name": "Personalise your intended use",
        "title": "Personalise your intended use",
        "description": "Share your favorite outdoor adventures: we'll handle the gear.",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "Hiking & Trekking"
         },
         {
          "value": "Item 2",
          "text": "Jogging"
         },
         {
          "value": "Item 3",
          "text": "Camping"
         },
         {
          "value": "Item 4",
          "text": "Alpine & Rock Climbing"
         },
         {
          "value": "Item 5",
          "text": "Cycling & Mountain Biking"
         },
         {
          "value": "Item 6",
          "text": "Travel & Everyday"
         },
         {
          "value": "Item 7",
          "text": "Ice Climbing"
         },
         {
          "value": "Item 8",
          "text": "Kayaking & Canoeing"
         },
         {
          "value": "Item 9",
          "text": "Trail Running"
         },
         {
          "value": "Item 10",
          "text": "Fishing"
         },
         {
          "value": "Item 11",
          "text": "Other"
         }
        ]
       }
      ]
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "file",
        "name": "question3",
        "title": "Take a photo of yourself",
        "description": "Take a photo of your face head-on, in natural lighting. We’ll recommend colours that best suit you."
       }
      ]
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "file",
        "name": "Take a full body photo of yourself",
        "title": "Take a full body photo of yourself",
        "description": "Take a photo of your full body head-on, in natural lighting, ensuring that your entire body is in frame.\n\nWe’ll find your Arc’teryx size."
       }
      ]
     }
    ]
   }