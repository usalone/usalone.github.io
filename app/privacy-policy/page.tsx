export default function PrivacyPolicy() {
  return (
    <div className="py-12 px-6 md:px-16 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-12 text-[#201A16] dark:text-[#EAE1D9] tracking-tight">Privacy Policy</h1>
      
      <div className="prose prose-xl prose-strong:text-[#201A16] dark:prose-strong:text-[#EAE1D9] text-[#50453D] dark:text-[#D1C5B4] max-w-none">
        <p className="lead font-medium text-[#201A16] dark:text-[#EAE1D9]">This privacy policy applies to the <strong>Naspend</strong> (also known as Expense Manager in some regions) app (hereby referred to as "Application") for mobile devices that was created by <strong>Us Alone</strong> (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".</p>

        <h2 className="text-3xl font-bold text-[#201A16] dark:text-[#EAE1D9] mt-16 mb-6">Information Collection and Use</h2>
        <p>The Application is designed to function locally on your device. The Service Provider <strong>does not</strong> collect, transmit, or store any personally identifiable information (PII) or usage data on external servers.</p>
        <ul className="list-disc pl-8 space-y-4 my-6">
          <li><strong>Local Data Storage:</strong> All data entered into the Application is stored locally on your device using an internal database. This data is under your control and is not accessible to the Service Provider or any third parties.</li>
          <li><strong>Permissions and Device Access:</strong> The Application may request the following permissions to function properly:
            <ul className="list-circle pl-8 mt-4">
              <li><strong>Notifications:</strong> Used solely to send local daily reminders to record your expenses.</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-3xl font-bold text-[#201A16] dark:text-[#EAE1D9] mt-16 mb-6">Third Party Access</h2>
        <p>Since the Application operates offline and does not integrate with third-party analytics or advertising services in this version, no data is transmitted to or shared with third parties.</p>

        <h2 className="text-3xl font-bold text-[#201A16] dark:text-[#EAE1D9] mt-16 mb-6">Data Retention Policy</h2>
        <p>The Service Provider does not retain your data because it is not transmitted to us. Your data remains on your device until you decide to uninstall the Application.</p>

        <h2 className="text-3xl font-bold text-[#201A16] dark:text-[#EAE1D9] mt-16 mb-6">Security</h2>
        <p>The Service Provider values your trust in providing your Personal Information to the Application locally. While we strive to use commercially acceptable means to protect your local database, please remember that no method of electronic storage is 100% secure.</p>

        <h2 className="text-3xl font-bold text-[#201A16] dark:text-[#EAE1D9] mt-16 mb-6">Changes</h2>
        <p>This Privacy Policy may be updated from time to time. The Service Provider will notify you of any changes by updating this page.</p>
        <p className="bg-[#F5EFE6] dark:bg-[#211B16] p-4 rounded-xl border border-[#EBE1D9] dark:border-[#352D27] font-bold text-[#201A16] dark:text-[#EAE1D9]">This privacy policy is effective as of 2025-12-20</p>

        <h2 className="text-3xl font-bold text-[#201A16] dark:text-[#EAE1D9] mt-16 mb-6">Contact Us</h2>
        <p>If you have any questions, please contact the Service Provider via email at <a href="mailto:tuannam2505@gmail.com" className="text-[#8D4F00] dark:text-[#FFB870] font-bold hover:underline">tuannam2505@gmail.com</a>.</p>
      </div>
    </div>
  );
}