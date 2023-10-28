import { forwardRef, ForwardRefRenderFunction } from 'react'

import { motion } from 'framer-motion'

function wrapper<Ref, Props>(Component: ForwardRefRenderFunction<Ref, Props>) {
  return motion(forwardRef(Component), {
    forwardMotionProps: true,
  })
}

export default wrapper
