import React from "react";

const ExperineceSection = (props) => {
  const { userData } = props;
  
  return (
    <section id="experience" className="js-show-on-scroll pt-5 pb-24 xl:py-28">
      <div className="container grid grid-cols-1 xl:grid-cols-12">
        <div className="xl:col-start-3 xl:col-end-11">
          <h2 className="mb-16 text-primary-500 dark:text-primary-100 text-3xl xl:text-5xl text-center">
            My Work Experience
          </h2>

          <ul className="experience-timeline">
            {userData.experience.map((data) => {
              return (
                <li key={data.company} className="grid grid-cols-12 gap-5">
                  <h5 className="col-span-12 xl:col-span-4 text-lg text-primary-500 dark:text-primary-100">
                    {data.company}
                    <small className="block">
                      {data.startDate} - {data.endDate}
                    </small>
                  </h5>
                  <span className="seprator">
                    <span />
                  </span>
                  <p className="col-span-12 xl:col-span-7">{data.desc}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperineceSection;
