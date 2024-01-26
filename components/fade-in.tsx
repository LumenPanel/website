import { motion } from 'framer-motion';

export default function FadeIn({ children, ...props }: any) {
    return (
        <motion.div
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.4, ease: 'easeOut', delay:0.15 }}
            {...props}
        >
            {children}
        </motion.div>
    );
}
