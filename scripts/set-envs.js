const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();

const targetPath = './src/environments/environment.ts';
const targetPathDev = './src/environments/environment.development.ts';

const emailjsKey = process.env['EMAILJS_KEY'];
const recaptchaSiteKey = process.env['RECAPTCHA_SITE_KEY'];
const serviceId = process.env['EMAILJS_SERVICE_ID'];
const templateId = process.env['EMAILJS_TEMPLATE_ID'];

if (!emailjsKey) throw new Error('EMAILJS_KEY is not set');
if (!recaptchaSiteKey) throw new Error('RECAPTCHA_SITE_KEY is not set');
if (!serviceId) throw new Error('EMAILJS_SERVICE_ID is not set');
if (!templateId) throw new Error('EMAILJS_TEMPLATE_ID is not set');

const envFileContent = `
export const environment = {
  emailjsKey: "${emailjsKey}",
  recaptchaSiteKey: "${recaptchaSiteKey}",
  serviceId: "${serviceId}",
  templateId: "${templateId}"
};
`;

mkdirSync('./src/environments', { recursive: true });

writeFileSync(targetPath, envFileContent);
writeFileSync(targetPathDev, envFileContent);
