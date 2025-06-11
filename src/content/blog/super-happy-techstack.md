---
title: "From Idea to Play Store: My Journey Creating a Mental Health App"
description: "Lorem ipsum dolor sit amet"
pubDate: "May 30 2025"
# heroImage: "../../assets/blog-placeholder-2.jpg"
slug: /blog/super-happy-techstack/
---

The Idea Behind the App
Super Happy solves a niche but important part of the mental health space: guilt trips.

Let’s be honest we all have daily slip-ups. Maybe we get into an argument with a parent, partner, or friend. Maybe we skip the gym. Maybe we spend too much time doomscrolling on our phones.

These seemingly small moments can trigger guilt, which then spirals into overthinking and ultimately, anxiety.

To tackle this, I came up with the idea of actions.
Because here's the truth: action kills anxiety. When you take action , even a small one — it breaks the loop of overthinking and gives your mind a sense of progress. And that’s what Super Happy is built on.

I honestly used chatgpt a lot to get my features validated, it was like a constant supporter. Helped me a lot in planning and executing some parts of the app.

Core Features of the app

User sees a list of daily slip ups, they can choose any of them , lets take the case of skipping gym and each slip up has happy actions associated with it. They can choose any happy action

Each happy action got a score , time and how challenging it is

Once the user completes that action, they can add it as a journal - by adding a picture and how they felt after completing that action

AI Companions - to let you vent your thoughts out

2. User Research
   Before building Super Happy, I had already worked with a mental health care startup which gave me a solid understanding of the product-market fit in this space. I knew from direct experience that there’s a genuine need for solutions that help people navigate emotional struggles.

While working there, I often went through user posts and patterns. A recurring theme I noticed was people struggling with:

Guilt trips

Overthinking

Minor daily slip-ups that spiral into anxiety

Though I didn’t conduct formal validation before starting this app, I built the core features based on these insights. Once I shared it with some users from that community, their reactions were genuine and encouraging. Several of them said they were actively going through similar emotional phases and that the app's focus on action-oriented relief really resonated with them.

3. UI Design

I started with pen and paper sketches, as I’m more comfortable with that over tools like Figma (though I’m learning!). It helps me quickly map out the core screens and flows.

For the color scheme, I used Coolors , a great site with beautiful, ready-made palettes that made choosing the right vibe super easy.

4. Tech Stack / React Native Development
   I chose React Native since I’ve been working with it for the past 2–3 years and feel quite comfortable with it.

For data fetching, I initially used useEffect due to the hackathon time constraints. However, I plan to refactor and use TanStack Query for improved caching and cleaner logic.

I used React Navigation for handling navigation — the app currently uses both stack and bottom tabs.

On the backend, I went with Supabase (BaaS), and honestly, I love working with it — it's fast, flexible, and developer-friendly.

For push notifications, I integrated Firebase Cloud Messaging (FCM) and used Supabase Edge Functions to trigger them based on specific events.

For the AI companion feature, I used Google Gemini APIs to deliver smart, contextual replies

5. Challenges & Learnings
   Frontend Challenges

To be honest, the frontend part of building Super Happy was relatively smooth, thanks to my experience with React Native. But one area that did trip me up initially was handling image uploads and downloads especially with Supabase and base64 conversion.

When I first started working on profile image uploads, I underestimated how tricky base64-encoded images and storage APIs could be. There were a lot of edge cases to handle especially when decoding the image, converting it into the right format, and making sure it didn’t break the upload process

It took some trial and error especially understanding how Supabase handles storage buckets, the public and private buckets, paths, and MIME types but once I wrapped my head around it, it felt super satisfying to see the images showing up reliably in the app.

This was a small but meaningful challenge that taught me more about binary data handling and cloud storage skills I’ll definitely carry into future projects.

Backend Challenges
The last time I touched SQL was back in college. So when I started building Super Happy, I’d be lying if I said I wasn’t getting butterflies. I knew I’d have to brush up on some key concepts things like tables, foreign keys, and JOINs all those fundamentals I hadn’t used in a while.

Supabase made that journey smoother. Even though it’s a Backend-as-a-Service, it doesn’t hide the database layer from you. In fact, it encourages you to understand it. You can create tables, add relationships, and define foreign keys right from the UI , no raw SQL required.

But what really helped me reconnect with SQL was Supabase's SQL Editor. It gave me the freedom to write raw queries, experiment, and relearn how relational databases work under the hood. It felt like going back to college, but in a good way because now I was learning with real use cases

This part of the journey reminded me that as developers, we never stop learning and sometimes, revisiting the basics is exactly what we need.

6. Productionising the App
   When preparing Super Happy for production, I focused on two key pillars: performance and security.

✅ Security
I ensured there were no log statements left in the code that could expose sensitive data.

No secret keys or private data were hardcoded anywhere in the app.

To protect the code from reverse engineering, I enabled Proguard for obfuscation in the Android build.

On the backend, I enabled Row Level Security (RLS) with Supabase to ensure only authorized users can access or modify specific data.

⚡ Performance
I carefully optimized renders by using useCallback and useMemo wherever needed. While these might be optional on web, in mobile apps they are essential to avoid unnecessary re-renders that can lead to janky UI and battery drain.

The app is built to be mostly server-driven . I intentionally avoided storing too much data on the frontend. Mobile apps often suffer from inconsistent state updates, and keeping the source of truth on the backend gave me tighter control over the user experience.

🛠️ Crash Tracking
For crash monitoring and debugging in production, I integrated Firebase Crashlytics, which helps me track and resolve issues quickly post-launch. 7) Launch on play store
I had actually purchased my Google Play Developer account way back in 2023, but like many side projects, life and work kept getting in the way and I never got around to publishing my own app. Until now!

When it came to finally launching Super Happy, I made sure to:

Carefully follow all the guidelines provided by the Play Store to avoid any last-minute surprises.

Watch a step-by-step YouTube guide - by notjustdev youtube channel to make sure I didn’t mess anything up during the upload process.

Use AppLaunchpad to generate clean and professional-looking screenshots for the store listing.

Ask a few friends and fellow React Native developers to test my release APK and give me feedback.

Once everything was thoroughly tested, I built the production-ready .aab file, uploaded it to the Play Console, filled in all the required metadata…

And voilà! my app was live on the Play Store within a night, without a single rejection.

i even tweeted about it, haha

8. What’s Next?
   This app was built in 5 days but further iterations and improvements stretched it to 1 month, I am releasing it publicly on X , but i’m not planning to pursue any active developments on this as it was a side project to experiment around some things.

But if i get any genuine interest from the users i would plan to build on more features. Anonymous confession is something i would love to add into it

9. Closing Thoughts
   Mental health is still something that isn't talked about enough especially here in India. I truly believe there’s a need for more apps, more awareness, and a serious push to remove the stigma around mental well-being.

We need to build safe and anonymous communities where people can vent, confess, or simply talk — without fear of being judged. And the day we can do that without needing anonymity at all, that’s when I’ll believe we've truly broken the stigma.

Until then, let’s keep trying, building, and talking.

Take good care of your mental health, dear reader. ❤️
I hope you enjoyed the read and if you’re curious, you can try the app here - Super Happy
