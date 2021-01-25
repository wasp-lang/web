---
title: Telemetry
---

## Overview
The term **telemetry** refers to the collection of certain usage data to help improve the quality of a piece of software (in this case, Wasp).

Our telemetry implementation is anonymized and very limited in its scope, focused on answering following questions:
 - How many people and how often use Wasp?
 - How many projects are created with Wasp?

## When and what is sent?

 - Information is sent via HTTPS request when `wasp` CLI command is invoked.
 - Information is sent no more than once in a period of 12 hours (sending is paused for 12 hours after last invocation).
 - Exact information as it is sent:
   ```json
   {
     // Randomly generated, non-identifiable UUID representing a user.
     "distinct_id": "bf3fa7a8-1c11-4f82-9542-ec1a2d28786b",
     // Non-identifiable hash representing a project.
     "project_hash": "6d7e561d62b955d1",
     "wasp_version": "0.1.9.1",
     "os": "linux"
   }
   ```

## Opting out

You can opt-out of telemetry by setting the `WASP_TELEMETRY_DISABLE` environment variable to any value, e.g.:

```
export WASP_TELEMETRY_DISABLE=1
```

## Future plans

We don't have this implemented yet, but the next step will be to make telemetry go in two directions -> instead of just sending usage data to us, it will also at the same time check for any messages from our side (e.g. notification about new version of Wasp, or a security notice). [Link to corresponding github issue](https://github.com/wasp-lang/wasp/issues/163).
