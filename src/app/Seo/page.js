import React from 'react';

export const metadata = {
  title: "SEO Optimization",
  description: "Search Engine Optimization services.",
};

function SEOOptimization() {
  return (
    <div className="text-white min-h-screen mb-[90px]">
      <br />

      <div>
        <div className="w-[100%] bg-[#81818113] flex flex-col border-b-[1px] border-[#5e5d5d] justify-center text-center py-[100px] mt-[50px]">
          <h2 className="text-[45px] md:text-5xl font-bold">
            SEO & Search Engine Optimization
          </h2>
          <p className="text-[30px] md:text-3xl mt-2">
            PixelPerfect Retail
          </p>
        </div>

        <div className="mt-[50px] w-[50%] mx-auto space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Title: Driving Organic Growth for PixelPerfect Retail
          </h2>

          <p className="text-base md:text-lg leading-relaxed">
            <strong>Background:</strong> <br />
            PixelPerfect Retail, an online fashion store, was struggling with poor search rankings and needed an SEO overhaul.
          </p>

          <h3 className="text-xl md:text-2xl font-bold">Challenge:</h3>
          <ul className="list-disc ml-6 text-base md:text-lg leading-relaxed space-y-2">
            <li><strong>Low Organic Traffic:</strong> Website buried in Google search results.</li>
            <li><strong>Slow Website Speed:</strong> Unoptimized images and code affecting rankings.</li>
            <li><strong>Missing Keywords:</strong> Lack of strategic keyword integration.</li>
          </ul>

          <h3 className="text-xl md:text-2xl font-bold">Solution & Execution:</h3>
          <ul className="list-disc ml-6 text-base md:text-lg leading-relaxed space-y-2">
            <li>Implemented **keyword-optimized content** across the site.</li>
            <li>Optimized **site speed and mobile usability**.</li>
            <li>Built **high-quality backlinks** to improve domain authority.</li>
          </ul>

          <h3 className="text-xl md:text-2xl font-bold">Results:</h3>
          <ul className="list-disc ml-6 text-base md:text-lg leading-relaxed space-y-2">
            <li>Google rankings improved by **75%** in 6 months.</li>
            <li>Organic traffic increased by **50%**.</li>
            <li>Sales from search engine visitors grew by **30%**.</li>
          </ul>

          <h3 className="text-xl md:text-2xl font-bold">Client Feedback:</h3>
          <blockquote className="border-l-4 border-gray-400 pl-4 italic">
            "SEO was the game changer! Now we're ranking on page 1 for our top keywords and sales have surged."
          </blockquote>
          <p className="mt-2 font-semibold">— Marketing Manager, PixelPerfect Retail</p>
        </div>
      </div>
    </div>
  );
}

export default SEOOptimization;
