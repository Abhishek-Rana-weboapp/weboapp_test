export const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 , transition:{duration: 0.5 ,ease :"easeIn"}},
    exit:{opacity:0,transition:{duration:0.2, ease:"easeOut"}}
  };

export const FadeInAnimationtransition = {
    ease: "easeIn",
    duration: 0.5,
  };

  export const swipeUp = {
    initial: {
      y:"100%",
      opacity:0
    },
    animate:{
      y:0,
      opacity:1,
      transition:{
        duration:0.8, ease:[0,0.2,0.4,1], once:true
      }
    },
    exit:{
      y:"-100%",
      opacity:0,
      transition:{
        duration:0.5, ease:[0,0.2,0.4,1]
      }
    }
  }
  