This file assumes you have single layer booth components in your map like the following for booth 33
    <G id="_33" data-name="33">
     ...... Code.....
    </G>

It will then add a second layer. This layer is colored red to mark the location on the map in the app, after running the script 
    <G id="_33" data-name="33">
    <G id="_33-2" data-name="33">
....Code....
    </G>
    </G>

It's scala code. It was built on a Mac but you can run it on windows by installing IntelliJ like I did, you might need to make minor change to compile. 

The script overwrites the file, so it's wise to keep a backup just in case before you run the script.