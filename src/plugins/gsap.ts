import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

export function useGsap () {
  return gsap
}
