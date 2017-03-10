---
title: "Tip: Proper handling of Plugin InputParameters"
subtitle: The type-safe approach with intellisense
date: 2017-03-10
layout: Post
tags: Tip MsDynCRM MsDyn365 Plugin
---

Retrieving information from the InputParameters collection from a plugin execution context can be quite cumbersome task. The standard approach requires the need to know very specific *magic strings*, and casting of variables to the a specific type. This is, in my opinion, not a very good or maintainable approach. 

In my quest to eliminate all uses of *magic strings* and *magic numbers* from my code, I have found a quite simple and neat solution to help with this issue, which I have not seen anyone else use so far.

# The standard approach

The most commonly-used method is to do as shown in the [MSDN docs](https://msdn.microsoft.com/en-us/library/gg309673.aspx#Anchor_4):

```csharp
if (context.InputParameters.Contains("Target") &&
    context.InputParameters["Target"] is Entity)
{
    // Obtain the target entity from the input parameters.
    Entity entity = (Entity)context.InputParameters["Target"];
}
```
<div class="caption">
  Example of getting <code>"Target"</code> parameter when the operation is <b>Create</b>.
</div>

In order to retrieve the target entity safely from the InputParameters collection, we have to go through quite a few checks and use the magic string `"Target"` a few times. The type of the retrieved value is also checked to be an `Entity`, before casting the value to that type.

Now during a **Delete**-operation, there is also a `"Target"` in the InputParameters collection. This time, however, it has the type `EntityReference`:

```csharp
if (context.InputParameters.Contains("Target") && 
    context.InputParameters["Target"] is EntityReference)
{
    // Obtain the target entity reference from the input parameters.
    EntityReference entity = (EntityReference)context.InputParameters["Target"];
}
```
<div class="caption">
  Example of getting <code>"Target"</code> parameter when the operation is <b>Delete</b>.
</div>

Not only do you need to know the magic strings necessary to get any information from the InputParameters collection (in this case `"Target"`), but you also need to know the output type.
The above cases even show that the same key can even have different types depending on the event-operation — which can lead to great confusion and non-working code the first time you encounter it as a developer.

One can quite quickly learn which parameters and types are present in the most basic operations (CRUD). 
But when it comes to operations that you are not familiar, you have to look up the necessary magic strings and types online, and then use them correctly on the InputParameters collection. 

For example, can you tell me which parameters (along with their types) are available during a **WinOpportunity**-operation? Would you have to check online to figure it out?




# The type-safe approach

This approach removes the need for any magic strings, automatically provides the type of each retrieved value, and even provides intellisense when retrieving the information available in the InputParameters collection.

And best of all, it is actually very simple. You just create a request of the matching type and pass in the parameters. This lets the request handle all the trouble of retrieving the information, and you even get intellisense to access the available parameters:

```csharp
/* If the operation is Create */
var createReq = new CreateRequest() { Parameters = context.InputParameters };
createReq.Target; // Has type Entity
```

```csharp
/* If the operation is Delete */
var deleteReq = new DeleteRequest() { Parameters = context.InputParameters };
deleteReq.Target; // Has type EntityReference
```

```csharp
/* If the operation is WinOpportunity */
var winOppReq = new WinOpportunityRequest() { Parameters = context.InputParameters };
winOppReq.OpportunityClose; // Has type Entity (OpportunityClose)
winOppReq.Status; // Has type OptionSetValue
```
<div class="caption">
  Examples of using the alternative approach to handle InputParameters from a plugin execution context.
</div>

All standard SDK requests are found in either `Microsoft.Xrm.Sdk.Messages` or `Microsoft.Crm.Sdk.Messages`, so be sure to include those with a `using`-statement.

Note that some requests can have "hidden" optional parameters, which are not defined as actual properties on the request. For example, `"SolutionUniqueName"` is a valid parameter for Create ([and a few others](https://msdn.microsoft.com/en-us/library/gg328075.aspx#bkmk_optional_params)), but is not a property on the `CreateRequest` class. Unfortunately, these still have to be accessed using the standard approach with magic strings and type-casting.

This approach makes it much easier and simpler to safely handle InputParameters in plugin logic, and you (almost) never have to look up parameters for InputParameters again.
