import Hero from './components/sections/Hero';
import Philosophy from './components/sections/Philosophy';
import WhyModernplaying from './components/sections/WhyModernplaying';
import Stretching from './components/sections/Stretching';
import Dance from './components/sections/Dance';
import Synergy from './components/sections/Synergy';
import Schedule from './components/sections/Schedule';
import Benefits from './components/sections/Benefits';
import Trial from './components/sections/Trial';
import Testimonials from './components/sections/Testimonials';
import Instructors from './components/sections/Instructors';
import ContactForm from './components/sections/ContactForm';

export default function Home() {
  return (
    <main>
      <Hero />
      <Philosophy />
      <Stretching />
      <Dance />
      <Synergy />
      <Schedule />
      <Benefits />
      <Trial />
      <WhyModernplaying />
      <Testimonials />
      <Instructors />
      <ContactForm />
    </main>
  );
}
