import { GrandEntrance } from '@/components/GrandEntrance';
import { Monogram } from '@/components/Monogram';
import { TheCouple } from '@/components/TheCouple';
import { Invitation } from '@/components/Invitation';
import { EventDetails } from '@/components/EventDetails';
import { Prayer } from '@/components/Prayer';
import { Closing } from '@/components/Closing';

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-ivory selection:bg-gold/30 selection:text-sage-deep">
      {/* § 1 — Grand Entrance (Bismillah + Floating Particles + Swaying Lanterns) */}
      <GrandEntrance />

      {/* § 2 — The Monogram (Intertwined A&Y in Mughal Arch) */}
      <Monogram />

      {/* § 3 — The Couple (Dr. Aman & Dr. Yushra with GSAP Parallax Artwork) */}
      <TheCouple />

      {/* § 4 — The Invitation (Walima Ceremony Announcement) */}
      <Invitation />

      {/* § 5 — The Ceremony Details (Date, Time, Venue, Maps & Calendar Links) */}
      <EventDetails />

      {/* § 6 — The Prayer (Surah An-Naba [78:8], Insha'Allah, Ameen Dua) */}
      <Prayer />

      {/* § 7 — Closing (Warm Heartfelt Message & Interactive Confetti Blessings) */}
      <Closing />
    </main>
  );
}
