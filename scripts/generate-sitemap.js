
import fs from "fs"
import path from "path";

async function generateSitemap() {
  try {
    const response = await fetch(
      "https://book-library-backend-liart.vercel.app/api/books?page=1&limit=10000"
    );

    const data = await response.json();

    const books = data.books || [];

    const baseUrl = "https://booklibrary-cda.pages.dev";

    const bookUrls = books
      .map(
        (book) => `
  <url>
    <loc>${baseUrl}/books/${book.slug}</loc>
  </url>`
      )
      .join("");

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>${baseUrl}</loc>
  </url>

  <url>
    <loc>${baseUrl}/books</loc>
  </url>

  ${bookUrls}

</urlset>`;

    const filePath = path.join(
      process.cwd(),
      "public",
      "sitemap.xml"
    );

    fs.writeFileSync(filePath, sitemap);

    console.log("✅ Sitemap generated successfully");
  } catch (err) {
    console.error("❌ Sitemap generation failed:", err);
    process.exit(1);
  }
}

generateSitemap();