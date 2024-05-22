import { Feature } from "../components/Features";
import { Hero } from "../components/Hero";
import features from "../assets/data/features.json"

export function Home() {
  return  <>
    <main>
      <Hero/>  
      <section className="features">
          <h2 className="sr-only">Features</h2>
          {features.map((feature, index) => 
          <Feature key={index} data={feature}/>
        )}
      </section>
    </main>
  </>
}

