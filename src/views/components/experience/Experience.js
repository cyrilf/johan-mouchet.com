// @flow

import * as React from "react";
import "./experience.scss";
import { Projects } from "../";

type Props = {
  experiences: [
    {
      company: [
        {
          URL: string,
          name: string
        }
      ],
      location: string,
      jobTitle: Node,
      startDate: Date,
      endDate: Date | string,
      lede: Node,
      projects: typeof Projects
    }
  ]
};

const Experience = (props: Props) => {
  const { experiences } = props;

  // TODO: Check logic, abstract to Utils?
  const getDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const startYear = start.getFullYear();
    const endYear = end.getFullYear();

    const startMonth = start.getMonth();
    const endMonth = end.getMonth();

    const yearDuration = endYear - startYear;
    const monthDuration = endMonth - startMonth;

    const yearDurationText =
      yearDuration >= 1 && yearDuration === 1
        ? `${yearDuration} year`
        : `${yearDuration} years`;
    const monthDurationText =
      monthDuration >= 1 && monthDuration === 1
        ? `${yearDuration} month`
        : `${yearDuration} months`;

    return (
      yearDurationText +
      (yearDurationText ? ` ${monthDurationText}` : monthDurationText)
    );
  };

  return !experiences
    ? null
    : experiences.map(experience => (
        <section className="c-experience" key={experience.startDate}>
          <h3 className="c-experience__heading">
            <a
              href={experience.company.URL}
              target={experience.company.URL && "_blank"}
              rel={experience.company.URL && "noopener noreferrer"}
              className={
                experience.company.URL && "c-experience__company external-link"
              }
            >
              {experience.company.name}
            </a>
            ,{experience.location} &mdash;
            {experience.jobTitle}
          </h3>

          <p className="c-experience__subheading">
            <span className="c-experience__date">
              {experience.startDate.getFullYear()}
              {experience.endDate.getFullYear() >
                experience.startDate.getFullYear() &&
                ` &ndash;` + experience.endDate.getFullYear()}
            </span>
            <span className="c-experience__duration">
              ({getDuration(experience.startDate, experience.endDate)})
            </span>
            )
            {experience.contractType && (
              <span className="c-experience__type">
                / {experience.contractType}
              </span>
            )}
          </p>

          <p className="c-experience__lede">{experience.lede}</p>

          {experience.projects && <Projects {...experience.projects} />}
        </section>
      ));
};

Experience.defaultProps = {
  prop1: 2
};

export default Experience;
