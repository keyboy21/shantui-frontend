import { ReactElement } from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render(): ReactElement {
    return (
      <Html lang="ru">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="keywords"
            content="Shantui, Автобетоносмесители,Самосвалы,Фронтальные погрузчики,
          Автогрейдеры,Колесные экскаваторы,Башенные краны,Компакторы,Кирпичные линии,Мельницы дробления минерального порошка,
          Карьерные самосвалы"
          />
          <meta
            itemProp="image"
            content="/windows11/Wide310x150Logo.scale-400.png"
          />
          <meta
            name="application-name"
            content="Каталог | СП ООО 'Spets Texnika Tashkent' "
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Shantui" />
          <meta
            name="description"
            content="Компания СП ООО 'SPETS TEXNIKA TASHKENT' (Спецтехника Ташкент) - имеет 17 летний опыт в сфере поставок спецтехники и оборудования из Китая."
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#ffc000" />
          <link
            rel="apple-touch-icon"
            href="/icon/apple-touch-icon-iphone-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/icon/apple-touch-icon-ipad-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/icon/apple-touch-icon-iphone-retina-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/icon/apple-touch-icon-ipad-retina-152x152.png"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://shantuiuzb.com/" />
          <meta property="og:title" content="Shantui" />
          <meta
            property="og:description"
            content="Компания СП ООО 'SPETS TEXNIKA TASHKENT' (Спецтехника Ташкент) - имеет 17 летний опыт в сфере поставок спецтехники и оборудования из Китая."
          />
          <meta
            property="og:image"
            content="/windows11/Wide310x150Logo.scale-400.png"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://shantuiuzb.com/" />
          <meta property="twitter:title" content="Shantui" />
          <meta
            property="twitter:description"
            content="Компания СП ООО 'SPETS TEXNIKA TASHKENT' (Спецтехника Ташкент) - имеет 17 летний опыт в сфере поставок спецтехники и оборудования из Китая."
          />
          <meta
            property="twitter:image"
            content="/windows11/Wide310x150Logo.scale-400.png"
          />

          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="canonical" href="https://shantuiuzb.com/" />
          {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous" /> */}
          <script
            data-partytown-config
            dangerouslySetInnerHTML={{
              __html: `
          partytown = {
            lib: "/_next/static/~partytown/",
            forward: ["gtag"]           
          };
        `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
