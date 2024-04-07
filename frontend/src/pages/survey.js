import NavBar from "@/components/NavBar";
import { useState } from "react";
import Stepper from "@/components/Stepper";
import "../app/globals.css";
import SurveyBanner from "@/components/SurveyBanner";
import Questionnaire from "@/components/Questionnaire"

export default function Survey() {
  const [currentStep, setCurrentStep] = useState(0);
  const NUMBER_OF_STEPS = 4;

  const goToNextStep = () =>
    setCurrentStep((prev) => (prev === NUMBER_OF_STEPS - 1 ? prev : prev + 1));
  const goToPreviousStep = () =>
    setCurrentStep((prev) => (prev <= 0 ? prev : prev - 1));

  return (
    <div>
      <NavBar />
      <div className="block">
        <SurveyBanner />
        <div className="w-full pt-11 space-y-3.5 justify-center items-center">
          <div className="space-y-3.5">
            <h2>Personalize your Arc'teryx Experience</h2>
            <div className="flex w-full place-content-center">
            <Stepper
                currentStep={currentStep}
                numberOfSteps={NUMBER_OF_STEPS}
              />
              </div>
            <div className="flex">
              <br />
              <Questionnaire />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{/* <section className="flex gap-10">
                <button onClick={goToPreviousStep} className="">
                  Previous step
                </button>
                <button onClick={goToNextStep} className="">
                  Next step
                </button>
              </section> */}