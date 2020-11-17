const Footer = () => {
  return (
    <footer className="App-Footer">
      <ul>
        <li style={{ color: "#f1faee" }}>Find me at:</li>
        &nbsp;
        <li>
          <a
            href="https://github.com/rajanmali"
            target="_blank"
            rel="noreferrer"
            className="App-link"
          >
            Github
          </a>
          &nbsp;{"."}&nbsp;
        </li>
        <li>
          <a
            href="https://twitter.com/notrajanmali"
            target="_blank"
            rel="noreferrer"
            className="App-link"
          >
            Twitter
          </a>
          &nbsp;{"."}&nbsp;
        </li>
        <li>
          <a
            href="https://instagram.com/notrajanmali"
            target="_blank"
            rel="noreferrer"
            className="App-link"
          >
            Instagram
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
