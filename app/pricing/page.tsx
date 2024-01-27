import { PricingHeader } from './header';
import { PricingCards } from './pricing';
import PricingFAQ from './faq';

export default function PricingPage() {
    return (
        <main>
            <PricingHeader/>
            <PricingCards/>
            <PricingFAQ/>
        </main>
    );
}
