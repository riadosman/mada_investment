import Hero from "./components/Hero";
import InvestmentTermsCards from "./components/InvestmentTermsCards";
import ImportantNewsSection from "./components/ImportantNewsSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <InvestmentTermsCards />
      <ImportantNewsSection />
    </div>
  );
}
