/**
 * Privacy Policy & Terms content — plain data, imported by the /privacy
 * page. Kept out of the component so server and client code share one
 * copy of the canonical policy text.
 */
export const POLICIES_UPDATED = "March 1, 2026";

export const policies = {
  privacy: {
    label: "Privacy Policy",
    sections: [
      {
        number: "01",
        title: "Information We Collect",
        tag: "Data Collection",
        content: null,
        subsections: [
          { title: "Personal Information", body: "When you create an account or place an order, we collect your name, email address, phone number, and account login credentials. This information is used solely to identify users and deliver our services." },
          { title: "Order Information", body: "We collect uploaded documents, print settings (pages, copies, color/B&W), order history, and transaction details. Uploaded files are exclusively used to fulfill your printing orders." },
          { title: "Payment Information", body: "Payments are processed through Razorpay. Drop2Print does not store your card or banking information. All payment data is securely handled by Razorpay under their own privacy policies." },
          { title: "Device Information", body: "We may collect technical information including device type, operating system, app usage logs, and IP address to improve platform performance and security." }
        ]
      },
      {
        number: "02",
        title: "How We Use Your Information",
        tag: "Data Usage",
        content: "Your information is used to process printing orders, send order confirmations, enable printer shops to access documents, process payments, improve service reliability, prevent fraud, and provide customer support. We only use information strictly necessary to operate the platform.",
        subsections: null
      },
      {
        number: "03",
        title: "File Handling & Document Privacy",
        tag: "Document Security",
        content: "Uploaded documents are stored temporarily on secure servers and shared only with your selected printing partner to complete the order. Files are automatically deleted after order completion. Drop2Print does not access or review document contents unless required for security or legal compliance.",
        subsections: null
      },
      {
        number: "04",
        title: "Data Sharing",
        tag: "Third Parties",
        content: null,
        note: "We do not sell or rent personal data to third parties.",
        subsections: [
          { title: "Printing Partners", body: "Documents and order details are shared only with the printing shop you selected to fulfill your print order." },
          { title: "Payment Providers", body: "Payment information is shared with Razorpay solely for transaction processing." },
          { title: "Legal Authorities", body: "Data may be disclosed if required by law, regulation, or valid court order." }
        ]
      },
      {
        number: "05",
        title: "Data Storage & Security",
        tag: "Security",
        content: "We implement industry-standard security measures including secure cloud storage, encrypted communication channels, and strict access controls for printing partners. However, no internet transmission is entirely risk-free.",
        subsections: null
      },
      {
        number: "06",
        title: "User Responsibilities",
        tag: "Your Duties",
        content: "Users are responsible for ensuring uploaded documents comply with copyright laws, do not contain illegal content, and are free from malicious software. Drop2Print reserves the right to suspend accounts that misuse the platform.",
        subsections: null
      },
      {
        number: "07",
        title: "Data Retention",
        tag: "Retention Period",
        content: "We retain data only as long as necessary to provide services, maintain transaction records, and meet legal obligations. Uploaded files are automatically deleted after order completion.",
        subsections: null
      },
      {
        number: "08",
        title: "Children's Privacy",
        tag: "Age Restriction",
        content: "Drop2Print services are strictly not intended for individuals under the age of 13. We do not knowingly collect data from minors.",
        subsections: null
      },
      {
        number: "09",
        title: "Policy Updates",
        tag: "Changes",
        content: "We may update this policy periodically to reflect changes in our practices or applicable law. Updated versions will be posted directly within the application with a revised date.",
        subsections: null
      }
    ]
  },
  terms: {
    label: "Terms & Conditions",
    sections: [
      {
        number: "01",
        title: "Service Description",
        tag: "About Drop2Print",
        content: "Drop2Print enables users to upload documents remotely and place printing orders with nearby printing partners. We connect users who want documents printed with local printing shops that fulfill orders. Drop2Print facilitates orders and payments but does not operate any physical printing services.",
        subsections: null
      },
      {
        number: "02",
        title: "User Accounts",
        tag: "Account Rules",
        content: "Users must provide accurate registration information, maintain the security of their account credentials, and accept full responsibility for all activities conducted through their account. Drop2Print may suspend any account that violates these terms.",
        subsections: null
      },
      {
        number: "03",
        title: "Printing Orders",
        tag: "Order Policy",
        content: "When placing an order, users must upload correct files, select accurate print settings, and verify document content before submission. Once a print job has started, modifications may not be possible. Users bear responsibility for file accuracy.",
        subsections: null
      },
      {
        number: "04",
        title: "Payments",
        tag: "Billing",
        content: "All payments are processed securely through Razorpay. A small platform fee may be applied for using Drop2Print services. Payment confirmation is provided after every successful transaction.",
        subsections: null
      },
      {
        number: "05",
        title: "Refund Policy",
        tag: "Refunds",
        content: null,
        subsections: [
          { title: "Eligible Situations", body: "Refunds may be issued for failed order processing, printing errors caused by the platform, or technical issues that prevented order completion." },
          { title: "Review Process", body: "All refund requests are reviewed by Drop2Print. Eligibility is determined on a case-by-case basis after a thorough investigation." }
        ]
      },
      {
        number: "06",
        title: "User Content",
        tag: "Your Files",
        content: "Users retain full ownership of uploaded documents. By uploading files, users grant Drop2Print a limited, non-exclusive right to process and transmit those files to printing partners solely for order fulfillment.",
        subsections: null
      },
      {
        number: "07",
        title: "Prohibited Activities",
        tag: "Restrictions",
        content: "Users must not upload illegal material, copyright-infringing content, offensive or harmful documents, or any malware or malicious software. Violations will result in immediate and permanent account suspension.",
        subsections: null
      },
      {
        number: "08",
        title: "Limitation of Liability",
        tag: "Legal Limits",
        content: "Drop2Print is not liable for the content of uploaded documents, printing errors from incorrect file uploads, delays caused by printing partners, or any loss arising from platform misuse.",
        subsections: null
      },
      {
        number: "09",
        title: "Termination",
        tag: "Account Suspension",
        content: "Drop2Print reserves the right to suspend or permanently terminate user accounts upon violation of these terms, detection of fraudulent activity, or misuse of the platform in any form.",
        subsections: null
      },
      {
        number: "10",
        title: "Governing Law",
        tag: "Jurisdiction",
        content: "These terms are governed exclusively by the laws of India. Any disputes arising from the use of Drop2Print shall be subject to the jurisdiction of courts located in India.",
        subsections: null
      },
      {
        number: "11",
        title: "Modifications",
        tag: "Updates",
        content: "Drop2Print may modify these Terms at any time without prior notice. Continued use of the platform after any changes implies your acceptance of the updated terms.",
        subsections: null
      }
    ]
  }
};
