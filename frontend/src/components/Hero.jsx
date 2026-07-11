import React, { useState, useEffect } from 'react'
import hero1 from "../assets/hero1.jpeg";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    image: hero1,
    title: "Quality Agricultural Solutions for Better Crop Yield",
    subtitle: "Trusted by thousands of farmers.",
    button1: "Shop Now",
    button2: "Explore Products"
  },
  {
    image: hero2,
    title: "Premium Fertilizers For Maximum Growth",
    subtitle: "Boost your farm productivity with quality nutrients.",
    button1: "Shop Fertilizers",
    button2: "Learn More"
  },
  {
    image: hero3,
    title: "Organic Farming Starts Here",
    subtitle: "Eco-friendly products for sustainable agriculture.",
    button1: "Shop Organic",
    button2: "Explore"
  },
  {
    image: hero4,
    title: "Trusted Agricultural Partner For Every Farmer",
    subtitle: "Premium crop solutions delivered across India.",
    button1: "Browse Products",
    button2: "Learn More"
  }
];

const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const scrollToCategories = () => {
    const section = document.querySelector('.category-section');
    if (section) {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionTop - navbarHeight - 12, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${currentSlide === index ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      <div className="hero-overlay"></div>

      <button className="hero-arrow hero-left" onClick={prevSlide} aria-label="Previous slide">
        <ChevronLeft size={22} />
      </button>
      <button className="hero-arrow hero-right" onClick={nextSlide} aria-label="Next slide">
        <ChevronRight size={22} />
      </button>

      <div className="hero-content" key={currentSlide}>
        <h1>{slides[currentSlide].title}</h1>
        <p>{slides[currentSlide].subtitle}</p>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => navigate('/products')}>
            {slides[currentSlide].button1}
          </button>
          <button className="btn-secondary" onClick={scrollToCategories}>
            {slides[currentSlide].button2}
          </button>
        </div>
      </div>

      <div className="hero-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`hero-dot ${currentSlide === index ? 'active-dot' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;