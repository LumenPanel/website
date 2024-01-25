import { motion } from "framer-motion";

export default function FadeUp({children, ...props}: any){
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 0.4, ease: "easeOut" }}
            {...props}
        >
            {children}
        </motion.div>
    );
}