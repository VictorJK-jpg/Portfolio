// src/data/n8nWorkflows.ts

export interface N8nWorkflow {
  id: string;
  category: string;
  title: string;
  description: string;
  downloadLink?: string; // Optional: Link to download the JSON file
  detailsLink?: string;  // Optional: Link to a more detailed explanation (e.g., Notion, Gamma)
  callToAction: string; // Text for the button to request setup help
}

// Placeholder for download links - replace with specific links if available
const GENERIC_DOWNLOAD_LINK = "https://drive.google.com/file/d/1tvwyrTDH5GU4t0LA-HpU3HphfTabwQoh/view?usp=sharing";

export const n8nWorkflows: N8nWorkflow[] = [
  // --- Email Outreach Workflows ---
  {
    id: 'email-outreach-1',
    category: 'Email Outreach',
    title: 'ChatGPT Suspicious Email Analysis',
    description: 'Analyzes incoming emails for suspicious content using ChatGPT to enhance security and filter spam.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'email-outreach-2',
    category: 'Email Outreach',
    title: 'ChatGPT Vision Suspicious Email Detection',
    description: 'Leverages ChatGPT Vision to detect suspicious elements in emails, including visual cues, for advanced threat detection.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'email-outreach-3',
    category: 'Email Outreach',
    title: 'Email Autoresponder Approval',
    description: 'Automates the approval process for email autoresponders, ensuring content is reviewed before deployment.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'email-outreach-4',
    category: 'Email Outreach',
    title: 'Email Summarization Review Manual',
    description: 'Summarizes long email threads for quick review, ideal for manual oversight of communication.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'email-outreach-5',
    category: 'Email Outreach',
    title: 'Email Summary Agent',
    description: 'An AI agent that automatically generates concise summaries of emails, saving time and improving comprehension.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'email-outreach-6',
    category: 'Email Outreach',
    title: 'Gmail Auto Labeling',
    description: 'Automatically labels and organizes emails in Gmail based on predefined rules and content analysis.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'email-outreach-7',
    category: 'Email Outreach',
    title: 'Gmail Auto Responder Draft Reply',
    description: 'Drafts automated replies for Gmail based on incoming email content, requiring only final approval.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'email-outreach-8',
    category: 'Email Outreach',
    title: 'Google Analytics Report Email Telemetry',
    description: 'Automates the generation and emailing of Google Analytics reports, providing key insights directly to your inbox.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'email-outreach-9',
    category: 'Email Outreach',
    title: 'IMAP Human-in-Loop Email Response',
    description: 'Integrates human review into automated IMAP email responses, ensuring quality and personalization.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'email-outreach-10',
    category: 'Email Outreach',
    title: 'Lemlist GPT3 Supercharge Sales Workflows',
    description: 'Enhances Lemlist sales outreach campaigns with GPT-3 powered personalization and automation.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'email-outreach-11',
    category: 'Email Outreach',
    title: 'Microsoft Outlook Email Assistant',
    description: 'An AI-powered assistant for Microsoft Outlook to help manage emails, schedule tasks, and draft responses.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'email-outreach-12',
    category: 'Email Outreach',
    title: 'Modular Customizable Email Routing',
    description: 'A flexible system for routing emails to the correct departments or individuals based on content and rules.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'email-outreach-13',
    category: 'Email Outreach',
    title: 'n8n Forms Airtable Email Subscription',
    description: 'Connects n8n forms to Airtable for email subscriptions, automating data capture and list management.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'email-outreach-14',
    category: 'Email Outreach',
    title: 'n8n Forms Airtable Email Subscription Duplicate',
    description: 'A duplicate version of the n8n Forms Airtable Email Subscription workflow for testing or alternative setups.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'email-outreach-15',
    category: 'Email Outreach',
    title: 'OpenAI Assistant Gmail Reply Draft',
    description: 'Uses OpenAI to draft intelligent replies for Gmail conversations, speeding up email communication.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'email-outreach-16',
    category: 'Email Outreach',
    title: 'OpenAI Fastmail Email Response',
    description: 'Automates email responses in Fastmail using OpenAI, providing quick and relevant replies.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'email-outreach-17',
    category: 'Email Outreach',
    title: 'OpenAI Gmail Basic Email Labeling',
    description: 'Applies basic email labels in Gmail using OpenAI, improving inbox organization.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'email-outreach-18',
    category: 'Email Outreach',
    title: 'OpenAI Lemlist Reply Classification',
    description: 'Classifies replies from Lemlist campaigns using OpenAI, helping to prioritize and categorize leads.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'email-outreach-19',
    category: 'Email Outreach',
    title: 'OpenAI Notion LinkedIn Outreach',
    description: 'Combines OpenAI and Notion for automated LinkedIn outreach, streamlining lead generation efforts.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'email-outreach-20',
    category: 'Email Outreach',
    title: 'Outlook Email Categorization',
    description: 'Automatically categorizes emails in Outlook based on content and sender, improving inbox management.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },

  // --- Content Creation Workflows ---
  {
    id: 'content-creation-1',
    category: 'Content Creation',
    title: 'AI ElevenLabs API Text to Speech',
    description: 'Converts text into natural-sounding speech using ElevenLabs API, ideal for video narration or audio content.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-2',
    category: 'Content Creation',
    title: 'Airtable Social Media Caption Creator AI',
    description: 'Generates social media captions from Airtable data using AI, streamlining content production.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-3',
    category: 'Content Creation',
    title: 'AI Flux Image Generator',
    description: 'Generates images using AI Flux, providing creative visuals for various content needs.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-4',
    category: 'Content Creation',
    title: 'Brand Voice Blog Creation AI',
    description: 'Creates blog posts that adhere to a specific brand voice using AI, ensuring consistency in content.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-5',
    category: 'Content Creation',
    title: 'Dynamic Twitter Profile Banner',
    description: 'Generates dynamic Twitter profile banners that update automatically based on data or events.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-6',
    category: 'Content Creation',
    title: 'Form Sheet Airtable Logo Extraction AI',
    description: 'Extracts logos from form submissions and organizes them in Airtable using AI.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-7',
    category: 'Content Creation',
    title: 'Google Drive Image Background Removal',
    description: 'Automatically removes backgrounds from images stored in Google Drive.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-8',
    category: 'Content Creation',
    title: 'Image Creation with OpenAI and Telegram',
    description: 'Generates images using OpenAI and delivers them via Telegram, ideal for quick content creation.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-9',
    category: 'Content Creation',
    title: 'Jira Sheets OpenAI Web Scraping AI',
    description: 'Scrapes web data and integrates it with Jira and Google Sheets using OpenAI for content research.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-10',
    category: 'Content Creation',
    title: 'Monthly Spotify Track Archiving Playlist Classifier',
    description: 'Archives monthly Spotify tracks and classifies them into playlists automatically.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-11',
    category: 'Content Creation',
    title: 'OpenAI Dynamic Webpage Generation',
    description: 'Generates dynamic webpages using OpenAI, allowing for rapid content deployment.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-12',
    category: 'Content Creation',
    title: 'OpenAI Dynamic Webpage Generation Duplicate',
    description: 'A duplicate of the OpenAI Dynamic Webpage Generation workflow for testing or alternative setups.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-13',
    category: 'Content Creation',
    title: 'OpenAI Powered Tweet Generator',
    description: 'Generates engaging tweets using OpenAI, automating social media content creation.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-14',
    category: 'Content Creation',
    title: 'OpenAI Text to Speech',
    description: 'Converts text into speech using OpenAI, useful for creating audio versions of content.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-15',
    category: 'Content Creation',
    title: 'Optimize Update Printify Title Description Workflow',
    description: 'Optimizes product titles and descriptions on Printify for better SEO and conversion.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-16',
    category: 'Content Creation',
    title: 'Podcast Summarizer Wikipedia Enhancer AI',
    description: 'Summarizes podcasts and enhances content with relevant Wikipedia information using AI.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-17',
    category: 'Content Creation',
    title: 'Prompt Based Object Detection Gemini 2.0',
    description: 'Detects objects in images based on text prompts using Gemini 2.0, useful for visual content analysis.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-18',
    category: 'Content Creation',
    title: 'RAG Qdrant OpenAI Movie Chatbot',
    description: 'A RAG (Retrieval-Augmented Generation ) chatbot for movie recommendations using Qdrant and OpenAI.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-19',
    category: 'Content Creation',
    title: 'Reddit Digest',
    description: 'Generates a daily digest of popular Reddit content, providing insights for content ideation.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-20',
    category: 'Content Creation',
    title: 'Recipe Recommendations Qdrant Mistral',
    description: 'Provides recipe recommendations using Qdrant and Mistral AI, useful for food-related content.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-21',
    category: 'Content Creation',
    title: 'Scrape Summarize News Site No RSS AI Save',
    description: 'Scrapes and summarizes news articles from sites without RSS feeds, saving content for later use.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-22',
    category: 'Content Creation',
    title: 'Send Daily Translated Calvin Hobbes Comic',
    description: 'Sends daily translated Calvin and Hobbes comics, a fun example of content automation.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-23',
    category: 'Content Creation',
    title: 'Send Random Recipe Daily Telegram',
    description: 'Sends a random recipe daily via Telegram, another example of automated content delivery.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-24',
    category: 'Content Creation',
    title: 'Sheets to Blog Post Automation',
    description: 'Automates the creation of blog posts from data in Google Sheets, ideal for structured content.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-25',
    category: 'Content Creation',
    title: 'Share YouTube Videos Summaries Discord',
    description: 'Shares YouTube video summaries to Discord, keeping communities updated with video content.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-26',
    category: 'Content Creation',
    title: 'Social Media Amplifier',
    description: 'Amplifies social media reach by automating cross-platform posting and engagement.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-27',
    category: 'Content Creation',
    title: 'Social Media Analysis Automated Email Generation',
    description: 'Generates automated emails based on social media analysis, providing insights and alerts.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-28',
    category: 'Content Creation',
    title: 'SocialMedia Dynamic Twitter Profile Banner',
    description: 'Dynamically updates Twitter profile banners based on real-time data or events.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-29',
    category: 'Content Creation',
    title: 'Speed Up Social Media Banners BannerBear',
    description: 'Automates the creation of social media banners using BannerBear, speeding up visual content production.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-30',
    category: 'Content Creation',
    title: 'Strapi Testimonial Automation',
    description: 'Automates the collection and display of testimonials using Strapi, streamlining social proof.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-31',
    category: 'Content Creation',
    title: 'Telegram AI Bot NeurochainAI Text Image A',
    description: 'An AI bot for Telegram that generates text and images using NeurochainAI.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-32',
    category: 'Content Creation',
    title: 'Telegram Childrens Arabic Storytelling AI',
    description: 'An AI for generating children\'s stories in Arabic via Telegram, showcasing language generation capabilities.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-33',
    category: 'Content Creation',
    title: 'Telegram Image Analysis Response AI',
    description: 'Analyzes images and generates responses via Telegram using AI, useful for interactive content.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-34',
    category: 'Content Creation',
    title: 'YouTube Video Summaries Discord',
    description: 'Summarizes YouTube videos and posts them to Discord, keeping communities updated.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-35',
    category: 'Content Creation',
    title: 'AI SEO Seed Keyword Generation',
    description: 'Generates seed keywords for SEO using AI, kickstarting content and SEO strategies.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-36',
    category: 'Content Creation',
    title: 'Daily Podcast Summary',
    description: 'Provides daily summaries of podcasts, useful for staying updated on industry trends.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-37',
    category: 'Content Creation',
    title: 'Fal Flux Image Generation to Google Drive AI',
    description: 'Generates images using Fal Flux and saves them directly to Google Drive using AI.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-38',
    category: 'Content Creation',
    title: 'Gemini Pro Image Captioning AI',
    description: 'Generates captions for images using Gemini Pro AI, enhancing visual content with descriptions.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-39',
    category: 'Content Creation',
    title: 'GPT Docify n8n Workflow Documentation AI',
    description: 'Automates the documentation of n8n workflows using GPT, ensuring clear and up-to-date records.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-40',
    category: 'Content Creation',
    title: 'Image Embedding from Text Summary AI',
    description: 'Embeds images into text summaries using AI, creating richer content experiences.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-41',
    category: 'Content Creation',
    title: 'Learn Anything from Hacker News Top Res',
    description: 'Extracts and summarizes top resources from Hacker News for continuous learning and content ideation.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-42',
    category: 'Content Creation',
    title: 'Narrating Video Multimodal AI',
    description: 'Generates narrations for videos using multimodal AI, enhancing video content production.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-43',
    category: 'Content Creation',
    title: 'OpenAI DALLE3 Image Creation API',
    description: 'Creates images using OpenAI\'s DALL-E 3 API, providing advanced image generation capabilities.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-44',
    category: 'Content Creation',
    title: 'OpenAI Examples ChatGPT DALLE2 Whisper',
    description: 'Provides examples of using OpenAI\'s ChatGPT, DALL-E 2, and Whisper for various content tasks.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-45',
    category: 'Content Creation',
    title: 'OpenAI Webhook Text to Speech',
    description: 'Converts text to speech via a webhook using OpenAI, enabling dynamic audio content generation.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-46',
    category: 'Content Creation',
    title: 'Pinterest Analysis Content Suggestions AI',
    description: 'Analyzes Pinterest trends and suggests content ideas using AI, optimizing content strategy.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-47',
    category: 'Content Creation',
    title: 'Post New YouTube Videos to X',
    description: 'Automates posting new YouTube videos to X (formerly Twitter), expanding content reach.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-48',
    category: 'Content Creation',
    title: 'Recommend Videos Qdrant Mistral',
    description: 'Recommends videos using Qdrant and Mistral AI, enhancing content discovery.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-49',
    category: 'Content Creation',
    title: 'Resume Data Extraction PDF Creation Gote',
    description: 'Extracts data from resumes and creates PDFs, useful for HR or talent acquisition content.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-50',
    category: 'Content Creation',
    title: 'Scrape Summarize Webpages AI',
    description: 'Scrapes webpages and summarizes their content using AI, streamlining content research.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-51',
    category: 'Content Creation',
    title: 'SERPBear Data AI Openrouter Sa',
    description: 'Integrates SERPBear data with AI from Openrouter for advanced SEO analysis and content optimization.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
  {
    id: 'content-creation-52',
    category: 'Content Creation',
    title: 'Summarize YouTube Videos from Transcript',
    description: 'Summarizes YouTube videos directly from their transcripts, providing quick content overviews.',
    downloadLink: GENERIC_DOWNLOAD_LINK,
    callToAction: 'Get Setup Help'
  },
];
