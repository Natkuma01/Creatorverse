# WEB103 Prework - *👉 Creatorverse*

Submitted by: **👉 April 2026**

About this web app: **👉 This website is a centralized directory designed to help you organize and manage your favorite online content creators in one place. Using a live database, it allows you to showcase creator profiles with photos and descriptions while giving you the power to add, update, or remove entries instantly. It simplifies your digital life by acting as a personalized hub for all the influencers, artists, and personalities you follow.**

Time spent: **👉 8** hours

## Required Features

The following **required** functionality is completed:

<!-- 👉👉👉 Make sure to check off completed functionality below -->
- ✅ **A logical component structure in React is used to create the frontend of the app**
- ✅ **At least five content creators are displayed on the homepage of the app**
- ✅ **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- ✅ **API calls use the async/await design pattern via Axios or fetch()**
- ✅ **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- ✅ **Each content creator has their own unique URL**
- ✅ **The user can edit a content creator to change their name, url, or description**
- ✅ **The user can delete a content creator**
- ✅ **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- ❌ Picocss is used to style HTML elements
- ✅ The content creator items are displayed in a creative format, like cards instead of a list
- ✅ An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

* ✅ Use TailwindCSS and DaisyUI
* ✅ Add Alert message for better user experience
* ✅ Use AI to generate 5 more entries to the database



## Video Walkthrough


Here's a walkthrough of implemented required features:

<img width="500" height="300" alt="Screenshot 2026-04-20 at 10 57 16 PM" src="https://github.com/user-attachments/assets/679de1f4-b3c7-427d-9992-e796cfb1f652" />

<img width="500" height="300" alt="Screenshot 2026-04-20 at 11 00 01 PM" src="https://github.com/user-attachments/assets/69339985-96a4-4da5-b1d3-05fecb693c82" />



[Natalie's Creator Network Walkthrough](https://youtu.be/1jg4UpjAhYo "Natalie's Creator Network Walkthrough")

## Notes

The biggest challenge I faced was getting the "Add Creator" feature to successfully send new data to the database. Every time I tried to submit the form, the backend would block the request with a "POST" error, so I used console.error to investigate the hidden details of the message.

I discovered the issue was with the ID column, which acts as a unique primary key for each creator. Since I already had 10 creators in the table, the database was mistakenly trying to start the ID counter back at 1 for the new entry; because an ID of 1 already existed, the database rejected the duplicate. To fix this, I wrote a custom SQL command to manually reset the counter to start at 11, which cleared the conflict and allowed new creators to be saved perfectly.

## License

Copyright© [👉 2026] [👉Shimin Natalie Chan]. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
