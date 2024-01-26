'use client';

import FadeIn from '@/components/fade-in';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export default function PricingFAQ() {
    return (
        <FadeIn>
            <h2 className='mt-24 text-center text-2xl font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1]'>
                Frequently asked questions
            </h2>
            <Accordion
                type='single'
                collapsible
                className='max-w-xl mx-auto mt-4 mb-24'
            >
                <AccordionItem value='item-1'>
                    <AccordionTrigger>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
                    </AccordionTrigger>
                    <AccordionContent>
                        Necessitatibus vel tempora minima obcaecati maiores.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                    <AccordionTrigger>
                        Praesentium exercitationem, iusto voluptatum animi
                        officiis odio alias.
                    </AccordionTrigger>
                    <AccordionContent>
                        Voluptates laudantium repudiandae ducimus saepe
                        inventore ex vel veniam praesentium fugiat sequi dolores
                        perferendis, cum ratione quas quos, deleniti, sed
                        quisquam corporis porro nisi eius. Expedita quaerat
                        omnis nostrum a? Accusamus numquam, ex vel officia,
                        voluptate eaque illum, eius obcaecati dolores aliquid
                        sapiente. Architecto tempora veniam impedit tempore
                        error vitae. Illo, repudiandae consequuntur! Nemo modi
                        assumenda iusto alias adipisci neque?
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                    <AccordionTrigger>
                        Illo at quod, corporis nostrum porro omnis tempore?
                    </AccordionTrigger>
                    <AccordionContent>
                        Nulla cumque facilis reprehenderit incidunt quas
                        necessitatibus, nam est suscipit. Tempora, optio! A
                        harum nam aperiam unde adipisci amet fugiat nihil iusto,
                        impedit, quo magni? Quaerat nobis dolorum hic
                        distinctio, iusto qui repudiandae, reiciendis
                        voluptatum, laborum odio reprehenderit culpa aliquid.
                        Vitae, quaerat! Enim vero dolor officia vitae, cumque
                        praesentium natus sequi maiores esse pariatur eius
                        provident dignissimos aliquid eligendi placeat delectus,
                        deleniti consequatur libero hic quasi. Excepturi aperiam
                        sint veniam cupiditate dolore?
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </FadeIn>
    );
}
