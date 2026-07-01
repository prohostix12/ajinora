import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TopBanner from '@/components/layout/TopBanner';
import PageHero from '@/components/layout/PageHero';
import Contact from '@/components/home/Contact';

export default function ContactPage() {
  return (
    <main className="pt-28 md:pt-36">
      <TopBanner />
      <Header />
      
      <PageHero 
        title="Contact Us"
        subtitle="Have questions? Our team is here to help you guide through the best courses for your future."
        bgImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="bg-slate-50 py-24">
        <Contact />
      </div>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="w-full h-[600px] bg-slate-100 rounded-[4rem] overflow-hidden border border-slate-100 shadow-inner flex items-center justify-center relative group">
             <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700">
               <iframe 
                src="https://www.google.com/maps?q=1st+Floor,+BM+Complex,+opp.+St.+George+Forane+Church,+Edappally,+Kochi,+Ernakulam,+Kerala+682024&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
               ></iframe>
             </div>
             <div className="relative z-10 px-8 py-3 bg-white rounded-full font-black uppercase tracking-widest text-xs shadow-2xl pointer-events-none">
                Visit our HQ
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
