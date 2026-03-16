import PageTitle from "@/components/Common/PageTitle";
import ServiceLayout from "@/components/Service/ServiceLayout";
import { serviceData } from "@/static-data/service";
import { Service } from "@/types/service";

type Props = {
  params: Promise<{ slug: string }>;
};

const metaDescriptions: Record<string, string> = {
  "website-design":
    "Website design for service businesses in Raleigh, Durham, Cary, Apex, and Chapel Hill. Built for Google visibility, mobile conversion, call tracking, and clear monthly reporting.",
  "google-ads":
    "Google Ads management for service businesses in Raleigh, Durham, Cary, Apex, and Chapel Hill. Focused on qualified calls, tracked leads, clear monthly reporting, and no long-term contracts.",
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
