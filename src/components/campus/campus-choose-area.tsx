
export default function CampusChooseArea() {
  return (
    <section className="tp-campus-choose-area pt-120 pb-30 grey-bg">
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-12">
            <div className="tp-campus-choose-wrapper text-center">
              <div
                className="tp-campus-choose-btn admission wow fadeInUp"
                data-wow-delay=".3s"
              >
                <p>Why train with us</p>
                <Link href="#down">
                  <span>
                    <DownArrowThree />
                  </span>
                </Link>
                <div
                  className="tp-campus-choose-content mb-10 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <h2 className="tp-campus-choose-title fs-50">
                  We don't just train you - we connect you directly with employers!
Our training is designed with real job roles in mind. Learn the exact skills top employers are looking for, taught by experts.

 Our placement team ensures you get multiple interview opportunities with our corporate partners who are actively looking to hire.

                  </h2>
                </div>
              </div>
            </div>
          </div> */}
                    <div className="col-lg-12">
            <div className="tp-campus-choose-wrapper text-center">
              <div
                className="tp-campus-choose-btn admission wow fadeInUp"
                data-wow-delay=".3s"
              >
                {/* <p>Why train with us</p> */}
                <h2>Why train with us</h2>

                <div
                  className="tp-campus-choose-content mb-10 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  {/* <h2 className="tp-campus-choose-title fs-50">
                  We don't just train you - we connect you directly with employers!
                  Our training is designed with real job roles in mind. Learn the exact skills top employers are looking for, taught by experts.

                  Our placement team ensures you get multiple interview opportunities with our corporate partners who are actively looking to hire.

                  </h2> */}
                  <h4>We don't just train you - we connect you directly with employers!
                  Our training is designed with real job roles in mind. Learn the exact skills top employers are looking for, taught by experts.

                  <br/><br/>Our placement team ensures you get multiple interview opportunities with our corporate partners who are actively looking to hire.
</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
