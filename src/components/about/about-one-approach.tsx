


// images
import icon_1 from '@/assets/img/icon/about/about-icon-1.svg';
import icon_2 from '@/assets/img/icon/about/about-icon-2.svg';
import { CSSProperties } from 'react';

// list data 
const about_lists = [
    {
        id: 1,
        icon: icon_1,
        title: 'Building Trust',
        subtitle: 'We are committed to <br/> building trust'
    },
    {
        id: 2,
        icon: icon_2,
        title: 'Trusted by Students',
        subtitle: 'Most trusted & recommended <br/> by students'
    },
];

const imgStyle:CSSProperties = {
    height:'auto'
}

export default function AboutOneApproach() {
  return (
    <section className="about-area tp-about-bg grey-bg pt-25 pb-0">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 justify-content-center">
                <div className="tp-about-wrapper mb-60 wow fadeInRight" data-wow-delay=".3s">
                    <div className="tp-section text-center mb-40">
                        {/* <h5 className="tp-section-subtitle">About SMARTKRIYA</h5> */}
                        <h3 className="tp-section-title mb-30">Our&nbsp;
                            <span> Approach   
                                {/* <Image
                    className="tp-underline-shape-12 wow bounceIn"
                    data-wow-duration="1.5s"
                    data-wow-delay=".4s"
                    src={shape_underline}
                    alt="shape-underline"
                  />  */}
                  </span>
                        </h3>
                        <h4>Customised curriculum aligned with industry needs and hands-on practical training methodologies that focus on four key areas</h4>
                    </div>

                    </div>
                </div>
  
            </div>
        </div>
    </section>
  )
}
