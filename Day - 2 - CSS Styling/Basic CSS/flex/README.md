# FLEX properties

[Click Here](https://yoksel.github.io/flex-cheatsheet/) to playaround flex properties 

## flex-direction
This means which direction you want your flex flow
- row `DEFAULT`
- row-reverse
- column
- column-reverse

## flex-wrap
dynamically adjust and addes a line break to the main axis

## justify-content
This sets allignment on the main axis
- `flex-start` `DEFAULT`: Aligns items to the start of the container. In a row layout, it's the left side, and in a column layout, it's the top.

- `flex-end:` Aligns items to the end of the container. In a row layout, it's the right side, and in a column layout, it's the bottom.

- `center:` Aligns items at the center of the container along the main axis.

- `space-between:` Distributes space evenly between items. The first item aligns to the start, and the last item aligns to the end.

- `space-around:` Distributes space evenly around items. It adds equal space on both sides of each item.

- `space-evenly:` Distributes space evenly around items, with equal space at the beginning and end.

- `start:` Acts the same as flex-start.

- `end:` Acts the same as flex-end.

- `left:` Aligns items to the left side of the container. This is equivalent to flex-start in a row layout.

- `right:` Aligns items to the right side of the container. This is equivalent to flex-end in a row layout.

## align-items
Alligns the flex items in cross axis

- ``flex-start``:
  Aligns items to the cross-start of the container. In a row layout, it's the top, and in a column layout, it's the left.

- ``flex-end``:
  Aligns items to the cross-end of the container. In a row layout, it's the bottom, and in a column layout, it's the right.

- ``center``:
  Aligns items at the center of the container along the cross-axis.

- ``baseline``:
  Aligns items to the baseline of the container. visible when items are of diffrent heights.

- ``stretch``:
  Default value. Items are stretched to fill the container along the cross-axis.

- ``start``:
  Acts the same as `flex-start`.

- ``end``:
  Acts the same as `flex-end`.

- ``left``:
  Aligns items to the left side of the container. This is equivalent to `flex-start` in a row layout.

- ``right``:
  Aligns items to the right side of the container. This is equivalent to `flex-end` in a row layout.

## align-content
The align-content property is used to align the flex lines. Useful in `flex-wrap`. 

- `flex-start` :
Lines are packed at the start of the container.

- `flex-end` :
Lines are packed at the end of the container.

- `center` :
Lines are packed at the center of the container.

- `space-between` :
Lines are evenly distributed; the first line is at the start, and the last line is at the end.

- `space-around` :
Lines are evenly distributed with equal space around each line.

- `space-evenly` :
Lines are evenly distributed with equal space around them, including at the start and end.

- `stretch` `DEFAULT`:
Default value. Lines stretch to take up the remaining space.

## row-gap & column-gap
used to add gap between row and collumn

## align-self
The `align-self` property in CSS is used to individually control the alignment of a single flex item along the cross-axis, overriding the align-items property set on the flex container. It allows you to specify how a particular item should be aligned in relation to the other items in the flex container.

## order

In a flex container, the order property is used to specify the order in which the flex items are displayed. By default, all flex items have an order of `0`, meaning they appear in the source order. However, you can use the order property to change the display order of specific items.

Here's how the order property works:

- ``Default``: All flex items have an initial order value of 0 and are displayed in the source order.

- ``Positive Values``: Items with a higher order value appear later in the display order.

- ``Negative Values``: Items with a lower order value appear earlier in the display order.