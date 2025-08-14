import Hero from "./components/Hero";
import InvestmentTermsCards from "./components/InvestmentTermsCards";
import ImportantNewsSection from "./components/ImportantNewsSection";
import FAQ from "./components/FAQ";
import About from "./components/About";

export default function Home() {
  return (
    <div>
      <Hero />
      <InvestmentTermsCards />
      <FAQ />
      <ImportantNewsSection />
      <About />
    </div>
  );
}
