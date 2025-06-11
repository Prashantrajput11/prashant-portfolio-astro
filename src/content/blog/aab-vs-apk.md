---
title: "Why apps can't be larger than 4 GB and the difference between aab and apk"
description: "Lorem ipsum dolor sit amet"
pubDate: "May 15 2025"
# heroImage: "../../assets/blog-placeholder-2.jpg"
# slug: /blog/supabase-edge-functions/
---

Hey there awesome developers

If you have ever worked on publishing mobile apps to app stores , especially android apps, then you might have come across the terms aab and apk files. So what exactly they are and how they differ is what we are going to see in this blog

We will undertstand them with keeping following points in mind

File Type

Use Case

Installable

File Size

Play Store

APK (Android Package) is the standard file format used to distribute and install apps on Android devices. Earlier, developers uploaded APKs directly to the Play Store. However, now Google Play requires developers to upload Android App Bundles (AABs) instead, from which optimized APKs are generated for users

An APK file is used for sharing and testing purposes. It has two types of build : debug build and release build.

An APK file is usually easily installable on android devices unlike AAB.

An APK file is not very optimized and is usually larger in size because it contains all the compiled code and resources for every possible device configuration, including support for all screen sizes, CPU architectures (like ARM, x86), and languages even if the end user only needs a small subset of them.

You don't need to go through Play Store reviews to distribute APKs. Once the APK is built, you can share it directly with others via any platform like email, Drive or third-party stores and they can install it manually

Now lets discuss about AAB
AAB is android app bundle It is a publishing format for Android that is supported by Google Play and other app stores, and by build tools such as Android Studio, Bazel, Buck, Cocos Creator, Gradle, Unity, and Unreal.

The main usecase of AAB is only for publishing later they are converted to APK format by the distributor so that they can be installed on devices.

AAB are not installable.

They are highly optimised but how?
What goes behind the scenes that AAB becomes optimised.
Lets understand it right away Key Ways AABs Are Optimized:

1. Dynamic Delivery (Split APKs) AABs allow Google Play to generate APKs specific to each user’s device called "split APKs"

This means users only download the code, resources, and assets their device needs.

Example: If your app supports 10 languages, and a user only uses English only English resources are included and this reduces app size since users don’t download unnecessary assets (like densities, ABIs, locales), app size can shrink by 20–50%.

Smaller apps = faster downloads, less storage use

3. Modularization You can create dynamic features that are downloaded on-demand.

For example, a photo editing module or a tutorial screen can be excluded from the base app and downloaded when needed.

Targeted Native Libraries Only the appropriate CPU architecture (ABI) library is bundled (e.g., arm64-v8a or x86).
Saves significant space when large native libraries are involved.

Efficient Resource Handling Resources like images for different screen densities (mdpi, hdpi, xhdpi) are delivered only as per the device's screen type.
Behind the Scenes: When you upload an AAB to Google Play, the Play Store builds optimized APKs (via bundletool) for each device configuration.

Now the last and exciting part of the blog

Why apps can't be larger than 4 GB?
Here's the clear explanation Google Play imposes two limits:

Base module (APK) download size limit: 200 MB (compressed)

Maximum total size per device (including base + feature modules + asset packs): 4 GB (compressed)

🤔 So, does this mean apps can't be larger than 4 GB? Yes, kind of but only when downloaded via Google Play.

Let’s break it down:

Base APK = 200 MB max This is the core app that is always delivered.
If it exceeds 200 MB, Play Console will reject it.

Up to 4 GB Total Per Device Google Play uses Dynamic Delivery to split the app into:
Base module

Feature modules

Asset packs (e.g. large game resources)

All of this combined must not exceed 4 GB compressed per device.

But what about games like Genshin Impact (20+ GB)? They download the rest of the data after installation using their own internal update/downloader system (not through Play Store's install process).
This post-install download is not counted in the 4 GB AAB limit.

This technique is often called on-demand resource loading.

Does this mean there are no apps more than 4 GB on the Play Store?

Apps can't be more than 4 GB in initial download size via Play Store. But they can still be much larger by downloading additional data after install.

The total size of APKs and asset packs delivered via Google Play must not exceed 4 GB. However, developers can still build apps and games that are much larger by downloading additional content after installation using custom download logic.

Conclusion
Hope you had a great time reading this. Feedbacks are highly appreciated. That brings us to the end of this blog. Stay tuned for the next one.
