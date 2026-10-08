export const metadata = {
  title: "Privacy Policy | Safezone",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <section className="py-10 sm:py-14 bg-ivory text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-charcoal mb-3 sm:mb-4">Privacy Policy</h1>
        <p className="text-charcoal-light text-sm sm:text-base">Last updated: September 14, 2026</p>
      </section>

      <section className="py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-sage text-charcoal-light">
          <h2>Introduction</h2>
          <p>At Safezone, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
          
          <h2>The Data We Collect About You</h2>
          <p>Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul>
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Financial Data</strong> includes payment card details (processed securely via our payment gateways).</li>
            <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of products you have purchased from us.</li>
          </ul>

          <h2>How We Use Your Personal Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul>
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal or regulatory obligation.</li>
          </ul>

          <h2>Data Security</h2>
          <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>
        </div>
      </section>
    </div>
  );
}
