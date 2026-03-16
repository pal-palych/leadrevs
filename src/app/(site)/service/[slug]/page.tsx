import PageTitle from "@/components/Common/PageTitle";
import ServiceLayout from "@/components/Service/ServiceLayout";
import { serviceData } from "@/static-data/service";
import { Service } from "@/types/service";

type Props = {
  params: Promise<{ slug: string }>;
};

const metaDescriptions: Record<string, string> = {
  "website-design":
    "LeadRevs builds SEO-optimized websites for local service businesses in Raleigh, Durham, Cary, Apex, and Chapel Hill. 15+ service pages, mobile-first design, call tracking, and clear monthly reporting.",
  "google-ads":
    "Google Ads management for service businesses across the Triangle. Exact match targeting, call tracking, monthly ROI reporting, and no long-term contracts. Month-to-month.",
  "google-business-profile":
    "Google Business Profile optimization and local SEO for service businesses in Raleigh, Durham, Cary, Apex, and Chapel Hill. Map Pack visibility, review strategy, and monthly reporting.",
};

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const service = serviceData.find((item) => item?.slug === params?.slug);

  if (service) {
    return {
      title: `${service.title} | LeadRevs`,
      description: metaDescriptions[service.slug] || service.description,
    };
  } else {
    return {
      title: "Not Found | LeadRevs",
      description: "Page not found",
    };
  }
}

export default async function ServiceDetailPage(props: Props) {
  const params = await props.params;
  const service = serviceData.find((item) => item?.slug === params?.slug);
  return (
    <>
      <PageTitle
        pageTitle={service?.title || "Service Details"}
        pageDescription={service?.description || ""}
      />
      <ServiceLayout service={service as Service} />
    </>
  );
}
