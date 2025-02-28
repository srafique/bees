import { Container } from "@/components/Container";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";


export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Professional Bee & Wasp Removal Services"
        title=" Why Choose Us?"
      >
        ✅ Safe & Humane Removal – We protect both you and the bees & wasps. 
        ✅ Experienced Professionals – Our team knows how to handle any bee or wasp situation. 
        ✅ Eco-Friendly Solutions – No harmful chemicals, only responsible relocation. 
        ✅ Fast & Reliable Service – Same-day or emergency services available. 
        ✅ Affordable & Transparent Pricing – No hidden fees, just fair rates.
      </SectionTitle>

      <SectionTitle
        preTitle="From Swarm Removal to Hive Relocation"
        title=" Our Services:"
      >
        🐝 Bee and Wasp Swarm Removal – Quick, safe, and stress-free. 
        🏡 Hive Relocation – We move entire hives without harm. 🔧 Structural Bee and Wasp Removal – Bees or wasp in walls, attics, or roofs? We handle it. 
        🌱 Bee or Wasp Prevention & Consultation – Keep your property bee & wasp-free in the future.
      </SectionTitle>

      <SectionTitle
        preTitle="Don’t Wait – Get Expert Help Now!"
        title=" Got Bees or Wasps? Call Us Today!"
      >
        Don’t let a small bee or wasp problem become a big headache. 
        Contact our professional bee and wasp removal team for immediate assistance and enjoy peace of mind.
      </SectionTitle>

      {/* <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials />
*/}
      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
      {/* <Cta />  */}
      
    </Container>
    
  );
}
