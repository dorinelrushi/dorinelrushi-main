'use client'
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Aktivizojmë plugin-in e ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

export default function HowItWorks() {
  // ========================== REFS ==========================
  const stepsRef = useRef([])           // Hapat në seksionin "How It Works"
  const shapeSectionRef = useRef(null)  // Kolona e djathtë që mban SVG-në
  const shapePathRef = useRef(null)     // Path-i që do të morfohet
  const featuresRef = useRef([])        // Boks-et në seksionin "Why Choose Us?"

  // ========================== DATA ==========================
  // 1. How It Works
  const stepsData = [
    {
      title: 'Package Selection',
      desc: 'We begin with a quick call or email exchange to discuss your goals. Whether you need a new logo, an e-commerce platform, or social media management, we clarify your vision and the scope of work from the start.',
    },
    {
      title: 'Research & Planning',
      desc: 'Based on our conversation, we recommend one of our predefined packages or create a custom solution. You’ll get a clear quote detailing everything included—no hidden fees.',
    },
    {
      title: 'Design & Development',
      desc: 'Once you select a package, we dive into research and strategy. This helps us understand your target audience, competitors, and design preferences before starting any creative or technical work.',
    },
    {
      title: 'Review & Revisions',
      desc: 'From crafting logos and brand materials to building UI/UX mockups, we bring your ideas to life. Once you approve the designs, we move into development, ensuring your website is fully responsive and user-friendly.',
    },
    {
      title: 'Delivery & Launch',
      desc: 'Your feedback is essential. At each milestone, you can request revisions so the final result meets—and exceeds—your expectations. We keep you updated regularly, so you know exactly how things are progressing',
    },
    {
      title: 'Ongoing Support',
      desc: 'Need extra help with hosting, updates, or marketing? We’re here for the long run. We can maintain and optimize your site, create new marketing materials, or consult on growth strategies as your business evolves.',
      isLast: true,
    },
  ]

  // 2. Why Choose Us?
  const featuresData = [
    {
      title: 'High Quality',
      desc: 'We ensure top-notch quality in every project we undertake, using the best tools and practices.',
    },
    {
      title: 'Timely Delivery',
      desc: 'Deadlines matter. We prioritize efficient workflows to deliver on time, every time.',
    },
    {
      title: 'Ongoing Support',
      desc: 'We offer maintenance and updates long after the launch, helping your business grow steadily.',
    },
  ]

  // ========================== SHAPE PATHS (3 faza) ==========================
  // 1. YLL (5 pika)
  const starPath = `
    M250,80
    L290,180 L400,180
    L310,240 L340,350
    L250,290 L160,350
    L190,240 L100,180
    L210,180 Z
  `
  // 2. KATROR
  const squarePath = `
    M100,100
    L400,100
    L400,400
    L100,400
    Z
  `
  // 3. TREKËNDËSH
  const trianglePath = `
    M100,400
    L250,100
    L400,400
    Z
  `

  // ========================== USEEFFECT (ANIMATIONS) ==========================
  useEffect(() => {
    // 1. Animacionet e teksteve “How It Works”
    stepsRef.current.forEach((stepEl) => {
      gsap.fromTo(
        stepEl,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stepEl,
            start: 'top 90%',
            toggleActions: 'play reverse play reverse',
          },
        }
      )
    })

    // 2. Vizatim fillestar + morph (YLL -> KATROR -> TREKËNDËSH)
    if (shapePathRef.current && shapeSectionRef.current) {
      // Fillimisht vendosim path-in në formë ylli
      gsap.set(shapePathRef.current, { attr: { d: starPath } })

      // Marrim gjatësinë totale të path-it (për efektin “vizatim”)
      const pathLength = shapePathRef.current.getTotalLength()

      // Konfigurojmë strokeDasharray dhe strokeDashoffset për line-drawing
      gsap.set(shapePathRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      })

      // Krijojmë timeline me 3 hapa:
      //  1) vizato yllin
      //  2) yll -> katror
      //  3) katror -> trekëndësh
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: shapeSectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
      })

      // (1) Vizato yllin (dashoffset: pathLength -> 0)
      tl.to(shapePathRef.current, {
        strokeDashoffset: 0,
        duration: 1,
      })

      // (2) YLL -> KATROR
      tl.to(shapePathRef.current, {
        attr: { d: squarePath },
        duration: 1,
      })

      // (3) KATROR -> TREKËNDËSH
      tl.to(shapePathRef.current, {
        attr: { d: trianglePath },
        duration: 1,
      })
    }

    // 3. Animacionet e “Why Choose Us?” (boks-et)
    featuresRef.current.forEach((featureEl, i) => {
      gsap.fromTo(
        featureEl,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: featureEl,
            start: 'top 90%',
            toggleActions: 'play reverse play reverse',
          },
        }
      )
    })
  }, [])

  // ========================== RENDER ==========================
  return (
    <div className="bg-black text-white min-h-screen">
      {/* ========== HOW IT WORKS SECTION ========== */}
      <section 
        className="
          w-[90%] lg:w-[80%] mx-auto 
          pt-32 pb-20 
          flex flex-col md:flex-row 
          space-y-8 md:space-y-0 md:space-x-10
        "
      >
        {/* Kolona e majtë: Hapat "How It Works" */}
        <div className="order-1 md:order-1 md:w-1/2 space-y-12">
          <h1 className="text-5xl font-bold mb-6">How It Works</h1>
          {stepsData.map((step, idx) => (
            <div
              key={idx}
              ref={(el) => (stepsRef.current[idx] = el)}
              className="opacity-0"
            >
              <h2 className="text-3xl font-semibold mb-2">{step.title}</h2>
              <p className="text-xl mb-2">{step.desc}</p>
              {/* Vijë vertikale, vetëm nëse nuk është i fundit */}
              {!step.isLast && (
                <div className="w-[1px] h-[100px] bg-white mt-4" />
              )}
            </div>
          ))}
        </div>

        {/* Kolona e djathtë: shape (pa mbushje, vetëm border i hollë) + morph + vizatim */}
        <div
          ref={shapeSectionRef}
          className="order-2 md:order-2 md:w-1/2 relative"
        >
          <div className="flex items-center justify-center md:sticky md:top-1/2 md:-translate-y-1/2">
            <svg
              className="
                mx-auto
                w-[300px] h-[300px]
                sm:w-[400px] sm:h-[400px]
                md:w-[500px] md:h-[500px]
                lg:w-[600px] lg:h-[600px]
                xl:w-[700px] xl:h-[700px]
                transition-all duration-500
              "
              viewBox="0 0 500 500"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Gradient portokalli/verdha */}
                <linearGradient id="shapeGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FFC107" />
                  <stop offset="100%" stopColor="#FF9800" />
                </linearGradient>
              </defs>
              <path
                ref={shapePathRef}
                fill="none"              // Asnjë mbushje, vetëm border
                stroke="url(#shapeGrad)" // Stroke me gradient
                strokeWidth="2"          // Border i hollë
                strokeLinecap="round"    // Këndet e vijës më të buta
                strokeLinejoin="round"
                // Nis me yll, do morph -> katror -> trekëndësh
                d={starPath}
              />
            </svg>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US SECTION ========== */}
      <section className="w-[90%] lg:w-[80%] mx-auto pb-40">
        <h2 className="text-5xl font-bold mb-6 text-center">Why Choose Us?</h2>
        <p className="text-xl text-center mb-12">
          We offer the perfect blend of quality, speed, and ongoing support to help your business thrive.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feat, i) => (
            <div
              key={i}
              ref={(el) => (featuresRef.current[i] = el)}
              className="opacity-0"
            >
              {/* Kornizë gradient portokalli/verdha (opsionale) */}
              <div className=" p-[1px] rounded-xl shadow-xl">
                <div className="bg-[#1d1c1c85] p-[10px] rounded-xl text-center flex flex-col items-center">
                  {/* Ikonë opsionale */}
                  <div className="text-4xl mb-3">✨</div>
                  <h3 className="text-2xl font-semibold mb-2">{feat.title}</h3>
                  <p className="text-lg">{feat.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
