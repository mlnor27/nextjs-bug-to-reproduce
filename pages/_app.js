import App, { Container } from "next/app";
import Link from "next/link";

export default class AppContainer extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </Container>
    );
  }
}
