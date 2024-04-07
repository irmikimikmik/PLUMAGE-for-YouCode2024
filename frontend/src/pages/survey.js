import "../app/globals.css";
import SurveyBanner from "../components/SurveyBanner";
import Questionnaire from "../components/Questionnaire"
import Layout from "../components/layout";
let userData = require('../../public/mocks/userProfiles.json');
let updatedUserData = {};

export const getUpdatedUserData = () => updatedUserData;

const handleSurveyComplete = (results) => {
  setSurveyResults(results);
  console.log(JSON.stringify(results));
  updatedUserData = {
    name: userData[0].name,
    email: userData[0].email,
    height: results.question1,
    location: results.question2,
    interests: results.question3,
  };
};

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
              <Questionnaire onSurveyComplete={handleSurveyComplete}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}