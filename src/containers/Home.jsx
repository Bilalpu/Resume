import React from 'react';
import MainSection from '../components/MainSection';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection';
import SkillSection from '../components/SkillSection';
import ResumeSection from '../components/ResumeSection';
import ProjectSection from '../components/ProjectSection';
import ContactForm from '../components/ContactSection';
// import NavbarSection from '../components/NavbarSection';
import Header from '../components/Header';
// import WaiseSection from '../components/Waiswe'

export default function Home() {
  return (
    <div className='Containera'>
      <Header />
      {/* <NavbarSection /> */}
      <section id="main"><MainSection /></section>
      <section id="about"><AboutSection /></section>
      <section id="service"><ServiceSection /></section>
      <section id="skill"><SkillSection /></section>
      <section id="resume"><ResumeSection /></section>
      <section id="project"><ProjectSection /></section>
      <section id="contact"><ContactForm /></section>
      {/* <WaiseSection /> */}
    </div>
  );
}
