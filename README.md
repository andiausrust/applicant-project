# Applicant Project

This project was generated on a time-boxed basis. I set myself a time budget of `6 hours` (half a day).
The project uses `strict` and `noImplicitAny`. There are also a few adjustments in `package.json`
and `angular.json` to improve dev experience, dev speed and prevent dev-tools to show in production.

## State management
State management was implemented via NgRx entity. Async code is dealt with in effects.

## Backend
A firebase backend was implemented to better show how I usually deal with server communication.

## Deployment
The app is deployed to Firebase hosting and is available at: [todo](https://fir-12dc8.web.app
)

## Github
The project is available at [Git](https://github.com/andiausrust/applicant-project)

## Architecture - my guidelines
I adhere to following principles when writing Angular or Ionic applications:

```
- Features: the routing table should describe the features.
- Components should only do two things: consume data and capture events. Data is only
  consumed via async pipes or via inputs. Components should be oblivious to state management and server
  communication. I always use on push change detection in my application (spares a lot of head ache).
- Facades are used as an effective delegation layer between components & the rest of the app.
- Server Communication and State Management should also be decoupled.
- Optimization should only be done when there is a good reason for it.
- Composition is always prefered to Inheritance.
```

## todo project structure explained
I usually divide my applications in two main areas: `features and libs`.

`Features` should mirror the routing table. E.g. login, todos, ... Each feature has its own 
 - store (state management), communicates with components via facade and with server via effects
 - domain (server communication), is a service class that provides access to the backend and should only provide data
 - view. The main component in the view is a smart component as it has dependencies (optimal would be to have only the facade injected).
The rest of the components are dumb and have only input and outputs.
That structure allows me to always have a clear separation of view, server communication and 
state management.

`Jest tests` run jest test with `npm run test`.
'Cypress test` run cypress tests with `npm run cypress:run` (headless) or `npm run cypress:open` (browser).
