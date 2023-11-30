import '@popperjs/core'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import NextNprogress from 'nextjs-progressbar'
import NPprogress from 'nprogress'
import { useEffect } from 'react'
import '../styles/globals.css'
const montserrat = Montserrat({ subsets: ['cyrillic'] })
import * as gtag from '../lib/gtag'

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter()
	useEffect(() => {
		const handleRouteChange = (url: string) => {
			gtag.pageview(url)
		}

		router.events.on('routeChangeComplete', handleRouteChange)
		router.events.on('hashChangeComplete', handleRouteChange)
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
			router.events.off('hashChangeComplete', handleRouteChange)
		}
	}, [router.events])

	NPprogress.configure({ showSpinner: false })

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Script
				id="google-tagmanager"
				src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
				strategy="worker"
			/>
			<Script id="google-analytics" strategy="worker">
				{`
           window.dataLayer = window.dataLayer || [];
           window.gtag = function gtag(){window.dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', '${gtag.GA_TRACKING_ID}', {
             page_path: window.location.pathname,
           });
         `}
			</Script>
			<NextNprogress
				color="#ff9900"
				startPosition={0.5}
				stopDelayMs={200}
				height={3}
				showOnShallow={true}
			/>
			<style jsx global>{`
        body {
          font-family: ${montserrat.style.fontFamily} !important;
        }
      `}</style>
			<Component {...pageProps} />

			<Script
				src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
				integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
				crossOrigin="anonymous"
				strategy="afterInteractive"
			/>
		</>
	)
}

export function reportWebVitals({
	id,
	name,
	label,
	value,
}: NextWebVitalsMetric) {
	gtag.event({
		action: name,
		category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
		value: Math.round(name === 'CLS' ? value * 1000 : value),
		label: id,
	})
}
export default MyApp
