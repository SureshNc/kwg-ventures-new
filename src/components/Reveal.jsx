import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'

const Reveal = forwardRef(function Reveal({ as: Tag = 'div', className = '', children, ...rest }, forwardedRef) {
  const innerRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useImperativeHandle(forwardedRef, () => innerRef.current)

  useEffect(() => {
    const el = innerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={innerRef} className={`reveal${visible ? ' is-visible' : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
})

export default Reveal
