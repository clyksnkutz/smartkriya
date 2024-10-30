import Image from "next/image";
import { UpArrowTwo } from "../svg";

const activities = [
  {
    id: 1,
    title: "Ready-to-Deploy Talent",
    icon: "/assets/img/campus/campus/ball.svg",
    delay: ".3s",
    items: ["Trained to your requirements", "AAccess to a pool of job ready candidates",],
  },
  {
    id: 2,
    title: "Cost-Effective Recruitment",
    icon: "/assets/img/campus/campus/ball.svg",
    delay: ".5s",
    items: [
      "Reduce training time and costs",
      "Improve retention rates",
    ],
  },
  {
    id: 3,
    title: "Increased productivity",
    icon: "/assets/img/campus/campus/ball.svg",
    delay: ".7s",
    items: [
      "Improved workflow",
       "Efficient deployment of new recruits", 
      ],
  },
  {
    id: 4,
    title: "Customised Training Programs",
    icon: "/assets/img/campus/campus/ball.svg",
    delay: ".7s",
    items: [
      "Tailored to your organisation",
       "Flexible training for existing employees", 
      ],
  },
];

export default function CampusActivityArea() {
  return (
    <section className="tp-campus-activity-area grey-bg pt-80 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-campus-activity-heading mb-70">
              <h3 className="tp-campus-activity-title">
                Why partner with us
                {" "}
              </h3>
            </div>
          </div>

          {activities.map((activity, index) => (
            <div className="col-lg-6 col-md-6" key={index}>
              <div
                className={`tp-campus-activity-content wow fadeInUp`}
                data-wow-delay={activity.delay}
              >
                <h4 className="tp-campus-activity-list-title">
                  <span>
                    <Image
                      src={activity.icon}
                      alt="Activity Icon"
                      width={37}
                      height={36}
                    />
                  </span>
                  {activity.title}
                </h4>
                <div className="tp-campus-activity-list">
                  <ul>
                    {activity.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a href="#">
                          {item}{" "}
                          <span>
                            <UpArrowTwo />
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
