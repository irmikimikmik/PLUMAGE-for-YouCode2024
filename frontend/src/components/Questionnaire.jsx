"use client";
import "survey-core/defaultV2.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

const surveyJson = {
  pages: [
    { "name": "Basic Information",
      elements: [
        {
          name: "Height",
          title: "Height",
          type: "text",
          isRequired: "true",
        },
        {
          name: "Location",
          title: "Location",
          type: "text",
          isRequired: "true",
        },
      ],
    },
    {
      elements: [
        {
          name: "Activity",
          choices: [
            "Hiking & Trekking",
            "Jogging",
            "Camping",
            "Alpine & Rock Climbing",
            "Cycling & Mountain Biking",
            "Travel & Everyday",
            "Ice Climbing",
            "Kayaking & Canoeing",
            "Trail Running",
            "Fishing",
            "Other",
          ],
          isRequired: true,
          colCount: 4,
        },
      ],
    },
  ],
  pageNextText: "Next",
  pagePrevText: "Back",
  completeText: "Submit",
};

export default function Questionnaire() {
  const survey = new Model(surveyJson);
  survey.currentPage = survey.getPageByName("height");
  survey.nextPage();


  return <Survey model={survey} />;
}
