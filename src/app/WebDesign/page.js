import React from 'react';

export const metadata = {
  title: "Web Design",
  description: "Custom Web Design solutions for businesses.",
};

function WebDesign() {
  return (
    <div className="text-white min-h-screen mb-[90px]">
      <br />

      <div>
        {/* Header Section */}
        <div className="w-full bg-[#81818113] flex flex-col border-b border-[#5e5d5d] justify-center text-center py-[100px] mt-[50px]">
          <h2 className="text-[45px] md:text-5xl font-bold">
            Web Design
          </h2>
          <p className="text-[30px] md:text-3xl mt-2">
            Visionary Travel
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-[50px] w-[50%] mx-auto space-y-8">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold">
            Title: Redefining Travel with a Modern Website for Visionary Travel
          </h2>

          {/* Background */}
          <p className="text-base md:text-lg leading-relaxed">
            <strong>Background:</strong> <br />
            Visionary Travel is a premium travel agency specializing in curated travel experiences. Their previous website lacked a modern, visually appealing design that could captivate users and encourage bookings.
          </p>

          {/* Challenge */}
          <h3 className="text-xl md:text-2xl font-bold">Challenge:</h3>
          <ul className="list-disc ml-6 text-base md:text-lg leading-relaxed space-y-2">
            <li>
              <strong>Unattractive UI:</strong> The previous design lacked engaging visuals and modern UI elements.
            </li>
            <li>
              <strong>Poor Mobile Experience:</strong> The site was not optimized for mobile bookings.
            </li>
            <li>
              <strong>Conversion Issues:</strong> The booking process was unclear and discouraged users from completing transactions.
            </li>
          </ul>

          {/* Solution & Execution */}
          <h3 className="text-xl md:text-2xl font-bold">Solution & Execution:</h3>
          <ul className="list-disc ml-6 text-base md:text-lg leading-relaxed space-y-2">
            <li>Designed a **modern, immersive UI/UX** focusing on stunning travel visuals.</li>
            <li>Optimized the **website for mobile**, ensuring smooth browsing and booking on all devices.</li>
            <li>Improved the **navigation structure**, making it easier for users to explore destinations.</li>
            <li>Integrated a **one-click booking system** for seamless customer experience.</li>
          </ul>

          {/* Results */}
          <h3 className="text-xl md:text-2xl font-bold">Results:</h3>
          <ul className="list-disc ml-6 text-base md:text-lg leading-relaxed space-y-2">
            <li>Online bookings increased by **50%** within three months.</li>
            <li>Mobile traffic conversion rate improved by **70%**.</li>
            <li>User engagement metrics showed a **35% increase** in session duration.</li>
          </ul>

          {/* Client Feedback */}
          <h3 className="text-xl md:text-2xl font-bold">Client Feedback:</h3>
          <blockquote className="border-l-4 border-gray-400 pl-4 italic">
            "The new design is stunning and super easy to navigate. We've seen a huge spike in online bookings, and customers are loving the experience!"
          </blockquote>
          <p className="mt-2 font-semibold">
            — CEO, Visionary Travel
          </p>
        </div>
      </div>
    </div>
  );
}

export default WebDesign;
