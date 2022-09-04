export const ButtonStepBack = () => import('../..\\components\\button\\buttonStepBack.vue' /* webpackChunkName: "components/button-step-back" */).then(c => wrapFunctional(c.default || c))
export const ButtonStepNext = () => import('../..\\components\\button\\buttonStepNext.vue' /* webpackChunkName: "components/button-step-next" */).then(c => wrapFunctional(c.default || c))
export const ButtonSubmit = () => import('../..\\components\\button\\buttonSubmit.vue' /* webpackChunkName: "components/button-submit" */).then(c => wrapFunctional(c.default || c))
export const BookingForm = () => import('../..\\components\\form\\bookingForm.vue' /* webpackChunkName: "components/booking-form" */).then(c => wrapFunctional(c.default || c))
export const BudgeForm = () => import('../..\\components\\form\\budgeForm.vue' /* webpackChunkName: "components/budge-form" */).then(c => wrapFunctional(c.default || c))
export const ContactForm = () => import('../..\\components\\form\\contactForm.vue' /* webpackChunkName: "components/contact-form" */).then(c => wrapFunctional(c.default || c))
export const EmailForm = () => import('../..\\components\\form\\emailForm.vue' /* webpackChunkName: "components/email-form" */).then(c => wrapFunctional(c.default || c))
export const ServiceForm = () => import('../..\\components\\form\\serviceForm.vue' /* webpackChunkName: "components/service-form" */).then(c => wrapFunctional(c.default || c))
export const SuccessForm = () => import('../..\\components\\form\\successForm.vue' /* webpackChunkName: "components/success-form" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\footer\\footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../..\\components\\header\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const InputRadio = () => import('../..\\components\\input\\inputRadio.vue' /* webpackChunkName: "components/input-radio" */).then(c => wrapFunctional(c.default || c))
export const InputText = () => import('../..\\components\\input\\inputText.vue' /* webpackChunkName: "components/input-text" */).then(c => wrapFunctional(c.default || c))
export const LabelText = () => import('../..\\components\\label\\labelText.vue' /* webpackChunkName: "components/label-text" */).then(c => wrapFunctional(c.default || c))
export const LogoLink = () => import('../..\\components\\logo\\LogoLink.vue' /* webpackChunkName: "components/logo-link" */).then(c => wrapFunctional(c.default || c))
export const Stepper = () => import('../..\\components\\step\\Stepper.vue' /* webpackChunkName: "components/stepper" */).then(c => wrapFunctional(c.default || c))
export const TextNormal = () => import('../..\\components\\text\\textNormal.vue' /* webpackChunkName: "components/text-normal" */).then(c => wrapFunctional(c.default || c))
export const Title = () => import('../..\\components\\title\\Title.vue' /* webpackChunkName: "components/title" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
