import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DeleteAccountFlow from "@/components/DeleteAccountFlow";

/**
 * Public account-deletion page. Kept indexable — Google Play's data-safety
 * policy requires a publicly reachable deletion URL, and users search
 * "delete Drop2Print account" directly.
 */
export const metadata = {
  title: "Delete Account",
  description:
    "Permanently delete your Drop2Print account and all associated data. Verify your identity, confirm, and your data is removed — this action cannot be undone.",
  alternates: { canonical: "/delete-account" },
  openGraph: {
    url: "/delete-account",
    title: "Delete your Drop2Print account",
    description:
      "Permanently delete your Drop2Print account and all associated data.",
  },
};

export default function DeleteAccountPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0c",
        color: "#f2efe9",
        display: "flex",
        flexDirection: "column",
      }}
      className="font-sans"
    >
      <Navbar />
      <DeleteAccountFlow />
      <Footer />
    </div>
  );
}
