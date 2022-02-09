# Incorporate performance budgets into your build process

Once you've defined a performance budget, it's time to set up the build process to keep track of it. There are a number of tools that let you define thresholds for chosen performance metrics and warn you if you go over budget. Find out how to choose one that best fits your needs and current setup. Ì†ΩÌµµÔ∏è‚Äç‚ôÄÔ∏è

## Lighthouse performance budgets

Lighthouse is an auditing tool that tests sites in a few key areas‚Äîperformance, accessibility, best practices and how well your site performs as a progressive web application.

The command line version of Lighthouse (v5+) supports setting performance budgets based on:

resource size
resource count
You can set budgets for any of the following resource types:

document
font
image
media
other
script
stylesheet
third-party
total
Budgets are set in a JSON file and after defining them the new "Over Budget" column tells you whether you're exceeding any limits.

Budgets section in Lighthouse report
"Budgets" section in Lighthouse report

## Webpack performance hints

Webpack is a powerful build tool for optimizing how your code is delivered to the users. It also supports setting performance budgets based on asset size.

Turn on performance hints in webpack.config.js to get command line warnings or errors when your bundle size grows over the limit. It's a great way to stay mindful about asset sizes throughout the development.

After the build step, webpack outputs a color-coded list of assets and their sizes. Anything over budget is highlighted in yellow.

Webpack output highlighting bundle.js
The highlighted bundle.js is bigger than your budget
The default limit for both assets and entry-points is 250 KB. You can set your own targets in the configuration file.

Webpack bundle size warning
Webpack bundle size warning ‚ö†Ô∏è
The budgets are compared against uncompressed asset sizes. Uncompressed JavaScript size is related to the execution time and big files can take a long time to execute, especially on mobile devices.

Compressed asset sizes affect the transfer time, which is very important on slow networks.

Webpack performance optimization recommendation
Bonus feature: webpack won‚Äôt only warn you, it will give you a recommendation on how to downsize your bundles. Ì†ΩÌ≤Å

## Bundlesize

Bundlesize is a simple npm package that tests asset size against a threshold you've set. It can run locally and integrate with your CI.

## Bundlesize CLI

Run bundlesize CLI by specifying a threshold and the file that you want to test.


bundlesize -f "dist/bundle.js" -s 170kB
Bundlesize outputs color-coded test results in one line.

Failing bundlesize CLI test
Failing bundlesize CLI test ‚ùå
Passing bundlesize CLI test
Passing bundlesize CLI test ‚úîÔ∏è

## Bundlesize for CI

You'll get the most value out of bundlesize if you integrate it with a CI to automatically enforce size limits on pull requests. If bundlesize test fails, that pull request is not merged. It works for pull requests on GitHub with Travis CI, CircleCI, Wercker, and Drone.

Bundlesize check status on GitHub
Bundlesize check status on GitHub
You may have a fast app today, but adding new code can often change this. Checking pull requests with bundlesize will help you avoid performance regressions. Bootstrap, Tinder, Trivago and many others use it to keep their budgets in check.

With bundlesize, it's possible to set thresholds for each file separately. This is especially useful if you are splitting a bundle in your application.

By default, it tests gzipped asset sizes. You can use the compression option to switch to brotli compression or turn it off completely.

## Lighthouse Bot

Lighthouse Bot
Lighthouse Bot integrates with Travis CI and enforces budgets based on any of the five Lighthouse audit categories. For example, a budget of 100 for your Lighthouse performance score. It's sometimes simpler to keep an eye on a single number than individual asset budgets and Lighthouse scores take many things into account.

Lighthouse scores Ì†ΩÌ≤Ø
Lighthouse scores Ì†ΩÌ≤Ø
Lighthouse Bot runs an audit after you deploy a site to staging server. In .travis.yml set budgets for particular Lighthouse categories with --perf, --a11y, --bp, --seo or --pwa options. Aim to stay in the green zone with scores of at least 90.

after_success:
  - ./deploy.sh # Deploy the PR changes to staging server
  - npm run lh -- --perf=96 https://staging.example.com # Run Lighthouse test
If the scores for a pull request on GitHub fall below the threshold you've set, Lighthouse Bot can prevent pull request from being merged. ‚õî

Lighthouse Bot check status on GitHub
Lighthouse Bot check status on GitHub
Lighthouse Bot then comments on your pull request with updated scores. This is a neat feature which encourages conversation about performance as code changes are happening.

Lighthouse reporting scores on pull request
Lighthouse reporting scores on pull request Ì†ΩÌ≤¨
If you find your pull request blocked by a poor Lighthouse score, run an audit with Lighthouse CLI or in Dev Tools. It generates a report with details about bottlenecks and hints for simple optimizations.

## Summary

Tool	CLI	CI	Summary
Lighthouse	‚úîÔ∏è	‚ùå	
Budgets for different types of resources based on their size or count.
webpack	‚úîÔ∏è	‚ùå	
Budgets based on sizes of assets generated by webpack.
Checks uncompressed sizes.
bundlesize	‚úîÔ∏è	‚úîÔ∏è	
Budgets based on sizes of specific resources.
Checks compressed or uncompressed sizes.
Lighthouse Bot	‚ùå	‚úîÔ∏è	
Budgets based on Lighthouse scores.

