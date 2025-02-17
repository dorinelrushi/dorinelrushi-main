import React from 'react';

export const metadata = {
  title: "Branding & Visual Identity",
  description: "Branding and Visual Identity services.",
};

function BrandingIdentity() {
  return (
    <div className="text-white min-h-screen mb-[90px]">
      <br />

      <div>
        <div className="w-[100%] bg-[#81818113] flex flex-col border-b-[1px] border-[#5e5d5d] justify-center text-center py-[100px] mt-[50px]">
          <h2 className="text-[45px] md:text-5xl font-bold">
            Branding & Visual Identity
          </h2>
          <p className="text-[30px] md:text-3xl mt-2">
            CreativeSpark Agency
          </p>
        </div>

        <div className="mt-[50px] w-[50%] mx-auto space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Title: Crafting a Unique Brand Identity for CreativeSpark
          </h2>

          <p className="text-base md:text-lg leading-relaxed">
            <strong>Background:</strong> <br />
            CreativeSpark, a creative agency, needed a strong, cohesive brand identity to stand out in the crowded digital space.
            They wanted an innovative yet professional look that reflected their cutting-edge solutions.
          </p>

          <h3 className="text-xl md:text-2xl font-bold">Challenge:</h3>
          <ul className="list-disc ml-6 text-base md:text-lg leading-relaxed space-y-2">
            <li><strong>Inconsistent Visual Identity:</strong> No uniform branding across platforms.</li>
            <li><strong>Poor Brand Recognition:</strong> Struggled to stand out against competitors.</li>
            <li><strong>Scalability Issues:</strong> Needed a brand that could evolve with future growth.</li>
          </ul>

          <h3 className="text-xl md:text-2xl font-bold">Solution & Execution:</h3>
          <ul className="list-disc ml-6 text-base md:text-lg leading-relaxed space-y-2">
            <li>Developed a **modern, versatile logo** with clean typography.</li>
            <li>Designed a **cohesive color palette** to align with brand values.</li>
            <li>Created **brand guidelines** for social media, print, and website use.</li>
          </ul>

          <h3 className="text-xl md:text-2xl font-bold">Results:</h3>
          <ul className="list-disc ml-6 text-base md:text-lg leading-relaxed space-y-2">
            <li>Brand recognition improved by **60%** in 3 months.</li>
            <li>Client inquiries increased by **40%** post-rebranding.</li>
            <li>Strong, consistent identity helped them scale successfully.</li>
          </ul>

          <h3 className="text-xl md:text-2xl font-bold">Client Feedback:</h3>
          <blockquote className="border-l-4 border-gray-400 pl-4 italic">
            "Our brand now feels professional, modern, and competitive. The transformation was beyond what we imagined!"
          </blockquote>
          <p className="mt-2 font-semibold">— CEO, CreativeSpark Agency</p>
        </div>
      </div>
    </div>
  );
}

export default BrandingIdentity;
