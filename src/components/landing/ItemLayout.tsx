"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ItemLayout: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    return (
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={cn(
                "bg-transparent border-spacing-1 border-amber-300 p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8",
                className
            )}
        >
            {children}
        </motion.div>
    );
};

export default ItemLayout;
