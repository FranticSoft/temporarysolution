import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  const color = useColorModeValue('#231f20', '#fff')
  return (
    <chakra.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 550 172"
      {...props}
    >
     <svg width="200" height="200" viewBox="0 0 60 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_5_2)">
<path d="M52.5 25.6699C55.8333 27.5944 55.8333 32.4056 52.5 34.3301L22.5 51.6506C19.1667 53.5751 15 51.1695 15 47.3205L15 12.6795C15 8.83049 19.1667 6.42486 22.5 8.34936L52.5 25.6699Z" fill="#0000FF"/>
</g>
<g filter="url(#filter1_d_5_2)">
<path d="M47 25.5885C50.3333 27.513 50.3333 32.3242 47 34.2487L27.5 45.5071C24.1667 47.4316 20 45.0259 20 41.1769L20 18.6603C20 14.8113 24.1667 12.4056 27.5 14.3301L47 25.5885Z" fill="#0066FF"/>
</g>
<g filter="url(#filter2_d_5_2)">
<path d="M33.5962 26.1811C36.9037 28.1105 36.9037 32.8895 33.5962 34.8189L18.5194 43.6137C15.1861 45.5581 11 43.1538 11 39.2948L11 21.7052C11 17.8462 15.1861 15.4419 18.5194 17.3863L33.5962 26.1811Z" fill="url(#paint0_linear_5_2)"/>
</g>
<defs>
<filter id="filter0_d_5_2" x="11" y="7.67203" width="48" height="54.6559" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="6"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_2"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_2" result="shape"/>
</filter>
<filter id="filter1_d_5_2" x="16" y="13.6528" width="37.5" height="42.5316" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="6"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_2"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_2" result="shape"/>
</filter>
<filter id="filter2_d_5_2" x="7" y="16.6977" width="33.0768" height="37.6047" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="6"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_2"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_2" result="shape"/>
</filter>
<linearGradient id="paint0_linear_5_2" x1="11" y1="41" x2="28.5" y2="1.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#2AB4D9"/>
<stop offset="1" stop-color="#2AB4D9"/>
</linearGradient>
</defs>
</svg>
    </chakra.svg>
  )
}
