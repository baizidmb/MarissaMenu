const https = require('https');

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  const htmlContact = await get('https://hotelmarissa.ro/contact/');
  const htmlHome = await get('https://hotelmarissa.ro/');

  // Clean tags to text
  const cleanHome = htmlHome.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ');
  const cleanContact = htmlContact.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ');

  console.log('=== CONTACT PAGE SNIPPETS ===');
  console.log(cleanContact.split(/\s{3,}/).filter(t => t.length > 10).slice(0, 30).join('\n---\n'));
}

main().catch(console.error);
