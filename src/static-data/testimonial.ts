import { Testimonial } from "@/types/testimonial";
import { v4 as uuid } from "uuid";

export const testimonialData: Testimonial[] = [
  {
    id: uuid(),
    review:
      "LeadRevs completely transformed our online presence. We went from barely showing up on Google to being in the top 3 map results. Our calls have doubled in the last quarter.",
    companyLogo: null,
    companyName: "",
    name: "Mike R.",
    image: "/images/testimonial/image-1.png",
    designation: "Owner, Triangle HVAC Services",
  },
  {
    id: uuid(),
    review:
      "The Google Ads campaigns they built for us generate 30+ qualified leads per month. The ROI tracking makes it easy to see exactly what we're getting for our investment.",
    companyLogo: null,
    companyName: "",
    name: "Sarah T.",
    image: "/images/testimonial/image-2.png",
    designation: "Owner, Raleigh Plumbing Pros",
  },
  {
    id: uuid(),
    review:
      "Our new website loads fast, looks professional, and actually converts visitors into booked appointments. Best investment we've made in our business this year.",
    companyLogo: null,
    companyName: "",
    name: "David K.",
    image: "/images/testimonial/image-3.png",
    designation: "Owner, DK Electrical",
  },
  {
    id: uuid(),
    review:
      "They understand home service businesses inside and out. No generic marketing BS — everything is tailored to how our customers actually search and book.",
    companyLogo: null,
    companyName: "",
    name: "Jennifer L.",
    image: "/images/testimonial/image-4.png",
    designation: "Owner, CleanPest Solutions",
  },
];
