import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { themeJson } from "../components/theme.js";
import "../app/globals.css"
import { json } from "../../public/mocks/json.js";
import { useRouter } from "next/router";

function SurveyComponent() {
    const router = useRouter();
    const survey = new Model(json);
    survey.applyTheme(themeJson);
    survey.onComplete.add((sender, options) => {
      console.log(JSON.stringify(sender.data, null, 3));
      router.push('/home');
  });
    return (<Survey model={survey} />);
}

export default SurveyComponent;