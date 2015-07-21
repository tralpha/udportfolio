## Website Performance Optimization portfolio project

Libraries:
1. jQuery

Tools:
1. Grunt

Author: Ralph Tigoumo

To get started, check out the repository, inspect the code,

### Getting started

Some useful tips to help you get started and running the website locally:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)


You could also run the website and check it's pagespeed score directly on the console using pagespeed insights and ngrok module in grunt. Just go to the project directory in the command line, and run grunt there. You'll be able to see your pagespeed score display in the command line.


Optimizations Made For the HTML file:

1. Minimised all of the images, using online image minimization tools and page speed insights.

2. Changed the position of the javascript in the index.html file, to put it at the bottom of the HTML. Added the asyn task to the javascript html scripts.

3. Made the CSS to be inline instead of in another file which the browser will have to download.


Optimizations Made for the Main.js File:

1. Removed the randomPizzaContainers variable declaration from the for loop in line 460 to improve efficiency.

2. Used the document.getElementsByClassName() API instead of using the  document.querySelectorAll() API for the randomPizzaContainers variable on line 453

3. Put the pizzasDiv element out of the for loop on line 480

4. Put the variable cachedScrollTop outside the loop on line 516 to improve the frame per second.

5. Declared the variable phase outside of the loop on line 516 to help with efficiency

6. Moved the elem variable declaration on line 525 out of the for loop on line 524.

7. Created a movingPizzas variable to store the DOM selections document.querySelector("#movingPizzas1") originally on line 532 out of the for loop, to improve efficiency. 

