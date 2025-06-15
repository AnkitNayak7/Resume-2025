import React from 'react';
import './App.css';

function App() {
  return (
    <div className="resume-bg">
      <div className="resume-pages-container">
        {/* Page 1 */}
        <section className="resume-page">
          <header className="resume-header">
            <h1>Ankit Nayak</h1>
            <h2>Technology Lead @ Knowledge Lens: A Rockwell Automation Company</h2>
            <div className="resume-contact">
              <span>📍 Bangalore, KA</span>
              <span>📞 +91 7978609324</span>
              <span>✉️ ankit.nyk2331@gmail.com</span>
              <span>🔗 LinkedIn</span>
              <span>🌐 Website</span>
            </div>
          </header>
          <div className="resume-content text-align">
            <div className="resume-left">
              <section>
                <h3>Education</h3>
                <p><b>MBA (2014 – 2016)</b> – Utkal University, Bhubaneswar, Odisha</p>
                <p><b>BBA (2011 – 2014)</b> – B.J.B Autonomous College, Bhubaneswar, Odisha</p>
              </section>
              <section>
                <h3>Core Skills</h3>
                <ul>
                  <li><b>Project & Technical Leadership:</b> End-to-End Lifecycle Management, Cross-Functional Team Coordination, Agile Methodologies</li>
                  <li><b>Project Management:</b> Timeline Planning, Resource and Budget Management, Stakeholder Communication, Risk Mitigation</li>
                  <li><b>Tools for Management:</b> Jira, Azure DevOps, GitLab, GitHub Actions</li>
                  <li><b>Cloud & Database:</b> AWS, Azure, MySQL, MongoDB, Redshift, ElasticSearch</li>
                  <li><b>Programming & Frameworks:</b> Python, JavaScript, Tornado, Flask</li>
                  <li><b>Data Analysis & Visualization:</b> Spotfire, R Shiny, Data Processing, Report Automation</li>
                  <li><b>DevOps & CI/CD:</b> GitHub Actions, Jenkins, GitLab, PyCharm, Visual Studio Code</li>
                </ul>
              </section>
              <section>
                <h3>Awards & Recognition</h3>
                <ul>
                  <li>Sept 2021: Extra Mile Award</li>
                  <li>Mar 2021: Star of the Month for timely delivery</li>
                  <li>Aug 2020: Appreciation from Govt. of Karnataka for COVID-19 voluntary work</li>
                  <li>Nov 2018: Best Initiator of the Year at Knowledge Lens</li>
                </ul>
              </section>
            </div>
            <div className="resume-right">
              <section>
                <h3>Summary</h3>
                <p>Project Manager and Technology Lead with over 7 years of software development and project management expertise. Extensive experience with pharma clients, including Amgen and Pfizer, delivering applications focused on Process and Knowledge Management. Proficient in leading cross-functional teams, driving quality standards, and ensuring timely project completion. Skilled in Programming, Cloud Technologies, Data Ingestion, and Visualization.</p>
              </section>
              <section>
                <h3>Professional Experience</h3>
                <div className="job-block">
                  <b>Technology Lead (Sept 2019 – Present)<br/>Knowledge Lens: A Rockwell Automation Company</b>
                  <ul>
                    <li><b>Project Lead – FactoryTalk DataMosaix (FTDM):</b>
                      <ul>
                        <li>Led the DataOps application project, managing the entire lifecycle from stakeholder engagement to resource planning, effort estimation, and execution timelines.</li>
                        <li>Coordinated cross-functional teams to ensure seamless solution delivery and actively participated in development and testing phases to uphold quality standards.</li>
                        <li>Collaborated with internal teams and stakeholders to eliminate unnecessary implementations, reducing the team's effort by approximately 20%.</li>
                        <li>Implemented effective risk mitigation strategies and enhanced team coordination, achieving a 30% reduction in project delays.</li>
                      </ul>
                    </li>
                    <li><b>Technology Lead – Product and Knowledge Management (PKM):</b>
                      <ul>
                        <li>Led a team for Pfizer's Data Ingestion Module, collaborating with Infosys, Rockwell, and Pfizer to develop the iRME solution.</li>
                        <li>Designed and implemented the Visual Recipe Builder (VRB) to introduce Branching and Looping functionality tailored for pharmaceutical use cases.</li>
                        <li>Contributed to application enhancements and optimized MongoDB queries, significantly improving performance and efficiency.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </section>
        {/* Page 2 */}
        <section className="resume-page">
          <div className="resume-content text-align">
            <div className="resume-right">
              <section>
                <h3>Professional Experience (contd.)</h3>
                <div className="job-block">
                  <ul>
                    <li><b>Backend Developer – Non-Conformance Trending (NLP):</b>
                      <ul>
                        <li>Worked on a data processing project leveraging AWS Lambda, Step Functions, Redshift, Python, S3, Databricks, and Spotfire technologies.</li>
                        <li>Developed Lambda modules to retrieve data from S3, utilized Step Functions to manage orchestration and status tracking and employed Databricks for data processing and transformation.</li>
                        <li>Ingested processed Parquet file data into Redshift and created comprehensive reports for Drug Quality Controllers and SMEs to effectively monitor deviations from quality parameters.</li>
                      </ul>
                    </li>
                    <li><b>Backend Developer – Process Development and HLEE (Holistic Lab Execution Environment):</b>
                      <ul>
                        <li>Collaborated with the ZS team to build an Enterprise Data Lake, focusing on architectural design, pipeline orchestration, and managing full and incremental data loads.</li>
                        <li>Successfully integrated EC2 instances with Databricks for seamless operations.</li>
                        <li>Developed a Redshift module to ingest Parquet files from S3 into Redshift, significantly enhancing performance.</li>
                        <li>Created Spotfire reports to streamline the monitoring of data ingestion, generate alerts, and simplify maintenance tasks.</li>
                      </ul>
                    </li>
                    <li><b>Backend Developer – Support Lens Application:</b>
                      <ul>
                        <li>Designed and developed an incident management application to efficiently capture, record, and manage user-reported incidents.</li>
                        <li>Automated workflows for incident classification, prioritization, and assignment, significantly reducing manual effort and improving operational efficiency.</li>
                        <li>Implemented a dynamic assignment mechanism to automatically allocate incidents to the appropriate support groups or individuals, further enhancing efficiency and response times.</li>
                        <li>Integrated the "Support Lens" application with various systems and tools, enabling seamless data exchange and improving connectivity across the IT ecosystem.</li>
                      </ul>
                    </li>
                  </ul>
                  <b>Junior Data Scientist (Nov 2017 – Aug 2019)<br/>Knowledge Lens</b>
                  <ul>
                    <li><b>Backend Developer – GLENS Air Quality Monitoring System:</b>
                      <ul>
                        <li>Preprocessed and cleaned device and analyzer data to ensure accuracy and consistency.</li>
                        <li>Analyzed data based on recency and frequency to calculate Air Quality Index (AQI) exceedances, providing actionable insights into air pollution trends.</li>
                        <li>Developed interactive reports and automated data analysis processes using Python and R Shiny, enhancing data visualization and accessibility.</li>
                        <li>Utilized Elasticsearch and MySQL as secondary databases for efficient data management and retrieval.</li>
                        <li>Redesigned and implemented a module/service to create an AQI Dashboard, enabling stakeholders to monitor air quality metrics in real-time effectively.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
