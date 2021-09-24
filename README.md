# Applicant Project

This project was generated on a time-boxed basis. I set myself a time budget of `4 hours`.
The project uses `strict` and `noImplicitAny`. There are also a few adjustments in `angular.json`
and `angular.json` to improve dev experience, dev speed and prevent dev-tools to show in production.

## State management
State management was implemented via NgRx entity. Async code is dealt with in effects.

## Backend
A firebase backend was implemented to better show how I usually deal with server communication.

## Deployment
The app is deployed to Firebase hosting and is available at: [Applicant](https://fir-12dc8.web.app
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

## Applicant project structure explained
I usually divide my applications in two main areas: `features and libs`.

`Features` should mirror the routing table. E.g. login, applicants, ... Each feature has its own 
 - store (state management), communicates with components via facade and with server via effects
 - domain (server communication), is a service class that provides access to the backend and should only provide data
 - view. The main component in the view is a smart component as it has dependencies (optimal would be to have only the facade injected).
The rest of the components are dumb and have only input and outputs.
That structure allows me to always have a clear separation of view, server communication and 
state management.

`Libs` contains:
- global store: everything that is needed on a global basis
- build-specifics: helper for build 
- components: components that are not specific to a single feature
- directives: directives that are not specific to a single feature
- guards: router guards
- pipes
- resolver: when view should only be accessible with a set of data I use a resolver
- services: these are global services that are not related to server communication
- utils: helper functions and classes

```
Was really nice to write down the essence of what I learned in the last three years. Wish you the 
best even if we find no cooperation ;).
```
