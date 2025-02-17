import React from 'react';

export const metadata = {
  title: "Social Media Marketing",
  description: "Social Media marketing, Management",
};

function SocialMedia() {
  return (
    // Parent container with black background and white text
    <div className=" text-white min-h-screen mb-[90px]">
      <br />

      <div>
        {/* Top Section: Uses the same bg-[#81818113] as your original snippet */}
        <div className="w-[100%] bg-[#81818113] flex flex-col border-b-[1px] border-[#5e5d5d] justify-center text-center py-[100px] mt-[50px]">
          <h2 className="text-[45px] md:text-5xl font-bold">
            Social Media Marketing Campaign
          </h2>
          <p className="text-[30px] md:text-3xl mt-2">
            Blue Horizon Apparel
          </p>
        </div>

        {/* Main Content Section */}
        <div className="mt-[50px] w-[50%] mx-auto space-y-8">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold">
            Title: Amplifying Brand Engagement for Blue Horizon Apparel
          </h2>

          {/* Background */}
          <p className="text-base md:text-lg leading-relaxed">
            <strong>Background:</strong> <br />
            Blue Horizon Apparel is a mid-sized fashion brand targeting a young, trend-savvy audience. 
            While their products were well-received in physical stores, their digital presence was underwhelming. 
            The brand sought to invigorate its social media channels to boost awareness, drive online sales, and 
            build an engaged community.
          </p>

          {/* Challenge */}
          <h3 className="text-xl md:text-2xl font-bold">Challenge:</h3>
          <ul className="list-disc ml-6 text-base md:text-lg leading-relaxed space-y-2">
            <li>
              <strong>Low Online Engagement:</strong> Despite high-quality product images, the brand's posts consistently 
              received low engagement.
            </li>
            <li>
              <strong>Fragmented Content Strategy:</strong> Content was inconsistent across platforms, causing brand messaging 
              to be diluted.
            </li>
            <li>
              <strong>Competitive Saturation:</strong> In a highly competitive market, standing out and capturing attention 
              among countless fashion brands was critical.
            </li>
            <li>
              <strong>Audience Targeting:</strong> The need to reach a specific demographic (millennials and Gen Z) required 
              a deep understanding of current trends and digital behavior.
            </li>
          </ul>

          {/* Research & Analysis */}
          <h3 className="text-xl md:text-2xl font-bold">Research & Analysis:</h3>
          <ul className="list-disc ml-6 text-base md:text-lg leading-relaxed space-y-2">
            <li>
              <strong>Audience Profiling:</strong> Conducted surveys and analyzed social media insights to create 
              detailed audience personas, pinpointing interests, preferred platforms, and content types.
            </li>
            <li>
              <strong>Competitor Benchmarking:</strong> Studied top-performing competitors to identify successful content 
              themes, engagement tactics, and visual styles.
            </li>
            <li>
              <strong>Content Audit:</strong> Reviewed past posts to identify trends in engagement, establishing baseline 
              metrics for improvement.
            </li>
            <li>
              <strong>Platform-Specific Insights:</strong> Analyzed data from Instagram, Facebook, and TikTok to tailor 
              content strategies to each platform’s strengths.
            </li>
          </ul>

          {/* Solution & Execution */}
          <h3 className="text-xl md:text-2xl font-bold">Solution & Execution:</h3>
          <ul className="list-disc ml-6 text-base md:text-lg leading-relaxed space-y-2">
            <li>
              <strong>Comprehensive Content Strategy:</strong>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  Developed a unified content calendar that balanced product showcases, behind-the-scenes glimpses, 
                  and user-generated content.
                </li>
                <li>
                  Created dynamic content including short-form videos, interactive stories, and live sessions featuring 
                  fashion influencers.
                </li>
              </ul>
            </li>
            <li>
              <strong>Influencer Partnerships:</strong>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  Collaborated with fashion influencers and micro-influencers who resonated with the target audience, 
                  hosting giveaways and exclusive previews.
                </li>
                <li>
                  Launched a hashtag campaign encouraging customers to share their style using Blue Horizon apparel, 
                  increasing organic reach.
                </li>
              </ul>
            </li>
            <li>
              <strong>Targeted Ad Campaigns:</strong>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  Devised targeted ad sets based on demographic data, interests, and behavioral insights, 
                  with A/B testing on creative elements to optimize performance.
                </li>
                <li>
                  Utilized retargeting strategies to re-engage visitors who had previously interacted with the brand.
                </li>
              </ul>
            </li>
            <li>
              <strong>Engagement & Community Building:</strong>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  Initiated regular Q&A sessions, polls, and contests to foster direct interaction.
                </li>
                <li>
                  Created a dedicated community group on Facebook to encourage discussions and share fashion tips.
                </li>
              </ul>
            </li>
          </ul>

          {/* Results */}
          <h3 className="text-xl md:text-2xl font-bold">Results:</h3>
          <ul className="list-disc ml-6 text-base md:text-lg leading-relaxed space-y-2">
            <li>
              <strong>Engagement Surge:</strong> Social media engagement increased by 80% within a six-week period.
            </li>
            <li>
              <strong>Follower Growth:</strong> The brand gained over 5,000 new followers across platforms, 
              with a particularly strong growth on Instagram.
            </li>
            <li>
              <strong>Sales Impact:</strong> Direct referrals from social media led to a 30% increase in online 
              sales during the campaign.
            </li>
            <li>
              <strong>Enhanced Brand Perception:</strong> Customer feedback and survey responses indicated a 
              revitalized, modern brand image that resonated well with the target audience.
            </li>
          </ul>

          {/* Client Feedback */}
          <h3 className="text-xl md:text-2xl font-bold">Client Feedback:</h3>
          <blockquote className="border-l-4 border-gray-400 pl-4 italic text-base md:text-lg leading-relaxed">
            "Our social media presence has been completely transformed. The blend of creative content, 
            strategic ad targeting, and authentic influencer partnerships has not only increased our engagement 
            but also driven significant sales growth. We now feel truly connected to our audience."
          </blockquote>
          <p className="mt-2 font-semibold text-base md:text-lg">
            — Marketing Director, Blue Horizon Apparel
          </p>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
