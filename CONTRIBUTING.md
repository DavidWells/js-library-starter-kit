# Contributing

To contribute to the project, please follow these steps:

1. Get approval for the idea by filing an issue and talking with me about the changes.
2. Fork the repo
3. Make a branch for your change
4. Run `npm install`
5. Run `npm start`
6. Make your changes
7. Test your changes (we have a githook that disallows anything less than 100% code coverage)
8. Run `git add -A` to add your changes (please don't add any changes to the `dist` directory).
9. Run `npm run commit` (**Do not** use `git commit`) - follow the prompts to create your git message
10. Push your changes with `git push`
11. Create the Pull Request
12. Get merged and celebrate 🎉 🎊!

# Suggested Commit Types

These are commit conventions to help us understand what you are helping with.

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
  generation