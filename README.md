Project created on Rocketseat's Ignite NodeJs track

This project is a back-end created in NodeJs, it is a forum in which users can interact with each other by creating questions, answers with attachments, making comments on the answers.

In this project we will use the notions of DDD (Domain-driven-designer) - DDD has no direct correlation with code implementation, much less with external layers of our code as a persistence layer → when designing the software we need to design it decoupled from external layers → domain is where the cleanest possible code that exists regardless of context is → we have to think about how to represent a real-life problem in purely JS/TS code without any external layer (no frameworks, api, database) → let's create an app forum → entities are everything that is feasible within our application, everything that I can understand as something that will be maintained by the application → we understand what the use cases and entities will be through conversations with domain experts → entities are keywords ( doubt, student, me - something tangible) → use case is how entities talk to each other (I answer students - me and students is entity - answer is use case - connecting verb between several entities) → after the conversation with the expert let's turn this into code

In short, we will separate our application into layers (based on DDD notions) of domain, entities, use cases, and these layers will be decoupled from each other, with the innermost layer being independent of libs, database.

We will also use Clean Architecture in this application - the main term that governs clean architecture is decoupling - the objective is that all code (following the clean architecture) at the core of the application (entitites and use cases) will be able to be transferred completely from one structure to another (from one node framework to another for example) without stopping working → an external layer can import from an internal one (the opposite is not true)

Also in the application, in addition to following this architecture by creating entities and use cases, we will also use unit tests in the use cases, creating in-memory repositories to make this possible

We also use the concept of aggregates (a concept within DDD) & watched lists (a pattern) in the entities questions and attachments → aggregate is when we unite two entities or more entities - they are entities worked together - watched list is an observed list (let's observe the attachments entity) - watched list is a pattern, a class that allows us to find out more information about items contained in a list, including whether they have been edited, deleted...

Some libs that were used:

- faker-js/faker - to create dummy data for tests
- rocketseat/eslint-config - to standardize code writing across developers

If you want to test this repository on your machine, you can download it and run the unit tests in the terminal with the command "npm run test"
