import shape_line from "@/assets/img/unlerline/program-1-svg-1.svg";
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
    <section className="program-area mb-75">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="tp-program-wrap wow fadeInUp" data-wow-delay=".3s">
              <div className="tp-section text-center mb-55">
                <h3 className="tp-section-title">
                  <span>
                    {" "}
                    Our{" "}
                    <Image
                      className="tp-underline-shape-2 wow bounceIn"
                      data-wow-duration="1.5s"
                      data-wow-delay=".4s"
                      src={shape_line}
                      alt="shape-line"
                    />
                  </span>{" "}
                  Approach
                </h3>
                <p>Customised curriculum aligned with industry needs with Hands-on, practical training methodologies that focus on four key areas.</p>
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
                    -Communication and writing skills
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
                    -AI digital skills
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
                    - Behavioural skills
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
                    - Interpersonal skills
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          {/* ))} */}
        </div>

        {/* cards */}



    


      </div>
    </section>
  );
}
