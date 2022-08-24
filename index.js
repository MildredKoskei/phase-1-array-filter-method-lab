// Code your solution here
const  drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, Bobby) {
    return drivers.filter(function (driver) { return driver.toLowerCase() === Bobby.toLowerCase() })
    }  
findMatching()
  
function fuzzyMatch(drivers, s) {
    return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, s.length) === s.toLowerCase() })
  }

fuzzyMatch()

function matchName(drivers, Annette) {
    return drivers.filter(function (driver) { return driver.name === Annette })
  }



