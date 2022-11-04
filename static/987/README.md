# 2048
A small fork of a small clone of [1024](https://play.google.com/store/apps/details?id=com.veewo.a1024), based on [Saming's 2048](http://saming.fr/p/2048/) (also a clone).

Made for more mind-bending math fun. [Play it here!](http://davidagross.github.io/2048/)

### Inspiration
The idea has obviously been remixed over and over, but my idea came from playing [2584](http://mike199515.free3v.com/1597/2.htm), a [Fibonacci](http://en.wikipedia.org/wiki/Fibonacci_number) version of the game, which I found on this [long list of 2048 remixes](http://phenomist.wordpress.com/2048-variants/).

The inspiration to actually build the thing and start tinkering with the code was from the [Udacity Short Course](https://www.udacity.com/course/ud248) on building your own 2048 game.

### Mathematics
The original 2048 game involves smashing numbers together to make new ones.  The "rule" is that

	two tiles of the same value -> add the tiles together

Because we started with "2" and "2", and adding a number to itself is the same as multiplying by 2, we get the sequence:

	2, 4, 8, 16, ... , 2048, ... , 2^n, ...

If we start our sequence with "1" and "2", and change our rule to

	two tiles are next to each other in the sequence -> add the tiles together

we'll get the famous Fibonacci sequence:

	1, 1, 2, 3, 5, 8, 13, ... , 2584 , ... , (phi^n - (-phi)^{-n}) / sqrt(5), ...

If we follow the same rule, but start our sequence with random, small integers, then we'll get a [generalized fibonacci number sequence](http://en.wikipedia.org/wiki/Fibonacci_number#Generalizations).  Enjoy!

### Screenshot

<p align="center">
  <img src="https://raw.githubusercontent.com/davidagross/2048/gh-pages/meta/2207-20140409-091631.png" alt="Screenshot"/>
</p>

Resequencing randomly landed us on a [Lucas number](http://en.wikipedia.org/wiki/Lucas_number) game!

## Contributing
Changes and improvements are more than welcome! Feel free to fork and open a pull request. Please make your changes in a specific branch and request to pull into `master`! If you can, please make sure the game fully works before sending the PR, as that will help speed up the process.

You can find the same information in the [contributing guide.](https://github.com/gabrielecirulli/2048/blob/master/CONTRIBUTING.md)

## License
2048 is licensed under the [MIT license.](https://github.com/gabrielecirulli/2048/blob/master/LICENSE.txt)

## Donations
Gabriele made this internet sensation in his spare time, and it's hosted on GitHub (which means none of us have any hosting costs), but if you enjoyed the game and feel like buying him coffee, you can donate at his BTC address: `1Ec6onfsQmoP9kkL3zkpB6c5sA4PVcXU2i`. Thank you very much!
