 Bino Buddy – WhatsApp Quick Search Extension
Bino Buddy is a lightweight Chrome extension that helps you quickly frame questions or search queries and open them in WhatsApp.

🚀 Features
🔍 Dynamic suggestions based on your input

📎 Quick-access buttons (Food, Events, Deals)

🕓 Stores your last 3 queries locally in the browser

🟢 Opens WhatsApp Web prefilled with your message

⚙️ Setup Instructions
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/bino-buddy.git
cd bino-buddy
Edit the phone number in popup.js:

js
Copy code
const phone = "YOUR_PHONE_NUMBER_HERE"; // Replace with your WhatsApp number (with country code)
const whatsappURL = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
✅ Important:
The default number (1212345689) is a placeholder.
Replace it with your own WhatsApp number (with country code) for the extension to work correctly.

Load the extension in Chrome:

Open chrome://extensions/

Enable Developer Mode

Click Load unpacked

Select the project directory

🛡️ Privacy
This extension does not collect any personal data. Queries are processed and opened locally in WhatsApp Web based on your browser.

🧪 Notes for Developers
You can replace the WhatsApp number with a dummy number during testing.

The browser notification and actual message send require manual WhatsApp interaction; no automation is performed.
