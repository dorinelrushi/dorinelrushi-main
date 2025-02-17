import React from 'react';



function WebDevelopment() {
  return (
    <div className="text-white min-h-screen mb-[90px]">
      <br />

      <div>
        {/* Header Section */}
        <div className="w-full bg-[#81818113] flex flex-col border-b border-[#5e5d5d] justify-center text-center py-[100px] mt-[50px]">
          <h2 className="text-[45px] md:text-5xl font-bold">
            Web Development
          </h2>
          <p className="text-[30px] md:text-3xl mt-2">
            CloudSync Solutions
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-[50px] w-[50%] mx-auto space-y-8">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold">
            Title: Building a High-Performance Web Platform for CloudSync
          </h2>

          {/* Background */}
          <p className="text-base md:text-lg leading-relaxed">
            <strong>Background:</strong> <br />
            CloudSync Solutions provides cloud storage and file-sharing services for businesses. They needed a scalable,
            secure, and high-speed web application that could handle large user traffic while maintaining seamless functionality.
          </p>

          {/* Challenge */}
          <h3 className="text-xl md:text-2xl font-bold">Challenge:</h3>
          <ul className="list-disc ml-6 text-base md:text-lg leading-relaxed space-y-2">
            <li>
              <strong>Performance Issues:</strong> The previous website had slow load times and frequent downtimes.
            </li>
            <li>
              <strong>Scalability Problems:</strong> The architecture wasn’t prepared to handle the company's rapid growth.
            </li>
            <li>
              <strong>Security Concerns:</strong> Handling sensitive business data required enterprise-level security protocols.
            </li>
          </ul>

          {/* Solution & Execution */}
          <h3 className="text-xl md:text-2xl font-bold">Solution & Execution:</h3>
          <ul className="list-disc ml-6 text-base md:text-lg leading-relaxed space-y-2">
            <li>Developed a **scalable architecture** using **Next.js** and **Node.js**.</li>
            <li>Integrated **cloud storage APIs** for seamless data synchronization.</li>
            <li>Optimized the **backend database** with **MongoDB** to ensure efficient data handling.</li>
            <li>Implemented **advanced security measures**, including **SSL encryption & multi-factor authentication**.</li>
          </ul>

          {/* Results */}
          <h3 className="text-xl md:text-2xl font-bold">Results:</h3>
          <ul className="list-disc ml-6 text-base md:text-lg leading-relaxed space-y-2">
            <li>Website speed improved by **65%**, reducing load times from 4.8s to 1.6s.</li>
            <li>User engagement increased by **40%** due to smoother navigation.</li>
            <li>Security vulnerabilities decreased by **95%**, ensuring safe data storage.</li>
          </ul>

          {/* Client Feedback */}
          <h3 className="text-xl md:text-2xl font-bold">Client Feedback:</h3>
          <blockquote className="border-l-4 border-gray-400 pl-4 italic">
            "The transformation in our platform’s speed, security, and overall usability has been phenomenal. We can now scale without worrying about system crashes."
          </blockquote>
          <p className="mt-2 font-semibold">
            — CTO, CloudSync Solutions
          </p>
        </div>
      </div>
    </div>
  );
}

export default WebDevelopment;
