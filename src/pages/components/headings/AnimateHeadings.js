export const fadeInAnimation = (variants, transition)=> ({
    initial:"initial",
    whileInView:"animate",
    variants : variants,
    transition : transition,
})


export const staggeredfadeInAnimation = (variants, transition, custom)=> {
    return {
        initial:"initial",
        whileInView:"animate",
        variants : variants,
        transition : transition,
        custom:custom
    }
}


