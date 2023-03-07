const { Client } = require("@notionhq/client");
exports.handler = async function (event) {
  const form = JSON.parse(event.body).payload.data;
  const notion = new Client({ auth: process.env.NOTION_TOKEN });

  console.log({ form });
  try {
    const new_row = {
      parent: {
        database_id: process.env.DATABASE_ID,
      },
      properties: {
        Navn: {
          title: [
            {
              text: {
                content: form.navn,
              },
            },
          ],
        },
        Verdi: {
          number: parseInt(form.verdi),
        },
        Fil: {
          files: [
            {
              name: form.file.filename,
              external: {
                url: form.file.url,
              },
            },
          ],
        },
      },
    };
    await notion.pages.create(new_row);
  } catch (error) {
    console.log(error);
  }
  return {
    statusCode: 200,
  };
};
