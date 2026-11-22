import HeroSection from '../components/HeroSection'
import ProductCatalog from '../components/ProductCatalog'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProductCatalog compact />
    </main>
  )
}
