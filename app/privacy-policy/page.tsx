import Image from "next/image"

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-4">
      <Image src="/awslc banner.jpg" alt="AWS Learning Club - UPHSL Banner" width={672} height={150} className='rounded-lg'/>
      <div className="w-full px-6 py-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl text-center text-[#ffa23f]">Privacy Policy</h1>
          
          <div className="text-center mb-8">
            <p className="text-sm text-black/70">Effective Date: October 2025</p>
          </div>

          <div className="prose prose-lg max-w-none text-black/70">
            <p className="leading-relaxed mb-6">
              The AWS Learning Club – UPHSL (AWSLC) recognizes and upholds the fundamental right of data privacy. In compliance with Republic Act No. 10173, otherwise known as the Data Privacy Act of 2012 (DPA), and its Implementing Rules and Regulations, AWSLC is committed to protecting the personal data it collects, processes, and stores.
            </p>

            <p className="leading-relaxed mb-8">
              This Privacy Policy describes how AWSLC collects, uses, stores, shares, and protects personal data obtained through membership registration, event participation, and related activities conducted through <a href="https://awslearningclub.uphsl.edu.ph" className="text-blue-600 hover:underline">https://awslearningclub.uphsl.edu.ph</a> ("Website") and official forms administered by duly authorized AWSLC officers.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl text-[#ffa23f] mb-4">Personal Data Collected</h2>
              <p className="text-gray-700 mb-4">AWSLC may collect personal data including, but not limited to, the following:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Full name</li>
                <li>Email address</li>
                <li>Educational institution and affiliation</li>
                <li>Contact information</li>
                <li>Event registration and attendance details</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl text-[#ffa23f] mb-4">Purpose of Processing</h2>
              <p className="text-gray-700 mb-4">Personal data is processed solely for legitimate and lawful purposes, including:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Membership registration and verification</li>
                <li>Event, workshop, and seminar organization and administration</li>
                <li>Communication of announcements, updates, and event-related information</li>
                <li>Documentation, reporting, and internal organizational records</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl text-[#ffa23f] mb-4">Methods Utilized for Automated Access</h2>
              <p className="text-gray-700">
                AWSLC utilizes automated systems such as online registration forms, cloud-based databases, and email communication platforms to facilitate the collection, storage, and management of personal data. These automated processes are used strictly for administrative and organizational purposes and do not involve automated decision-making or profiling that would produce legal or similarly significant effects on data subjects.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl text-[#ffa23f] mb-4">Sharing of Personal Data</h2>
              <p className="text-gray-700 mb-4">
                By registering with AWSLC and consenting to this Privacy Policy, data subjects authorize AWSLC to share personal data with authorized AWSLC officers and members strictly for purposes related to the planning, organization, and implementation of official AWSLC activities.
              </p>
              <p className="text-gray-700">
                Personal data may likewise be shared with event partners or sponsors when necessary for legitimate event-related purposes. AWSLC does not disclose personal data to third parties except as expressly stated in this Privacy Policy or as permitted under Sections 12 or 13 of the Data Privacy Act of 2012.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl text-[#ffa23f] mb-4">Risks Involved</h2>
              <p className="text-gray-700 mb-4">
                Risk refers to the potential for incidents that may result in harm or prejudice to data subjects or the organization, including unauthorized access, use, disclosure, alteration, or loss of personal data.
              </p>
              <p className="text-gray-700">
                AWSLC implements reasonable and appropriate physical, technical, and organizational measures to mitigate risks and protect personal data. However, absolute security cannot be guaranteed due to potential threats such as cyberattacks, malware, ransomware, computer viruses, or unauthorized access to manual records.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl text-[#ffa23f] mb-4">Data Protection and Security Measures</h2>
              <p className="text-gray-700 mb-4">AWSLC adopts generally accepted data privacy and information security standards to safeguard personal data. These measures include, but are not limited to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Access control mechanisms for digital and physical records</li>
                <li>Data encryption and classification where appropriate</li>
                <li>Technical safeguards to prevent accidental, unlawful, or unauthorized access, use, modification, or disclosure</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl text-[#ffa23f] mb-4">Storage and Retention</h2>
              <p className="text-gray-700 mb-4">
                Personal data collected by AWSLC is stored in secure, cloud-based systems utilizing Supabase, a managed cloud database service. AWSLC ensures that appropriate technical and organizational safeguards are in place to protect personal data stored in the cloud.
              </p>
              <p className="text-gray-700">
                Personal data shall be retained only for as long as necessary to fulfill the purposes for which it was collected. Unless a longer retention period is required by applicable laws or regulations, personal data shall be retained for a maximum period of two (2) years, after which it shall be securely deleted, anonymized, or otherwise disposed of in accordance with this Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl text-[#ffa23f] mb-4">Disposal</h2>
              <p className="text-gray-700">
                Physical records containing personal data shall be disposed of through secure shredding. Digital records shall be permanently deleted or rendered irretrievable using appropriate technical methods. In all instances, disposal procedures are implemented to prevent unauthorized access or recovery of personal data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl text-[#ffa23f] mb-4">Rights of a Data Subject</h2>
              <p className="text-gray-700 mb-4">In accordance with the Data Privacy Act of 2012, data subjects are entitled to the following rights:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Right to be Informed regarding the processing of their personal data</li>
                <li>Right of Access to personal data processed by AWSLC</li>
                <li>Right to Rectification of inaccurate or incomplete personal data</li>
                <li>Right to Erasure or Blocking of personal data when legally warranted</li>
                <li>Right to Object to the processing of personal data based on consent or legitimate interest</li>
                <li>Right to Data Portability, allowing secure transfer of personal data</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Data subjects may claim compensation for damages arising from the inaccurate, unlawful, or unauthorized processing of personal data. Complaints may be filed with the National Privacy Commission (NPC) in cases of data privacy violations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl text-[#ffa23f] mb-4">Changes to this Privacy Policy</h2>
              <p className="text-gray-700">
                AWSLC reserves the right to amend or update this Privacy Policy at any time. Data subjects shall be provided with a revised version when substantial changes are made. Previous versions shall be retained and made available upon request.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl text-[#ffa23f] mb-4">Feedback and Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For inquiries, concerns, or requests regarding this Privacy Policy or the exercise of data subject rights, you may contact:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-semibold text-gray-900">AWS Learning Club – UPHSL</p>
                <p className="text-gray-700">📧 <a href="mailto:awslc.uphsl@gmail.com" className="text-blue-600 hover:underline">awslc.uphsl@gmail.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page