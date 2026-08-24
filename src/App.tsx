import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import AppShowcase from './components/AppShowcase';
import Features from './components/Features';
import Modules from './components/Modules';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

const path = window.location.pathname;

export default function App() {
  if (path === '/privacy-policy') {
    return (
      <>
        <PrivacyPolicy />
        <Analytics />
        <SpeedInsights />
      </>
    );
  }

  if (path === '/terms') {
    return (
      <>
        <Terms />
        <Analytics />
        <SpeedInsights />
      </>
    );
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen font-sans antialiased overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <HowItWorks />
          <AppShowcase />
          <Features />
          <Modules />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
      <Analytics />
      <SpeedInsights />
    </LanguageProvider>
  );
}
