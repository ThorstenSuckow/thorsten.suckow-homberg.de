

```
---

Cover Image by https://unsplash.com/@romaindancreContracted Events for Micro Frontend communication 
Using non-breaking events for displaying information in distributed Frontend Fragments
In a frontend, provide contracts for data structures consumed by conceptually related modules and process the data according to the individual requirements of the consuming context. 

---

Contracts for messages is nothing new in the world of distributed systems. Schema Versioning and Consumer-driven contracts have been used for a while now by Software Architects, and while this plays an important role in systems where data structures tend to change across releases with a chance of breaking functionality, voiding data consistency and leaving states in a mess, we can take a glimpse at the solutions hard-working backend-teams came up with and re-use some of the in the world of Micro Frontends, as the idea is the same: Making sure messages can be exchanged and are understood by loosely-coupled and agnostic systems that may or may not exist in an universe.
Motivation
Using a Micro Frontend architecture does not require to plan a specific tech stack ahead. Quite the contrary, developers and architects can agree on different approaches that allow for embedding complete parts of applications, or components provided by these applications, into a web frontend.
What matters is that each of the Micro Frontends strive for low coupling and strong cohesion, just as any building block of a modularized software system does. Low coupling doesn't necessarily mean that a µFrontend is lashed and stowed within its domain, as it often needs to take part in sending and consuming messages within a frontend application: The big picture shows itself when conceptually related modules process broadcasted messages and offer the data in an informational context, updating visual elements with it. Here, the emphasis is clearly on "visual", since triggering business or domain logic would mean a higher degree of coupling between the sender and the receiver. We want to avoid this. 
The attempt to process data from events often results in inconsistent visual representation throughout the application, or even worse, runtime errors when the consuming API does not understand the format or the structure of the data the API is expected to process, sometimes due to unintentionally and accidentally changes made to the sender's API. 
Providing contracts for consumers with the help of shared source, versioned events and a must ignore policy lowers the risk of breaking functionality during runtime when messages of arbitrary source are processed by autonomously developed and independently deployed frontends, while keeping integrity and consistency high and coupling and lockstep release cycles low.
Challenges and Obstacles
Low coupling between modules that need to exchange data can be realized with the help of a Message Bus. µFrontends have specific needs though, since they represent modules in the presentation layer; they are, amongst others, responsible for providing visual representations of data, such as rows in a table, or nodes in a tree. Renderer is ambiguous in this context: A renderer can be used to return the data in HTML or a specific data type the low level API expects, for forwarding it to framework specific components tasked with representing this data in some form, accessibility features included.
Taking the visual representation as an example, there is usually no global CSS available during development that provides the final look-and-feel for the end-product (that's just one reason to run integration tests more often to make sure the frontend doesn't break in production). Furthermore, if no shared UI libraries are used with the project, visual components are more likely to be replaced in between releases: The teams work independently and are free to decide what suits their vision of an interactive UI best. Functions have to be implemented that should understand the incoming message and its structured data as a never-changing point of truth, then transform it to something the rendering component can work with.
Blindly adding data transformators or renderers to the modules results in unwanted coupling with data structures the teams have agreed upon. Taking the nature of software into account, this structure will change in future iterations: Requirements change and implementations change, long gone are the days where code was locked with the requirements found in specifications written in good faith. If the expected format changes throughout the project, development and deployment is impeded because all the external consumers have to be updated with working code and - depending on their nature - tests have to be adjusted. This just calls for one big lockstep release event.
In a perfect world though, all teams get a note of this change, just right in time. Agile as they are, they are able to adopt quickly and will release a new working version soon after. But that's an idea where software development does not fit: In the real world, some teams will neither be able or willing to adopt,  nor are they getting notified. Not every company can use a simple 
npm deprecate @ourcomp/ModuleA@1.1.4 "package is deprecated"
Because even infrastructures cannot keep up with changes sometimes.
Figure 1.1: Module A is released and deployed with V2.0.0, of which each application is aware of, except for Module D. The updated structure cannot be processed by its consumer.// In V1.1.4, Module A encapsulated event details in an object
// that was assigned to the field "productDetails":
MessageBus.postMessage(ModuleA, "com.shopme.ShoppingCart.events.CartAdd", {
"productDetails": {
"item": "7875687",
"name": "Apple Air Pods 2",
"price": "199",
"currency": "Euro",
"productImage": "https://cdn.shopme/api/v2/products/7875687/image"
}
});
Fast forward a few iterations, and see how Module A V2.0.0 introduced some breaking changes: The team decided to flatten the event details object, the field productDetails was discarded.
// Module A V2.0.0 introduced some breaking changes, and the updated event
// structure was one of it. The team decided to flatten the event details
// object, "productDetails" was discarded.
MessageBus.postMessage(ModuleA, "com.shopme.ShoppingCart.events.CartAdd", {
"item": "7875687",
"name": "Apple Air Pods 2",
"price": "199",
"currency": "Euro",
"productImage": "https://cdn.shopme/api/v2/products/7875687/image"
});
Module B and C caught up with the changes…
// Module B updated its implementation
ModuleB.onCartAdd({item, displayName, price, currency, productImage}) {
return `<div>${displayName} $this.getCurrencySymbol(currency) ${price}</div>`;  
});

// ... so did Module C
ModuleC.onCartAdd({item, displayName, price, currency, productImage}) {
return {id: item, text: displayName, date: new Date()};
});
… but Module D still expects the outdated event details:
// Module D still expects the data structure from V1.1.4.
ModuleD.onCartAdd({productDescription: article}) {
return {id: article.item, name: article.displayName};  
});
Something's likely to break in the frontend.
The example
Figure 2.1: The Online ShopThroughout this article we will use an online shop as an example. Imagine the shop frontend assembled by at least two separate frontends: the Shop with its articles and a Shopping Cart frontend. The first provides the interface for browsing and searching through categories and listing shop articles, the latter provides the interface for managing the cart's contents and invoking the purchase process.
The use case to which we'll be referring to whenever we need code examples is the user's invoked action of adding some article from the shop to the shopping cart:
put-into-cart:
Whenever the user wishes to buy an item with the "Add to cart" button, update the shopping cart on the article detail page with information about the item without invoking server roundtrips.
The following image highlights the components the article detail page consists of. The grey part is part of the container application that embeds the various frontend fragments and is responsible for routing into the frontends based on user interactions; pinkish highlights the Shop-Frontend's UI, the yellowish part is a component the Shopping Cart-Frontend provides. 
Figure 2.2: The Shop Frontend with the Shopping Cart Widget.The integration pattern used for embedding the frontends into the article details page is not important right now - what matters though is that both frontends are unaware of each other. 
Shopping Cart Widget responsibilities
Figure 2.3: The empty Shopping Cart Widget.The shopping cart widget is provided by the Shopping Cart Frontend. It's responsible for providing information and interaction:
interaction: after tapping/clicking the widget, send a message to notify any interested consumer that the client wishes to inspect the shopping cart's contents in detail; provide options for removing an article from the cart
information: keep the widget up to date with information about the articles that were added to the shopping cart during the user's session

Inspecting the Shopping Cart should be fairly easy, as this is a task that would most likely get consumed by the Application Container, routing to the main view of the Shopping Cart Frontend. We will return to the tasks related to article details shortly.
Sending ShoppingItem-data with the Message Bus
Given the scenario described at the beginning of this article, let's see how a basic implementation of an event that describes the "put into cart"-action looks like.
Let's first have a glimpse at how the backend is involved: Assuming we have an Order Service and a Cart Service in the backend, adding an item to the cart will create an Order. The Order consists of a Line Item that has to be claimed from the Warehouse Service, which tells the Order if there are enough items left for the client so its order can be fulfilled. If the Warehouse Service green-lights the action, and the invariant of the Order Aggregate (which is part of the the Order Domain) is something in the like of order.itemCount ≤ lineItem.availableQuantity , the Order is created and reserved for the client.
Figure 2.4: The sequence for adding an item to the Shopping Cart (Backend).Once the client receives the HTTP-response indicating a successful operation, the Shop Frontend sends its message into the aether:
// Shopping Frontend
/**
* Callback for the response of the addtocart-endpoint.
*
* @param {ShoppingItem} item
* @param {Response} response
  */
  onAddItemToCartResponse(item, response)
  {
  if (response.status !== 200) {
  // ... here be failure handling
  return;
  }
  this.messageBus.postMessage(
  "CartAdd",          
  Object.assign({}, item.data)
  );
  }
  Let's have a detailed look at what's going on here: 
messageBus is a reference to the Message Bus used by the application, injected during the creation of the Article Detail Page
  Since onAddItemToCartResponse() is part of the Shop Frontend and therefore totally aware of the ShoppingItem data type, it expects the item's data details in the property data: Knowing that item.data is a JavaScript Object that is modelled in the likes of a DTO, it plays nicely and makes sure it does not pass a reference of it to the message broker, avoiding accidental edits to the ShoppingItem itself: It removes all references from it by creating a copy of the key-/value-pairs
  Contrary to the example above, we do not add the source of the sender to the message, since this would mean we would break the rules of information-hiding and leak details about the sending domain:  We want to expose just the information required for constructing the message 
finally, we ingest the data into the message bus by calling the postMessage-method, letting the application know that the buys-item User Journey is about to begin.

Handling the event by the Shopping Cart Frontend
Let's return to the Shopping Cart and remind ourselves about it's second responsibility:
information: keep the widget up to date with information about the articles that were added to the shopping cart during the user's session

The Shopping Cart Frontend needs to know the information made available by the event, and by the start of the project, the information is exchanged between the Shop and the Shopping Cart team.
Figure 2.5: The moment the Shopping Cart and the Shop Frontend Teams agree on implementation details, using "hearsay", the worst of all agile methodologies. To noones sursprie, the quality of the communication will be reflected in the software, according to Conway's Law.While agreeing on the message was made in good faith, the agreement just results in some odd decisions, not only by the programmer adding the feature, also in communication and the implementation resulting of it: 
Figure 2.6

addItemDataToCart was updated to process the updated CartAdd-event that is consumed from the Message Bus:
// Shopping Cart Frontend:
// CartWidgetComponent
init()
{
this.messageBus.on(
"CartAdd",
this.onCartAddEvent
)
},

/**
* @param {Object} cartAddEvent Event details object, fields as follows.
* @param {String} cartAddEvent.id The article's id.
* @param {String} cartAddEvent.text Article info to display.
* @param {Float} cartAddEvent.price The price of the item.
* @param {String} cartAddEvent.currency The name of the currency used.
*
*/
onCartAddEvent(cartAddEvent)
{
this.addItemDataToCart(eventData);
},

/**
* Delegating to render() so it can pass the generated HTML to the root
* node.
  */
  addItemDataToCart(item)
  {
  const html = this.createItemHtml(item);
  this.render(tpl);
  },

/**
* Creates a new item template based on the information available
* with "data".
*
* @param {Object} data
* @param {String} data.name The display name of the item
* @param {String} data.id The article's id.
* @param {Number} data.price The price of the item
* @param {String} data.currency The currency of the price
*
* @return {String}
  */
  createItemHtml (data) {
  const tpl = this.getItemHtmlTemplate();
  tpl.update({
  name: Frontend.encoder(item.name, Encoder.NO_HTML),
  valueNode: this.priceForCurrency(
  Frotend.NumberFormat.decimals(item.price, 2)
  item.currency
  ),
  tools: [
  this.makeRemoveIconForArticle(data.id)      
  ]
  });
  return tpl.toString();
  }
  Implementation Flaws
  Let's ignore for second the fact that the example exaggerates: Way too often development teams do not invest the time to choose the right design  when they have to overcome subtle challenges, and instead fall back to solutions that are more or less likely to break, particularly if preconditions change during development and those preconditions are not validated [DESIGN_BY_CONTRACT]. 
So, what happens with the code above if
  fields get added to the event object
  fields get removed from the event object
  the data types send with the event object change
  semantics of the event object field names become ambiguous (e.g. text/description)

The only interface that exists between the event and the Shopping Cart ist onCartAddEvent, a monadic function that receives an object. The only information available with the object are available with the documentation, and we all now, documentation lies: Even if you live documentation through source code [CLEAN_CODE], you just can't guess an object internals and have to inspect it. 
Let's have a look at how the Shopping Cart widgets changes over iterations. The first version of the widget is very much straightforward: It shows the item name, the individual price, the total sum of all articles in the card and a checkout button that redirects the user to the Shopping Cart Frontend.
Figure 2.7

Then suddenly, things go wrong in production. The Shop Team is asked to change the data sent with the attribute text of the event object, as it is required by another consumer of exactly this event type.
Figure 2.8


    eventDetails.text = [
        articleRecord.get("name"),
        articleRecord.get("description")
    ].join(" ");

    this.messageBus.postMessage(
        "CartAdd",          
        eventDetails
    );

Long forgotten any previous agreements. The next time Jeff from the Frontend Team strolls through the Shop, he's confronted with this:
Figure 2.9 A simple change of the event specifications wreaks havoc Oh, and did we forget to tell you about the changes made with to the attribute id of the event object? That's not the id of the article anymore, it's now a UUID generated for the event itself, as it has to be tracked by the State Management in the frontend. Trying to remove an article from the cart will yield the following
Figure 2.10 The save-money-with-our-100-cleaning-rags-value-pack you have accidentally put into your cart will now forever stay there.Better contact the support...
Figure 2.11 The current situation. No agreements on the versioning between the Modules exist. Specifications rely on hearsay, where it should be formal specifications.Dependency Management with Shared Source
The developers decide to establish inner source in the organisation. An internal repository (or registry) is installed and used used by the various software departments and their frontends. They add dependencies from the shared source and and tie their releases to specific version numbers of this shared source. The version number becomes the contract, and the repository managing the shared source becomes the custodian. The goal is to make sure that each client understands each event strolling through the system. 
Figure 3.2 Modules receive the event specification from a central repository.The code within the shared repository (Figure 3.2) can be independently tested and developed. It provides event specifications and mappers that can be used to properly parse event information. Clients implement try/catch as a last resort if something goes awry, to throw an Exception or return a Special Case object so that a system can properly react to a fail state and reset itself into a functional one.
class CartAddEventMapper {

map (eventData) {
const result = this.validateWithSchema(eventData);
// conforms to the expected structure of the specification
if (result.isValid()) {
return CartAddEventSpecification(eventData);  
}

    // throw result.getValidationError();
    
    // or return a Special Case object instead 
    return NullCartAddEventSpecification();
}

class CartWidgetComponent {

onCartAddEvent(cartAddEvent) {

    const mapper = this.eventMapperFactory.buildFor("CartAddEvent");
    
    // if the event is not understood, a special case is returned,
    // providing the default API of the CartAddEventSpecification
    const eventSpec = mapper.map(cartAddEvent);

}

}
Data Mappers (adapting to event details) are now maintained in a separate module. Implementing frontends must keep their code in sync with the API of the various Event Specifications. The team understands that it is not eliminating coupling, but instead leveraging it in another form to another layer: Providing the data mapper now as a shared code dependency, systems can automate their build process and prevent (runtime) errors by pulling the latest version from the repository, then run their tests with the updated code, adjust their sources if necessary, stick the shared source's version to their release, then deploy. However, a coordinated upgrade processes is required to make sure all teams and applications belonging to the system's ecosystem use the latest specifications provided by the contract and do not introduce breaking changes into their frontends because of version mismatch.
 This unfortunately results in more rigid release cycles: A module can be build and deployed if its working with the latest changes made to the event specifications, but the whole system only works if all of its modules adhere to the same version of the event specification. In the worst case, parts of the system use an outdated module that is not capable of processing the event data. In this case, developers have to provide means to bring the whole system back into equilibrium by updating all subsystem to the new specification. 
Figure 3.3 All modules except for Module D updated to the latest event specifications. Functionality is bound to breakChecked exceptions can be used to prepare the source for this kind of errors, reacting gracefully to any unexpected issue with the event API. Any Module must adapt to a newer event specification existing in the system. So if the team of Module A agrees to adapt to a new event specification available with the shared source, Module B, Module C and Module D must adapt to this specification, too: If any Module uses a newer version of the event specification, and another Module expects an older installment, we find ourselves quickly back to where we were before using shared source (see Figure 3.3 and Figure 1.1).
The monorepo
Although the advantage is the agreement on a central place that all projects use, coupling exists now between the implementing frontends and the shared source and the version used with the shared source. To prevent further overhead of orchestrated releases and problems incurred by version mismatch, the team discusses to abandon the current scm-strategy.
Figure 3.4 The source control management strategy used with the shared source. Each system can be autonomously developed and deployed.The idea of independently developing modules for the software where each team is responsible for deploying and maintaining their own modules provides obstacles when it comes to dependency management and communication between the teams and obviously between the modules. A reasonable solution would be to merge the modules into a monorepo: If independently developed modules are deployed only to be re-integrated again into a system the organisation itself has control of, why shouldn't the organisation begin with maintaining the modules as an integrated whole?
Figure 3.5 Bringing the monorepo back into the game. The team now has 1 repository, 1 build pipeline and 1 system that gets deployed.The system is maintained in a central repository. The system has dependencies that the embedded modules are aware of: It prescribes the event specifications that should be used by all the modules. Since the teams of the various modules run their tests on a daily basis, communication errors are now detected before the system is deployed. With all the data that requires validation, Chains of Responsibility are used that pass the data through various levels of validation. These validators are developed and tested with the system, and the modules integrated into the vc-system use exactly these validators and mappers to get a hold of the specification of the current version of the event objects.
All goes well, until the team decides to open their infrastructure for external system. Once more, the team is faced with the fact that it has no control over the communication specifications.
External systems depict unknown event origins. The team cannot cover external systems with their tests: They must understand that any external system can corrupt communication that has to cross system boundaries: If the external system uses an outdated version of the event specification, the external system must adapt to the organisations system event specification, and the same problems arise the team thought would have been taken care of.
Figure 3.4 External systems might still expect older versions of the event specification and can not adopt so quickly with the release cycles of our organisations development.Mitigating the problem
The following can mitigate, yet not eliminate problems induced with autonomously developed micro frontends. The emphasis is clearly on the first bullet point, integration testing. 
Build integration tests when autonomously developed modules are used in a system
Make sure event specifications do not introduce breaking changes in between minor releases. 
Do not require a newer major module version without thoroughly running the integration tests  
If an event specification introduces breaking changes, orchestrate a lockstep release.

The next section introduces a solution for shared event communication in micro frontends, without the burden of lockstep releases and with easing the process of plugging in external system. 
Creating a contract for event details
Whenever you need to share information between frontends, agree on an initial contract that agrees on the fields sent with the information and the contents of the fields, which includes type and format of the values of the fields. Do not remove or add fields specified with the contract over time. Provide additional information due to changed requirements with additional fields that are exclusively marked for this intend. Establish a custodian that is responsible for mediating contracts for messages between producer and consumer of those messages.
If we can agree upon a Message Bus as the transportation layer for the frontends' messages, we should also agree on a minimal, initial set of attributes of the messages that will never change. A set of very generic attributes will do. For example, we could define an identifier for an event, such as a unique name that will come in handy when spotted in the source code so we know what we're dealing with, and of course attributes reflecting the event's domain . 
What we want to prevent with this specification is to expose any kind of domain related behavior or logic. Keeping the events as generic as possible helps in making sure contracts do not violate boundaries. We do not want any information leaking except the information that is absolutely necessary for processing the event: Developers must fall back to well-formed APIs if the need additional information related to the event, maybe discovering flaws in the current design [REFACTORING TO DEEPER INSIGHT]. 
Simple Structs or DTOs in the form of POJSO (Plain Old JavaScript Objects) are known to work well; providing a meta-field for optional information not fitting into the specification, carefully inspected by the consumers, can be added to the DTOs; this should only be used to a given extend, though, so resulting implementations do not unintentionally weaken the specifications: At some point developers will rely on the meta-attribute and not care about the initial contract anymore, yielding another article by another developer dealing with this issue,  who humbly wants to make the world a better place.

Specifications for the details of cross-application events can easily be agreed upon by the teams implementing a Micro Frontend architecture.Instead of providing a contract of the structure used for the data - which would result in even more dependencies, as producer and receiver and all behavioral implementations used within would have to know the incoming type of the data - the data send through the message bus should follow a simple specification set up for all messages used within the project. 
To validate incoming events, we will use schema validation

Reassuring dispatch
if a meta field is used, the api's name of the event together with the event-version. e.g npm packge name can be used to make sure the consumer is using an adapter capable of transforming the event. If that is not the case, the consumer can silently fail. This results in inconsitency, of course, but the application is still usable. 
Instead of providing a contract of the structure used for the data - which would result in even more dependencies, as producer and receiver and all behavioral implementations used within would have to know the incoming type of the data- the data send through the message bus should follow a simple specification set up for all messages used within the project. Simple DTOs in the form of POJSO (Plain Old JavaScript Objects) are known to work very well; providing meta-fields for information not fitting into the specification, but optionally required by the consumers, can be added to the DTOs; this should be handled with care, though, so resulting implementations do not unintentionally weaken the specifications. 

An example for the introduction to the specifications for the details of a message used in a system with conceptually related modules. If messages contain representations of ENTITIES, and consumer need to process these entities with the help of Data Mappers, boundaries between the modules have to be re-evaluated: Either the consumer is inappropriately placed, or functionality should be bundled closer together into the same module.

When to use it
Use a shared Data Renderer when you are working with Deploy Monoliths
Data that is generated dynamically during the runtime (e.g. a user working with the software) must be rendered given the current context the data is used, which can differ throughout the µFrontends which are consuming the data.
When composing frontends out of different artefacts - be it a frontend itself, or just different components of these frontends - it is sometimes necessary to break out of the boundaries and fall back to conceptuall dependencies between those frontends.
Event gets fired, entity is ready to be rendered
observer decorate the entity, reference is used
central observer sitting in the APP shell

valid for all approaches, e.g. tranlsating DTOs into different formats the frontends understands. 
Alternatives

Example: Online Shop - Adding an item to a shopping cart

Additional Resources:
https://event-driven.io/en/how_to_do_event_versioning/
Consumer-Driven Contracts: A Service Evolution Pattern
Ian Robinson To illustrate some of the problems we encounter while evolving services, consider a simple ProductSearch…martinfowler.com
https://en.wikipedia.org/wiki/Lockstep_(computing)

```