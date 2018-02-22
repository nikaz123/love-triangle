/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    count = 0;

    for ( let n = 0; n < preferences.length; n++)

    {
        if (n+1===preferences[n]) { preferences[n]=0}
        if ( n + 1 === preferences[preferences[preferences[n]-1]-1]) {


            preferences[preferences[preferences[n]-1]-1] = 0;
            preferences[preferences[n]-1] = 0;
            preferences[n] = 0;


            count = count + 1
        }


    }

    console.log( preferences);
    return count;

};
