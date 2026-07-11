// import React from 'react'
// import genuineIcon from '../assets/genuineIcon.jpeg'
// import deliveryIcon from '../assets/Fast_delivery.jpeg'
// import secureIcon from '../assets/secure_icon.jpeg'
// import supportIcon from '../assets/support_icon.jpeg'

// const badges = [
//   { icon: genuineIcon, title: 'Genuine Products', subtitle: '100% Original' },
//   { icon: deliveryIcon, title: 'Fast Delivery', subtitle: 'On Time' },
//   { icon: secureIcon, title: 'Secure Payments', subtitle: '100% Safe' },
//   { icon: supportIcon, title: 'Expert Support', subtitle: '24/7 Assistance' },
// ]

// const TrustBadges = () => {
//   return (
//     <div className="trust-badges">
//       {badges.map((b) => (
//         <div className="badge" key={b.title}>
//           <img src={b.icon} alt={b.title} className="badge-icon" />
//           <div>
//             <p className="badge-title">{b.title}</p>
//             <p className="badge-subtitle">{b.subtitle}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default TrustBadges

import React from 'react'
import { BadgeCheck, Truck, ShieldCheck, Headset } from 'lucide-react'

const badges = [
  { icon: BadgeCheck, title: 'Genuine Products', subtitle: '100% Original' },
  { icon: Truck, title: 'Fast Delivery', subtitle: 'On Time' },
  { icon: ShieldCheck, title: 'Secure Payments', subtitle: '100% Safe' },
  { icon: Headset, title: 'Expert Support', subtitle: '24/7 Assistance' },
]

const TrustBadges = () => {
  return (
    <div className="trust-badges">
      {badges.map((b) => {
        const Icon = b.icon
        return (
          <div className="badge" key={b.title}>
            <div className="badge-icon-wrap">
              <Icon size={24} color="#fff" />
            </div>
            <div>
              <p className="badge-title">{b.title}</p>
              <p className="badge-subtitle">{b.subtitle}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TrustBadges