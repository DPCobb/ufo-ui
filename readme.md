# UfoUi

A collection of reusable web elements for simplifying web development.

## Elements

Elements can have a different attributes that decide how they look or act. Flags are special attributes that act like ```required``` or ```readonly```. They are either on or off, for example ```dark`` will turn on the alternate dark background style for the element if available.

### List of Elements

- [ufo-alert](ufo-alert])

## ufo-alert

**Purpose:** provide basic feedback to users, ex: success/error messages.

**Usage:** update the ```data-msg``` with the message to display and the ```data-type``` with the alert type.

```
const alert = document.getElementByTagName('ufo-alert')
alert.setAttribute('data-msg', 'Success!')
alert.setAttribute('data-type', 'success')
```

|Attribute | Options |
|----------|---------|
|data-msg  |The message you would like the alert to display
|data-type |one of [success, error, warning, system]
|flags | dark

