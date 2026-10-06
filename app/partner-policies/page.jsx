import PartnerPolicy from "@/components/PartnerPolicy";

export const metadata = {
  title: "Partner Privacy Policy & Terms",
  description:
    "Privacy Policy and Terms and Conditions for printing shops, cafés and stationery partners using the Drop2Print Partner App.",
  alternates: { canonical: "/partner-policies" },
  openGraph: {
    url: "/partner-policies",
    title: "Drop2Print — Partner Privacy Policy & Terms",
  },
};

export default function PartnerPolicies() {
  return <PartnerPolicy />;
}
