# About Hooks

## About useState vs useReducer and the Context API (from the amazing @rafaelquintanilha)


I think that the main differences between them are:
Context - you want to use context for information that should be globally available within the whole app. For example, user preferences (dark mode, light mode, etc), if a user is logged in or not, tokens, etc. It's rarely used.
State - pretty much anything that is dynamic and pertain to a specific part of the application. E.g. list of appointments, list of categories (fetched from an API), etc
Reducer - reducer and state share the same principle. They store an app state. The difference in a reducer you write an action that might make several state changes at once. E.g. an action FETCH_STARTED would change a pending attribute to true,  completed to false , error to null, etc. So instead of writing 3 different setState, you create a single action. Usually, you want to use reducer when the state gets too big to manage (many of the possible states are correlated, so it's easy to leave something missing)

Reducers also can be shareable, so this is a good thing if you have a state that can be repeated across apps. But I don't use it very much because I'm not a huge fan of too much abstraction

Use Context API when you have one React App and need global objects.

Bottom line, 
You will want to use Reducer instead of plenty of useState when you realize that your state is becoming too big or hard to manage (e.g. you have 10+ useState in a single component, or things like that). But understand that everything you do with useReducer you can do with useState


I recommend that you start with useState until you get really comfortable with it and understand why useReducer would be preferable

95% of the cases useState will be enough

Mainly because if your state is getting too complicated, it might be a sign that something isn't right

# About spread operator (...) and properties in javascript (@rafaelquintanilha)

his is a trick to dynamically add a property to an object. Suppose that I have the following object:

const person = {
  name: data.name,
  country: data.country
}
Now imagine that I want to declare this object but add a city property only if the person lives in the US.

I can do the following:

const person = {
  name: data.name,
  country: data.country
}
if ( data.country === "US" ) person.city = data.city;
But now I had to declare the variable and mutate it right after, which can be cumbersome. You can dynamically add a property by using the spread operator:

const person = {
  name: "Janice",
  country: "US",
  ...(data.city === "US" && { city: data.city })
}
If data.city !== "US" then no object will be returned and the spread operator won't add any new property. Else, the object is returned and its attributes added to the person object.
