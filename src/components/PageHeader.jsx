export default function PageHeader({ count }) {
    return (
      <>
        <h1>Buy 2 Style</h1>
        <p>
          Don't you like the plain boring black and white style of the website?
        </p>
        <p>
          Earn cookies so you can buy style elements to your website.
        </p>
        <p>
          Click on the button below to start earn cookies. The more you click the more you earn.
        </p>
        <p>You have {count} cookies</p>
      </>
    );
  }