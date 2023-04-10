/*
    Attached to index.html is a js file called data which contains an array of objects called people. Each element in the array
    is a person that has a name, age, address, job, sex, and state property. 

    1) Write a function in solution.js that is going to accept an array and a string as an argumnet

    2) the function should have local variables html (string) and matches (array)

    2) The array that is going to be passed to the function is going to be the people array, and the string passed to the function is going to represent a job title. Knowing this, write a loop that loops through all of the elements (Hint: use a regular for loop, or use a for of loop to do this), write a condition so that if the job title passed to the function is the same as the current persons job, then the current person should be added to the matches array. 

    3) Once this loop is completed, write another loop that loops through the matches array using another for loop. This new loop should continually build a string that will be appended to the DOM upon completion (use the html variable for this). Each persons name should be put in h2 tags, their address and state should be put in the same h3 tag, and the rest of their information should go in list item tags that are nested inside of an unordered list. 

    4) Lastly, append the html string to the main tags inside index using innerHTML. Before appending the list of persons, add an h1 tag to the dom that contains the job title that was passed to the fucntion. 
*/