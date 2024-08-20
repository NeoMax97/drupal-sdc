# Drupal SDC

## Description

A playground to learn, explore and harness the power of Drupal SDC.

## Setup

- Run `ddev composer install` to install Composer packages

## Launch

- Run `ddev launch` to launch the site

## Drupal SDC

[Documentation](https://www.drupal.org/docs/develop/theming-drupal/using-single-directory-components)

To get started with Drupal SDC, head to the `drupal_sdc` theme folder.
There should be a `components` folder in there. If not, then please create one.

In that folder, create a folder with the name of your component. (e.g. `example`). Within that folder, add the following files, as per SDC documentation: `example.component.yml` and `example.twig`. Remember to use the same name for the folder and the files, so Drupal recognizes them.

The folder structure for any Drupal SDC component should look like this:

```
|drupal-sdc
|-components
|--example
|---example.component.yml
|---example.twig
|---example.css (optional)
|---example.js (optional)
```

**Note:** More relevant files like `example.css` and `example.js` can be added, but they're not required for the Drupal SDC component to work.

**Note:** Styling tools like PostCSS and Sass can be used as well, though they need some extra setup.
