import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Slide from "react-reveal/Slide";
import Skills from './skills/skills.component.jsx';


export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

        <div className="row education">

          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item) => {
                let aches = item.Achievements.split(",,").map((ach) => {
                  return (<p>{ach}</p>);
                });
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.StartDate} - {item.EndDate}</em></p>
                      <div align = "left">
                        {aches}
                      </div>
                    </div>

                  </div>

                )
              })
            }
          </div>
        </div>


        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <div id="skills">
              <Container className="container-box rounded">
                <Slide bottom duration={500}>
                  <Skills />
                </Slide>
              </Container>
            </div>
          </div>
        </div>

      </section>
    );
  }
}