import XPCard from "./xpcard";

export default function Experience() {
  return (
    <div class="p-4 grid sm:grid-cols-1 md:grid-cols-2">
      <XPCard company="Sudoviz - Product Manager" yoe="1 Year" domain="System Integration" logo="/apisero.jpg"
      description="Led a team of 11 to develop a B2B SaaS platform for end to end application security workflow management."/>

        <XPCard company="GeeksForGeeks - Software Engineer" yoe="6 Months" domain="Ed-Tech" logo="/apisero.jpg"
      description="Developed features for write portal of Geeksforgeeks using Python Django, React, MySQL, and AWS."/>

        <XPCard company="Apisero - Software Engineer" yoe="1 Year" domain="System Integration" logo="/apisero.jpg"
      description="Developed APIs using Mule4 to integrate databases including MySQL, Netsuite, Salesforce, Samsara etc. 
      Gathered client requirements, created mapping sheets and documentations around integrations."/>

<XPCard company="Medaana - Cofounder" yoe="6 months" domain="Operation Automation" logo="/apisero.jpg"
      description="Developed a product for urban hospitals to automate the OPD appointment process by implementing QR based
      self appointment booking mechanism. Built using Django, Next, MySQL and AWS"/>
    </div>
  );
}
