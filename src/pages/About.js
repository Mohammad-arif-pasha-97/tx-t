import React, { useState, useEffect, useRef } from "react";
import tanvoxabout from "../assets/tanvoxabout.jpg";
import TANVOXIMG from "../assets/TANVOXIMG.jpeg";
import globalIcon from "../assets/global.png";

const About = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
 
  const [count4, setCount4] = useState(0);

  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

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

  useEffect(() => {
    const element = statsRef.current;
    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          animateCounter(25, setCount1, 2000);
          animateCounter(50, setCount2, 2200);
          
          animateCounter(20, setCount4, 2400);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  const team = [
    { name: "Sare Chinna Venkata Subbaiah", role: "CEO", description: "Visionary leader with 5+ years in tech innovation" },
    { name: "Veera Bangaru", role: "CFO", description: "Financial expert ensuring sustainable growth" },
    { name: "Dattimola Naveen", role: "CTO", description: "Technical architect of cutting-edge solutions" },
    { name: "Siddartha Nemail", role: "CMO", description: "Marketing strategist building brand excellence" },
    { name: "Kalvacherla Akhil", role: "COO", description: "Operations expert driving efficiency and growth" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(185,176,176,0.7), rgba(19,1,66,0.8)), url(${tanvoxabout})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-red-900">About</span>
            <span className="block text-navy-blue">Tanvox Technologies</span>
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            We are a team of passionate developers and designers dedicated to creating innovative software solutions.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <img src={TANVOXIMG} alt="Tanvox" className="rounded-lg shadow-lg" />
          <div>
            <p className="text-xl text-black mb-6">
              Founded in 2025, Tanvox Technologies started with a bold vision to transform businesses through technology.
            </p>
            <p className="text-xl text-black">
              Today, our team of experts delivers scalable, secure, and future-ready solutions worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50" ref={statsRef}>
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-dark-red">{count1}+</div>
            <div>Projects</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-navy-blue">{count2}+</div>
            <div>Expert Developers</div>
          </div>
          <div className="flex flex-col items-center">
            <img src={globalIcon} alt="Global" className="w-10 h-10 mb-3" />
            <div className="font-semibold">Serving Globally</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-navy-blue">{count4}+</div>
            <div>Happy Clients</div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-dark-red to-navy-blue flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                {member.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="font-bold text-dark-red">{member.name}</h3>
              <div className="text-navy-blue">{member.role}</div>
              <p className="text-sm text-slate-700">{member.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;

