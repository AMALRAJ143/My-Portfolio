import "./education.css";
import { useEffect, useState } from "react";
import data from "./ed-data";
export default function Education() {
  const [educationData] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = educationData.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }

    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, educationData]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === educationData.length - 1 ? 0 : prevIndex + 1));
    }, 6000);

    return () => {
      clearInterval(slider);
    };
  }, [index, educationData.length]);
  
  return (
    <>
      <div id="container-2">
        <div id="edDetails">
          {
            educationData.map((item, indexEd) => {
              const { id, pic, course, edName, edPara, score, location } = item;
              let position = "nextSlide";
              if (indexEd === index) {
                position = "activSlide";
              }
              if (indexEd === index - 1 || (index === 0 && indexEd === educationData.length - 1)) {
                position = "lastSlide"
              }
              return (
                <div id="ed-slider" className={position} key={id}>
                  <h1 id="headline">Education Details</h1>
                  <div className="school">
                    <div className="schoolImg-container">
                      <div id="picture">
                        <img src={pic} alt="scl" className="sclImage"></img>
                      </div>
                    </div>
                    <div className="edText">
                      <h3 className="ed-name">{edName}</h3>
                      <h3 className="ed-course">{course}</h3>
                      <div className="ed-para">{edPara} <b className="score">" {score} "</b> </div>
                      <div className="location"><i ><i class="fa-solid fa-location-dot"></i><b>{location}</b> </i></div>
                    </div>
                  </div>
                </div>
              )
            })
          }
          {/* <div id="graduate">
            <i class="fa-solid fa-user-graduate activeSlide"></i>
          </div> */}
          <div>
            <i class="fa fa-chevron-circle-left " id="left-arrow" aria-hidden="true" onClick={() => setIndex(index - 1)} ></i>
          </div>
          <div>
            <i class="fa fa-chevron-circle-right " id="right-arrow" aria-hidden="true" onClick={() => setIndex(index + 1)}></i>
          </div>

        </div>
      </div>
    </>
  )
}
