import theme, { routeTransition } from 'style/theme'

const AmericaLtWoff2 = '/fonts/GT-America-Standard-Light.woff2'
const AmericaLtWoff = '/fonts/GT-America-Standard-Light.woff'
const AmericaLtTtf = '/fonts/GT-America-Standard-Light.ttf'

const AmericaMdWoff2 = '/fonts/GT-America-Standard-Medium.woff2'
const AmericaMdWoff = '/fonts/GT-America-Standard-Medium.woff'
const AmericaMdTtf = '/fonts/GT-America-Standard-Medium.ttf'

const LyonLtWoff = '/fonts/LyonDisplay-Light-Web.woff'
const LyonLtWoff2 = '/fonts/LyonDisplay-Light-Web.woff2'

const { duration, distance } = routeTransition
const { accel, decel } = theme.ease

export default function Fuck() {
  return (
    <style jsx global>
      {`
        .page-transition-exit {
          opacity: 0;
          transform: translateY(${distance}em);
          transition: ${duration}ms transform ${accel},
            ${duration}ms opacity ${accel};
        }
        .page-transition-exit-active {
          opacity: 0;
          transform: translateY(${distance}em);
          transition: ${duration}ms transform ${accel},
            ${duration}ms opacity ${accel};
        }
        .page-transition-enter {
          transform: translateY(${distance}em);
          opacity: 0;
        }
        .page-transition-enter-active {
          transform: translateY(${distance}em);
          transition: transform ${duration}ms ${decel},
            ${duration}ms opacity ${decel};
        }

        .page-transition-enter-done {
          transform: translateY(0);
          transition: ${duration}ms transform ${decel},
            ${duration}ms opacity ${decel};
        }

        @font-face {
          font-family: 'America';
          src: url(${AmericaLtWoff2}) format('woff2'),
            url(${AmericaLtWoff}) format('woff'),
            url(${AmericaLtTtf}) format('ttf');
          font-weight: 300;
          font-display: swap;
        }

        @font-face {
          font-family: 'America';
          src: url(${AmericaMdWoff2}) format('woff2'),
            url(${AmericaMdWoff}) format('woff'),
            url(${AmericaMdTtf}) format('ttf');
          font-weight: 500;
          font-display: swap;
        }

        @font-face {
          font-family: 'Lyon';
          src: url(${LyonLtWoff2}) format('woff2'),
            url(${LyonLtWoff}) format('woff');
          font-weight: 300;
          font-display: fallback;
        }
      `}
    </style>
  )
}
