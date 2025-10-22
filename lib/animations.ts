export const fadeUp = { 
  hidden: { opacity: 0, y: 24 }, 
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } } 
};

export const fadeIn = { 
  hidden: { opacity: 0 }, 
  show: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" as any } } 
};

export const scaleIn = { 
  hidden: { opacity: 0, scale: 0.8 }, 
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] as any } } 
};

export const slideInLeft = { 
  hidden: { opacity: 0, x: -50 }, 
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } } 
};

export const slideInRight = { 
  hidden: { opacity: 0, x: 50 }, 
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } } 
};

export const stagger = { 
  hidden: {}, 
  show: { transition: { staggerChildren: 0.1 } } 
};

export const staggerFast = { 
  hidden: {}, 
  show: { transition: { staggerChildren: 0.05 } } 
};
