import Hero from '@/components/Hero'
import MarketOverview from '@/components/MarketOverview'
import FeatureHighlights from '@/components/FeatureHighlights'
import CallToAction from '@/components/CallToAction'
import Testimonials from '@/components/Testimonials'
import FeedbackForm from '@/components/FeedbackForm'
import dynamic from 'next/dynamic'

// Dynamically import components that use client-side features
const SubscriptionPopup = dynamic(() => import('@/components/SubscriptionPopup'), {
  ssr: false
})

const BrowserEventHandler = dynamic(() => import('@/components/BrowserEventHandler'), {
  ssr: false
})

export default function Home() {
  return (
    <div>
      <BrowserEventHandler />
      <Hero />
      <MarketOverview />
      <FeatureHighlights />
      <Testimonials />
      <FeedbackForm />
      <CallToAction />
      <SubscriptionPopup />
    </div>
  )
}



// import Hero from '@/components/Hero'
// import MarketOverview from '@/components/MarketOverview'
// import FeatureHighlights from '@/components/FeatureHighlights'
// import CallToAction from '@/components/CallToAction'
// import Testimonials from '@/components/Testimonials'
// import SubscriptionPopup from '@/components/SubscriptionPopup'
// import FeedbackForm from '@/components/FeedbackForm'

// export default function Home() {
//   if (typeof window !=="undefined"){
//     document.addEventListener("contextmenu",function (e){
//       if (event.keyCode == 123){
//         return false
//       }
//     })
//   }
//   return (
//     <div>
//       <Hero />
//       <MarketOverview />
//       <FeatureHighlights />

//       <Testimonials />
//       <FeedbackForm />
//       <CallToAction />
//       <SubscriptionPopup />
//     </div>
//   )
// }

// // import Hero from '@/components/Hero'
// // import MarketOverview from '@/components/MarketOverview'
// // import FeatureHighlights from '@/components/FeatureHighlights'
// // import CallToAction from '@/components/CallToAction'
// // import Testimonials from '@/components/Testimonials'
// // import FeedbackForm from '@/components/FeedbackForm'
// // import dynamic from 'next/dynamic'

// // // Dynamically import components that use client-side features
// // const SubscriptionPopup = dynamic(() => import('@/components/SubscriptionPopup'), {
// //   ssr: false
// // })

// // export default function Home() {
// //   return (
// //     <div>
// //       <Hero />
// //       <MarketOverview />
// //       <FeatureHighlights />
// //       <Testimonials />
// //       <FeedbackForm />
// //       <CallToAction />
// //       <SubscriptionPopup />
// //     </div>
// //   )
// // }

