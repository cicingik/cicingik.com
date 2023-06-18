import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="cicingik.com" />
      <Page>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <ProjectsSection sectionId="features" heading="Projects" />
        <InterestsSection sectionId="interest" heading="Interest" />
        <ContactSection sectionId="contact" heading="Contact" />
      </Page>
    </>
  );
}
