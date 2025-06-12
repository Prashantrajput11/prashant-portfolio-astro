---
title: "Cache hit and Cache miss"
description: "Lorem ipsum dolor sit amet"
pubDate: "Jun 12 2025"
# heroImage: "../../assets/blog-placeholder-2.jpg"
---

## What is cache

in most simple terms cache is a temporary memory that is frequently accessed. So we store it such that it can be accessed frequenlty and the storage can be done in RAM, browsers or databases for eg redis

## What is a cache HIT

when we request some data and the data is fetched from the cache , rather than making a server call to fetch data, that is called cache hit.

It improves faster load time of app and assetts

## What is a cache miss

when the data is fetched from the server rather than the cache itself , then it is called a cache miss.
Initally the data is requested from the server itself, but for the subsequqnt render it's better to keep the frequently accessed data in the cache.

if you are requestiing data every time from the server, then thats is not good

it can lead to more battery usage, higher load on the server, super slow responses

## How can cache be implememnetd

in my professional experince, for frontend i have majorly used tansatck query for data caching with a stale time

on the backend side you can use redis or memecached
