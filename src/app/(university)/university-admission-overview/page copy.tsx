import AdmissionArea from "@/components/admission/admission-area";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import CampusChooseArea from "@/components/campus/campus-choose-area";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "University Admission Overview - Acadia",
};

export default function UniversityAdmissionOverviewPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbTwo
        title="Students"
        subtitle=" Overview"
      />
      {/* breadcrumb area end */}

      {/* campus overview area start */}
      <CampusChooseArea />
      {/* campus overview area end */}

      {/* counter area start */}
      {/* <CounterThree /> */}
      {/* counter area end */}

      {/* admission area start */}
      <AdmissionArea />
      {/* admission area end */}

      {/* admission cta area start */}
      {/* <AdmissionCtaArea /> */}
      {/* admission cta area end */}

      {/* admission apply area start */}
      {/* <AdmissionApplyArea /> */}
      {/* admission apply area end */}
    </main>
  );
}