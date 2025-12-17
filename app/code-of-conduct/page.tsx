import Image from "next/image"

const ConductPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-4">
      <Image src="/awslc banner.jpg" alt="AWS Learning Club - UPHSL Banner" width={672} height={150} className='rounded-lg'/>
      <div className="w-full px-6 py-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl text-center text-[#ffa23f]">Code of Conduct</h1>
          
          <div className="text-center mb-8">
            <p className="text-sm text-black/70">Effective Date: October 2025</p>
          </div>

          <div className="prose prose-lg max-w-none text-black/70">
            <p className="leading-relaxed mb-6">
              The AWS Learning Club – UPHSL (AWSLC) is committed to fostering a professional, inclusive, respectful, and safe environment for all members, officers, speakers, partners, and participants. This Code of Conduct establishes the standards of behavior expected of all individuals involved in AWSLC activities, whether conducted online or in person.
            </p>
            <p className="leading-relaxed mb-6">
              By participating in AWSLC events, programs, and activities, all individuals agree to comply with this Code of Conduct.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl text-[#ffa23f] mb-4">Scope and Application</h2>
              <p className="leading-relaxed mb-4">This Code of Conduct applies to all AWSLC-related activities, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Meetings, workshops, seminars, and training sessions</li>
                <li>Online platforms, social media channels, and communication tools administered by AWSLC</li>
                <li>Collaborative projects, competitions, and community engagements</li>
              </ul>
              <p className="leading-relaxed mt-4">
                This Code applies to all participants, including officers, members, volunteers, speakers, sponsors, and guests.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl text-[#ffa23f] mb-4">Expected Standards of Conduct</h2>
              <p className="leading-relaxed mb-4">All individuals are expected to conduct themselves in a manner that upholds professionalism, integrity, and mutual respect. Specifically, participants shall:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Treat all individuals with dignity, respect, and fairness</li>
                <li>Maintain a professional and courteous demeanor in all interactions</li>
                <li>Respect differing viewpoints, experiences, and backgrounds</li>
                <li>Comply with applicable laws, institutional policies, and AWSLC rules</li>
                <li>Follow instructions and guidelines issued by authorized AWSLC officers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl text-[#ffa23f] mb-4">Prohibited Conduct</h2>
              <p className="leading-relaxed mb-4">AWSLC strictly prohibits conduct that undermines a safe and respectful environment, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Harassment, discrimination, or intimidation of any form</li>
                <li>Offensive, abusive, or inappropriate language or behavior</li>
                <li>Bullying, coercion, or threats, whether verbal, written, or physical</li>
                <li>Disruptive behavior that interferes with AWSLC activities</li>
                <li>Unauthorized recording, distribution, or misuse of content or personal data</li>
                <li>Any act that violates applicable laws, regulations, or institutional policies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl text-[#ffa23f] mb-4">Inclusion and Non-Discrimination</h2>
              <p className="leading-relaxed mb-4">
                AWSLC is committed to providing an inclusive environment free from discrimination based on race, color, nationality, ethnicity, religion, sex, gender identity, sexual orientation, disability, age, or any other protected characteristic under applicable laws.
              </p>
              <p className="leading-relaxed">
                Discriminatory conduct of any kind shall not be tolerated.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl text-[#ffa23f] mb-4">Professional Use of Resources</h2>
              <p className="leading-relaxed">
                Participants shall use AWSLC resources, platforms, and materials responsibly and solely for their intended purposes. Unauthorized access, misuse, or damage to AWSLC property, systems, or intellectual assets is strictly prohibited.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl text-[#ffa23f] mb-4">Reporting of Violations</h2>
              <p className="leading-relaxed mb-4">
                Any individual who experiences or witnesses conduct that may violate this Code of Conduct is encouraged to report the incident promptly to authorized AWSLC officers through official communication channels.
              </p>
              <p className="leading-relaxed">
                All reports shall be handled with due confidentiality, fairness, and impartiality, subject to applicable laws and institutional procedures.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl text-[#ffa23f] mb-4">Enforcement and Disciplinary Action</h2>
              <p className="leading-relaxed mb-4">AWSLC reserves the right to take appropriate action in response to violations of this Code of Conduct. Such actions may include, but are not limited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Verbal or written warnings</li>
                <li>Removal from an event or activity</li>
                <li>Suspension or termination of membership</li>
                <li>Referral to relevant institutional authorities, when warranted</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Disciplinary measures shall be proportionate to the nature and severity of the violation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl text-[#ffa23f] mb-4">Retaliation</h2>
              <p className="leading-relaxed">
                Retaliation against any individual who, in good faith, reports a violation of this Code of Conduct or participates in an investigation is strictly prohibited. Any act of retaliation shall itself constitute a violation of this Code.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl text-[#ffa23f] mb-4">Amendments</h2>
              <p className="leading-relaxed">
                AWSLC reserves the right to amend or update this Code of Conduct at any time. Revisions shall take effect upon publication or notification to members and participants.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl text-[#ffa23f] mb-4">Acknowledgment</h2>
              <p className="leading-relaxed">
                Participation in AWSLC activities constitutes acknowledgment of and agreement to comply with this Code of Conduct.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConductPage