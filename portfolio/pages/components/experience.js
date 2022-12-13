import XPCard from "./xpcard";

export default function Experience() {
  return (
    <div class="p-4 grid sm:grid-cols-1 md:grid-cols-2">
      <XPCard company="Sudoviz" yoe="1 Year" domain="System Integration" logo="/apisero.jpg"
      description="Led a team of 11 to develop a B2B SaaS platform for end to end application security workflow management."/>

        <XPCard company="GeeksForGeeks" yoe="6 Months" domain="Ed-Tech" logo="/apisero.jpg"
      description="Developed features for write portal of Geeksforgeeks using Python Django, React, MySQL, and AWS."/>

        <XPCard company="Apisero" yoe="1 Year" domain="System Integration" logo="/apisero.jpg"
      description="Developed APIs using Mule4 to integrate databases including MySQL, Netsuite, Salesforce, Samsara etc. 
      Gathered client requirements, created mapping sheets and documentations around integrations."/>
    </div>
  );
}
