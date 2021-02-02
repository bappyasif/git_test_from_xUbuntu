let someName = name => "hello "+name;
export default someName;

/**
 using named export gives more freedom to only import functions that you know for sure will be in use
 which means it's possible to only export functions, variable, object, class etc that you might reuire selctively than whole module
 */