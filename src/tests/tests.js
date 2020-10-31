/*
* @File: tests.js
* @Authors: EECS 448 Team 14 - Fall 2020
* @Breif: This file runs tests on the Route class defined in route.js
*/

document.addEventListener("DOMContentLoaded", () => {
    runTests(); //run the tests when the DOM is loaded
});

function runTests(){
    //run a test for every member function of Route
    test_constructor();
    test_addToRoute();
    test_isInRoute();
    test_isValidRoute();
    test_clearRoute();
}

/* Conditions to test
* @post: A route is created with undefined origin and destination, and empty wayps and routeList
*/
function test_constructor(){
    let testInfo = document.getElementById("testInfo");
    testInfo.innerText += "\nTest 1: Constructor\n\n";
    let myRoute = new Route();
    //we simply create an empty route and test the specifications

    testInfo.innerText += "Test 1A: Route is created with undefined origin and destination: ";
    if (myRoute.origin !== undefined || myRoute.destination !== undefined){
        testInfo.innerText += " FAILED\n";
        return false;
    }
    testInfo.innerText += " PASSED\n";

    testInfo.innerText += "Test 1B: Route is created with empty wayps and routeList: ";
    if(myRoute.routeList.length !== 0 || myRoute.wayps.length !== 0){
        testInfo.innerText += " FAILED\n";
        return false;
    }
    testInfo.innerText += " PASSED\n";
}

/* Conditions to test
* @post: A place (string) is added to the back of the routeList, and the origin, destination, 
*        and waypoints are updated to be the first, last, and inbetween elements.
*/
function test_addToRoute(){
    let testInfo = document.getElementById("testInfo");
    testInfo.innerText += "\nTest 2: addToRoute\n\n";

    let myRoute = new Route();
    let addToTest = ["a", "b", "c", "d"];
    //We add four items to the route to test the addition of a, b, c, and d.
    myRoute.addToRoute(addToTest[0]);
    myRoute.addToRoute(addToTest[1]);
    myRoute.addToRoute(addToTest[2]);
    myRoute.addToRoute(addToTest[3]);

    testInfo.innerText += "Test 2A: Place is added to the back of the routeList: ";
    for (let i = 0; i < addToTest.length; i++){
        if (addToTest[i] !== myRoute.routeList[i]){
            testInfo.innerText += " FAILED\n";
            return false;
        }
    }
    testInfo.innerText += " PASSED\n";

    testInfo.innerText += "Test 2B: Origin is updated to the first element: ";
    if (myRoute.origin !== "a"){
        testInfo.innerText += " FAILED\n";
        return false;
    }
    testInfo.innerText += " PASSED\n";

    testInfo.innerText += "Test 2C: Destination is updated to the last element: ";
    if (myRoute.destination !== "d"){
        testInfo.innerText += " FAILED\n";
        return false;
    }
    testInfo.innerText += " PASSED\n";

    testInfo.innerText += "Test 2D: Wayps is updated to the inbetween elements: ";
    if (myRoute.wayps[0].location !== "b" || myRoute.wayps[1].location !== "c"){
        testInfo.innerText += " FAILED\n";
        return false;
    }
    testInfo.innerText += " PASSED\n";
    return true;
}

/* Conditions to test
* @return: true if the place is in the route, else false
*/
function test_isInRoute(){
    let testInfo = document.getElementById("testInfo");
    testInfo.innerText += "\nTest 3: isInRoute\n\n";

    let myRoute = new Route();
    //we create a route to test the search
    let testData = ["a", "b", "c"]
    myRoute.addToRoute(testData[0]);
    myRoute.addToRoute(testData[1]);
    myRoute.addToRoute(testData[2]);

    //testing the good outcome
    testInfo.innerText += "Test 1A: isInRoute returns true if the item is in the routeList: ";
    if (!myRoute.isInRoute("b")){
        testInfo.innerText += " FAILED\n";
        return false;
    }
    testInfo.innerText += " PASSED\n";

    //testing the bad outcome
    testInfo.innerText += "Test 1B: isInRoute returns true if the item is not in the routeList: ";
    if (myRoute.isInRoute("z")){
        testInfo.innerText += " FAILED\n";
        return false;
    }
    testInfo.innerText += " PASSED\n";

    return true;
}

/* Conditions to test
* @return: True if the route is valid, else false
* @note: A valid route is one that has a origin, a destination, and has length > 1
*/
function test_isValidRoute(){
    let testInfo = document.getElementById("testInfo");
    testInfo.innerText += "\nTest 4: isValidRoute\n\n";
    let myRoute = new Route();
    //we test different configurations of origin, destination, and length

    testInfo.innerText += "Test 4A: isValidRoute is false if origin is undefined: ";
	myRoute.origin = undefined;
    myRoute.destination = "b";
    myRoute.routeList = ["a","b","c"];
	if(myRoute.isValidRoute() !== false){
        testInfo.innerText += " FAILED\n";
        return false;
    }
    testInfo.innerText += " PASSED\n";
    
    testInfo.innerText += "Test 4B: isValidRoute is false if destination is undefined: ";
	myRoute.origin = "a";
    myRoute.destination = undefined;
    myRoute.routeList = ["a","b","c"];
	if(myRoute.isValidRoute() !== false){
        testInfo.innerText += " FAILED\n";
        return false;
    }
    testInfo.innerText += " PASSED\n";

    testInfo.innerText += "Test 4C: isValidRoute is false if routeList.length < 2: ";
    myRoute.origin = "a";
	myRoute.destination = "a";
	myRoute.routeList= ["a"];
	if(myRoute.isValidRoute() !== false){
        testInfo.innerText += " FAILED\n";
        return false;
    }
    testInfo.innerText += " PASSED\n";

    testInfo.innerText += "Test 4D: isValidRoute is true if none of the above apply: ";
    myRoute.origin = "a";
	myRoute.destination = "c";
    myRoute.routeList= ["a","b","c"];
    if(myRoute.isValidRoute() == false){
        testInfo.innerText += " FAILED\n";
        return false;
    }
    testInfo.innerText += " PASSED\n";
	return true;
}

/* Conditions to be tested
* @post: The route is cleared and is left with no elements
*/
function test_clearRoute(){
    let testInfo = document.getElementById("testInfo");
    testInfo.innerText += "\nTest 5: clearRoute\n\n";
    //we create a route, add elements, then clear it to test for emptiness
    let myRoute = new Route();
    myRoute.addToRoute("a");
    myRoute.addToRoute("b");
    myRoute.addToRoute("c");
    myRoute.clearRoute();

    testInfo.innerText += "Test 5A: ClearRoute leaves an undefined origin: ";
    if (myRoute.origin !== undefined){
        testInfo.innerText += " FAILED\n";
        return false;
    }
    testInfo.innerText += " PASSED\n";

    testInfo.innerText += "Test 5B: ClearRoute leaves an undefined destination: ";
    if (myRoute.destination !== undefined){
        testInfo.innerText += " FAILED\n";
        return false;
    }
    testInfo.innerText += " PASSED\n";

    testInfo.innerText += "Test 5C: ClearRoute leaves an empty routeList: ";
    if (myRoute.routeList.length !== 0){
        testInfo.innerText += " FAILED\n";
        return false;
    }
    testInfo.innerText += " PASSED\n";

    testInfo.innerText += "Test 5D: ClearRoute leaves an empty wayps: ";
    if (myRoute.wayps.length !== 0){
        testInfo.innerText += " FAILED\n";
        return false;
    }
    testInfo.innerText += " PASSED\n";
    return true;
}