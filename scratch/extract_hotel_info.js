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
  const htmlHome = await get('https://hotelmarissa.ro/');
  const htmlContact = await get('https://hotelmarissa.ro/contact/');
  const combined = htmlHome + htmlContact;

  console.log('=== LOGO SEARCH ===');
  const logos = combined.match(/https?:\/\/[^\s"'<>]*(?:logo|header)[^\s"'<>]*\.(?:png|jpg|jpeg|svg|webp)/gi);
  console.log(logos ? [...new Set(logos)] : 'None');

  console.log('\n=== ALL UPLOADS IMAGES ===');
  const images = combined.match(/https?:\/\/[^\s"'<>]*wp-content\/uploads[^\s"'<>]*\.(?:png|jpg|jpeg|svg|webp)/gi);
  console.log(images ? [...new Set(images)].slice(0, 20) : 'None');

  console.log('\n=== CONTACT NUMBERS & EMAIL ===');
  const contacts = combined.match(/(\+40[0-9\s.-]+|07[0-9\s.-]{8,12}|office@hotelmarissa\.ro|receptie@hotelmarissa\.ro)/gi);
  console.log(contacts ? [...new Set(contacts)] : 'None');

  console.log('\n=== ADDRESS & LOCATION ===');
  const addressMatch = combined.match(/(?:strada|str\.|calea|bulevardul|loc\.|localitatea)[^<>\n]+/gi);
  console.log(addressMatch ? [...new Set(addressMatch)].slice(0, 10) : 'None');
}

main().catch(console.error);
