# UfoUi

A collection of reusable web elements for simplifying web development.

## Elements

Elements can have a different attributes that decide how they look or act. Flags are special attributes that act like ```required``` or ```readonly```. They are either on or off, for example ```dark`` will turn on the alternate dark background style for the element if available.

## Animations

Animations can be added to any element by add the animation as a flag, like ```required```.

### List of Animations

- pulse
- pop
- fade-in
- fade-out

### List of Elements

- ufo-alert
- ufo-button
- ufo-pill
- ufo-card

## ufo-alert

**Purpose:** provide basic feedback to users, ex: success/error messages.

**Usage:** update the ```msg``` with the message to display and the ```type``` with the alert type.

|Attribute | Options |
|----------|---------|
|msg  |The message you would like the alert to display
|type |one of [success, error, warning, system]
|flags | dark

## ufo-button

**Purpose:** basic button styles. Button sizes can be changed with flags ```small``` and ```large```

**Usage:** set the button text with ```text``` and the type with ```type```

|Attribute | Options |
|----------|---------|
|text  |The button text
|type |one of [primary, danger, warning, confirm, default]
|flags|one of [small, large]

## ufo-pill

**Purpose:** basic pill, size can be changed with flag  ```large```

**Usage:** set the pill text with ```text``` and the type with ```type```

|Attribute | Options |
|----------|---------|
|text  |The button text
|type |one of [primary, danger, warning, success, default]
|flags|large

## ufo-card

**Purpose:** creates a basic card.

**Usage:** creates the container for card parts.

### ufo-card-title

|Attribute | Options |
|----------|---------|
|text  |The title text
|flags|no-border

### ufo-card-body

Contains the body of the card

### ufo-card-footer

Contains the footer HTML

|Attribute | Options |
|----------|---------|
|flags|center