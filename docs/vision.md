---
title: Vision
---

With Wasp, we want to make web app development easy and enjoyable, both for novices in web development and for experts.

Ideal we are striving for is that programming in Wasp feels like describing an app in a human language, like writing a specification document where you describe only the most important implementation details, and the rest is taken care of by Wasp.  
Creating new production-level web app should be easy, and deploying it to production should be straight-forward.

That is why we believe Wasp needs to be a programming language (DSL) and not a library, because we want to capture all parts of the web app in one integrated system, that is perfectly tailored for just that purpose.  
On the other hand, we believe that trying to capture every single detail in one language would not be reasonable.
There are solutions out there that are working very well for the specific task they are aimed to solve (React for components, CSS/HTML for design/markup, JS/TS for logic, ...) and we don't want to replace them with Wasp.
Instead, we see Wasp as a declarative "glue" code uniting all these specific solutions and providing a higher overview of the web app.

Wasp is yet early in development and therefore far from where we imagine it will be in the future.
This is what we imagine, though:
- Declarative, static language that has simple basic rules but understands a lot of the web app concepts - "horizontal language". Supports multiple files/modules, libraries.
- Integrates seamlessly with most popular technologies for building specific, more complex parts of the web app (React, CSS, JS, ...).
  They can be used inline (mixed with Wasp code) or provided via external files.
- Has hooks (escape mechanisms) that allow you to customize your web app on all the right places, but hidden until you need them.
- Entity is a first-class citizen, defined via custom Wasp syntax, and it integrates very closely with the rest of the features, serving as one of the central concepts around which everything is built.
- Out of the box support for CRUD UI based on the Entities, to get you quickly going, but also customizable to some level.
- "Smart" operations (queries and actions) that in most cases automatically figure out when to update, and if not, it is easy to define custom logic to compensate for that. User worries about client-server gap as little as possible.
- Support, directly in Wasp, for declaratively defining simple components and operations.
- Besides Wasp as a programming language, there will also be a visual builder that generates/edits Wasp code, allowing non-developers to participate in development. Since Wasp is declarative, we imagine such builder to naturally follow from Wasp language.
- Server side rendering, caching, packaging, security, ... -> all those are taken care of by Wasp.
  You tell Wasp what you want, and Wasp figures out how to do it.
- As simple deployment to production/staging as it gets.
- While it comes with the official implementation(s), Wasp language will not be coupled with the single implementation.
  Others can provide implementations that compile to different web app stacks.
