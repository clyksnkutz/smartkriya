import shape_underline from "@/assets/img/unlerline/cta-2-svg-1.svg";

import Image from "next/image";

// const missionData = [
//   {
//     id: 1,
//     title: "Financial Sector",
//     description:
//     "Banking, Insurance, Fintech",
//     imgSrc: mission_thumb_1,
//   },
//   {
//     id: 2,
//     title: "BPO Excellence",
//     description:
//     "Non-Voice Processes",
//     imgSrc: mission_thumb_2,
//   },
//   {
//     id: 3,
//     title: "Project Management",
//     description:
//       "Technical and non - technical",
//     imgSrc: mission_thumb_3,
//   },
//   {
//     id: 4,
//     title: "Office Administration",
//     description:
//       "Administration and AI skills",
//     imgSrc: mission_thumb_4,
//   },
// ];


export default function ProgramArea() {
  return (
    <section className="program-area mb-75 mt-30">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="tp-program-wrap wow fadeInUp" data-wow-delay=".3s">
              <div className="tp-section text-center mb-55">
                
              <h3 className="tp-section-title mb-30">Our &nbsp;&nbsp;
                            <span> Approach   <Image
                    className="tp-underline-shape-12 wow bounceIn"
                    data-wow-duration="1.5s"
                    data-wow-delay=".4s"
                    src={shape_underline}
                    alt="shape-underline"
                  /> </span></h3>

                <h4>Customised curriculum aligned with industry needs with Hands-on, practical training methodologies that focus on four key areas.</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-event-wrap wow fadeInUp" data-wow-delay=".3s">
            <div className="tp-event-item">
              <div className="row align-items-center">
                <div className="col-md-2">
                </div>
                <div className="col-md-9">
                  <div className="tp-event-content">
                    <h3 className="tp-event-title">
                    - Providing training in new-age skills for non-tech careers
                    </h3>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="tp-event-wrap wow fadeInUp" data-wow-delay=".3s">
            <div className="tp-event-item">
              <div className="row align-items-center">
                <div className="col-md-2">
                </div>
                <div className="col-md-9">
                  <div className="tp-event-content">
                    <h3 className="tp-event-title">
                    - Fostering an ecosystem of practical learning and innovation for professional growth
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          {/* ))} */}
        </div>
        <div className="tp-event-wrap wow fadeInUp" data-wow-delay=".3s">
            <div className="tp-event-item">
              <div className="row align-items-center">
                <div className="col-md-2">
                </div>
                <div className="col-md-9">
                  <div className="tp-event-content">
                    <h3 className="tp-event-title">
                    - Partnering with industry leaders to ensure our curriculum remains at the forefront of industry needs
                    </h3>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="tp-event-wrap wow fadeInUp " data-wow-delay=".3s ">
            <div className="tp-event-item">
              <div className="row align-items-center ">
                <div className="col-md-2">
                </div>
                <div className="col-md-9 ">
                  <div className="tp-event-content ">
                    <h3 className="tp-event-title " >
                    - Empowering students with not just technical skills, but also critical thinking, problem-solving and adaptability skills
                    </h3>
                  </div>
                </div>
              </div>
            </div>
        </div>




    


      </div>
    </section>
  );
}
