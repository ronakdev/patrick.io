## Inspiration

Being born deaf, Ellaine has faced the challenges that tens of millions of Americans. After over a decade of using hearing aids, Ellaine and her family decided that a cochlear implant would be the best treatment option. But what should be a solution to the issue turned into a series of long, arduous meetings with an audiologist that relies on "gut feeling" and inaccurate, qualitative trial and error to tune the cochlear implants. Given her personal experience, we were enthusiastic about seeing how we can solve this process for her and many others across the world who have cochlear implants.
 
## What it does

We use the Muse headset to measure EEG waves in a patient's brain in order to observe the changes upon audio simulation. By measuring the disruption in homeostasis and tuning the audio simulation to bring that back to a normal state, we are able to quantify and enhance both customer and provider experience in the tuning process of the cochlear implants. 

## How we built it

We used the Muse SDK and MuseLab, along with various libraries within JavaScript including Node.js. We continued on to use Socket.io to create a websocket between our locally hosted server, the real-time data stream from the hardware device, and our website. We also put a love and thoughtfulness in our design and implementation. 

## Challenges we ran into

The biggest challenge was using the Muse software given that it relied on an unmaintained Objective C codebase. We were able to avoid using much of Objective C by using software tools available through MuseLabs and feeding this data through node.js to create the better visual interface we see today. We ran into much difficulty finding the biological basis from which our graph would display the most essential data to the healthcare provider. Since it required the combination of biological knowledge, computer science knowledge, and basic data science skills, it required an incredibly diverse set of skills and methods of thinking.



## Accomplishments that we're proud of
-Made new friends, team dynamic was super fun 
-Pivoted from the initial idea, turned out even better 
-Cup stacking achievement unlocked

## What we learned

Believe in yourself because everyone else is taken.


## What's next for Patrick_I/O

-We are planning on improving the biological basis from which we are presenting data.
-We also hope to incorporate more data streams from the Muse headset like accelerometer information and clenching of muscles.
-IPO???? Blockchain???? AI???
