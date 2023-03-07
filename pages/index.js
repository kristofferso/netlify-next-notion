import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Netlify Forms to Notion</title>
      </Head>
      <main>
        <h1>Netlify Forms to Notion</h1>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          encType="multipart/form-data"
          action="/"
        >
          <p>
            <label>
              Ditt navn: <input type="text" name="navn" />
            </label>
          </p>
          <p>
            <label>
              Beløp: <input type="number" name="verdi" />
            </label>
          </p>
          <p>
            <label htmlFor="">
              File: <input type="file" name="file" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
          <input type="hidden" name="form-name" value="contact" />
        </form>
      </main>
    </>
  );
}
