# yabai-uberbar

Personal [Übersicht](http://tracesof.net/uebersicht/) bar with graphic overview of windows on each space for use with [yabai](https://github.com/koekeishiya/yabai).

_Disclaimers:_
- This has only been tested on my personal machine
- Numerous values (especially script paths) are hardcoded and will likely require manual
  tweaking to work on your system

*Screen Shots:*
![img](https://user-images.githubusercontent.com/24897042/47940515-20933800-deeb-11e8-82dd-d3c7002cd718.png)

This widget is a heavily modified form of [blaadje/fancyBar](https://github.com/blaadje/fancyBar#readme), which itself was based on [apierz/nerdbar.widget](https://github.com/apierz/nerdbar.widget).


## Dependencies

**Yabai dependencies**
- [koekeishiya/yabai](https://github.com/koekeishiya/yabai): A tiling window manager for macOS based on binary space partitioning.
- [koekeishiya/skhd](https://github.com/koekeishiya/skhd): Simple hotkey daemon for macOS.

**Übersicht dependencies**
- [nodejs](https://nodejs.org/en/): a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [felixhageloh/uebersicht](https://github.com/felixhageloh/uebersicht): Desktop widgets via a webview.

**yabai-uberbar dependencies**
- [stedolan/jq](https://github.com/stedolan/jq): Command-line JSON processor.
- [dash shell](http://gondor.apana.org.au/~herbert/dash/): Lightweight, fast-starting shell.


---

## Installation

**Install dependencies**
```bash
brew install dash jq yabai skhd node
brew cask install ubersicht
```

**Clone the widget to your Übersicht widget directory**
```bash
# The default Übersicht widget directory:
WIDGET_DIR="$HOME/Library/Application\ Support/Übersicht/widgets/yabai-uberbar.widget"
git clone https://github.com/AdamWagner/yabai-uberbar.git "$WIDGET_DIR"
```

**Configure yabai**
Use [yabai signals](https://github.com/koekeishiya/yabai/wiki/Commands#automation-with-rules-and-signals) to refresh Übersicht when you change space or create, destroy, move, or resize windows:

Add the following to your `.yabairc` file:

```bash
yabai -m signal --add event=space_changed action="uber-bar-refresh"
yabai -m signal --add event=window_created action="uber-bar-refresh"
yabai -m signal --add event=window_destroyed action="uber-bar-refresh"
yabai -m signal --add event=window_moved action="uber-bar-refresh"
yabai -m signal --add event=window_resized action="uber-bar-refresh"
yabai -m signal --add event=bar_refresh action="uber-bar-refresh"
```

An example implementation of [uber-bar-refresh](https://github.com/AdamWagner/yabai-uberbar/blob/master/refresh) via Applescript is included.

## Enhancements / Fixes

- Flesh out "zoomed window indicator" POC
- Improve visibility of space index number against window edges
- Indicate active window
- Indicate application running in active window
- Multi-monitor support

