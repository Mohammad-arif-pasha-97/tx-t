import React, { useState, useEffect, useRef } from 'react';
import tanvoxabout from '../assets/tanvoxabout.jpg';
import TANVOXIMG from '../assets/TANVOXIMG.jpeg';
import globalIcon from '../assets/global.png';

const About = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);
  // Counting animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Animate counters
            animateCounter(25, setCount1, 2000);
            animateCounter(50, setCount2, 2200);
            animateCounter(5, setCount3, 1800);
            animateCounter(20, setCount4, 2400);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounter = (target, setState, delay) => {
    setTimeout(() => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setState(target);
          clearInterval(timer);
        } else {
          setState(Math.floor(current));
        }
      }, 30);
    }, delay);
  };

  const team = [
    { name: "Sare Chinna Venkata Subbaiah", role: "CEO", description: "Visionary leader with 5+ years in tech innovation" },
    { name: "Veera Bangaru", role: "CFO", description: "Financial expert ensuring sustainable growth" },
    { name: "Dattimola Naveen", role: "CTO", description: "Technical architect of cutting-edge solutions" },
    { name: "Siddartha Nemail", role: "CMO", description: "Marketing strategist building brand excellence" },
    { name: "Kalvacherla Akhil", role: "COO", description: "Operations expert driving efficiency and growth" }
  ];

  const timeline = [
    { year: "2019", title: "Founded", description: "Tanvox Technologies was established with a vision to deliver innovative software solutions." },
    { year: "2020", title: "First Major Project", description: "Successfully delivered our first enterprise-level software solution." },
    { year: "2021", title: "Team Expansion", description: "Grew our team to 20+ talented developers and designers." },
    { year: "2022", title: "50+ Projects", description: "Celebrated the milestone of completing over 50 successful projects." },
    { year: "2023", title: "Innovation Award", description: "Received recognition for excellence in software development." },
    { year: "2024", title: "Global Expansion", description: "Expanded our services to international markets." }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(185, 176, 176, 0.7), rgba(19, 1, 66, 0.8)), url(${tanvoxabout})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-red-900 floating-animation hero-text-entry">About</span>
            <span className="block text-navy-blue floating-animation-delay-1 hero-text-entry-delay-1">Tanvox Technologies</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto floating-animation-delay-2 hero-text-entry-delay-2">
            We are a team of passionate developers and designers dedicated to creating innovative software solutions that drive business growth and digital transformation.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-navy-blue">Story</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Side Image */}
            <div className="slide-in-left">
              <img 
                src={TANVOXIMG} 
                alt="Tanvox Technologies Story" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right Side Content */}
            <div className="slide-in-right">
              <p className="text-xl text-black mb-6 leading-relaxed">
                Founded in 2025, Tanvox Technologies started as a small team with a big vision - to transform businesses through innovative software solutions. Over the years, we've grown into a full-service technology company, helping clients across various industries achieve their digital transformation goals.
              </p>
              <p className="text-xl text-black mb-6 leading-relaxed">
                Our journey has been marked by continuous learning, adaptation to new technologies, and most importantly, the success of our clients. We believe in building long-term partnerships and delivering solutions that not only meet but exceed expectations.
              </p>
              <p className="text-xl text-black leading-relaxed">
                Today, we stand as a testament to what passion, innovation, and dedication can achieve. Our team of 50+ experts works tirelessly to push the boundaries of what's possible in software development, ensuring our clients stay ahead in an ever-evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-navy-blue">Mission & Vision</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Mission Card */}
            <div className="mission-vision-card bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="text-4xl mb-6 text-center">🎯</div>
              <h3 className="text-3xl font-bold text-dark-red mb-4 text-center">Our Mission</h3>
              <p className="text-black leading-relaxed text-center">
                To empower businesses through innovative technology solutions that drive growth, 
                enhance efficiency, and create lasting value. We are committed to delivering 
                exceptional software that transforms ideas into reality and helps our clients 
                achieve their digital transformation goals.
              </p>
            </div>

            {/* Vision Card */}
            <div className="mission-vision-card bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="text-4xl mb-6 text-center">🔮</div>
              <h3 className="text-3xl font-bold text-navy-blue mb-4 text-center">Our Vision</h3>
              <p className="text-black leading-relaxed text-center">
                To be a global leader in technology innovation, recognized for our excellence in 
                software development and our ability to solve complex challenges. We envision 
                a future where technology seamlessly integrates with business to create 
                sustainable growth and meaningful impact worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 relative" ref={statsRef}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-navy-blue">Impact</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-dark-red mb-2 count-animation">
                {count1}+
              </div>
              <div className="text-black">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-blue mb-2 count-animation">
                {count2}+
              </div>
              <div className="text-black">Expert Developers</div>
            </div>
           <div className="flex flex-col items-center">
                <img
                  src={globalIcon}
                  alt="Serving Globally"
                  className="w-10 h-10 mb-3"
                />
                <div className="text-black font-semibold">Serving Globally</div>
              </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-blue mb-2 count-animation">
                {count4}+
              </div>
              <div className="text-black">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-navy-blue">Leadership Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-dark-red to-navy-blue rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-4">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="text-xl font-bold text-dark-red mb-1">
                  {member.name}
                </h3>
                <div className="text-navy-blue font-semibold mb-3">
                  {member.role}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
