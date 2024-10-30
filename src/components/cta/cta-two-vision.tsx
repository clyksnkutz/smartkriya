import shape_underline from "@/assets/img/unlerline/cta-2-svg-1.svg";
import Image from "next/image";

export default function CtaTwoVision() {
  return (
    <section
    className="cta-area tp-cta-bg grey-bg"
    data-background="assets/img/cta/cta-bg-1.jpg"
    style={{ backgroundImage: "url(/assets/img/cta/cta-bg-1-green.jpg)" }}
  >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-lg-10">
            <div className="tp-cta-2-wrapper text-center">
              <h3 className="tp-cta-2-title">
                Smartkriya{' '}
                <span>
                  Vision
                  <Image
                    className="tp-underline-shape-12 wow bounceIn"
                    data-wow-duration="1.5s"
                    data-wow-delay=".4s"
                    src={shape_underline}
                    alt="shape-underline"
                  />
                </span><br/><p></p>
                <h3>Your Bridge from Campus to Successful Careers</h3>
                {/* Now{" "} */}
              </h3>
              {/* <p>Your Bridge from Campus to Successful Careers</p>
              <div className="tp-cta-2-form">
                <form action="#">
                  <span>
                    <EmailTwo />
                  </span>
                  <input type="text" placeholder="Enter your email address" />
                  <div className="tp-cta-2-btn">
                    <button className="tp-btn-round">Subscribe!</button>
                  </div>
                </form>
              </div>
              <div className="tp-cta-2-info-list">
                <span>
                  <span>
                    <CheckSvg />
                  </span>
                  Easy to Access
                </span>
                <span>
                  <span>
                    <CheckSvg />
                  </span>
                  No Credit card
                </span>
                <span>
                  <span>
                    <CheckSvg />
                  </span>
                  85,000 student onboard with us
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
