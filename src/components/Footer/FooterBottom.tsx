import { footerSocialLinks } from "@/static-data/footer";

export default function FooterBottom() {
  return (
    <>
      <div className="mt-10 border-t border-white/10 pt-12">
        {/* Social links hidden until profiles are active */}
        <p className="text-center text-base font-medium text-body-color">
        &copy; {new Date().getFullYear()} LeadRevs — Marketing for service businesses across the Triangle
        </p>
      </div>
    </>
  );
}
