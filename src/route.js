/*
* @File: route.js
* @Authors: EECS 448 Team 14 - Fall 2020
* @Breif: This file provides a data structure for giving 
*         n-length routes to the Google Directions API
*/

class Route{
    /*
    * @post: A route is created with undefined origin and destination, and empty wayps and routeList
    */
    constructor(){
        this.origin = undefined;
        this.wayps = [];
        this.destination = undefined;
        //Master List
        this.routeList = [];
    }
    /*
    * @post: A place (string) is added to the routeList, and the origin, destination, 
    *        and waypoints are updated to be the first, last, and inbetween elements.
    * @param: place: a string to hand into the Google Directions API 
    *         formatPlace: a bool to decide whether or not to add ", Lawrence Kansas"
    */
    addToRoute = (place, formatPlace) => {
        if (formatPlace) this.routeList.push(place + ", Lawrence Kansas");
        else this.routeList.push(place);
        //Make the origin the first element of the routeList
        this.origin = this.routeList[0];
        //Make every element except the first and last a waypoint
        this.wayps = [];
        for (let i = 1; i < this.routeList.length - 1; i++){
            this.wayps.push( {location: this.routeList[i], stopover: true} );
        }
        //Make the destination the last element of the routeList
        this.destination = this.routeList[this.routeList.length - 1];

        //Add each point in the route to the sidebar places. (This might not belong here tbh)
    }
    /*
    * @param: place: a string of a place to check
    * @return: true if the place is in the route, else false
    */
    isInRoute = (place) => {
        let found = false;
        //Loop through the routeList and if it is in the list, set found to true
        for (let i = 0; i < this.routeList.length; i++){
            if (place === this.routeList[i]){
                found = true;
            }
        }
        return found;
    }
    /*
    * @return: True if the route is valid, else false
    * @note: A valid route is one that has a origin, a destination, and has length > 1
    */
    isValidRoute = () => {
        if (this.origin === undefined || this.destination === undefined || this.routeList.length < 2){
            return false;
        }
        return true;
    }
    /*
    * @post: The route is cleared and is left with no elements
    */
    clearRoute = () => {
        //Reset the route to its natural state
        this.routeList = [];
        this.origin = undefined;
        this.destination = undefined;
        this.wayps = [];
    }
}