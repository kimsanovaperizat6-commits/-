import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { Stats } from './components/Stats.tsx';
import { Directions } from './components/Directions.tsx';
import { Schedule } from './components/Schedule.tsx';
import { BookingCTA } from './components/BookingCTA.tsx';
import { Contacts } from './components/Contacts.tsx';
import { Footer } from './components/Footer.tsx';
import { BookingModal } from './components/BookingModal.tsx';
import { MobileQuickBar } from './components/MobileQuickBar.tsx';
import { FloatingContactBar } from './components/FloatingContactBar.tsx';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedDirection, setPreselectedDirection] = useState<string>('');
  const [preselectedSlot, setPreselectedSlot] = useState<{
    day: string;
    time: string;
    discipline: string;
  } | null>(null);

  const handleOpenBooking = () => {
    setPreselectedDirection('');
    setPreselectedSlot(null);
    setIsBookingOpen(true);
  };

  const handleSelectDirection = (directionName: string) => {
    setPreselectedDirection(directionName);
    setPreselectedSlot(null);
    setIsBookingOpen(true);
  };

  const handleSelectSlot = (slot: { day: string; time: string; discipline: string }) => {
    setPreselectedSlot(slot);
    setPreselectedDirection(slot.discipline.toLowerCase().includes('йога') ? 'Йога' : 'ЛФК');
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1C1E21] selection:bg-amber-200">
      {/* Top Navigation */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections: Hero → Stats → Directions → Schedule → Booking CTA → Contacts */}
      <main className="flex-1">
        {/* 1. Hero / First Screen */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Compact Statistics Section */}
        <Stats />

        {/* 3. Directions / Направления */}
        <Directions onSelectDirection={handleSelectDirection} />

        {/* 4. Schedule / Расписание */}
        <Schedule onSelectSlot={handleSelectSlot} />

        {/* 5. Booking CTA Section */}
        <BookingCTA onOpenBooking={handleOpenBooking} />

        {/* 6. Contacts */}
        <Contacts />
      </main>

      {/* 7. Minimal Footer */}
      <Footer />

      {/* Mobile Floating Quick Bar */}
      <MobileQuickBar onOpenBooking={handleOpenBooking} />

      {/* Fixed Vertical Floating Contact Bar */}
      <FloatingContactBar />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedDirection={preselectedDirection}
        preselectedSlot={preselectedSlot}
      />
    </div>
  );
}
