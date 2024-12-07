# Instagram AI Automation App 🚀
![Alt text](https://github.com/arbab-kamal/Slide/blob/main/public/dashboard.png)

An advanced AI-driven tool designed to enhance Instagram marketing strategies through automation and smart integrations.  

## 🟢 **Features**  
- **📹 Instagram API Integration with OAuth**  
  Connect seamlessly with Instagram for secure and reliable API access.  

- **💻 Automation Builder**  
  Create custom workflows to automate tasks and boost productivity.  

- **⏳ Seamless Dashboard**  
  Access real-time metrics and analytics in a user-friendly dashboard.  

- **📤 Instagram Comment Automations**  
  Automate DM outreach triggered by Instagram comments.  

- **👥 DM Keyword Automations**  
  Automatically respond to DMs based on pre-defined keywords.  

- **📝 Story Reply Automations**  
  Send automated replies to Instagram story interactions.  

- **🤖 AI-Powered DM Automations**  
  SMART AI technology to drive high-ticket sales through Instagram DMs.  

- **💡 Payments and Pricing Plans**  
  Manage subscriptions and pricing with Stripe integration.  

- **💬 Meta Webhooks**  
  Use Meta webhooks for real-time updates and dynamic integrations.  

- **👁️ Meta App Creation**  
  A guide to creating a Meta app for seamless integration.  

- **⚡ Optimistic UI**  
  Experience blazing-fast interactions with our highly optimized UI.  

---

## 🛠️ **Getting Started**  

### **Prerequisites**  
Ensure you have the following installed:  
- Node.js  
- Prisma  
- Clerk  
- Stripe  

### **Environment Variables**  
Set up a `.env` file with the following values:  

```env
DATABASE_URL=  

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=  
CLERK_SECRET_KEY=  

NEXT_PUBLIC_NGROK_URL=  

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in  
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up  

NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/dashboard  
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/dashboard  

STRIPE_SUBSCRIPTION_PRICE_ID=  
STRIPE_CLIENT_SECRET=  
NEXT_PUBLIC_HOST_URL=http://localhost:3000  

INSTAGRAM_BASE_URL=https://graph.instagram.com  
INSTAGRAM_EMBEDDED_OAUTH_URL=  
INSTAGRAM_CLIENT_ID=  
INSTAGRAM_CLIENT_SECRET=  
INSTAGRAM_TOKEN_URL=https://api.instagram.com/oauth/access_token  

OPEN_AI_KEY=  
