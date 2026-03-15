import PageTitle from "@/components/Common/PageTitle";
import ServiceLayout from "@/components/Service/ServiceLayout";
import { serviceData } from "@/static-data/service";
import { Service } from "@/types/service";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const service = serviceData.find((item) => item?.slug === params?.slug);

  if (service) {
    return {
      title: `${service.title} | LeadRevs`,
      description: service.description,
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
