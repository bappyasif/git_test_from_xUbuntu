// Observer Pattern, observer is a design pattern where an object (also known as subject) maintains a list of pbjects depending on it(observes), automatically notifying them of any changes to state
// when a subect needs to notify observers about something interesting happening, it broadcasts a notification to observers
// when an observer no longer wish for a particular notification from it's subject, it can be removed from list of observers
// - Subject: maintains a list of observers, fascilatates adding or removing observers
// - Observer: provides an update interfface for objects that need to be notified of a Subject's changes of state
// - ConcreteSubject: broadcasts notifications to obseervers on changed of state, stores stae of ConcreteObservers
// - ConcreteObserver: stores reference to ConcreteSubject, implements an update interface for Observers to ensure state is consistent with Subject's

// let's model list of dependent Observers that a Subject may have:
function observersList() {
    this.observers = [];
}
observersList.prototype.add = function(obj) {
    return this.observers.push(obj);
};
observersList.prototype.count = function() {
    return this.observers.length;
};
observersList.prototype.get = function(idx) {
    // if(idx > -1 && idx < observersList.count()) {
    //     return this.observers[idx];
    // }
    if(idx > -1 && idx < this.observers.length) {
        return this.observers[idx];
    }
};
observersList.prototype.indexOf = function(obj, startIndex) {
    let i = startIndex;
    while( i < this.observers.length) {
        if(this.observers[i] === obj) {
            return i;
        }
        i++;
    }
    return -1;
};
observersList.prototype.removeAt = function(idx) {
    this.observers.splice(idx,1);
};

// let's model Subject and ability to add, remove or notify observers on Observers list
function subject() {
    this.observers = new observersList();
}

subject.prototype.addObserver = function(observer) {
    this.observers.add(observer);
}

subject.prototype.removeObserver = function(observer) {
    this.observers.removeAt(this.observers.indexOf(observer, 0));
}

subject.prototype.notify = function( context ) {
    let observerCount = this.observers.count();
    for(let i = 0; i < observerCount; i++) {
        this.observers.get(i).update(context);
    }
};
// Example Observer
function observer() {
    this.update = function() {
        console.log("update function");
    }
}
// in that sample application, using observer(..) components, we can now define:
// - a button for adding new observable checkboxes to webpage
// - a control checkbox which will act as a subject, botifying other checkboxes they should be checked
// - a container for new checkboxes being added (see index.html)

// difference between Observers and Publish/Subscribe Pattern is that observers (or object) wishing to receive topic notification must subscribe  this interest to object setting off those events( a.k.a subject)
// Pub/Sub patteern however uses a topic/event channel which sits between obejcts wishing to receive notifications and object firing that event, idea is to avoid dependencies between subscriber and publisher
