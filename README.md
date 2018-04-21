# MagicMirror
In the start of 2017 I decided I wanted to do a project. After a while I stumbled upon the [MagicMirror](https://magicmirror.builders/) project, and I thought this was a perfect project for me. 

This project has turned out to be a hit. My girlfriend loves it and when we get visitors they all get really impressed and asks if I could make one for them too.

## Build
I immediately bought the hardware I needed to run the software, and started experimenting. As I was experimenting with the modules, I looked for an second hand monitor I could use. In the end I went with a 24 inch Samsung monitor. 

I considered building a frame of my own, but quickly realized it would be best to just buy one and then modify it to fit the project. After discussing with my girlfriend we ended up with a 40 cm [Ikea Nissedal](https://www.ikea.com/no/no/catalog/products/30320321/#/30320316) mirror, as this looked ok and would fit our space perfect. 

Sadly a one-way mirror is quite expensive in Norway. The project therefore stood a bit still for quite a long time, since I did not know what to do about the mirror itself. I ended up with buying a mirror from Poland, as I was there in the summer. Big thanks to my girlfriends parents that were so helpfull on that part!

To fit all the hardware I had to build a extended frame. To not let any light shine thru other than where the monitor was, I covered the mirror in some vinyl like wrap, and cut a hole for the monitor. On the back I also made a platform for the power supply for the monitor and the Raspberry Pi.

Here is some pictures from when I built the frame.
![build](https://github.com/petrepa/MagicMirror/blob/master/build.jpg)

## Modules
If someone wants to see my config file for some reason you can find it [here](https://github.com/petrepa/MagicMirror/blob/master/config.js)
### 1st Party
* [Clock](https://github.com/MichMich/MagicMirror/tree/master/modules/default/clock) - Uhm well yeah shows the time
* [Calendar](https://github.com/MichMich/MagicMirror/tree/master/modules/default/calendar) - Showing me and my girlfriends calendar so we can keep track of each other
### 3rd Party
* [iFrame](https://github.com/desertblade/iFrame) - Using this to show the departure times from our nearest bus stop
* [MMM-YrNow](https://github.com/Yr/MMM-YrNow) - Wheater forecast
* [MMM-Sonos](https://github.com/CFenner/MMM-Sonos) - Shows whats playing on our Sonos system
* [MMM-homeassistant-sensors](https://github.com/leinich/MMM-homeassistant-sensors) - Showing some sensor data collected from [Home Assistant](https://github.com/petrepa/Home-AssistantConfig)

![modules](https://github.com/petrepa/MagicMirror/blob/master/MagicMirror_screenshot.png)
