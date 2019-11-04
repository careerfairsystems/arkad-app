# ARKAD mobile application

## 1. Install Node.js

1.  Install HomeBrew: [instructions](https://docs.brew.sh/Installation)
2.  Run: `brew install node`

This will also install npm.

## 2. Clone repository to your computer

1.  Go to Git projects folder: `cd /path/to/my/git_folder`
2.  Clone repository: `git clone https://github.com/careerfairsystems/arkad-app.git`
3.  Go to the root of the cloned repo `cd /path/to/my/git_folder/repo_root`
4.  Install npm: `npm install`

## 3. Run application

You can choose to run the application on either device or phone simulator.

### Run application on device

iOS and Android instructions can be found [here](https://facebook.github.io/react-native/docs/running-on-device.html).

These steps can be quite tricky if you haven't used Xcode or Android Studio before, running the application in a simulator, which is described below, is easier to setup.

### Run application on phone simulator

1.  Install React Native CLI (Command Line Tool): `npm install -g react-native-cli`
    - You might have to run `npm install` again.
    - You should be able to just run `react-native run-ios` and `react-native run-android` respectively.

If you run into problems the following guides can be useful for [iOS](https://facebook.github.io/react-native/docs/getting-started.html#xcode) and [Android](https://facebook.github.io/react-native/docs/getting-started.html#java-development-kit) respectively. You don't need to read the `Creating a new application` section as this has already been done.

> Tip: Instead of using a virtual device in Android Studio you can use Genymotion, you download it from [here](https://www.genymotion.com/fun-zone/) and you'll also need [this](https://www.genymotion.com/plugins/) plugin.

## 4. Install Watchman (some macOS users only)

Run: `brew install watchman`

## 5. Install Atom

1.  Install [Atom](https://atom.io)
2.  Open Atom and go to Settings/Preferences and select Install in the side menu
3.  Install the following packages: `busy-signal`, `intentions`, `linter`, `linter-eslint`, `linter-ui-default`, `prettier-atom`
4.  Setup `prettier-atom` by changing the following settings:
    - ESLint Integration: `true`
    - Format Files on Save: `true`
    - Single Quotes: `true`
    - Semicolons: `false`

These settings are important to avoid conflicts and to get a common coding structure.

### Now you can start coding! :heart_eyes:

## Parse SVG to React components

1. The art director should send you new SVG-files. They need to be exported with the correct settings. A screenshot of the setting exist here in the PG drive : https://drive.google.com/drive/u/2/folders/1cot4-DyqKzrlIvFA829D5-iwXmFVJyFF
2. Go to https://www.smooth-code.com/open-source/svgr/playground/?fbclid=IwAR369muucvHP8eCg7-LHRuRPBmJixmhka9TV8KPrGU5CyEtebQDVu2s1e5c
3. Tick react-native. Untick SVGO
4. Paste SVG code into the right side.
5. The page is kind of sensitive. You can remove the first row about XML and stuff. The first row should maybe only be the SVG code up until </title>
6. Break it up so rows don't become too long.
7. For the really big SVG files, you might split up the code and gradually move it over to the component map file.
8. Move the new code over from the SVGR side to the map component. Replace the text between <Defs> and </Svg>
9. Next, you need to add layered booth components. Use the script in resources/scripts/add_map_layers
10. You should now have new working maps. Enjoy!
