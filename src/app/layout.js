import Image from "next/image";
import './bootstrap-grid.min.css'
import './reset.css'
import './common.css'
import './default.css'
import './responsive.css'
import Link from "next/link";

export const metadata = {
  title: "minimal portfolio",
  description: "supabase 활용 포트폴리오 사이트",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1 className="logo"><Link href="/">Minimal Portfolio Theme</Link></h1>
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <hr />
        <main className="content">
          {children}
        </main>
        <footer>
          <div className="quote_area">
            <h3 className="heading6">Need a quote?</h3>
            <p>
              Please use the form inside the contact page. Make sure you include some personal information as well as
              your project description and available budget.
            </p>
            <p><a href="">Get a free quote &rarr;</a></p>
          </div>
          <div className="copyright">
            <h3 className="heading6">Just wanna say hi?</h3>
            <p>
              You can call me, email me directly or connect with me through my social networks.
            </p>
            <p>
              (+40) 744122222<br />
              <a href="mailto:hello@adipurdila.com">hello@adipurdila.com</a>
            </p>
            <ul className="social_links">
              <li><a href=""><Image src="/images/twitter.png" alt="twitter" width={32} height={32} /></a></li>
              <li><a href=""><Image src="/images/facebook.png" alt="facebook" width={32} height={32} /></a></li>
              <li><a href=""><Image src="/images/dribble.png" alt="dribble" width={32} height={32} /></a></li>
            </ul>
            <hr />
            <p>
              (c) Copyright 2020. Portfolio theme by alikerock.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
