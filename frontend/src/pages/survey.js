import NavBar from "../components/NavBar";
import { useState } from "react";
import Stepper from "../components/Stepper";
import "../app/globals.css";
import SurveyBanner from "../components/SurveyBanner";
import Questionnaire from "../components/Questionnaire"
import Layout from "../components/layout";

export default function Survey() {
  return (
    <Layout>
    <div>
      <div className="block">
        <SurveyBanner />
        <div className="w-full pt-11 space-y-3.5 justify-center items-center">
          <div className="space-y-3.5">
            <h2>Personalize your Arc'teryx Experience</h2>
            <div className="flex">
              <br />
              <Questionnaire />
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}
