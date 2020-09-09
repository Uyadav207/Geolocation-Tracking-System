import * as Location from 'expo-location';

const tenMeterWithDegrees = 0.0001;

const getLocation = increment => {
    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: 79.39151184113058 + increment * tenMeterWithDegrees,
            latitude: 28.99966811372169 + increment * tenMeterWithDegrees
        }
    }
}

let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    })
    counter++;
}, 1000)
